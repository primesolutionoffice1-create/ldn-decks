# Form Lead Quality QA Doc Refresh - 2026-06-02

## Scope

Updated internal QA/deploy documentation for current form lead-quality payloads. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Documents Updated

- `docs/ads-tracking/QA-TEST-PLAN.md`
- `docs/ads-tracking/DEPLOY-CHECKLIST.md`

## Changes

- Added QA criteria for:
  - `form_location`
  - `budget_range`
  - `material_interest`
  - `hoa_permit_status`
  - homepage hidden `state: 'VA'`
- Added deployment checklist coverage for homepage `form_submit` lead-quality fields.

## Verification

- Targeted doc scan confirmed:
  - `form_location`
  - `homepage_contact_form`
  - `budget_range`
  - `material_interest`
  - `hoa_permit_status`
  - `state: 'VA'`
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 532: Identified missing QA checks for lead-quality form payload.
- Task 533: Added form-location and lead-quality checks to QA test plan.
- Task 534: Added homepage form payload checks to deploy checklist.
- Task 535: Verified targeted doc scan and whitespace check.
