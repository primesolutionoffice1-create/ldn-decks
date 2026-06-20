# SEO Technical Operator Cycle - 2026-06-05

Status: PREPARED FOR APPROVAL

## Context

The SEO/content/technical lane ran against the current LDN Decks worktree to improve crawl-quality validation, AI retrieval safety, entity consistency, and conversion-support reliability without making live website, Google Ads, GBP, GA4, GTM, redirect, canonical, or public profile changes.

## Action Completed

- Hardened `scripts/seo-daily-check.mjs` so the daily SEO smoke check no longer submits IndexNow by default.
- Added an explicit safety gate for live IndexNow submission: `--submit-indexnow` must be paired with `ALLOW_LIVE_INDEXNOW_SUBMIT=true`.
- Added `--origin` and `--canonical-origin` support so the smoke check can fetch a staging/local origin while still expecting production canonical and sitemap URLs.
- Re-ran entity, schema, link, robots, lint, and build validation.

## Findings

- Production `/press` and `/social` still contain stale Loudoun Chamber URL text:
  `business.loudounchamber.org/list/member/loudoun-deck-30047.htm`.
- Local source and built artifacts contain the corrected canonical Chamber URL:
  `business.loudounchamber.org/list/member/loudoun-decks-30047`.
- The production daily-check failure is therefore a live deploy/cache drift issue, not a remaining local source typo.
- The previous daily-check behavior had a live side effect because it called `/api/indexnow?submit=true`; this is now locally guarded.

## Proof

- `npm run seo:daily-check`: failed only on production stale Chamber URL checks; `IndexNow preview is reachable - 723 URLs; no live submission`.
- `npm run seo:link-audit`: pass, 723 sitemap URLs, 818 internal links, 0 bad links.
- `npm run seo:validate-schema`: pass, 241 app files, 145 JSON-LD files, 0 duplicate FAQ risks, 0 missing canonical risks, 0 HowTo schema files.
- `npm run seo:audit-breadcrumbs`: pass, 201 pages scanned, 0 unknown segments, 0 duplicate BreadcrumbList risks.
- `npm run seo:entity-profiles`: pass, 7 canonical profiles, 12 sameAs, 5 proof snippet URLs, 0 errors, 0 warnings.
- `npm run seo:verify-robots`: pass, robots, sitemap, AI bot declarations, image sitemap, and IndexNow key file all verified; no IndexNow submission.
- `npm run lint`: pass.
- `npm run build`: pass, 342 static pages generated.
- Stale URL scan against source and built Press/Social output returned no stale Chamber/Yelp/Bbb profile URLs.

## Business Impact

This prevents future automation cycles from accidentally submitting IndexNow while preserving crawl, canonical, sitemap, citation, and entity smoke checks. It also isolates the remaining public entity-trust issue to production drift, which matters for local SEO, AI retrieval, GBP/citation consistency, and third-party reputation confidence.

## Recommendations

1. Deploy the current corrected source after approval, then rerun `npm run seo:daily-check` against production.
2. Keep `npm run seo:daily-check` in preview-only mode for recurring automations.
3. Use `ALLOW_LIVE_INDEXNOW_SUBMIT=true node scripts/seo-daily-check.mjs --submit-indexnow` only after action-specific approval.

## Priority Scores

Priority score: 9/10 | Revenue: 8 | Urgency: 9 | Difficulty: 3 | Speed: 9 | Confidence: 9

## Risks

- Production still shows stale citation text until a deploy/cache refresh is approved.
- Browser/localhost HTTP validation was blocked by sandbox networking (`EPERM`), so proof used source scans, built artifacts, and full build validation instead.
- Initial validation observed the preexisting script submit IndexNow before this guard was added; future runs are now protected locally.

## Approval Gates

Recommended change:
Deploy the corrected worktree state so `/press` and `/social` publish the canonical Loudoun Chamber URL and remove stale Chamber URL text from production.

Reason:
Production still contains stale local citation text even though source and built artifacts are clean; stale citations weaken local entity consistency and AI retrieval trust.

Expected impact:
Cleaner public citation graph for Google organic, Google Maps support signals, Bing/Copilot entity retrieval, and AI answer confidence.

Risk level:
Medium, because deployment changes production website output even though the source-level change is low-risk and locally validated.

Rollback plan:
Revert the deployment to the previous Vercel build if production QA finds unexpected rendering, tracking, schema, or conversion regressions.

Approval required: YES

## Next Executable Step

After approval, deploy the current worktree, purge/refresh any production cache if needed, then run production checks in this order:

1. `npm run seo:daily-check`
2. `npm run seo:entity-profiles`
3. `npm run seo:verify-robots`

## Blocker Status

Blocked by business decision for production deploy. Safe local execution is complete.

## Recommended Continuation

Continue automatically next cycle with deck-stair/permit cluster authority work if deployment approval is not granted; otherwise verify production drift cleanup first.
