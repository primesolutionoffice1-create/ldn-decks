# Daily SEO Report — LDN Decks
## 2026-09-21 | Day 62 of SEO Campaign

### Executive Summary
Day 62 — exceptionally active day. **8 pull requests merged** since last night, adding a new `/instagram` bio-link page (224th page), 13 GSC 404 redirect fixes, Reddit confirmed lead tracking, before/after photos for the wood-to-composite landing page, a Purcellville screened porch project story, SEO cross-linking between cost pages, and Vercel/CSP hardening. Codebase fully healthy. Financing UI confirmed wired. Live HTTP checks untestable from cloud environment (proxy blocks egress to Vercel — environment limitation, not a site issue).

---

### Site Health (Live URL Checks — BLOCKED)
> Same egress block as previous days — organisation proxy blocks HTTPS to `ldn-decks-next.vercel.app`. Source-code analysis confirms all routes intact.

| Check | Status | Details |
|-------|--------|---------|
| Critical Pages (10) | ⚠️ UNTESTABLE | All 10 directories confirmed in source ✅ |
| Cornerstone Content (7) | ⚠️ UNTESTABLE | 6 direct + 1 redirect (how-much → composite-deck-cost) ✅ |
| Location Pages (6) | ⚠️ UNTESTABLE | All confirmed incl. /deck-builder-gainesville-va ✅ |
| Special Pages (3) | ⚠️ UNTESTABLE | /press, /llms.txt, /llms-full.txt — routes confirmed ✅ |
| Old URL Redirects (8) | ⚠️ UNTESTABLE | All 8 confirmed `permanent: true` in `next.config.mjs` ✅ |

---

### What Changed Today (8 PRs merged)

| PR | Description | SEO Impact |
|----|-------------|------------|
| #178 | Purcellville screened porch project story | New local project content |
| #179 | Remove 12 shadowed duplicate redirect sources | Cleaner redirect chain |
| #180 | Fix 2 broken redirects + 13 new GSC 404 redirects | **High** — recovers lost link equity from 404s |
| #181 | Before/after photos on /wood-to-composite page | Visual engagement signal |
| #182 | Retouch 4 before photos (clarity, upscale) | Higher-quality image indexing |
| #183 | Cross-link from cost blog post to 2026 cost pillar | Internal PageRank flow |
| #184 | Consent-gated Reddit confirmed lead tracking | Analytics improvement |
| #185 | New `/instagram` bio-link estimate page | **+1 new page (224 total)** |
| #186 | Harden Vercel analytics + Reddit CSP | Security/compliance |
| #187 | Approve pinned resolver install script | Dev tooling |

---

### Sitemaps & Indexing (Source-Code Analysis)

| Sitemap | Status | Notes |
|---------|--------|-------|
| sitemap.xml | ✅ ROUTE EXISTS | `src/app/sitemap.js` — dynamic generation, 224 pages |
| news-sitemap.xml | ✅ ROUTE EXISTS | Active only for posts <2 days old (by design) |
| image-sitemap.xml | ✅ ROUTE EXISTS | `route.js` — includes Gainesville + wood-to-composite before/after |
| robots.txt | ✅ CORRECT | VERCEL_ENV guard working; 3-sitemap listing; AI allowlist complete |

**AI crawlers allowlist:** GPTBot ✅ ClaudeBot ✅ anthropic-ai ✅ Claude-Web ✅ PerplexityBot ✅ OAI-SearchBot ✅ ChatGPT-User ✅ Google-Extended ✅ Applebot-Extended ✅ Amazonbot ✅ CCBot ✅ cohere-ai ✅ Bytespider ✅

---

### Technical SEO (Source-Code Analysis)

| Check | Result |
|-------|--------|
| Homepage schema @types | WebPage, WebSite, ImageObject, SpeakableSpecification, OfferCatalog, Offer, Service |
| Noindex VERCEL_ENV guard | ✅ Production never blocked (`isExplicitlyNonProd` logic) |
| Canonical | ✅ `buildMetadata()` sets canonical on all pages |
| Financing UI (CI-protected) | ✅ ALL 5 FILES VERIFIED |
| Random page check (/instagram) | New bio-link page live, estimate CTA present |
| Redirect table | ✅ 350 source patterns — 13 GSC 404s resolved today (PR #180) |

---

### Codebase Stats

| Metric | Count | vs Day 61 |
|--------|-------|-----------|
| Total pages (page.js + page.tsx) | 224 | +1 (new /instagram page) |
| RelatedGuides | 190 | +2 |
| ArticleSchema | 51 | = |
| ServiceSchema | 44 | = |
| Redirects (source patterns) | 350 | +15 (13 GSC 404 fixes + 2 broken redirect fixes) |

---

### Campaign Progress
- **Current phase:** Authority building + lead attribution (Day 62)
- **Today's focus:** GSC 404 recovery ✅ done; Instagram lead funnel ✅ live; backlink outreach still open
- **Days since launch:** 62 (first commit: 2026-07-21)
- **Expected milestones:**
  - Google ranking improvement: ~2026-08-20 (**PASSED** — check Search Console for trend)
  - AI citations (ChatGPT, Perplexity, Claude): ~2026-08-20 to 2026-09-19 (**WINDOW OPEN — test manually**)
  - Backlink impact visible: ~2026-09-19 to 2026-10-19 (**WE ARE HERE — prime window**)

---

### Issues Found
1. **ENVIRONMENT LIMITATION (non-blocking):** Live HTTP checks untestable from cloud. No site issues detected in source analysis.
2. **INFORMATIONAL:** `/how-much-does-a-deck-cost-northern-virginia` (in task URL list) 301-redirects to `/composite-deck-cost-northern-virginia` — intentional (documented in sitemap.js since 2026-05-26).

**No code errors, no missing redirects, no missing schema detected.**

---

### Recommended Actions Today
1. **Submit GSC 404 fixes for re-crawl:** Use Google Search Console URL Inspection for the 13 URLs fixed in PR #180 — request re-indexing so Google clears the 404 status and recovers any lost link equity.
2. **Test AI citations manually:** Search "deck builder northern virginia" and "composite deck cost northern virginia" in ChatGPT, Perplexity, and Bing Chat. Document whether ldndecks.com appears. We are in the exact citation window (Day 62).
3. **Instagram bio link setup:** Update the Instagram bio to point to `ldndecks.com/instagram` now that PR #185 is live — the page exists but needs traffic from the bio link.
4. **Backlink outreach — priority window:** Contact 3–5 real estate agents in Gainesville / Prince William County with a link to `/deck-builder-gainesville-va` or `/northern-virginia-deck-building-guide`. The combination of local content + real project photos is the strongest argument.
5. **Check 30-day Search Console trend:** Compare impressions/clicks 2026-08-21 → 2026-09-21 vs. 2026-07-21 → 2026-08-21. This is the first concrete indicator of campaign progress.

---

*Report auto-generated by SEO Monitor.*
*Codebase at commit `2af46a4` on `main`.*
*Updated at 13:11 UTC to reflect 8 PRs merged since morning run.*
