# Scaling Evidence Bundle - 2026-06-11

## Summary

This bundle is the single local handoff for clearing the current scaling RED blockers. It does not authorize Ads activation, budget increases, Smart Bidding changes, public proof claims, citation edits, or account-setting changes.

- Scaling status: RED
- Current blockers: 3
- Local blockers: 0
- Owner/external blockers: 3
- Source board: `docs/seo/scaling-readiness-board-2026-06-11.md`
- Evidence request: `docs/ads-tracking/scaling-evidence-request-2026-06-11.md`
- Exit checklist: `docs/seo/scaling-blocker-exit-checklist-2026-06-11.md`

## Evidence Sections

### Google Call Attribution Evidence

- Blocker id: google-call-attribution
- Owner: external
- Rows needed: 1 real read-only evidence row minimum
- Source/template: `docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv`
- Paste/update location: `docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv`
- Verify: `npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness`
- Guardrail: Do not make phone_click primary and do not change Google Ads, GTM, GA4, budgets, bidding, or conversions from this packet.

### Lead Outcome Rows

- Blocker id: lead-outcome-rows
- Owner: owner
- Rows needed: 5-10 real LDN Decks lead outcome rows
- Source/template: `docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv`
- Paste/update location: `docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv`
- Verify: `npm run measurement:lead-outcomes && npm run scaling:readiness`
- Guardrail: Do not mark rows upload-eligible unless click IDs or an approved enhanced/offline conversion path exists.

### Owner Proof Evidence

- Blocker id: owner-proof-evidence
- Owner: owner
- Rows needed: All P0 owner proof rows needed for blocked proof pages
- Source/template: `docs/seo/owner-evidence-action-packet-2026-06-11.csv`
- Paste/update location: `docs/seo/owner-evidence-action-packet-2026-06-11.csv`
- Verify: `npm run seo:evidence-action-packet:validate && npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly`
- Guardrail: Do not publish unverified project proof claims, warranty terms, repair-cost ranges, or private owner/customer details.

## Required Local Sequence

1. Fill the relevant source/template with real source-of-record evidence.
2. Run the section verification command.
3. Run `npm run scaling:readiness`.
4. Keep scaling RED until the blocker disappears from the scaling readiness board.

## Missing Sources

- none
