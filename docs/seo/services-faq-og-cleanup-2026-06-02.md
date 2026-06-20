# Services + FAQ OG Cleanup - 2026-06-02

## Production Result

- Deployment: `dpl_HJ4x7tR3bBA9C21Qmwa5WRE1n4e2`
- Production alias: `https://ldndecks.com`
- Scope: replaced the remaining explicit page-level `/images/img36.jpeg` metadata references in `src/app` with service-specific or FAQ-specific social cards.
- Result: no `page.js` metadata declaration in `src/app` now uses `/images/img36.jpeg` as an explicit page image.

## Pages Completed

- `/faqs` -> `/social/faqs-social.png`
- `/services` -> `/social/services-social.png`
- `/services/gazebo-pergola` -> `/social/gazebo-pergola-social.png`
- `/services/new-decks` -> `/social/new-decks-social.png`
- `/services/porches` -> `/social/porches-social.png`
- `/services/porches/open-porch` -> `/social/open-porch-social.png`
- `/services/porches/front-porch` -> `/social/front-porch-social.png`
- `/services/porches/screened-porch` -> `/social/screened-porch-builder-northern-virginia-social.png`
- `/services/deck-maintenance` -> `/social/deck-maintenance-social.png`
- `/services/deck-resurfacing` -> `/social/deck-resurfacing-service-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- No `src/app/**/page.js` metadata references remain for `/images/img36.jpeg`.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 89 unique OG images, 89 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Live production checks confirmed the expected `og:image` and `twitter:image` tags on all ten pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
