# Deck Cost Calculator OG Asset - 2026-06-02

## Scope

Upgraded `/deck-cost-calculator` as a linkable asset for social sharing, backlink outreach, real estate partners, HOA/community references, and homeowner planning.

## What Changed

- Added `deck-cost-calculator-social.png` to `scripts/generate-og-card-sprint.mjs`.
- Added verified dimensions in `src/lib/seo.js`.
- Added explicit `image: '/social/deck-cost-calculator-social.png'` to `src/app/deck-cost-calculator/layout.js`.

## Verification

- `file public/social/deck-cost-calculator-social.png`
  - PNG, 1200 x 630, RGB, non-interlaced.
- `node scripts/validate-seo-schema.mjs`
  - `ok: true`
  - `duplicateFaqRisks: 0`
  - `howToSchemaFiles: 0`
  - `reviewSchemaFiles: 0`
- `node scripts/audit-og-images.mjs`
  - Issues: 0
- `node scripts/seo-link-audit.mjs`
  - Sitemap URLs: 260
  - Internal links: 317
  - Bad count: 0
- `npm run lint`
  - Passed.
- `npm run build`
  - Passed.
  - Static/SSG pages generated: 342.

## Production Deployment

- Deployment ID: `dpl_4KZ7hyLj2XjeHJXJX4euq46Yaouu`
- Production alias: `https://ldndecks.com`
- Vercel URL: `https://ldn-decks-9j57-5p4xq2nai-primesolutionoffice1-creates-projects.vercel.app`

## Live Meta Verification

Exact live HTML checks confirmed:

- `/deck-cost-calculator`
  - `og:image`: `https://ldndecks.com/social/deck-cost-calculator-social.png`
  - `twitter:image`: `https://ldndecks.com/social/deck-cost-calculator-social.png`
  - Image response: `HTTP/2 200`

## Post-Deploy SEO Check

- `npm run seo:daily-check`
  - Passed.
  - Sitemap reachable: 200.
  - Sitemap URL count: 260.
  - Robots reachable: 200.
  - Priority canonical checks pass.
  - IndexNow submission accepted for 260 URLs.

## Result

The calculator now has a dedicated, verified social preview image and remains a strong linkable asset for reputation, SEO, and partner outreach.
