# Practical + Commercial OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_2ZCURvzyTD4uv8cWcGFcyS2R4qGM`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for remaining commercial, gallery, planning tool, and homeowner guide pages.
- Reason: improve visual clarity, shareability, and AI/SEO consistency for practical planning and project-intent pages.

## Pages Completed

- `/rooftop-deck-builder-northern-virginia` -> `/social/rooftop-deck-builder-northern-virginia-social.png`
- `/screened-porch-cost-northern-virginia` -> `/social/screened-porch-cost-northern-virginia-social.png`
- `/showcase` -> `/social/showcase-gallery-social.png`
- `/stamped-concrete-patio-northern-virginia` -> `/social/stamped-concrete-patio-northern-virginia-social.png`
- `/three-season-room-northern-virginia` -> `/social/three-season-room-northern-virginia-social.png`
- `/tools` -> `/social/deck-planning-tools-social.png`
- `/trex-performance-products` -> `/social/trex-performance-products-social.png`
- `/under-deck-ceiling-ideas` -> `/social/under-deck-ceiling-ideas-social.png`
- `/what-size-deck-should-i-build` -> `/social/what-size-deck-should-i-build-social.png`
- `/winterize-your-deck-northern-virginia` -> `/social/winterize-deck-northern-virginia-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 189 unique OG images, 189 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed on rerun with 260 sitemap URLs, 318 internal links, and 0 bad links. The first run had one transient `FETCH_FAIL` that cleared immediately after build.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten practical/commercial pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
