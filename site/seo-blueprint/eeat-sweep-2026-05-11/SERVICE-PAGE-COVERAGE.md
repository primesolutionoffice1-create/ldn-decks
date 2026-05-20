# Service Page Coverage Matrix

**Date:** 2026-05-11
**Phase:** BEAST Days 25-30 — E-E-A-T sweep
**Scope:** All 25 `/services/*` routes

Each cell is a heuristic content check on the rendered HTML:

- **NamedAuthor / Last updated** — visible expert byline + freshness stamp
- **FAQPage / Service / BreadcrumbList** — Schema.org JSON-LD presence
- **Manufacturer mention** — any of Trex / TimberTech / AZEK / Fiberon / Belgard / Techo-Bloc / Unilock
- **Permit reference** — permit / LOLA / Fairfax County Building / Loudoun County / HOA / Architectural Review
- **Timeline reference** — explicit duration ranges (e.g. "3–5 weeks", "takes 6 weeks")
- **Warranty reference** — workmanship guarantee or manufacturer warranty mention
- **Local project / NoVA cities** — Ashburn, Vienna, McLean, Manassas, Leesburg, etc.
- **Trust CTA** — Free Estimate / Get Free Estimate / Request Free Estimate phrasing

## Coverage table

| URL | Code | NamedAuthor | Last updated stamp | FAQPage schema | Service schema | BreadcrumbList | Manufacturer mention | Permit reference | Timeline reference | Warranty reference | Local project / NoVA cities | Trust CTA (estimate / quote) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/services/concrete-washing` | 200 | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/deck-inspection` | 200 | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/deck-maintenance` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/deck-replacement` | 200 | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/deck-resurfacing` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/deck-stair-lighting` | 200 | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/deck-washing` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/entry-doors` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/fence` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/fence-cleaning` | 200 | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/fire-pits` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/gazebo-pergola` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/house-siding-washing` | 200 | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/new-decks` | 200 | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/outdoor-washing` | 200 | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services` | 200 | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/patios` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/porches/front-porch` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/porches/open-porch` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/porches` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/porches/screened-porch` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/trex-calm-shell` | 200 | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/trex-railings` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/under-deck-patios` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `/services/windows` | 200 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
## Coverage summary

| Trust signal | Coverage |
|---|---|
| NamedAuthor | **25 / 25** |
| Last updated stamp | **25 / 25** |
| FAQPage schema | 20 / 25 |
| Service schema | 20 / 25 |
| BreadcrumbList | 25 / 25 |
| Manufacturer mention | 25 / 25 |
| Permit reference | 25 / 25 |
| Timeline reference | 25 / 25 |
| Warranty reference | 25 / 25 |
| Local project / NoVA cities | 25 / 25 |
| Trust CTA (estimate / quote) | 25 / 25 |

## Gaps to address in the next content phase

These are NOT trust-layer gaps — they're content-depth gaps that the user explicitly held off on this phase ("No new content production yet. Trust-layer consolidation first.").

### Pages missing FAQPage schema (5 / 25)

These pages have no FAQ content; if FAQ depth is added in the next content phase, the schema will follow.

- `/services/deck-inspection`
- `/services/deck-replacement`
- `/services/deck-stair-lighting`
- `/services/new-decks`
- `/services/trex-calm-shell`

### Pages missing dedicated Service schema (5 / 25)

These pages render only the global organization graph + page metadata, with no per-service `Service` JSON-LD. Recommend adding a `Service` schema block via the existing `ServiceSchema.jsx` component on the next content pass.

- `/services` (hub — by design)
- `/services/concrete-washing`
- `/services/fence-cleaning`
- `/services/house-siding-washing`
- `/services/outdoor-washing`

### Local project examples — depth gap (not a coverage gap)

Every service page surfaces at least one NoVA city or county reference (verified above). The pages that would most benefit from **specific named project examples with addresses, dates, and project lead** (as on `/composite-deck-cost-northern-virginia` and `/services/patios`) are the smaller utility-service pages:

- `/services/deck-washing`
- `/services/fence-cleaning`
- `/services/concrete-washing`
- `/services/house-siding-washing`
- `/services/outdoor-washing`
- `/services/deck-stair-lighting`

These currently lean on generic "we serve Loudoun, Fairfax..." language. Specific project examples (similar to the Ashburn / Vienna / McLean / Manassas examples on the cost page) would lift them further. Out of scope for the trust-layer sweep — flagged for the next content phase.
