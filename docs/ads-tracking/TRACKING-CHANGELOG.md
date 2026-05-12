# Ads Tracking Changelog

All notable changes to the ads attribution + conversion tracking layer.

## [Unreleased] — 2026-05-11

### Added

**Click ID capture (`src/lib/clickIds.js` + `src/app/layout.js`)**
- New `src/lib/clickIds.js` exports `CLICK_ID_KEYS` and SSR-safe `getClickIds()`
- New inline `beforeInteractive` Script in `<head>` captures the 5 click IDs
  from URL params (`gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`) into
  90-day `SameSite=Lax` cookies on landing
- Runs before GTM init so click IDs are available when downstream tags load

**Conversion event reliability patch (`src/components/ThankYouTracking.jsx`)**
- New client component fires `lead_confirmed` dataLayer event on /thank-you
  mount, reading `event_id` from `?eid=` query param
- Wrapped under `<Suspense>` in `app/thank-you/page.js` (required for `useSearchParams`)
- /thank-you is only reached after `sendContactEmail` returns success — so
  `lead_confirmed` is proof-of-conversion (vs the pre-navigation
  `form_submit` event which can be dropped if lazy GTM hasn't loaded)

**Meta CAPI server-side forwarder (`src/server/metaCapi.js`)**
- New 134-LOC module SHA-256-hashes 9 match keys and POSTs Lead event to
  Meta Graph API v18 (`https://graph.facebook.com/v18.0/{pixel_id}/events`)
- Fire-and-forget call from `src/server/sendEmail.js` after the email send
- Gracefully no-ops when `META_PIXEL_ID` or `META_CAPI_ACCESS_TOKEN` missing
- Uses same `event_id` as client-side Pixel for 7-day Meta dedup

### Changed

**`src/lib/tracking.js`**
- `trackFormSubmit` signature extended with optional `clickIds` and `eventId`
  parameters; backwards-compatible defaults
- New `trackLeadConfirmed({ eventId })` helper for /thank-you firing
- dataLayer `form_submit` event now carries all 5 click IDs + `event_id`

**`src/components/ContactForm.jsx`**
- Imports `getClickIds`, `CLICK_ID_KEYS` from `@/lib/clickIds`
- On submit: reads click-ID cookies, appends to FormData, generates
  `crypto.randomUUID()` event_id (with `Date.now()` + Math.random fallback)
- Forwards event_id via `?eid=...` query param to `/thank-you` redirect
- Includes event_id in FormData (reaches server action + email template)
- Backwards-compatible: form fields and submit flow unchanged

**`src/server/sendEmail.js`**
- Imports `sendMetaLeadEvent` from `./metaCapi`
- Extracts the 5 click IDs + `event_id` from FormData
- Appends "Attribution (paid ad click)" footer block to lead notification
  email HTML when click IDs present
- Fires `sendMetaLeadEvent` after successful email send (non-blocking via
  `.catch(...)` — CAPI failure cannot break the form submission flow)

**`src/app/layout.js`**
- Inline `<Script id="click-id-capture" strategy="beforeInteractive">` added
  to `<head>` BEFORE the existing GTM init script
- No removal or modification of existing tags (GTM, Ahrefs Analytics,
  Vercel Speed Insights, etc.)

**`src/app/thank-you/page.js`**
- Imports `Suspense` from React and `ThankYouTracking` component
- Renders `<Suspense fallback={null}><ThankYouTracking /></Suspense>` inside
  the existing `ThankYouPage` layout — no visible UI change
- `robots: { index: false, follow: true }` metadata preserved

### Security

- All PII passed to Meta CAPI is SHA-256-hashed server-side; raw PII never
  leaves the lead's session boundary
- Cookies use `SameSite=Lax` (restricts cross-site leakage)
- 90-day cookie expiry matches Google Ads default attribution window; not
  retained longer than needed for attribution purposes
- Consent Mode v2 in `layout.js` already defaults to denied for EU/UK/CH
  visitors; capture script is compliant with this gate for US-only campaigns

### Architecture notes

All three layers share one `event_id` (`crypto.randomUUID`) for end-to-end
deduplication across:
- Client-side Pixel events (fired by GTM tags on `form_submit` + `lead_confirmed`)
- Server-side Meta CAPI Lead event (fired by `sendMetaLeadEvent`)
- Future Google Ads Conversions API uploads (architecture-ready)

Meta dedupes within 7 days; Google Ads within 24h via Transaction ID mapping.

### Match-rate impact

| Path | Match rate (typical) |
|---|---|
| Client-side Meta Pixel only | ~55-65% |
| Client Pixel + lead_confirmed redundant | ~70-75% |
| Client Pixel + lead_confirmed + server CAPI (this PR) | **~90-95%** |

### Risks documented

See `ROLLBACK-PLAN.md` for failure modes and rollback procedures.
See `QA-TEST-PLAN.md` for validation tests before production deploy.
See `ENV-SETUP.md` for required and optional env vars.
