# Admin SEO Dashboard

## Purpose

The admin area is for internal operations and SEO checks. It is not public marketing content and should not be indexed.

## Current Routes

Detected admin routes:

- `/admin/operations`

Requested but not currently present in the codebase:

- `/admin/seo`
- `/admin/seo/keywords`
- `/admin/seo/audit`
- `/admin/seo/backlinks`
- `/admin/seo/competitors`

## API Dependencies

Current related server/API routes:

- `/api/indexnow`
- `/api/web-vitals`
- `/api/csp-report`
- `/api/vapi/alert-owner`
- `/api/vapi/book-visit`
- `/api/vapi/call-completed`
- `/api/vapi/callback-request`
- `/api/vapi/check-availability`
- `/api/vapi/create-lead`
- `/api/vapi/escalate`
- `/api/vapi/lookup-zip`
- `/api/vapi/material-pricing`

No active Gemini API route was found.

No active DataForSEO API route was found.

## Required Environment Variables

Admin:

- `ADMIN_USERNAME`, optional, defaults to `admin`.
- `ADMIN_PASSWORD`, required in production.

SEO tooling, optional:

- `GOOGLE_SEARCH_CONSOLE_SITE_URL`
- `GOOGLE_CRUX_API_KEY`
- `AHREFS_API_TOKEN`
- `DATAFORSEO_LOGIN`
- `DATAFORSEO_PASSWORD`
- `GEMINI_API_KEY`

Automation and lead integrations:

- `VAPI_WEBHOOK_SECRET`
- `GHL_API_KEY`
- `GHL_LOCATION_ID`
- `GHL_OWNER_USER_ID`
- `GHL_SITE_VISIT_CALENDAR_ID`
- `OWNER_CELL`
- `TWILIO_SID`
- `TWILIO_TOKEN`
- `TWILIO_FROM`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_TO`

## Security Notes

- `/admin/*` is protected by Basic Auth in `src/proxy.js`.
- In production, missing `ADMIN_PASSWORD` blocks `/admin/*` with a `503` instead of exposing the route.
- Admin responses include noindex headers when auth blocks access.
- Admin routes have `robots` metadata where currently defined.
- Admin, API, and draft routes are excluded from `src/app/sitemap.js`.
- Admin, API, and draft routes are blocked in `src/app/robots.js`.
- Sensitive API calls should remain server-side only.
- Do not expose Gemini, DataForSEO, GHL, Twilio, email, Ahrefs, or Meta CAPI credentials to client components.

## How To Test

Local development:

1. Set `ADMIN_PASSWORD` in `.env.local`.
2. Run `npm run dev`.
3. Visit `/admin/operations`.
4. Confirm the browser asks for username/password.
5. Log in with `ADMIN_USERNAME` and `ADMIN_PASSWORD`.

Production-like local test:

1. Run `npm run build`.
2. Start with `ADMIN_PASSWORD=test-admin npm run start`.
3. Request `/admin/operations` without credentials and expect `401`.
4. Request `/admin/operations` with `admin:test-admin` and expect `200`.
5. Request `/robots.txt` and verify `/admin/`, `/api/`, and `/draft/` are disallowed.
6. Request `/sitemap.xml` and verify admin/API URLs are absent.

## Future SEO Dashboard Expansion

If the requested SEO dashboard pages are added later, build them as server-rendered admin routes under `/admin/seo/*`, keep provider calls in server routes or server modules, sanitize external API responses, and reuse the same admin auth gate.
