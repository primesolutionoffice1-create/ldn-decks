# Admin Operations Validator Deploy Verification - 2026-06-03

## Scope

Verified and deployed the LDN Decks admin-operations and lead-outcome-validator updates to production.

## Deployment

- Vercel deployment: `dpl_GSkYZHhXpFbqzLwNc7wJVYpcqAZa`
- Production URL: `https://ldn-decks-9j57-o0ey050sd-primesolutionoffice1-creates-projects.vercel.app`
- Alias: `https://ldndecks.com`
- Inspect URL: `https://vercel.com/primesolutionoffice1-creates-projects/ldn-decks-9j57/GSkYZHhXpFbqzLwNc7wJVYpcqAZa`

## Pre-Deploy Verification

- `npm run lint`: pass
- `npm run build`: pass
- Static pages generated: 342
- `npm run measurement:gate`: 10 PASS, 1 WARN, 0 FAIL
- `npm run measurement:lead-outcomes`: `SAMPLE_ONLY`, 0 errors
- `npm run seo:weekly`: pass; evidence anti-fabrication 22/22, lead outcome validation included
- `git diff --check`: pass on touched files

## Post-Deploy Verification

- Vercel production build: pass
- Vercel generated static pages: 342
- `https://ldndecks.com/admin/operations`: protected, returns `Authentication required`
- `https://ldndecks.com/sitemap.xml`: reachable and updated
- `npm run seo:daily-check`: pass
- IndexNow: accepted 260 URLs
- `npm run measurement:gate`: 10 PASS, 1 WARN, 0 FAIL

## Gate Impact

The deployed internal operations dashboard now reflects the current measurement state and points operators to `npm run measurement:lead-outcomes`. Scaling remains RED until external Google Ads/GTM qualified-call proof and 5-10 real lead outcome rows are supplied.
