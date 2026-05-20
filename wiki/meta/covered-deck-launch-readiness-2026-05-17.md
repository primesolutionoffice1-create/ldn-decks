---
type: report
title: "Covered Deck Launch Readiness 2026-05-17"
created: 2026-05-17
updated: 2026-05-17
status: current
tags:
  - report
  - ldndecks
  - seo
  - content
  - technical-seo
related:
  - "[[covered-deck-authority-brief-2026-05-17|Covered Deck Authority Brief 2026-05-17]]"
  - "[[seo-command-center|SEO Command Center]]"
  - "[[content-calendar|Content Calendar]]"
  - "[[ceo-growth-dashboard-2026-05-17|CEO Growth Dashboard 2026-05-17]]"
---

# Covered Deck Launch Readiness 2026-05-17

## Corrected Finding

The covered-deck page is **not just an idea**. It already exists locally in the site repo at:

- `src/app/covered-deck-builder-northern-virginia/page.js`

It is also already wired into supporting files locally:

- `src/app/sitemap.js`
- `src/app/api/indexnow/route.js`
- `src/components/Header.jsx`
- `src/lib/breadcrumbLabels.js`
- `next.config.mjs` with an `open-porch` redirect target

## Current State

- Repo state: page exists locally.
- Git state: the `src/app/covered-deck-builder-northern-virginia/` route is currently untracked on branch `fix/sxo-schema-day-2026-05-16`.
- Public state: live checks still surfaced the older `open-porch` URL in search, and a direct fetch of the covered-deck URL returned a 404-style not-found response.

## What This Means

The next content move is **not** “invent a covered-deck page from scratch.”

The next move is:

1. validate the existing local covered-deck route,
2. decide whether it should be committed and deployed,
3. then replace the older open-porch search footprint with the newer covered-deck commercial owner.

## Launch Checklist

- Review the page copy against the high-ticket positioning rules.
- Confirm the route should be committed on the intended branch and merged.
- Verify the `open-porch` redirect target is correct for live rollout.
- Confirm sitemap inclusion after deployment.
- Confirm the live route returns `200` and is indexable after deployment.
- Re-check search exposure after Google recrawls.

## Commercial Assessment

The page is directionally strong already:

- title is commercial,
- H1 is commercial,
- FAQ block exists,
- Service schema exists,
- pricing threshold is explicit,
- the page differentiates covered decks from screened porches.

That means the fastest win is likely **launch readiness and deployment**, not more ideation.

## Approval Gate

Committing, deploying, changing redirects, and replacing the live owner URL still require approval.
