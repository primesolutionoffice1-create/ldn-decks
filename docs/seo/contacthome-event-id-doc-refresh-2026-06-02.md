# ContactHome Event ID Doc Refresh - 2026-06-02

## Scope

Updated internal attribution documentation so ContactHome no longer appears to have the old `event_id=null` failure mode. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Documents Updated

- `docs/tracking-audit/ATTRIBUTION-RISKS.md`
- `docs/tracking-audit/CONVERSION-FLOW-MAP.md`
- `docs/tracking-audit/DUPLICATE-FIRE-CHECK.md`
- `docs/tracking-audit/ENHANCED-CONVERSIONS-PLAN.md`
- `docs/tracking-audit/TRACKING-FIX-QUEUE.md`

## Changes

- Marked ContactHome attribution as resolved locally.
- Updated `/thank-you` flow diagrams to show `eid=UUID`.
- Updated duplicate-fire scenario B to show ContactHome emitting `form_submit`, Meta CAPI, and `lead_confirmed` with the same UUID.
- Reframed website call tracking as qualified-call attribution, not recovery of untracked links.
- Marked the historical phone-link sweep item as resolved locally while keeping qualified-call scaling gate open.

## Verification

- Targeted doc scan confirmed no remaining stale:
  - `event_id=null` failure claims except the resolved-status sentence
  - `null for ContactHome`
  - `homepage conversions are not counted`
  - `40+ untracked tel` claims
  - `called from 3 places only`
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 526: Scanned docs for stale ContactHome attribution failure claims.
- Task 527: Updated attribution-risk status.
- Task 528: Updated conversion-flow diagrams and failure table.
- Task 529: Updated duplicate-fire ContactHome scenario.
- Task 530: Updated call-tracking plan and phone sweep queue status.
- Task 531: Verified targeted doc scan and whitespace check.
