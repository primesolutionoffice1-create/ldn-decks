---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-16 - campaign-report 2026-05-16 Google Ads UI export"
created: "2026-05-16"
updated: "2026-05-16"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-16-campaign-report.csv"
source_hash: "71ef8d493460f1c5c166368d6a7413294ee5dffae9d2c0fc4abedbcd7712586e"
sources:
  - ".raw/sources/exports/google/2026-05-16-campaign-report.csv"
---

# Google Ads Export 2026-05-16 - campaign-report 2026-05-16 Google Ads UI export

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-16-campaign-report.csv` imported for [[Google Ads]].

Export type: **performance_export**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 11 |
| Cost | 7506.87 |
| Impressions | 144697.0 |
| Clicks | 1448.0 |
| Conversions | 60.0 |
| Revenue | 0.0 |
| CTR | 1.0% |
| CPA | 125.11 |
| ROAS | 0.0 |

## Adapter Checks

| ID | Severity | Status | Check | Evidence |
| --- | --- | --- | --- | --- |
| G-TRK1 | critical | warning | Conversion action evidence present for Google Ads. | column: missing |
| G-CM2 | critical | warning | Consent Mode v2 status documented when relevant. | column missing |
| G-EC1 | critical | warning | Enhanced conversions/offline conversion quality documented. | column missing |
| G-PMAX1 | high | warning | PMax rows include asset group and asset strength evidence. | PMax rows: 2; asset group: missing; asset strength: missing |
| G-ST1 | high | warning | Search term export evidence available for waste review. | column: missing |
| G-AIMAX1 | medium | warning | AI Max status should be documented for Search/DSA/ACA/broad-match risk. | column: missing |

## Canonical Columns

| Canonical Field | Detected Column |
| --- | --- |
| bid_strategy | Bid strategy type |
| budget | Budget |
| campaign | Campaign |
| campaign_status | Campaign status |
| campaign_type | Campaign type |
| clicks | Clicks |
| conversions | Conversions |
| cost | Cost |
| impressions | Impr. |

## Detected Columns

```json
{
  "campaign": "Campaign",
  "ad_group": null,
  "ad": null,
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
- 2026-05-16 - Imported 11 rows from `.raw/sources/exports/google/2026-05-16-campaign-report.csv`.
