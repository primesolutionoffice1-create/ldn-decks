# LDN Decks - IndexNow Dry Run for Composite Deck Fading Blog Cluster

Status: local-only dry run / no live submission performed
Company: LDN Decks only
Date: 2026-06-07
Related deploy commits:

- `6eed1ca feat(blog): add composite deck fading content cluster`
- `5b744d0 docs(seo): add blog cluster post-deploy QA report`

## Purpose

Prepare the exact IndexNow submission scope for the five new composite deck fading blog cluster URLs after deployment and QA pass.

This file is not proof of live submission. It is a dry-run manifest and approval packet only.

## Dry-Run Evidence

Read-only preview endpoint checked:

- `https://ldndecks.com/api/indexnow`

Preview result:

- Total URLs in IndexNow preview payload: `733`
- IndexNow key: `ldndecks2026indexnow`
- Endpoint note: `Add ?submit=true to actually submit to IndexNow`
- Key file checked: `https://ldndecks.com/indexnow.txt`
- Key file HTTP: `200`
- Key file value: `ldndecks2026indexnow`

## Verified Blog Cluster URLs

All five URLs were present in the IndexNow preview payload and returned HTTP `200` with self-referencing canonical tags.

| URL | Preview Payload | HTTP | Canonical |
|---|---|---:|---|
| `https://ldndecks.com/blog/why-composite-trex-decking-fades-sun-solutions` | present | 200 | self |
| `https://ldndecks.com/blog/how-to-restore-faded-composite-decking` | present | 200 | self |
| `https://ldndecks.com/blog/trex-vs-timbertech-fade-resistance-comparison` | present | 200 | self |
| `https://ldndecks.com/blog/best-composite-deck-colors-full-sun-northern-virginia` | present | 200 | self |
| `https://ldndecks.com/blog/resurface-vs-replace-composite-deck-guide` | present | 200 | self |

## Important Scope Note

The existing site endpoint submits the full sitemap payload when called with:

- `https://ldndecks.com/api/indexnow?submit=true`

The preview payload currently contains `733` URLs. If the owner wants to submit only the five blog URLs, create or use a narrow submission method instead of the existing full-sitemap endpoint.

## Live Approval Gate

Do not submit IndexNow without this explicit owner approval:

```text
Recommended change: Submit the five new LDN blog URLs to IndexNow.
Reason: The blog cluster is deployed, live, canonical, and QA passed. IndexNow can speed discovery by Bing and downstream AI/search surfaces.
Expected impact: Faster recrawl/discovery for the five new composite deck fading cluster URLs.
Risk level: LOW - URLs are live and return 200, but this is still an external live submission.
Rollback plan: No rollback is available for an IndexNow ping; mitigation is to submit only the five verified canonical URLs listed in this dry-run manifest.
Approval required: YES
```

## Recommended Execution Method After Approval

Preferred: submit a narrow payload containing only the five verified URLs:

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

Do not use the full-sitemap endpoint unless the owner explicitly approves submitting all `733` preview URLs.
