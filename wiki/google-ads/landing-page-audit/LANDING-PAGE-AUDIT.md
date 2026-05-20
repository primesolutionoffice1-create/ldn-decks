---
brain_schema: ads-brain.v1
type: audit
platform: google
audit_scope: landing-page-quality-for-paid-search
title: "LANDING-PAGE-AUDIT"
created: "2026-05-12"
updated: "2026-05-12"
owner: "Loudoun Decks"
status: complete
site: https://ldndecks.com
repo: /Users/ldndecks/ldn-decks-next
---

# Landing Page Audit for Paid Search — ldndecks.com

> **Source-of-truth basis**: page-level inspection of the Next.js source at `/Users/ldndecks/ldn-decks-next/src/app/`. No Google Ads account metrics, no spend numbers, no Quality Score values are quoted in this document. Where field-data is needed (CWV, real engagement) it is marked **VERIFY**.

## 1. Inventory: routes that could receive paid traffic

130+ page routes exist in `src/app/`. The PPC-relevant universe falls into 4 buckets:

| Bucket | Examples | Count | PPC role |
|---|---|---|---|
| Dedicated PPC LP | `/get-estimate` | 1 | Highest-converting landing page (form + form + form) |
| Service hubs | `/composite-decks`, `/trex-decks`, `/wood-decks`, `/deck-repair`, `/services/patios`, `/services/porches/screened-porch`, `/services/gazebo-pergola`, `/services/deck-replacement`, `/services/under-deck-patios` | ~9 | Cluster-level destinations |
| Cost / decision guides | `/composite-deck-cost-northern-virginia`, `/how-much-does-a-deck-cost-northern-virginia`, `/screened-porch-cost-northern-virginia`, `/composite-deck-vs-wood-deck-virginia`, `/trex-vs-timbertech-vs-azek` | ~10 | Mid-funnel research clicks |
| Local pages | `/deck-builder-{city}-va` × 25, `/deck-builders-loudoun`, `/areas-we-serve` | 28+ | Geo-modified queries |

**Out of scope for paid traffic** (do not point ads here):
- `/blog/*` — informational, leak budget.
- `/near-you/*` — already `noindex` per `src/lib/seo.js:24-28`.
- `/showcase/*` — gallery, no form above the fold.
- `/about/*`, `/team`, `/press`, `/scholarship`, `/social`, `/review`, `/reviews` — supporting only.
- `/privacy-policy`, `/terms-of-service`, `/faqs` — utility.
- `/thank-you` — `robots: { index: false, follow: true }` (`src/app/thank-you/page.js:14`). Correct — but means it must not be served as a final URL.

## 2. Per-page audit — the 10 focus clusters

Format: **Cluster → Best LP / Backup → Strengths → Issues → PPC verdict**.

---

### Cluster 1 — Custom decks
- **Best LP**: `/get-estimate` for high-intent, `/composite-decks` for material-aware.
- **Strengths**: `/get-estimate` (`src/app/get-estimate/page.js:34-184`) is purpose-built — H1 with offer, 5-star trust strip with review count, 4 trust badges (Trex Platinum / 2-year warranty / 10+ years / licensed), phone CTA above the fold, ContactForm right-rail, 3 named testimonials with cities (Ashburn / Leesburg / South Riding), recent-projects grid, services strip with pricing, final CTA. Service schema with `lowPrice: 15000 / highPrice: 75000`.
- **Issues**: No persistent sticky "Call/Get Estimate" bar on scroll (only checked in source — verify visually on mobile). Form is right-column on desktop; on mobile it will appear below trust strip — VERIFY scroll-to-form distance.
- **Verdict**: ✅ Strong primary LP. Use as final URL for high-intent search keywords.

---

### Cluster 2 — Composite decks
- **Best LP**: `/composite-decks` (`src/app/composite-decks/page.js`).
- **Strengths**: Service schema (`ServiceSchema name="Composite Deck Installation"` line 124, `price="20000"`). 8 inclusions, 8 FAQs, 3 long expansion sections, ProcessSteps, ServiceAreasGrid, RelatedGuides, ContactHome. NoVA geographic name-drop dense.
- **Issues**:
  1. **"Project Minimum: $5,000+" + "We do NOT offer small repairs or minor fixes"** banner (lines 132-141). This is a **conversion filter** — good for ad QS if it stops repair-seekers from bouncing, but **fatal mismatch** if the campaign also targets "composite deck repair" or "composite board replacement" queries.
  2. No phone number above the fold — `<ContactHome />` lives at the bottom. The deck-repair page has a near-top CallLink (line 130). Composite-decks does not.
- **Verdict**: ✅ Best LP for material-aware composite intent. ❌ Wrong LP for repair/replacement intent.

---

### Cluster 3 — Trex decks
- **Best LP**: `/trex-decks` (`src/app/trex-decks/page.js`).
- **Strengths**: Service schema, Trex Transcend mastery callout, hidden-fastener and lighting language that signals brand familiarity. 8 FAQs include warranty and color-tier mentions.
- **Issues**:
  1. Only 3 inclusion items (line 21-34) — composite-decks has 8. Page feels lighter.
  2. No pricing anchor or table — just the trade-down material story. Paid clicks on "Trex deck cost" land here and bounce to `/composite-deck-cost-northern-virginia` or the calculator.
  3. No phone-above-the-fold CTA section.
- **Verdict**: ✅ Acceptable for brand keyword `trex deck builder`. ⚠️ Weak for `trex deck cost / price`.

---

### Cluster 4 — TimberTech decks
- **Best LP available**: **NONE** dedicated. Closest is `/trex-vs-timbertech-vs-azek` (decision guide, not service page) and homepage mentions.
- **Issues**: 
  1. Site advertises **"TimberTech Certified"** on the homepage (`src/app/page.js:34`) but has no dedicated TimberTech service page. Composite-decks page references TimberTech only inside copy.
  2. Paid clicks for `timbertech installer Virginia`, `timbertech composite deck cost`, `timbertech AZEK contractor` have to land on `composite-decks` (generic) or the vs-page (comparison content, low conversion intent).
- **Verdict**: ❌ Gap. PPC for TimberTech keywords will run at depressed Quality Score (ad-relevance penalty: keyword "timbertech" doesn't appear in the LP's H1, title, or hero copy on `/composite-decks`).

---

### Cluster 5 — Screened porches
- **Best LP**: `/services/porches/screened-porch` (`src/app/services/porches/screened-porch/page.js`).
- **Backup**: `/screened-porch-builder-northern-virginia`, `/screened-porch-cost-northern-virginia`.
- **Strengths**: Speakable Quick Answer block (line 99-104), full 5-row pricing table ($28k–$80k tiers), authoritative copy on Class A license, EZE-Breeze conversions, structural detail, service-area paragraph naming 18 NoVA towns. Has schema (`grep` confirms `JsonLd` or `ServiceSchema` import).
- **Issues**:
  1. `SimpleCTA` and `ContactHome` only — no above-the-fold form. A persistent quote-form drawer would lift conversion on a $25k–$80k product.
  2. The dedicated cost page (`/screened-porch-cost-northern-virginia`) is a 2nd LP — paid keyword fragmentation risk (which gets the click? requires intent classification in the campaign).
- **Verdict**: ✅ Strong content. ⚠️ Conversion mechanics could be tightened. Best LP for `screened porch builder`, `screened porch cost`.

---

### Cluster 6 — Patios
- **Best LP**: `/services/patios` (`src/app/services/patios/page.js`).
- **Strengths**: 6-row pricing table (concrete pavers → bluestone → luxury hardscape suite, $14k–$160k+), material-comparison block (4 materials), 387 lines — the deepest service page on the site. Has schema.
- **Issues**:
  1. Sister pages exist: `/paver-vs-flagstone-patio-northern-virginia`, `/stamped-concrete-patio-northern-virginia`. These are decision-stage articles — VERIFY they don't pull paid clicks away from the converting page.
  2. No mention of decks in patio copy → safe (no cluster bleed).
- **Verdict**: ✅ Strong primary LP for `patio contractor`, `paver patio`, `bluestone patio`. Send `stamped concrete patio` here OR specifically to `/stamped-concrete-patio-northern-virginia` and label.

---

### Cluster 7 — Pergolas
- **Best LP**: `/services/gazebo-pergola` (`src/app/services/gazebo-pergola/page.js`).
- **Strengths**: Pergola vs gazebo definition, 5-row pricing table ($8k–$55k), louvered roof / privacy screen / lighting features called out.
- **Issues**:
  1. **No schema markup imported** (no `ServiceSchema` or `JsonLd` import found via grep). One of the few service pages without schema.
  2. Pergola and gazebo are combined on one URL → ad copy must be careful (a "gazebo" headline on a `/services/gazebo-pergola` LP is fine; a "pergola" headline is fine; but PMax / DSA targeting may need a /pergola/ sub-route to avoid intent dilution).
  3. Final CTA is `SimpleCTA` linking to `/contact` — would convert better if it linked to `/get-estimate` (the LP-grade page).
- **Verdict**: ⚠️ Acceptable for both keywords but missing schema. Lift opportunity.

---

### Cluster 8 — Deck repair
- **Best LP**: `/deck-repair` (`src/app/deck-repair/page.js`).
- **Strengths**: Has the strongest above-the-fold conversion section of any service page — "Worried about your deck's safety? Get a free inspection." block (lines 126-134) with both CallLink and "Get Free Estimate" CTAs. Service schema. Map embed. Geographic name-drop dense. Resurfacing/restoration angle.
- **Issues**:
  1. **Brand-policy conflict**: `/composite-decks` page (line 138) says "We do NOT offer small repairs or minor fixes" — but `/deck-repair` page is fully built and `/get-estimate` services strip shows "Deck Repair From $500". The brand sends mixed signals across landing pages.
  2. `/deck-repair-loudoun-county` is a separate URL — confirm it is not a duplicate-content issue (canonical or genuine local variation).
- **Verdict**: ✅ Conversion-grade page. ❌ Resolve the "we do/don't do repairs" contradiction before scaling repair PPC.

---

### Cluster 9 — Deck replacement
- **Best LP**: `/services/deck-replacement` (`src/app/services/deck-replacement/page.js`).
- **Backup**: `/deck-resurfacing-vs-replacement` (decision guide).
- **Strengths**: Has schema. Replacement-specific framing.
- **Issues**:
  1. Page is 154 lines — relatively short compared to peers (composite-decks 184, patios 387, screened-porch 197). VERIFY content depth on render.
  2. The decision page `/deck-resurfacing-vs-replacement` could be siphoning paid clicks meant for the service page.
- **Verdict**: ⚠️ Adequate, but the decision-stage cousin is a bigger risk than the page itself.

---

### Cluster 10 — Outdoor living
- **Best LP available**: **NONE** dedicated. Closest:
  - `/outdoor-living-trends-northern-virginia-2026` — trends article, blog-style.
  - `/outdoor-kitchen-builder-northern-virginia` — adjacent service (kitchen).
  - `/services/under-deck-patios` — adjacent.
- **Issues**:
  1. "Outdoor living" is a top-of-funnel theme; paid clicks here typically have low conversion intent. If the campaign targets these queries, it needs a hub page that does both: outline the full outdoor living offer AND drive a form.
  2. `/services/under-deck-patios` has **no schema** (grep returned no ServiceSchema/JsonLd import).
- **Verdict**: ❌ Gap. Outdoor-living queries currently have no purpose-built LP — they fall back to homepage or the trends article (low conversion).

## 3. Cross-cutting structural observations

- **Brand-policy contradiction**: small-repairs allowed (per deck-repair page + get-estimate page) vs disallowed (per composite-decks banner). This will cost you Quality Score *and* phone time. Pick one policy and reflect it uniformly.
- **Single phone number** (`+15716557207` in `src/components/CallLink.jsx:7`) — no DNI / forwarding numbers per channel. Phone leads from Google Ads cannot be attributed back to a campaign unless you use Google Ads call-asset forwarding numbers or a 3rd-party call-tracking platform.
- **`ContactHome` at the bottom of every service page** — by design, but means scroll depth correlates strongly with conversion. Forms further up would lift conversion on long pages.
- **No A/B testing infrastructure detected** — no GrowthBook / Optimizely / VWO imports under `src/`. Means PPC LP variants must be tested via separate URLs (e.g., `/get-estimate-v2`) and Ads ad-group split.
- **Image-load discipline good**: Hero uses `priority` + `fetchPriority="high"` + `quality={70}` + webp (`src/components/Hero.jsx:10-18`). LCP risk is low on the homepage. Service pages use the same pattern — VERIFY via PSI when an API key is provisioned.
- **Schema coverage**: present on most service pages. **Missing on**: `/services/gazebo-pergola`, `/services/under-deck-patios`.

## 4. What I could not verify in this pass

- **Core Web Vitals field data** — PSI API quota is 0 (no project key). Recommend wiring `PAGESPEED_API_KEY` and re-running for at least the top 5 LPs: `/get-estimate`, `/composite-decks`, `/services/porches/screened-porch`, `/deck-repair`, `/services/patios`.
- **GTM container contents** — dataLayer pushes are correct in source, but Google Ads conversion tag wiring lives in GTM and is not in the repo. Verify in tagassistant.google.com.
- **Enhanced Conversions match rate** — depends on GTM hashing and on conversion-tag field mapping; cannot inspect without GTM access.
- **City-page Quality Score signals** — 25+ city pages exist; sampled `/deck-builder-fairfax-va` is strong (FAQ schema, neighborhood names, structural-permit language). The other 24 likely use the same template (VERIFY by sampling 3–4 more).

## 5. Summary scorecard

| Cluster | Best LP | Schema | Above-the-fold CTA | Pricing data | Verdict |
|---|---|---|---|---|---|
| Custom decks | `/get-estimate` | ✅ Service | ✅ Phone + form | ✅ "From $15K+" | ✅ |
| Composite decks | `/composite-decks` | ✅ Service | ⚠️ filter banner only | ⚠️ minimum only | ✅ (intent: install) |
| Trex decks | `/trex-decks` | ✅ Service | ❌ | ❌ | ⚠️ |
| TimberTech decks | (none) | — | — | — | ❌ gap |
| Screened porches | `/services/porches/screened-porch` | ✅ | ❌ | ✅ table | ✅ |
| Patios | `/services/patios` | ✅ | ❌ | ✅ table | ✅ |
| Pergolas | `/services/gazebo-pergola` | ❌ | ❌ | ✅ table | ⚠️ |
| Deck repair | `/deck-repair` | ✅ Service | ✅ orange banner CTA | ❌ | ✅ |
| Deck replacement | `/services/deck-replacement` | ✅ | ❌ | ❌ | ⚠️ |
| Outdoor living | (none) | — | — | — | ❌ gap |

See [[KEYWORD-TO-LANDING-PAGE-MAP]] for keyword routing and [[PAID-SEARCH-SXO-FIX-QUEUE]] for prioritized fixes.
