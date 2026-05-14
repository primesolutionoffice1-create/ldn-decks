# Content — Top 20 Fixes (ldndecks.com)

| # | Fix | Affected URLs | Severity | Traffic Impact | Effort | Reference |
|---|---|---|---|---|---|---|
| 1 | Replace duplicated hero images (img36/37/17) across 28 city pages with unique real local-project photos | 28 city pages | High | Medium-High (visual + image-SERP + AI-image) | 1-2 weeks (photo selection + assignment) | [src/app/deck-builder-*/page.js](src/app/) |
| 2 | Add `NamedAuthor` to every commercial city + blog page | 28 city + 30+ blog/info | High | Medium (E-E-A-T) | 4 hours (template-level inclusion) | [src/components/NamedAuthor.jsx](src/components/NamedAuthor.jsx) |
| 3 | Add "Quick Answer" 60-100 word boxes at the top of every commercial-intent page | 28 city pages + top 10 cost/permit pages | High | High (AI Overviews citation) | 3 days | new component pattern |
| 4 | Expand FAQ answers from 50-150 words → 134-167 words with specific numbers | every page using ServicesFAQ | Medium | High (AI extraction) | 1 week per-page rewrite | [src/components/ServicesFAQ.jsx](src/components/ServicesFAQ.jsx) and per-page faq blocks |
| 5 | Cannibalization: resolve `/deck-design-ideas-2026` vs `/deck-design-ideas-northern-virginia-2026` | 2 URLs | High | Medium | 30 min (301 the loser) | sitemap comment line 81 |
| 6 | Cannibalization: resolve deck-cost cluster (4 pages) → designate one canonical commercial + 3 internal-link supporters | 4 URLs | High | High | 1 week (audit + 301s + internal-link restructure) | composite-deck-cost / how-much-does-a-deck-cost / northern-virginia-deck-cost-report-2026 / deck-cost-calculator |
| 7 | Cannibalization: resolve HOA cluster `/hoa-deck-rules-northern-virginia` vs `/loudoun-county-hoa-deck-rules` | 2 URLs | Medium | Medium | 2 hours | confirm intent split |
| 8 | Cannibalization: resolve `/screened-porch-builder-northern-virginia` vs `/services/porches/screened-porch` vs `/screened-porch-cost-northern-virginia` | 3 URLs | Medium | Medium | 1 day | designate commercial + cost + service hub |
| 9 | Cannibalization: `/deck-financing` vs `/deck-financing-northern-virginia` | 2 URLs | Medium | Low | 30 min | pick one, 301 the other |
| 10 | Add Virginia DPOR contractor license # to footer + /about/certifications-and-licenses prominently | sitewide | High | Medium (trust) | 1 hour | [src/components/Footer.jsx](src/components/Footer.jsx) |
| 11 | Add `NoVAPermitTimeline` to top city pages | 28 city pages | Medium | Medium (AI extraction) | 2 hours per page (already a component) | [src/components/NoVAPermitTimeline.jsx](src/components/NoVAPermitTimeline.jsx) |
| 12 | Strengthen hand-curated content for the 19 canonical cities WITHOUT `cityLocalContent` entries | 19 city pages | High | High (per-city ranking depth) | 2 weeks (research + write) | [src/app/near-you/[county]/[city]/page.js:18-73](src/app/near-you/[county]/[city]/page.js#L18-L73) — but actually applies to standalone /deck-builder-{x}-va too where boilerplate is heavy |
| 13 | Embed Google Reviews widget on /reviews and city pages | /reviews + 28 city pages | High | High (social proof) | 1 day | new widget component |
| 14 | Build per-city project galleries pulled from showcase data | 28 city pages | Medium | Medium (visual depth) | 2 weeks | [src/lib/showcaseData.js](src/lib/showcaseData.js) — filter by city tag |
| 15 | Information-gain content blocks on cost/material pages (per-jurisdiction permit fees, material cost ranges with dates, etc.) | composite-deck-cost + how-much-does-a-deck-cost | Medium | High (AI citation) | 1 week | new structured-data section |
| 16 | Date-stamp every content page (`Last reviewed: May 2026`) for freshness signaling | sitewide | Medium | Medium (Quality Rater Guideline) | 1 day (template-level) | use `NamedAuthor` `lastUpdated` prop |
| 17 | Author + co-author bios on /team page; surface team beyond Nick | /team | Medium | Medium (E-E-A-T) | 1 week | [src/app/team/page.js](src/app/team/page.js) |
| 18 | Move thin / generic non-canonical near-you pages to either curated content or full 301 to county hubs | 31 pages | Low (already noindex) | Low | 1 week | [src/app/near-you/[county]/[city]/page.js](src/app/near-you/[county]/[city]/page.js) |
| 19 | Showcase per-project case studies with cost + duration + materials + city | /showcase/[slug] | Medium | Medium | ongoing | [src/lib/showcaseData.js](src/lib/showcaseData.js) |
| 20 | Press / media mentions block on homepage and /press page | / and /press | Low | Low | 1 week | [src/app/press/page.js](src/app/press/page.js) |
