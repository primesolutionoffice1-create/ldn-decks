---
brain_schema: "ads-brain.v1"
title: "Tracking and Attribution Risk Register"
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
  - "[[Meta Ads Live Verification 2026-05-16]]"
---

# Tracking and Attribution Risk Register

## Compiled Truth

Tracking/privacy readiness is not automatically proven by platform exports.

## Gate Status

- Day 0 gate status: **open**
- Optimization actions are blocked until the gate is `closed` or `approved`.

## Tracking Trust by Platform

| Platform | Tracking Trust | Status | Blocking Checks | Warnings | Checks |
| --- | --- | --- | --- | --- | --- |
| cross-platform | 0% | blocked | 1 | 0 | 1 |
| google | 50% | needs_review | 0 | 20 | 20 |
| meta | 0% | blocked | 2 | 0 | 2 |

## Required Review

- Confirm primary conversion event and optimization event.
- Confirm attribution windows and lookback windows.
- Confirm consent/CAPI/Events API/platform equivalents with deduplication.
- Confirm CRM/offline conversion import status and qualified lead source.
- Confirm compliance category.
- Confirm active API version and sunset date before connector work.

## Platform-Specific Risk Checks

| ID | Platform | Severity | Status | Check | Evidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| X-PI1 | cross-platform | critical | fail | Tracking/privacy gate must be closed before optimization actions are trusted. | Day 0 gate status: open | wiki/flows/Day 0 Tracking and Privacy Gate.md |
| G-TRK1 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-CM2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-EC1 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-AIMAX1 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-ad-group-report.csv |
| G-TRK1-2 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-CM2-2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-EC1-2 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-AIMAX1-2 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-ad-report.csv |
| G-TRK1-3 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-CM2-3 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-EC1-3 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-AIMAX1-3 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-campaign-report.csv |
| G-TRK1-4 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-CM2-4 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-EC1-4 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-AIMAX1-4 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv |
| G-TRK1-5 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-CM2-5 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-EC1-5 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| G-AIMAX1-5 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-16-search-terms-report.csv |
| M-TRK1 | meta | critical | fail | Meta lead optimization requires received lead events before results are trusted. | `leads` dataset shows 0 total events, never received events, and no event activity. | [[Meta Ads Live Verification 2026-05-16]] |
| M-CAPI1 | meta | critical | fail | Meta Pixel/CAPI integration status must be documented before campaign optimization. | Events Manager shows no integrations for dataset `leads` ID 695923313293515. | [[Meta Ads Live Verification 2026-05-16]] |

## Imported Sources

- .raw/sources/exports/google/2026-05-16-ad-group-report.csv
- .raw/sources/exports/google/2026-05-16-ad-report.csv
- .raw/sources/exports/google/2026-05-16-campaign-report.csv
- .raw/sources/exports/google/2026-05-16-search-keyword-report.csv
- .raw/sources/exports/google/2026-05-16-search-terms-report.csv

## Enrichment Sources

- .raw/sources/research/2026-05-09-ads-brain-production-research.md

## Related

- [[wiki/deliverables/_index|Deliverables Hub]]
- [[Approval Queue]]
- [[Weekly Client Report]]
- [[Paid Media Safety Rules]]

---

## Timeline
- 2026-05-16 - Added Meta tracking block from [[Meta Ads Live Verification 2026-05-16]]: active spend is reporting clicks/LPVs/messaging while `leads` dataset has 0 received events and no integrations.
- 2026-05-16 - Regenerated from 5 source summaries.
- 2026-05-15 - Added Pinterest tracking risk from [[Pinterest Business Setup Verification 2026-05-15]].
- 2026-05-15 - Updated Pinterest status after local tag implementation and build
  verification; live Event Manager verification remains open.
