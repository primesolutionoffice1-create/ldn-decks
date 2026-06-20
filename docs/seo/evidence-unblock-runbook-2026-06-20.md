# Evidence Unblock Runbook - 2026-06-20

Purpose: give the owner and SEO operator a concrete path from missing proof to publish-ready evidence without fabricating photos, project details, costs, warranties, reviews, or permit outcomes.

## Current Readiness

- Publish-ready pages: 0
- Blocked pages: 3
- Proof-incomplete pages: 1
- Runtime proof synced: yes
- Public placeholder findings: 0

## Evidence Workload Summary

- Missing/partial photo or asset items: 11
- Missing/partial project records: 10
- Missing warranty term records: 1
- Missing repair cost range records: 4

| Page | Verdict | Assets | Projects | Warranty Terms | Repair Cost Ranges |
|---|---|---:|---:|---:|---:|
| /before-and-after | blocked | 2 | 4 | 0 | 0 |
| /composite-deck-cost-northern-virginia | blocked | 1 | 0 | 0 | 0 |
| /services/deck-repair | blocked | 8 | 0 | 1 | 4 |
| /showcase | proof-incomplete | 0 | 6 | 0 | 0 |

## Intake Files

- Asset/photos: `docs/seo/photo-ingestion-manifest-2026-06-20.csv`
- Warranty terms: `docs/seo/warranty-terms-intake-2026-06-20.csv`
- Repair cost ranges: `docs/seo/repair-cost-ranges-intake-2026-06-20.csv`
- Project records: `docs/seo/project-evidence-intake-2026-06-20.csv`
- Before/after resolution: `docs/seo/before-after-evidence-resolution-2026-06-20.csv`

## Red Gates

- Do not mark rows `verified` while owner-fill, unknown, unspecified, placeholder, or not-recorded values remain.
- Do not use stock images as proof-bearing project media.
- Do not publish exact repair cost ranges without source-backed low/high values.
- Do not publish exact warranty durations, exclusions, or coverage scopes until the owner verifies written policy text.
- Do not publish customer names, private addresses, phone numbers, permit numbers, or unredacted documents.

## Operator Commands

Preflight/dry-run after owner fills rows:

```bash
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-20.csv --preflight
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-20.csv --dry-run
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-20.csv --dry-run
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-20.csv --dry-run
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-20.csv --dry-run
```

Only after source review, promote verified rows intentionally:

```bash
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-20.csv --allow-verified
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-20.csv --allow-verified
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-20.csv --allow-verified
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-20.csv --allow-verified
```

Final gates before merge/deploy:

```bash
npm run seo:validate-evidence
npm run seo:proof-snippets
npm run seo:validate-proof-runtime
npm run seo:audit-placeholders
npm run seo:prepublish-evidence
npm run seo:evidence-regression
npm run seo:validate-schema
npm run build
```

## /before-and-after

Verdict: **blocked**

### Current Gate Issues

- RED: 2 missing evidence item(s).
- YELLOW: 4 partial evidence item(s).
- YELLOW: No verified project proof snippets available for this page.

### Evidence Assets To Resolve

| Status | Asset ID | Needed | Owner Notes |
|---|---|---|---|
| red | `before-after-project-records` | Owner-supplied project records for all four before/after cards: signed estimate or invoice, final scope, month/year, city/neighborhood, material selection, timeline, final cost, and permit/HOA status. | Do not convert partial project summaries into proof-backed case studies until the matching project records are supplied and reviewed. |
| red | `before-after-image-metadata` | Original image metadata or owner confirmation tying each before/after pair to the correct project city, month/year, and scope. | Photo files exist in public/Projectsbeforeandafter, but project linkage details still need owner confirmation. |

### Project Records To Resolve

| Status | Project ID | City | Month/Year | Missing Proof Area | Owner Notes |
|---|---|---|---|---|---|
| yellow | `before-after-project-1` | Leesburg | UNKNOWN - OWNER TO FILL | UNKNOWN - OWNER TO FILL | OWNER TO FILL: month/year; neighborhood if safe; final material line/color; whether frame was reused; final cost or publishable range; timeline; permit/HOA status; whether any savings claim is publishable. |
| yellow | `before-after-project-2` | Ashburn | UNKNOWN - OWNER TO FILL | UNKNOWN - OWNER TO FILL | OWNER TO FILL: month/year; neighborhood/community if safe; final material line/color; frame/ledger/footing/stair/railing scope; final cost or publishable range; timeline; permit/HOA status; any code-compliance details. |
| yellow | `before-after-project-3` | Manassas | UNKNOWN - OWNER TO FILL | UNKNOWN - OWNER TO FILL | OWNER TO FILL: month/year; neighborhood if safe; final material line/color; skirting/storage scope; final cost or publishable range; timeline; permit/HOA status. |
| yellow | `before-after-project-4` | Sterling | UNKNOWN - OWNER TO FILL | UNKNOWN - OWNER TO FILL | OWNER TO FILL: month/year; neighborhood/community if safe; final material line/color; townhome/HOA requirements; final cost or publishable range; timeline; permit/HOA status; remove any disruption/timeline claim unless verified. |

## /composite-deck-cost-northern-virginia

Verdict: **blocked**

### Current Gate Issues

- RED: 1 missing evidence item(s).

### Evidence Assets To Resolve

| Status | Asset ID | Needed | Owner Notes |
|---|---|---|---|
| red | `composite-cost-example-records` | Estimate/invoice-backed records for pricing examples before they are described as formal real project examples. | Current page labels these as estimating scenarios. Upgrade only after signed estimate/invoice, city, month/year, scope, materials, and final cost are verified. |

## /services/deck-repair

Verdict: **blocked**

### Current Gate Issues

- RED: No verified warranty term recorded for repair proof modules.
- RED: No verified repair cost ranges recorded.
- RED: 8 missing evidence item(s).

### Evidence Assets To Resolve

| Status | Asset ID | Needed | Owner Notes |
|---|---|---|---|
| red | `deck-repair-hero-before-after` | Hero before/after image pair for deck repair hub | Use original project photos only; include city and month/year metadata if available. |
| red | `ledger-failure-photo` | Ledger failure photo | Redact private address or identifying house numbers before publishing. |
| red | `post-rot-photo` | Post rot photo | Show failure clearly enough for educational captioning. |
| red | `stair-rebuild-before-after` | Stair rebuild before/after | Do not add a project story until scope and date are confirmed. |
| red | `railing-repair-before-after` | Railing repair before/after | Confirm whether code spacing/height issues were corrected before claiming code repair. |
| red | `resurfacing-before-after` | Composite resurfacing before/after | Confirm framing inspection status before claiming the substructure was saved. |
| red | `joist-sistering-photo` | Joist sistering or framing repair photo | Include only if repair scope is verified by estimate, invoice, or owner confirmation. |
| red | `redacted-permit-or-inspection-screenshot` | Optional redacted permit or inspection screenshot | Remove owner name, property address, permit number, and private notes before public use. |

### Warranty + Repair Cost Requirements

- Required warranty record: `repair-workmanship-warranty-term` in `warranty_terms`.
- Required repair cost records: `joist-sistering`, `ledger-reflash-rebolt`, `post-replacement`, `emergency-stabilization`.
- Keep rows `partial` unless exact terms/ranges are tied to owner policy, accepted estimates, invoices, or calculator data.

## /showcase

Verdict: **proof-incomplete**

### Current Gate Issues

- YELLOW: 6 partial evidence item(s).
- YELLOW: No verified project proof snippets available for this page.

### Project Records To Resolve

| Status | Project ID | City | Month/Year | Missing Proof Area | Owner Notes |
|---|---|---|---|---|---|
| yellow | `showcase-custom-deck-reston` | Reston | February 2025 | Before/after evidence missing | Imported from existing public showcase data on 2026-06-01. Keep partial until owner-supplied before/after evidence, permit/HOA status, and scope are confirmed. |
| yellow | `showcase-metal-fence-centreville` | Centreville | February 2025 | Before/after evidence missing | Imported from existing public showcase data on 2026-06-01. Keep partial until owner-supplied before/after evidence, permit/HOA status, and scope are confirmed. |
| yellow | `showcase-deck-construction-manassas` | Manassas | February 2025 | Before/after evidence missing | Imported from existing public showcase data on 2026-06-01. Keep partial until owner-supplied before/after evidence, permit/HOA status, and scope are confirmed. |
| yellow | `showcase-deck-resurfacing-sterling` | Sterling | December 2024 | Before/after evidence missing | Imported from existing public showcase data on 2026-06-01. Keep partial until owner-supplied before/after evidence, permit/HOA status, and scope are confirmed. |
| yellow | `showcase-balcony-reconstruction-chantilly` | Chantilly | November 2024 | Before/after evidence missing | Imported from existing public showcase data on 2026-06-01. Keep partial until owner-supplied before/after evidence, permit/HOA status, and scope are confirmed. |
| yellow | `showcase-new-composite-deck-ashburn` | Ashburn | October 2024 | Before/after evidence missing | Imported from existing public showcase data on 2026-06-01. Keep partial until owner-supplied before/after evidence, permit/HOA status, and scope are confirmed. |

## Publish Rule

A page is publish-ready only when tracked proof dependencies are verified, public placeholders are absent, runtime proof is synced, and the prepublish evidence gate passes.
