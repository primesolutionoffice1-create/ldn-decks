# Final Remaining OG Cleanup - 2026-06-02

## Scope

Closed the final five pages that still needed explicit, page-specific Open Graph and Twitter image metadata.

## Pages Updated

- `/near-you/[county]/[city]` dynamic city pages -> `/social/near-you-city-deck-builder-social.png`
- `/privacy-policy` -> `/social/privacy-policy-social.png`
- `/terms-of-service` -> `/social/terms-of-service-social.png`
- `/thank-you` -> `/social/thank-you-social.png`
- `/wood-decks` -> `/social/wood-decks-social.png`

## Implementation

- Added five new generated 1200x630 social cards in `scripts/generate-og-card-sprint.mjs`.
- Added verified dimensions for the five assets in `src/lib/seo.js`.
- Added explicit `image` metadata to the five final page metadata declarations.
- Preserved the existing `noindex`/lead confirmation behavior for `/thank-you`.
- Preserved the dynamic near-you city page routing behavior.

## Verification

- `node scripts/validate-seo-schema.mjs`
  - `ok: true`
  - `appFiles: 241`
  - `duplicateFaqRisks: 0`
  - `howToSchemaFiles: 0`
  - `reviewSchemaFiles: 0`
  - `unsafeJsonLdWarnings: []`
- `node scripts/audit-og-images.mjs`
  - Pages scanned: 201
  - Unique OG images: 194
  - Issues: 0
- `file public/social/{near-you-city-deck-builder-social,privacy-policy-social,terms-of-service-social,thank-you-social,wood-decks-social}.png`
  - All five assets verified as PNG, 1200 x 630, RGB, non-interlaced.
- `node scripts/seo-link-audit.mjs`
  - Sitemap URLs: 260
  - Internal links: 318
  - Bad count: 0
- `npm run lint`
  - Passed.
- Missing explicit image scan for `buildMetadata` pages:
  - `remaining 0`
- `npm run build`
  - Passed.
  - Static/SSG pages generated: 342.

## Production Deployment

- Deployment ID: `dpl_9DW4gR5bFAhbrp7pMU1LNATrYgjR`
- Production alias: `https://ldndecks.com`
- Vercel URL: `https://ldn-decks-9j57-e5n35ckas-primesolutionoffice1-creates-projects.vercel.app`

## Live Meta Verification

Exact live HTML checks confirmed both `og:image` and `twitter:image`:

- `/near-you/loudoun-county/aldie`
  - `https://ldndecks.com/social/near-you-city-deck-builder-social.png`
- `/privacy-policy`
  - `https://ldndecks.com/social/privacy-policy-social.png`
- `/terms-of-service`
  - `https://ldndecks.com/social/terms-of-service-social.png`
- `/thank-you`
  - `https://ldndecks.com/social/thank-you-social.png`
- `/wood-decks`
  - `https://ldndecks.com/social/wood-decks-social.png`

## Post-Deploy SEO Check

- `npm run seo:daily-check`
  - Passed.
  - Sitemap reachable: 200.
  - Sitemap URL count: 260.
  - Robots reachable: 200.
  - Priority pages return 200 and canonical checks pass.
  - `/social` proof links detected.
  - IndexNow submission accepted for 260 URLs.

## Result

The explicit OG image cleanup sprint is complete for the audited `buildMetadata` page set. The final scan reports `remaining 0`, and production now serves dedicated social images for the last five pages.
