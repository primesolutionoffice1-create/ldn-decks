# Call Attribution Read-Only Runbook - 2026-06-02

## Scope

Created a read-only evidence runbook for the remaining Google Ads qualified-call attribution blocker. No Google Ads, GTM, GA4, budgets, bidding, conversion actions, call assets, or account settings were changed.

## File Created

- `docs/ads-tracking/CALL-ATTRIBUTION-READONLY-RUNBOOK-2026-06-02.md`

## What It Covers

- Google Ads phone conversion action evidence to collect.
- Call asset evidence to collect.
- GTM `phone_click` mapping checks.
- Pass criteria for moving the call-attribution gate from RED to YELLOW.
- Explicit no-change rules for read-only analysis.
- A copy/paste output template for the next Ads review.

## Scaling Gate

Scaling remains RED. The runbook defines the proof path but does not itself prove qualified-call attribution.

## Execution Ledger

- Task 562: Reviewed current call-attribution blocker language.
- Task 563: Created the read-only call attribution evidence runbook.
- Task 564: Added pass criteria for qualified-call attribution.
- Task 565: Copied the runbook to Obsidian.
