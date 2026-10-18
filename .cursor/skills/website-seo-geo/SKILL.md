---
name: website-seo-geo
description: Audit and improve Loudoun Decks technical SEO, local content, and AI-search (GEO) readiness. Use when the user asks for SEO, GEO, schema, sitemap, robots, llms.txt, metadata, or indexation work.
---

# Website SEO and GEO

Use this skill for ldndecks.com. Do not promise rankings or AI citations. Do not invent reviews, licenses, prices, projects, or statistics. Do not create near-duplicate city pages.

## When it activates

- Technical SEO: status codes, redirects, canonicals, robots, sitemap, metadata, structured data.
- Local and commercial content: services, service area, proof, and the path to a written estimate.
- GEO: factual answers that a search or AI system can quote, plus crawl access for search crawlers versus training crawlers.

## Which specialist

Delegate research in parallel. One agent edits shared files.

| Task | Agent |
| --- | --- |
| Crawl, indexation, metadata, schema, performance | `technical-seo` |
| Page intent, local proof, calls to action | `content-local-seo` |
| AI-search access, llms.txt, factual answer blocks | `geo-researcher` |
| Independent check before publish | `seo-verifier` |

## Evidence required

For every finding record the URL or file, the check, the result, confidence, priority P0–P3, and the verification that would close it. Business facts come from `src/lib/business.js` and the visible page. Missing Search Console or analytics access is a limit, not proof of zero traffic.

## Audit, priority, implement, verify

1. Compare the repo with https://ldndecks.com. Read `references/checks.md` before running commands.
2. Fix blockers before optional copy. Cap a single pass at 10 changes.
3. Structured data must match visible content.
4. URL changes need a redirect and updated internal links.
5. Run `npm run lint`, `npm run build`, `npm run seo:validate-schema`, and `npm run seo:link-audit` before a production merge.
6. Publish through the existing pull request. Vercel deploys `main`. Do not start a second deploy.

## Tool limits

- GSC, GA4, and DataForSEO credentials are not assumed. Say when they are unavailable.
- Lighthouse is a lab check. It is not field Core Web Vitals.
- `llms.txt`, schema, and crawler access do not guarantee citations.
- Load `references/checks.md` only when running the audit. Do not paste the whole SEO doc archive into context.
