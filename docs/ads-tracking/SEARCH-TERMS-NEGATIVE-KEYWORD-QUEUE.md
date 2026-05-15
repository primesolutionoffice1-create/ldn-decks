# Search Terms Negative Keyword Queue — Loudoun Decks

**Date:** 2026-05-15
**Source:** Google Ads Search Terms, last 30 days: 2026-04-15 to 2026-05-14
**Scope:** first-pass waste review after conversion cleanup. No budget or bidding changes.

## Current Guardrail

Do not add broad negatives unless the term is unambiguously bad. Use exact or phrase match first so we do not block high-intent searches like `deck contractors near me`.

## High-Confidence Negative Candidates

These terms are poor intent or too broad for a premium deck builder. Add as exact match first.

| Search term | Spend | Clicks | Conversions | Recommended negative | Level | Reason |
|---|---:|---:|---:|---|---|---|
| `contractors in my area` | $63.46 | 8 | 0 | `[contractors in my area]` | Campaign/account list | Too broad; not deck-specific |
| `restoration contractors near me` | $54.04 | 7 | 0 | `[restoration contractors near me]` | Campaign/account list | Restoration intent is ambiguous/disaster-oriented, not deck-specific |
| `core outdoor living` | $66.41 | 3 | 0 | `[core outdoor living]` | Competitor review list | Competitor/brand term; only block if not intentionally conquesting |

## Hold / Do Not Negative Yet

These terms look imperfect, but should not be blocked without more data because they can still represent deck-buying intent.

| Search term | Spend | Clicks | Conversions | Decision | Reason |
|---|---:|---:|---:|---|---|
| `deck repair near me` | $110.04 | 8 | 0 | Hold | Core service term; needs better landing page/lead-quality review, not negative |
| `deck repair sterling va` | $99.19 | 5 | 2 | Keep | Converted under old setup; high local intent |
| `fairfax deck builders` | $67.94 | 1 | 0 | Hold | High-intent geo term; one click is not enough data |
| `deck contractors near me` | $53.14 | 2 | 0 | Keep/Hold | Core high-intent term |
| `loudoun deck and fence` | $126.77 combined visible rows | 21 | 1 | Hold | Competitor/brand-adjacent; can be useful if conquesting is intentional |
| `prince william home improvement reviews` | $61.86 | 2 | 1 | Hold | Looks broad, but reported a conversion under old data; validate with new tracking before blocking |

## Structural Findings

| Finding | Evidence | Action |
|---|---|---|
| AI Max expanded matches are spending materially | Visible totals: $3,292.21 spend, 31 conversions under old tracking | Monitor after tracking reset before expanding automation |
| Active campaigns have very little fresh data | New Search campaigns show near-zero conversions before GTM publish | Do not judge new campaigns until Version 25 collects real leads |
| Search terms include paused campaigns and PMax | Current view includes enabled + paused campaigns | Next pass should filter to enabled campaigns only |

## Next Implementation Step

Add the following exact negatives to the appropriate campaign/account-level negative list after confirming whether competitor conquesting is desired:

```text
[contractors in my area]
[restoration contractors near me]
```

Optional, only if competitor conquesting is not desired:

```text
[core outdoor living]
```

## Do Not Add These As Broad Negatives

```text
contractors
contractor
near me
deck contractors
restoration
home improvement
```

Broad versions could block valid homeowner searches.
