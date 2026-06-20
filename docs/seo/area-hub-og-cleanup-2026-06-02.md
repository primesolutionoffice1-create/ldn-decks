# Area + Hub OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_A36r8BSpQr2JzZ6DYjPjXQaKSj8J`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for high-level area, county, education, blog, and scholarship hubs.
- Note: the first production deploy reused stale HTML for several routes. A forced Vercel redeploy with `--force` was completed, after which exact live meta tags verified correctly.

## Pages Completed

- `/areas-we-serve` -> `/social/areas-we-serve-social.png`
- `/near-you` -> `/social/deck-builder-near-you-social.png`
- `/near-you/loudoun-county` -> `/social/loudoun-county-deck-builder-hub-social.png`
- `/near-you/fairfax-county` -> `/social/fairfax-county-deck-builder-hub-social.png`
- `/near-you/prince-william-county` -> `/social/prince-william-county-deck-builder-hub-social.png`
- `/near-you/arlington-county` -> `/social/arlington-county-deck-builder-hub-social.png`
- `/near-you/stafford-county` -> `/social/stafford-county-deck-builder-hub-social.png`
- `/blog` -> `/social/blog-social.png`
- `/education` -> `/social/education-hub-social.png`
- `/scholarship` -> `/social/trades-scholarship-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 109 unique OG images, 109 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
