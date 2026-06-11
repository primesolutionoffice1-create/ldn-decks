# Rank Tracker Manual Snapshot - 2026-06-03

## Purpose

Hold an Ahrefs API/MCP or manually verified rank-tracker snapshot for LDN Decks while the local `AHREFS_API_TOKEN` blocker remains open.

## Intake CSV

- `docs/seo/rank-tracker-manual-snapshot-2026-06-03.csv`

## Rules

- Target domain must be `ldndecks.com`.
- Source must be `SAMPLE_ONLY`, `AHREFS_API`, `AHREFS_MCP`, or `MANUAL_VERIFIED_EXPORT`.
- Sample rows must remain `sample_only` and must not be used for public ranking claims.
- Real rows must include a real ISO `snapshot_date`, keyword, device, location, URL, and numeric position or status `not_ranking`.
- Do not invent live rankings, live GBP metrics, map-pack positions, traffic, Ads performance, or conversion claims.
- Do not change Ahrefs, Google Ads, GTM, GA4, budgets, bidding, conversion settings, GBP, citations, or public copy from this snapshot.
- Run `npm run seo:rank-snapshot:validate` after any edit.

## Current Status

Current rows are sample-only placeholders. Fresh rank tracking remains blocked until a valid `AHREFS_API_TOKEN`, Ahrefs MCP access, or a source-of-record manual export is supplied.
