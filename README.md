# LEGEND-MD

LEGEND-MD contains a static Vercel pairing website and a separate Node.js + Baileys API for Optiklink.

## Frontend — Vercel

1. Import `Ranabrand36/Legend-MD` into Vercel.
2. Set **Root Directory** to the repository root (`.` or blank/default), not a subfolder.
3. Use **Other** as the framework preset. No build command is required.
4. The site entry point is the root `index.html`.
5. After the backend is deployed, edit `index.html` and replace `https://YOUR-OPTIKLINK-DOMAIN` with its public HTTPS URL.

## Backend — Optiklink

The backend source is in `backend/`. Follow [backend/README.md](backend/README.md) to install dependencies, set environment variables, start the server, and test its health endpoint.

## Pairing API contract

The website sends `POST /api/pair` with JSON:

```json
{"phone":"923001234567"}
```

The API responds with JSON containing a WhatsApp-generated pairing code:

```json
{"code":"1234-5678"}
```

## Security

Never commit `.env`, `sessions/`, WhatsApp auth files, or credentials. Only link WhatsApp accounts you own or are authorized to manage. The backend starter has basic CORS and rate limiting but needs further hardening before being opened as a public multi-user service.
