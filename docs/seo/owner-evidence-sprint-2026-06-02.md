# Owner Evidence Sprint Checklist — 2026-06-02

Purpose: a short working checklist for the owner evidence collection sprint. This does not replace the full handoff; it turns the proof blockers into execution blocks.

## Sprint Targets

- Owner action rows: 26
- P0 actions: 13
- P1 actions: 13
- Photo or asset actions: 11
- Project record actions: 10
- Warranty term actions: 1
- Repair cost range actions: 4

## Sprint Blocks

| Block | Priority | Action | Source file | Done criteria |
|---|---|---|---|---|
| Repair media | P0 | Collect 11 photo/asset actions, starting with the 8 deck repair assets. | `docs/seo/photo-ingestion-manifest-2026-06-02.csv` | Original media only; city/month-year known when available; private address/customer details redacted; unresolved rows remain partial. |
| Commercial proof | P0 | Confirm 1 warranty term action and 4 repair cost range actions. | `docs/seo/warranty-terms-intake-2026-06-02.csv + docs/seo/repair-cost-ranges-intake-2026-06-02.csv` | Warranty wording and cost ranges come from written policy, invoices, accepted estimates, calculator data, or owner-approved pricing policy. |
| Project linkage | P1 | Complete 10 project record actions with city, month/year, scope, materials, permit/HOA status, and photo linkage. | `docs/seo/project-evidence-intake-2026-06-02.csv` | Project fields are concrete; before/after media is linked to the correct job; unknown details remain partial. |
| Privacy pass | P0 | Redact addresses, permit numbers, customer names, phone numbers, emails, and private notes before public proof use. | `All owner-supplied media and documents` | No private homeowner data appears in public paths, reports, screenshots, or proof-bearing captions. |
| Dry-run pass | P0 | Run dry-runs and validators before any verified import. | `Owner-filled intake files` | Dry-runs pass; `seo:validate-owner-intake`, `seo:validate-evidence`, and `seo:proof-preflight` pass before promotion. |

## Publish Rule

No blocked proof page becomes publish-ready until verified evidence is imported, runtime proof is regenerated, public placeholders are clean, and `npm run seo:prepublish-evidence` passes without expected-blocked status.

