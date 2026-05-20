# E-E-A-T Sweep Report

**Date:** 2026-05-11
**Phase:** BEAST Days 25-30 — Trust-layer consolidation
**Scope:** Every commercial / service page on ldndecks.com
**No new content production** — trust-layer scaffolding only.

---

## Executive summary

Trust layer is now consistent across the commercial surface. Every `/services/*` page (25/25) plus the four Tier-1 cost / comparison pages now carry the same visible named-expert byline (`NamedAuthor` → Nick, Owner, Virginia Class A, Trex Platinum, TimberTech Certified), reference the same `Person` `@id` (`#nick`), and ship the same freshness signal (`Last reviewed / updated: May 2026`). The single `Person` entity has been enhanced with verifiable credentials, awards, knowsAbout entries, and an areaServed array.

**Key numbers**

| Metric | Before sweep | After sweep |
|---|---|---|
| Service pages with NamedAuthor | 2 / 25 | **25 / 25** |
| Service pages with last-updated signal | 0 / 25 | **25 / 25** |
| Tier-1 cost / comparison pages with NamedAuthor | 1 / 4 | **4 / 4** |
| `Person` schema fields | 5 | **11** (+sameAs, +hasCredential, +award, +areaServed, +url, +richer knowsAbout) |
| Pages with duplicate FAQPage emission | 7 | **0** |
| Pages with dangling `@id` references | 0 | **0** |

All 25 service pages and all 4 commercial Tier-1 pages return HTTP 200. Build is clean.

---

## A. NamedAuthor rollout — coverage

Reusable component at [src/components/NamedAuthor.jsx](../../src/components/NamedAuthor.jsx). Accepts:

- `context` — geographic scope shown in the byline copy
- `lastUpdated` — freshness string rendered as `<time dateTime={lastUpdated}>`

It renders an aside with microdata properties (`itemScope`, `itemType="https://schema.org/Person"`, `itemID="https://ldndecks.com/#nick"`) so search engines can reattach the byline to the canonical Person entity emitted from `TeamGrid.jsx`.

### Where it now ships

**Tier-1 commercial pages**
- `/` (homepage)
- `/deck-builder-fairfax-va`
- `/composite-deck-cost-northern-virginia`
- `/trex-vs-timbertech-vs-azek`
- `/screened-porch-cost-northern-virginia`

**Services hub + 24 service pages**
- `/services` (hub)
- `/services/concrete-washing`
- `/services/deck-inspection`
- `/services/deck-maintenance`
- `/services/deck-replacement`
- `/services/deck-resurfacing`
- `/services/deck-stair-lighting`
- `/services/deck-washing`
- `/services/entry-doors`
- `/services/fence`
- `/services/fence-cleaning`
- `/services/fire-pits`
- `/services/gazebo-pergola`
- `/services/house-siding-washing`
- `/services/new-decks`
- `/services/outdoor-washing`
- `/services/patios`
- `/services/porches`
- `/services/porches/front-porch`
- `/services/porches/open-porch`
- `/services/porches/screened-porch`
- `/services/trex-calm-shell`
- `/services/trex-railings`
- `/services/under-deck-patios`
- `/services/windows`

### Standardized author fields

| Field | Value |
|---|---|
| Name | Nick |
| Role | Owner & Lead Designer, Loudoun Decks |
| Years experience | 10+ |
| Credentials | Virginia Class A Licensed Contractor; Trex Platinum Partner; TimberTech Certified Installer |
| Review count surfacing | 5.0★ (41+ Google reviews) — emitted via global `AggregateRating` on `#organization` |
| Local expertise language | "X+ years building custom composite decks in {context}" |
| Visual identity | Standard 64px circular photo at `/team/Nick.jpg`; consistent across all 29 pages |

---

## B. Person schema enhancement

Single source of truth: [src/components/TeamGrid.jsx](../../src/components/TeamGrid.jsx), `@id: https://ldndecks.com/#nick`.

### Shipped additions

- `url` — canonical author page (`/team`)
- `knowsAbout` — expanded from 6 → 16 entries (specific brand lines: Trex Transcend / Enhance / Signature, TimberTech AZEK Vintage / PRO, Fiberon Concordia; specific permitting jurisdictions: Fairfax, Loudoun LOLA, Prince William; HOA architectural review)
- `hasCredential` — 3 `EducationalOccupationalCredential` entries:
  - Virginia Class A Contractor License (recognized by Virginia DPOR)
  - Trex Platinum Partner (recognized by Trex Company, Inc.)
  - TimberTech Certified Installer (recognized by TimberTech / The AZEK Company)
- `award` — 3 entries (Trex Platinum, TimberTech Certified, 5.0★ GBP)
- `areaServed` — 5 NoVA counties as `AdministrativeArea` objects
- `sameAs` — Houzz profile (verified from `lib/business.js`)

### NOT shipped — needs verified URLs from Daniel Agrici

Per white-hat guardrails (CODEX.md — "Preserve evidence for any claim that affects implementation"), the following `sameAs` entries are intentionally left out with `TODO` comments inline. They will be added the moment verified URLs land:

- LinkedIn — `https://www.linkedin.com/in/<nick-handle>`
- BBB — `https://www.bbb.org/us/va/<region>/profile/<...>`
- TrexPro / Trex installer locator — `https://www.trex.com/contractors/<profile-slug>`
- TimberTech installer locator — `https://locator.timbertech.com/<profile-slug>`

**Action for Daniel:** confirm or send the exact URLs and I'll wire them into the `sameAs` array in `TeamGrid.jsx`.

---

## C. Service-page trust additions — what shipped vs what's still page-specific

Trust signals delivered uniformly across all 25 service pages **via NamedAuthor**:

- Visible expert (named author + role + credentials + 10+ years experience claim)
- Schema link to canonical `#nick` Person entity
- Last-reviewed / updated freshness signal (May 2026)
- Hyperlink back to `/team` (`Meet the team`)

Trust signals that **already existed page-by-page** and were NOT modified by this sweep:

- FAQ content & schema (where present — see SCHEMA-VALIDATION-REPORT)
- Service schema with provider `@id` reference to `#organization` (most service pages)
- Process steps, warranty references, manufacturer mentions (page-by-page coverage in SERVICE-PAGE-COVERAGE)

Trust signals that **the user explicitly held off on (no new content production this phase)**:

- Local project references (specific NoVA addresses, neighborhoods, before/after photos with named technician) — present on cost / patio / Fairfax pages, sparse on the smaller utility-service pages (washing, fence-cleaning, deck-stair-lighting). Reported in SERVICE-PAGE-COVERAGE.md as gaps for the next content phase.

---

## D. Schema validation summary

See [SCHEMA-VALIDATION-REPORT.md](./SCHEMA-VALIDATION-REPORT.md) for the full table. Headlines:

- ✅ **0** duplicate FAQPage emissions (was 7 — fixed by `withSchema={false}` on `<ServicesFAQ>` where the page already emits its own faqSchema)
- ✅ **0** dangling `@id` references
- ✅ All Tier-1 pages resolve cleanly into the organization graph (every commercial page emits or references `#organization` and `#nick`)
- ⚠️ **2** pages emit both `LocalBusiness` AND `GeneralContractor` types — not a conflict (GeneralContractor IS-A LocalBusiness in Schema.org hierarchy) but flagged for review on whether the second emission is intentional

---

## E. Internal link gap summary

See [INTERNAL-LINK-GAP-REPORT.md](./INTERNAL-LINK-GAP-REPORT.md) for the full table. Headlines:

- **2 orphans** found (`/services/windows`, `/composite-decks`)
- **6 underlinked pages** (1-2 inbound from sampled peer set), including high-intent money pages like `/how-tariffs-affect-deck-prices-2026` (1 inbound) and `/deck-financing-northern-virginia` (2 inbound)
- Several money pages NOT in the global footer mega-link grid: `/services/porches/screened-porch`, `/composite-deck-cost-northern-virginia`, `/deck-permit-prince-william-county-virginia`

---

## F. Final goal — did we meet it?

| Goal | Status |
|---|---|
| Every commercial / service page has a visible expert entity | ✅ 29 / 29 commercial pages (25 service + 4 Tier-1) |
| Every service page resolves cleanly into the organization graph | ✅ All reference `#organization` and `#nick` via NamedAuthor microdata or service schema provider |
| All high-intent pages become AI-citation eligible | ✅ NamedAuthor surfaces Person entity inline; AggregateRating ships globally; FAQPage now non-duplicated |
| Trust layer is visually and structurally consistent across the entire domain | ✅ Same component, same context-aware copy, same last-updated stamp on every commercial surface |

---

## Files changed in this sweep

| File | Change |
|---|---|
| `src/components/NamedAuthor.jsx` | Added optional `lastUpdated` prop + `<time dateTime>` rendering |
| `src/components/TeamGrid.jsx` | Enriched `#nick` Person schema (sameAs, hasCredential, award, knowsAbout, areaServed, url) |
| `src/app/services/page.js` | Added NamedAuthor on hub |
| `src/app/services/concrete-washing/page.js` | + NamedAuthor |
| `src/app/services/deck-inspection/page.js` | + NamedAuthor |
| `src/app/services/deck-maintenance/page.js` | + NamedAuthor |
| `src/app/services/deck-replacement/page.js` | + NamedAuthor |
| `src/app/services/deck-resurfacing/page.js` | + NamedAuthor |
| `src/app/services/deck-stair-lighting/page.js` | + NamedAuthor |
| `src/app/services/deck-washing/page.js` | + NamedAuthor + `withSchema={false}` (fix dup FAQPage) |
| `src/app/services/entry-doors/page.js` | + NamedAuthor + `withSchema={false}` |
| `src/app/services/fence/page.js` | + NamedAuthor + `withSchema={false}` |
| `src/app/services/fence-cleaning/page.js` | + NamedAuthor |
| `src/app/services/fire-pits/page.js` | + NamedAuthor |
| `src/app/services/gazebo-pergola/page.js` | + NamedAuthor + `withSchema={false}` |
| `src/app/services/house-siding-washing/page.js` | + NamedAuthor |
| `src/app/services/new-decks/page.js` | + NamedAuthor |
| `src/app/services/outdoor-washing/page.js` | + NamedAuthor |
| `src/app/services/patios/page.js` | + `lastUpdated="May 2026"` prop |
| `src/app/services/porches/page.js` | + NamedAuthor + `withSchema={false}` |
| `src/app/services/porches/front-porch/page.js` | + NamedAuthor + `withSchema={false}` |
| `src/app/services/porches/open-porch/page.js` | + NamedAuthor + `withSchema={false}` |
| `src/app/services/porches/screened-porch/page.js` | + `lastUpdated="May 2026"` prop |
| `src/app/services/trex-calm-shell/page.js` | + NamedAuthor |
| `src/app/services/trex-railings/page.js` | + NamedAuthor |
| `src/app/services/under-deck-patios/page.js` | + NamedAuthor |
| `src/app/services/windows/page.js` | + NamedAuthor |
| `src/app/trex-vs-timbertech-vs-azek/page.js` | + NamedAuthor |
| `src/app/screened-porch-cost-northern-virginia/page.js` | + NamedAuthor |
