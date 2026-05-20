# SEO Operations - Steps 1-6

Date started: 2026-05-15
Domain: https://ldndecks.com

This folder turns the current SEO plan into an operating system. Work these files in order.

## Daily order

1. `gsc-indexing-triage.md` - inspect non-indexed pages, request indexing only for priority URLs.
2. `google-business-profile-sop.md` - publish GBP updates, photos, services, and review requests.
3. `citation-backlink-tracker.md` - complete clean citations and authority links.
4. `content-expansion-queue.md` - expand pages that can rank and consolidate weak ones.
5. `ads-conversion-action-plan.md` - keep Ads tracking clean and add only safe negatives.
6. `monitoring-runbook.md` - run technical checks and record status.

## Automated check

Run:

```bash
npm run seo:daily-check
```

Passing means:
- production sitemap is reachable and has at least 175 URLs;
- priority pages are in sitemap;
- priority pages return 200, have no noindex, and have matching canonicals;
- `/social` still contains the verified citation signals;
- IndexNow accepts the current URL submission.
