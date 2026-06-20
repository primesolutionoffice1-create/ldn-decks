---
type: seo-audit
title: "LDN Decks Deep SEO / GEO / Maps / SXO Audit"
created: "2026-05-31"
status: "execution-ready"
domain: "ldndecks.com"
branch: "codex/ldndecks-deep-seo-implementation"
tags: [seo, geo, maps, sxo, local-seo, technical-seo, beast]
---

# LDN Decks Deep SEO / GEO / Maps / SXO Audit

## Executive Read

LDN Decks is no longer a thin local contractor site. The live domain has a real topical architecture: deck cost pages, permit pages, material comparisons, service pages, repair/maintenance pages, outdoor living, city pages, calculators, `llms.txt`, image sitemap, schema, and internal links. The next growth ceiling is not basic SEO. It is proof architecture, media operations, freshness normalization, OG/social quality, local maps cadence, and conversion tightening on the highest-intent hubs.

The site is technically strong enough to keep building on:

| Area | Current finding | Status |
|---|---:|---|
| Live sitemap | 260 URLs | Healthy |
| Internal link audit | 318 internal links, 0 bad | Healthy |
| Schema validator | `ok: true`, 0 duplicate FAQ risks, 0 NAP drift, 0 HowTo schema | Healthy |
| Image alt audit | 186 images, 0 missing/empty/generic/weak | Healthy |
| Robots / AI crawler access | AI bots declared; sitemap present; no global block | Healthy |
| Breadcrumb audit after fix | 0 unknown segments, 0 duplicate BreadcrumbList | Fixed |
| Freshness audit | 150 undated pages emitting WebPage/Article schema | Needs normalization |
| OG image audit | 35 social-card image warnings remain | Needs asset pass |

## What We Improved In This Pass

1. SEO report tooling now writes to a portable report location instead of brittle absolute paths.
2. Breadcrumb schema is clean: no duplicate BreadcrumbList emission from page-level schemas and the global breadcrumb component.
3. Breadcrumb label coverage is complete for the current route set.
4. OG image audit now treats 16:9 as acceptable for social cards instead of falsely flagging it as a hard ratio problem.
5. Robots / IndexNow verification, schema validation, breadcrumb audit, OG audit, and freshness audit now run successfully.
6. Link audit now runs with controlled concurrency instead of slow sequential crawling.

## What We Have

### Technical SEO Foundation

- Crawlable static and server-rendered Next.js architecture.
- `robots.txt` includes search and AI crawler allow rules.
- `sitemap.xml` and `image-sitemap.xml` are live and reachable.
- `llms.txt` exists and describes the brand, service areas, pricing cluster, services, education guides, and local pages.
- Schema graph is already mature: Organization / GeneralContractor / Service / FAQPage / WebPage / Article patterns are in use.
- Internal link audit is clean.

### Topical Authority Foundation

The site already has strong clusters for:

- Composite deck costs and 2026 pricing.
- Deck financing and monthly payment searches.
- Deck permits and HOA requirements.
- Trex / TimberTech / AZEK material comparisons.
- Deck repair, resurfacing, maintenance, and inspection.
- Screened porches, patios, pergolas, and outdoor living.
- City and county service area pages across Northern Virginia.

### GEO / AI Citation Foundation

The site already has:

- Quick-answer style sections on key pages.
- Tables on cost/comparison content.
- Named author patterns on many pages.
- AI crawler access.
- `llms.txt`.
- Clear local entity signals: Loudoun County, Fairfax County, Prince William County, Ashburn, Leesburg, Reston, Vienna, McLean, Manassas, Gainesville, Haymarket, and nearby markets.

The strongest AI-citation opportunities are commercial-intent pages with unique local data:

- `/composite-deck-cost-northern-virginia`
- `/deck-cost-calculator`
- `/how-tariffs-affect-deck-prices-2026`
- `/deck-permit-loudoun-county-virginia`
- `/deck-permit-fairfax-county-virginia`
- `/services/deck-repair-and-structural-maintenance`
- `/deck-resurfacing-vs-replacement`
- `/trex-vs-timbertech-vs-azek`

## What Needs Improvement

### P0: Proof Layer Before More Content

The site has enough SEO pages for the current phase. The next leverage is evidence ingestion:

- Real project photos.
- Real before/after paths.
- City + month/year metadata where available.
- Verified warranty terms.
- Verified cost ranges from estimates/invoices/calculator data.
- Real permit/process examples without private information.

Do not fabricate technician identities, project stories, customer reviews, certification claims, or permit outcomes. Pages should remain evidence-needed where proof is missing.

### P1: Freshness Normalization

The freshness audit found 150 undated WebPage/Article schema pages. This does not mean the content is stale, but it weakens recency confidence for Google and AI systems.

Do this conservatively:

- Add `dateModified` only when the page receives a substantive update.
- Prioritize high-intent city, cost, permit, repair, replacement, financing, and material pages.
- Do not mass-bump dates without content changes.

First candidates:

- City pages: `/deck-builder-ashburn-va`, `/deck-builder-leesburg-va`, `/deck-builder-fairfax-va`, `/deck-builder-vienna-va`, `/deck-builder-mclean-va`, `/deck-builder-manassas-va`, `/deck-builder-gainesville-va`, `/deck-builder-haymarket-va`.
- Service pages: `/services/new-decks`, `/services/deck-replacement`, `/services/deck-resurfacing`, `/services/deck-maintenance`, `/services/deck-inspection`.
- Trust pages: `/reviews`, `/team`, `/about`, `/get-estimate`, `/contact`.

### P1: OG / Social Card Asset Pass

The OG audit still flags 35 images. Most are real project photos but not social-card format. This matters for LinkedIn, Facebook, iMessage previews, GBP posts, and AI/social sharing confidence.

Create proper 1200x630 OG cards for:

- `/composite-deck-cost-northern-virginia`
- `/services/deck-repair-and-structural-maintenance`
- `/deck-repair`
- `/deck-repair-loudoun-county`
- `/deck-financing`
- `/deck-permit-loudoun-county-virginia`
- `/deck-permit-fairfax-county-virginia`
- `/trex-vs-timbertech-vs-azek`
- `/services/patios`
- `/screened-porch-builder-northern-virginia`

Use real project imagery only where project proof is claimed. If no real image is available, use a branded neutral card rather than stock photos.

### P1: Deck Repair Publish-Readiness

Current strategic state:

- Architecture: strong.
- SEO: strong.
- Anti-fabrication posture: strong.
- Proof layer: incomplete.
- Deploy safety for evidence-heavy page: not ready until placeholders are resolved.

Next work is evidence ingestion, not copywriting:

- Hero before/after.
- Ledger failure.
- Post rot.
- Stair rebuild.
- Railing repair.
- Resurfacing before/after.
- Joist sistering/framing repair.
- Verified workmanship warranty wording.
- Verified repair cost ranges.

### P1: Local Maps / GBP Operating Cadence

No DataForSEO / Google Maps API tier was available in this session, so maps analysis is Tier 0. The site itself has strong local signals, but map-pack growth needs off-site operations:

- Weekly GBP post from real job or education content.
- Weekly photo upload with city metadata where available.
- Review response within 48 hours.
- Q&A seed cadence for cost, permits, repair, replacement, composite, screened porch, and patios.
- NAP consistency check across Google, Bing, Apple, Yelp, Houzz, BBB, TrexPro, TimberTech/AZEK partner listings where applicable.

### P2: SXO Conversion Tightening

The highest-intent pages should behave like tools plus consultant pages, not articles:

- Put calculator or estimate CTA high on cost pages.
- Add “most homeowners spend between X and Y” answer passages.
- Use table-first comparison sections.
- Add inspection-first CTAs on repair pages.
- Add financing CTAs where budget anxiety is obvious.
- Add “when not to buy” or “when replacement is smarter” sections for trust.

Priority pages:

- `/composite-deck-cost-northern-virginia`
- `/deck-cost-calculator`
- `/deck-financing`
- `/services/deck-repair-and-structural-maintenance`
- `/services/deck-resurfacing`
- `/services/deck-replacement`
- `/services/patios`

## What We Should Create

### 1. Project Evidence Library

Create a structured source of truth for real projects:

| Field | Requirement |
|---|---|
| Project ID | Internal ID, not customer name |
| City / neighborhood | Use if known |
| Month / year | Use if known |
| Service type | Deck, resurfacing, repair, porch, patio |
| Materials | Trex, TimberTech, AZEK, wood, railings |
| Failure / scope | Only verified facts |
| Photos | Before, during, after |
| Permit / HOA | Known, unknown, or not applicable |
| Evidence status | verified / partial / missing |

This becomes the source for service pages, case studies, GBP posts, image alt text, OG cards, and AI-citable examples.

### 2. Case Study Template

Create reusable local case study pages or modules, not fictional testimonials:

- Quick summary.
- City and project type.
- Existing condition.
- Decision: repair, resurface, or replace.
- Materials used.
- Timeline range if verified.
- Permit/HOA status if verified.
- Photos.
- CTA to estimate / inspection.

### 3. OG Card System

Create reusable branded 1200x630 cards:

- Cost page card.
- Permit page card.
- Repair/inspection card.
- Composite/material card.
- Financing card.
- City page card.

Keep real project images for pages where the image is proof. Use branded neutral cards for pages where the content is informational.

### 4. Freshness Queue

Create a monthly freshness workflow:

1. Run `npm run seo:audit-freshness`.
2. Pick 10 high-value pages.
3. Make one real content improvement per page.
4. Add/update `dateModified`.
5. Run schema + build.
6. Request indexing for updated URLs.

### 5. Maps Ops Board

Create a weekly GBP board:

- Post topic.
- Photo needed.
- Target city.
- Target service.
- Linked URL.
- Q&A seed.
- Review response status.
- Publish date.

## Priority Roadmap

### Next 7 Days

1. Resolve deck repair evidence placeholders that block publishing.
2. Create first 10 OG cards for high-value pages.
3. Add substantive freshness updates to 10 high-intent undated pages.
4. Publish one GBP post and upload real project photos.
5. Add internal links from permit/cost/financing pages into repair/resurfacing/replacement cluster.

### Next 30 Days

1. Build project evidence library.
2. Create 6 verified local project modules.
3. Normalize `dateModified` on high-priority service and city pages.
4. Build a repair-vs-replace calculator or estimator flow.
5. Create local proof modules for Ashburn, Leesburg, Fairfax, Reston, Vienna, McLean, Manassas, Gainesville, Haymarket.

### Next 90 Days

1. Rank push for “cost of a composite deck” and related commercial-intent deck-cost terms.
2. Build repair, resurfacing, permit, and financing clusters around real proof.
3. Expand GBP/media cadence into a repeatable local authority loop.
4. Add case studies and proof-backed internal links across city/service pages.
5. Re-run deep audit and compare against this baseline.

## Verification Snapshot

Commands run during this pass:

```bash
npm run seo:audit-freshness -- --verbose
npm run seo:audit-og
npm run seo:audit-breadcrumbs
npm run seo:validate-schema
npm run seo:link-audit
npm run seo:verify-robots
npm run build
```

Key outputs:

- Freshness: 187 audited, 28 fresh, 9 aging, 0 stale, 0 critical, 150 undated.
- OG: 201 pages, 40 unique OG images, 35 warnings after 16:9 normalization.
- Breadcrumbs: 201 pages, 0 unknown segments, 0 duplicate BreadcrumbList.
- Schema: `ok: true`, 241 app files inspected.
- Evidence ledger: `ok: true`, 0 verified projects, 8 asset requirements, 0 errors.
- Link audit: 260 sitemap URLs, 318 internal links, 0 bad.
- Robots / IndexNow: 6 passed, 0 failed.
- Build: production build passed, 342 static pages generated.

## Guardrails

- No fake E-E-A-T.
- No fake reviews.
- No fake technician names.
- No fake warranties.
- No fake project dates.
- No stock photos for proof-based project sections.
- No doorway city content expansion until current proof layer is stronger.

## 2026-06-01 Trust-Layer Patch Notes

- Removed unverifiable 100% permit / HOA approval-rate claims from service, permit, HOA, county, press, and city content.
- Removed unverifiable individual review excerpts from shared business data and converted the reviews page into public-profile verification guidance.
- Replaced fabricated-looking dated local project examples on city pages with evidence-safe scope language.
- Replaced "guaranteed permit process" and similar absolute claims with defensible permit coordination and code-review language.
- Hardened SEO admin sessions so the admin cookie stores a signed session token instead of the raw password/secret.
- Added DataForSEO domain normalization for admin-only SEO API routes.
- Added a proof/evidence ledger scaffold and validator so project proof, warranty terms, repair pricing, and review excerpts cannot be promoted without verification.
- Added CSV evidence importer and owner SOP so incoming evidence can be ingested as `partial` by default, then promoted to `verified` only after review.
