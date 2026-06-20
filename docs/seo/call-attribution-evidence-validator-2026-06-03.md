# Call Attribution Evidence Validator - 2026-06-03

## Summary

Added a local read-only evidence intake validator for the remaining Google Ads/GTM qualified-call attribution blocker.

## What Changed

- Added `docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv`.
- Added `scripts/validate-call-attribution-evidence.mjs`.
- Added `npm run measurement:call-attribution-evidence`.
- Integrated call attribution evidence status into `npm run scaling:readiness`.
- Integrated call attribution evidence validation into `npm run seo:weekly`.

## Validation

- `npm run measurement:call-attribution-evidence`: pass, `SAMPLE_ONLY`, 0 real rows, 0 errors.
- `npm run scaling:readiness`: pass, RED from 3 owner/external blockers; call attribution evidence status is `SAMPLE_ONLY`.
- `npm run seo:weekly`: pass and includes `Call attribution evidence validation | SAMPLE_ONLY · 0 real rows · 0 primary qualified-call · 0 errors`.

## Deploy Decision

No deployment is required because this batch changes local validation/reporting scripts and documentation only, not public rendered site code.
