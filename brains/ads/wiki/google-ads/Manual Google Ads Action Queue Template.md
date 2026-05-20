---
brain_schema: ads-brain.v1
type: template
platform: google
title: "Manual Google Ads Action Queue Template"
created: "2026-05-11"
updated: "2026-05-11"
owner: "Loudoun Decks"
status: active
---

# Manual Google Ads Action Queue Template

Every recommendation goes into `action-queue/` as one markdown file using the schema below. Nothing is applied without owner approval (see [[No Live Changes Without Approval]]).

## File naming

`action-queue/<YYYY-MM-DD>-<priority>-<short-slug>.md`
Example: `action-queue/2026-05-11-P1-add-loudoun-county-neg-locs.md`

## Frontmatter (required)

```yaml
---
brain_schema: ads-brain.v1
type: action
platform: google
priority: P0 | P1 | P2 | P3      # P0 = tracking/safety, P1 = budget leak, P2 = optimization, P3 = polish
campaign: "<Campaign name in Google Ads>"   # exact string
ad_group: "<Ad group name>"                  # or "n/a"
status: proposed | approved | applied | rejected | rolled-back
risk: low | medium | high
owner_approval_required: true | false        # default true
source_files:
  - ".raw/google-ads/2026-05/gads_search_terms_20260411_20260510.csv"
created: "YYYY-MM-DD"
proposed_by: "Ads Brain"
approved_by: ""        # filled by owner
applied_on: ""         # date the change was pushed live in Google Ads
review_on: ""          # date to re-evaluate (typically +14 days)
---
```

## Body (required sections)

### Exact action

One imperative paragraph the owner can paste-execute. Be specific:
- "In campaign **Decks - NoVA - Search**, add `kitchen remodel` as a **campaign-level negative keyword** with match type **Exact**."
- "Pause keyword `composite decking` (Phrase) in ad group **Composite - Brand**. Reason: $XYZ spent, 0 conversions in 30 days."

### Reason

Cite evidence. Source rows or aggregated numbers from the named export. No claim without citation.

- Source: `.raw/google-ads/2026-05/gads_search_terms_20260411_20260510.csv`, row(s) X-Y
- Metric: 47 clicks, $312 cost, 0 conversions, 30 days
- Pattern: irrelevant search term (kitchen remodel) matching broad keyword (home remodel)

### Expected impact

Quantified where possible. Be honest about uncertainty.

- Save ~$X / month at current pace.
- Reduce wasted clicks by N/month.
- Expected CPA improvement: from $A to $B (model: cost stays flat, conversions +Δ).
- If unknown: "Expected impact: signal only — clean room for measurement."

### Risk level

- **Low**: reversible in one click (negative keyword, pause, label).
- **Medium**: budget changes < 20%, bid strategy targets, single asset swap.
- **High**: bid strategy type change, account structure change, mass keyword deletion, conversion action edits.

### Rollback plan

How to undo if it goes wrong. One sentence.

### Owner approval required

`yes` for everything except P3 polish items the owner has pre-authorized in `shipping-rules.md`.

### Approval log

- Proposed: YYYY-MM-DD by Ads Brain
- Approved: YYYY-MM-DD by <owner>
- Applied: YYYY-MM-DD in Google Ads UI by <owner>
- Reviewed: YYYY-MM-DD — outcome: <improved / no change / regressed>

---

## Worked example (copy this, replace fields)

```markdown
---
brain_schema: ads-brain.v1
type: action
platform: google
priority: P1
campaign: "Decks - NoVA - Search"
ad_group: "Composite Decking - General"
status: proposed
risk: low
owner_approval_required: true
source_files:
  - ".raw/google-ads/2026-05/gads_search_terms_20260411_20260510.csv"
created: "2026-05-11"
proposed_by: "Ads Brain"
---

# Add 8 negative search terms to Composite Decking - General

## Exact action

In ad group **Composite Decking - General**, add these as **Exact match negative keywords**:
- kitchen remodel
- bathroom remodel
- composite door
- composite countertop
- composite roofing
- diy decking
- decking jobs
- decking course

## Reason

Source: `.raw/google-ads/2026-05/gads_search_terms_20260411_20260510.csv`
Combined: 213 clicks, $1,184 spend, 0 conversions, 30 days. None are deck installation intent.

## Expected impact

Save ~$1,184 / 30 days at current pace. Cleaner data for Smart Bidding (if active).

## Risk level

Low. Negative keywords are reversible in one click.

## Rollback plan

Remove the negatives from the ad group's negative keyword list.

## Owner approval required

Yes.
```

---

## Priority guide

| Priority | Trigger | Examples |
|---|---|---|
| **P0** | Tracking, billing, account safety | Conversion misfire, missing consent mode, expired card, missing 2FA |
| **P1** | Active budget leak | Negative keywords, paused waste, geo cleanup, schedule fix |
| **P2** | Optimization | Bid strategy tuning (post-tracking), ad copy tests, asset swaps |
| **P3** | Polish | Label hygiene, naming, structured snippets |
