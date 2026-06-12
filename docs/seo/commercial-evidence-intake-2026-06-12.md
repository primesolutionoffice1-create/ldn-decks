# Commercial Evidence Intake — 2026-06-12

Purpose: give the owner/team prefilled warranty and repair-cost CSVs without inventing commercial claims.

## Summary

- Warranty rows needing owner verification: 1
- Repair cost rows needing owner verification: 4
- Default status: `partial`

## Rules

- Do not mark warranty terms `verified` until exact wording, duration, scope, and exclusions are confirmed.
- Do not mark repair cost ranges `verified` until `low`, `high`, and `source` are filled from real pricing evidence.
- Leave unknown values blank or `partial`; do not infer from marketing copy.
- Remove private customer names, addresses, permit numbers, and invoice identifiers from source notes.

## Dry-Run Commands

```bash
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-12.csv --dry-run
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-12.csv --dry-run
```

## Verified Import Commands

Only after owner/source review:

```bash
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-12.csv --allow-verified
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-12.csv --allow-verified
```

