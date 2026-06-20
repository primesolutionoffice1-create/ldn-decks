# Service Pages OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_GrBWV3Ma88xFmBKG2GTA912HeQq7`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for ten remaining high-intent service pages.
- Reason: strengthen preview clarity and conversion-page reputation signals for service-specific sharing, crawling, and AI citation contexts.

## Pages Completed

- `/services/concrete-washing` -> `/social/concrete-washing-service-social.png`
- `/services/deck-inspection` -> `/social/deck-inspection-service-social.png`
- `/services/deck-replacement` -> `/social/deck-replacement-service-social.png`
- `/services/deck-stair-lighting` -> `/social/deck-stair-lighting-service-social.png`
- `/services/deck-washing` -> `/social/deck-washing-service-social.png`
- `/services/entry-doors` -> `/social/entry-doors-service-social.png`
- `/services/fence` -> `/social/fence-installation-service-social.png`
- `/services/fence-cleaning` -> `/social/fence-cleaning-service-social.png`
- `/services/fire-pits` -> `/social/fire-pits-service-social.png`
- `/services/house-siding-washing` -> `/social/house-siding-washing-service-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 159 unique OG images, 159 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten service pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
