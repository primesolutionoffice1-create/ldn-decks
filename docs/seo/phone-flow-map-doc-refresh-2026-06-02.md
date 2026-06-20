# Phone Flow Map Doc Refresh - 2026-06-02

## Scope

Updated internal tracking-audit diagrams for current phone-click coverage and payload. No website UI, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Documents Updated

- `docs/tracking-audit/CONVERSION-FLOW-MAP.md`
- `docs/tracking-audit/DUPLICATE-FIRE-CHECK.md`

## Changes

- Replaced the old `tracked 3 / untracked 40+` phone-link diagram.
- Documented current CallLink coverage expectation and active raw-tel scan status.
- Updated `phone_click` payload documentation:
  - `event_id`
  - `phone_number`
  - `link_text`
  - `cta_location`
  - page context
  - click IDs
  - UTM values
- Updated Meta CAPI note so ContactHome no longer appears to send `event_id: null`.
- Preserved the core warning that phone clicks are engagement events, not proof of qualified calls.

## Verification

- Targeted doc scan confirmed:
  - no `Tracked links (3)` / `Untracked links (40+)`
  - no `null for ContactHome`
  - no `called from 3 places only`
  - current `phone_number`, `link_text`, and `cta_location` references exist
- `git diff --check`: passed.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 517: Identified stale phone-click flow-map and duplicate-fire docs.
- Task 518: Updated CallLink coverage diagram.
- Task 519: Updated phone-click duplicate-fire payload and outcomes.
- Task 520: Updated ContactHome event-id note.
- Task 521: Verified targeted doc scan and whitespace check.
