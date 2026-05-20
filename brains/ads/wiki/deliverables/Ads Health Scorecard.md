---
brain_schema: "ads-brain.v1"
title: "Ads Health Scorecard"
created: "2026-05-11"
updated: "2026-05-16"
type: "deliverable"
status: "draft"
sources:
  - ".raw/sources/exports/google/2026-05-16-ad-group-report.csv"
  - ".raw/sources/exports/google/2026-05-16-ad-report.csv"
  - ".raw/sources/exports/google/2026-05-16-campaign-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-keyword-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
---

# Ads Health Scorecard

## Compiled Truth

Current Ads Health Score: **58 (D)**.

## Platform Summary

| Platform | Rows | Cost | Clicks | Conversions | Revenue | ROAS | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Google Ads | 39 | 5575.36 | 760.0 | 47.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| Google Ads | 67 | 5575.35 | 0.0 | 47.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| Google Ads | 11 | 7506.87 | 1448.0 | 60.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| Google Ads | 642 | 34117.17 | 5252.0 | 285.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| Google Ads | 6493 | 3587.35 | 468.0 | 29.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |

## Tracking Trust

Performance recommendations remain blocked for any platform with a `blocked`
tracking trust status.

![[tracking-trust-by-platform.svg]]

| Platform | Tracking Trust | Status | Blocking Checks | Warnings | Checks |
| --- | --- | --- | --- | --- | --- |
| cross-platform | 0% | blocked | 1 | 0 | 1 |
| google | 50% | needs_review | 0 | 20 | 20 |

## Production Checks

| ID | Platform | Severity | Status | Check | Evidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| X-PI1 | cross-platform | critical | fail | Tracking/privacy gate must be closed before optimization actions are trusted. | Day 0 gate status: open | wiki/flows/Day 0 Tracking and Privacy Gate.md |
| X-SRC1 | cross-platform | critical | pass | Every platform summary must cite immutable raw source path and hash. | 5 imported source summaries checked. | .raw/sources/exports/google/2026-05-16-ad-group-report.csv, .raw/sources/exports/google/2026-05-16-ad-report.csv, .raw/sources/exports/google/2026-05-16-campaign-report.csv, .raw/sources/exports/google/2026-05-16-search-keyword-report.csv, .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| X-CTX1 | cross-platform | medium | pass | Landing-page, query, or SERP context should be present before strategic recommendations. | 1 enrichment/context sources found. | .raw/sources/research/2026-05-09-ads-brain-production-research.md |
| X-CV1 | cross-platform | critical | pass | Imported conversion totals are non-zero or no spend is present. | Cost 56362.1, conversions 468.0. | .raw/sources/exports/google/2026-05-16-ad-group-report.csv, .raw/sources/exports/google/2026-05-16-ad-report.csv, .raw/sources/exports/google/2026-05-16-campaign-report.csv, .raw/sources/exports/google/2026-05-16-search-keyword-report.csv, .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| X-CLK1 | cross-platform | high | pass | Imported click totals are present. | Clicks 7928.0. | .raw/sources/exports/google/2026-05-16-ad-group-report.csv, .raw/sources/exports/google/2026-05-16-ad-report.csv, .raw/sources/exports/google/2026-05-16-campaign-report.csv, .raw/sources/exports/google/2026-05-16-search-keyword-report.csv, .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-TRK1 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-CM2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-EC1 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-PMAX1 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-ST1 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-AIMAX1 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-TRK1-2 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-CM2-2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-EC1-2 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-PMAX1-2 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: Ad strength | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-ST1-2 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-AIMAX1-2 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-TRK1-3 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-CM2-3 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-EC1-3 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-PMAX1-3 | google | high | warning | PMax rows include asset group and asset strength evidence. | PMax rows: 2; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-ST1-3 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-AIMAX1-3 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-TRK1-4 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-CM2-4 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-EC1-4 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-PMAX1-4 | google | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-ST1-4 | google | high | warning | Search term export evidence available for waste review. | column: missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-AIMAX1-4 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-TRK1-5 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-CM2-5 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-EC1-5 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-PMAX1-5 | google | high | warning | PMax rows include asset group and asset strength evidence. | PMax rows: 2524; asset group: missing; asset strength: missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-ST1-5 | google | high | pass | Search term export evidence available for waste review. | column: Search term | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-AIMAX1-5 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |

## Enrichment Sources

- .raw/sources/research/2026-05-09-ads-brain-production-research.md

## Score Reasons

- X-PI1 (critical, fail): Tracking/privacy gate must be closed before optimization actions are trusted. Evidence: Day 0 gate status: open
- G-TRK1 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-2 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-2 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-2 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-2 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-2 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-3 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-3 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-3 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-PMAX1-3 (high, warning): PMax rows include asset group and asset strength evidence. Evidence: PMax rows: 2; asset group: missing; asset strength: missing
- G-ST1-3 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-3 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-4 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-4 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-4 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-ST1-4 (high, warning): Search term export evidence available for waste review. Evidence: column: missing
- G-AIMAX1-4 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing
- G-TRK1-5 (critical, warning): Conversion action evidence present for Google Ads. Evidence: column: missing
- G-CM2-5 (critical, warning): Consent Mode v2 status documented when relevant. Evidence: column missing
- G-EC1-5 (critical, warning): Enhanced conversions/offline conversion quality documented. Evidence: column missing
- G-PMAX1-5 (high, warning): PMax rows include asset group and asset strength evidence. Evidence: PMax rows: 2524; asset group: missing; asset strength: missing
- G-AIMAX1-5 (medium, warning): AI Max status should be documented for Search/DSA/ACA/broad-match risk. Evidence: column: missing

## Related

- [[wiki/deliverables/_index|Deliverables Hub]]
- [[Approval Queue]]
- [[Weekly Client Report]]
- [[Paid Media Safety Rules]]

---

## Timeline
- 2026-05-16 - Regenerated from 5 source summaries.
