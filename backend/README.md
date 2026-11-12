# LEGEND-MD Backend

Node.js 22 + Express + Baileys pairing API. Deploy this folder on your existing Optiklink Node.js server. The website remains on Vercel.

## 1. Install and start

Keep the existing Optiklink server and its persistent storage. Upload the updated files from this folder, preserving the `sessions/` directory. Restart the Node.js server using the panel's normal restart control.

The app reads the host-provided `PORT` and binds to `0.0.0.0`.

## 2. Set the shared bridge key

Create one random 32-byte (64-character hexadecimal) secret. Set the exact same value in both places:

- Optiklink server environment: `PAIRING_BRIDGE_KEY`
- Vercel project environment: `PAIRING_BRIDGE_KEY`

Never put the real key in GitHub, source code, screenshots, or logs. Keep `WEB_ORIGIN=https://legendmd.vercel.app` on Optiklink. If the website's production domain changes, update `WEB_ORIGIN` in both environments.

The bridge uses AES-256-GCM with separate request/response authentication labels. The phone number and pairing-code response are encrypted before crossing the plain-HTTP Optiklink connection. Requests include a short expiry and one-time request ID to reject replayed requests.

## 3. Vercel

Vercel deploys the root `api/pair.js` file as a Node.js Function. Set the same `PAIRING_BRIDGE_KEY` environment variable in the Vercel project for Production (and Preview only when you deliberately test Preview). Redeploy after changing environment variables.

The website calls its own HTTPS origin at `/api/pair`; do not put the Optiklink IP or HTTP address into `index.html`.

## 4. Test

Open the production website and request a pairing code for a WhatsApp account you own. The API health route remains available at:

```
http://93.115.106.210:5256/health
```

Expected health response:

```json
{"ok":true,"service":"legend-md-api"}
```

The plaintext `POST /api/pair` endpoint has been removed. Pairing is accepted only through the encrypted `/api/pair-secure` bridge route. The Vercel Function must be configured with the shared key before pairing can work.

## Important security notes

- Never upload `.env`, `sessions/`, auth files, or WhatsApp credentials to GitHub.
- Keep the Optiklink storage persistent; losing the session directory may require linking again.
- Never share pairing codes. Anyone who gets a code may be able to link a device.
- Only link accounts you own or are authorized to manage.
- This is a safer transport design, but it is not a fully audited public multi-user service. Before opening it to everyone, add stronger abuse protection, monitoring, and account-level controls.
- Baileys is an unofficial WhatsApp Web client and may stop working if WhatsApp changes its protocol.
