---
brain_schema: "ads-brain.v1"
title: "Google Ads"
created: "2026-05-11"
updated: "2026-05-16"
type: "platform"
platform: "google"
status: "imported"
sources:
  - "[[Google Ads Export 2026-05-16 - search-terms-report 2026-05-16 Google Ads UI export]]"
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
---

# Google Ads

## Compiled Truth

Google Ads has a latest imported source: [[Google Ads Export 2026-05-16 - search-terms-report 2026-05-16 Google Ads UI export]].

## Latest Totals

| Metric | Value |
| --- | --- |
| Rows | 6493 |
| Cost | 3587.35 |
| Impressions | 12481.0 |
| Clicks | 468.0 |
| Conversions | 29.0 |
| Revenue | 0.0 |
| ROAS | 0.0 |

## Adapter Checks

| ID | Severity | Status | Check | Evidence |
| --- | --- | --- | --- | --- |
| G-TRK1 | critical | warning | Conversion action evidence present for Google Ads. | column: missing |
| G-CM2 | critical | warning | Consent Mode v2 status documented when relevant. | column missing |
| G-EC1 | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing |
| G-PMAX1 | high | warning | PMax rows include asset group and asset strength evidence. | PMax rows: 2524; asset group: missing; asset strength: missing |
| G-ST1 | high | pass | Search term export evidence available for waste review. | column: Search term |
| G-AIMAX1 | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing |

## Next Review

Use [[Day 0 Tracking and Privacy Gate]] before turning this import into
optimization actions.

---

## Timeline
- 2026-05-16 - Updated platform note from [[Google Ads Export 2026-05-16 - search-terms-report 2026-05-16 Google Ads UI export]].
- 2026-05-16 - Updated platform note from [[Google Ads Export 2026-05-16 - search-keyword-report 2026-05-16 Google Ads UI export]].
- 2026-05-16 - Updated platform note from [[Google Ads Export 2026-05-16 - campaign-report 2026-05-16 Google Ads UI export]].
- 2026-05-16 - Updated platform note from [[Google Ads Export 2026-05-16 - ad-report 2026-05-16 Google Ads UI export]].
- 2026-05-16 - Updated platform note from [[Google Ads Export 2026-05-16 - ad-group-report 2026-05-16 Google Ads UI export]].
- 2026-05-11 - Platform placeholder created.
