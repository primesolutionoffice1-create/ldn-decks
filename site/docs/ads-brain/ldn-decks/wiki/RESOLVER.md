---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: resolver
title: "RESOLVER"
updated: "2026-05-15"
---

# RESOLVER

Read this before filing new Ads Brain notes.

## Decision Tree

1. Is it a raw file, export, screenshot, API response, or external document?
   File the raw asset under `.raw/sources/` and create a note in `wiki/sources/`.
2. Is it a paid platform?
   File under `wiki/platforms/`.
3. Is it a campaign-level object?
   File under `wiki/campaigns/`.
4. Is it an ad group, ad set, asset group, or targeting container?
   File under `wiki/ad-groups/`.
5. Is it an individual ad?
   File under `wiki/ads/`.
6. Is it a creative concept, asset, hook, format, or fatigue finding?
   File under `wiki/creatives/`.
7. Is it an audience, segment, list, placement, or targeting hypothesis?
   File under `wiki/audiences/`.
8. Is it a keyword or search term?
   File under `wiki/keywords/` or `wiki/search-terms/`.
9. Is it tracking, attribution, consent, CAPI, API event quality, or conversion setup?
   File under `wiki/conversions/` or `wiki/attribution/`.
10. Is it a landing page or offer page?
    File under `wiki/landing-pages/`.
11. Is it a budget, bid, pacing, or forecast issue?
    File under `wiki/budget-pacing/`.
12. Is it a test design or result?
    File under `wiki/experiments/`.
13. Is it an approval or strategic call?
    File under `wiki/decisions/`.
14. Is it a client-facing output?
    File under `wiki/deliverables/` or `wiki/reports/`.

When two places fit, choose the primary object being discussed and link to the
other one instead of duplicating the note.

## Key Hubs

- [[Index]]
- [[wiki/sources/_index|Sources Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[wiki/deliverables/_index|Deliverables Hub]]
- [[wiki/decisions/_index|Decisions Hub]]
