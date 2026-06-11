# DataForSEO n8n MCP Runbook - 2026-06-03

## Purpose

Prepare a safe LDN Decks runbook for connecting DataForSEO MCP to n8n workflows without storing credentials in the repo and without changing live DataForSEO, Google Ads, GTM, GA4, budgets, bidding, conversion actions, or external account settings.

## Source Checked

- DataForSEO Help Center: `https://dataforseo.com/help-center/connecting-dataforseo-mcp-server-to-your-n8n-workflows`

Key setup details from the source:

- DataForSEO MCP local HTTP server starts with `npx dataforseo-mcp-server http`.
- MCP credentials use `DATAFORSEO_USERNAME` and `DATAFORSEO_PASSWORD`.
- `DATAFORSEO_SIMPLE_FILTER="true"` is recommended for models or agents that struggle with nested filter structures.
- n8n uses an AI Agent plus MCP Client Tool.
- Local endpoint example: `http://localhost:3000`.
- Remote endpoint option: `https://mcp.dataforseo.com/mcp`.
- Remote endpoint uses Header Authentication with a Base64-encoded DataForSEO API login/password string.
- DataForSEO notes that the remote MCP endpoint does not support `DATAFORSEO_SIMPLE_FILTER`; local server is preferred when simple filters are needed.

## LDN Credential Mapping

The LDN web app uses these server-only environment variables:

- `DATAFORSEO_LOGIN`
- `DATAFORSEO_PASSWORD`

The DataForSEO MCP server expects:

- `DATAFORSEO_USERNAME`
- `DATAFORSEO_PASSWORD`
- `DATAFORSEO_SIMPLE_FILTER`

For a local n8n/MCP session, map the existing login value into the MCP username variable:

```bash
export DATAFORSEO_USERNAME="$DATAFORSEO_LOGIN"
export DATAFORSEO_PASSWORD="$DATAFORSEO_PASSWORD"
export DATAFORSEO_SIMPLE_FILTER="true"
npx dataforseo-mcp-server http
```

Do not commit real values, Base64 auth headers, screenshots containing credentials, n8n credentials, or workflow exports containing secrets.

## Local n8n Setup

1. Install Node.js if needed.
2. Install or run n8n in the operator environment.
3. Export DataForSEO MCP environment variables.
4. Start the MCP server with `npx dataforseo-mcp-server http`.
5. Open n8n.
6. Create a workflow with an AI Agent.
7. Add MCP Client Tool.
8. Point the MCP Client Tool to the local MCP server URL.
9. Send a small read-only test prompt.

## Cloud n8n Setup

Use cloud n8n only if the operator understands credential handling.

1. Use MCP Client Tool.
2. Set endpoint to `https://mcp.dataforseo.com/mcp`.
3. Use Header Authentication.
4. Provide a Base64-encoded API login/password value only inside n8n credentials.
5. Do not paste auth headers into repo files, docs, issues, public comments, or workflow descriptions.

## LDN Workflow Use Cases

Start with read-only workflows only:

- SERP checks for priority deck builder pages.
- Competitor/domain context for LDN Decks only.
- Backlink/referring domain enrichment.
- AI/LLM visibility checks.
- Business listing/citation checks.

## Safety Rules

- Do not run broad crawls without cost caps.
- Do not generate new paid ad activation decisions from MCP output alone.
- Do not mix unrelated domains into LDN Decks workflows.
- Do not expose DataForSEO credentials to client-side code.
- Do not store Base64 auth headers in workflow JSON committed to git.
- Use `DATAFORSEO_SIMPLE_FILTER="true"` for local MCP workflows unless a tested workflow explicitly needs nested filters.

## Validation

Run:

```bash
npm run dataforseo:n8n-mcp:validate
```

The validator checks that this runbook keeps the required endpoint, env var, credential, local/remote, simple-filter, and no-secret rules visible.
