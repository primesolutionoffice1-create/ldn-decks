# Scaling Evidence Request - 2026-06-20

## Summary

This packet converts the current scaling readiness blockers into owner/external evidence requests. It does not authorize Google Ads activation or budget increases.

- Scaling status: RED
- Local blockers: 0
- Owner/external blockers: 3
- Source board: `docs/seo/scaling-readiness-board-2026-06-20.md`

## Requests

### P0 - google-call-attribution

- Owner: external
- Evidence needed: Screenshots or read-only export showing Google Ads call conversion action source, status, counting, diagnostics, and GTM/website-call forwarding setup for the canonical LDN Decks phone number.
- Where to collect: Google Ads conversions, Google Ads call assets/call reporting, GTM tags/triggers, and docs/ads-tracking/live-call-attribution-evidence-2026-06-20.csv. Use docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv only as the shape reference.
- Done when: `npm run measurement:call-attribution-evidence` no longer returns SAMPLE_ONLY/LIVE_EMPTY and `npm run measurement:gate` can be updated from external-proof WARN only after the evidence proves qualified-call attribution.
- Verification command: `npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness`
- Current evidence: Measurement gate remains RED while google-call-attribution is WARN/external-proof-needed. Call attribution evidence status: LIVE_EMPTY, 0 real rows.

### P0 - lead-outcome-rows

- Owner: owner
- Evidence needed: 5-10 real LDN Decks lead outcome rows with lead date, click ID when present, source/medium/campaign, city, service type, qualification status, call/form evidence, sales notes, and Ads action.
- Where to collect: CRM/GHL, call notes or recordings, form lead records, and docs/ads-tracking/live-lead-outcomes-2026-06-20.csv. Use docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv only as the shape reference.
- Done when: `npm run measurement:lead-outcomes` returns PASS with at least 5 real rows and 0 errors.
- Verification command: `npm run measurement:lead-outcomes && npm run scaling:readiness`
- Current evidence: 0 real rows, 0 qualified, status LIVE_EMPTY.

### P0 - owner-proof-evidence

- Owner: owner
- Evidence needed: Owner-approved proof packets for blocked/proof-incomplete pages: project photos, allowed project descriptions, service scope, location permission, warranty/repair-cost evidence where relevant, and privacy confirmation.
- Where to collect: docs/seo/project-evidence-intake-2026-06-20.csv, docs/seo/photo-ingestion-manifest-2026-06-20.csv, docs/seo/warranty-terms-intake-2026-06-20.csv, docs/seo/repair-cost-ranges-intake-2026-06-20.csv, plus docs/seo/owner-evidence-sprint-2026-06-20.md and docs/seo/owner-evidence-handoff-2026-06-20.md for the exact collection order and privacy gates.
- Done when: `npm run seo:validate-owner-intake` and `npm run seo:proof-preflight` show no blocked/proof-incomplete pages and prepublish is no longer expected-blocked.
- Verification command: `npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly`
- Current evidence: 3 blocked, 1 proof-incomplete, prepublish expected-blocked true. Owner action packet: 26 rows, 13 P0, 0 errors.

## Operating Rule

Keep scaling RED until all P0 requests are satisfied by source-of-record evidence and the verification commands pass.
