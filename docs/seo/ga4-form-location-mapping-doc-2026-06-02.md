# GA4 Form Location Mapping Doc - 2026-06-02

## Scope

Updated internal GTM/GA4 mapping guidance after adding `form_location` to lead events. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Document Updated

- `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md`

## Changes

- Added `form_location` to the recommended GA4 event parameter mapping table.
- Kept lead-quality parameters in the same table:
  - `lead_budget_range`
  - `lead_material_interest`
  - `lead_hoa_permit_status`

## Verification

- Targeted doc scan confirmed:
  - `form_location`
  - `lead_budget_range`
  - `lead_material_interest`
  - `lead_hoa_permit_status`
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 502: Identified missing `form_location` in GA4 mapping guidance.
- Task 503: Added `form_location` to the mapping table.
- Task 504: Verified targeted doc scan and whitespace check.
