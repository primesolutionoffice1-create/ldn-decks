# Environment Variables

This project uses `.env.local` for local secrets and production hosting environment variables for deployed secrets. Never commit real values.

`.env.local.example` is committed with placeholders only.

## Required And Optional Variables

| Variable | Scope | Required | Purpose |
|---|---|---:|---|
| `NEXT_PUBLIC_SITE_URL` | Public | Recommended | Canonical site URL used by public code and metadata. |
| `GEMINI_API_KEY` | Server-only | Optional | Gemini / Generative Language API server key. |
| `GOOGLE_CLOUD_PROJECT_ID` | Server-only | Optional | Google Cloud project identifier. |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Public | Optional | Browser Maps key, only if map UI is used. Must be restricted. |
| `DATAFORSEO_LOGIN` | Server-only | Optional | DataForSEO API login. |
| `DATAFORSEO_PASSWORD` | Server-only | Optional | DataForSEO API password. |
| `ADMIN_USERNAME` | Server-only | Recommended | Admin Basic Auth username. Defaults to `admin`. |
| `ADMIN_PASSWORD` | Server-only | Required for production admin | Admin Basic Auth password. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public | Optional | GA4 public measurement ID. |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_SEND_TO` | Public | Recommended | Google Ads lead conversion `send_to` destination for the confirmed `Submit lead form (1)` action. Current value: `AW-16888402136/IxFhCJHb_uUcENihgvU-`. |
| `GOOGLE_SEARCH_CONSOLE_SITE_URL` | Server-only | Optional | Search Console property URL for server-side tooling. |
| `GOOGLE_CRUX_API_KEY` | Server-only | Optional | CrUX / PageSpeed tooling key if used. |
| `AHREFS_API_TOKEN` | Server-only | Optional | Ahrefs rank tracker script token. |
| `EMAIL_USER` | Server-only | Required for forms | SMTP username. |
| `EMAIL_PASS` | Server-only | Required for forms | SMTP password or app password. |
| `EMAIL_TO` | Server-only | Recommended | Lead notification destination. |
| `GHL_INBOUND_WEBHOOK_URL` | Server-only | Optional | GHL lead webhook. |
| `GHL_API_KEY` | Server-only | Optional | GHL REST API key for Vapi flows. |
| `GHL_LOCATION_ID` | Server-only | Optional | GHL location ID. |
| `GHL_OWNER_USER_ID` | Server-only | Optional | GHL owner user ID for notes/tasks. |
| `GHL_SITE_VISIT_CALENDAR_ID` | Server-only | Optional | GHL calendar for site visits. |
| `VAPI_WEBHOOK_SECRET` | Server-only | Required for production Vapi | Shared Vapi webhook secret. |
| `OWNER_CELL` | Server-only | Optional | Owner SMS alert destination. |
| `TWILIO_SID` | Server-only | Optional | Twilio account SID. |
| `TWILIO_TOKEN` | Server-only | Optional | Twilio auth token. |
| `TWILIO_FROM` | Server-only | Optional | Twilio sender number. |
| `META_PIXEL_ID` | Server-only/public ID | Optional | Pixel ID. Not a secret, but use `NEXT_PUBLIC_META_PIXEL_ID` for browser use. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Public | Optional | Browser Meta Pixel ID. |
| `META_CAPI_ACCESS_TOKEN` | Server-only | Optional | Meta CAPI token. |
| `META_CAPI_TEST_EVENT_CODE` | Server-only | Optional | Meta CAPI test code. |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Public | Optional | Microsoft Clarity public project ID. |

## Server-Only Variables

Never prefix these with `NEXT_PUBLIC_`:

- `GEMINI_API_KEY`
- `GOOGLE_CLOUD_PROJECT_ID`
- `DATAFORSEO_LOGIN`
- `DATAFORSEO_PASSWORD`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `GOOGLE_SEARCH_CONSOLE_SITE_URL`
- `GOOGLE_CRUX_API_KEY`
- `AHREFS_API_TOKEN`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_TO`
- `GHL_INBOUND_WEBHOOK_URL`
- `GHL_API_KEY`
- `GHL_LOCATION_ID`
- `GHL_OWNER_USER_ID`
- `GHL_SITE_VISIT_CALENDAR_ID`
- `VAPI_WEBHOOK_SECRET`
- `OWNER_CELL`
- `TWILIO_SID`
- `TWILIO_TOKEN`
- `TWILIO_FROM`
- `META_CAPI_ACCESS_TOKEN`
- `META_CAPI_TEST_EVENT_CODE`

## Public Variables

Only use `NEXT_PUBLIC_` for values that are safe to appear in the browser bundle:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_SEND_TO`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

Public API keys must still be restricted by API and HTTP referrer.

## Local Setup

1. Copy `.env.local.example` to `.env.local`.
2. Replace placeholders with real values.
3. Never commit `.env.local`.
4. Restart `npm run dev` after changing env vars.

## Production Setup

1. Open the hosting provider project settings.
2. Add all required server-only variables as encrypted environment variables.
3. Add public `NEXT_PUBLIC_` variables only when browser code needs them.
4. Use separate values for production and preview when possible.
5. Redeploy after changing production env vars.

## Rotation

1. Generate a new credential in the provider console.
2. Restrict it before using it.
3. Add it to hosting env vars.
4. Deploy and verify.
5. Disable or delete the old credential only after verification.

## Security Warnings

- Do not commit `.env`, `.env.local`, `.env.production`, or secret exports.
- Do not paste secrets in documentation, issue trackers, screenshots, analytics tools, or browser code.
- Do not log provider responses that might contain request IDs, PII, auth details, or billing/account information.
- Do not store credentials in `localStorage` or `sessionStorage`.
