---
brain_schema: "ads-brain.v1"
title: "Google Ads Export 2026-05-15 - Google Ads Editor import: 02-ad-groups"
created: "2026-05-15"
updated: "2026-05-15"
type: "source"
status: "imported"
platform: "google"
source_path: ".raw/sources/exports/google/2026-05-15-02-ad-groups.csv"
source_hash: "0a3609df6de685b8ecdd37cd8542c65eccc4b16e847a2b670efd437d716b14f8"
sources:
  - ".raw/sources/exports/google/2026-05-15-02-ad-groups.csv"
---

# Google Ads Export 2026-05-15 - Google Ads Editor import: 02-ad-groups

## Compiled Truth

Source `.raw/sources/exports/google/2026-05-15-02-ad-groups.csv` imported for [[Google Ads]].

Export type: **performance_export**.

## Vault Links

- [[wiki/sources/_index|Sources Hub]]
- [[wiki/platforms/_index|Platforms Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Campaign Export Import Workflow]]

## Totals

| Metric | Value |
| --- | --- |
| Rows | 9 |
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
- 2026-05-15 - Imported 9 rows from `.raw/sources/exports/google/2026-05-15-02-ad-groups.csv`.
