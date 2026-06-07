# LDN Decks - IndexNow Narrow Submit for Composite Deck Fading Blog Cluster

Status: completed / live IndexNow submit / owner-approved
Company: LDN Decks only
Date: 2026-06-07
Submitted at: 2026-06-07 08:37:34 EDT

## Approval

Owner approval received:

```text
Aprob IndexNow narrow submit pentru cele 5 URL-uri din manifestul 2026-06-07.
```

Approval scope: submit only the five blog URLs from the 2026-06-07 IndexNow dry-run manifest.

## Related Evidence

- Dry-run manifest: `docs/seo/ldn-indexnow-dry-run-blog-cluster-2026-06-07.md`
- Post-deploy QA report: `docs/seo/ldn-blog-cluster-post-deploy-qa-2026-06-07.md`
- Blog content commit: `6eed1ca feat(blog): add composite deck fading content cluster`
- QA report commit: `5b744d0 docs(seo): add blog cluster post-deploy QA report`
- Dry-run manifest commit: `3474bde docs(seo): add blog cluster IndexNow dry-run manifest`

## Submission Method

Submitted directly to the IndexNow API with a narrow five-URL payload.

The site endpoint `/api/indexnow?submit=true` was not used because it would submit the full sitemap payload.

## Submitted Payload

```json
{
  "host": "ldndecks.com",
  "key": "ldndecks2026indexnow",
  "keyLocation": "https://ldndecks.com/ldndecks2026indexnow.txt",
  "urlList": [
    "https://ldndecks.com/blog/why-composite-trex-decking-fades-sun-solutions",
    "https://ldndecks.com/blog/how-to-restore-faded-composite-decking",
    "https://ldndecks.com/blog/trex-vs-timbertech-fade-resistance-comparison",
    "https://ldndecks.com/blog/best-composite-deck-colors-full-sun-northern-virginia",
    "https://ldndecks.com/blog/resurface-vs-replace-composite-deck-guide"
  ]
}
```

## Result

IndexNow API response:

```text
HTTP 200
```

Interpretation: the IndexNow API accepted the narrow five-URL submission.

## Scope Guard

No GBP, Google Ads, GA4/GTM, CallRail, CRM, billing, Jobber, citations, outreach, or review systems were touched.

Prime Solutions LLC was not touched.

