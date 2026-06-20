# HOA Rules OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_61y3jz8o5f9Q85gj62397kGLqxT2`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for HOA rules pages and the Northern Virginia HOA rules hub.
- Reason: strengthen local authority, HOA approval relevance, and preview consistency for community-specific deck planning searches.

## Pages Completed

- `/ashburn-village-hoa-deck-rules` -> `/social/ashburn-village-hoa-deck-rules-social.png`
- `/belmont-country-club-hoa-deck-rules` -> `/social/belmont-country-club-hoa-deck-rules-social.png`
- `/brambleton-hoa-deck-rules` -> `/social/brambleton-hoa-deck-rules-social.png`
- `/broadlands-hoa-deck-rules` -> `/social/broadlands-hoa-deck-rules-social.png`
- `/hoa-deck-rules-northern-virginia` -> `/social/hoa-deck-rules-northern-virginia-social.png`
- `/lansdowne-hoa-deck-rules` -> `/social/lansdowne-hoa-deck-rules-social.png`
- `/one-loudoun-hoa-deck-rules` -> `/social/one-loudoun-hoa-deck-rules-social.png`
- `/stone-ridge-hoa-deck-rules` -> `/social/stone-ridge-hoa-deck-rules-social.png`
- `/sully-station-hoa-deck-rules` -> `/social/sully-station-hoa-deck-rules-social.png`
- `/virginia-run-hoa-deck-rules` -> `/social/virginia-run-hoa-deck-rules-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 129 unique OG images, 129 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten HOA rules pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
