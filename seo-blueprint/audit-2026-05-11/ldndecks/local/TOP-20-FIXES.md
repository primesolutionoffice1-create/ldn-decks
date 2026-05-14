# Local SEO — Top 20 Fixes (ldndecks.com)

| # | Fix | Affected URLs | Severity | Traffic Impact | Effort | Reference |
|---|---|---|---|---|---|---|
| 1 | Add direct city links to footer (top 8-12 canonical cities) | sitewide | High | Very High (kill homepage cannibalization) | 1 hour | [src/components/Footer.jsx](src/components/Footer.jsx) |
| 2 | Add a "Top Service Areas" section to HomeQuickLinks with 4 direct city links | / | High | High | 30 min | [src/components/HomeQuickLinks.jsx](src/components/HomeQuickLinks.jsx) |
| 3 | Publish Virginia DPOR contractor license # in footer + /about/certifications-and-licenses prominently | sitewide | High | Medium (trust + local) | 1 hour | [src/components/Footer.jsx](src/components/Footer.jsx) |
| 4 | Embed Google Reviews widget on /reviews and homepage | / + /reviews | High | High (social proof + GBP signal) | 1 day | new component |
| 5 | Add canonical GBP Place ID to GoogleMapEmbed for exact-match Maps embed | 28 city pages | Medium | Medium | 1 hour | [src/components/GoogleMapEmbed.jsx](src/components/GoogleMapEmbed.jsx) |
| 6 | Add GBP profile direct link to footer | sitewide | Medium | Medium | 5 min | [src/components/Footer.jsx](src/components/Footer.jsx) |
| 7 | Promote county-hub indexability: add `/deck-builder-fairfax-county`, `/deck-builder-prince-william-county`, `/deck-builder-arlington-county`, `/deck-builder-stafford-county` as canonical indexable pages (currently only `/deck-builders-loudoun` exists) | 4 new URLs | High | Very High (county-level queries) | 2 weeks | new routes |
| 8 | Add `Review` schema for individual testimonials | /reviews + per-page testimonials | Medium | High (review rich snippet) | 1 day | [src/components/Testimonials.jsx](src/components/Testimonials.jsx) |
| 9 | Expand sameAs entity graph: LinkedIn, BBB, TrustPilot, Angi, Nextdoor, GuildQuality, Trex Pro directory, TimberTech installer directory | sitewide via business.js | Medium | Medium (entity resolution) | 2 hours | [src/lib/business.js:43-50](src/lib/business.js#L43-L50) |
| 10 | Per-city project galleries: filter showcase data by city tag, render city-specific projects on each canonical city page | 28 city pages | High | High (E-E-A-T + local intent) | 2 weeks | [src/lib/showcaseData.js](src/lib/showcaseData.js) |
| 11 | Add NADRA member badge + insurance carrier mention to footer / certifications page | sitewide | Medium | Medium (trust) | 1 hour | [src/components/Footer.jsx](src/components/Footer.jsx) + cert page |
| 12 | Verify Centreville GBP address matches code address character-for-character; document any deltas | n/a | High | Medium (NAP consistency) | 30 min | manual GBP check |
| 13 | Hand-curate local content for 19 canonical cities currently missing `cityLocalContent` blocks (Sterling, Purcellville, Brambleton, South Riding, Alexandria, Falls Church, Burke, Springfield, Oakton, Great Falls, Lorton, Tysons, Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Arlington, Stafford, plus Chantilly is in the curated set) | 19 city pages | High | High | 2 weeks | the standalone city page.js files, not the near-you template |
| 14 | Add Place schema for the Centreville office location specifically (vs. just AdministrativeArea references) | / | Low | Low | 30 min | global @graph |
| 15 | Refresh AggregateRating reviewCount via API or scheduled rebuild — currently static "41" | sitewide | Medium | Medium (freshness signal) | 1 day | [src/lib/business.js:28-33](src/lib/business.js#L28-L33) + cron/build hook |
| 16 | Add Houzz Pro directory profile URL to sameAs (it's there, but ensure it's the Pro profile not generic) | sitewide | Low | Low | 5 min | verify [src/lib/business.js:48](src/lib/business.js#L48) |
| 17 | Build a non-canonical → canonical 301 mapping for the 31 non-canonical near-you cities (some may have search demand worth promoting; rest can 301 to county hubs) | 31 near-you city pages | Medium | Medium | 1 week | next.config.mjs redirects |
| 18 | Add `keywords` (named-neighborhood tags) per city for AI Overviews HOA-recognition queries: e.g., Ashburn → Brambleton, Broadlands, One Loudoun, Ashburn Village | 28 city pages | Medium | Medium (HOA query coverage) | 1 day | per-page metadata |
| 19 | Add a "Service Areas" map / SVG diagram on homepage showing all 5 counties with click-through | / | Medium | Medium (visual local signal) | 1 week | new component |
| 20 | Verify [/areas-we-serve](src/app/areas-we-serve/page.js) page has unique content depth (not just a link list) — currently 124 lines, spot-check for E-E-A-T strength | /areas-we-serve | Medium | Medium | 2 hours | manual review |
