---
brain_schema: "ads-brain.v1"
title: "Approval Queue"
created: "2026-05-15"
updated: "2026-05-15"
type: "decision-log"
status: "active"
sources:
  - ".raw/sources/exports/google/2026-05-15-01-campaigns.csv"
  - ".raw/sources/exports/google/2026-05-15-02-ad-groups.csv"
  - ".raw/sources/exports/google/2026-05-15-03-keywords.csv"
  - ".raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv"
  - ".raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv"
  - ".raw/sources/exports/google/2026-05-15-06-sitelinks.csv"
  - ".raw/sources/exports/google/2026-05-15-07-callouts.csv"
  - ".raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv"
  - ".raw/sources/exports/google/2026-05-15-09-call-asset.csv"
  - ".raw/sources/exports/google/2026-05-15-10-location-targets.csv"
  - ".raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv"
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
  - "wiki/sources/Market Context 2026-05-15.md"
  - ".raw/sources/spyfu/2026-05-15-spyfu-ldndecks-keywords-observed.csv"
---

# Approval Queue

## Compiled Truth

Generated action queue from Ads Brain production checks.

No row is approved for account execution until a human owner updates approval
state and adds implementation notes.

| Action | Platform | Source | Owner | Confidence | Impact | Risk | Approval | Rollback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Resolve X-PI1: Tracking/privacy gate must be closed before optimization actions are trusted. | cross-platform | wiki/flows/Day 0 Tracking and Privacy Gate.md | LDN Decks | high | critical | Day 0 gate status: blocked | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve X-CLK1: Imported clicks are zero or missing. | cross-platform | .raw/sources/exports/google/2026-05-15-01-campaigns.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups.csv, .raw/sources/exports/google/2026-05-15-03-keywords.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks.csv, .raw/sources/exports/google/2026-05-15-07-callouts.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv, .raw/sources/exports/google/2026-05-15-09-call-asset.csv, .raw/sources/exports/google/2026-05-15-10-location-targets.csv, .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv | LDN Decks | high | high | Clicks 0.0. | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve X-ST1: No search-term hygiene candidates detected or no search-term export imported. | cross-platform | .raw/sources/exports/google/2026-05-15-01-campaigns.csv, .raw/sources/exports/google/2026-05-15-02-ad-groups.csv, .raw/sources/exports/google/2026-05-15-03-keywords.csv, .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv, .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv, .raw/sources/exports/google/2026-05-15-06-sitelinks.csv, .raw/sources/exports/google/2026-05-15-07-callouts.csv, .raw/sources/exports/google/2026-05-15-08-pmax-remarketing-assets.csv, .raw/sources/exports/google/2026-05-15-09-call-asset.csv, .raw/sources/exports/google/2026-05-15-10-location-targets.csv, .raw/sources/exports/google/2026-05-15-11-campaign-negative-keywords.csv | LDN Decks | high | medium | Negative keyword candidate queues are empty. | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-15-01-campaigns.csv | LDN Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-15-01-campaigns.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-15-01-campaigns.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-PMAX1: PMax rows include asset group and asset strength evidence. | google | .raw/sources/exports/google/2026-05-15-01-campaigns.csv | LDN Decks | high | high | PMax rows: 1; asset group: missing; asset strength: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-15-01-campaigns.csv | LDN Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-15-01-campaigns.csv | LDN Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-2: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv | LDN Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-2: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-2: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1-2: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv | LDN Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1-2: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-15-02-ad-groups.csv | LDN Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-3: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-15-03-keywords.csv | LDN Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-3: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-15-03-keywords.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-3: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-15-03-keywords.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1-3: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-15-03-keywords.csv | LDN Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1-3: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-15-03-keywords.csv | LDN Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-4: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv | LDN Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-4: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-4: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv | LDN Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1-4: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv | LDN Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1-4: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-15-04-responsive-search-ads.csv | LDN Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-5: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv | LDN Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |

## Operator Priority Queue

| Action | Platform | Source | Owner | Confidence | Impact | Risk | Approval | Rollback |
|---|---|---|---|---|---|---|---|---|
| Complete GTM/Google Ads/GA4 operator verification before optimization changes. | cross-platform | ../../../../docs/tracking-audit/FINAL-ATTRIBUTION-SIGNOFF.md; [[Day 0 Tracking and Privacy Gate]] | LDN Decks | high | critical | Code-side fixes are complete, but Smart Bidding still depends on tag and conversion-action settings. | needs_review | Keep campaigns paused or conservative; do not change bid strategies until verified. |
| Export real Google Ads performance, search terms, conversion actions, and campaign settings after tracking fixes. | google | [[Campaign Export Import Workflow]] | LDN Decks | high | high | Current imports are launch structure, not performance truth. | draft | Re-import as new raw sources; preserve existing import pack. |
| Expand exact/phrase coverage around `deck contractors near me`, `deck company near me`, and `deck construction near me` after search-term review. | google | [[SpyFu PPC Keyword Intelligence 2026-05-15]]; `.raw/sources/exports/google/2026-05-15-03-keywords.csv` | LDN Decks | medium | medium | Premature expansion before tracking proof can waste spend. | draft | Pause added keywords and revert to current import pack. |
| Keep repair, patio, porch, fence, hardscaping, and broad construction intent out of premium build/replacement campaigns unless separated. | google | [[SpyFu PPC Keyword Intelligence 2026-05-15]]; `.raw/sources/exports/google/2026-05-15-05-shared-negative-keywords.csv` | LDN Decks | high | high | Blocking true secondary offers if match type is too broad. | needs_review | Remove negatives only from campaign where the offer and landing page are active. |
| Map SpyFu core clusters to landing pages: composite, replacement, custom, contractors/builders near me, and branded. | google | [[SpyFu PPC Keyword Intelligence 2026-05-15]]; `GOOGLE-ADS-LAUNCH-CHECKLIST-2026.md` | LDN Decks | medium | medium | LP mismatch can lower quality and lead quality. | draft | Revert final URLs to launch checklist mapping. |

## Related

- [[wiki/decisions/_index|Decisions Hub]]
- [[Ads Health Scorecard]]
- [[Tracking and Attribution Risk Register]]
- [[Weekly Client Report]]

---

## Timeline
- 2026-05-15 - Regenerated approval queue from 72 production checks.
- 2026-05-15 - Added operator priority queue from tracking audit and SpyFu keyword intelligence.
- 2026-05-15 - Approval queue initialized.
