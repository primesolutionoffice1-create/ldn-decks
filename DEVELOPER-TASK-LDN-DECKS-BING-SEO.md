# Developer Task: Publish and Verify Bing SEO Fixes for LDN Decks

## Context

Site: `https://ldndecks.com`

Repository: `https://github.com/primesolutionoffice1-create/ldn-decks-next`

Local working copy:

```bash
/Users/gambit/Documents/Codex/2026-05-14/files-mentioned-by-the-user-marketing/ldn-decks-next
```

Codex prepared and committed the fixes locally, but could not push to GitHub because the Mac does not have a GitHub HTTPS token saved in Keychain.

Current local branch:

```bash
fix-internal-redirect-links
```

Current local commits ahead of `origin/main`:

```text
05c2e7b Fix internal links to redirect targets
6d631d3 Improve Bing SEO signals
```

GitHub tracking issue:

```text
https://github.com/primesolutionoffice1-create/ldn-decks-next/issues/8
```

Patch file, if needed:

```text
/Users/gambit/Documents/Codex/2026-05-14/analizeaza-si-seteaza-https-www-bing/ldn-decks-bing-seo.patch
```

Final audit report:

```text
/Users/gambit/Documents/Codex/2026-05-14/analizeaza-si-seteaza-https-www-bing/BING-SEO-FINAL-AUDIT-2026-05-15.md
```

## Goal

Push the prepared local branch to GitHub, open or update a PR into `main`, deploy the site, then verify that Bing-facing SEO issues are resolved in production.

## What Was Fixed Locally

The local branch contains the following fixes:

1. Added a permanent redirect from `/home-2` to `/`.
2. Added a root IndexNow key route at `/indexnow.txt`.
3. Removed global root-layout canonical and global `index, follow` robots metadata so 404 pages do not inherit indexable signals.
4. Preserved `max-image-preview: large` inside the shared `buildMetadata` helper for indexable pages.
5. Added `OAI-SearchBot` to the allowed AI crawler list in `robots.txt`.
6. Rewrote CTR-focused metadata for:
   - Homepage
   - Fairfax County deck permit guide
   - Loudoun County deck permit guide
   - Reston deck builder page
   - Composite deck cost page
7. Expanded `/press` with linkable expert resources for backlink and citation earning.
8. Raised `/press` sitemap priority.
9. Removed two redirecting URLs from sitemap output:
   - `/ldn-decks-reviews-yelp`
   - `/blog/trex-vs-timbertech-vs-azek`
10. Submitted priority URLs and the full live sitemap to IndexNow; the API returned `200 / ok: true`.

## Files Changed

Expected changed files include:

```text
next.config.mjs
src/app/areas-we-serve/page.js
src/app/composite-deck-cost-northern-virginia/page.js
src/app/deck-builder-brambleton-va/page.js
src/app/deck-builder-burke-va/page.js
src/app/deck-builder-centreville-va/page.js
src/app/deck-builder-falls-church-va/page.js
src/app/deck-builder-great-falls-va/page.js
src/app/deck-builder-haymarket-va/page.js
src/app/deck-builder-reston-va/page.js
src/app/deck-builder-springfield-va/page.js
src/app/deck-builder-tysons-va/page.js
src/app/deck-permit-fairfax-county-virginia/page.js
src/app/deck-permit-loudoun-county-virginia/page.js
src/app/hoa-deck-rules-northern-virginia/page.js
src/app/indexnow.txt/route.js
src/app/layout.js
src/app/outdoor-living-trends-northern-virginia-2026/page.js
src/app/page.js
src/app/press/page.js
src/app/robots.js
src/app/sitemap.js
src/lib/seo.js
```

## Step 1: Verify Local State

Run:

```bash
cd /Users/gambit/Documents/Codex/2026-05-14/files-mentioned-by-the-user-marketing/ldn-decks-next
git status -sb
git log --oneline -3
```

Expected:

```text
## fix-internal-redirect-links...origin/main [ahead 2]
6d631d3 Improve Bing SEO signals
05c2e7b Fix internal links to redirect targets
252b040 Improve SEO metadata sitemap and IndexNow
```

Also run:

```bash
git diff --check origin/main..HEAD
```

Expected: no output and exit code `0`.

## Step 2: Push the Branch to GitHub

Run:

```bash
git push origin fix-internal-redirect-links
```

If Git asks for credentials:

- Username: the GitHub username with access to the repo, likely `primesolutionoffice1-create`.
- Password: use a GitHub Personal Access Token, not the account password.

The token needs permission to push to:

```text
primesolutionoffice1-create/ldn-decks-next
```

If you prefer SSH, configure SSH auth and push:

```bash
git remote set-url origin git@github.com:primesolutionoffice1-create/ldn-decks-next.git
git push origin fix-internal-redirect-links
```

## Step 3: Open or Update Pull Request

After pushing, open a PR:

```text
Base: main
Compare/head: fix-internal-redirect-links
Title: Improve Bing SEO signals
```

Suggested PR body:

```markdown
## Summary

Publishes Bing Webmaster and SEO fixes prepared by Codex.

## Changes

- Adds `/home-2 -> /` permanent redirect.
- Adds root `/indexnow.txt` route.
- Prevents global index/canonical metadata from leaking onto 404 pages.
- Adds `OAI-SearchBot` to robots AI crawler allow list.
- Improves CTR-focused metadata for high-impression Bing pages.
- Expands `/press` with linkable expert resources.
- Removes redirecting URLs from sitemap output.

## Verification

- `git diff --check origin/main..HEAD`
- Live sitemap audit found 0 4xx/5xx errors.
- IndexNow full submit returned HTTP 200 / ok true.
```

## Step 4: Run Checks

Install dependencies if needed:

```bash
npm install
```

Run:

```bash
npm run lint
npm run build
```

If there are existing unrelated warnings, do not block deployment unless they are new errors caused by this branch.

## Step 5: Merge and Deploy

After checks pass:

1. Merge PR into `main`.
2. Let Vercel or the active deployment platform deploy `main`.
3. Wait until production is updated.

## Step 6: Production Verification After Deploy

Run these checks after deploy:

```bash
curl -I https://ldndecks.com/home-2
```

Expected:

```text
301 or 308 redirect to /
```

Run:

```bash
curl -s https://ldndecks.com/indexnow.txt
```

Expected:

```text
ldndecks2026indexnow
```

Run:

```bash
curl -s https://ldndecks.com/robots.txt | grep -A5 OAI-SearchBot
```

Expected: `OAI-SearchBot` appears and is allowed.

Run:

```bash
curl -s https://ldndecks.com/sitemap.xml | grep -E "ldn-decks-reviews-yelp|blog/trex-vs-timbertech-vs-azek|home-2"
```

Expected: no output.

Run:

```bash
curl -I https://ldndecks.com/this-page-should-not-exist-codex-audit
```

Expected:

```text
404
```

Then inspect the HTML:

```bash
curl -s https://ldndecks.com/this-page-should-not-exist-codex-audit | grep -i robots
```

Expected: `noindex` should be present, and there should be no conflicting `index, follow` directive.

## Step 7: Submit to IndexNow Again

After production deploy, run:

```bash
curl -s "https://ldndecks.com/api/indexnow?submit=true"
```

Expected JSON should include a successful result, ideally:

```json
{
  "status": 200,
  "ok": true
}
```

## Step 8: Bing Webmaster Tools Verification

In Bing Webmaster Tools:

1. Go to `https://www.bing.com/webmasters`.
2. Select `https://ldndecks.com/`.
3. Open Sitemaps.
4. Resubmit:

```text
https://ldndecks.com/sitemap.xml
https://ldndecks.com/image-sitemap.xml
https://ldndecks.com/news-sitemap.xml
```

5. Open URL Submission and submit:

```text
https://ldndecks.com/
https://ldndecks.com/deck-permit-fairfax-county-virginia
https://ldndecks.com/deck-permit-loudoun-county-virginia
https://ldndecks.com/deck-builder-reston-va
https://ldndecks.com/composite-deck-cost-northern-virginia
https://ldndecks.com/press
```

6. Open Site Explorer and verify:
   - No new 404 errors.
   - `/home-2` is no longer treated as a live indexed URL.
   - Sitemap processing is successful.
   - Indexed pages remain stable.

## Known Pre-Deploy Audit Results

The live site was audited before deployment of this branch:

```text
Sitemap URLs checked: 178
200 OK: 176
Redirects in sitemap: 2
Errors: 0
Missing title: 0
Missing meta description: 0
Missing canonical: 0
Unexpected noindex in sitemap: 0
```

The two redirecting sitemap URLs are fixed locally and should disappear after deploy:

```text
https://ldndecks.com/ldn-decks-reviews-yelp
https://ldndecks.com/blog/trex-vs-timbertech-vs-azek
```

Additional pre-deploy live checks:

```text
/api/indexnow?submit=true: HTTP 200 / ok true
/llms.txt: 200
/llms-full.txt: 200
/news-sitemap.xml: 200
/image-sitemap.xml: 200
/api/indexnow: 200
Homepage JSON-LD blocks: 3 valid, 0 invalid
Homepage image alt: 28 images, 0 missing alt
Security headers: HSTS, nosniff, SAMEORIGIN, referrer policy, permissions policy present
```

PageSpeed Insights was attempted but blocked by API quota:

```text
429 RESOURCE_EXHAUSTED
```

## Definition of Done

This task is complete when:

- Branch `fix-internal-redirect-links` is pushed to GitHub.
- PR is merged into `main`.
- Production deploy is complete.
- `/indexnow.txt` returns the IndexNow key.
- `/home-2` redirects to `/`.
- `robots.txt` includes `OAI-SearchBot`.
- `sitemap.xml` no longer includes redirecting URLs.
- Bing sitemap is resubmitted.
- Priority URLs are submitted in Bing Webmaster Tools.
- Final IndexNow submit returns `200 / ok true`.