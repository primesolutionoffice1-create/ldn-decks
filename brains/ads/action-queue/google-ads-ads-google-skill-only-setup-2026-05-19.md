---
brain_schema: ads-brain.v1
type: action
platform: google
priority: P1
campaign: "multiple"
ad_group: "multiple"
status: proposed
risk: medium
owner_approval_required: true
source_skill:
  - "/Users/ldndecks/.codex/skills/ads-google/SKILL.md"
  - "/Users/ldndecks/.codex/skills/ads/references/google-audit.md"
  - "/Users/ldndecks/.codex/skills/ads/references/scoring-system.md"
source_files:
  - "/Users/ldndecks/Downloads/Campaign report.csv"
  - "/Users/ldndecks/Downloads/Ad group report.csv"
  - "/Users/ldndecks/Downloads/Ad report.csv"
  - "/Users/ldndecks/Downloads/Search terms report.csv"
  - "/Users/ldndecks/Downloads/Search keyword report (4).csv"
created: "2026-05-19"
proposed_by: "Codex using newly installed ads-google skill only"
approved_by: ""
applied_on: ""
review_on: "2026-06-02"
---

# Google Ads Setup From Newly Installed Ads-Google Skill Only

## Context

This is a clean re-check using only the newly installed Claude Ads / `ads-google` skill and the Google Ads CSV exports.

No historical Ads Brain decisions were used as evidence. No live Google Ads changes were made.

The export period is **April 16, 2026 - May 15, 2026**, which satisfies the skill requirement of at least 30 days of data plus a Search Terms Report.

## Findings

- Data available:
  - Campaign rows: `17`
  - Ad group rows: `45`
  - Ad rows: `73`
  - Search keyword rows: `642`
  - Search terms rows: `6,500`
- Active campaign setup in export:
  - `SRCH | Composite | 3 Counties | Calls`
  - `SRCH | Replacement + Resurfacing | 3 Counties | Calls`
  - `SRCH | Branded | 3 Counties | Calls`
- Active Search campaign budgets:
  - Composite: `$90/day`
  - Replacement + Resurfacing: `$45/day`
  - Branded: `$15/day`
- Active Search campaigns are using `Maximize Conversions`, which matches the skill requirement that broad/expansion should only run with Smart Bidding.
- Active campaigns are still marked `Eligible (Learning)`, so the skill logic says avoid heavy budget or bid-strategy changes.
- Search terms with `>$10` spend and `0` conversions: `82` terms, about `$2,076.84` visible cost.
- Keyword Quality Score is weak where scored:
  - Average QS: about `4.0`
  - QS `<= 4`: `42` of `63` scored enabled keywords
  - Expected CTR `Below average`: `57` enabled keyword rows
  - Ad relevance `Below average`: `27` enabled keyword rows
- RSA/ad strength:
  - `Excellent`: `35`
  - `Good`: `12`
  - `Average`: `16`
  - `Poor`: `3`
  - `Pending`: `1`

## Recommendations

### 1. Do today

Keep the active Search-only structure and do not scale while campaigns are learning:

- Composite: keep `$90/day`
- Replacement + Resurfacing: keep `$45/day`
- Branded: keep `$15/day`
- Keep old paused campaigns paused.
- Keep PMax/Demand Gen paused until Search quality and conversion tracking are verified.

Priority score: 9/10 | Revenue: 9 | Urgency: 9 | Difficulty: 2 | Speed: 8 | Confidence: 9

### 2. Do this week

Create a new shared negative keyword review list from actual Search Terms. Per the installed skill, do not use broad-match negatives by default. Use:

- Exact match for specific irrelevant queries.
- Phrase match for repeated irrelevant intent patterns.
- No negatives for core commercial deck-builder terms unless there is explicit owner confirmation.

Initial high-confidence negative candidates from the export:

| Match type | Term | Reason |
| --- | --- | --- |
| phrase | `tart lumber` | Supplier/material-store intent |
| phrase | `decksdirect` | E-commerce/material-store intent |
| phrase | `nova stone ashburn` | Off-offer hardscape/supplier intent |
| phrase | `builders firstsource` | Supplier intent |
| phrase | `tw perry leesburg` | Supplier intent |
| phrase | `core outdoor living` | Competitor intent |
| phrase | `sunburst decks` | Competitor intent |
| phrase | `sundeck medics llc` | Competitor/low-fit repair intent |
| phrase | `contractors in my area` | Too generic; weak deck-specific intent |
| phrase | `manassas home improvement` | Generic home-improvement intent |
| phrase | `patio repair near me` | Off-offer low-ticket patio repair intent |
| phrase | `deck inspection` | Low-ticket inspection intent |
| exact | `[see dirt run]` | Irrelevant/non-deck brand query |
| phrase | `loudoun construction` | Generic construction intent |
| phrase | `loudoun deck and fence` | Fence/mixed-service intent |

Priority score: 9/10 | Revenue: 8 | Urgency: 9 | Difficulty: 3 | Speed: 9 | Confidence: 8

### 3. Needs approval

Recommended change:
Add the negative keyword candidates above as a **reviewed Phase 1 negative list** in Google Ads. Use phrase match unless marked exact.

Reason:
The installed `ads-google` skill says negatives must come from actual Search Terms, and only terms with `>$10` spend and `0` conversions should be treated as waste candidates. The export shows about `$2,076.84` visible cost across those candidates, with clear supplier, competitor, and off-offer patterns.

Expected impact:
Reduce low-fit clicks and improve Smart Bidding signal quality during the learning period.

Risk level:
Low to medium. Negatives are reversible, but phrase match can block related queries if terms are too broad.

Rollback plan:
Remove the newly added negatives from the shared list or campaign-level negative list and compare Search Terms after 7-14 days.

Approval required: YES

### 4. Do not do

- Do not enable AI Max yet. The newly installed skill says AI Max requires strong negative keyword coverage first.
- Do not add broad match expansion yet.
- Do not reactivate PMax/Demand Gen yet.
- Do not switch bid strategy while the three active Search campaigns are still learning.
- Do not reduce budgets based on the small active-campaign sample alone.
- Do not apply negatives to core commercial intent terms:
  - `deck repair near me`
  - `deck replacement near me`
  - `deck builders near me`
  - `fairfax deck builders`
  - `trex decking`
  - `ldn decks`

Priority score: 10/10 | Revenue: 9 | Urgency: 10 | Difficulty: 1 | Speed: 10 | Confidence: 10

### 5. Single highest ROI action

Apply the reviewed Phase 1 negative list after approval, then re-export Search Terms in 7-14 days.

Priority score: 9/10 | Revenue: 8 | Urgency: 9 | Difficulty: 3 | Speed: 9 | Confidence: 8

## Google Ads Setup Rules To Use Going Forward

These are the settings rules from the newly installed `ads-google` skill:

- Use Smart Bidding for campaigns with enough conversion history.
- Do not pair intentional Broad Match with Manual CPC.
- Keep brand and non-brand separated.
- Use `People in` location targeting for local service campaigns.
- Keep Display Network off for Search campaigns unless there is a documented reason.
- Review Search Partners separately; the skill treats Search Partners off as a warning, not a fail.
- Keep campaign/ad group naming consistent.
- Keep RSAs at 8+ headlines and 3+ descriptions.
- Fix `Poor` and `Average` RSAs before scaling.
- Do not let PMax run without campaign-level negatives, brand exclusions, and asset depth.

## Approval Gates

- Add negative keywords live: approval required.
- Change budgets: approval required.
- Change bidding: approval required.
- Enable AI Max/Broad Match: approval required.
- Enable PMax/Demand Gen: approval required.
- Change conversion tracking/GTM/GA4: approval required.

