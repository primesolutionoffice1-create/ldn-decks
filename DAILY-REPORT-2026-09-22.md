# Daily SEO Report — LDN Decks
## 2026-09-22 | Day 63 of SEO Campaign

### Executive Summary
Day 63 — steady progress. Two pull requests merged overnight since yesterday's report: GEO-009 (internal link from Prince William County to the outdoor-living hub) and a GEO evidence ledger update. All codebase metrics unchanged from Day 62; site architecture is healthy. Live HTTP checks remain untestable from this cloud environment (proxy blocks egress to Vercel — environment limitation, not a site issue). No broken routes or missing redirects detected in source code.

---

### Site Health (Live URL Checks — PROXY BLOCKED)
> Same egress limitation as every prior day — the cloud runner's outbound proxy blocks HTTPS to `ldn-decks-next.vercel.app`. All routes verified through source-code analysis and redirect config.

| Check | Status | Details |
|-------|--------|---------|
| Critical Pages (10) | ⚠️ UNTESTABLE | All 10 directories confirmed in source ✅ |
| Cornerstone Content (7) | ⚠️ UNTESTABLE | 6 direct + 1 redirect (how-much → composite-deck-cost) ✅ |
| Location Pages (6) | ⚠️ UNTESTABLE | All confirmed in source ✅ |
| Special Pages (3) | ⚠️ UNTESTABLE | /press, /llms.txt, /llms-full.txt — routes confirmed ✅ |
| Old URL Redirects (8) | ⚠️ UNTESTABLE | All 8 confirmed `permanent: true` in `next.config.mjs` ✅ |

---

### What Changed Since Day 62 (2 PRs merged)

| PR | Description | SEO Impact |
|----|-------------|------------|
| #189 | GEO evidence ledger: intake GEO-PROOF-004 and GEO-PROOF-006 | Internal records only — no public page changed |
| #190 | GEO-009: Add internal link on Prince William County page → `/outdoor-living-northern-virginia` | **Topical authority signal** — ties PWC location page to the outdoor-living hub; improves AI search relevance for "low-maintenance outdoor living in Prince William County" |

---

### Sitemaps & Indexing (Source-Code Analysis)

| Sitemap | Status | Notes |
|---------|--------|-------|
| sitemap.xml | ✅ ROUTE EXISTS | `src/app/sitemap.js` — dynamic generation, ~224 indexed pages |
| news-sitemap.xml | ✅ ROUTE EXISTS | Active only for posts <2 days old (by design) |
| image-sitemap.xml | ✅ ROUTE EXISTS | `src/app/image-sitemap.xml/route.js` confirmed |
| robots.txt | ✅ CORRECT | VERCEL_ENV guard working; 3-sitemap listing; AI allowlist complete |

**AI crawlers allowlist:** GPTBot ✅ ClaudeBot ✅ anthropic-ai ✅ Claude-Web ✅ PerplexityBot ✅ OAI-SearchBot ✅ ChatGPT-User ✅ Google-Extended ✅ Applebot-Extended ✅ Amazonbot ✅ CCBot ✅ cohere-ai ✅ Bytespider ✅

---

### Technical SEO (Source-Code Analysis)

| Check | Result |
|-------|--------|
| Homepage schema blocks | 1 `<JsonLd>` block + global `<StructuredData>` component |
| Homepage @types | WebPage, WebSite, ImageObject, SpeakableSpecification, OfferCatalog, Offer, Service |
| Noindex VERCEL_ENV guard | ✅ Production never blocked (`isExplicitlyNonProd` logic in `src/app/robots.js`) |
| Canonical | ✅ `buildMetadata()` sets canonical on every page |
| Financing UI (CI-protected) | ✅ ALL 5 FILES VERIFIED |
| Random page check (`/near-you/prince-william-county`) | LocalBusinessSchema ✅ · ServicesFAQ ✅ · RelatedGuides ✅ · GEO-009 outdoor-living link ✅ |

---

### Codebase Stats

| Metric | Count | vs Day 62 |
|--------|-------|-----------|
| Total pages (page.js + page.tsx) | 224 | = |
| RelatedGuides | 190 | = |
| Breadcrumbs component | 1 | = |
| ArticleSchema | 51 | = |
| ServiceSchema | 44 | = |
| Redirects in `next.config.mjs` | 350+ | = |

---

### Campaign Progress
- **Current phase:** Authority building + GEO signal reinforcement (Day 63)
- **Today's focus:** GEO-009 deployed ✅ — outdoor-living topical authority link; evidence ledger updated ✅
- **Days since launch:** 63 (first commit: 2026-07-21)
- **Expected milestones:**
  - Google ranking improvement: ~2026-08-20 (**PASSED** — check Search Console for Aug→Sep trend)
  - AI citations (ChatGPT, Perplexity, Claude): ~2026-08-20 to 2026-09-19 (**WINDOW CLOSED — test now and document results**)
  - Backlink impact visible: ~2026-09-19 to 2026-10-19 (**WE ARE HERE — prime window, Day 63 of 90**)

---

### Issues Found
1. **ENVIRONMENT LIMITATION (non-blocking):** Live HTTP checks untestable from cloud. No site issues detected in source analysis.
2. **INFORMATIONAL:** `/how-much-does-a-deck-cost-northern-virginia` 301-redirects to `/composite-deck-cost-northern-virginia` — intentional (documented in sitemap.js since 2026-05-26).

**No code errors, no broken redirects, no missing schema, no noindex issues detected.**

---

### Recommended Actions Today
1. **Backlink outreach — prime window (Day 63/90):** Contact 3–5 Northern Virginia real estate agents or home-improvement blogs. Angle: the cost guides (`/composite-deck-cost-northern-virginia`, `/how-much-does-a-deck-cost-northern-virginia`) are natural resource links for buyer and seller audiences. This is the single highest-leverage action right now.
2. **Manually test AI citations:** Search "deck builder northern virginia", "composite deck cost northern virginia", and "outdoor living Prince William County" in ChatGPT, Perplexity, and Bing Chat. The AI citation window is now closed (~Day 30–60); document whether ldndecks.com is cited — if not, identify the gap.
3. **Check 30-day Search Console trend:** Compare impressions/clicks 2026-08-22 → 2026-09-22 vs. 2026-07-22 → 2026-08-22. This is the most concrete indicator of campaign ROI after Day 63.
4. **Submit GSC re-crawl for outdoor-living hub:** The new Prince William County → `/outdoor-living-northern-virginia` internal link (PR #190) is the freshest signal. Use URL Inspection to request re-crawl of that hub page so Google notices the new inbound link.
5. **Evidence ledger follow-up:** GEO-PROOF-004 and GEO-PROOF-006 are status `partial` — confirm the missing project details with the owner so schema and copy can be updated to `verified`.

---

*Report auto-generated by SEO Monitor.*
*Codebase at commit `96988179` on `main`.*
*Run at: 2026-09-22 UTC.*
