# psolutionservices.com — Prioritized Action Plan

**Date:** 2026-05-11
**Health score:** 39 / 100 (F)
**Headline blockers:** No schema, no canonicals, 307 redirect, thin service pages, no reviews, no license number

---

## 🚨 Today (≤ 2 hours total)

### 1. Fix the Fire & Smoke title tag (5 min) — CRITICAL
The fire & smoke service page currently has the title tag "Water Damage Restoration". This is a direct relevance-killer. Change to: `Fire & Smoke Damage Restoration — DMV | Prime Solution Restoration`.

### 2. Fix "Washington Dc, VA" typo in title tag (5 min)
Replace with `Washington, DC` (correct city, correct state code).

### 3. Add `rel="canonical"` to homepage + 6 core pages (30 min)
Self-referential canonicals on each:
```html
<link rel="canonical" href="https://psolutionservices.com/{path}" />
```

### 4. Change www → apex redirect from 307 to 301 (15 min)
In the hosting platform (likely Cloudflare, Vercel, or .htaccess): set the www redirect to **301 Permanent**, not 307 Temporary.

### 5. Inject the LocalBusiness JSON-LD into the global layout (45 min)
Use the generated block from the schema audit (typed as `EmergencyService`, with `name`, `image`, `@id`, `url`, `telephone`, `address`, `geo`, `hours` (24/7), `areaServed` listing all DMV counties, `priceRange`, `sameAs` array → GBP profile, BBB profile, Facebook).

### 6. Inject FAQPage JSON-LD on /faq (15 min)
The existing 5 Q&As are already well-structured per the GEO pass. Wrap them in `FAQPage` schema.

**End-of-day result:** ~10 of the 100 score points recovered for ~2 hours of work.

---

## 7-Day Plan

### Day 1: Schema saturation
- LocalBusiness on layout ✓ (today).
- FAQPage on /faq ✓ (today).
- BreadcrumbList on every non-homepage URL.
- Service schema on each of the 5 service pages (use the generated Water Damage template).
- WebSite + SearchAction on the homepage.

### Day 2: Trust signals — license + IICRC
- Publish the Virginia DPOR contractor license number sitewide (footer + about page + contact page).
- Link the IICRC certification to the IICRC directory listing.
- Add a small "Verified Credentials" block on the homepage with logos: IICRC, BBB (if A+), insurer, Virginia DPOR.
- Add EPA Lead-Safe Renovator certification # if held (for biohazard work especially).

### Day 3: Reviews infrastructure
- Embed the Google Business Profile review widget on the contact page (or build a static testimonial wall sourced from existing reviews).
- Add 5-10 named testimonials with first name + city + photo, with the AggregateRating schema reflecting actual GBP star count and review volume.
- Add a "Leave a Review" CTA after every job completion (email template), aiming for steady review velocity.

### Day 4: De-duplicate the areas-we-serve hub
- Rewrite the areas-we-serve hub page with a unique title + meta description (different from homepage).
- Or noindex the hub if the city pages are doing the indexing work and the hub is purely navigational.

### Day 5: Fix the LCP
- Add `priority` prop to the Next.js `<Image>` component on the hero image of homepage + each service page.
- Verify `fetchpriority="high"` lands in the rendered HTML.

### Day 6: Fire & Smoke page recovery
- Beyond the title-tag fix, rebuild the body content to 1,000+ words: process steps, scope-of-work scenarios, insurance interaction explainer, FAQ.

### Day 7: GBP signal exposure
- Embed Google Maps iframe on contact page (use the GBP Place ID, not a generic Maps embed).
- Link to the GBP profile from the footer.
- Add a "See us on Google" microsection with star rating + review count pulled from the GBP API or hardcoded with the AggregateRating schema.

---

## 30-Day Plan

### Week 2: Service page expansion
For each of the 5 service pages (Water Damage, Fire & Smoke, Mold Remediation, Biohazard, Drywall Repair):
- Expand to **800-1,200 words minimum**.
- Add a 5-step process section with H2 headers.
- Add an FAQ block (5-8 Q&As) per page, with FAQPage schema.
- Add a real case-study or example callout (genuine job, anonymized address).
- Add cost-range expectations + insurance-claim guidance.
- Differentiate the templates — eliminate the copy-paste boilerplate that currently makes all 5 read identically.

### Week 3: Consolidate the 65 templated location pages
- Audit search demand for each city in the location list.
- Keep the **8-10 highest-demand cities** (likely: Fairfax, Arlington, Alexandria, Loudoun County, Prince William, Montgomery County MD, Bethesda, Silver Spring, Washington DC, Reston).
- Rewrite each kept page with genuinely unique content: local risk factors (flooding zones, common building age, HOA permit patterns), named neighborhoods, a recent local job example.
- 301 the lower-demand pages to the kept-city pages.
- Goal: replace 65 thin pages with 10 strong pages that can rank.

### Week 4: AI-search readiness
- Create `/llms.txt` listing canonical brand description + service catalog + license credentials.
- Rewrite every service page opening to a **134-167 word citable passage**: definitive opening sentence, structured facts, named credentials.
- Add a 60-word "Quick Answer" box at the top of every service page and every FAQ.
- Launch a YouTube channel: 4-6 short videos (water-damage walkthrough, mold inspection demo, biohazard SOP, customer testimonial). Single strongest LLM-citation correlator.
- Add `Person` schema for the principal with `sameAs` linking to LinkedIn + IICRC profile.

---

## Technical SEO Fixes (rolled up)
1. Title tag bug on fire & smoke page (Today, 5 min).
2. NAP title typo "Washington Dc, VA" (Today, 5 min).
3. `rel="canonical"` on homepage + 6 core pages (Today, 30 min).
4. 307 → 301 www redirect (Today, 15 min).
5. Hero image `priority` prop (Day 5, 30 min).
6. De-dupe areas-we-serve title + meta (Day 4, 30 min).

## Content Fixes
1. Expand 5 service pages from <175 to 800-1,200 words each (Week 2).
2. Differentiate each service page template (Week 2).
3. Consolidate 65 location pages → 10 unique pages (Week 3).
4. Publish license number + IICRC verification + EPA cert (Day 2).
5. Add reviews + testimonials (Day 3).

## Schema Fixes
1. LocalBusiness/EmergencyService JSON-LD on layout (Today).
2. FAQPage on /faq (Today).
3. Service schema on each of 5 service pages (Day 1).
4. BreadcrumbList on every non-homepage URL (Day 1).
5. AggregateRating + Review schema (Day 3).
6. WebSite + SearchAction on homepage (Day 1).
7. Person schema for principal (Week 4).

## SXO / Conversion Fixes
1. Fix fire & smoke title tag bug (Today).
2. Build city-service intersection pages for top 3 DMV cities × top 3 services = 9 pages (Week 2-3).
3. Add 5-9 named, location-attributed testimonials on every service page (Day 3 + Week 2).
4. Add cost-range + insurance-interaction guidance on every service page (Week 2).
5. Add visible 24/7 emergency phone CTA above the fold sitewide (verify on every page).
