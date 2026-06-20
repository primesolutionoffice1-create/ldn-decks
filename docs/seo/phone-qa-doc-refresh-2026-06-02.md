# Phone QA Doc Refresh - 2026-06-02

## Scope

Updated internal QA/deploy documentation for the current phone-click payload and CallLink sweep status. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Documents Updated

- `docs/ads-tracking/QA-TEST-PLAN.md`
- `docs/ads-tracking/DEPLOY-CHECKLIST.md`

## Changes

- Removed stale notes saying two files still used raw `tel:` anchors.
- Updated phone-click QA criteria to check:
  - `phone_source`
  - `phone_number`
  - `link_text`
  - `cta_location`
  - `page_path`
  - click IDs and UTM values when present
- Added current raw-tel sweep expectation: active raw `href="tel:"` anchors should not exist in `src` outside `CallLink`.

## Verification

- Targeted doc scan confirmed:
  - `phone_number`
  - `link_text`
  - `cta_location`
  - current raw `href="tel:"` sweep language
  - no remaining excluded-file warning in the reviewed docs
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 512: Identified stale phone CTA QA documentation.
- Task 513: Updated QA phone-click pass criteria for current payload fields.
- Task 514: Removed obsolete excluded-file warning.
- Task 515: Updated deploy checklist phone-click verification.
- Task 516: Verified targeted doc scan and whitespace check.
