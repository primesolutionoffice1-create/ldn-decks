# 30-Day Roadmap (Days 1–30)

**Theme: Ship the technical fixes, lock in the schema moat, launch the financing differentiator.**

Owners noted as: **DEV** (developer/Nick), **CONTENT** (writer or Nick), **GBP** (GBP/marketing manager — could be Nick). Adjust to your team.

---

## Week 1 — Critical Bugs

### Day 1 (Mon) — Audit-driven fixes start

- **DEV** [01-AUDIT §1](01-AUDIT-FINDINGS.md): Implement `withSchema` prop on FAQ components; reduce duplicate FAQPage emission to 1 per page. Verify on 5 affected URLs. **(2 hr)**
- **DEV** [01-AUDIT §2](01-AUDIT-FINDINGS.md) + [08 §F2](08-TECHNICAL-FIXES.md): Drop `LocalBusinessSchema.jsx` from city pages; add `buildCityServiceSchema()` helper. Deploy. Verify only `GeneralContractor` (referenced via @id) emits per page. **(3 hr)**

### Day 2 (Tue)

- **DEV** [08 §F3](08-TECHNICAL-FIXES.md): Add `@id` to `GeneralContractor`; add `WebSite` block in root layout via `StructuredData.jsx`. Add LinkedIn + BBB profile + GBP place_id URL to `sameAs`. **(2 hr)**
- **DEV** [01-AUDIT §4](01-AUDIT-FINDINGS.md): Replace form placeholders (`(555) 123-4567`, `you@example.com`, `123 Main St`) in `ContactForm.jsx`. **(30 min)**
- **DEV** [01-AUDIT §5](01-AUDIT-FINDINGS.md) + [08 §F5](08-TECHNICAL-FIXES.md): Add `app/icon.ico`, `app/manifest.ts`, `themeColor` meta. Generate icon set (16/32/180/192/512). **(2 hr)**

### Day 3 (Wed)

- **DEV** [01-AUDIT §8](01-AUDIT-FINDINGS.md): Find and remove duplicate hero preload (`/home-page-ldn.webp`). **(30 min)**
- **DEV** [01-AUDIT §9](01-AUDIT-FINDINGS.md) + [08 §F9](08-TECHNICAL-FIXES.md): Self-host BBB seal in `public/badges/`. Wrap in link to BBB profile. **(1 hr)**
- **DEV** [01-AUDIT §10](01-AUDIT-FINDINGS.md): Title entity normalization — A/B set up: 50% of city pages with `★`, 50% without; 50% with `&` vs `and`. Track in GSC. **(1 hr)**

### Day 4 (Thu)

- **DEV** [08 §F11](08-TECHNICAL-FIXES.md): Add CSP-Report-Only header in `next.config.mjs`. Set up `app/api/csp-report/route.ts` to log violations. **(2 hr)**
- **DEV** [08 §F12](08-TECHNICAL-FIXES.md): Remove `priority` and `changefreq` from `src/app/sitemap.js`. **(30 min)**
- **DEV** Verify HTTP/3 enabled in Vercel project settings. **(15 min)**

### Day 5 (Fri) — Verification + GBP audit

- **DEV** Run all 10 verification curl commands in [08 §Verification checklist](08-TECHNICAL-FIXES.md). **(1 hr)**
- **GBP** Full GBP audit per [04 §GBP](04-LOCAL-SEO.md): name, primary category, additional categories, service area cities, description, hours, phone, website URL, photos audit (target: 30+ project photos). **(3 hr)**

### Weekend

- **DEV** Deploy week-1 changes to production. Smoke-test all major pages. Rollback plan ready. **(2 hr)**

---

## Week 2 — Schema Moat + Local SEO Foundation

### Day 8 (Mon)

- **DEV** [05 Templates](05-ON-PAGE-TEMPLATES.md): Add `Service` schema to all 5 service hubs (composite, screened porch, pergola, patio, custom decks). Use `buildCityServiceSchema()` pattern but for general service. **(3 hr)**
- **DEV** [04 §Review schema](04-LOCAL-SEO.md): Add 5 individual `Review` items inside `GeneralContractor` block in `business.js`. Pull from real Google reviews — first-name only, no last names. **(2 hr)**

### Day 9 (Tue)

- **GBP** Pre-seed 10 Q&As on GBP per [04 §Q&A](04-LOCAL-SEO.md). Submit one per Q to avoid bulk-flag. **(1 hr)**
- **GBP** Set up GBP posting cadence — 2 posts/week. Pre-write 8 posts for the next month. **(2 hr)**
- **GBP** Verify Apple Business Connect listing and Bing Places listing exist and match NAP exactly. Submit if missing. **(2 hr)**

### Day 10 (Wed)

- **CONTENT** [05 §City Page](05-ON-PAGE-TEMPLATES.md) + [07-copy/city-page-template.md](07-copy/city-page-template.md): Differentiate Ashburn page using the per-city differentiation table. Inject named subdivisions, HOAs, landmarks, project, cost factor, timeline. **(4 hr)**

### Day 11 (Thu)

- **CONTENT** Same for Leesburg page. Then run uniqueness check (script in [08 §F6](08-TECHNICAL-FIXES.md)). Target: < 40% similarity. **(4 hr)**

### Day 12 (Fri)

- **CONTENT** Same for Brambleton, Reston, Vienna pages (3 of the highest-affluence cities). **(6 hr — extends to Mon)**

---

## Week 3 — Financing Differentiator + Architecture Roll-Out

### Day 15 (Mon) — Continue city differentiation

- **CONTENT** Finish Brambleton/Reston/Vienna differentiation. Verify all 5 priority cities < 40% pairwise similarity. **(4 hr)**

### Day 16 (Tue) — Financing

- **GBP/Nick** [10 CRO](10-CRO-PLAYBOOK.md): Apply to 2 financing partners (Hearth + GreenSky recommended). Approval typically 1–2 weeks; meanwhile design the `/deck-payment-estimator` page. **(2 hr)**

### Day 17 (Wed) — Architecture: HOA + permit pages

- **CONTENT** [03 §HOA](03-ARCHITECTURE.md): Draft `/brambleton-hoa-deck-rules` (reuse [05 Template G](05-ON-PAGE-TEMPLATES.md)). Pull real Brambleton HOA approval requirements from your project records. **(4 hr)**
- **DEV** Stage page; add to sitemap; deploy. **(1 hr)**

### Day 18 (Thu)

- **CONTENT** Draft `/one-loudoun-hoa-deck-rules`. **(4 hr)**
- **CONTENT** Draft `/lansdowne-hoa-deck-rules`. **(4 hr)**

### Day 19 (Fri)

- **CONTENT** Draft `/deck-permit-arlington-county-virginia`. Use [05 Template F](05-ON-PAGE-TEMPLATES.md). **(4 hr)**
- **CONTENT** Draft `/deck-permit-stafford-county-virginia`. **(4 hr)**

---

## Week 4 — Launch new architecture pieces + content cadence

### Day 22 (Mon)

- **DEV** Deploy: 3 HOA pages + 2 permit pages + sitemap update. **(2 hr)**
- **CONTENT** Draft `/three-season-room-northern-virginia` per [05 Template A](05-ON-PAGE-TEMPLATES.md). **(4 hr)**

### Day 23 (Tue)

- **CONTENT** Draft `/louvered-pergola-northern-virginia`. **(4 hr)**
- **CONTENT** Draft `/deck-builder-broadlands-va` (city expansion). **(4 hr)**

### Day 24 (Wed)

- **CONTENT** Draft 2 blog posts from [Phase 6 Q1 list](06-CONTENT-CALENDAR.md): #1 (Composite cost Loudoun) + #14 (Brambleton HOA approval). **(8 hr — push to Thu)**

### Day 25 (Thu)

- **CONTENT** Finish blog posts; publish. **(4 hr)**
- **DEV** Add Microsoft Clarity via GTM ([10 §Heatmap](10-CRO-PLAYBOOK.md)). **(1 hr)**
- **DEV** Add mobile sticky CTA bar ([10 §Sticky](10-CRO-PLAYBOOK.md)). **(2 hr)**

### Day 26 (Fri)

- **CONTENT** Draft 2 more blog posts from Q1 list: #5 (Trex Transcend vs Enhance) + #13 (Loudoun permit timeline). **(8 hr)**

### Weekend

- **DEV** Deploy week-4 changes to production. **(2 hr)**

---

## Week 5 (overflow buffer) — Backlink + GBP momentum

### Day 29 (Mon)

- **GBP/Nick** [09 §Outreach](09-BACKLINK-PLAYBOOK.md): Pitch 1 NoVA media outlet (Loudoun Times-Mirror or LoudounNow). Use the permit-fee-rise angle template. **(2 hr)**
- **GBP/Nick** Submit Tier 1 citations: Bing Places, Apple Business Connect, NextDoor for Business, Yelp NAP audit, BBB profile claim if not done. **(3 hr)**

### Day 30 (Tue) — Review + plan

- **DEV** Run end-to-end verification:
  - [ ] All 10 critical bugs from [01-AUDIT-FINDINGS.md](01-AUDIT-FINDINGS.md) closed
  - [ ] Schema deduplicated (FAQPage = 1, LocalBusiness = 1, @id present)
  - [ ] Favicon, manifest, theme-color all present
  - [ ] Form placeholders replaced
  - [ ] Hero preload deduped
  - [ ] BBB seal self-hosted
  - [ ] Sitemap slimmed
  - [ ] CSP report-only collecting data
  - [ ] HTTP/3 advertised
  - [ ] Microsoft Clarity collecting
  - [ ] Mobile sticky CTA live
- **DEV/Nick** Read 30-day GSC data, GA4 data, GBP data. Compare to baseline.

---

## 30-day deliverables summary

**Code/site:**
- 14 audit bugs fixed
- 5 service hubs with new Service schema
- 5 priority city pages differentiated (< 40% similarity)
- 5 new HOA pages (Brambleton, One Loudoun, Lansdowne — at minimum)
- 2 new permit pages (Arlington, Stafford)
- 2 new service pages (3-season room, louvered pergola)
- 1 new city page (Broadlands)
- 4 new blog posts
- Mobile sticky CTA + Clarity heatmaps live

**Local SEO:**
- GBP audited and optimized (Q&As, posts, photos)
- Bing Places, Apple Business Connect, BBB profile claimed/verified
- 5+ Tier 1 citations submitted

**Outreach:**
- 1 media pitch sent
- 1 financing partner application started

---

## What's NOT in 30 days (deferred to 90-day)

- Most of the 26 new pages from [03 Architecture](03-ARCHITECTURE.md) — only 8 ship in 30 days
- Most of the 100 blog topics from [06 Calendar](06-CONTENT-CALENDAR.md) — only 4 ship in 30 days
- Tier 2/3 citations
- Most backlink outreach
- Per-city video content
- Author Person pages on /team/[slug]
- Actually built 3D design tool

---

## 30-day KPIs to measure

| Metric | Baseline (today) | Day 30 target |
|---|---|---|
| GSC indexed pages | (audit) | +8–12 |
| GSC impressions (28d) | (audit) | +10–20% |
| GSC clicks (28d) | (audit) | +5–15% |
| GBP photo count | (audit) | 30+ |
| GBP review count | 41 | 46+ |
| GBP Q&As | (audit) | 10+ |
| Citations submitted | (audit) | +10 |
| Microsoft Clarity sessions | 0 | tracked |
| Schema warnings (Search Console) | (audit) | 0 |

Move to [12-90-DAY-ROADMAP.md](12-90-DAY-ROADMAP.md).
