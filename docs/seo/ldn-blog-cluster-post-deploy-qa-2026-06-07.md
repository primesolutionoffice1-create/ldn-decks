# LDN Decks - Composite Deck Fading Blog Cluster Post-Deploy QA

Status: local report / post-deploy QA passed / no live submissions performed
Company: LDN Decks only
Date: 2026-06-07
Commit: `6eed1ca feat(blog): add composite deck fading content cluster`

## Scope

Changed production source:

- `/Users/ldndecks/ldn-decks-next/src/lib/blogData.js`

Published blog URLs:

- `https://ldndecks.com/blog/why-composite-trex-decking-fades-sun-solutions`
- `https://ldndecks.com/blog/how-to-restore-faded-composite-decking`
- `https://ldndecks.com/blog/trex-vs-timbertech-fade-resistance-comparison`
- `https://ldndecks.com/blog/best-composite-deck-colors-full-sun-northern-virginia`
- `https://ldndecks.com/blog/resurface-vs-replace-composite-deck-guide`

## Deployment Evidence

GitHub checks on `main` for commit `6eed1ca`:

- `Production Governance` - success
- `financing-ui-guard` - success

Repository state after push:

- Local `main` synced with `origin/main`
- Ahead/behind: `0/0`
- No tracked source diff after commit and push
- Existing untracked docs/social/script files remain unrelated and were not staged for this deployment

## Live QA Results

| URL | HTTP | H1 | Status |
|---|---:|---|---|
| `/blog/why-composite-trex-decking-fades-sun-solutions` | 200 | Why Does Composite Decking Fade in the Sun? | PASS |
| `/blog/how-to-restore-faded-composite-decking` | 200 | How to Restore Faded Composite Decking | PASS |
| `/blog/trex-vs-timbertech-fade-resistance-comparison` | 200 | Trex vs TimberTech Fade Resistance: Which Holds Color Better? | PASS |
| `/blog/best-composite-deck-colors-full-sun-northern-virginia` | 200 | Best Composite Deck Colors for Full Sun in Northern Virginia | PASS |
| `/blog/resurface-vs-replace-composite-deck-guide` | 200 | Resurface vs. Replace a Composite Deck: How to Decide | PASS |

Additional checks:

- Desktop HTTP checks passed.
- Mobile user-agent HTTP checks passed.
- Page titles and H1s render.
- Schema scripts present.
- Schema types observed across the cluster: `BreadcrumbList`, `BlogPosting`, `FAQPage`.
- A `Not Found` string observed during mobile HTML grep was a false positive from the internal Next.js router payload, not a page error; the pages return `200` and render their expected H1s.

## Not Performed

The following were intentionally not performed:

- IndexNow submission
- Google Business Profile changes
- Google Ads changes
- GA4/GTM changes
- CallRail changes
- Citations or outreach
- Jobber, CRM, billing, or paid actions

## Next Approval Gate - IndexNow

Only if the owner wants fast Bing / AI crawler discovery, request this approval exactly:

```text
Recommended change: Submit the five new LDN blog URLs to IndexNow.
Reason: The blog cluster is deployed, live, canonical, and QA passed. IndexNow can speed discovery by Bing and downstream AI/search surfaces.
Expected impact: Faster recrawl/discovery for the five new composite deck fading cluster URLs.
Risk level: LOW - URLs are live and return 200, but this is still an external live submission.
Rollback plan: No rollback is available for an IndexNow ping; mitigation is to submit only the verified canonical URLs listed in this report.
Approval required: YES
```

Do not submit IndexNow without the owner explicitly approving that exact live submission.
