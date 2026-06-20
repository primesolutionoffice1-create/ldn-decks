# Trust Proof + Guides OG Cleanup - 2026-06-02

## Production Result

- Final deployment: `dpl_96Lym4x3Uaatrm7XmD7EZGKgDZRR`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for review proof, press, referral, lead magnet, and homeowner decision guide pages.
- Reason: strengthen reputation visibility, proof-page clarity, and guide preview consistency for search, sharing, and AI citation contexts.

## Pages Completed

- `/ldn-decks-reviews-yelp` -> `/social/ldn-decks-reviews-yelp-social.png`
- `/lead-magnets/nova-deck-permit-checklist-2026` -> `/social/nova-deck-permit-checklist-social.png`
- `/press` -> `/social/press-media-kit-social.png`
- `/referral-partners` -> `/social/referral-partners-social.png`
- `/review` -> `/social/leave-review-social.png`
- `/pool-deck-builder-northern-virginia` -> `/social/pool-deck-builder-northern-virginia-social.png`
- `/porch-repair-vs-replacement-northern-virginia` -> `/social/porch-repair-vs-replacement-social.png`
- `/porch-vs-deck-which-should-you-build` -> `/social/porch-vs-deck-social.png`
- `/pressure-washing-deck-northern-virginia` -> `/social/pressure-washing-deck-northern-virginia-social.png`
- `/questions-to-ask-before-building-a-deck` -> `/social/questions-before-building-deck-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 179 unique OG images, 179 healthy images, and 0 issues.
- New PNG assets were verified at 1200 x 630.
- `node scripts/seo-link-audit.mjs` passed with 260 sitemap URLs, 318 internal links, and 0 bad links.
- `npm run lint` passed.
- `npm run build` passed with 342 static pages generated.
- Forced production deploy passed with 342 static pages generated on Vercel.
- Exact live HTML checks confirmed the expected `og:image` and `twitter:image` tags on all ten trust/proof guide pages.
- `npm run seo:daily-check` passed and IndexNow accepted 260 submitted URLs.

## Remaining Blockers

- Call attribution is still not configured.
- Consent/CMP is still not configured.
- Lead quality proof is still missing.
- Scaling gate remains RED until measurement integrity and lead-quality evidence are complete.
