# Owner Evidence Action Packet — 2026-06-02

Purpose: convert partial SEO proof architecture into verified, publish-safe evidence without fabricating project details, reviews, warranties, costs, or photos.

## Current Proof Status

- Projects: 10 total · 0 verified
- Asset requirements: 11 total · 11 unresolved
- Warranty terms: 0 recorded
- Repair cost ranges: 0 recorded
- Action rows: 26
- Publish readiness: 0 ready · 1 incomplete · 3 blocked

## Publish Readiness Snapshot

| Page | Verdict | Top issue |
|---|---|---|
| /before-and-after | blocked | 2 missing evidence item(s). |
| /composite-deck-cost-northern-virginia | blocked | 1 missing evidence item(s). |
| /services/deck-repair | blocked | No verified warranty term recorded for repair proof modules. |
| /showcase | proof-incomplete | 6 partial evidence item(s). |

## Evidence Workload Summary

- Photo or asset actions: 11
- Project record actions: 10
- Warranty term actions: 1
- Repair cost range actions: 4

| Page | Assets | Projects | Warranty Terms | Repair Cost Ranges |
|---|---:|---:|---:|---:|
| /services/deck-repair | 8 | 0 | 0 | 4 |
| sitewide | 0 | 0 | 1 | 0 |
| /before-and-after | 2 | 4 | 0 | 0 |
| /composite-deck-cost-northern-virginia | 1 | 0 | 0 | 0 |
| /showcase | 0 | 6 | 0 | 0 |

## Priority Counts

- P0: 13
- P1: 13

## Page Counts

- /services/deck-repair: 12
- sitewide: 1
- /before-and-after: 6
- /composite-deck-cost-northern-virginia: 1
- /showcase: 6

## Red Gates

- Do not mark a record `verified` while it contains unknown, unverified, not recorded, not specified, owner-fill, or placeholder values.
- Do not mark a record `verified` without concrete `owner_notes` naming the reviewed source type and what was confirmed.
- Do not use `owner verification still required`, `verification still required`, `source pending`, or vague source notes in verified rows.
- Do not publish project cards as proof until project fields are concrete and original media is tied to the project.
- Do not publish exact warranty terms until written wording is confirmed.
- Do not publish repair cost ranges until low/high values are source-backed and numeric.
- Do not include customer names, full addresses, phone numbers, permit numbers, or unredacted documents.

## Owner Collection Workflow

1. Use the CSV paired with this report as the collection checklist.
2. Gather original photos and source documents for the P0 rows first.
3. Rename image files with city, service type, and month/year after confirmation.
4. Fill the intake CSV with concrete values; leave unknown items as `partial`.
5. Add concrete `owner_notes` before promoting any row to `verified`.
6. Import with `npm run seo:import-evidence -- --file path/to/owner-filled.csv --dry-run`.
7. Promote verified rows only with `--allow-verified` after source review.
8. Run `npm run seo:validate-evidence`, `npm run seo:audit-placeholders`, and `npm run build` before public proof use.

## Top Actions

| Priority | Page | Verdict | Type | ID | Status | Owner action |
|---|---|---|---|---|---|---|
| P0 | /services/deck-repair | blocked | asset | deck-repair-hero-before-after | missing | Hero before/after image pair for deck repair hub |
| P0 | /services/deck-repair | blocked | repair_cost_range | emergency-stabilization | missing | Provide verified low/high range for emergency stabilization. |
| P0 | /services/deck-repair | blocked | repair_cost_range | joist-sistering | missing | Provide verified low/high range for joist sistering. |
| P0 | /services/deck-repair | blocked | asset | joist-sistering-photo | missing | Joist sistering or framing repair photo |
| P0 | /services/deck-repair | blocked | asset | ledger-failure-photo | missing | Ledger failure photo |
| P0 | /services/deck-repair | blocked | repair_cost_range | ledger-reflash-rebolt | missing | Provide verified low/high range for ledger reflash/rebolt. |
| P0 | /services/deck-repair | blocked | repair_cost_range | post-replacement | missing | Provide verified low/high range for post replacement. |
| P0 | /services/deck-repair | blocked | asset | post-rot-photo | missing | Post rot photo |
| P0 | /services/deck-repair | blocked | asset | railing-repair-before-after | missing | Railing repair before/after |
| P0 | /services/deck-repair | blocked | asset | redacted-permit-or-inspection-screenshot | missing | Optional redacted permit or inspection screenshot |
| P0 | /services/deck-repair | blocked | asset | resurfacing-before-after | missing | Composite resurfacing before/after |
| P0 | /services/deck-repair | blocked | asset | stair-rebuild-before-after | missing | Stair rebuild before/after |
| P0 | sitewide | blocked | warranty | repair-workmanship-warranty-term | missing | Provide exact verified repair workmanship warranty term, scope, and limitations. |
| P1 | /before-and-after | blocked | asset | before-after-image-metadata | missing | Original image metadata or owner confirmation tying each before/after pair to the correct project city, month/year, and scope. |
| P1 | /before-and-after | blocked | project | before-after-project-1 | partial | Complete project fields: neighborhood, month_year, materials, verified_failure, work_performed, permit_or_hoa_status. |
| P1 | /before-and-after | blocked | project | before-after-project-2 | partial | Complete project fields: neighborhood, month_year, materials, verified_failure, work_performed, permit_or_hoa_status. |
| P1 | /before-and-after | blocked | project | before-after-project-3 | partial | Complete project fields: neighborhood, month_year, materials, verified_failure, work_performed, permit_or_hoa_status. |
| P1 | /before-and-after | blocked | project | before-after-project-4 | partial | Complete project fields: neighborhood, month_year, materials, verified_failure, work_performed, permit_or_hoa_status. |
| P1 | /before-and-after | blocked | asset | before-after-project-records | missing | Owner-supplied project records for all four before/after cards: signed estimate or invoice, final scope, month/year, city/neighborhood, material selection, timeline, final cost, and permit/HOA status. |
| P1 | /composite-deck-cost-northern-virginia | blocked | asset | composite-cost-example-records | missing | Estimate/invoice-backed records for pricing examples before they are described as formal real project examples. |
| P1 | /showcase | proof-incomplete | project | showcase-balcony-reconstruction-chantilly | partial | Complete project fields: neighborhood, materials, verified_failure, permit_or_hoa_status, before_photo_path. |
| P1 | /showcase | proof-incomplete | project | showcase-custom-deck-reston | partial | Complete project fields: neighborhood, materials, verified_failure, permit_or_hoa_status, before_photo_path. |
| P1 | /showcase | proof-incomplete | project | showcase-deck-construction-manassas | partial | Complete project fields: neighborhood, materials, verified_failure, permit_or_hoa_status, before_photo_path. |
| P1 | /showcase | proof-incomplete | project | showcase-deck-resurfacing-sterling | partial | Complete project fields: neighborhood, materials, verified_failure, permit_or_hoa_status, before_photo_path. |
| P1 | /showcase | proof-incomplete | project | showcase-metal-fence-centreville | partial | Complete project fields: neighborhood, verified_failure, permit_or_hoa_status, before_photo_path. |

