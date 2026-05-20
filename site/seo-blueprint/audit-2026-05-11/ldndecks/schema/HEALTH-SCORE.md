# Schema — Health Score

## Score: 58 / 100 (D+)

## Confidence: High (codebase-grounded)

## Sub-scores
| Category | Score | Weight | Contribution |
|---|---|---|---|
| Single source of truth | 95 | 0.15 | 14.25 |
| Global @graph composition | 90 | 0.10 | 9.00 |
| Homepage WebPage schema | 90 | 0.05 | 4.50 |
| Org-level uniqueness | 35 | 0.20 | 7.00 (LocalBusinessSchema conflict) |
| FAQPage uniqueness | 30 | 0.20 | 6.00 (duplicate emission on 8+ pages) |
| Article author identity | 60 | 0.10 | 6.00 (Organization instead of Person) |
| BreadcrumbList coverage | 55 | 0.05 | 2.75 (presence not confirmed sitewide) |
| Service schema completeness | 65 | 0.10 | 6.50 (likely missing names) |
| Validation pass-rate (top 28 city pages) | 45 | 0.05 | 2.25 (11+ FAIL/WARN) |
| **Total** | | **1.00** | **58.25 ≈ 58** |

## Confidence interval: ±5 points
- +5 once the LocalBusinessSchema is deleted and FAQPage duplicates are removed — expected score → 80+.
- -5 if `/services/*` Service schemas systematically have property issues.

## What's working
- Single-source-of-truth pattern in [src/lib/business.js](src/lib/business.js) is exactly right.
- Global `@graph` composition with proper `@id` linkage.
- AI-friendly speakable selectors on homepage.
- Comprehensive sameAs entity graph (X, Instagram, Facebook, Google Maps, Houzz, Yelp).
- Per-component emission pattern (`<JsonLd data={...}>`) is clean and reusable.

## What's broken
- `LocalBusinessSchema.jsx` emits a SECOND Organization-level entity per page with a conflicting `@id`, type (`HomeAndConstructionBusiness` vs global `GeneralContractor`), and `priceRange`. Used by 7 pages.
- 8 standalone city pages emit FAQPage twice (inline + via component).
- 6 FAQ components all default to `withSchema={true}` — risky combination on pages using multiple FAQ surfaces.
- Article author = Organization instead of Person.
- BreadcrumbList component exists but not visibly applied to most pages.

## Weighted contribution to overall site score
Schema = 10% of master score. Contribution: 58 × 0.10 = **5.80**.
