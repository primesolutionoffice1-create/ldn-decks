# Outdoor Services OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_6GjTXtNEgfAYPD1zkHx9iBcWfgfT`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for outdoor living, premium upgrade, exterior cleaning, and service pages.
- Reason: improve preview clarity for high-intent outdoor project pages and increase reputation consistency across service-specific crawls and shares.

## Pages Completed

- `/services/outdoor-washing` -> `/social/outdoor-washing-service-social.png`
- `/services/trex-calm-shell` -> `/social/trex-clam-shell-service-social.png`
- `/services/trex-railings` -> `/social/trex-railings-service-social.png`
- `/services/under-deck-patios` -> `/social/under-deck-patios-service-social.png`
- `/services/windows` -> `/social/windows-service-social.png`
- `/louvered-pergola-northern-virginia` -> `/social/louvered-pergola-northern-virginia-social.png`
- `/multi-level-deck-builder-northern-virginia` -> `/social/multi-level-deck-builder-northern-virginia-social.png`
- `/outdoor-kitchen-builder-northern-virginia` -> `/social/outdoor-kitchen-builder-northern-virginia-social.png`
- `/paver-vs-flagstone-patio-northern-virginia` -> `/social/paver-vs-flagstone-patio-northern-virginia-social.png`
- `/pet-friendly-deck-design` -> `/social/pet-friendly-deck-design-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 169 unique OG images, 169 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten outdoor/services pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
