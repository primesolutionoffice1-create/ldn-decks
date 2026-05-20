---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: concept
title: "Paid Media Safety Rules"
updated: "2026-05-11"
---

# Paid Media Safety Rules

## Compiled Truth

Paid-media recommendations affect spend and revenue. Ads Brain must separate
tracking failures from performance failures, protect learning phases, cite
sources, and require human approval before action.

## Rules

- Do not recommend scaling before tracking is verified.
- Do not recommend Broad Match without Smart Bidding context and verified
  conversion quality.
- Do not pause campaigns during learning phase without a specific evidence note.
- Do not claim CAPI, Events API, or server-side confidence without deduplication
  proof.
- Do not scale Apple Ads without CPP and attribution evidence.
- Do not change PMax without asset-group performance data.
- Flag CPA above 3x target when target CPA is known.
- Do not recommend scaling without budget sufficiency and conversion-volume
  baseline.
- Do not treat missing conversion data as poor campaign performance.
- Do not treat platform-reported conversions as final business truth when CRM
  or offline conversion data contradicts it.
- Do not call reported ROAS incremental without holdout evidence.
- Do not use deprecated metrics or API versions as recommendation evidence.

## Required Evidence Fields

Every action should include source, confidence, owner, approval status,
expected impact, risk, and rollback note. If any field is missing, the action
stays in `draft` or `needs_review`.

## Related

- [[Day 0 Tracking and Privacy Gate]]
- [[Tracking and Attribution Risk Register]]
- [[Approval Queue]]
- [[Current Platform Requirements 2026]]

---

## Timeline

- 2026-05-11 - Safety rules initialized.
