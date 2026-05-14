# Phase 1 — Audit Findings (Live Site, 2026-05-11)

Source: live curl + JSON-LD parse + difflib similarity + sitemap inventory of `https://ldndecks.com`. Codebase cross-referenced from `/Users/ldndecks/ldn-decks-next`.

## SEO Health Score: **78 / 100** (Strong, with shippable bugs)

| Category | Weight | Score | Headline |
|---|---:|---:|---|
| Technical SEO | 22% | 80/100 | Strong headers, HTTP/2, redirects clean. Missing CSP. Favicon/manifest 404. |
| Content Quality | 23% | 82/100 | Most pages 1,300–3,100 words. Ashburn ↔ Leesburg 64% token-similar. |
| On-Page SEO | 20% | 80/100 | Titles/H1s consistent. Title entities (`★`, `&amp;`) inconsistent in SERPs. |
| Schema | 10% | 65/100 | Comprehensive but **5 pages emit duplicate FAQPage**, **2 emit competing LocalBusiness types**, **WebPage references @id that don't exist**. |
| Performance | 10% | N/A | PSI quota exhausted. Heuristics: 179 KB HTML, 46 scripts, hero preloaded twice, BBB seal blocks. |
| AI Search Readiness | 10% | 90/100 | `llms.txt`, AI-bot allowlist, NamedAuthor, NoVAPermitTimeline — best-in-class. |
| Images | 5% | 95/100 | 100% alt coverage, AVIF+WebP, 193 next/image refs on home. |

---

## The 14 Bugs (fix in order)

### CRITICAL — fix this week

**1. Duplicate `FAQPage` JSON-LD on 5 pages**
- Pages: `/deck-builder-ashburn-va`, `/deck-builder-leesburg-va`, `/deck-builders-loudoun`, `/services/porches/screened-porch`, `/deck-repair-loudoun-county`
- Each emits the same `FAQPage` block **twice byte-identical**.
- **Risk**: Google logs `Multiple instances of FAQPage detected` warnings; can suppress rich-result eligibility.
- **Likely cause**: Two FAQ components mounted on the same page (e.g., `FAQ.jsx` + `ServicesFAQ.jsx`), each emitting JSON-LD independently.
- **Fix**: Pages should emit at most ONE FAQPage. Consolidate FAQ data into a single mount, or de-dupe in a shared schema generator. See [08-TECHNICAL-FIXES.md §F1](08-TECHNICAL-FIXES.md).

**2. Competing LocalBusiness types on city pages (Ashburn + Leesburg)**
- Both pages emit `GeneralContractor` (from root layout) AND `HomeAndConstructionBusiness` (from `LocalBusinessSchema.jsx`) for the same entity.
- Phone numbers differ: `+15716557207` vs `+1-571-655-7207` — Google entity resolution may treat as 2 distinct businesses.
- **Fix**: Pick ONE schema type per page. Recommendation: keep `GeneralContractor` site-wide; on city pages, override the address.addressLocality/postalCode and add `serviceArea` polygon, but do NOT add a second business block. See [08-TECHNICAL-FIXES.md §F2](08-TECHNICAL-FIXES.md).

**3. WebPage schema references `@id` anchors that don't exist**
- Homepage `WebPage` block references `https://ldndecks.com/#organization` and `https://ldndecks.com/#website` — neither `@id` exists in any block on the page.
- Google doesn't error on dangling refs but loses entity-graph signals.
- **Fix**: Add `@id: "https://ldndecks.com/#organization"` to the `GeneralContractor` block; add a separate `WebSite` block (`@id: "https://ldndecks.com/#website"`) with `name`, `url`, `publisher: { @id: ".../#organization" }`, and `potentialAction: SearchAction` if site has search. See [08-TECHNICAL-FIXES.md §F3](08-TECHNICAL-FIXES.md).

**4. Form placeholder leakage in server-rendered HTML**
- Homepage HTML (idx ~39,558–39,996) contains `placeholder="(555) 123-4567"`, `placeholder="you@example.com"`, `placeholder="123 Main St"` rendered server-side. Google's text extraction catches these.
- **Fix**: Replace placeholders with real-looking but branded examples (e.g., `(571) 555-0100`, `name@example.com`, `123 Main St, Ashburn VA`) OR remove placeholders and use floating labels. See `src/components/ContactForm.jsx`.

**5. `favicon.ico`, `manifest.json`, `site.webmanifest` all 404**
- Browsers and Google fall back to grayed icon in SERPs.
- `theme-color` meta absent.
- **Fix**: Add `app/icon.ico` (or rely on `app/icon.png` which works in 4.x but legacy IE-style requests still hit `/favicon.ico`); add `app/manifest.ts` exporting Next.js Manifest with name, short_name, theme_color, background_color, icons.

### HIGH — fix this sprint

**6. Ashburn ↔ Leesburg city pages 64% token-similar**
- Difflib SequenceMatcher 0.532, Jaccard tokens 0.643 (580/902 shared).
- Fairfax variant uses a different lighter template (128 KB) and is differentiated. Loudoun-county template (226 KB) is the offender — Ashburn and Leesburg both use it.
- **Fix**: Differentiate Loudoun cities by injecting unique sections per city: HOA examples specific to that city, recent project gallery from that city, drive-time map, named local landmarks, named subdivision examples. Target <40% pairwise similarity. See [05-ON-PAGE-TEMPLATES.md §City Page](05-ON-PAGE-TEMPLATES.md).

**7. 10 cities listed in `llms.txt` are missing from sitemap**
- Aldie, Broadlands, Lansdowne, Lovettsville, Hamilton, Hillsboro, Middleburg, Round Hill, Waterford, Annandale.
- **Decision required**: Either build the pages (raise the 26 city pages to 36) OR remove from `llms.txt` so AI crawlers don't claim coverage you don't have. Recommendation: build at least Lansdowne, Broadlands, Annandale, Middleburg (high-affluence subdivisions). See [03-ARCHITECTURE.md §New Location Pages](03-ARCHITECTURE.md).

**8. Hero image preloaded twice**
- `/home-page-ldn.webp` appears in two `<link rel="preload">` tags.
- **Fix**: Remove the duplicate. Likely two components both preloading. Search the codebase for `home-page-ldn.webp` preload in `app/page.js` and any imported component.

**9. BBB seal preloaded from third-party origin**
- `https://seal-dc-easternpa.bbb.org/seals/blue-seal-200-65-bbb-236091241.png` — render-blocking external preload on every page.
- **Fix**: Self-host the seal image (download and place in `/public/badges/bbb.png`); link the actual BBB profile via `sameAs`. BBB allows hotlinking but caches and CDN regional latency vary.

**10. Title entity inconsistency**
- Homepage title contains literal `★` (5.0★) and `&amp;` HTML entity. Google strips both inconsistently across SERPs.
- **Fix**: Test variants. Option A: keep `★` — Bing renders, Google strips. Option B: replace with text "5-star". Option C: A/B test via different cities. See [05-ON-PAGE-TEMPLATES.md §Titles](05-ON-PAGE-TEMPLATES.md).

### MEDIUM — fix this month

**11. No CSP header**
- Vercel headers config in `next.config.mjs:306-362` ships HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. CSP missing.
- **Fix**: Start with report-only CSP (`Content-Security-Policy-Report-Only`); allowlist Vercel, Google Fonts, GTM, Ahrefs, BBB seal, next-image. Promote to enforcing after 30 days clean.

**12. Sitemap uses deprecated `<priority>` and `<changefreq>`**
- Google has officially ignored these for years. Harmless but stale.
- **Fix**: Remove from `src/app/sitemap.js` to slim payload. Keep `lastModified`.

**13. No HTTP/3**
- No `Alt-Svc` header advertising HTTP/3. Vercel supports it; needs domain-level enablement.
- **Fix**: Vercel Pro+ enables HTTP/3 automatically; verify in domain settings. Mobile users on flaky connections benefit most.

**14. Image-sitemap and news-sitemap referenced in `robots.js` but their existence at the URL needs verification**
- Audit confirmed both return 200, but if these are static-file references (not generated by `app/`), risk of staleness as new images/news entries land.
- **Fix**: Verify these are programmatically generated. If static, add to build step.

---

## What's already strong (don't touch)

- **Schema infrastructure** is best-in-class — modular components in `src/components/`, server-rendered `<script type="application/ld+json">`, breadcrumb on every page.
- **AI search readiness** — `llms.txt`, `llms-full.txt`, AI-bot allowlist in `robots.js`, `NamedAuthor` and `NoVAPermitTimeline` for AI Overview citation. No competitor has this.
- **Tiered sitemap** with daily/weekly/monthly/biannual tiers via `lastModified`.
- **Click ID capture** (`gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`) before GTM loads — Enhanced Conversions ready.
- **Redirect map** (200+ rules in `next.config.mjs`) — defensive against legacy URL leakage.
- **Image alt coverage** 100% on every sampled page.
- **NAP consistency** in HTML and schema (single phone, single address).
- **TrexPro Platinum** — only competitor with comparable tier doesn't claim Platinum publicly.

---

## What you actually need from this audit

The audit didn't find a "ranking is broken" smoking gun — it found **ship-the-fixes-then-press-the-advantage**. The 5 critical bugs are 1–4 hour fixes each. Do them this week. Then move to phases 3–10.

See [08-TECHNICAL-FIXES.md](08-TECHNICAL-FIXES.md) for exact code diffs.
