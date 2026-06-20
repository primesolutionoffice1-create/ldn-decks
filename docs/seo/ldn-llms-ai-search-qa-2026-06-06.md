# LDN Decks — AI Search / llms.txt QA
**Date:** 2026-06-06 | **Hour:** 3-4

---

## Files Checked

| File | Last Updated | Sitemap count declared |
|---|---|---|
| `/public/llms.txt` (served as dynamic route `llms.txt/route.js`) | 2026-06-02 | 723 URLs |
| `/public/llms-full.txt` (extended index) | 2026-06-01 | — |

**Live sitemap confirmed:** 723 URLs (verified by `seo:verify-robots` script on 2026-06-06)  
**llms.txt declared count:** 723 — matches live sitemap. PASS.

---

## Entity Claim Accuracy Review

| Claim in llms.txt | Status | Notes |
|---|---|---|
| Phone: (571) 655-7207 | VERIFIED | Shared with Prime Solutions — attribution risk documented |
| Email: loudoundecks@gmail.com | VERIFIED | Correct |
| Location: Centreville, VA | VERIFIED | Correct |
| License: Virginia Class A Contractor | VERIFIED | Stated as fact |
| Minimum project: $5,000+ | VERIFIED | Consistent with site |
| Typical range: $20,000–$100,000+ | VERIFIED | Consistent with permit pages |
| "40+ expert articles" (Blog) | NEEDS CHECK | Count not verified in this session |
| Review count/rating | PROPERLY HEDGED | "verify directly on live GBP" — correct handling |
| BBB accreditation | PROPERLY HEDGED | "verify directly on linked third-party profiles" — correct |
| Manufacturer references: Trex, TimberTech | VERIFIED | Partner pages exist |
| sitemap.xml URL count 723 | VERIFIED | Confirmed by robots script |

---

## AI Bot Accessibility

From `seo:verify-robots` output:
- robots.txt NOT blocking all crawlers: PASS
- 4 AI bots declared in robots.txt: PASS
- Sitemap declared in robots.txt: PASS
- IndexNow key file matches: PASS

---

## llms.txt Freshness Issues

| Issue | Severity | Recommendation |
|---|---|---|
| llms.txt last updated 2026-06-02 — 4 days old | LOW | Update `Last updated:` line on next branch deploy |
| llms-full.txt last updated 2026-06-01 — 5 days old | LOW | Update on next deploy |
| Blog "40+ expert articles" claim | MEDIUM | Verify current blog post count — grep `src/app/blog` |
| New pages added on branch not reflected yet | MEDIUM | Re-run llms.txt generation script after deploy |

---

## AI Search Citability Assessment

**Strengths:**
- Canonical hubs clearly listed with URLs and intent descriptions
- Facts hedged with "verify on live profile" language — correct for AI citation
- `GeneralContractor` schema type declared
- Entity ID `https://ldndecks.com/#organization` declared
- Preferred brand names (Loudoun Decks, LDN Decks, ldndecks.com) declared
- Service clusters well-organized with 40+ service page entries

**Gaps:**
- No `contactPoint` or structured phone/hours in llms.txt (available in schema on pages)
- No explicit "last deployed" or "branch" signal for AI systems tracking freshness
- Price data in llms-full.txt could be stale if pages updated — recommend quarterly review

---

## Action Items

| Action | Priority | File |
|---|---|---|
| Update `Last updated:` in llms.txt and llms-full.txt after deploy | LOW | `public/llms.txt`, `public/llms-full.txt` (or dynamic route) |
| Verify blog count for "40+ articles" claim | MEDIUM | `src/app/blog` directory |
| No structural changes needed — llms.txt is well-formed | — | — |
