---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-15 - Google Ads Editor import: 03-keywords"
created: "2026-05-15"
updated: "2026-05-15"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-15-03-keywords.csv"
source_hash: "e79317f94d0f73cde94a4cac6b4920d2ac6980dab6b2f66aa6a7752ae1c38fa8"
sources:
  - ".raw/sources/exports/google/2026-05-15-03-keywords.csv"
---

# Google Ads Export 2026-05-15 - Google Ads Editor import: 03-keywords

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-15-03-keywords.csv` imported for [[Google Ads]].

Export type: **performance_export**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 105 |
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
| ad_group | Ad group |
| campaign | Campaign |
| campaign_status | Status |
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
- 2026-05-15 - Imported 105 rows from `.raw/sources/exports/google/2026-05-15-03-keywords.csv`.
