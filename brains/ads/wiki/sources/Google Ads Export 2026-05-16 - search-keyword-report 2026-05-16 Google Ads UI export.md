---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-16 - search-keyword-report 2026-05-16 Google Ads UI export"
created: "2026-05-16"
updated: "2026-05-16"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-16-search-keyword-report.csv"
source_hash: "5406966362c185c340722a04db6539788a08c5887a7fd7d22f5978cfd457c6b0"
sources:
  - ".raw/sources/exports/google/2026-05-16-search-keyword-report.csv"
---

# Google Ads Export 2026-05-16 - search-keyword-report 2026-05-16 Google Ads UI export

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-16-search-keyword-report.csv` imported for [[Google Ads]].

Export type: **performance_export**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 642 |
| Cost | 34117.17 |
| Impressions | 344863.0 |
| Clicks | 5252.0 |
| Conversions | 285.0 |
| Revenue | 0.0 |
| CTR | 1.52% |
| CPA | 119.71 |
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
| ad_group | Ad group |
| campaign | Campaign |
| campaign_status | Status |
| clicks | Clicks |
| conversions | Conversions |
| cost | Cost |
| impressions | Impr. |
| keyword | Keyword |
| landing_page | Final URL |
| match_type | Match type |

## Detected Columns

```json
{
  "campaign": "Campaign",
  "ad_group": "Ad group",
  "ad": "Ad group",
  "search_term": null,
  "cost": "Cost",
  "impressions": "Impr.",
  "clicks": "Clicks",
  "conversions": "Conversions",
  "revenue": null,
  "frequency": null
}
```

---

## Timeline
- 2026-05-16 - Imported 642 rows from `.raw/sources/exports/google/2026-05-16-search-keyword-report.csv`.
