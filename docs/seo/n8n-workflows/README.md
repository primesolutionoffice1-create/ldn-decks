# LDN Decks n8n Workflow Exports

This folder is reserved for sanitized n8n workflow exports related to LDN Decks only.

Before any workflow export is committed or imported, run:

```bash
npm run dataforseo:n8n-mcp:import-preflight
```

Rules:

- Keep exports disabled until manually reviewed in n8n.
- Do not commit credentials, credential IDs, Base64 auth headers, cookies, tokens, passwords, or API keys.
- Keep DataForSEO MCP workflows local-only unless a separate cloud credential review is completed.
- Keep workflow scope to `ldndecks.com`.
- Keep broad SERP, backlink, listing, and competitor queries behind the manifest cost caps.
- Keep sample exports structurally connected as `Manual Trigger -> AI Agent -> Review Summary`, with MCP Client Tool attached to AI Agent through `ai_tool`.

Current sample:

- `dataforseo-ldn-readonly-seo-enrichment.sample.json`: disabled, sanitized sample export for read-only DataForSEO MCP SEO enrichment.
