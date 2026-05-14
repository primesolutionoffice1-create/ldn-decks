# psolutionservices.com (Prime Solution Restoration) — Full SEO Audit Report

**Audit date:** 2026-05-11
**Business:** Prime Solution Restoration — 24/7 emergency property restoration
**Service area:** DMV metro (Washington DC / Maryland / Virginia)
**Vertical:** Home services — water damage, fire & smoke, mold remediation, biohazard, drywall repair
**Audit scope:** Technical, Content, Schema, GEO, Local, SXO (all 6 specialists, full pass)

---

## Executive Summary

### SEO Health Score: 39 / 100 (F)

| Category | Score | Confidence | Headline |
|---|---|---|---|
| Technical | 52 | full | No canonicals on 7 core pages; 307 (not 301) www redirect |
| Content | 41 | full | Service pages <175 words each; identical template across 5 pages |
| Schema | 0 | full | **Zero JSON-LD on the entire site** — only OG meta tags |
| GEO / AI search | 42 | full | Crawlers allowed but no citable passages, no schema, no llms.txt |
| Local | 34 | full | Clean NAP but zero reviews, zero local schema, no GBP signals on site |
| SXO / SERP fit | 24 | full | Service pages mismatch SERP intent; copy-paste title bug on fire page |

**Weighted score** (technical 22% + content 23% + on-page/SXO 20% + schema 10% + GEO 10% + local 10% + performance 5% baseline): **39 / 100**

> The site is failing on nearly every quality signal Google and AI search systems use. For a YMYL-adjacent emergency-services business, this is a high-risk position.

---

## Critical Issues (Fix Immediately)

### 🚨 1. **Fire & Smoke service page title tag reads "Water Damage Restoration"**
**Source:** SXO specialist.
**Impact:** Direct copy-paste bug actively suppressing the fire page's topical relevance signal. Crawlers literally cannot tell what the page is about.
**Fix time:** 5 minutes.

### 🚨 2. **No canonical tags on homepage + 6 core pages**
**Source:** Technical specialist.
**Impact:** The www variant (which 307-redirects), the trailing-slash version, and the canonical URL are all crawlable with no signal as to which is authoritative. PageRank fragments.

### 🚨 3. **Zero structured data sitewide**
**Source:** Schema + GEO + Local + Content specialists (all four confirmed).
**Impact:** No LocalBusiness, Service, FAQPage, AggregateRating, BreadcrumbList anywhere. Site is invisible to:
- Google Knowledge Graph
- Rich-result eligibility (FAQ snippets, review stars)
- AI citation systems (ChatGPT, Perplexity, AI Overviews)
- Local Pack rich signals

### 🚨 4. **www redirect is a 307 Temporary (not a 301/308 Permanent)**
**Source:** Technical specialist.
**Impact:** Crawlers are not required to cache temporary redirects. Link equity does not fully consolidate to the canonical domain.

### 🚨 5. **All 5 service pages contain <175 words each**
**Source:** Content specialist.
**Impact:** Against an 800-word minimum for category pages. All 5 share the same template with only the service name swapped. Textbook AI-content-quality failure under the September 2025 QRG.

### 🚨 6. **18 location pages share 75-80% identical boilerplate**
**Source:** Content + GEO specialists.
**Impact:** Programmatic thin-content cluster suppresses the entire domain's quality assessment.

### 🚨 7. **"Washington Dc, VA" title tag typo**
**Source:** Local specialist.
**Impact:** Direct embarrassment + signal to Google that pages aren't curated.

### 🚨 8. **Zero customer reviews / testimonials anywhere**
**Source:** Content + Local specialists.
**Impact:** No Google Reviews widget, no on-page quotes, no AggregateRating schema. For a YMYL-adjacent business, this is the largest trust deficit.

### 🚨 9. **No published license number or IICRC verification**
**Source:** Content specialist.
**Impact:** "Licensed & Insured" appears as a badge label only. Virginia DPOR contractor license number is not published. IICRC certification claim is not linked to the directory. Eliminates the strongest Trustworthiness signal for a regulated trade.

### 🚨 10. **Areas-we-serve hub duplicates homepage title + meta description exactly**
**Source:** Technical specialist.
**Impact:** Two indexable pages compete for the same keywords; Google suppresses one.

---

## Technical SEO (Score: 52 / 100)

- ❌ **No canonical tags** on homepage + 6 core pages.
- ❌ **Zero JSON-LD** sitewide.
- ❌ **www → apex** redirect is **307 Temporary**, not 301/308 Permanent.
- ❌ Areas-we-serve hub duplicates homepage title and meta description.
- ❌ Hero image missing `priority` prop (no `fetchpriority="high"`) — degrades LCP.
- ✅ Robots.txt allows all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended).

## Content Quality (Score: 41 / 100)

- All 5 service pages (Water Damage, Fire & Smoke, Mold Remediation, Biohazard, Drywall Repair) < 175 words each.
- All 5 share an identical template with only the service name swapped.
- 18 location pages 75-80% identical boilerplate (only a 4-bullet "local risk" section varies per city).
- Zero customer reviews / testimonials.
- No structured data on any page.
- "Licensed & Insured" badge with no published license number or IICRC directory link.

## Schema (Score: 0 / 100)

- **Zero JSON-LD blocks across all 7 audited pages.** No Microdata. No Schema.org RDFa.
- Only Open Graph meta tags exist (different vocabulary; no Google Search structured-data value).
- Generated ready-to-paste JSON-LD blocks for:
  1. `LocalBusiness` typed as `EmergencyService` (full address, hours, areaServed, service catalog).
  2. `Service` schema for the Water Damage page (templated for all 5 service verticals).
  3. `WebSite` with `SearchAction` for Sitelinks search box.
  4. Plus `BreadcrumbList` and `FAQPage` documented.

## GEO / AI Search (Score: 42 / 100)

- ✅ Robots.txt allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
- ❌ No `/llms.txt`.
- ❌ Every service page opens with a 4-25 word marketing tagline; optimal AI-citation passage is 134-167 words.
- ✅ FAQ page is the lone bright spot (B grade, 72/100): static rendering, direct Q&A, near-optimal answer lengths — but no `FAQPage` schema, and only 5 questions.
- ❌ Brand entity signals near-absent: social media icons are unlinked placeholders, no YouTube channel (single strongest AI-citation correlator r=0.737), no verified GBP / BBB / IICRC directory links.
- ❌ 65 templated location pages — should consolidate to 8-10 genuinely unique pages.

## Local SEO (Score: 34 / 100)

- ✅ Clean NAP across 14 pages sampled.
- ❌ Zero JSON-LD anywhere (no LocalBusiness, Service, FAQPage, BreadcrumbList).
- ❌ No verifiable GBP signals on the site: no Maps embed, no Place ID, no review widget, no profile link. Unknown if GBP is even claimed.
- ❌ No reviews anywhere: no testimonials, no AggregateRating, no third-party review links, BBB unlisted.
- ❌ Service pages avg 400 words with no meta descriptions.
- ❌ "Washington Dc, VA" title tag typo.

## SXO / SERP Fit (Score: 24 / 100)

- Every service page is a generic category page, but all 5 audited keywords are dominated by **city-service intersection pages** (e.g., "water damage restoration Ashburn VA" demands a geo-qualified page — PSR has none).
- "Loudoun County emergency water damage" → no matching PSR page exists at all.
- Fire & Smoke page title bug ("Water Damage Restoration") — see Critical #1.
- Service pages avg 375 words vs SERP benchmarks of 1,200 (Paul Davis) to 3,000+ (Valor Mold).
- No FAQs, process breakdowns, or case studies on service pages.
- Competitors display 5-9 named, location-attributed testimonials. PSR has zero.

---

## Why This Score Will Improve Quickly

Half of the critical issues are 5-60 minute fixes: title tag bug, canonical tags, 307→301 redirect, NAP typo, FAQ schema injection. The longer work is content depth and license publication. The site has a **clean technical foundation** (no penalty signals, AI bots allowed, NAP consistent) — the gap is exposing trust + intent signals that already exist offline.
