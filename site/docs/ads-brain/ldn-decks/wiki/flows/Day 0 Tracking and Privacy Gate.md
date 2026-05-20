---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: flow
title: "Day 0 Tracking and Privacy Gate"
status: real-lead-validation-pending
updated: "2026-05-15"
---

# Day 0 Tracking and Privacy Gate

## Purpose

No optimization recommendation is reliable until conversion tracking, consent,
and attribution are understood.

## Checklist

- Primary conversion event defined.
- Platform conversion actions documented.
- GA4 key events documented when available.
- GSC export or landing-page query context imported when relevant.
- Consent Mode, CAPI, Events API, or platform equivalent checked.
- Server-side event deduplication documented for every active pixel/API pair.
- Google Consent Mode v2 status documented when EEA/UK traffic or remarketing
  is in scope.
- Offline conversion / CRM import status documented.
- Attribution windows recorded.
- API version and deprecation status recorded for active connectors.
- Compliance category checked for housing, employment, credit, healthcare,
  finance, or restricted products.

## Structured Status

- gate_status: real_lead_validation_pending
- owner: LDN Decks
- evidence_note: ../../../../docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md
- accepted_risk: false
- last_reviewed: 2026-05-15

The gate is closed only when `gate_status` is `closed` or `approved` and the
evidence note links to platform screenshots, exports, source docs, or CRM/tag
implementation notes.

## Output

Update [[Tracking and Attribution Risk Register]] before recommending account
changes.

## Current Evidence

The local tracking audit dated 2026-05-11 originally identified critical blind
spots in homepage form attribution, sitewide phone CTA tracking, and Consent
Mode timing. Code-side fixes are now in place and `npm run build` passed on
2026-05-15 with 246 static pages generated.

`FINAL-ATTRIBUTION-SIGNOFF.md` now records GTM Version 25 live in container
`GTM-N87MG6QS`: `lead_confirmed` triggers Google Ads Form Lead, GA4
`generate_lead`, and Google Ads User Provided Data once in Preview, with
`Transaction ID = {{DLV - event_id}}`.

`GOOGLE-ADS-CONVERSION-CLEANUP-LOG.md` records account-level conversion-goal
cleanup on 2026-05-15. `Submit lead form` is account-default on 10/10
campaigns, `Phone call lead` remains account-default on 9/10, and `Leads from
messages` is no longer an account-default optimization goal. No budgets,
bidding strategies, keywords, ads, or campaign budgets were changed in that
pass.

The remaining blocker is production evidence: 5-10 real leads, Google Ads
Enhanced Conversions diagnostics after the 24-48h processing window, and
conversion-action review. Until that evidence is signed off, SpyFu and keyword
exports may guide structure, copy, negatives, and landing-page mapping, but not
budget scaling, broad match, tCPA/tROAS, or Smart Bidding expansion.
