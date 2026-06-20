# Trust + Company OG Cleanup - 2026-06-02

## Production Result

- Deployment: `dpl_5ej3n4S5fwTs1ojDsxixKe3Hc1a3`
- Production alias: `https://ldndecks.com`
- Scope: added explicit social preview images for the main trust, reputation, contact, review, team, and credential pages.
- Result: 10 more high-trust pages now have stable, page-specific `og:image` and `twitter:image` metadata instead of relying on generic defaults.

## Pages Completed

- `/about` -> `/social/about-loudoun-decks-social.png`
- `/about/process` -> `/social/deck-building-process-social.png`
- `/about/warranty` -> `/social/deck-warranty-labor-social.png`
- `/about/why-choose-us` -> `/social/why-choose-loudoun-decks-social.png`
- `/about/certifications-and-licenses` -> `/social/certifications-licenses-social.png`
- `/contact` -> `/social/contact-loudoun-decks-social.png`
- `/reviews` -> `/social/reviews-social.png`
- `/social` -> `/social/social-profiles-social.png`
- `/team` -> `/social/team-social.png`
- `/bbb-accredited-deck-builder-virginia` -> `/social/bbb-accredited-deck-builder-social.png`

## Verification

- `node scripts/generate-og-card-sprint.mjs` passed.
- `node scripts/validate-seo-schema.mjs` passed with 241 app files, 57 FAQ files, 144 JSON-LD files, and 0 schema safety warnings.
- `node scripts/audit-og-images.mjs` passed with 201 pages scanned, 99 unique OG images, 99 healthy images, and 0 issues.
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
