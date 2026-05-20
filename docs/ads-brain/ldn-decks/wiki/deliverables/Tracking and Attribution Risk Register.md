---
brain_schema: "ads-brain.v1"
title: "Tracking and Attribution Risk Register"
created: "2026-05-15"
updated: "2026-05-15"
type: "deliverable"
status: "draft"
sources:
  - ".raw/sources/exports/google/2026-05-15-01-campaigns-2.csv"
  - ".raw/sources/exports/google/2026-05-15-01-campaigns.csv"
  - ".raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv"
  - ".raw/sources/exports/google/2026-05-15-02-ad-groups.csv"
  - ".raw/sources/exports/google/2026-05-15-03-keywords-2.csv"
  - ".raw/sources/exports/google/2026-05-15-03-keywords.csv"
  - ".raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv"
  - ".raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv"
  - ".raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv"
  - ".raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv"
  - ".raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv"
  - ".raw/sources/exports/google/2026-05-15-06-sitelinks.csv"
  - ".raw/sources/exports/google/2026-05-15-07-callouts-2.csv"
  - ".raw/sources/exports/google/2026-05-15-07-callouts.csv"
  - ".raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv"
  - ".raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv"
  - ".raw/sources/exports/google/2026-05-15-09-call-asset-2.csv"
  - ".raw/sources/exports/google/2026-05-15-09-call-asset.csv"
  - ".raw/sources/exports/google/2026-05-15-10-location-targets-2.csv"
  - ".raw/sources/exports/google/2026-05-15-10-location-targets.csv"
  - ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv"
  - ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv"
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
  - "wiki/sources/Market Context 2026-05-15.md"
---

# Tracking and Attribution Risk Register

## Compiled Truth

Tracking/privacy readiness is not automatically proven by platform exports.

## Gate Status

- Day 0 gate status: **real_lead_validation_pending**
- Structure/import actions may be prepared while paused. Optimization actions are blocked until 5-10 real leads and Google Ads diagnostics are reviewed.

## Current Evidence

- Code-side tracking fixes pass `npm run build` with 246 static pages.
- GTM Version 25 is live in container `GTM-N87MG6QS` per `FINAL-ATTRIBUTION-SIGNOFF.md`.
- Preview validation showed GA4 `generate_lead`, Google Ads Form Lead, and Google Ads User Provided Data firing once on `lead_confirmed`.
- Google Ads Form Lead transaction ID maps to `{{DLV - event_id}}`.
- Google Ads conversion-goal cleanup is logged in `GOOGLE-ADS-CONVERSION-CLEANUP-LOG.md`: `Submit lead form` is account-default across 10/10 campaigns, `Phone call lead` remains account-default across 9/10, and `Leads from messages` was removed from account-default optimization. No budgets, bidding, keywords, ads, or campaign budgets were changed.
- Remaining risk: production real-lead validation and Enhanced Conversions diagnostics after Google Ads processing.

## Tracking Trust by Platform

| Platform | Tracking Trust | Status | Blocking Checks | Warnings | Checks |
| --- | --- | --- | --- | --- | --- |
| cross-platform | 0% | blocked | 1 | 0 | 1 |
| google | 51% | needs_review | 0 | 86 | 88 |

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
| X-PI1 | cross-platform | critical | fail | Tracking/privacy gate must be closed before optimization actions are trusted. | Day 0 gate status: real_lead_validation_pending | wiki/flows/Day 0 Tracking and Privacy Gate.md |
| G-TRK1 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-CM2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-EC1 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-AIMAX1 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv |
| G-TRK1-2 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-CM2-2 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-EC1-2 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-AIMAX1-2 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-01-campaigns.csv |
| G-TRK1-3 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-CM2-3 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-EC1-3 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-AIMAX1-3 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv |
| G-TRK1-4 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-CM2-4 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-EC1-4 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-AIMAX1-4 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv |
| G-TRK1-5 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-CM2-5 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-EC1-5 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-AIMAX1-5 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords-2.csv |
| G-TRK1-6 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-CM2-6 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-EC1-6 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-AIMAX1-6 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-03-keywords.csv |
| G-TRK1-7 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-CM2-7 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-EC1-7 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-AIMAX1-7 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv |
| G-TRK1-8 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-CM2-8 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-EC1-8 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-AIMAX1-8 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv |
| G-TRK1-9 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-CM2-9 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-EC1-9 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-AIMAX1-9 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv |
| G-TRK1-10 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-CM2-10 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-EC1-10 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-AIMAX1-10 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv |
| G-TRK1-11 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-CM2-11 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-EC1-11 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-AIMAX1-11 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv |
| G-TRK1-12 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-CM2-12 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-EC1-12 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-AIMAX1-12 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-06-sitelinks.csv |
| G-TRK1-13 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-CM2-13 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-EC1-13 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-AIMAX1-13 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts-2.csv |
| G-TRK1-14 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-CM2-14 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-EC1-14 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-AIMAX1-14 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-07-callouts.csv |
| G-TRK1-15 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-CM2-15 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-EC1-15 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-AIMAX1-15 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv |
| G-TRK1-16 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-CM2-16 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-EC1-16 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-AIMAX1-16 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv |
| G-TRK1-17 | google | critical | pass | Conversion action evidence present for Google Ads. | column: Conversion action | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-CM2-17 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-EC1-17 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-AIMAX1-17 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv |
| G-TRK1-18 | google | critical | pass | Conversion action evidence present for Google Ads. | column: Conversion action | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-CM2-18 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-EC1-18 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-AIMAX1-18 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-09-call-asset.csv |
| G-TRK1-19 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-CM2-19 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-EC1-19 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-AIMAX1-19 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv |
| G-TRK1-20 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-CM2-20 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-EC1-20 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-AIMAX1-20 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-10-location-targets.csv |
| G-TRK1-21 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-CM2-21 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-EC1-21 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-AIMAX1-21 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv |
| G-TRK1-22 | google | critical | warning | Conversion action evidence present for Google Ads. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-CM2-22 | google | critical | warning | Consent Mode v2 status documented when relevant. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-EC1-22 | google | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |
| G-AIMAX1-22 | google | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing | .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv |

## Imported Sources

- .raw/sources/exports/google/2026-05-15-01-campaigns-2.csv
- .raw/sources/exports/google/2026-05-15-01-campaigns.csv
- .raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv
- .raw/sources/exports/google/2026-05-15-02-ad-groups.csv
- .raw/sources/exports/google/2026-05-15-03-keywords-2.csv
- .raw/sources/exports/google/2026-05-15-03-keywords.csv
- .raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv
- .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv
- .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv
- .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv
- .raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv
- .raw/sources/exports/google/2026-05-15-06-sitelinks.csv
- .raw/sources/exports/google/2026-05-15-07-callouts-2.csv
- .raw/sources/exports/google/2026-05-15-07-callouts.csv
- .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv
- .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv
- .raw/sources/exports/google/2026-05-15-09-call-asset-2.csv
- .raw/sources/exports/google/2026-05-15-09-call-asset.csv
- .raw/sources/exports/google/2026-05-15-10-location-targets-2.csv
- .raw/sources/exports/google/2026-05-15-10-location-targets.csv
- .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv
- .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv

## Enrichment Sources

- .raw/sources/research/2026-05-09-ads-brain-production-research.md
- wiki/sources/Market Context 2026-05-15.md

## Related

- [[wiki/deliverables/_index|Deliverables Hub]]
- [[Approval Queue]]
- [[Weekly Client Report]]
- [[Paid Media Safety Rules]]

---

## Timeline
- 2026-05-15 - Regenerated from 22 source summaries.
- 2026-05-15 - Regenerated from 11 source summaries.
