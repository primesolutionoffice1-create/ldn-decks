# Education + Design OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_EWPdkegCsXTCNCj4MHHAVCdWxV9k`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for educational, design, safety, and decision-support deck pages.
- Reason: strengthen AI/SEO answer quality, visual preview clarity, and homeowner decision relevance for non-city informational searches.

## Pages Completed

- `/cable-railing-for-decks-northern-virginia` -> `/social/cable-railing-decks-northern-virginia-social.png`
- `/covered-deck-builder-northern-virginia` -> `/social/covered-deck-builder-northern-virginia-social.png`
- `/deck-enclosure-ideas-northern-virginia` -> `/social/deck-enclosure-ideas-northern-virginia-social.png`
- `/deck-footing-code-northern-virginia` -> `/social/deck-footing-code-northern-virginia-social.png`
- `/deck-lighting-ideas-northern-virginia` -> `/social/deck-lighting-ideas-northern-virginia-social.png`
- `/deck-maintenance-checklist-virginia` -> `/social/deck-maintenance-checklist-virginia-social.png`
- `/deck-railing-options-northern-virginia` -> `/social/deck-railing-options-northern-virginia-social.png`
- `/deck-remodeling` -> `/social/deck-remodeling-social.png`
- `/deck-resurfacing-vs-replacement` -> `/social/deck-resurfacing-vs-replacement-social.png`
- `/deck-safety-inspection-checklist` -> `/social/deck-safety-inspection-checklist-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 139 unique OG images, 139 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten education/design pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
