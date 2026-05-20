---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-16 - search-terms-report 2026-05-16 Google Ads UI export"
created: "2026-05-16"
updated: "2026-05-16"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
source_hash: "f5831afab95846bbbe4da38765bbd7e3b22c17de706e3913fea741cb2f3c6c67"
sources:
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
---

# Google Ads Export 2026-05-16 - search-terms-report 2026-05-16 Google Ads UI export

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-16-search-terms-report.csv` imported for [[Google Ads]].

Export type: **search_terms**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 6493 |
| Cost | 3587.35 |
| Impressions | 12481.0 |
| Clicks | 468.0 |
| Conversions | 29.0 |
| Revenue | 0.0 |
| CTR | 3.75% |
| CPA | 123.7 |
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

## Canonical Columns

| Canonical Field | Detected Column |
| --- | --- |
| ad_group | Ad group |
| campaign | Campaign |
| campaign_type | Campaign type |
| clicks | Clicks |
| conversions | Conversions |
| cost | Cost |
| impressions | Impr. |
| match_type | Match type |
| search_term | Search term |

## Detected Columns

```json
{
  "campaign": "Campaign",
  "ad_group": "Ad group",
  "ad": "Added/Excluded",
  "search_term": "Search term",
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
- 2026-05-16 - Imported 6493 rows from `.raw/sources/exports/google/2026-05-16-search-terms-report.csv`.
