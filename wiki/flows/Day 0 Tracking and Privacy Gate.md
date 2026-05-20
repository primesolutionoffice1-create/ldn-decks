---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: flow
title: "Day 0 Tracking and Privacy Gate"
status: required
updated: "2026-05-11"
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

- gate_status: open
- owner: Loudoun Decks
- evidence_note: TBD
- accepted_risk: false
- last_reviewed: 2026-05-11

The gate is closed only when `gate_status` is `closed` or `approved` and the
evidence note links to platform screenshots, exports, source docs, or CRM/tag
implementation notes.

## Output

Update [[Tracking and Attribution Risk Register]] before recommending account
changes.
