# Technical SEO — Health Score

## Score: 78 / 100 (B+)

## Confidence: High
Codebase-grounded. Every claim cross-referenced against source. No reliance on truncated subagent output.

## Sub-scores
| Category | Score | Weight | Contribution | Notes |
|---|---|---|---|---|
| Crawlability | 90 | 0.18 | 16.20 | robots.js excellent, sitemap solid, redirects clean |
| Indexability | 70 | 0.18 | 12.60 | Strong canonicals but 47 routes noindexed by policy; needs strategy decision |
| Security headers | 88 | 0.12 | 10.56 | Comprehensive set; only CSP missing |
| URL structure | 80 | 0.10 | 8.00 | Consistent, but 3 conventions for HOA/permit content |
| Mobile | 85 | 0.08 | 6.80 | Auto-viewport, AVIF/WebP, deviceSizes — needs lab confirmation |
| CWV (lab inference) | 75 | 0.15 | 11.25 | Preload + fetchPriority good; per-page preload missing on city pages |
| Schema presence (catalog) | 75 | 0.08 | 6.00 | Comprehensive emission; validation issues handled in Schema audit |
| JS rendering | 90 | 0.06 | 5.40 | App Router static gen; no critical content client-side |
| IndexNow / freshness | 65 | 0.05 | 3.25 | Key file present, auto-submission missing |
| **Total** | | **1.00** | **80.06** | (rounded down due to noindex strategy uncertainty) |

## Final: 78 / 100

## Confidence interval: ±3 points
- +3 if CWV lab measurement confirms < 2.5s LCP and < 0.1 CLS on city pages.
- -3 if mobile Lighthouse reveals INP > 300ms (likely from `PromoModal` / GTM interaction).

## Weighted contribution to overall site score
Technical SEO = 22% of the master health score. Contribution: 78 × 0.22 = **17.16**.
