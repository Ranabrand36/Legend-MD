import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import pino from "pino";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { useMultiFileAuthState, makeWASocket, DisconnectReason } from "@whiskeysockets/baileys";

const app = express();
const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const PORT = Number(process.env.PORT) || 3000;
const SESSION_DIR = path.resolve(process.env.SESSION_DIR || "./sessions");
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
    // Requests without an Origin header are server-to-server/health checks.
    if (!origin || allowedOrigins.has(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS."));
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json({ limit: "10kb" }));

const pairLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: Number(process.env.PAIR_RATE_LIMIT) || 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many pairing requests. Please wait 15 minutes and try again." }
});

const activeSockets = new Map();
const lastRequests = new Map();
const PHONE_COOLDOWN_MS = 60 * 1000;

app.get("/", (_req, res) => {
  res.json({ name: "LEGEND-MD API", status: "online" });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "legend-md-api" });
});

app.post("/api/pair", pairLimiter, async (req, res) => {
  const phone = String(req.body?.phone || "").replace(/\D/g, "");
  if (!/^\d{10,15}$/.test(phone)) {
    return res.status(400).json({ error: "Enter a valid phone number with country code (10–15 digits)." });
  }

  const now = Date.now();
  const previous = lastRequests.get(phone) || 0;
  if (now - previous < PHONE_COOLDOWN_MS) {
    return res.status(429).json({ error: "Please wait one minute before requesting another code for this number." });
  }
  if (activeSockets.has(phone)) {
    return res.status(409).json({ error: "A pairing session is already active for this number. Complete linking in WhatsApp or wait a moment." });
  }

  lastRequests.set(phone, now);
  const sessionPath = path.join(SESSION_DIR, phone);

  try {
    await mkdir(sessionPath, { recursive: true });
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const sock = makeWASocket({
      auth: state,
      printQRInTerminal: false,
      logger: logger.child({ phone: phone.slice(-4) }),
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

    // Baileys requests the code from WhatsApp; this is not a locally invented code.
    const code = await sock.requestPairingCode(phone);
    return res.json({
      code: String(code).match(/.{1,4}/g)?.join("-") || code,
      message: "Pairing code generated. Enter it in WhatsApp Linked Devices."
    });
  } catch (error) {
    activeSockets.delete(phone);
    logger.error({ err: error, phoneLast4: phone.slice(-4) }, "Pairing request failed");
    return res.status(502).json({ error: "WhatsApp could not generate a pairing code. Check the number and try again later." });
  }
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
