# Implementation

Date: 2026-10-18. Branch: `cursor/seo-geo-system-6c80`.

## Shipped in this pass

| Change | Why |
| --- | --- |
| `.cursor/skills/website-seo-geo/` | Portable audit workflow. References stay out of the main skill until needed. |
| `.cursor/agents/*.md` | Four specialists. Research agents are read-only. One parent integrates files. |
| `.cursor/rules/seo-geo.mdc` | File-scoped constraints for metadata, robots, sitemap, and llms files. |
| `public/llms.txt` | Email, Centreville location, service area, and blog count aligned to the repo. The street address stays off this file because `seo:validate-ai-discovery` forbids it. |
| `public/llms-full.txt` | Date bump. Rooftop showcase is no longer a preferred citation URL. |
| Deleted `public/robots.txt` | Live robots come from `src/app/robots.js`. |
| Showcase metadata | `noIndex` is the flag `buildMetadata` actually reads. |
| Founder schema | Job title comes from `BUSINESS.founder.jobTitle` on the team card, article schema, the team profile description, the press kit, and the `NamedAuthor` byline. Placeholder `award` removed. |
| Homepage SEO section | One visible sentence with license, address, phone, and estimate link. |
| `/deck-builder-northern-virginia` | `GeoAnswerBlock` from existing business facts. |
| `/near-you/stafford-county` | `GeoAnswerBlock`. Cost FAQ and the on-page price table no longer state an unsupported dollar range. |
| Header | Desktop "Get estimate" link beside Call Now, hidden at 1024px and below. |
| Root Open Graph image | `/og-default.webp`. |

## Not done

- No new city pages.
- No URL changes.
- No review counts, prices, or awards added.
- No second Vercel deploy path. Merge to `main` is the deploy.
- Search Console and GA4 were not connected.
- The two-hop `www` trailing-slash redirect was left as-is.
