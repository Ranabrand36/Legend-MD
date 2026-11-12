# LEGEND-MD

LEGEND-MD contains a static Vercel pairing website and a separate Node.js + Baileys API hosted on Optiklink.

## Architecture

- Website: static `index.html` on Vercel.
- Browser API: `/api/pair`, served by the Vercel Node.js Function in `api/pair.js`.
- WhatsApp service: Express + Baileys on Optiklink at the configured host port.
- Transport protection: the Vercel Function and Optiklink backend share a 32-byte key and exchange AES-256-GCM encrypted request/response envelopes. This keeps the phone number and returned pairing code encrypted across the plain-HTTP hop.

## Deployment

1. Keep the Vercel project's root directory at the repository root.
2. Deploy the repository root as a static site plus the `api/pair.js` Node.js Function.
3. Deploy the updated `backend/` files to the existing Optiklink Node.js server.
4. Set the same `PAIRING_BRIDGE_KEY` environment variable in the Vercel project and Optiklink server. It must be 64 hexadecimal characters (32 random bytes). Never commit the real value.
5. Keep `WEB_ORIGIN=https://legendmd.vercel.app` on Optiklink and in Vercel; change it in both places only if the production website origin changes.
6. Redeploy Vercel after configuring its environment variables. Restart the Optiklink server after uploading the backend changes and setting its variable.

## Pairing API contract

The browser sends `POST /api/pair` to the same HTTPS origin with:

```json
{"phone":"923001234567"}
```

Vercel encrypts the phone number and forwards the sealed envelope to Optiklink. Optiklink encrypts the result before returning it. The browser receives only the normal JSON response from the HTTPS function.

## Security

- The public plaintext `POST /api/pair` route is disabled in the updated backend.
- Do not expose the pairing bridge key or commit `.env`, `sessions/`, WhatsApp auth files, or credentials.
- Never share pairing codes. Only link accounts you own or are authorized to manage.
- The existing backend is a starter implementation and still needs session restoration/reconnect management and stronger multi-user controls before it is opened publicly.
