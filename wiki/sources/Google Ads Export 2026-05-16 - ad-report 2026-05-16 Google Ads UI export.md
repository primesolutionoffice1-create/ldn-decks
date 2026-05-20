---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-16 - ad-report 2026-05-16 Google Ads UI export"
created: "2026-05-16"
updated: "2026-05-16"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-16-ad-report.csv"
source_hash: "5c96459bf57091ac378423cf636c257b1a0dab8aeef1adcdccb4c9d24656f3c5"
sources:
  - ".raw/sources/exports/google/2026-05-16-ad-report.csv"
---

# Google Ads Export 2026-05-16 - ad-report 2026-05-16 Google Ads UI export

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-16-ad-report.csv` imported for [[Google Ads]].

Export type: **performance_export**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 67 |
| Cost | 5575.35 |
| Impressions | 31865.0 |
| Clicks | 0.0 |
| Conversions | 47.0 |
| Revenue | 0.0 |
| CTR | 0.0% |
| CPA | 118.62 |
| ROAS | 0.0 |

## Adapter Checks

| ID | Severity | Status | Check | Evidence |
| --- | --- | --- | --- | --- |
| G-TRK1 | critical | warning | Conversion action evidence present for Google Ads. | column: missing |
| G-CM2 | critical | warning | Consent Mode v2 status documented when relevant. | column missing |
| G-EC1 | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing |
| G-PMAX1 | high | pass | PMax rows include asset group and asset strength evidence. | PMax rows: 0; asset group: missing; asset strength: Ad strength |
| G-ST1 | high | warning | Search term export evidence available for waste review. | column: missing |
| G-AIMAX1 | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing |

## Canonical Columns

| Canonical Field | Detected Column |
| --- | --- |
| ad | Ad name |
| ad_group | Ad group |
| ad_id | Video ID |
| asset_strength | Ad strength |
| campaign | Campaign |
| campaign_status | Status |
| conversions | Conversions |
| cost | Cost |
| impressions | Impr. |
| landing_page | Final URL |
| revenue | Conv. value / Cost (Platform Comparable) |

## Detected Columns

```json
{
  "campaign": "Campaign",
  "ad_group": "Ad group",
  "ad": "Ad name",
  "search_term": null,
  "cost": "Cost",
  "impressions": "Impr.",
  "clicks": null,
  "conversions": "Conversions",
  "revenue": "Conv. value / Cost (Platform Comparable)",
  "frequency": null
}
```

---

## Timeline
- 2026-05-16 - Imported 67 rows from `.raw/sources/exports/google/2026-05-16-ad-report.csv`.
