# Scaling Evidence Request - 2026-06-08

## Summary

This packet converts the current scaling readiness blockers into owner/external evidence requests. It does not authorize Google Ads activation or budget increases.

- Scaling status: RED
- Local blockers: 0
- Owner/external blockers: 3
- Source board: `docs/seo/scaling-readiness-board-2026-06-08.md`

## Requests

### P0 - google-call-attribution

- Owner: external
- Evidence needed: Screenshots or read-only export showing Google Ads call conversion action source, status, counting, diagnostics, and GTM/website-call forwarding setup for the canonical LDN Decks phone number.
- Where to collect: Google Ads conversions, Google Ads call assets/call reporting, GTM tags/triggers, and the call attribution read-only runbook.
- Done when: `npm run measurement:gate` can be updated from external-proof WARN only after the evidence proves qualified-call attribution.
- Verification command: `npm run measurement:gate && npm run scaling:readiness`
- Current evidence: Measurement gate remains RED while google-call-attribution is WARN/external-proof-needed. Call attribution evidence status: SAMPLE_ONLY, 0 real rows.

### P0 - lead-outcome-rows

- Owner: owner
- Evidence needed: 5-10 real LDN Decks lead outcome rows with lead date, click ID when present, source/medium/campaign, city, service type, qualification status, call/form evidence, sales notes, and Ads action.
- Where to collect: CRM/GHL, call notes or recordings, form lead records, and docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv.
- Done when: `npm run measurement:lead-outcomes` returns PASS with at least 5 real rows and 0 errors.
- Verification command: `npm run measurement:lead-outcomes && npm run scaling:readiness`
- Current evidence: 0 real rows, 0 qualified, status SAMPLE_ONLY.

### P0 - owner-proof-evidence

- Owner: owner
- Evidence needed: Owner-approved proof packets for blocked/proof-incomplete pages: project photos, allowed project descriptions, service scope, location permission, warranty/repair-cost evidence where relevant, and privacy confirmation.
- Where to collect: Owner evidence sprint checklist, owner evidence handoff, project intake, photo manifest, warranty rows, and repair-cost rows.
- Done when: `npm run seo:proof-preflight` shows no blocked/proof-incomplete pages and prepublish is no longer expected-blocked.
- Verification command: `npm run seo:proof-preflight && npm run seo:weekly`
- Current evidence: 3 blocked, 1 proof-incomplete, prepublish expected-blocked true. Owner action packet: 26 rows, 13 P0, 0 errors.

## Operating Rule

Keep scaling RED until all P0 requests are satisfied by source-of-record evidence and the verification commands pass.
