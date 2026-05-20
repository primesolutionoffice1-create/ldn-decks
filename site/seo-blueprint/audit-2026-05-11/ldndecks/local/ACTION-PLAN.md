# Local SEO — Action Plan (ldndecks.com)

## 7-Day Plan

### Day 1-2 — Quick trust + linking wins
1. Add Virginia DPOR contractor license # to footer.
2. Add 8-12 city links to footer (Ashburn, Leesburg, Reston, McLean, Sterling, Fairfax, Vienna, Great Falls, Centreville, Chantilly, Herndon, Alexandria).
3. Add "Top Service Areas" 4-card section to HomeQuickLinks (Ashburn, Leesburg, Reston, McLean).
4. Add Google Business Profile direct link to footer.

### Day 3-4 — Reviews + entity signals
5. Embed Google Reviews widget on /reviews + homepage.
6. Add `Review` schema for individual testimonials (after Schema audit fixes deploy).
7. Expand sameAs in business.js: LinkedIn, BBB profile URL, TrustPilot, Angi, Nextdoor, Trex Pro directory, TimberTech directory.

### Day 5-6 — Map + Place ID
8. Find canonical GBP Place ID; update [GoogleMapEmbed](src/components/GoogleMapEmbed.jsx) to use Place ID for exact-match embed.
9. Verify the Centreville address in business.js matches GBP exactly (run live diff).

### Day 7 — Validation
10. Re-test /reviews, top 5 city pages, homepage in Google Rich Results Test.
11. Verify GSC > Performance > "deck builder {city} va" impressions begin to climb (longer baseline — measure at week 4).

## 30-Day Plan

### Week 2 — County hubs
- Build canonical indexable `/deck-builder-fairfax-county` page (mirror `/deck-builders-loudoun` pattern).
- Build canonical indexable `/deck-builder-prince-william-county`, `/deck-builder-arlington-county`, `/deck-builder-stafford-county`.
- 301 the noindexed `/near-you/{county}` to the new canonical county pages.

### Week 3 — Per-city project galleries
- Tag projects in [showcaseData.js](src/lib/showcaseData.js) with a `cities: ['ashburn', ...]` array.
- Filter and render per-city on each canonical city page (replace generic MasonryGallery on city pages).

### Week 4 — Curated local content for 19 underbuilt city pages
- Write 3-paragraph `cityLocalContent` blocks for: Sterling, Purcellville, Brambleton, South Riding, Alexandria, Falls Church, Burke, Springfield, Oakton, Great Falls, Lorton, Tysons, Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Arlington, Stafford.

## 60-Day Plan
- Add NADRA membership (if applicable) + insurance carrier on certifications page.
- Build a Service Areas map / SVG diagram for homepage.
- Refresh AggregateRating reviewCount programmatically (GBP API on build).
- Audit 31 non-canonical near-you cities for which deserve promotion vs 301.

## 90-Day Plan
- HOA-named-community SEO sprint: dedicated H2 sub-sections for top 30 named communities (Brambleton, Broadlands, One Loudoun, Lansdowne, River Creek, Ashburn Village, Belmont Country Club, Stone Ridge, etc.).
- Trex Pro / TimberTech installer directory citations confirmed and listed in sameAs.
- Build a "Press" page that surfaces media mentions / publications.

## KPIs
- GSC > Performance > Per-city `deck builder {city} va` queries (track 28 separately).
- GBP > Profile insights > Search queries (track monthly).
- Reviews count in business.js (monthly bump from GBP).
- Branded vs non-branded query split (target: shift toward more non-branded as city pages climb).
