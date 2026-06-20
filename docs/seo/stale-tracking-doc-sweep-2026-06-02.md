# Stale Tracking Doc Sweep - 2026-06-02

## Scope

Removed stale tracking-audit statements that no longer matched the current Loudoun Decks implementation. No website behavior, Google Ads, GTM, GA4, budgets, bidding, conversions, or external account settings were changed.

## Files Updated

- `docs/tracking-audit/ENHANCED-CONVERSIONS-PLAN.md`
- `docs/tracking-audit/DUPLICATE-FIRE-CHECK.md`
- `docs/tracking-audit/TRACKING-AUDIT.md`
- `docs/tracking-audit/TRACKING-FIX-QUEUE.md`

## Changes

- Updated the Enhanced Conversions plan so ContactHome is no longer listed as missing click IDs or `event_id`.
- Updated the duplicate-fire matrix so ContactHome shows `/thank-you?eid=UUID` with a populated `event_id`.
- Updated the duplicate-fire `form_submit` matrix so ContactHome is shown as firing through the shared `useLeadSubmit` hook.
- Removed the stale low-severity “hardcoded phone number” item from the audit summary.
- Rewrote phone fix queue item #2 as a resolved current implementation through `CallLink`, `BUSINESS.telephone`, and enriched `trackPhoneClick` context.
- Confirmed raw `tel:` generation in `src` is centralized to `CallLink.jsx`.

## Verification

- Targeted scan found no active stale claims for:
  - `ContactHome doesn't capture`
  - `ContactHome submit -> /thank-you (no eid)`
  - `event_id is null`
  - `40+ untracked`
  - `hardcoded phone`
  - `no honeypot`
- Remaining `company_website` mentions are intentional legacy aliases accepted by server-side honeypot filtering.
- `git diff --check` passed for the edited files.

## Scaling Gate

Scaling remains RED. Documentation now matches local implementation, but Ads-side qualified-call attribution, GTM/Ads dedup proof, consent/CMP configuration, and real lead outcome proof are still external gating items.

## Execution Ledger

- Task 546: Scanned tracking and ads docs for stale ContactHome, honeypot, phone, and lead-quality claims.
- Task 547: Updated Enhanced Conversions current-state and missing-items tables.
- Task 548: Updated Duplicate Fire ContactHome `event_id` row.
- Task 549: Removed stale hardcoded-phone audit summary entry.
- Task 550: Rewrote phone fix queue item #2 as resolved current implementation.
- Task 551: Verified raw `tel:` centralization and stale-claim cleanup.
- Task 552: Corrected the Duplicate Fire `form_submit` ledger for ContactHome.
