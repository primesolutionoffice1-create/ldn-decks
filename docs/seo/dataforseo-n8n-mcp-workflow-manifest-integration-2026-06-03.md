# DataForSEO n8n MCP Workflow Manifest Integration - 2026-06-03

## What Changed

- Added a read-only n8n workflow manifest for LDN Decks DataForSEO MCP SEO enrichment.
- Locked the manifest to `ldndecks.com`.
- Required local MCP mode with `npx dataforseo-mcp-server http`.
- Required `DATAFORSEO_SIMPLE_FILTER` for the local MCP workflow path.
- Added cost caps before any workflow can be treated as ready for live operation.
- Added a validator that rejects non-LDN domain drift, repo-stored credential patterns, missing n8n MCP nodes, missing read-only rules, and missing cost caps.

## Validation

Run:

```bash
npm run dataforseo:n8n-mcp:workflow:validate
```

This is local-only and does not connect to DataForSEO, n8n, Google Ads, GTM, GA4, GHL, Vapi, Twilio, or Vercel.

## Status

The manifest is a blueprint only. It is not an active n8n workflow export and it stores no credentials.
