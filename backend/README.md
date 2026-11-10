# LEGEND-MD Backend

Node.js 22 + Express + Baileys pairing API. Deploy this folder on your Optiklink Node.js server. The Vercel site remains a separate static frontend.

## 1. Install and start

In the Optiklink console, set the working/start directory to `backend` (or upload these files into the server's app directory), then run:

```bash
npm install
npm start
```

Use the host-provided port. The server reads `process.env.PORT` and binds to `0.0.0.0`.

## 2. Environment variables

Copy the values from `.env.example` into the Optiklink environment settings:

- `WEB_ORIGIN=https://legendmd.vercel.app`
- `PORT` should normally be supplied by Optiklink; do not hard-code a different port.
- `SESSION_DIR=./sessions`
- `PAIR_RATE_LIMIT=5`

If your Vercel domain changes, update `WEB_ORIGIN` to that exact origin.

## 3. Test

Open:

```
https://YOUR-OPTIKLINK-DOMAIN/health
```

Expected response:

```json
{"ok":true,"service":"legend-md-api"}
```

Then test the pairing endpoint from the website. It accepts a JSON body:

```json
{"phone":"923001234567"}
```

Successful response:

```json
{"code":"1234-5678","message":"Pairing code generated. Enter it in WhatsApp Linked Devices."}
```

The code is requested from WhatsApp through Baileys. It is not a fixed or fabricated code.

## Important security notes

- Never upload `.env`, `sessions/`, auth files, or WhatsApp credentials to GitHub.
- Keep the Optiklink storage persistent; losing the session directory may require linking again.
- Only connect a WhatsApp account you own or are authorized to manage.
- Never share pairing codes. Anyone who gets a code may be able to link a device.
- The API includes basic CORS and request-rate limits. This is a starter implementation, not a fully audited public multi-user service. Before opening it to everyone, add stronger abuse protection, monitoring, and per-user controls.
- Baileys is an unofficial WhatsApp Web client and may stop working if WhatsApp changes its protocol.
