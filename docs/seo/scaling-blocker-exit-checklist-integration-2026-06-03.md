# Scaling Blocker Exit Checklist Integration - 2026-06-03

## Summary

Added an automated exit checklist for the three current P0 scaling blockers so LDN Decks has explicit evidence requirements, commands, and expected status changes before any RED/YELLOW/GREEN reclassification.

## What Changed

- Added `scripts/generate-scaling-blocker-exit-checklist.mjs`.
- Added `scripts/validate-scaling-blocker-exit-checklist.mjs`.
- Added `npm run scaling:blocker-exit`.
- Added `npm run scaling:blocker-exit:validate`.
- Integrated generation and validation into `npm run seo:weekly`.

## Current Result

- Scaling status: RED.
- Blocker exits: 3.
- Local blockers: 0.
- Owner/external blockers: 3.

## Covered P0 Exits

- `google-call-attribution`: requires real Google Ads/GTM read-only evidence rows, clean diagnostics, qualified-call duration threshold, and no `phone_click` primary bidding risk.
- `lead-outcome-rows`: requires at least 5 real lead outcome rows with 0 validation errors.
- `owner-proof-evidence`: requires owner-filled proof packets, proof preflight without blocked/proof-incomplete pages, and no expected-blocked prepublish state.

## Validation

- `npm run scaling:blocker-exit`: pass, 3 blocker exits generated.
- `npm run scaling:blocker-exit:validate`: pass, 3 blockers, 0 errors, 0 warnings.
- `npm run seo:weekly`: pass and includes both exit checklist rows.

## Deploy Decision

No deployment is required because this batch changes local validation/reporting scripts and documentation only, not public rendered site code.
