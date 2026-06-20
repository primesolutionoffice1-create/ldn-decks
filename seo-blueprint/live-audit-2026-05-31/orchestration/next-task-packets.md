# LDN Decks Next Task Packets

Created: 2026-06-01

These packets are ordered by dependency. Do not skip evidence-dependent work by inventing proof.

## Packet 1: Verify Current Large Worktree

Objective: turn the current broad uncommitted worktree into a verified release candidate.

Evidence needed:

- `git diff --stat`
- `npm run build`
- `npm run seo:validate-schema`
- `npm run seo:link-audit`
- `npm run seo:audit-breadcrumbs`
- focused curl checks for modified money pages

Pass criteria:

- Build green.
- Schema green.
- Link audit green.
- Breadcrumb audit has 0 duplicates and 0 unknowns.
- No fake E-E-A-T or proof claims introduced.

## Packet 2: DataForSEO Credential Recovery

Objective: restore live SEO dashboard/API refreshes.

Blocker:

- Current credentials return `40100`.

Owner action required:

- Get current API Login and API Password from DataForSEO.
- Update `.env.local`.
- Update Vercel Production env.
- Redeploy only after local verification.

Pass criteria:

- `/api/seo/api-errors` no longer reports credential auth failure.
- SEO admin dashboard can refresh live data.
- Live competitor/keyword/backlink reports can be regenerated.

## Packet 3: Proof Library Scaffold

Objective: create the source of truth for project evidence without fabrication.

Status: scaffolded on 2026-06-01.

Fields:

- project_id
- city
- neighborhood
- month_year
- service_type
- materials
- verified_scope
- verified_failure
- work_performed
- permit_or_hoa_status
- before_photo_path
- after_photo_path
- evidence_status
- owner_notes

Pass criteria:

- Evidence scaffold exists at `seo-blueprint/evidence/project-evidence-ledger.json`.
- No fake verified rows.
- Existing showcase imports may stay `partial` only until owner evidence confirms before/after assets, scope, and date.
- Deck repair evidence requirements map to required evidence fields in `seo-blueprint/evidence/DECK-REPAIR-EVIDENCE-MAP.md`.
- Owner evidence ingestion SOP exists at `seo-blueprint/evidence/OWNER-EVIDENCE-INGESTION-SOP.md`.
- CSV import command exists: `npm run seo:import-evidence -- --file <csv>`.
- `npm run seo:validate-evidence` passes.

## Packet 4: OG Card Sprint

Objective: reduce OG warnings on high-intent pages.

Status: first 10 neutral branded cards generated on 2026-06-01.

First 10 pages:

- `/composite-deck-cost-northern-virginia`
- `/services/deck-repair-and-structural-maintenance`
- `/deck-repair`
- `/deck-repair-loudoun-county`
- `/deck-financing`
- `/deck-permit-loudoun-county-virginia`
- `/deck-permit-fairfax-county-virginia`
- `/trex-vs-timbertech-vs-azek`
- `/services/patios`
- `/screened-porch-builder-northern-virginia`

Pass criteria:

- Each has a 1200x630 social card or an acceptable 16:9 card.
- Real project cards use real project photos only.
- Neutral branded cards are used where proof photos are not available.
- `npm run seo:audit-og` warning count decreases.
- Generated cards live in `public/social/*-social.png`.
- Generator lives at `scripts/generate-og-card-sprint.mjs` and can be rerun with `npm run seo:generate-og-cards`.

## Packet 5: Freshness Sprint

Objective: add truthful freshness signals to high-intent pages.

Rule:

- Do not update dates without real content edits.

First targets:

- `/deck-builder-ashburn-va`
- `/deck-builder-leesburg-va`
- `/deck-builder-fairfax-va`
- `/deck-builder-vienna-va`
- `/deck-builder-mclean-va`
- `/deck-builder-manassas-va`
- `/deck-builder-gainesville-va`
- `/deck-builder-haymarket-va`
- `/services/deck-replacement`
- `/services/deck-resurfacing`

Pass criteria:

- Each edited page has a substantive content improvement.
- Each edited page has a truthful `dateModified`.
- Freshness audit undated count decreases.
