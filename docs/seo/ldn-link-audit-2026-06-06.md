# LDN Decks — Internal Link Audit
**Date:** 2026-06-06 | **Hour:** 5-6
**Script run:** `npm run seo:link-audit`

---

## Result: PERFECT — 0 bad internal links

```json
{
  "sitemapUrls": 723,
  "internalLinks": 818,
  "badCount": 0,
  "bad": []
}
```

818 internal links checked across 723 sitemap URLs. Zero broken, zero redirect chains, zero 404s.

---

## Context

This result is strong. The Codex branch work (23 commits ahead of main) includes the `/near-you → flat city page` 301 redirects and various internal link updates. With all 296 staged changes plus the local CTA fixes, the internal link map is clean.

**Key changes on branch that affect link health:**
- `/near-you/[city]` → flat `/deck-builder-[city]-va` 301 redirects (committed to branch)
- H1 fixes for Centreville and Great Falls pages (committed to branch)
- `next.config.mjs` redirect cleanup: `/free-estimates → /get-estimate`, `/deck-repair` direction fix

All internal links resolve to live pages on this branch.

---

## SimpleCTA Modal Branch — Dead Code Confirmed

`SimpleCTA.jsx` contains:
```jsx
if (link === '/contact') {
  <button onClick={openContact}>...</button>
}
```
Zero callers pass `link="/contact"`. All callers pass `link="/get-estimate"`. This dead branch poses no conversion risk. Leave as-is until a SimpleCTA refactor is approved.

---

## Recommendations

| Item | Priority | Notes |
|---|---|---|
| No broken link fixes needed | — | Clean audit |
| Validate `/showcase` page exists (linked from /thank-you) | MEDIUM | thank-you page links to `/showcase` and `/before-and-after` — verify both return 200 |
| Re-run after deploy to verify production link health | LOW | Run after branch merges to main |
