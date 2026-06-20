# Decision + Comparison OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_6uAqo2HGCrnXct4GiTsdqsSXh7Fa`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for comparison, ROI, timeline, sustainability, pricing, proof, and hiring-guide pages.
- Reason: improve social preview clarity and AI/SEO citation strength for homeowner decision searches.

## Pages Completed

- `/deck-staining-northern-virginia` -> `/social/deck-staining-northern-virginia-social.png`
- `/deck-vs-patio-which-is-right` -> `/social/deck-vs-patio-which-is-right-social.png`
- `/does-a-deck-add-value-to-your-home` -> `/social/does-a-deck-add-value-social.png`
- `/eco-friendly-composite-decking` -> `/social/eco-friendly-composite-decking-social.png`
- `/houzz-deck-projects` -> `/social/houzz-deck-projects-social.png`
- `/how-long-does-a-composite-deck-last` -> `/social/composite-deck-lifespan-virginia-social.png`
- `/how-long-to-build-a-deck-northern-virginia` -> `/social/deck-build-timeline-northern-virginia-social.png`
- `/how-tariffs-affect-deck-prices-2026` -> `/social/deck-prices-tariffs-2026-social.png`
- `/how-to-choose-a-deck-builder-northern-virginia` -> `/social/choose-deck-builder-northern-virginia-social.png`
- `/northern-virginia-deck-building-guide` -> `/social/northern-virginia-deck-building-guide-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 149 unique OG images, 149 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten decision/comparison pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
