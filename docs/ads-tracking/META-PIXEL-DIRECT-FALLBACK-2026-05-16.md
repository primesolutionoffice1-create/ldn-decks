# Meta Pixel Direct Fallback - 2026-05-16

## Why this changed

Meta Events Manager showed dataset `leads` ID `695923313293515` with 0 total
events, never received events, no event activity, and no integrations while
Meta Ads was spending against link-click results.

The existing repo already had:

- `lead_confirmed` fired from `/thank-you`
- shared `event_id` across form submit, thank-you, and Meta CAPI scaffolding
- server-side Meta CAPI helper gated behind `META_PIXEL_ID` and
  `META_CAPI_ACCESS_TOKEN`

The missing practical piece was a browser-side Meta Pixel event reaching Events
Manager without relying on an unpublished or missing GTM tag.

## What changed

- Added direct Meta Pixel base script in `src/app/layout.js`.
- Pixel ID defaults to `695923313293515`, with override support via
  `NEXT_PUBLIC_META_PIXEL_ID` or `META_PIXEL_ID`.
- Added `PageView` tracking on all pages.
- Added `Lead` browser event from `trackLeadConfirmed()` with Meta `eventID`
  set from the existing lead `event_id`.
- Updated Report-Only CSP allowlist for `connect.facebook.net` and
  `facebook.com`.

## Verification

- `npm run lint` passed.
- `npm run build` passed.
- Build output contains `meta-pixel`, `fbq('init','695923313293515')`, and
  noscript PageView fallback.
- Local Chrome check loaded
  `http://localhost:3000/thank-you?eid=codex-meta-test-2026-05-16` successfully.

## Still required

- Deploy the code.
- Open Events Manager Test Events or Overview after deploy.
- Visit live `https://ldndecks.com/` and submit one real test lead.
- Confirm received `PageView` and `Lead` events.
- If CAPI is enabled later, set `META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN` in
  production env and verify browser/server dedup with matching event IDs.
