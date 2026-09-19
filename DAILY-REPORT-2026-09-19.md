# Daily SEO Report — LDN Decks
## 2026-09-19 | Day 60 of SEO Campaign

### Executive Summary
Codebase health is strong: 223 pages, financing UI fully wired, schema architecture intact, robots.txt correctly allows all major AI crawlers. Live URL checks (HTTP status codes, sitemaps, schema on rendered pages) could **not** be completed today because the scheduled-run environment's egress policy blocks outbound connections to `ldn-decks-next.vercel.app` — all curl calls returned `connect_rejected (403)`. No auto-fixes were applied; no code issues were detected in the local repo.

---

### Site Health (Live URL Checks — BLOCKED)
> **Note:** The scheduled task runs in an isolated cloud environment with a restricted egress policy. Outbound HTTPS to `ldn-decks-next.vercel.app` is denied by the organization proxy (`gateway answered 403 to CONNECT`). All HTTP status checks below are marked UNTESTABLE. The production site may be perfectly healthy — this is an environment limitation, not a site failure.

| Check | Status | Details |
|-------|--------|---------|
| Critical Pages (10) | ⚠️ UNTESTABLE | Egress policy blocks ldn-decks-next.vercel.app |
| Cornerstone Content (7) | ⚠️ UNTESTABLE | Egress policy blocks ldn-decks-next.vercel.app |
| Location Pages (6) | ⚠️ UNTESTABLE | Egress policy blocks ldn-decks-next.vercel.app |
| Special Pages (3) | ⚠️ UNTESTABLE | Egress policy blocks ldn-decks-next.vercel.app |
| Old URL Redirects (8) | ⚠️ UNTESTABLE | Egress policy blocks ldn-decks-next.vercel.app |

**Workaround:** To restore live URL checks, this scheduled task needs to run in an environment with access to `ldndecks.com` / `ldn-decks-next.vercel.app`. Alternatively, use a WebSearch/WebFetch-enabled agent instead of curl for status checks.

---

### Sitemaps & Indexing (Source-Code Analysis)
> Direct HTTP validation blocked. The following is based on inspection of the route files in the codebase.

| Sitemap | Status | Notes |
|---------|--------|-------|
| sitemap.xml | ✅ ROUTE EXISTS | `src/app/sitemap.js` (503 lines) — dynamically generates all routes |
| news-sitemap.xml | ✅ ROUTE EXISTS | `src/app/news-sitemap.xml/route.js` — serves fresh blog posts (<2 days) |
| image-sitemap.xml | ✅ ROUTE EXISTS | `src/app/image-sitemap.xml/route.js` — showcase + content images |
| robots.txt | ✅ CORRECT | `src/app/robots.js` generates dynamic robots; sitemap URLs point to `ldndecks.com` |

**robots.txt AI crawler check (from source):**
- GPTBot ✅ Allow: /
- ClaudeBot ✅ Allow: /
- PerplexityBot ✅ Allow: /
- OAI-SearchBot ✅ Allow: /
- anthropic-ai ✅ Allow: /
- Applebot-Extended ✅ Allow: /
- Bytespider ✅ Allow: / (owner-approved 2026-08-07)
- Amazonbot ✅ Allow: /
- CCBot ✅ Allow: /
- cohere-ai ✅ Allow: /

**⚠️ Note on news-sitemap in robots.txt:** The dynamic `robots.js` only lists `news-sitemap.xml` when blog posts are under 2 days old. On most days, robots.txt will only list 2 sitemaps (sitemap.xml + image-sitemap.xml). This is by design and is correct per Google News sitemap spec.

---

### Technical SEO (Source-Code Analysis)
> Rendered-page schema validation blocked. Analysis from source code below.

| Check | Result |
|-------|--------|
| Homepage schema @types (page.tsx) | WebPage, WebSite, ImageObject, SpeakableSpecification, Offer, OfferCatalog, Service |
| Global StructuredData component | Emits: GeneralContractor, WebSite, VideoObject, Person (2), PostalAddress, GeoCoordinates, OpeningHoursSpecification, AdministrativeArea, EducationalOccupationalCredential |
| Combined schema @type count | 16+ unique @types across homepage + global components |
| Noindex VERCEL_ENV guard | ✅ Only blocks on explicit `preview`/`development` — never accidentally blocks production |
| SpeakableSpecification | ✅ Present in homepage WebPage schema |
| SITE_URL | ✅ Correctly set to `https://ldndecks.com` |
| Random content page check | /northern-virginia-deck-building-guide: Uses WebPageSchema + RelatedGuides. No ArticleSchema on this guide page — may want to add. |

**Financing UI Compliance (CLAUDE.md required checks):**
| File | Required | Status |
|------|----------|--------|
| src/app/LayoutContent.jsx | FinancingAnnouncementBar | ✅ Imported and rendered |
| src/app/page.tsx | FinancingTeaser | ✅ Imported and rendered |
| src/components/Header.jsx | "Financing Available" pill + mobile entry | ✅ Present |
| .../monthly-payment-composite-deck-northern-virginia/page.js | EnhancifyPaymentCalculator | ✅ Imported and rendered |
| .../trex-deck-cost-monthly-payment/page.js | EnhancifyPaymentCalculator | ✅ Imported and rendered |

---

### Codebase Stats

| Metric | Count | Notes |
|--------|-------|-------|
| Total pages (page.js + page.tsx) | 223 | Strong page count |
| RelatedGuides | 190 | 85% coverage — excellent internal linking |
| Breadcrumbs (Breadcrumbs.jsx component) | 2 | Low, but LocalServicePage template (9 dynamic route files, 139 city slugs) has breadcrumb schema built in |
| ArticleSchema | 51 | 23% of pages — room to expand to more educational/guide pages |
| ServiceSchema | 44 | 20% of pages — good for service-type content |
| Blog posts | 132 | Strong content library |
| Local service page slugs | 139 | city × service coverage |
| Total git commits | 60 | Steady development cadence |

---

### Campaign Progress

- **Current phase:** Phase 3 (Week 7–9 of 12-week intensive) — Content differentiation, local SEO foundation, and financing differentiator active
- **Days since first commit:** 60 (launched 2026-07-21)
- **Today's focus:** At Day 60, the campaign should be in the backlink outreach and content differentiation phase per the 12-month strategy. Priority actions are: city page differentiation (Ashburn vs Leesburg uniqueness), GBP posting cadence, and backlink outreach to NoVA-relevant directories and publishers.
- **Expected milestones:**
  - Google ranking improvement: ~2026-08-20 (30 days — **already past**, watch GSC for movement)
  - AI citations appearing: ~2026-09-20 (60 days — **due NOW**, begin checking Perplexity/ChatGPT)
  - Backlink impact visible: ~2026-10-19 (90 days — approaching)
  - Full authority compound: ~2027-07-21 (12 months)

---

### Issues Found

1. **⚠️ ENVIRONMENT — Egress Policy Blocks Live URL Checks**
   All 30 HTTP status checks and 3 sitemap validations could not be run because the scheduled task environment denies outbound connections to `ldn-decks-next.vercel.app`. This is the single most important operational issue for the monitoring routine. **Recommended fix:** Contact Anthropic support or adjust the session's network policy to allow `ldndecks.com` and `ldn-decks-next.vercel.app`.

2. **⚠️ LOW BREADCRUMB COMPONENT COVERAGE (2 of 223 pages)**
   Only 2 pages explicitly import `Breadcrumbs.jsx`. The `LocalServicePage` template has breadcrumbs built in for city pages, but the 51+ educational/guide pages lack visible breadcrumb navigation (they may still have BreadcrumbList schema via WebPageSchema). Consider auditing whether top-level guide pages show breadcrumb navigation.

3. **ℹ️ NORTHERN-VIRGINIA-DECK-BUILDING-GUIDE: No ArticleSchema**
   The cornerstone guide (`/northern-virginia-deck-building-guide`) uses `WebPageSchema` but no `ArticleSchema`. Given its role as the primary mega-guide, adding ArticleSchema with author, datePublished, and dateModified would strengthen E-E-A-T signals for this key page.

4. **ℹ️ news-sitemap in robots.txt is conditional**
   The news sitemap URL is only listed in robots.txt when blog posts are under 2 days old. This is technically correct but means Google may not always discover the news sitemap from robots.txt. Consider submitting the news-sitemap directly in Google Search Console as a permanent submission (the URL remains valid even with stale content).

---

### Recommended Actions Today

1. **FIX ENVIRONMENT ISSUE:** Enable outbound access to `ldndecks.com` in the scheduled task environment so live URL checks can run in future reports. (High priority — without this, 70% of the monitoring routine is blind.)

2. **CHECK AI CITATION MILESTONE:** Day 60 is when AI citations should begin appearing. Manually test: ask Perplexity "best deck builder northern virginia" and ChatGPT "who builds decks in Loudoun County VA." Document results. Begin Perplexity/ChatGPT mention tracking.

3. **ADD ArticleSchema to /northern-virginia-deck-building-guide:** Import `ArticleSchema` component, add author (Nick/Loudoun Decks), datePublished, dateModified, and image. This is the #1 highest-authority content page and should have full Article schema.

4. **GBP posting cadence check:** Verify 2 GBP posts were published this week (per Week 2 roadmap). If not, draft and schedule a project photo post and a seasonal tip post.

5. **BACKLINK OUTREACH:** At Day 60 the backlink campaign should be active. Review `seo-blueprint/09-BACKLINK-PLAYBOOK.md` for the 50+ NoVA-relevant link targets and begin personalized outreach to any pending targets (HOA websites, Loudoun Now, local business associations).

---

*Report generated automatically by the LDN Decks SEO Monitor scheduled task.*
*First campaign commit: 2026-07-21 | Stack: Next.js 16.3.5 on Vercel | Domain: ldndecks.com*
