# Phase 2 Templates

These templates support `PHASE-2-IMPLEMENTATION-CHECKLIST.md`.

They are documentation assets only. They do not create Airtable bases, upload
conversions, call Google Ads APIs, or store credentials.

## Files

| File | Use |
|---|---|
| `airtable-leads-schema.csv` | Copy into Airtable setup work as the canonical field inventory for Leads, Jobs, and Conversion Uploads. |
| `google-ads-offline-conversions-template.csv` | Starting CSV shape for manual Google Ads offline conversion uploads during Phase 2 V1. |
| `lead-quality-outcome-sample-template.csv` | Lightweight 5-10 row review template for proving lead quality before offline uploads; use as a shape reference only. |
| `fixtures/lead-ingest-google-cpc.json` | Test payload for a Google Ads lead with `gclid`. |
| `fixtures/lead-ingest-direct.json` | Test payload for a direct/no-click-ID lead. |

## Rules

- Replace every `TEST_*` and `*_REPLACE_ME` value before upload.
- Use `America/New_York` timestamps with explicit UTC offset, e.g. `2026-05-13 10:30:00-0400`.
- Keep `Order ID` stable as `{event_id}::{conversion_name}`.
- Treat `lead-quality-outcome-sample-template.csv` as review evidence only; do not upload it directly to Google Ads.
- Add real rows to the latest `docs/ads-tracking/live-lead-outcomes-YYYY-MM-DD.csv`; `npm run measurement:lead-outcomes` automatically validates the newest live intake file when no explicit path is passed.
- Run `LEAD_OUTCOME_INPUT=path/to/file.csv npm run measurement:lead-outcomes` or `npm run measurement:lead-outcomes -- path/to/file.csv` to validate a specific CSV.
- Run `npm run measurement:lead-outcomes` before using any real lead-outcome CSV for scaling decisions or offline-import prep.
- Do not upload Meta events from these templates. Meta activation is Phase 4.
- Do not automate uploads until Phase 3 entry gates pass.
- Fixtures are safe fake data. Replace names/emails/phones before any production
  test that writes into Airtable.
