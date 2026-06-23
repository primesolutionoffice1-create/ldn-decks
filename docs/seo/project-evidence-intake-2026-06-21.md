# Project Evidence Intake — 2026-06-21

Purpose: give the owner/team a prefilled CSV for project proof completion without inventing case-study details.

## Summary

- Project rows needing owner verification: 10
- Before/after rows: 4
- Showcase rows: 6
- Default handling: keep `partial` until source evidence is reviewed.

## Rules

- Do not mark projects `verified` while any owner-fill, unknown, not recorded, or unverifiable values remain.
- Do not add customer names, full addresses, phone numbers, permit numbers, or unredacted documents.
- Before/after paths must resolve in `public/` before verified import.
- Project dates, materials, scope, costs, timelines, permit/HOA status, and code claims must come from owner/source evidence.

## Dry-Run Command

```bash
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-21.csv --dry-run
```

## Verified Import Command

Only after owner/source review:

```bash
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-21.csv --allow-verified
```
