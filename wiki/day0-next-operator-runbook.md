---
brain_schema: ads-brain.v1
type: runbook
platform: google
title: "Day 0 Next Operator Runbook"
created: "2026-05-16"
updated: "2026-05-16"
status: ready_for_operator
sources:
  - "wiki/sources/Day 0 Closure Execution 2026-05-16.md"
  - "wiki/sources/Google Ads Tracking Settings Research 2026-05-16.md"
  - "wiki/day0-blockers.md"
---

# Day 0 Next Operator Runbook

This is the exact next sequence after the 2026-05-16 read-only pass. Do not change bids, budgets, negatives, campaign settings, or keyword targeting while running this.

## Phase 1 — GTM Preview proof

Goal: close B-01 and B-02.

1. Open GTM Preview for `https://ldndecks.com/?gclid=ECTEST1`.
2. Submit a real test lead with harmless test details.
3. In the Preview event timeline, click `form_submit` and confirm the Google Ads Form Lead tag did NOT fire.
4. Click `lead_confirmed` and confirm `Google Ads - Form Lead Conversion` DID fire.
5. Open the fired tag output and confirm `transaction_id` equals the `event_id` from the same submission.
6. Save screenshots:
   - `_attachments/day0-evidence/01-after-trigger-preview.png`
   - `_attachments/day0-evidence/02-preview-output.png`

PASS only if the lead tag fires once on `lead_confirmed` and uses the same UUID as `event_id`.

## Phase 2 — Enhanced Conversions hash proof

Goal: close B-05 technical proof.

1. Keep GTM Preview open.
2. Open DevTools > Network.
3. Submit a test lead with:
   - email: `enhanced-test@example.com`
   - phone: `571-555-1234`
   - first/last: `TestFirst TestLast`
   - zip: `20148`
4. Filter Network for Google Ads conversion requests.
5. Inspect payload/query fields.
6. Confirm email, phone, name, zip/country fields are SHA-256-looking 64-char hex hashes.
7. Confirm plaintext values do not appear in outbound Google Ads requests.
8. Save screenshots/files:
   - `_attachments/day0-evidence/05-network-tab-hashed.png`
   - `_attachments/day0-evidence/05-gtm-preview-upd-output.png`
   - `_attachments/day0-evidence/05-em-hash-sanity.txt`

PASS only if there is zero plaintext PII in Google Ads outbound conversion requests.

## Phase 3 — Google Ads conversion action settings

Goal: close B-03 and B-04 evidence.

1. Open Google Ads > Goals > Conversions > Summary.
2. Open the intended website lead action.
3. Confirm settings:
   - Count: One
   - Included/account goal: Yes for final lead only
   - Click-through conversion window: target 90 days unless Google UI or strategy requires a documented exception
   - Duplicate handling: transaction/order ID dedup enabled where available
   - Attribution: Data-driven if available
4. Save screenshot:
   - `_attachments/day0-evidence/03-lead-action-settings.png`
   - `_attachments/day0-evidence/04-lead-action-config.png`

Do not mark PASS unless the exact action being used by GTM is the one inspected.

## Phase 4 — Conversion goal cleanup

Goal: close B-06. This is a live account setting change and needs operator approval/action.

Current observed Primary + Included actions include multiple sources. Target state:

Primary / included:

- final website form lead from `lead_confirmed`
- `Qualified Call (Ads) - 60s`, if current call threshold remains the chosen business outcome

Secondary / not included:

- `form_start`
- `phone_click`
- GA4 imported form/contact/page events
- Google-hosted lead form unless intentionally kept as a separate final lead channel
- locked legacy Smart Campaign call action if not controllable/current

After cleanup, save:

- `_attachments/day0-evidence/06-conversions-after-cleanup.png`

## Phase 5 — Offline conversion loop

Goal: make Smart Bidding quality-safe later, not today.

Choose the source of truth:

- Google Sheet
- Jobber
- HubSpot/Pipedrive
- other CRM

Minimum columns:

- lead created time
- conversion/action time
- `event_id`
- `gclid`
- `gbraid`
- `wbraid`
- email
- phone
- lead status
- qualified yes/no
- value or stage value
- notes/disqualification reason

Write decision note: `wiki/decisions/google-ads/qualified-lead-definition-2026-05.md`.

## Ready verdict

CSV ingestion: ready and complete.

Tracking: structurally sound but not proven end-to-end.

Smart Bidding: paused until Phase 1-5 have evidence.
