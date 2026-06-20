# Phone Conversion Integrity Doc Refresh - 2026-06-02

## Scope

Updated the conversion-integrity documentation for the current phone-click payload. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Document Updated

- `docs/tracking-audit/ADS-CONVERSION-INTEGRITY.md`

## Changes

- Documented that `phone_click` now carries:
  - `event_id`
  - `phone_number`
  - `link_text`
  - `cta_location`
  - page context
  - click IDs
  - UTM values
- Documented that the phone number is centralized through `BUSINESS.telephone`.
- Preserved the requirement that `phone_click` stays secondary and is never used for bidding.

## Verification

- Targeted doc scan confirmed:
  - `phone_click` payload fields
  - `BUSINESS.telephone`
  - no stale hardcoded-phone note in the reviewed section
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 522: Identified stale phone-click conversion-integrity payload notes.
- Task 523: Updated secondary phone-click row with current payload fields.
- Task 524: Updated HIGH-4 current-state note for centralized phone context.
- Task 525: Verified targeted doc scan and whitespace check.
