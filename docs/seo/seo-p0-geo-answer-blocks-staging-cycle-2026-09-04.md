# SEO P0 GEO Answer Blocks Staging Cycle

Status: EXECUTED LOCALLY, NOT DEPLOYED
Date: 2026-09-04
Branch: `geo-p0-answer-blocks-2026-09-04`
Live changes applied: false

## Context

Local approval received:

```text
APPROVE LOCAL STAGING PATCH FOR LDN P0 GEO ANSWER BLOCKS 2026-09-04
```

Scope was limited to six P0 GEO pages plus the supporting legacy repair route:

- `/composite-deck-cost-northern-virginia`
- `/trex-vs-timbertech-vs-azek`
- `/services/deck-replacement`
- `/deck-resurfacing-vs-replacement`
- `/services/deck-repair`
- `/deck-repair`
- `/screened-porch-builder-northern-virginia`

## Changes Made

### Composite deck cost

- Added `compositeGeoAnswers` for cost drivers, composite vs wood, brand budget fit, permits, and timeline.
- Added visible answer-section grid.
- Extended `ArticleSchema.citableParts`.
- Updated visible freshness and schema `dateModified` to `2026-09-04`.
- Softened risky warranty, lifespan, and "beats every cheaper option" language.

### Trex vs TimberTech vs AZEK

- Added `materialGeoAnswers`.
- Added `ArticleSchema` with citable parts.
- Added visible answer-section grid.
- Updated freshness to `2026-09-04`.
- Replaced unverified `Platinum Partner` wording with proof-safe Trex wording.
- Added manufacturer-documentation caution.

### Deck replacement

- Added `replacementGeoAnswers`.
- Added visible answer-section grid.
- Extended `ArticleSchema.citableParts`.
- Aligned `WebPageSchema`, `ArticleSchema`, and `NamedAuthor` freshness to `2026-09-04`.
- Softened fixed-pricing, warranty, authorized-installer, and high-ROI language.
- Preserved existing replacement decision support and strengthened citable IDs.

### Resurfacing vs replacement

- Added `resurfaceGeoAnswers`.
- Added visible answer-section grid.
- Extended `ArticleSchema.citableParts`.
- Updated freshness to `2026-09-04`.
- Replaced hard savings language with inspection-first cost language.
- Softened warranty and permit timing language.

### Deck repair service page

- Added `repairGeoAnswers`.
- Added visible answer-section grid.
- Extended `ArticleSchema.citableParts`.
- Updated freshness to `2026-09-04`.
- Softened safety absolutes, "stronger than originally built", "strictest in the country", fixed-price language, and license/insurance language.

### Legacy deck repair page

- Added `GeoAnswerBlock` that routes users and AI systems to `/services/deck-repair` as the preferred structural repair hub.
- Updated page freshness to `2026-09-04`.
- Softened same-day estimate, repair lifespan, lifesaver, trusted/best, and broad restoration claims.
- Did not change canonical or redirect behavior.

### Screened porch

- Added `screenedPorchGeoAnswers`.
- Added visible answer-section grid.
- Extended `ArticleSchema.citableParts`.
- Updated freshness to `2026-09-04`.
- Removed/softened unverified Class A, insurance/workers comp, DPOR-verifiable, ROI, pollen-count, fixed permit-fee, and exact upgrade-cost claims.
- Preserved structural/permit/HOA positioning with proof-safe language.

## Validation

Passed:

```bash
npm run lint
```

Passed:

```bash
npm run build
```

Build result:

- Compiled successfully.
- TypeScript finished successfully.
- Static generation completed for 900 pages.
- Route table generated successfully.

Passed:

```bash
git diff --check -- src/app/composite-deck-cost-northern-virginia/page.js src/app/trex-vs-timbertech-vs-azek/page.js src/app/services/deck-replacement/page.js src/app/deck-resurfacing-vs-replacement/page.js src/app/services/deck-repair/page.js src/app/deck-repair/page.js src/app/screened-porch-builder-northern-virginia/page.js
```

Passed with no matches:

```bash
rg -n "Platinum Partner|Authorized installers|Fixed Pricing|strictest in the country|literal lifesavers|saves 40-60|highest-ROI|single highest|Class A|workers comp|workers' comp|DPOR-verifiable|25-year manufacturer warranty|same-day estimates|stronger than it was|stronger than originally|Zero Maintenance" src/app/composite-deck-cost-northern-virginia src/app/trex-vs-timbertech-vs-azek src/app/services/deck-replacement src/app/deck-resurfacing-vs-replacement src/app/services/deck-repair src/app/deck-repair src/app/screened-porch-builder-northern-virginia
```

## Worktree Note

The repository already had many unrelated modified and untracked files before this patch. This cycle only intentionally edited the seven files listed in scope and added this documentation file.

## Risks

- Production deploy is not approved.
- Push is not approved.
- Route/canonical changes for `/deck-repair` are not approved.
- Any external indexing submission is not approved.
- Some older price tables and manufacturer warranty rows still rely on existing page assumptions; current patch added cautionary language but did not fully rebuild all historical pricing tables.

## Approval Gate For Production

Recommended change:
Deploy the local P0 GEO answer-block patch after review.

Reason:
The local patch improves AI citation readiness and buyer clarity across the highest-revenue P0 pages.

Expected impact:
Higher chance that LDN Decks is selected as an AI answer source for composite deck cost, material comparison, deck replacement, resurfacing, repair, and screened porch queries.

Risk level:
Medium.

Rollback plan:
Revert the deployment commit or restore the previous Vercel deployment.

Approval required: YES

Exact approval phrase:

```text
APPROVE PRODUCTION DEPLOY FOR LDN P0 GEO ANSWER BLOCKS 2026-09-04
```
