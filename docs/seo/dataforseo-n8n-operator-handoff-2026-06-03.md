# DataForSEO n8n Operator Handoff - 2026-06-03

## Status

- Overall: PASS
- Operator status: READY_FOR_READ_ONLY_RUNS_ONLY
- Missing checks: none
- Failing checks: none

## Gate Summary

| Gate | Status | Key metric |
|---|---|---|
| Runbook | PASS | 14 required phrases |
| Workflow manifest | PASS | ldndecks.com · read-only yes · 6 cost caps |
| Import preflight | PASS | EXPORTS_VALIDATED · 1 exports |
| Raw findings validation | PASS | SAMPLE_ONLY · 1 files · 0 real findings |
| Findings intake draft | PASS | SAMPLE_ONLY · 2 rows · 0 real |
| Findings intake | PASS | SAMPLE_ONLY · 3 rows · 0 real |
| Findings review board | PASS | SAMPLE_ONLY · 3 rows · 0 public claims · 0 Ads actions |
| Promotion gate | PASS | NO_PROMOTABLE_FINDINGS · 0 candidates · 0 promotable |

## Allowed Now

- Start the local DataForSEO MCP server from the operator environment.
- Import or rebuild only the sanitized disabled n8n workflow sample.
- Run read-only LDN Decks research against ldndecks.com.
- Drop raw n8n output only into docs/seo/dataforseo-n8n-raw-findings and validate it before CSV intake.
- Generate an intake draft from validated raw output before copying any row into the official CSV.
- Append real findings to the findings intake only after reviewing raw output for secrets and scope.
- Re-run the raw findings, draft, intake, review board, promotion gate, and weekly SEO checks after any finding changes.

## Blocked Now

- Do not publish public claims from DataForSEO output.
- Do not create verified proof snippets from DataForSEO output.
- Do not change Google Ads, GTM, GA4, budgets, bidding, conversions, GHL, Vapi, Twilio, Vercel, or DataForSEO account settings.
- Do not promote sample-only rows.
- Do not mix unrelated domains into the workflow, findings intake, or review board.

## Required Commands

- `npm run dataforseo:n8n-mcp:validate`
- `npm run dataforseo:n8n-mcp:workflow:validate`
- `npm run dataforseo:n8n-mcp:import-preflight`
- `npm run dataforseo:n8n-mcp:raw-findings:validate`
- `npm run dataforseo:n8n-mcp:findings:draft`
- `npm run dataforseo:n8n-mcp:findings:validate`
- `npm run dataforseo:n8n-mcp:findings:board`
- `npm run dataforseo:n8n-mcp:findings:board:validate`
- `npm run dataforseo:n8n-mcp:promotion-gate`
- `npm run seo:weekly`

## Current Operating Rule

DataForSEO/n8n is ready only for read-only LDN Decks research. It is not cleared for public claims, verified proof, SEO task promotion, citation edits, Ads changes, budget changes, bidding changes, conversion changes, or external account changes.
