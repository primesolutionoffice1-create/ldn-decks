# Related Guides Deck-Core Cleanup - 2026-06-02

## Scope

Cleaned up internal guide distribution after the calculator OG asset batch.

## What Changed

- Removed a duplicate `/services/deck-repair` entry from `src/components/RelatedGuides.jsx`.
- Updated `src/app/deck-cost-calculator/layout.js` so `/deck-cost-calculator` uses `category="deck-core"`.
- This prioritizes budget, permit, material, and builder guides on the calculator page instead of the generic rotation.

## Verification

- Duplicate path scan:
  - RelatedGuides paths: 56
  - Duplicates: 0
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

- Deployment ID: `dpl_HjTJ1FRWyjgHB8HYuk8hm4C4JagU`
- Production alias: `https://ldndecks.com`
- Vercel URL: `https://ldn-decks-9j57-d9j9inwty-primesolutionoffice1-creates-projects.vercel.app`

## Live Verification

`https://ldndecks.com/deck-cost-calculator` live HTML contains the intended deck-core guides:

- Deck Payment Estimator
- Composite Deck Cost in Northern Virginia
- Deck Permits in Loudoun County
- Trex vs TimberTech vs AZEK
- Deck Builder in Northern Virginia

## Post-Deploy SEO Check

- `npm run seo:daily-check`
  - Passed.
  - Sitemap reachable: 200.
  - Sitemap URL count: 260.
  - Priority canonical checks pass.
  - IndexNow submission accepted for 260 URLs.

## Result

The calculator now distributes internal authority toward the most relevant commercial investigation path: cost, payment, permits, material choice, and builder selection.
