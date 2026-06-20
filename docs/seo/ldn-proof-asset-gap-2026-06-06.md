# LDN Decks — Proof Asset & Trust Gap Analysis
**Date:** 2026-06-06 | **Hour:** 7-8

---

## Current Proof Asset Inventory

| Asset Type | Count | Location | Notes |
|---|---|---|---|
| Project photos (img01–img97) | 91 files | `public/images/img*.jpeg/jpg/webp` | Deck project portfolio — substantial |
| Blog article images | 113 files | `public/images/blog-*.png` | Good supporting content visuals |
| Standalone site images | 300 total (public root) | `public/*.jpg/webp/png` | Includes OG defaults, logos, hero |
| Showcase/gallery page | EXISTS | `/showcase` | Page confirmed present |
| Before-and-after page | EXISTS | `/before-and-after` | Page confirmed present |
| Reviews page | EXISTS | `/reviews` | Trust hub present |
| BBB page | EXISTS | `/bbb-accredited-deck-builder-virginia` | |
| Yelp page | EXISTS | `/ldn-decks-reviews-yelp` | |
| Lead magnet (permit checklist) | EXISTS | `/lead-magnets/nova-deck-permit-checklist-2026` | Linked from thank-you page |

---

## Post-Conversion Trust Path (from /thank-you)

Links on `/thank-you` page — all verified present:
- `/reviews` — public review hub ✓
- `/showcase` — project gallery ✓
- `/before-and-after` — before/after evidence ✓
- `/lead-magnets/nova-deck-permit-checklist-2026` — free checklist download ✓

**All post-conversion trust links resolve.** No 404 risk on thank-you path.

---

## Proof Asset Gaps — By Revenue Impact

| Gap | Revenue Impact | What's Missing | Priority |
|---|---|---|---|
| **No project photos with city/community tags** | HIGH | "Ashburn deck" or "Great Falls deck" image labels missing; city pages can't show locally-relevant project photos | HIGH |
| **No video testimonials or before/after video** | HIGH | 91 photos but zero embedded video walkthrough; video is top trust signal for $50k+ decisions | HIGH |
| **No named homeowner testimonials with project details** | HIGH | Review hub exists but no on-page testimonials with "$X project in [City]" format for high-ticket trust | HIGH |
| **No BBB star rating widget or badge embedded in hero/estimate page** | MEDIUM | BBB page exists but BBB badge not confirmed in hero section | MEDIUM |
| **No project cost transparency (with photo)** | MEDIUM | "16x20 deck in Ashburn — $34,500 final cost — here's what you get" style content | MEDIUM |
| **No manufacturer certification badges** | MEDIUM | Trex Platinum Partner status described in text but badge/logo not prominent on estimate page | MEDIUM |
| **No Google review count in hero (real-time)** | MEDIUM | Trust badge exists in Hero but shows text-only (no dynamic star/count display confirmed) | MEDIUM |
| **No project timeline story content** | LOW | "From permit to finish: 6 weeks" narrative content builds trust for hesitant buyers | LOW |
| **No HOA approval letter samples** | LOW | "We handled HOA review for 3 Broadlands projects" — anonymized evidence of expertise | LOW |

---

## Top 5 Proof Asset Actions (ranked by conversion impact)

| Rank | Action | Type | Effort | Impact |
|---|---|---|---|---|
| 1 | Tag 10 project photos with city name in alt text and file name — "ashburn-trex-deck-ldn-decks.jpg" | Image rename + alt text | 1 hour | HIGH — local SEO + trust |
| 2 | Add one "real project cost card" to estimate page — photo + city + project type + price range | Content | 2 hours | HIGH — eliminates price anxiety |
| 3 | Add Trex Platinum Partner badge to /get-estimate and hero | Design | 30 min | MEDIUM — manufacturer authority |
| 4 | Request 3 named homeowner testimonials with project details from Jobber records | Outreach | 1 hour | MEDIUM — E-E-A-T signal |
| 5 | Add Google review count to Hero as text ("Trusted by 47+ Northern Virginia homeowners") | Copy | 15 min | MEDIUM — instant social proof |

**NOTE:** Review count is 47 per `business.js` last update. Verify current GBP count before publishing any number.

---

## Image Alt Text Audit — Quick Win

The 91 project images (img01–img97) use generic numbered names. For high-value pages:
- Rename `img19.jpeg` → `trex-composite-deck-ashburn-va.jpeg` style
- Update `alt` text to include: material (Trex/composite/wood), project type, location
- This is a single-file pattern change repeated 10–20 times for top images

```
```text
Recommended change: Rename and re-alt 10 highest-traffic project images
Reason: Generic img01-style names carry zero SEO value; city+material alt text drives image SEO
Expected impact: Image pack visibility for "[material] deck [city]" queries
Risk level: LOW — no page routes affected, only image files
Rollback plan: Keep original copies before rename
Approval required: YES
```
```
