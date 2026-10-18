# Verification — service-area lot

Date: 18 October 2026. Local production build (`next build --webpack`, 923 pages) served with `next start` on port 3456. No form was submitted.

| Check | Result |
| --- | --- |
| `npm run lint` | pass |
| `npm run build` | pass, including TypeScript |
| `npm run verify:financing` | pass |
| `npm run seo:verify-conversion-identity` | pass |
| `npm run seo:validate-schema` | pass. Pre-existing warning on `src/app/faqs/page.js` remains; this lot did not edit that file. |
| `npm run seo:validate-ai-discovery` | pass |
| Homepage title | `Custom Deck Builder in Northern Virginia \| Loudoun Decks` |
| Homepage H1 at 360, 390, 768, and 1440 | one H1, `Custom Deck Builder Near You in Northern Virginia` |
| Coverage line | visible at those widths, including Alexandria and Falls Church |
| Horizontal overflow at 100% | 0 on the homepage and areas page |
| 200% zoom | hero text and the estimate control stay inside the viewport. The page can still scroll sideways because the existing material-partner ticker is wider than the screen. That ticker was not part of this lot. |
| Areas page | no `70+`; McLean, Great Falls, South Riding, One Loudoun, Manassas Park; independent-city group; Stafford hub |
| Estimate page | five-county footer line removed; “View all service areas” present; Alexandria and Falls Church remain in the FAQ |
| Contact description | 139 characters and still names all seven areas |
| Financing HTML | no `#localbusiness`; a visible estimate link remains |
| Canonical | homepage canonical is `https://ldndecks.com/`; robots meta is `index, follow` |
| JSON-LD | homepage script tags parse and include the seven `areaServed` names |
| Console | local 404s for `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`. Those routes exist on Vercel, not in `next start`. |
| Link audit against production | not run here, because production does not yet contain this commit. CI runs `seo:link-audit` against the PR build. |
| DataForSEO, GSC, GA4, CRM, geo CLI | not run |

Screenshots from the local production server: homepage at 360 and 1440, areas page at 390 and 1440, estimate, contact, and financing at 390.
