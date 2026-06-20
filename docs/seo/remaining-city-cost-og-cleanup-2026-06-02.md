# Remaining City + Cost OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_H131FPqCWe4D74Kkis5pbzW5ek4N`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for remaining city landing pages and high-intent deck cost guides that still relied on generic metadata.
- Reason: improve social/link preview clarity, AI/SEO entity consistency, and reputation visibility for local and budget-intent searches.

## Pages Completed

- `/deck-builder-arlington-va` -> `/social/deck-builder-arlington-va-social.png`
- `/deck-builder-centreville-va` -> `/social/deck-builder-centreville-va-social.png`
- `/deck-builder-great-falls-va` -> `/social/deck-builder-great-falls-va-social.png`
- `/deck-builder-stafford-va` -> `/social/deck-builder-stafford-va-social.png`
- `/deck-builder-sterling-va` -> `/social/deck-builder-sterling-va-social.png`
- `/deck-builder-tysons-va` -> `/social/deck-builder-tysons-va-social.png`
- `/deck-cost-12x20-northern-virginia` -> `/social/deck-cost-12x20-northern-virginia-social.png`
- `/deck-cost-16x20-northern-virginia` -> `/social/deck-cost-16x20-northern-virginia-social.png`
- `/deck-cost-20x20-northern-virginia` -> `/social/deck-cost-20x20-northern-virginia-social.png`
- `/best-time-to-build-a-deck-northern-virginia` -> `/social/best-time-to-build-deck-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 119 unique OG images, 119 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- `/deck-cost-calculator` is currently a client-only page and needs a server/client split before page-level metadata can be exported cleanly.
- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
