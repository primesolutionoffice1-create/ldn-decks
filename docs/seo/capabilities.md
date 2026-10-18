# Capabilities

Date: 2026-10-18.

## Works in this environment

| Capability | How | Limit |
| --- | --- | --- |
| Schema validation | `npm run seo:validate-schema` | Checks the repo, not Google rich-result status |
| Internal link audit | `npm run seo:link-audit` | Static route graph, not live click data |
| Live robots and IndexNow smoke | `node scripts/verify-robots-indexnow.mjs` | Needs network |
| Live daily smoke | `node scripts/seo-daily-check.mjs` | Needs network |
| Production HTML | `curl` against https://ldndecks.com | CDN cache can lag a deploy by minutes |
| Build | `npm run build` | Lab compile, not field CrUX |

## Not available here

| Capability | Status |
| --- | --- |
| Google Search Console | No credentials in this environment. Absence is not zero traffic or zero indexation. |
| GA4 | No credentials in this environment. |
| DataForSEO live API | Code exists in `src/lib/dataforseo.js`. This pass did not call the paid API. |
| Personal Claude/Codex SEO skill packs | Not present on this machine. Not reinstalled. |
| Field Core Web Vitals | Not queried. Do not substitute a Lighthouse run. |

## Single source per concern

| Concern | Source |
| --- | --- |
| Business facts | `src/lib/business.js` |
| Metadata and canonicals | `src/lib/seo.js` |
| Robots | `src/app/robots.js` |
| Sitemap | `src/app/sitemap.js` |
| AI discovery file | `public/llms.txt`, checked by `npm run seo:validate-ai-discovery` (street address stays on visible pages, not in this file) |
| Workflow | `.cursor/skills/website-seo-geo/SKILL.md` |
