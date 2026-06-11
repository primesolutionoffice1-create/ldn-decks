# DataForSEO n8n MCP Import Preflight - 2026-06-03

## Purpose

Prevent unsafe n8n workflow imports or committed workflow exports for LDN Decks DataForSEO MCP work.

## Scope

- Target domain: `ldndecks.com`
- Workflow folder: `docs/seo/n8n-workflows`
- Manifest: `docs/seo/dataforseo-n8n-mcp-workflow-manifest-2026-06-03.json`
- Runbook: `docs/seo/dataforseo-n8n-mcp-runbook-2026-06-03.md`

## Required Preflight Command

```bash
npm run dataforseo:n8n-mcp:import-preflight
```

## Import Rules

- Workflow exports must remain disabled until manually reviewed in n8n.
- Workflow exports must include an AI Agent and MCP Client Tool.
- Workflow exports must include the structural path `Manual Trigger -> AI Agent -> Review Summary`.
- MCP Client Tool must connect to AI Agent through the `ai_tool` connection.
- MCP Client Tool must point to the local endpoint `http://localhost:3000`.
- Sanitized sample exports must disable saved execution progress and saved manual executions.
- Workflow prompts must stay read-only and must mention `ldndecks.com`.
- Workflow exports must not include n8n credentials, credential IDs, cookies, tokens, passwords, API keys, or Base64 auth headers.
- Workflow exports must not include unrelated domains.
- Workflow exports must not bypass the manifest cost caps.

## Current Sample Export

- `docs/seo/n8n-workflows/dataforseo-ldn-readonly-seo-enrichment.sample.json`

The sample export is disabled, sanitized, LDN-only, read-only, local-MCP only, and guarded by manifest cost caps.
