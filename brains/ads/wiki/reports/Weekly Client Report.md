---
brain_schema: "ads-brain.v1"
title: "Weekly Client Report"
created: "2026-05-11"
updated: "2026-05-16"
type: "report"
status: "draft"
sources:
  - ".raw/sources/exports/google/2026-05-16-ad-group-report.csv"
  - ".raw/sources/exports/google/2026-05-16-ad-report.csv"
  - ".raw/sources/exports/google/2026-05-16-campaign-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-keyword-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
---

# Weekly Client Report

## Compiled Truth

## Header

- Client: Ldn Decks
- Platforms covered: Google Ads
- Source summaries: 5
- Day 0 tracking/privacy gate: **open**
- Ads Health Score: **58 (D)**
- Attribution caveat: reported ROAS is **reported, not incremental** unless a holdout or incrementality source is linked.
- Modeled vs. observed conversion split: unknown unless explicitly supplied by source exports.

## 1. Tracking Health

Ldn Decks has an Ads Health Score of **58 (D)** based on 5 imported source summaries.

![[tracking-trust-by-platform.svg]]

| Platform | Tracking Trust | Status | Blocking Checks | Warnings | Checks |
| --- | --- | --- | --- | --- | --- |
| cross-platform | 0% | blocked | 1 | 0 | 1 |
| google | 50% | needs_review | 0 | 20 | 20 |

## 2. Performance Snapshot

![[platform-spend-by-source.svg]]

| Platform | Rows | Cost | Clicks | Conversions | Revenue | ROAS | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Google Ads | 39 | 5575.36 | 760.0 | 47.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| Google Ads | 67 | 5575.35 | 0.0 | 47.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| Google Ads | 11 | 7506.87 | 1448.0 | 60.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| Google Ads | 642 | 34117.17 | 5252.0 | 285.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| Google Ads | 6493 | 3587.35 | 468.0 | 29.0 | 0.0 | 0.0 | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |

## 3. Recommendations and Risks

Recommendations are proposals only. Every action requires human approval in
[[Approval Queue]], and performance actions remain blocked where tracking trust
is not `trusted`.

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

## 4. Production Checks

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

## 5. API and Platform Change Watch

| Platform | Current Concern | Monthly Review |
| --- | --- | --- |
| Google Ads | v24 baseline; monthly 2026 cadence | Re-check AI Max/API parity and sunset dates monthly. |
| Meta Ads | CAPI parameters verified; API version must be source-verified | Record exact Graph/Marketing API version, expiration, and release URL before connector work. |
| TikTok Ads | Events API evidence required; Business API version must be source-verified | Re-check Events API, Smart+, and ownership/data-residency notes monthly. |
| LinkedIn Ads | Linkedin-Version 202604 baseline | Monthly API versions and qualified-lead/Lead Sync changes need source proof. |
| Microsoft Ads | REST transition | New features REST-only from 2026-10-01; SOAP retirement 2027-01-31. |
| Apple Ads | AdServices + AAK | Re-check CPP, AAK, iOS attribution, and new-placement reporting transparency. |

## 6. Evidence Sources

- .raw/sources/exports/google/2026-05-16-ad-group-report.csv
- .raw/sources/exports/google/2026-05-16-ad-report.csv
- .raw/sources/exports/google/2026-05-16-campaign-report.csv
- .raw/sources/exports/google/2026-05-16-search-keyword-report.csv
- .raw/sources/exports/google/2026-05-16-search-terms-report.csv
- .raw/sources/research/2026-05-09-ads-brain-production-research.md

## 7. Needs Approval

- Tracking/privacy gate review.
- Budget changes from [[Budget Pacing Memo]].
- Negative keyword candidates from [[Negative Keyword Candidate Queue]].
- Creative tests from [[Creative Fatigue Board]].

## 8. Next Actions

1. Review [[Tracking and Attribution Risk Register]].
2. Review [[Wasted Spend Ledger]].
3. Move approved actions into [[Approval Queue]].

---

## Timeline
- 2026-05-16 - Generated weekly report from 5 source summaries.
