# ldndecks.com — Content Quality Audit

**Date:** 2026-05-11 · **Method:** Direct codebase inspection · **Score:** 70 / 100

---

## Methodology
Sampled and inspected: homepage, [deck-builder-ashburn-va](src/app/deck-builder-ashburn-va/page.js), [deck-builder-leesburg-va](src/app/deck-builder-leesburg-va/page.js), the dynamic [near-you/[county]/[city]](src/app/near-you/[county]/[city]/page.js) template, [NoVAPermitTimeline](src/components/NoVAPermitTimeline.jsx), [NamedAuthor](src/components/NamedAuthor.jsx), [HomeQuickLinks](src/components/HomeQuickLinks.jsx), [Footer](src/components/Footer.jsx), [HomeSEOContent](src/components/HomeSEOContent.jsx). Cross-referenced against [src/lib/blogData.js](src/lib/blogData.js) and route inventory (140+ pages).

---

## 1. E-E-A-T signals

### Experience
- ✅ Specific project recall on city pages: "Recent Leesburg projects include a multi-level TimberTech deck in Lansdowne (2024), a screened porch addition near downtown (2025), and a complete backyard transformation with a Trex Transcend deck and under-deck patio in River Creek." — first-person, dated, named-location specificity.
- ✅ Ashburn page: "Recent Ashburn projects include a 480 sqft Trex Transcend deck in Brambleton (2025), a screened porch addition in One Loudoun (2025), and a deck replacement with cable railing in Moorefield Station (2024)."
- ✅ Showcase routes exist for individual projects ([src/app/showcase/[slug]/page.js](src/app/showcase/[slug]/page.js)).
- ⚠ Project specifics exist only on 9 canonical city pages with hand-curated `cityLocalContent`; the rest use boilerplate. (See [src/app/near-you/[county]/[city]/page.js:18-73](src/app/near-you/[county]/[city]/page.js#L18-L73).)

### Expertise
- ✅ Trex Platinum Partner + TimberTech Certified messaging is consistent and specific.
- ✅ NoVA-specific permit detail in [NoVAPermitTimeline](src/components/NoVAPermitTimeline.jsx) with per-jurisdiction fees, timelines, portals.
- ✅ HOA-specific knowledge: Brambleton HOA, Broadlands HOA, Reston Association, Lansdowne, River Creek, Cascades, Lowes Island, One Loudoun named with approval-process detail.
- ✅ Material specificity: Trex Transcend, TimberTech Vintage, AZEK, Western Red Cedar — not generic "composite."

### Authoritativeness
- ✅ `NamedAuthor` component with `itemScope itemType="https://schema.org/Person" itemID="https://ldndecks.com/#nick"` ([src/components/NamedAuthor.jsx](src/components/NamedAuthor.jsx)) — surfaces a named operator on commercial pages.
- ✅ BBB Accredited page at [/bbb-accredited-deck-builder-virginia](src/app/bbb-accredited-deck-builder-virginia/page.js).
- ✅ Certifications & licenses page at [/about/certifications-and-licenses](src/app/about/certifications-and-licenses/page.js).
- ✅ Team page at [/team](src/app/team/page.js).
- ⚠ NamedAuthor deployment width not verified — should be added to every commercial page; spot-check shows it on homepage only.

### Trustworthiness
- ✅ Reviews page at [/reviews](src/app/reviews/page.js) + AggregateRating `5.0 / 41 reviews` in business.js.
- ✅ sameAs entity graph: X, Instagram, Facebook, Google Maps, Houzz, Yelp ([src/lib/business.js:43-50](src/lib/business.js#L43-L50)).
- ✅ Phone, email, address, opening hours all present, single source.
- ⚠ Virginia DPOR contractor license number NOT visible in code grep — verify it's published. (Reviewing the `/about/certifications-and-licenses` page would confirm.)
- ⚠ No on-site Google Reviews widget detected; reviews are linked but not embedded.

---

## 2. Readability + content depth

### Homepage
- ✅ Substantial content via `HomeSEOContent`, `Introduction`, `HandCraftedDecks`, `ServicesHome`, `Testimonials`, `FAQ`, `TrustSection`, `VideoSection`, `BlogFeed`, `NoVAPermitTimeline`, `HomeSEOContent`, `RelatedGuides`.
- ✅ Above-fold hero + Promo Modal + Trust Section — strong commercial framing.
- ✅ Below-fold dynamic imports keep TTI fast.

### Canonical city pages (sampled Ashburn, Leesburg)
- ✅ Ashburn: 175-line file, 6 detailed FAQs, 4-section ServiceContentExpansion (each with 2-3 paragraphs), inline image + GoogleMapEmbed, RelatedGuides + ContactHome.
- ✅ Leesburg: 175-line file, 6 detailed FAQs, ServiceContentExpansion with Lansdowne + River Creek detail, GoogleMapEmbed for Leesburg.
- ✅ Both: 800-1,500 words of unique body content (not counting boilerplate/CTA components).
- ⚠ The SXO specialist's earlier claim that Leesburg "lacks a project gallery, embedded Google Map, and HOA names" is **WRONG**: Leesburg page has all three.

### Non-canonical city pages (`/near-you/[county]/[city]`)
- ✅ Hand-curated `cityLocalContent` exists for 9 cities (Ashburn, Leesburg, Reston, Herndon, Fairfax, Vienna, McLean, Sterling, Centreville) with 3-paragraph local context.
- ⚠ The other 31 non-canonical cities fall into a generic "Standard for Custom Decking in {cityName}" boilerplate ([src/app/near-you/[county]/[city]/page.js:181-194](src/app/near-you/[county]/[city]/page.js#L181-L194)) — ~50 words of unique-per-city content.
- ⚠ All non-canonical pages are noindex, so the thin-content risk is contained — but if you ever flip them to indexable, this needs solving first.

### Blog corpus
- ✅ Blog template at [src/app/blog/[slug]/page.js](src/app/blog/[slug]/page.js) (139 lines).
- ✅ 30+ commercial-intent content pages: `composite-deck-cost-northern-virginia`, `trex-vs-timbertech-vs-azek`, `paver-vs-flagstone-patio-northern-virginia`, `stamped-concrete-patio-northern-virginia`, `northern-virginia-deck-cost-report-2026`, etc.
- ⚠ Content depth per page not measured — visible in route inventory but actual word count varies.

---

## 3. AI citation readiness

### Quick Answer / definitive opening sentences
- ✅ `NoVAPermitTimeline` ([src/components/NoVAPermitTimeline.jsx](src/components/NoVAPermitTimeline.jsx)) is a textbook AI-citation surface: structured per-jurisdiction data, specific numbers, primary-source links.
- ✅ `llms.txt` and `llms-full.txt` exist as route handlers ([src/app/llms.txt/route.js](src/app/llms.txt/route.js)).
- ⚠ City page FAQs (Ashburn, Leesburg) are 50-150 words each — closer to but below the optimal 134-167 word band for AI extraction.
- ⚠ No explicit "Quick Answer" boxes at the top of commercial-intent pages.

### Structured passages
- ✅ ServiceContentExpansion uses H2 + paragraph + listItems structure — AI-friendly.
- ✅ Numbered process steps via `ProcessSteps` component.
- ⚠ Information-gain pattern (per-jurisdiction permit fees with dollar ranges, timelines with week ranges, portal names) only on NoVAPermitTimeline. Could be extended to materials cost comparison, HOA review timeline, post-completion warranty timing.

---

## 4. Topical cannibalization

Pages likely competing for the same primary keyword:

| Keyword cluster | Pages competing |
|---|---|
| Deck cost in NoVA | `/composite-deck-cost-northern-virginia`, `/how-much-does-a-deck-cost-northern-virginia`, `/northern-virginia-deck-cost-report-2026`, `/deck-cost-calculator` |
| HOA deck rules | `/hoa-deck-rules-northern-virginia`, `/loudoun-county-hoa-deck-rules` |
| Composite vs wood | `/composite-deck-vs-wood-deck-virginia`, `/composite-decks` (service), `/trex-vs-timbertech-vs-azek` |
| Screened porch | `/screened-porch-builder-northern-virginia`, `/screened-porch-cost-northern-virginia`, `/services/porches/screened-porch` |
| Deck financing | `/deck-financing`, `/deck-financing-northern-virginia` |
| Deck design ideas | `/deck-design-ideas-2026`, `/deck-design-ideas-northern-virginia-2026` |
| Deck builder city | (e.g. Ashburn) homepage + `/deck-builder-ashburn-va` + `/showcase/*-ashburn` |

The sitemap comment at [src/app/sitemap.js:81](src/app/sitemap.js#L81) confirms past de-canonicalization: "REMOVED: non-canonical (canonical is /deck-design-ideas-2026)". This is good hygiene but the duplicates still exist for `/deck-design-ideas-2026` vs `/deck-design-ideas-northern-virginia-2026`.

---

## 5. Image duplication across city pages — **VALIDATED**

| Image path | Used by city pages | Risk |
|---|---|---|
| `/images/img36.jpeg` | 16 pages (e.g., Ashburn image1, Leesburg image1, og:image on both, …) | Critical visual identity collision |
| `/images/img37.jpeg` | 14 pages (Ashburn image2, Leesburg image2, …) | Same |
| `/images/img17.jpeg` | 10 pages (Ashburn inline content, Leesburg inline content, …) | Same |

Ashburn and Leesburg are **byte-identical** in the three above-fold image slots. SXO specialist's claim "Ashburn and Leesburg share identical hero images" is now extended sitewide.

This impacts:
1. **Visual differentiation** → Pinterest / image search treats them as the same property.
2. **Freshness** → no new content signal even when text changes.
3. **AI image recognition** → reverse-image searches don't tie photos to specific service areas.

---

## 6. Thin content detection
- ❌ The 31 non-canonical cities in `near-you/[county]/[city]` without `cityLocalContent` entries fall into a generic 50-word body block — pure boilerplate. Mitigated by noindex.
- ⚠ `/social`, `/scholarship` pages: existence confirmed; depth not measured.
- ⚠ The 28-canonical-city template pattern (ServicesHeader + ServiceMain + ServiceContentExpansion + ProcessSteps + ServicesFAQ + ServiceAreasGrid + RelatedGuides + ContactHome) is the SAME structure across all 28. Body copy varies, but visual + structural fingerprint is identical. Google can detect "templated" patterns; the only defense is per-page unique content density, which Ashburn and Leesburg pass and the other 26 need to be spot-checked.

---

## 7. Author / credentials
- ✅ Single `Person` identity (Nick) referenced via `itemID="https://ldndecks.com/#nick"` in [NamedAuthor.jsx](src/components/NamedAuthor.jsx).
- ⚠ NamedAuthor present on homepage but not visibly deployed across every city + blog page. Wider deployment recommended.
- ⚠ Blog pages: schema audit flagged author as `@type: Organization` instead of `Person`. Should bind to `#nick` @id reference.

---

## 8. Review and testimonial presence
- ✅ Dedicated [/reviews](src/app/reviews/page.js) page.
- ✅ AggregateRating in business.js: 5.0 / 41 reviews.
- ✅ Yelp business profile in sameAs.
- ⚠ No on-site Google Reviews widget detected; only static testimonial component (`Testimonials.jsx`).
- ⚠ Testimonials are static and likely don't update with new review velocity — verify if they're regenerated programmatically.

See **TOP-20-FIXES.md** and **ACTION-PLAN.md**.
