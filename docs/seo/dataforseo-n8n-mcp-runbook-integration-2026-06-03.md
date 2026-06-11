# DataForSEO n8n MCP Runbook Integration - 2026-06-03

## Summary

Added an LDN-only runbook and validator for connecting DataForSEO MCP to n8n workflows safely.

## Source

- `https://dataforseo.com/help-center/connecting-dataforseo-mcp-server-to-your-n8n-workflows`

## What Changed

- Added `docs/seo/dataforseo-n8n-mcp-runbook-2026-06-03.md`.
- Added `scripts/validate-dataforseo-n8n-mcp-runbook.mjs`.
- Added `npm run dataforseo:n8n-mcp:validate`.
- Integrated DataForSEO n8n MCP runbook validation into `npm run seo:weekly`.

## Guardrails

- No DataForSEO credentials are stored in the repo.
- No Base64 auth header is stored in the repo.
- Local MCP setup maps LDN's `DATAFORSEO_LOGIN` to MCP's `DATAFORSEO_USERNAME`.
- `DATAFORSEO_SIMPLE_FILTER="true"` is documented for local MCP use.
- Remote MCP endpoint is documented as credentialed n8n-only setup, not repo config.
- The runbook is LDN-only and avoids unrelated-domain context.

## Validation

- `npm run dataforseo:n8n-mcp:validate`: pass, 14 required phrases, 0 errors, 0 warnings.
- `npm run seo:weekly`: pass and includes `DataForSEO n8n MCP runbook validation | 14 required phrases · 0 errors · 0 warnings`.

## Deploy Decision

No deployment is required because this batch changes local validation/reporting scripts and documentation only, not public rendered site code.
