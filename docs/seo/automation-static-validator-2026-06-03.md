# Automation Static Validator - 2026-06-03

## What Changed

- Added `scripts/validate-automation-stack-static.mjs`.
- Added `npm run automation:static`.
- Integrated automation static validation into `npm run seo:weekly`.
- Generated validation outputs:
  - `scripts/output/automation-static-validation-2026-06-03.json`
  - `scripts/output/automation-static-validation-2026-06-03.md`

## What The Gate Checks

- All 9 `/api/vapi/*` route files exist.
- Each Vapi route exports `POST`.
- Each Vapi route declares `runtime = 'nodejs'`.
- Each route uses `vapiHandler`, or explicitly verifies the Vapi signature for the custom end-of-call webhook.
- Pure routes remain free of GHL/Twilio dependencies:
  - `/api/vapi/lookup-zip`
  - `/api/vapi/material-pricing`
- GHL/Twilio-dependent routes retain soft-fallback behavior instead of hard-failing caller flow when credentials or external APIs are unavailable.
- Shared Vapi utilities still enforce `VAPI_WEBHOOK_SECRET` in production.
- Shared utilities still support Vapi's legacy, server-message, and OpenAI-compatible tool-call payload shapes.
- Pricing and service-area knowledge sources still include the expected material, complexity, county, and test-zip coverage.

## Validation Result

`npm run automation:static`:

```json
{
  "ok": true,
  "routes": 9,
  "errors": 0,
  "warnings": 0
}
```

`npm run seo:weekly` now includes:

```text
Automation static validation: ready - 9 routes - 0 errors - 0 warnings
```

## Runtime Scope

This is an offline/static validator. It does not require live GHL, Twilio, or Vapi credentials. Runtime checks for production auth, live GHL contact creation, appointment creation, call-completed note writing, and SMS delivery still require external credentials and should use `npm run automation:verify` with `BASE_URL` and `VAPI_WEBHOOK_SECRET`.

## Deploy Decision

No production deploy was needed for this batch. The change is an internal validation script, weekly reporting integration, and documentation/output artifacts. Public LDN Decks page content and live routing were not changed.
