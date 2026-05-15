---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: flow
title: "Day 0 Tracking and Privacy Gate"
status: operator-verification-pending
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

- gate_status: operator_verification_pending
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

The remaining blocker is operator-side verification in GTM, Google Ads, GA4,
and conversion action settings. Until those checks are signed off, SpyFu and
keyword exports may guide structure, copy, negatives, and landing-page mapping,
but not budget scaling, broad match, tCPA/tROAS, or Smart Bidding expansion.
