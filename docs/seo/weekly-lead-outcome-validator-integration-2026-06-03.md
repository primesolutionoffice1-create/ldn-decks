# Weekly Lead Outcome Validator Integration - 2026-06-03

## Scope

Integrated the local lead outcome CSV validator into the weekly SEO aggregate report. No Google Ads, GTM, GA4, budgets, bidding, conversion actions, uploads, or external account settings were changed.

## Changes

- Added `Lead outcome validation` to `scripts/seo-weekly-report.mjs`.
- The weekly report now runs `node scripts/validate-lead-outcome-rows.mjs`.
- The weekly summary table now reports:
  - validation status
  - real row count
  - qualified row count
  - upload-eligible row count
  - validation error count
- The weekly operating checklist now reminds the operator to run `npm run measurement:lead-outcomes` after real CRM/owner rows are added.

## Verification

- `npm run seo:weekly`: pass
- Evidence anti-fabrication regression inside weekly: 22/22 checks passed
- Lead outcome validation inside weekly: `SAMPLE_ONLY`, 0 real rows, 0 errors
- Weekly report written to `../ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports/seo-weekly-2026-06-03.md`

## Gate Impact

This does not move scaling out of RED because no real lead outcome rows have been supplied yet. It does make the next proof step verifiable: once 5-10 real rows are filled, weekly reporting can show whether they are valid, partial, or upload-eligible.
