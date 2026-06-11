# DataForSEO n8n Raw Findings Intake

This folder is the only approved holding area for raw read-only DataForSEO/n8n output before anything is copied into the official findings intake CSV.

## Rules

- Scope is `ldndecks.com` only.
- Use JSON files only.
- Keep every payload read-only.
- Do not store credentials, auth headers, cookies, tokens, API keys, passwords, account IDs, or private customer data.
- Do not store unrelated-domain findings.
- Do not allow public claims, verified proof snippets, citation edits, SEO task promotion, Ads actions, budgets, bidding, conversions, GTM, GA4, GHL, Vapi, Twilio, Vercel, or DataForSEO account-setting changes from raw output.
- Run `npm run dataforseo:n8n-mcp:raw-findings:validate` before copying any reviewed row into `docs/seo/dataforseo-n8n-findings-intake-2026-06-03.csv`.

## Payload Shape

Each JSON file must include:

- `targetDomain`: `ldndecks.com`
- `mode`: `read_only`
- `sourceWorkflow`: sanitized workflow export name
- `sampleOnly`: boolean
- `findings`: array of raw observations

Each finding must include:

- `id`
- `type`
- `source`
- `affectedUrl`
- `summary`
- `evidenceStrength`
- `confidence`
- `reviewOnly`
- `publicClaimAllowed`
- `adsActionAllowed`
- `ownerReviewRequired`

## Current Status

The current file set is sample-only. Real read-only findings can be added here after the local n8n workflow runs, then validated, manually reviewed, and only then copied into the official findings intake CSV.
