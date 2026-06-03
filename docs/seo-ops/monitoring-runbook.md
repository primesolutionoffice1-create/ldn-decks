# 6. Monitoring Runbook

Status: Active
Cadence: Daily technical, weekly strategic.

## Daily technical check

Run:

```bash
npm run seo:daily-check
npm run seo:deployment-guard
npm run seo:link-audit
```

If it fails, fix in this order:

1. Sitemap unreachable, URL count below 721, or known 260-URL regression detected.
2. Local-service URL count below 464.
3. Priority page returns non-200.
4. Accidental `noindex`.
5. Canonical mismatch.
6. Citation signals disappear from `/social`.
7. IndexNow fails.
8. Internal link audit finds a 4xx URL.

## Weekly SEO review

| Area | Metric | Good state |
|---|---|---|
| GSC indexing | Priority pages indexed | More priority pages move from excluded to indexed |
| GSC queries | Local/service impressions | Rising impressions for city + deck terms |
| Bing Webmaster | Sitemap errors | 0 errors, 0 warnings |
| GBP | Reviews/photos/posts | New reviews and 2 posts/week |
| Citations | Completed profiles | At least 2 clean citation actions/week |
| Content | Expanded pages | At least 1 priority page upgraded/week |
| Ads | Lead quality | Fewer waste terms, stable qualified calls/forms |

## Weekly local authority pack

Run:

```bash
npm run local:authority-pack
```

Use the generated Markdown in `docs/seo-ops/generated/` to execute GBP post/photo work, review requests, citation updates, backlink outreach, GSC inspections, and AI/entity proof checks.

## Daily log template

```text
Date:
seo:daily-check:
IndexNow:
GSC priority URL inspected:
GBP action:
Citation/backlink action:
Content action:
Ads action:
Blocker:
Next action:
```
