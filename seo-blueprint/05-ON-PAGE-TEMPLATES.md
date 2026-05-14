# Phase 5 — On-Page SEO Templates

Production templates for each page type. Title/meta/H1/H2/schema/CTA/internal-link patterns codified. Use these in `buildMetadata()` (in `src/lib/seo.js`) and across components.

---

## Title tag rules (apply globally)

- **Length**: 50–60 characters target (Google cuts at ~580 px; 60 chars is a safe proxy)
- **Brand suffix**: `| Loudoun Decks` only when there's room (drop on tight 60-char pages)
- **Geo modifier**: include the city/county/region whenever the page is geo-targeted
- **No `&amp;`**: use `and` or `+`. (Issue #10 in [01-AUDIT-FINDINGS.md](01-AUDIT-FINDINGS.md).)
- **`★` test**: keep on top-level pages (Bing renders, Google strips). A/B test on city pages by city.
- **Put the keyword first**, brand last
- **Power modifiers** (use sparingly): "TrexPro Platinum", "5.0★", "24-hr Quote", "Free Estimate", "Class A"

## Meta description rules

- **Length**: 140–160 characters
- **Lead with value**, not the brand
- **Include the city/region** + 1 differentiator + a CTA
- **Always include `(571) 655-7207`** or "Free Estimate" as a CTA
- **No emojis** (Google strips inconsistently; clutters AI snippets)

## H1 rules

- **One H1 per page** ✓ (already enforced)
- **Match user intent verbatim** for the head keyword (e.g., "Deck Builder in Ashburn, VA" — not "Welcome to Loudoun Decks Ashburn Page")
- **No brand prefix** in H1; brand reinforces via logo
- **H1 ≠ Title** — use the title for SERP, the H1 for on-page

## H2 rules

- 5–8 H2s per long-form page
- Each H2 should answer a sub-intent (cost, timeline, materials, process, FAQ, CTA)
- Phrase H2s as questions where natural — boosts "People Also Ask" eligibility

---

## Template A — Service Page

**Example URL:** `/composite-decks`

```yaml
title: "Composite Deck Builder Northern Virginia | TrexPro Platinum | Free Quote"
meta: "Premium composite decks built across NoVA — Trex, TimberTech, AZEK. TrexPro Platinum installer, 5.0★ on Google, 2-yr warranty. Free estimate: (571) 655-7207."
canonical: https://ldndecks.com/composite-decks
og:image: /images/og/composite-decks-og.webp  # 1200×630, branded

H1: Composite Deck Builders in Northern Virginia
H2 outline:
  - Why Choose a TrexPro Platinum Composite Deck Installer
  - Composite Decking Materials We Install (Trex, TimberTech, AZEK, Deckorators)
  - How Much Does a Composite Deck Cost in NoVA?
  - Our 6-Step Composite Deck Build Process
  - Composite Deck Project Showcase (4 NoVA cities)
  - Composite Deck Warranty and Maintenance
  - Composite Deck FAQs
  - Get Your Free Composite Deck Estimate

Schema (single graph, no duplicates):
  - GeneralContractor (root layout, with @id #organization)
  - WebSite (root layout, with @id #website)
  - WebPage (this page, with @id, isPartOf #website)
  - Service (this page — see snippet below)
  - BreadcrumbList (Home > Services > Composite Decks)
  - FAQPage (single instance, 6–8 Qs about composite decks)
  - ImageObject for primary image

Internal links (in body):
  - /trex-vs-timbertech-vs-azek (comparison)
  - /composite-deck-vs-wood-deck-virginia (comparison)
  - /how-long-does-a-composite-deck-last (long-tail education)
  - /how-much-does-a-deck-cost-northern-virginia (cost)
  - /deck-financing-northern-virginia (financing)
  - 4 county hubs (Loudoun, Fairfax, PWC, Arlington)
  - 2 city pages from showcase (where you built composite recently)

CTA placement:
  - Sticky header CTA: "Get Free Quote" → /get-estimate
  - Hero primary CTA: "Get Your Composite Deck Estimate" + tel: link
  - Mid-page secondary CTA: After cost section ("See What Your Deck Will Cost")
  - End-of-page primary CTA: "Schedule Your Free In-Home Consultation"
  - Sticky mobile call bar: tel:+15716557207
```

**Service schema for this page:**

```jsonc
{
  "@type": "Service",
  "name": "Composite Deck Construction in Northern Virginia",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "serviceType": "Composite Deck Installation",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
    { "@type": "AdministrativeArea", "name": "Arlington County, VA" }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "12000",
    "highPrice": "85000",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "12000-85000"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "41"
  },
  "termsOfService": "https://ldndecks.com/about/warranty"
}
```

---

## Template B — City Page

**Example URL:** `/deck-builder-ashburn-va`

```yaml
title: "Deck Builder in Ashburn, VA | TrexPro Platinum | Free Quote"
meta: "Custom decks, screened porches, and pergolas in Ashburn, VA. TrexPro Platinum installer, Class A, 5.0★ on 41+ reviews. Free in-home estimate: (571) 655-7207."
canonical: https://ldndecks.com/deck-builder-ashburn-va
og:image: /images/og/city-ashburn-og.webp

H1: Deck Builder in Ashburn, VA — Custom Decks, Porches and Pergolas
H2 outline:
  - Why Ashburn Homeowners Choose Loudoun Decks
  - Deck Services We Offer in Ashburn
  - Ashburn Deck Costs and Financing (link to /deck-cost-loudoun-county)
  - Loudoun County Permits — We Handle the Process
  - HOA Approval in Ashburn — Brambleton, One Loudoun, Belmont, Ashburn Village
  - Recent Ashburn Deck Project (named, with photo gallery)
  - Other Loudoun County Cities We Serve (Brambleton, Leesburg, Sterling, ...)
  - Ashburn Deck FAQs (6 city-specific Qs, NOT generic)
  - Get Your Free Ashburn Deck Estimate

Schema:
  - Same graph as Template A but Service.areaServed = [Ashburn + 3 adjacent cities]
  - WebPage primaryImageOfPage = an Ashburn project photo
  - Add LocalBusiness areaServed override for this city

Internal links:
  - 4 sibling Loudoun cities (Brambleton, Leesburg, South Riding, Sterling, Purcellville)
  - /deck-builders-loudoun (parent county hub)
  - /deck-permit-loudoun-county-virginia
  - /loudoun-county-hoa-deck-rules
  - /brambleton-hoa-deck-rules (NEW — neighborhood-specific)
  - /deck-cost-loudoun-county (NEW)
  - 2 service pages (composite-decks, screened porch)
  - 1 named showcase project from Ashburn

Differentiation requirements (vs Leesburg template):
  - Mention 3 named Ashburn subdivisions (Brambleton, Belmont CC, Ashburn Village)
  - Reference Loudoun County permit office address (1 Harrison St SE, Leesburg)
  - Cite a local landmark (One Loudoun, Loudoun Station)
  - Cite a recent named project ("Recently completed: 600 sq ft Trex Transcend deck for the Patel family in Brambleton")
  - 6 city-specific FAQs (e.g., "How long does Loudoun County take to approve a deck permit?")
```

---

## Template C — County Hub Page

**Example URL:** `/deck-builders-loudoun` (already exists), `/near-you/fairfax-county`

```yaml
title: "Deck Builders in Loudoun County, VA | TrexPro Platinum | Free Quote"
meta: "Premium decks, screened porches, and pergolas across Loudoun County — Ashburn, Leesburg, Brambleton, Sterling. TrexPro Platinum, 5.0★. Estimate: (571) 655-7207."
canonical: https://ldndecks.com/deck-builders-loudoun

H1: Deck Builders in Loudoun County, Virginia
H2 outline:
  - Loudoun County's TrexPro Platinum Deck Builder
  - Cities We Serve in Loudoun County [→ city grid with links]
  - Loudoun County Deck Costs by City (link to /deck-cost-loudoun-county)
  - Loudoun County Permit Process — Timeline and Fees
  - Loudoun County HOA Deck Rules — Major Communities
  - Featured Loudoun Deck Projects (3–4 named projects)
  - Loudoun County Climate and Deck Materials (freeze-thaw, humidity)
  - Loudoun County Deck FAQs

Schema:
  - WebPage @id, isPartOf #website
  - GeneralContractor reference (#organization)
  - BreadcrumbList: Home > Loudoun County
  - Service block: areaServed = Loudoun County
  - FAQPage: county-specific Qs
  - ItemList of cities (each with @url to its /deck-builder-{city}-va page)

Internal links:
  - All 6+ Loudoun city pages (each as a card in a city grid)
  - /deck-permit-loudoun-county-virginia
  - /loudoun-county-hoa-deck-rules
  - /deck-cost-loudoun-county
  - All 6 HOA pages (NEW)
  - 2–3 service pages
  - 2 named showcase projects from Loudoun
```

---

## Template D — Comparison Page (`X vs Y`)

**Example URL:** `/trex-vs-timbertech-vs-azek`

```yaml
title: "Trex vs TimberTech vs AZEK 2026 — NoVA Comparison + Costs"
meta: "Side-by-side comparison: Trex, TimberTech, AZEK composite decking — pricing, warranty, look, durability. Built by NoVA's TrexPro Platinum installer. Free quote."
canonical: https://ldndecks.com/trex-vs-timbertech-vs-azek

H1: Trex vs TimberTech vs AZEK — 2026 Comparison Guide for NoVA Homeowners
H2 outline:
  - Quick Verdict: Which Composite Decking Is Right for Your Home?
  - Trex Composite Decking — Pros, Cons, NoVA Pricing
  - TimberTech Composite Decking — Pros, Cons, NoVA Pricing
  - AZEK Capped Polymer Decking — Pros, Cons, NoVA Pricing
  - Trex vs TimberTech vs AZEK — Side-by-Side Spec Table
  - Warranty Comparison (Trex 25-yr, TimberTech 30-yr, AZEK 50-yr Lifetime)
  - Cost Comparison: Materials + Installation (per sq ft) for NoVA
  - Look and Feel — Color Options and Realism
  - Heat Retention and Comfort (NoVA summer test)
  - Maintenance Requirements
  - Which Brand We Recommend Most (and Why)
  - Comparison FAQs

Schema:
  - WebPage @id
  - Article (with author = Person from NamedAuthor)
  - FAQPage (5–6 Qs)
  - ItemList: 3 brands as "ListItem" with name, brand, image
  - BreadcrumbList: Home > Decking Materials > Trex vs TimberTech vs AZEK

CTA strategy:
  - Mid-page after cost table: "Get a custom quote with the brand you choose"
  - End: "Free in-home consultation — we'll show you samples of all 3 brands"
```

---

## Template E — Cost Guide Page

**Example URL:** `/how-much-does-a-deck-cost-northern-virginia`

```yaml
title: "How Much Does a Deck Cost in Northern Virginia? 2026 Pricing Guide"
meta: "Real 2026 NoVA deck costs by size, material, and complexity. $25–$60/sq ft for composite, $15–$35 for wood. Free estimate from a TrexPro Platinum installer."
canonical: https://ldndecks.com/how-much-does-a-deck-cost-northern-virginia

H1: How Much Does a Deck Cost in Northern Virginia? (2026 Pricing Guide)
H2 outline:
  - 2026 NoVA Deck Cost Summary (TL;DR table)
  - Composite Deck Cost in NoVA ($/sq ft by brand)
  - Wood Deck Cost in NoVA (PT, cedar, IPE)
  - Cost by Deck Size (200, 400, 600, 800, 1,200 sq ft examples)
  - Cost by County (Loudoun, Fairfax, PWC, Arlington — link to county pages)
  - What Drives the Cost? (height, railings, stairs, lighting, footings, permit)
  - Hidden Costs Most Builders Don't Mention (HOA fees, permit, inspection, electric)
  - Financing a Deck in NoVA — Monthly Payment Examples
  - Cost Calculator (embed)
  - Get a Real Quote vs Online Estimator

Schema:
  - Article (with author Person)
  - FAQPage with 6–8 cost-specific Qs
  - HowTo schema NOT here (this is informational, not a procedure)
  - SpeakableSpecification on the H2 "2026 NoVA Deck Cost Summary" — AI Overview hook

Internal links:
  - /deck-cost-calculator (interactive)
  - /deck-roi-calculator-northern-virginia
  - /deck-payment-estimator (NEW)
  - /deck-financing-northern-virginia
  - 4 county cost pages (NEW)
  - /composite-vs-wood-deck-cost-comparison-virginia (NEW)
```

---

## Template F — Permit Page

**Example URL:** `/deck-permit-loudoun-county-virginia`

```yaml
title: "Loudoun County Deck Permit Guide 2026 — Cost, Timeline, Process"
meta: "Loudoun County deck permit cost, timeline, and process for 2026. We handle the permit for every deck we build. Free in-home consultation: (571) 655-7207."
canonical: https://ldndecks.com/deck-permit-loudoun-county-virginia

H1: Loudoun County Deck Permit — Cost, Timeline, and Process (2026)
H2 outline:
  - Do I Need a Permit for a Deck in Loudoun County? (yes if > 30" off grade)
  - Loudoun County Deck Permit Cost (2026 fee schedule)
  - Permit Timeline — How Long Does Loudoun Take to Approve?
  - Required Documents (drawings, site plan, ledger detail, footing detail)
  - Inspection Requirements (footing, framing, final)
  - Common Reasons Loudoun Rejects Deck Permits (top 5)
  - HOA Approval (must precede county submission)
  - We Handle the Permit — What That Means
  - Loudoun County Building Permits Office Contact
  - Permit FAQs

Schema:
  - HowTo schema (Steps: 1. Verify HOA, 2. Engage builder, 3. Submit drawings, 4. Inspections...)
  - FAQPage
  - Article
  - GovernmentService entity for "Loudoun County Building Permits"

Components:
  - <NoVAPermitTimeline /> (already built — surface for Loudoun specifically)
  - <NamedAuthor /> for E-E-A-T
```

---

## Template G — HOA Page

**Example URL:** `/brambleton-hoa-deck-rules` (NEW)

```yaml
title: "Brambleton HOA Deck Rules — Approval Process and Standards"
meta: "Brambleton HOA deck approval requirements, application process, and design standards. We've built 20+ decks approved by the Brambleton HOA. Free quote: (571) 655-7207."
canonical: https://ldndecks.com/brambleton-hoa-deck-rules

H1: Brambleton HOA Deck Rules and Approval Process
H2 outline:
  - Brambleton HOA Deck Approval — Quick Summary
  - Required Application Documents
  - Brambleton-Approved Deck Materials and Colors
  - Brambleton-Approved Railing Styles
  - Setback and Lot Coverage Restrictions
  - Approval Timeline (typical 2–4 weeks)
  - Common Reasons Brambleton Rejects Deck Plans
  - We've Built [N] Brambleton-Approved Decks (showcase 2 examples)
  - Brambleton vs Other Loudoun HOAs (link to /loudoun-county-hoa-deck-rules)
  - Brambleton HOA Deck FAQs

Schema:
  - Article + FAQPage
  - Place entity for "Brambleton" (linked to AdministrativeArea Loudoun County)

Internal links:
  - /loudoun-county-hoa-deck-rules (parent)
  - /deck-builder-ashburn-va (city page; Brambleton is in Ashburn)
  - /deck-permit-loudoun-county-virginia
  - 1 case study from Brambleton
```

---

## Template H — Blog Post (Editorial)

```yaml
title: "{Headline that promises specific value} | Loudoun Decks Blog"
meta: "{1-line summary that promises a specific takeaway. CTA at end.}"
canonical: https://ldndecks.com/blog/{slug}

H1: {Editorial headline; 60–80 chars}
H2 outline:
  - The TL;DR (1 paragraph + bulleted answer)
  - 4–6 H2 sub-sections
  - Conclusion + CTA

Schema:
  - BlogPosting (already in /blog/[slug]/page.js — keep)
  - BreadcrumbList: Home > Blog > {Title}
  - Author = Person from /lib/business.js
  - SpeakableSpecification on the TL;DR for AI Overview

Body requirements:
  - 1,200+ words minimum for new posts; 2,500+ for pillar posts
  - At least 1 internal link per 250 words
  - At least 1 image with descriptive alt every 400 words
  - End-of-post CTA: link to /get-estimate or relevant cost calculator
```

---

## Template I — FAQ Page (`/faqs`)

The audit found the `/faqs` master page lacks page-level FAQ schema (component-level only). Fix:

```yaml
title: "Deck, Porch and Pergola FAQs — Loudoun Decks NoVA"
meta: "Common questions about decks, screened porches, pergolas, and outdoor living in NoVA. Cost, permits, materials, warranties — all answered."
canonical: https://ldndecks.com/faqs

H1: Frequently Asked Questions

Schema (page-level — single FAQPage, not duplicated per category):
  - One FAQPage block listing 30–50 Qs across all categories
  - BreadcrumbList: Home > FAQs

Sections (with H2 per category):
  - Cost FAQs
  - Materials FAQs
  - Permits FAQs
  - HOA FAQs
  - Warranty FAQs
  - Process FAQs
  - Maintenance FAQs

Note: each category in a <FAQCategorized /> renders the Q&A but only the page-level
JSON-LD emits schema. Component-level schema currently double-emits — see [01-AUDIT-FINDINGS.md §1].
```

---

## Image SEO standards (apply globally)

| Element | Standard |
|---|---|
| Format | AVIF first, WebP fallback (already configured in `next.config.mjs:363-368`) ✓ |
| Hero LCP image | Width: 1920×1080 max; preload via `<Image priority>`; **no duplicate preload** (Issue #8) |
| Project photos | 1600×1200 source; let next/image scale |
| Alt text formula | "{Material/Style} deck in {City}, VA — Loudoun Decks" — every image, no exceptions |
| File naming | `{material}-{style}-{city}-{year}.webp` (e.g., `trex-transcend-deck-ashburn-2025.webp`) |
| OG images | 1200×630, branded, generated via `app/{path}/opengraph-image.tsx` (Next.js convention) |
| Image schema | `ImageObject` inside the page graph with `contentUrl`, `creator`, `creditText`, `license`, `width`, `height` |

Per-page OG image priority:
- All 33 city pages — unique OG with city name overlay
- All 5 service hubs — unique OG with service name + Trex Pro Platinum badge
- All 13 comparison pages — unique OG showing the comparison
- Blog posts — generated via `app/blog/[slug]/opengraph-image.tsx`

---

## Internal-link anchor text conventions

| From → To | Anchor text style |
|---|---|
| Body link to a service page | "{service} in Northern Virginia" or "{service} in {city}" |
| Body link to a city page | "{city}, VA deck builder" or "deck builder in {city}" |
| Body link to comparison | "{X} vs {Y}" |
| Body link to cost guide | "{material} deck cost" or "deck cost in {county}" |
| Body link to permit page | "{county} deck permit" |
| Body link to HOA page | "{HOA} deck approval rules" |
| Body link from blog → service | descriptive ("our composite deck installation service") |

**Avoid**: "click here," "learn more," exact-match keyword spam (every link can't be "best deck builder northern virginia").

---

## Semantic / NLP terms to weave into copy

For the "deck builder Northern Virginia" cluster, search engines expect to see these co-occurring terms (entities + attributes):

- **Materials**: composite, Trex, TimberTech, AZEK, Deckorators, IPE, cedar, pressure-treated, capped polymer, mineral-based composite
- **Components**: joist, ledger board, footing, post, beam, rim joist, stringer, rise/run, baluster, top rail, fascia
- **Standards**: IRC R507, ICC, BOCA, Class A contractor license, fall protection, deck collapse, structural calc
- **Brands & certs**: TrexPro Platinum, NADRA, NARI, NAHB, Class A VA contractor, BBB
- **NoVA-specific**: Loudoun, Fairfax, Prince William, Arlington, freeze-thaw, humidity, pollen, HOA, ARC (Architectural Review Committee), DRRC (Design Review Resource Committee), proffer
- **Process**: design consultation, 3D rendering, permit submission, footing inspection, framing inspection, final inspection
- **Adjacent products**: pergola, screened porch, three-season room, sunroom, patio, paver, flagstone, fire pit, outdoor kitchen, deck lighting, cable railing

These should appear naturally in copy. **Do not stuff.** Use them where they fit.

---

## Conversion elements per page (CTA grid)

| Page type | Above fold | Mid-page | End | Sticky |
|---|---|---|---|---|
| Homepage | Headline + "Get Free Estimate" + tel link | After portfolio | "Schedule Consultation" | Sticky mobile call bar |
| Service page | Headline + "Get Quote for {Service}" | After cost section | "Schedule Consultation" | Sticky |
| City page | "Get Free {City} Estimate" + tel | After permit section | "Schedule {City} Consultation" | Sticky |
| Comparison | Brand-comparison CTA | After spec table | "Get Quote for Either Brand" | Sticky |
| Cost guide | "Use Our Cost Calculator" | After pricing | "Get a Real Quote" | Sticky |
| Permit page | "We Handle Permits for You" | After process | "Get Quote — We Handle Permit" | Sticky |
| HOA page | "We're Approved by {HOA}" | After requirements | "Schedule {HOA} Consultation" | Sticky |
| Blog post | None above headline | Content | "Get a Free Quote" | Sticky |

See [10-CRO-PLAYBOOK.md](10-CRO-PLAYBOOK.md) for sticky bar specs, form fields, trust modules, etc.

Move to [Phase 6 — Content Calendar](06-CONTENT-CALENDAR.md).
