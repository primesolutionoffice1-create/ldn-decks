# Photo Ingestion Manifest — 2026-06-19

Purpose: give the owner/team a prefilled CSV for original photo and approved badge-asset collection without inventing project proof.

## Summary

- Manifest rows: 18
- Asset IDs covered: 12
- Default status: `partial`
- Required owner field before ingest: `source_path`

## Rules

- Use original LDN Decks project photos only.
- For membership or directory badges, use only original or association-approved logo files.
- Do not use stock imagery.
- Do not mark rows `verified` unless project linkage, city, month/year, publication permission, and source file are reviewed.
- Remove or crop private homeowner information before publishing.
- For before/after pairs, keep both rows tied to the same `asset_id`.

## Ingest Command

Before owner photo paths are filled:

```bash
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-19.csv --preflight
```

After `source_path` is filled:

```bash
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-19.csv --dry-run
```

After source review:

```bash
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-19.csv --allow-verified
```

