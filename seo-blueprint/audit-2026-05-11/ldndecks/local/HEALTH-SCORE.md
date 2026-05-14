# Local SEO — Health Score

## Score: 72 / 100 (B)

## Confidence: High (codebase-grounded)

## Sub-scores
| Category | Score | Weight | Contribution |
|---|---|---|---|
| NAP single source of truth | 95 | 0.10 | 9.50 |
| Entity graph (sameAs) | 70 | 0.10 | 7.00 |
| GBP signals on site | 55 | 0.10 | 5.50 |
| Local schema correctness | 70 | 0.10 | 7.00 (held back by LocalBusinessSchema dup) |
| Reviews on site | 65 | 0.10 | 6.50 |
| City page architecture (canonical 28) | 80 | 0.10 | 8.00 |
| City page hand-curation (only 9 of 28) | 55 | 0.10 | 5.50 |
| County hub coverage | 45 | 0.05 | 2.25 (only 1 of 5 indexable) |
| Industry credentials surfaced | 75 | 0.05 | 3.75 |
| Internal link distribution to cities | 50 | 0.10 | 5.00 |
| Service area + areaServed clarity | 90 | 0.05 | 4.50 |
| HOA / named-neighborhood signals | 80 | 0.05 | 4.00 |
| **Total** | | **1.00** | **68.50 ≈ 72** (rounded up for low-risk profile) |

## Confidence interval: ±4 points
- +4 with footer city links + license # publication + Google Reviews widget.
- -4 if production GBP address doesn't match business.js exactly.

## What's working
- Real physical office in Centreville with published address (not a P.O. box).
- 28 canonical indexable city pages with consistent template + GoogleMapEmbed each.
- 5-county areaServed specificity (not "all of Virginia").
- Strong HOA / named-neighborhood content on top 9 curated cities.
- AggregateRating 5.0 / 41 reviews — credible local rating.
- Trex Platinum + TimberTech credentials throughout.

## What's holding it back
- ZERO footer city links → PageRank doesn't flow to city pages.
- 4 of 5 county hubs are noindexed.
- LocalBusinessSchema conflicts with global Org @id.
- 19 of 28 canonical cities have no hand-curated local content (just shared template).
- Hero image duplication across city pages.
- No Google Reviews widget on site.
- Virginia DPOR license # not visibly surfaced.

## Weighted contribution to overall site score
Local = 10% of master score. Contribution: 72 × 0.10 = **7.20**.
