---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-15 - Google Ads import pack 2026-05-15 SpyFu deck builders expansion"
created: "2026-05-15"
updated: "2026-05-15"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv"
source_hash: "36313def3f183c7ec2b5404d68ed4489beeb6a311206ad8f9d82d0402f9dd82e"
sources:
  - ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv"
---

# Google Ads Export 2026-05-15 - Google Ads import pack 2026-05-15 SpyFu deck builders expansion

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv` imported for [[Google Ads]].

Export type: **performance_export**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 55 |
| Cost | 0.0 |
| Impressions | 0.0 |
| Clicks | 0.0 |
| Conversions | 0.0 |
| Revenue | 0.0 |
| CTR | 0.0% |
| CPA | 0.0 |
| ROAS | 0.0 |

## Adapter Checks

| ID | Severity | Status | Check | Evidence |
| --- | --- | --- | --- | --- |
| G-TRK1 | critical | warning | Conversion action evidence present for Google Ads. | column: missing |
| G-CM2 | critical | warning | Consent Mode v2 status documented when relevant. | column missing |
| G-EC1 | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing |
| G-PMAX1 | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: missing |
| G-ST1 | high | warning | Search term export evidence available for waste review. | column: missing |
| G-AIMAX1 | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing |

## Canonical Columns

| Canonical Field | Detected Column |
| --- | --- |
| campaign | Campaign |
| campaign_status | Status |
| keyword | Keyword |
| match_type | Match type |

## Detected Columns

```json
{
  "campaign": "Campaign",
  "ad_group": null,
  "ad": null,
  "search_term": null,
  "cost": null,
  "impressions": null,
  "clicks": null,
  "conversions": null,
  "revenue": null,
  "frequency": null
}
```

---

## Timeline
- 2026-05-15 - Imported 55 rows from `.raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords-2.csv`.
- 2026-05-15 - Imported 15 rows from `.raw/sources/exports/google/2026-05-15-10-location-targets-2.csv`.
- 2026-05-15 - Imported 5 rows from `.raw/sources/exports/google/2026-05-15-09-call-asset-2.csv`.
- 2026-05-15 - Imported 1 rows from `.raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets-2.csv`.
- 2026-05-15 - Imported 32 rows from `.raw/sources/exports/google/2026-05-15-07-callouts-2.csv`.
- 2026-05-15 - Imported 16 rows from `.raw/sources/exports/google/2026-05-15-06-sitelinks-2.csv`.
- 2026-05-15 - Imported 38 rows from `.raw/sources/exports/google/2026-05-15-05-shared-negative-keywords-2.csv`.
- 2026-05-15 - Imported 22 rows from `.raw/sources/exports/google/2026-05-15-04-responsive-search-ads-2.csv`.
- 2026-05-15 - Imported 135 rows from `.raw/sources/exports/google/2026-05-15-03-keywords-2.csv`.
- 2026-05-15 - Imported 11 rows from `.raw/sources/exports/google/2026-05-15-02-ad-groups-2.csv`.
- 2026-05-15 - Imported 5 rows from `.raw/sources/exports/google/2026-05-15-01-campaigns-2.csv`.
