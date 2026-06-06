# Phase 4 — Local SEO Implementation

NoVA is a top-10 most-affluent and most-competitive metro in the US for home services. Loudoun County alone has 100+ active deck contractors with GBP listings. Your edge has to come from **completeness + signal density**, not GBP basics every competitor has.

---

## NAP Audit (current state)

| Source | Name | Address | Phone | Status |
|---|---|---|---|---|
| Schema (homepage `GeneralContractor`) | Loudoun Decks | 13704 Winding Oak Cir, Centreville, VA 20121 | +15716557207 | ✓ |
| Shared org schema (`src/lib/business.js`) | Loudoun Decks | 13704 Winding Oak Cir, Centreville, VA 20121 | +15716557207 | ✓ source of truth |
| Visible HTML / header | Loudoun Decks | 13704 Winding Oak Cir, Centreville, VA 20121 | (571) 655-7207 | ✓ display format |
| Footer | Loudoun Decks | 13704 Winding Oak Cir, Centreville, VA 20121 | (571) 655-7207 | ✓ aligned |
| Google Business Profile | Loudoun Decks | 13704 Winding Oak Cir, Centreville, VA 20121 | (571) 655-7207 | ✓ public profile linked in `sameAs`; live GBP dashboard still owner-controlled |
| BBB profile | Loudoun Decks | Centreville, VA | profile URL in `sameAs` | ✓ |

**Current NAP policy:**
1. Keep `src/lib/business.js` as the single source of truth for name, address, phone, sameAs, credentials, and membership data.
2. Use E.164 `+15716557207` in JSON-LD and display `(571) 655-7207` in HTML.
3. Keep organization profiles in `BUSINESS.sameAs`; do not place company profiles in Person-level `sameAs`.
4. Do not emit `aggregateRating` or self-hosted review schema for the business. Google's review-snippet policy treats self-serving local business review markup as ineligible/risky.

---

## Google Business Profile — full optimization checklist

You need to audit your existing GBP, then execute this list. I cannot read your GBP without API access, so this is a self-audit checklist.

### Profile fundamentals
- [ ] **Business name**: exactly "Loudoun Decks" (no keyword stuffing like "Loudoun Decks - Custom Deck Builder Northern Virginia" — that's a manual-action risk per Google policy)
- [ ] **Primary category**: "Deck builder" (Google has this exact category)
- [ ] **Additional categories** (max 9): Contractor, General contractor, Home builder, Patio enclosure supplier, Patio paving contractor, Outdoor lighting installation service, Roofing contractor (only if you do covered porches), Carpenter, Landscape designer
- [ ] **Service area**: list your service-area cities/counties (not a storefront — set as service-area business). Cities to add: every city you have a `/deck-builder-{city}-va` page for + every county hub.
- [ ] **Description (750 chars)**: see template below
- [ ] **Hours**: include holiday hours; mark "by appointment" if applicable
- [ ] **Phone**: match `+15716557207`
- [ ] **Website URL**: https://ldndecks.com (root, not a tracked URL — leave UTM tagging to GBP's built-in tracking)
- [ ] **Booking URL**: https://ldndecks.com/get-estimate
- [ ] **Appointment URL**: same
- [ ] **Menu URL**: not applicable, but consider adding a "Services" link to https://ldndecks.com/services
- [ ] **Opening date**: set the year you opened (year of formation per VA SCC records)
- [ ] **Logo**: square, transparent background, ≥720×720
- [ ] **Cover photo**: best deck project photo, 1080×608, NOT logo
- [ ] **Other photos**: minimum 30 (10 exterior project shots, 5 team/equipment, 5 in-progress, 10 completed projects with brief captions naming city)

### GBP Description template (750 chars max)

```
Loudoun Decks builds premium custom decks, screened porches, pergolas, and outdoor
living spaces across Northern Virginia. As a Class A Virginia contractor with
manufacturer profile links available for homeowner verification, we serve homeowners
throughout Loudoun, Fairfax, Prince William, and Arlington counties — from Ashburn
and Leesburg to Reston, Vienna, McLean, and Manassas.

Projects are planned around NoVA's permit requirements, HOA review, material specs,
and site conditions. Composite, Trex, AZEK, TimberTech, IPE, cedar, and
pressure-treated decks. Public review profiles and warranty terms should be verified
at the source before quoting specific counts, ratings, or coverage.

Call (571) 655-7207 or request a free estimate at ldndecks.com.
```

(Word count: 122. Char count: 740.)

### GBP Services (full list, with descriptions)

For each service, GBP allows a 300-char description. Add ALL of these:

| Service | Description |
|---|---|
| Custom deck construction | Architect-designed multi-level, second-story, and rooftop decks built to your home's character. |
| Composite deck installation | Trex, TimberTech, AZEK, Deckorators — verify current manufacturer profile details at the source. |
| Trex deck installation | Trex Transcend, Enhance Naturals, Select — verify current Trex profile and warranty details at the source. |
| Wood deck construction | Pressure-treated, cedar, IPE, mahogany — natural beauty, traditional craftsmanship. |
| Deck resurfacing | Resurface existing frames with new composite or wood for 40–60% less than full replacement. |
| Deck repair | Rot, loose railings, ledger boards, joist replacement, board replacement. |
| Deck inspection | Annual safety inspection — joists, ledger, fasteners, posts, railings. |
| Screened porch construction | Three-season and screened-in porches with screen rooms, ceiling fans, lighting. |
| Front porch construction | Welcoming front porches matched to home architecture. |
| Pergola installation | Cedar, vinyl, aluminum — including louvered (StruXure-style) pergolas. |
| Patio installation | Paver and flagstone patios; integrated outdoor kitchens and fire features. |
| Outdoor living spaces | Full-service design + build for decks, porches, patios, pergolas, and outdoor kitchens. |
| Deck financing | Financing available — fast pre-approval, low monthly payments. |

### GBP Posts (cadence)

Post **2× per week**, every week. Mix:
- 1× project showcase (city, material, timeline)
- 1× offer or seasonal CTA (e.g., "Book your spring deck build by April 15 for May completion")

GBP posts expire after 7 days; the cadence keeps the listing fresh. Each post should embed the city name and a CTA URL pointing to the matching city page or service page.

### GBP Reviews (the velocity strategy)

Review velocity matters more than total count for GBP ranking. **Target: 5+ reviews per month.** Tactics:
1. **Project-completion email** with one-click Google review link (use https://search.google.com/local/writereview?placeid={YOUR_PLACE_ID}).
2. **Project-completion text** (SMS) 3 days after install completion with the same link. Open rate ~95% vs email ~25%.
3. **In-person ask** at the final walkthrough, on a tablet pre-loaded with the review form.
4. **Owner reply to every review within 48 hours**, mentioning the city by name. (This is a ranking signal AND an AI Overview citation hook.)
5. **Negative-review playbook**: respond within 24 hrs, offer to make it right offline, do NOT argue publicly.

### Q&A on GBP

Pre-seed 10 Q&As as the owner (allowed per Google policy):

1. Are you licensed and insured? — Yes, Class A Virginia + general liability + workers' comp.
2. Do you offer free estimates? — Yes, free in-home consultations.
3. Do you offer financing? — Yes, through [partner] — pre-approval in minutes.
4. How long does a deck build take? — 2–6 weeks depending on size, materials, and HOA review.
5. Do I need a permit? — Yes for any deck > 30" off grade in NoVA. We handle the permit process.
6. What's the warranty? — 2 years workmanship + manufacturer warranties (Trex 25-yr fade/stain).
7. Do you build screened porches? — Yes, three-season and screened-in porches.
8. Do you do composite or wood? — Both. We help homeowners compare Trex, TimberTech, AZEK, cedar, IPE, and pressure-treated wood by budget, maintenance, sun exposure, and design goals.
9. What counties do you serve? — Loudoun, Fairfax, Prince William, Arlington, Stafford counties.
10. Do you do small repairs? — Yes — board replacement, railing repair, full resurfacing.

---

## Citation Strategy — 60 NoVA-relevant directories

Order matters. Submit in this order; verify NAP exact-match (name, address, phone, website) on each.

### Tier 1 — Critical (submit first)

| Site | Notes |
|---|---|
| Google Business Profile | Already exists — audit per above |
| Bing Places for Business | bingplaces.com — submit identical NAP |
| Apple Business Connect | businessconnect.apple.com — surfaces in Apple Maps + Spotlight |
| Yelp | Already linked in `sameAs` — verify NAP and add 30+ photos |
| Facebook Business Page | Already linked — verify "About" section NAP |
| Instagram Business | Already linked — verify bio + contact button |
| Houzz | Already linked — Pro listing if not yet |
| BBB | Linked in `sameAs`; keep public profile visible from `/social`, `/reviews`, `/about`, and `/team` |
| LinkedIn Company Page | Currently missing from `sameAs` — create or claim |
| YouTube channel | If you have project videos, create a brand channel and add to `sameAs` |

### Tier 2 — High value (next 20)

NextDoor for Business · Angi · Thumbtack · HomeAdvisor · Porch.com · BuildZoom · Houzz Pro · Trustpilot · Trex.com Pro Locator (verify current listing details) · TimberTech Find a Contractor · AZEK Find a Contractor · Deckorators Locator · NADRA member directory (North American Deck and Railing Association) · NARI member directory (National Association of the Remodeling Industry) · Class A VA Contractor License Lookup · Loudoun County Chamber of Commerce · Northern Virginia Building Industry Association (NVBIA) · Better Homes & Gardens "Find a Pro" · This Old House Pros directory · Manta

### Tier 3 — Local NoVA / niche (next 30)

Loudoun Times-Mirror business directory · LoudounNow business directory · Insidenova.com directory · Connection Newspapers business directory · Patch.com (Ashburn, Leesburg, Reston, Fairfax — separate listings each) · Bizapedia · Yellowbook · Yellow Pages · Superpages · Cylex · CitySquares · Brownbook · Hotfrog · MerchantCircle · LocalEdge · ShowMeLocal · MagicYellow · iBegin · n49 · ezlocal · Tupalo · TupaLocal · ChamberofCommerce.com · Insider Pages · BetterBusinessBureau (separate from BBB profile) · Networx · CalFinder · ImproveNet · ContractorNation · Pro Referral by Home Depot · Houzz "Deck Builders" sub-category

### Tier 4 — Industry & advanced

NADRA premium listing · Energy Star Partner Locator (if relevant) · NAHB Remodelers directory · Houzz Influencer profile · Pinterest Business (with Rich Pins) · Deck Magazine business listing · Professional Deck Builder Magazine (PDB) — write for them

---

## Geo-targeting strategy

You serve 4 counties + 30+ cities. Use schema **`areaServed`** explicitly on:
- Homepage `GeneralContractor` block — list 4 counties + the top 10 cities
- Each service page — list `areaServed` as the 4 counties (broad coverage)
- Each city page — `areaServed` is the city + 3 adjacent cities + the parent county

### Service area polygon (for bonus signal)

GBP allows you to draw a service-area polygon. Draw one that covers Loudoun + Fairfax + Prince William + Arlington counties. Don't over-extend (claiming all of VA hurts trust).

In schema, encode `areaServed` as a `GeoShape` with bounding box:

```json
{
  "@type": "GeoShape",
  "box": "38.6 -77.7 39.3 -77.0"
}
```

(Approximate NoVA bounding box; refine to your actual coverage.)

---

## City-page local signals checklist

Each `/deck-builder-{city}-va` page must include:

- [ ] **City name in H1** ✓ (done)
- [ ] **Embedded Google Map** centered on that city, not your HQ
- [ ] **Drive time + distance from your HQ** ("23 min from our Centreville HQ")
- [ ] **Named local landmarks/subdivisions** (3–5 specific subdivisions in that city)
- [ ] **Named HOAs in that city** linking to relevant `/{hoa}-hoa-deck-rules` page (if exists)
- [ ] **City permit office link + address** (link to that city's building department)
- [ ] **City climate notes** (e.g., "Loudoun's freeze-thaw cycles require…") — differentiates from generic
- [ ] **At least 1 verified project from that city** (`[INSERT VERIFIED PROJECT — DO NOT PUBLISH UNTIL FILLED]` with city, month/year, scope, material, photo paths, cost/range if publishable, and permit/HOA status)
- [ ] **3 city-specific FAQs** (e.g., "Do I need a permit for a deck in Ashburn? Yes — Loudoun County requires…")
- [ ] **LocalBusiness schema with serviceArea = that city** + adjacent cities
- [ ] **2 internal links** — to county hub + to county HOA page + to county permit page
- [ ] **Tel: link with city UTM** (`?utm_source=city_page&utm_campaign=ashburn_call`)

---

## Local schema — exact JSON-LD per city page

```jsonc
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://ldndecks.com/#organization",
      "name": "Loudoun Decks",
      "url": "https://ldndecks.com",
      "telephone": "+15716557207",
      "email": "office@ldndecks.com",
      "image": "https://ldndecks.com/images/logo.webp",
      "logo": "https://ldndecks.com/images/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13704 Winding Oak Cir",
        "addressLocality": "Centreville",
        "addressRegion": "VA",
        "postalCode": "20121",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.8462,
        "longitude": -77.4283
      },
      "openingHoursSpecification": [...],
      "priceRange": "$$$",
      "sameAs": [
        "https://x.com/ldndecks",
        "https://www.instagram.com/loudoundecks/",
        "https://www.facebook.com/profile.php?id=61573750423712",
        "https://www.google.com/maps/place/Loudoun+Decks/",
        "https://www.houzz.com/pro/webuser-782541997/loudoun-decks",
        "https://www.yelp.com/biz/loudoun-decks-centreville",
        "https://www.tiktok.com/@loudoun.decks",
        "https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241",
        "https://www.trustpilot.com/review/ldndecks.com",
        "https://www.buildzoom.com/contractor/loudoun-decks",
        "https://business.loudounchamber.org/list/member/loudoun-decks-30047",
        "https://www.mapquest.com/us/virginia/loudoun-decks-532352487"
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
        { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
        { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
        { "@type": "AdministrativeArea", "name": "Arlington County, VA" }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Manufacturer profile verification",
          "credentialCategory": "certification",
          "recognizedBy": { "@type": "Organization", "name": "Trex Company, Inc." }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Class A Virginia Contractor License",
          "credentialCategory": "license",
          "recognizedBy": { "@type": "Organization", "name": "Virginia Department of Professional and Occupational Regulation" }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://ldndecks.com/deck-builder-ashburn-va#webpage",
      "url": "https://ldndecks.com/deck-builder-ashburn-va",
      "name": "Deck Builder in Ashburn, VA | Class A Virginia | Loudoun Decks",
      "isPartOf": { "@id": "https://ldndecks.com/#website" },
      "about": { "@id": "https://ldndecks.com/#organization" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://ldndecks.com/images/projects/ashburn-trex-deck.webp"
      },
      "mainEntity": { "@id": "https://ldndecks.com/#organization" }
    },
    {
      "@type": "Service",
      "name": "Custom Deck Building in Ashburn, VA",
      "provider": { "@id": "https://ldndecks.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Ashburn", "containedInPlace": { "@type": "AdministrativeArea", "name": "Loudoun County, VA" } },
        { "@type": "City", "name": "Brambleton" },
        { "@type": "City", "name": "Broadlands" },
        { "@type": "City", "name": "Lansdowne" }
      ],
      "serviceType": "Custom Deck Construction",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "8000",
        "highPrice": "75000",
        "offerCount": "5"
      }
    }
  ]
}
```

(Note: `WebSite` block lives in root layout — see [08-TECHNICAL-FIXES.md §F3](08-TECHNICAL-FIXES.md).)

---

## Review strategy (deeper than GBP)

### Where to collect reviews (priority)

1. Google (target: 100+ reviews by end of year — currently 41)
2. Facebook
3. Houzz
4. Yelp
5. Angi
6. BBB
7. NextDoor (powerful in NoVA — every neighborhood has a NextDoor; word-of-mouth amplifier)

### Review evidence policy

Keep review growth focused on verified public profiles and owner-approved excerpts. Do not emit self-serving `Review` or `AggregateRating` JSON-LD in `LocalBusiness` / `GeneralContractor` schema unless current Google policy, source evidence, and ownership approval make it eligible. Preferred execution:

- Link clearly to Google, Yelp, BBB, Houzz, and other public profiles.
- Surface real, attributed review evidence only when copied from a verified public profile or owner-supplied proof packet.
- Keep `scripts/validate-seo-schema.mjs` green with `reviewSchemaFiles: 0`.

**Source those snippets from your real Google reviews.** Don't fabricate. Pick 5–8 that mention specific cities/materials.

---

## Local landing-page TEMPLATES

See [05-ON-PAGE-TEMPLATES.md](05-ON-PAGE-TEMPLATES.md) for City Page, County Page, HOA Page, and Permit Page templates with full title/H1/H2/copy/schema patterns.

---

## Geo-relevance signals to embed across the site

1. **NoVA-specific phrases** in body copy on every commercial page: "Northern Virginia," "DMV," "VA," named counties, named cities. (You're doing this well — ~16 mentions of "Ashburn," 22 of "Fairfax," etc., on homepage.)
2. **Local entities mentioned in copy** for AI Overview/entity-graph reinforcement: Dulles Airport, Loudoun County Public Schools, INOVA hospitals, Wegmans, Topgolf, Ashburn Ice House, Loudoun Reservoir, Sugarloaf Mountain, Bull Run Mountain.
3. **Climate-specific copy** ("VA freeze-thaw cycles," "humid summers," "fall pollen runoff") — proves local expertise.
4. **Landmark + driving-time references** in city pages ("12 min from One Loudoun," "5 min from Brambleton Town Center").
5. **Schema `containedInPlace`** chaining: City → County → State for every city page.

---

## What this earns you

- **Local-pack rank**: top 3 in 8+ NoVA cities (you currently dominate Ashburn, composite-deck NoVA, best-deck-NoVA — extend to Leesburg, Reston, Vienna, Manassas)
- **GBP impressions**: should grow 30–60% in 90 days from Q&A pre-seeding + post cadence + photo upload
- **Citation NAP exact-match** across 60 sites = local-search trust signal that Battlefield doesn't match
- **HOA + permit pages** = unique local-SEO moat. Zero competitors have this.

Move to [Phase 5 — On-Page Templates](05-ON-PAGE-TEMPLATES.md).
