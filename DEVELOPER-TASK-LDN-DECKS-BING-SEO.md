# Developer Task: Publish and Verify Bing SEO Fixes for LDN Decks

> **Status: COMPLETE (code + deploy + IndexNow).** Verified 2026-05-20.
> Only the Bing Webmaster Tools steps remain — they require a browser login
> and cannot be automated. See "Remaining Manual Steps" at the bottom.

## Context

Site: `https://ldndecks.com`

Canonical repository: `https://github.com/primesolutionoffice1-create/ldn-decks`

Local working copy (current):

```bash
/Users/ldndecks/Desktop/ldndecks-site/ldn-decks-next
```

> Note: the original task draft referenced a different machine path
> (`/Users/gambit/...`) and the `ldn-decks-next` repo. The fixes were
> ultimately merged through the `ldn-decks` repo on `main`. The
> `fix-internal-redirect-links` branch is fully merged — `git log
> origin/main..origin/fix-internal-redirect-links` is empty.

## Goal

Push the prepared fixes, merge into `main`, deploy, and verify that
Bing-facing SEO issues are resolved in production. — **Done**, except the
Bing Webmaster Tools resubmission.

## What Was Fixed

The following fixes are merged into `main` and live in production:

1. `/home-2` is served as **HTTP 410 Gone** (not a 301 redirect — see
   "Decision: /home-2" below).
2. Root IndexNow key route at `/indexnow.txt` returns `ldndecks2026indexnow`.
3. Removed global root-layout canonical and global `index, follow` robots
   metadata so 404 pages do not inherit indexable signals.
4. Preserved `max-image-preview: large` inside the shared `buildMetadata`
   helper for indexable pages.
5. Added `OAI-SearchBot` to the allowed AI crawler list in `robots.txt`.
6. Rewrote CTR-focused metadata for: Homepage, Fairfax County deck permit
   guide, Loudoun County deck permit guide, Reston deck builder page,
   Composite deck cost page.
7. Expanded `/press` with linkable expert resources for backlink earning.
8. Raised `/press` sitemap priority.
9. Removed two redirecting URLs from sitemap output:
   `/ldn-decks-reviews-yelp` and `/blog/trex-vs-timbertech-vs-azek`.
10. Submitted priority URLs and the full live sitemap to IndexNow.

## Decision: /home-2

The original draft expected `/home-2` to **301-redirect to `/`**. The
implemented strategy is different and intentional: `src/proxy.js` returns
**HTTP 410 Gone** for `/home-2`, grouped with other dead WordPress
artifacts (`/wp-login.php`, `/wp-content/plugins/`, `/comments/feed`,
`/drafts`, `/marker-listing`).

410 is the stronger de-indexing signal for a junk URL with no link equity
to preserve. This is kept as-is. If `/home-2` is ever found to have
inbound backlinks worth preserving, switch it from `goneExactPaths` to a
301 redirect in `next.config.mjs` / `src/proxy.js`.

## Production Verification — 2026-05-20

| Check | Expected | Result |
|---|---|---|
| `curl -I https://ldndecks.com/home-2` | 410 Gone | ✅ `HTTP/2 410` |
| `curl -s https://ldndecks.com/indexnow.txt` | `ldndecks2026indexnow` | ✅ |
| `robots.txt` contains `OAI-SearchBot`, allowed | present | ✅ |
| `sitemap.xml` has no redirecting URLs | none | ✅ none found |
| `GET /api/indexnow?submit=true` | `200 / ok: true` | ✅ 204 URLs, `200 / ok: true` |

Pre-deploy live audit (recorded for reference):

```text
Sitemap URLs checked: 178
200 OK: 176
Redirects in sitemap: 2  (now fixed)
Errors: 0
Missing title / meta description / canonical: 0
Unexpected noindex in sitemap: 0
Homepage JSON-LD blocks: 3 valid, 0 invalid
Homepage image alt: 28 images, 0 missing alt
Security headers: HSTS, nosniff, SAMEORIGIN, referrer policy, permissions policy present
```

## Remaining Manual Steps — Bing Webmaster Tools

These require a browser login to `https://www.bing.com/webmasters` and
cannot be automated. Select the `https://ldndecks.com/` property, then:

1. **Sitemaps → Resubmit:**

   ```text
   https://ldndecks.com/sitemap.xml
   https://ldndecks.com/image-sitemap.xml
   https://ldndecks.com/news-sitemap.xml
   ```

2. **URL Submission → submit:**

   ```text
   https://ldndecks.com/
   https://ldndecks.com/deck-permit-fairfax-county-virginia
   https://ldndecks.com/deck-permit-loudoun-county-virginia
   https://ldndecks.com/deck-builder-reston-va
   https://ldndecks.com/composite-deck-cost-northern-virginia
   https://ldndecks.com/press
   ```

3. **Site Explorer → verify:** no new 404 errors, `/home-2` no longer
   treated as a live indexed URL, sitemap processing successful, indexed
   page count stable.

## Definition of Done

- [x] `fix-internal-redirect-links` pushed to GitHub
- [x] PR merged into `main`
- [x] Production deploy complete
- [x] `/indexnow.txt` returns the IndexNow key
- [x] `/home-2` returns 410 Gone (de-indexing strategy — see decision above)
- [x] `robots.txt` includes `OAI-SearchBot`
- [x] `sitemap.xml` no longer includes redirecting URLs
- [x] IndexNow submit returns `200 / ok: true`
- [ ] Bing sitemaps resubmitted (manual — Bing WMT)
- [ ] Priority URLs submitted in Bing Webmaster Tools (manual — Bing WMT)
