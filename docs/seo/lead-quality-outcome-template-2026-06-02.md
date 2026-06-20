# Lead Quality Outcome Template - 2026-06-02

## Scope

Created a practical lead-outcome template and runbook for collecting the first 5-10 real lead quality rows. No Google Ads, GTM, GA4, budgets, bidding, conversions, uploads, or external account settings were changed.

## Files Created

- `docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv`
- `docs/ads-tracking/LEAD-QUALITY-OUTCOME-ROWS-RUNBOOK-2026-06-02.md`
- `docs/ads-tracking/templates/README.md`
- `scripts/validate-lead-outcome-rows.mjs`
- `scripts/output/lead-outcome-validation-2026-06-02.json`
- `scripts/output/lead-outcome-validation-2026-06-02.md`

## Validation

- CSV row count: 3 example rows
- CSV columns: 31
- CSV consistency: pass
- `npm run measurement:lead-outcomes`: pass, `SAMPLE_ONLY`, 0 errors
- `git diff --check`: pass

## Gate Impact

This gives the operator a clean path to move lead-quality proof from missing to partial once real rows are filled. Scaling remains RED until qualified-call attribution and real outcome evidence are proven.

## Execution Ledger

- Task 566: Reviewed the existing Airtable lead schema.
- Task 567: Created a lightweight lead-quality outcome CSV template.
- Task 568: Created the lead-quality outcome rows runbook.
- Task 569: Validated CSV consistency.
- Task 570: Copied the template and runbook into Obsidian.
- Task 571: Added the lead-quality outcome template to the ads-tracking template index.
- Task 718: Added automated lead outcome CSV validation.
- Task 719: Added `measurement:lead-outcomes` as the local lead-quality proof gate.
- Task 720: Confirmed the sample template validates as `SAMPLE_ONLY` with 0 errors.
