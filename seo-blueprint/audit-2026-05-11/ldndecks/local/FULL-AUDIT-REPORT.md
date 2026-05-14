# ldndecks.com — Local SEO + Entity Signals Audit

**Date:** 2026-05-11 · **Method:** Codebase-grounded · **Score:** 72 / 100

---

## Business profile

| Field | Value | Source |
|---|---|---|
| Name | Loudoun Decks | [src/lib/business.js:4](src/lib/business.js#L4) |
| Alt name | LDN Decks | line 5 |
| Address | 13704 Winding Oak Cir, Centreville, VA 20121 | lines 13-19 |
| Phone (E.164) | +15716557207 | line 11 |
| Email | office@ldndecks.com | line 12 |
| Geo | 38.8404, -77.4289 | lines 21-23 |
| Hours | M-F 07:00-19:00, Sat 08:00-17:00, Sun closed | lines 24-27 |
| Type (schema) | GeneralContractor | StructuredData.jsx |
| Price | $$-$$$$ | line 13 |
| Area served | Loudoun, Fairfax, Prince William, Arlington, Stafford counties | lines 30-36 |
| Rating | 5.0 / 41 reviews | lines 28-33 |

**Single source of truth.** Every other surface in the site references this object.

---

## NAP consistency
- ✅ Phone formatted as `+15716557207` (E.164) in canonical schema; rendered as `(571) 655-7207` in human-readable CTAs.
- ✅ Single address across all schema emissions.
- ⚠ Footer NAP rendering not directly inspected in this pass; verify [src/components/Footer.jsx](src/components/Footer.jsx) and [src/components/ContactMap.jsx](src/components/ContactMap.jsx) render NAP exactly per business.js.

---

## Entity graph (sameAs)
- ✅ X / Twitter: https://x.com/ldndecks
- ✅ Instagram: https://www.instagram.com/loudoundecks/
- ✅ Facebook: https://www.facebook.com/profile.php?id=61573750423712
- ✅ Google Maps: https://www.google.com/maps/place/Loudoun+Decks/
- ✅ Houzz: https://www.houzz.com/pro/ldndecks
- ✅ Yelp: https://www.yelp.com/biz/loudoun-decks-centreville
- ⚠ Missing: LinkedIn (company page), BBB Business Profile URL, TrustPilot, Nextdoor, Angi, Porch, GuildQuality
- ⚠ Missing: Trex Pro contractor directory entry URL
- ⚠ Missing: TimberTech installer directory entry URL

---

## Google Business Profile signals visible on site

- ✅ [GoogleMapEmbed component](src/components/GoogleMapEmbed.jsx) deployed on canonical city pages (verified Ashburn line 169, Leesburg pattern matches).
- ✅ Maps URL in sameAs.
- ✅ AggregateRating 5.0 / 41 in business.js.
- ❌ No on-site Google Reviews widget (no live `<iframe>` or API-rendered review feed).
- ❌ No GBP Place ID visible in code (the embed presumably uses city-text or place lookup, not the canonical Place ID).
- ❌ No GBP profile direct link in footer or header.

---

## Reviews + testimonials
- ✅ [/reviews](src/app/reviews/page.js) page exists.
- ✅ [/ldn-decks-reviews-yelp](src/app/ldn-decks-reviews-yelp/page.js) — dedicated Yelp page.
- ✅ AggregateRating in schema.
- ✅ Testimonials component used on multiple pages.
- ❌ No `Review` schema on individual testimonials (only AggregateRating).
- ❌ Review velocity / freshness not surfaced — "41 reviews" is static, doesn't refresh.

---

## Local schema
- ✅ Global GeneralContractor with full NAP + geo + areaServed + sameAs + AggregateRating.
- ❌ LocalBusinessSchema component duplicates this with different `@id` and conflicting priceRange (see Schema audit, Critical #1).
- ⚠ No Place schema for the Centreville office location specifically.

---

## Location / area-page quality

### Canonical cities — indexable (28)
- ✅ Standalone `/deck-builder-{slug}-va` routes for: Ashburn, Leesburg, Sterling, Purcellville, Brambleton, South Riding, Alexandria, Fairfax, Vienna, Reston, Herndon, McLean, Centreville, Chantilly, Falls Church, Burke, Springfield, Oakton, Great Falls, Lorton, Tysons, Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Arlington, Stafford.
- ✅ Each has unique title/meta/canonical from buildMetadata.
- ✅ Each has Ashburn-pattern depth: ServicesHeader + ServiceMain + ServiceContentExpansion + ProcessSteps + ServicesFAQ + ServiceAreasGrid + GoogleMapEmbed + RelatedGuides + ContactHome.
- ⚠ Hero image duplication: img36 (16 cities), img37 (14), img17 (10) — visual collision sitewide.
- ⚠ Only 9 of 28 canonical cities have hand-curated `cityLocalContent`. Remaining 19 fall into shared template body.

### Non-canonical cities — noindexed (40)
- 40 cities served by `/near-you/[county]/[city]` template, noindex.
- 9 of these get hand-curated `cityLocalContent` (Ashburn, Leesburg, Reston, Herndon, Fairfax, Vienna, McLean, Sterling, Centreville) — but those 9 are ALSO canonical, so the curated content is redundant since the indexable standalone page is what crawlers see.
- Remaining 31 non-canonical cities fall into generic 50-word boilerplate.

### County hubs
- 5 county hubs (loudoun-county, fairfax-county, prince-william-county, arlington-county, stafford-county) under `/near-you/[county]/` — ALL noindexed by buildMetadata policy.
- This is suboptimal: county hubs are exactly where Google often ranks for `deck builder loudoun county` queries. The site has `/deck-builders-loudoun` indexable as a workaround but no equivalent for the other 4 counties.

---

## Service-area-business (SAB) considerations
- ✅ Centreville address is published — a real physical office, not just a P.O. box.
- ✅ Service area defined as 5 administrative areas (not "all of VA" — appropriately specific).
- ✅ Google's SAB pattern is to either show address OR hide it; since Loudoun Decks has a real office, **showing it is correct** for trust signaling.
- ⚠ Verify the published Centreville address matches GBP's listed address exactly (single character differences cause NAP-consistency penalties).

---

## Industry-specific factors (deck building / home construction)

### Credentials present
- ✅ Trex Platinum Partner messaging
- ✅ TimberTech Certified Installer messaging
- ✅ AZEK installer messaging
- ✅ Western Red Cedar specialist
- ✅ BBB Accredited page exists ([/bbb-accredited-deck-builder-virginia](src/app/bbb-accredited-deck-builder-virginia/page.js))
- ✅ Certifications & Licenses page ([/about/certifications-and-licenses](src/app/about/certifications-and-licenses/page.js))

### Credentials gaps
- ❌ Virginia DPOR contractor license # not visibly published in code (verify on the certifications page in production).
- ❌ Liability insurance carrier / policy verbiage not surfaced.
- ❌ No NADRA (North American Deck and Railing Association) membership mention.
- ❌ NoVa contractor association membership not mentioned (BIA-NoVa, NARI).
- ❌ No EIFS / waterproofing certifications mentioned.

### Project gallery
- ✅ /showcase/[slug] dynamic route with project showcase data.
- ✅ /before-and-after route.
- ✅ /houzz-deck-projects route.
- ⚠ Per-city project galleries: NOT auto-generated. Each city page has a generic gallery from `MasonryGallery` with non-city-specific imagery.

---

## Internal linking depth — validated finding

From homepage:
- Home → /areas-we-serve → city: **2 clicks**
- Home → /services → city (via ServiceAreasGrid on /services): **3 clicks**
- Home → city (direct): NOT POSSIBLE — neither footer nor HomeQuickLinks links to any city.

ServiceAreasGrid renders all 5 counties + all 68 cities, but only appears INSIDE individual city pages and on /services. Homepage doesn't render it.

This is the single biggest local-SEO leverage point: adding a homepage "Top Service Areas" section + footer city links would distribute PageRank to the 28 canonical cities directly, breaking the homepage cannibalization.

See **TOP-20-FIXES.md** and **ACTION-PLAN.md**.
