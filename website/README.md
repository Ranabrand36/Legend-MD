# LEGEND-MD Website

Static pairing portal for the LEGEND-MD WhatsApp bot.

## Vercel deployment

1. Import the `Ranabrand36/Legend-MD` repository in Vercel.
2. Set **Root Directory** to `website`.
3. Deploy as a static site (no build command required).
4. Before production, edit `index.html` and replace `https://YOUR-OPTIKLINK-DOMAIN` with the public HTTPS URL of the Optiklink Node.js API.

## Backend contract

The page sends:
`POST /api/pair`
with JSON body:
`{"phone":"923001234567"}`

The backend must allow the deployed Vercel origin through CORS, validate/rate-limit requests, and return JSON containing a pairing code (for example `{"code":"1234-5678"}`). Never expose WhatsApp session files or credentials to the browser.
