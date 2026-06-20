---
type: brainstein-control-pack
title: "LDN Decks SEO Brainstein Control Pack"
created: "2026-06-01"
status: "active"
domain: "ldndecks.com"
maturity: "domain-adapted"
tags: [brainstein, seo-ops, evidence, execution]
---

# LDN Decks SEO Brainstein Control Pack

## Purpose

This pack turns the LDN Decks SEO audit into an operating system for execution. It is not another content plan. It defines the evidence ledger, adapter surface, task packets, safety rules, and release gates needed to keep SEO/GEO/Maps/SXO work moving without fake proof.

## Domain

Premium deck, porch, patio, and outdoor living contractor in Northern Virginia.

Primary buyer:

- Homeowners in Loudoun, Fairfax, Prince William, Arlington, and nearby Northern Virginia markets.

Core commercial workflows:

- New deck estimate.
- Composite deck cost planning.
- Deck replacement.
- Deck repair / structural maintenance.
- Deck resurfacing.
- Porch / screened porch planning.
- Patio / outdoor living planning.
- Permit / HOA readiness.
- Financing and monthly payment planning.

## Current Maturity

`domain-adapted`

Rationale:

- The site has a mature topic map, schemas, calculators, city/service/cost pages, and local SEO structure.
- Audit tooling exists and passes important technical gates.
- Evidence/proof ingestion is not complete enough to call the system market-ready as a Brainstein-style operating brain.

## Release Gates

### Green Gates

- `npm run build` passes.
- `npm run seo:validate-schema` returns `ok: true`.
- `npm run seo:validate-evidence` returns `ok: true`.
- `npm run seo:audit-breadcrumbs` returns 0 unknown segments and 0 duplicate BreadcrumbList.
- `npm run seo:link-audit` returns 0 bad links.
- `/robots.txt`, `/sitemap.xml`, and `/image-sitemap.xml` remain reachable.

### Yellow Gates

- OG image warnings remain acceptable only if they are logged and prioritized.
- Undated schema pages remain acceptable only if no stale/critical pages exist and a freshness queue exists.
- DataForSEO/API-dependent reports can be marked blocked if credentials are invalid.

### Red Gates

- Any fake review count, fake technician, fake customer story, fake before/after, fake certification, fake warranty term, or fake permit outcome.
- Any unverifiable 100% permit / HOA approval-rate claim.
- Duplicate `FAQPage` or `BreadcrumbList` emission.
- Broken commercial links from service/cost/permit pages.
- Publishing evidence-heavy deck repair sections with unresolved `[INSERT]`, `[VERIFY]`, or `DO NOT PUBLISH` markers.

## Evidence Policy

Use one of these labels on all proof-bearing work:

- `verified`: directly supported by repo, live command output, first-party asset, invoice/estimate data, or owner-confirmed evidence.
- `partial`: directionally supported but missing one or more details.
- `unknown`: do not claim; use placeholder or omit.
- `blocked`: cannot proceed without owner/API/source input.

## Operating Rhythm

Daily:

- Run schema + link + breadcrumb checks before merging SEO edits.
- Run evidence validation before publishing any proof-bearing service, city, review, or project content.
- Keep evidence-needed markers visible where proof is missing.

Weekly:

- Refresh GBP post and photo queue.
- Add or verify at least 5 internal links into high-intent money pages.
- Pick 5-10 pages from the freshness queue and make real updates.

Monthly:

- Re-run deep SEO/GEO/SXO audit.
- Refresh source ledger.
- Review OG card backlog.
- Review project evidence library coverage.

## Next Best Action

Build the proof architecture:

1. Create project evidence library.
2. Resolve deck repair evidence placeholders.
3. Generate first 10 OG cards from real or neutral branded assets.
4. Normalize freshness on high-intent pages only after substantive edits.
5. Restore live DataForSEO once valid credentials are available.

## 2026-06-01 Execution Note

Completed a trust-layer cleanup pass:

- Sanitized unverifiable 100% approval-rate language.
- Removed unverifiable individual review excerpts from shared business data.
- Reframed city-page project examples that included dates without evidence.
- Hardened the SEO admin cookie and DataForSEO domain input handling.

Next proof task remains owner evidence ingestion: photos, project cards, warranty terms, verified repair pricing, and public review/profile source ledger.

## 2026-06-01 Proof Library Scaffold

Completed Packet 3:

- Added `seo-blueprint/evidence/project-evidence-ledger.json`.
- Added owner intake template at `seo-blueprint/evidence/project-evidence-intake-template.csv`.
- Added deck repair evidence mapping at `seo-blueprint/evidence/DECK-REPAIR-EVIDENCE-MAP.md`.
- Added `npm run seo:validate-evidence` as the anti-fabrication evidence gate.
- Added owner ingestion SOP at `seo-blueprint/evidence/OWNER-EVIDENCE-INGESTION-SOP.md`.
- Added CSV importer: `npm run seo:import-evidence -- --file <csv>`.

Importer safety behavior:

- Default import keeps rows `partial` unless `--allow-verified` is explicitly used.
- Verified rows still must pass required-field and public-asset validation.
- Importer performs upsert by `project_id`; it does not delete existing evidence rows.

## 2026-06-01 OG Card Sprint

Completed first 10 high-intent social cards using neutral branded graphics:

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

No project photos were used; these are branded educational/commercial cards and do not create proof claims.
