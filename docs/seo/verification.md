# Verification

Date: 2026-10-18. Branch: `cursor/seo-geo-system-6c80`.

## Before publish

| Check | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run build` | Passed. Next.js 16.3.5, 923 static pages |
| `npm run seo:validate-schema` | Passed. `ok: true`, 0 duplicate FAQ risks, 0 NAP drift files |
| `npm run seo:link-audit` | Passed. 379 sitemap URLs, 0 bad links |
| `npm run verify:financing` | Passed |
| `npm run seo:validate-ai-discovery` | Passed after the street address was kept out of `llms.txt` |
| Independent `seo-verifier` | First pass: FIX (Stafford price table still on the page; `NamedAuthor` job title). Both were corrected. Recheck: OK |
| Local `next start` on port 3030 | Homepage title exact. Canonical attribute `https://ldndecks.com`. `og:image` is `/og-default.webp`. Homepage HTML includes license `#2705191673`, the street address, and `/get-estimate` |
| Header at 1440 | "Get estimate" is visible, 98×44 CSS pixels, `display: flex`. "Financing Available" is still in the header |
| Header at 390 | The desktop "Get estimate" link is `display: none`. Financing remains |
| `/deck-builder-northern-virginia` | Quick answer includes the license and the estimate link. Byline job title is Founder & Lead Contractor |
| `/near-you/stafford-county` | Rendered HTML has no `$14,000` or `$26,000` |
| `/showcase/rooftop-deck-washington-dc` | Robots meta `noindex, follow, max-image-preview:large` |
| `/get-estimate` | Form controls render (11). No lead was submitted |
| `/robots.txt` | 200 from the App Router route. Allows `/`. Disallows `/admin/`, `/api/`, `/draft/` |
| `/sitemap.xml` | 200 |
| `/llms.txt` | Email, Centreville location, and the seven-area list. No street number |

Lighthouse was not run. These checks are not field Core Web Vitals and they are not a Google indexation claim.

## Production

Filled in after the Vercel deploy of `main`. See the commit recorded below once the deploy is confirmed.
