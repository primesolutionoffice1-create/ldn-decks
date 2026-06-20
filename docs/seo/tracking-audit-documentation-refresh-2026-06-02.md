# Tracking Audit Documentation Refresh - 2026-06-02

## Scope

Updated internal tracking documentation to reflect current local implementation. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Documents Updated

- `docs/tracking-audit/TRACKING-AUDIT.md`
- `docs/tracking-audit/ENHANCED-CONVERSIONS-VERIFICATION.md`

## Changes

- Marked the old homepage attribution finding as resolved.
- Replaced outdated text saying the homepage form does not call `trackFormSubmit`.
- Documented that homepage now uses the shared `useLeadSubmit()` pipeline.
- Documented homepage support for:
  - click IDs
  - UTM values
  - `event_id`
  - `/thank-you?eid=...`
  - lead-quality fields
- Updated Enhanced Conversions/GA4 mapping guidance to include:
  - `lead_budget_range`
  - `lead_material_interest`
  - `lead_hoa_permit_status`
- Updated form data notes to show ContactHome now carries city plus hidden `state=VA`.

## Verification

- Targeted scan confirmed:
  - no remaining `Homepage form is invisible` heading in the reviewed tracking docs
  - `RESOLVED-1` exists
  - `Lead quality reporting fields` exists
  - new GA4 parameter rows exist
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 471: Scanned tracking docs for stale homepage attribution language.
- Task 472: Updated the homepage attribution audit item to resolved.
- Task 473: Added current homepage dataLayer and click-ID status.
- Task 474: Updated Enhanced Conversions guidance for lead-quality fields.
- Task 475: Verified targeted doc scan and whitespace check.
