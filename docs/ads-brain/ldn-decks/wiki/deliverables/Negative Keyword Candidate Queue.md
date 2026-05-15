---
brain_schema: "ads-brain.v1"
title: "Negative Keyword Candidate Queue"
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
---

# Negative Keyword Candidate Queue

## Compiled Truth

Negative keyword candidates are not approved changes. Review intent and match type.

SpyFu keyword intelligence and the updated import pack add campaign-level
separation rules even before a real search-term export is available. These are
already reflected in `11-campaign-negative-keywords.csv` for the deck-builder
campaign, but still require operator review before live import.

| Platform | Term | Campaign | Cost | Clicks | Source |
| --- | --- | --- | --- | --- | --- |
| None detected |  |  |  |  |  |

## SpyFu Intent Triage

| Candidate | Recommended Handling | Why | Source |
|---|---|---|---|
| deck repair | Keep in separate repair campaign or exclude from premium build/replacement/deck-builder campaigns | Repair intent can undercut high-ticket replacement/composite economics | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |
| deck repair near me | Keep separate or negative in build/replacement/deck-builder campaigns | Large volume but different job size and sales process | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |
| fence company / fencing | Negative for current deck launch campaigns unless a dedicated fence campaign is approved | Adjacent service should not drain deck-builder budget | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |
| hardscaping near me | Negative unless hardscaping is actively sold with a dedicated LP and budget | Adjacent but not current deck-builder offer | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |
| construction company | Negative/bid-block for Search launch | Too broad; likely irrelevant contractor intent | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |
| patio contractors near me | Separate only if patio offer, budget, and landing page are active | Adjacent service with different intent | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |
| screened in porch / porch builders near me | Separate ad group/campaign only if this is an active offer | Porch intent should not drain core deck budget | [[SpyFu PPC Keyword Intelligence 2026-05-15]] |

## Related

- [[wiki/deliverables/_index|Deliverables Hub]]
- [[Approval Queue]]
- [[Weekly Client Report]]
- [[Paid Media Safety Rules]]

---

## Timeline
- 2026-05-15 - Regenerated from 22 source summaries.
- 2026-05-15 - Regenerated from 11 source summaries.
- 2026-05-15 - Added SpyFu intent triage for repair, patio, porch, fence, hardscaping, and broad construction terms.
