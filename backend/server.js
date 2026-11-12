import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { isIP } from "node:net";
import { useMultiFileAuthState, makeWASocket, DisconnectReason } from "@whiskeysockets/baileys";

const backendDir = path.dirname(fileURLToPath(import.meta.url));
const envFile = path.join(backendDir, ".env");
if (existsSync(envFile)) process.loadEnvFile(envFile);

const app = express();
const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const PORT = Number(process.env.PORT) || 3000;
const SESSION_DIR = path.resolve(process.env.SESSION_DIR || "./sessions");
const BRIDGE_KEY_HEX = process.env.PAIRING_BRIDGE_KEY || "";
const REQUEST_AAD = "LEGEND-MD:PAIR-REQUEST:V1";
const RESPONSE_AAD = "LEGEND-MD:PAIR-RESPONSE:V1";
const allowedOrigins = new Set(
  (process.env.WEB_ORIGIN || "https://legendmd.vercel.app")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
);

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS."));
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json({ limit: "10kb" }));

const activeSockets = new Map();
const lastRequests = new Map();
const requestWindows = new Map();
const usedRequestIds = new Map();
const PHONE_COOLDOWN_MS = 60 * 1000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const REQUEST_ID_TTL_MS = 2 * 60 * 1000;
const MAX_REQUESTS_PER_IP = Math.max(1, Number(process.env.PAIR_RATE_LIMIT) || 5);

function getBridgeKey() {
  if (!/^[a-f0-9]{64}$/i.test(BRIDGE_KEY_HEX)) return null;
  return Buffer.from(BRIDGE_KEY_HEX, "hex");
}

function sealJson(value, key, aad) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  cipher.setAAD(Buffer.from(aad, "utf8"));
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(value), "utf8"),
    cipher.final()
  ]);
  return {
    v: 1,
    iv: iv.toString("base64url"),
    tag: cipher.getAuthTag().toString("base64url"),
    data: ciphertext.toString("base64url")
  };
}

function openJson(envelope, key, aad) {
  if (!envelope || envelope.v !== 1 ||
      typeof envelope.iv !== "string" ||
      typeof envelope.tag !== "string" ||
      typeof envelope.data !== "string" ||
      envelope.data.length > 14000) {
    throw new Error("Invalid encrypted envelope.");
  }

  const iv = Buffer.from(envelope.iv, "base64url");
  const tag = Buffer.from(envelope.tag, "base64url");
  const ciphertext = Buffer.from(envelope.data, "base64url");
  if (iv.length !== 12 || tag.length !== 16 || ciphertext.length > 10000) {
    throw new Error("Invalid encrypted envelope size.");
  }

  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAAD(Buffer.from(aad, "utf8"));
  decipher.setAuthTag(tag);
  const plaintext = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final()
  ]).toString("utf8");
  return JSON.parse(plaintext);
}

function sendEncrypted(res, key, requestId, status, body) {
  res.set("Cache-Control", "no-store, max-age=0");
  return res.status(200).json(
    sealJson({ requestId, status, body }, key, RESPONSE_AAD)
  );
}

function allowClientRequest(clientIp) {
  const now = Date.now();
  const previous = requestWindows.get(clientIp);

  if (!previous || now - previous.startedAt >= RATE_WINDOW_MS) {
    requestWindows.set(clientIp, { startedAt: now, count: 1 });
    return true;
  }
  if (previous.count >= MAX_REQUESTS_PER_IP) return false;
  previous.count += 1;
  return true;
}

function cleanExpiredRequestIds(now) {
  for (const [id, createdAt] of usedRequestIds) {
    if (now - createdAt > REQUEST_ID_TTL_MS) usedRequestIds.delete(id);
  }
  if (usedRequestIds.size > 10000) {
    const oldest = [...usedRequestIds.entries()]
      .sort((a, b) => a[1] - b[1])
      .slice(0, usedRequestIds.size - 8000);
    for (const [id] of oldest) usedRequestIds.delete(id);
  }
}

async function createPairingCode(phone) {
  const now = Date.now();
  const previous = lastRequests.get(phone) || 0;

  if (now - previous < PHONE_COOLDOWN_MS) {
    return {
      status: 429,
      body: { error: "Please wait one minute before requesting another code for this number." }
    };
  }
  if (activeSockets.has(phone)) {
    return {
      status: 409,
      body: { error: "A pairing session is already active for this number. Complete linking in WhatsApp or wait a moment." }
    };
  }

  lastRequests.set(phone, now);
  const sessionPath = path.join(SESSION_DIR, phone);

  try {
    await mkdir(sessionPath, { recursive: true });
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const sock = makeWASocket({
      auth: state,
      printQRInTerminal: false,
      logger: logger.child({ phoneLast4: phone.slice(-4) }),
      markOnlineOnConnect: false,
      syncFullHistory: false
    });

    activeSockets.set(phone, sock);
    sock.ev.on("creds.update", saveCreds);
    sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {
      if (connection === "open") {
        logger.info({ phoneLast4: phone.slice(-4) }, "WhatsApp session connected");
      }
      if (connection === "close") {
        activeSockets.delete(phone);
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        if (statusCode === DisconnectReason.loggedOut) {
          logger.warn({ phoneLast4: phone.slice(-4) }, "WhatsApp session logged out");
        }
      }
    });

    const code = await sock.requestPairingCode(phone);
    return {
      status: 200,
      body: {
        code: String(code).match(/.{1,4}/g)?.join("-") || code,
        message: "Pairing code generated. Enter it in WhatsApp Linked Devices."
      }
    };
  } catch (error) {
    activeSockets.delete(phone);
    logger.error({ err: error, phoneLast4: phone.slice(-4) }, "Pairing request failed");
    return {
      status: 502,
      body: { error: "WhatsApp could not generate a pairing code. Check the number and try again later." }
    };
  }
}

app.get("/", (_req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ name: "LEGEND-MD API", status: "online" });
});

app.get("/health", (_req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ ok: true, service: "legend-md-api" });
});

/*
 * Pairing requests are accepted only as authenticated AES-256-GCM envelopes
 * from the Vercel function. The plaintext /api/pair route is intentionally
 * removed so a pairing code cannot be fetched over the public HTTP port.
 */
app.post("/api/pair-secure", async (req, res) => {
  const key = getBridgeKey();
  if (!key) {
    return res.status(503).json({ error: "Pairing bridge is not configured." });
  }

  let payload;
  try {
    payload = openJson(req.body, key, REQUEST_AAD);
  } catch {
    return res.status(400).json({ error: "Invalid encrypted request." });
  }

  const now = Date.now();
  const requestId = String(payload?.requestId || "");
  const phone = String(payload?.phone || "").replace(/\D/g, "");
  const issuedAt = Number(payload?.issuedAt);
  const suppliedIp = String(payload?.clientIp || "");
  const clientIp = isIP(suppliedIp) ? suppliedIp : "unknown";

  if (!/^[a-f0-9]{32}$/i.test(requestId) ||
      !Number.isFinite(issuedAt) ||
      now - issuedAt > 90 * 1000 ||
      issuedAt - now > 30 * 1000 ||
      !/^\d{10,15}$/.test(phone)) {
    return res.status(400).json({ error: "Invalid or expired pairing request." });
  }

  cleanExpiredRequestIds(now);
  if (usedRequestIds.has(requestId)) {
    return sendEncrypted(res, key, requestId, 409, {
      error: "This request has already been processed. Please try again."
    });
  }
  usedRequestIds.set(requestId, now);

  if (!allowClientRequest(clientIp)) {
    return sendEncrypted(res, key, requestId, 429, {
      error: "Too many pairing requests. Please wait 15 minutes and try again."
    });
  }

  const result = await createPairingCode(phone);
  return sendEncrypted(res, key, requestId, result.status, result.body);
});

app.use((error, _req, res, _next) => {
  if (error?.message === "Origin is not allowed by CORS.") {
    return res.status(403).json({ error: "This website origin is not allowed." });
  }
  logger.error({ err: error }, "Unhandled API error");
  return res.status(500).json({ error: "Internal server error." });
});

await mkdir(SESSION_DIR, { recursive: true });
app.listen(PORT, "0.0.0.0", () => {
  logger.info({ port: PORT }, "LEGEND-MD API is listening");
});
