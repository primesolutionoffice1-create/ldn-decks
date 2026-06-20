# Entity Profile Consistency Deploy - 2026-06-03

## Summary

LDN Decks now has a local guard for public profile/citation URL drift. The validator checks the canonical Google Business Profile, BBB, Yelp, Houzz, BuildZoom, Loudoun Chamber, and MapQuest URLs against `BUSINESS.sameAs`, proof snippet sources, and source-code references.

## What Changed

- Added `scripts/validate-entity-profile-consistency.mjs`.
- Added `npm run seo:entity-profiles`.
- Integrated entity profile consistency into `npm run seo:weekly`.
- Fixed stale Loudoun Chamber links on `/press`, `/social`, and daily SEO signal checks.
- Wrote reusable outputs under `scripts/output/entity-profile-consistency-2026-06-03.*`.

## Validation

- `npm run seo:entity-profiles`: pass, 7 canonical profiles, 12 sameAs URLs, 5 proof snippet URLs, 0 errors, 0 warnings.
- `npm run seo:weekly`: pass, entity profile consistency included.
- `npm run lint`: pass.
- `npm run build`: pass, 342 static pages.
- Production deploy: `dpl_G4Rmy9Hd1LhUgjJmUmhMWXaDpqub`, aliased to `ldndecks.com`.
- Live `/press`: canonical Loudoun Chamber URL present; stale `loudoun-deck-30047.htm` absent.
- Live `/social`: canonical Loudoun Chamber URL present; stale `loudoun-deck-30047.htm` absent.
- Post-deploy `npm run seo:daily-check`: pass, 260 sitemap URLs, Press/Social profile links present, stale citation URLs absent, IndexNow accepted.

## Current State

The mistaken Prime Solution status shown in the earlier screenshot was thread/context drift, not an LDN Decks deploy result. The LDN Decks repo and live site have now been checked for the related class of mistake: stale or wrong public citation/profile URLs.

The daily SEO smoke check now verifies those canonical/stale citation signals on both `/press` and `/social`, so future post-deploy checks will catch this class of drift automatically.
