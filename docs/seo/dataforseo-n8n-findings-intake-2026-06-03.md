# DataForSEO n8n Findings Intake - 2026-06-03

## Purpose

Capture read-only DataForSEO/n8n SEO findings for LDN Decks without letting workflow output become public claims, Ads decisions, account changes, or verified project proof automatically.

## Intake CSV

- `docs/seo/dataforseo-n8n-findings-intake-2026-06-03.csv`

## Required Validation

Run:

```bash
npm run dataforseo:n8n-mcp:findings:validate
```

## Rules

- Target domain must be `ldndecks.com`.
- Rows must come from a sanitized n8n workflow export already covered by `npm run dataforseo:n8n-mcp:import-preflight`.
- Findings are read-only observations until manually reviewed.
- `public_claim_allowed` must remain `no` unless a separate proof/evidence process verifies the claim.
- `ads_action_allowed` must remain `no` unless measurement and scaling gates are green.
- `owner_review_required` must be `yes` for all rows.
- Sample rows must remain `sample_only` and must not be used for public copy, paid media changes, conversion settings, budget decisions, or verified proof snippets.
- Findings must not include credentials, auth headers, cookies, tokens, unrelated domains, or account-setting instructions.

## Current Status

The current CSV contains sample-only rows for validating the intake shape. Real DataForSEO findings can replace or append rows only after the n8n workflow is run in read-only mode.
