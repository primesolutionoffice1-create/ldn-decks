# Final Generic OG Cleanup - 2026-06-02

## Production Result

- Deployment: `dpl_5YN8gjnNmWJW6HeFvzREQZcu78LF`
- Production alias: `https://ldndecks.com`
- Scope: replaced the last eight page-level metadata references to `/images/img36.jpeg` with page-specific social preview cards.
- Scaling status impact: improves share-preview clarity, SERP/social entity confidence, and page-level topical differentiation. It does not remove the separate lead-quality proof, call-attribution, or CMP blockers.

## Pages Completed

- `/best-deck-stain-sealer-virginia` -> `/social/best-deck-stain-sealer-virginia-social.png`
- `/composite-deck-builder-loudoun` -> `/social/composite-deck-builder-loudoun-social.png`
- `/deck-lighting-railings-stairs-addon-cost` -> `/social/deck-lighting-railings-stairs-addon-cost-social.png`
- `/deck-resurfacing-northern-virginia` -> `/social/deck-resurfacing-northern-virginia-social.png`
- `/deck-warranty-guide-northern-virginia` -> `/social/deck-warranty-guide-northern-virginia-social.png`
- `/loudoun-county-hoa-deck-rules` -> `/social/loudoun-county-hoa-deck-rules-social.png`
- `/showcase/rooftop-deck-washington-dc` -> `/social/rooftop-deck-washington-dc-social.png`
- `/wood-vs-composite-deck-long-term-cost` -> `/social/wood-vs-composite-deck-long-term-cost-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 81 unique OG images, 81 healthy images, and 0 issues.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Live production checks confirmed the new `og:image` and `twitter:image` tags on all eight pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
