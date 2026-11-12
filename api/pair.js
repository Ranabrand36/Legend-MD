import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { isIP } from "node:net";

const ORIGIN = "http://93.115.106.210:5256";
const REQUEST_AAD = "LEGEND-MD:PAIR-REQUEST:V1";
const RESPONSE_AAD = "LEGEND-MD:PAIR-RESPONSE:V1";
const DEFAULT_WEB_ORIGIN = "https://legendmd.vercel.app";

function getBridgeKey() {
  const hex = process.env.PAIRING_BRIDGE_KEY || "";
  if (!/^[a-f0-9]{64}$/i.test(hex)) return null;
  return Buffer.from(hex, "hex");
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
    throw new Error("Invalid encrypted response.");
  }

  const iv = Buffer.from(envelope.iv, "base64url");
  const tag = Buffer.from(envelope.tag, "base64url");
  const ciphertext = Buffer.from(envelope.data, "base64url");
  if (iv.length !== 12 || tag.length !== 16 || ciphertext.length > 10000) {
    throw new Error("Invalid encrypted response size.");
  }

  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAAD(Buffer.from(aad, "utf8"));
  decipher.setAuthTag(tag);
  return JSON.parse(Buffer.concat([
    decipher.update(ciphertext),
    decipher.final()
  ]).toString("utf8"));
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Pragma", "no-cache");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const allowedOrigin = process.env.WEB_ORIGIN || DEFAULT_WEB_ORIGIN;
  if (req.headers.origin !== allowedOrigin) {
    return res.status(403).json({ error: "This website origin is not allowed." });
  }

  const key = getBridgeKey();
  if (!key) {
    return res.status(503).json({ error: "Pairing security is not configured yet." });
  }

  const phone = String(req.body?.phone || "").replace(/\D/g, "");
  if (!/^\d{10,15}$/.test(phone)) {
    return res.status(400).json({ error: "Please enter a valid phone number with country code." });
  }

  const rawIp = String(req.headers["x-real-ip"] || "").trim();
  const forwardedIp = String(req.headers["x-forwarded-for"] || "")
    .split(",")[0].trim();
  const clientIp = isIP(rawIp) ? rawIp : (isIP(forwardedIp) ? forwardedIp : "unknown");

  const requestId = randomBytes(16).toString("hex");
  const envelope = sealJson({
    requestId,
    issuedAt: Date.now(),
    phone,
    clientIp
  }, key, REQUEST_AAD);

  try {
    const upstream = await fetch(ORIGIN + "/api/pair-secure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      },
      body: JSON.stringify(envelope),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(25000)
    });

    if (!upstream.ok) {
      return res.status(502).json({
        error: "The LEGEND-MD backend rejected the secure request. Check its bridge settings."
      });
    }

    const upstreamEnvelope = await upstream.json();
    const result = openJson(upstreamEnvelope, key, RESPONSE_AAD);

    if (result.requestId !== requestId ||
        !Number.isInteger(result.status) ||
        result.status < 200 || result.status > 599 ||
        !result.body || typeof result.body !== "object") {
      throw new Error("Invalid or mismatched backend response.");
    }

    return res.status(result.status).json(result.body);
  } catch {
    return res.status(502).json({
      error: "Could not securely reach the LEGEND-MD backend. Please try again later."
    });
  }
}
