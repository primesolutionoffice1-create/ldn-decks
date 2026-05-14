# Phase 8 — Technical SEO Fixes (Exact Code Diffs)

Maps every issue from [01-AUDIT-FINDINGS.md](01-AUDIT-FINDINGS.md) to a specific file in your codebase with the diff or schema snippet to ship.

Every fix references the existing component or file path so you can implement directly.

---

## §F1 — Fix duplicate FAQPage JSON-LD

**Issue:** `/deck-builder-ashburn-va`, `/deck-builder-leesburg-va`, `/deck-builders-loudoun`, `/services/porches/screened-porch`, `/deck-repair-loudoun-county` each emit byte-identical `FAQPage` JSON-LD twice.

**Likely cause:** Two FAQ components mounted on the same page (e.g., `FAQ.jsx` + `ServicesFAQ.jsx`), each calling `<JsonLd />` independently.

**Fix steps:**

1. **Audit which FAQ components are mounted.** Grep for FAQ component imports in the affected pages:
   ```
   grep -nE "import.*FAQ|<FAQ|<ServicesFAQ|<ProcessFAQ|<ContactFAQ|<WhyChooseFAQ|<FAQCategorized" \
     src/app/deck-builder-ashburn-va/page.* \
     src/app/deck-builder-leesburg-va/page.* \
     src/app/deck-builders-loudoun/page.* \
     src/app/services/porches/screened-porch/page.* \
     src/app/deck-repair-loudoun-county/page.*
   ```

2. **Add a `withSchema` prop to FAQ components.** Only the first-mounted FAQ on a page emits schema:
   ```jsx
   // src/components/FAQ.jsx
   export default function FAQ({ items, withSchema = true, ...rest }) {
     return (
       <>
         {withSchema && <JsonLd schema={buildFAQPageSchema(items)} />}
         <FAQRender items={items} {...rest} />
       </>
     );
   }
   ```

3. **At each affected page, set `withSchema={false}` on the secondary FAQ.** Keep it on the primary (the one whose Qs are most page-relevant).

4. **Verify**: `curl -sL https://ldndecks.com/deck-builder-ashburn-va | grep -c '"@type":"FAQPage"'` should return 1.

**Alternative cleaner fix:** Centralize FAQ schema generation in a single page-level `<PageSchema />` component that takes all schema data as props. Components then just render UI without their own JSON-LD.

---

## §F2 — Fix competing LocalBusiness types on city pages

**Issue:** `/deck-builder-ashburn-va` and `/deck-builder-leesburg-va` emit BOTH `GeneralContractor` (from root layout via `StructuredData.jsx`) AND `HomeAndConstructionBusiness` (from `LocalBusinessSchema.jsx`). Different phone formats.

**Fix:** Drop `LocalBusinessSchema.jsx` from city pages. The root `GeneralContractor` block is canonical. Override areaServed at the page level.

**Edit `src/app/deck-builder-ashburn-va/page.js`:**

```diff
- import LocalBusinessSchema from '@/components/LocalBusinessSchema';
+ import { JsonLd } from '@/components/JsonLd';
+ import { buildAshburnServiceSchema } from '@/lib/schemas/cityService';

  ...
- <LocalBusinessSchema city="Ashburn" county="Loudoun County" />
+ <JsonLd schema={buildAshburnServiceSchema()} />
```

**`src/lib/schemas/cityService.js`** (NEW):

```js
import { ORG_ID } from '@/lib/business';

export function buildCityServiceSchema({ city, county, slug, siblings = [], lowPrice = 8000, highPrice = 75000 }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Custom Deck Building in ${city}, VA`,
    "provider": { "@id": ORG_ID },
    "serviceType": "Custom Deck Construction",
    "areaServed": [
      { "@type": "City", "name": city, "containedInPlace": { "@type": "AdministrativeArea", "name": `${county} County, VA` } },
      ...siblings.map((s) => ({ "@type": "City", "name": s }))
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": String(lowPrice),
      "highPrice": String(highPrice)
    }
  };
}

export const buildAshburnServiceSchema = () => buildCityServiceSchema({
  city: "Ashburn", county: "Loudoun", slug: "ashburn",
  siblings: ["Brambleton", "Broadlands", "Lansdowne"],
  lowPrice: 10000, highPrice: 85000
});
// ... one helper per city
```

**Verify**: After deploy, fetch `/deck-builder-ashburn-va`, check no `HomeAndConstructionBusiness` block.

---

## §F3 — Add missing `@id` for Organization and WebSite

**Issue:** Homepage `WebPage` block references `https://ldndecks.com/#organization` and `https://ldndecks.com/#website` — neither `@id` is defined anywhere on the page.

**Fix:** Update `src/lib/business.js` to include `@id` on the org block, and add a `WebSite` block to root layout via `StructuredData.jsx`.

**Edit `src/lib/business.js`:**

```diff
  export const ORG_URL = "https://ldndecks.com";
+ export const ORG_ID = `${ORG_URL}/#organization`;
+ export const WEBSITE_ID = `${ORG_URL}/#website`;

  export function buildOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
+     "@id": ORG_ID,
      "name": "Loudoun Decks",
      "url": ORG_URL,
      "telephone": "+15716557207",
      "email": "office@ldndecks.com",
      "image": `${ORG_URL}/images/logo.webp`,
      "logo": `${ORG_URL}/images/logo.webp`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13704 Winding Oak Cir",
        "addressLocality": "Centreville",
        "addressRegion": "VA",
        "postalCode": "20121",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.8462,
        "longitude": -77.4283
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "07:00", "closes": "19:00" }
      ],
      "priceRange": "$$$",
      "sameAs": [
        "https://www.facebook.com/ldndecks",
        "https://www.instagram.com/ldndecks",
        "https://www.youtube.com/@ldndecks",
        "https://www.linkedin.com/company/loudoun-decks",   // NEW — add LinkedIn
        "https://www.houzz.com/pro/ldndecks",
        "https://www.yelp.com/biz/loudoun-decks-centreville",
        "https://www.bbb.org/us/va/centreville/profile/...", // NEW — add BBB profile
        "https://www.google.com/maps/place/?q=place_id:..."  // NEW — add GMB place_id URL
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
        { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
        { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
        { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
        { "@type": "AdministrativeArea", "name": "Stafford County, VA" }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "TrexPro Platinum Installer",
          "credentialCategory": "certification",
          "recognizedBy": { "@type": "Organization", "name": "Trex Company, Inc." }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Class A Virginia Contractor License",
          "credentialCategory": "license",
          "recognizedBy": { "@type": "Organization", "name": "Virginia Department of Professional and Occupational Regulation" }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "41",
        "bestRating": "5"
      },
      "review": [
        // Pull 5 real Google reviews — see template below
      ]
    };
  }

+ export function buildWebSiteSchema() {
+   return {
+     "@context": "https://schema.org",
+     "@type": "WebSite",
+     "@id": WEBSITE_ID,
+     "url": ORG_URL,
+     "name": "Loudoun Decks",
+     "publisher": { "@id": ORG_ID },
+     "potentialAction": {
+       "@type": "SearchAction",
+       "target": {
+         "@type": "EntryPoint",
+         "urlTemplate": `${ORG_URL}/search?q={search_term_string}`
+       },
+       "query-input": "required name=search_term_string"
+     }
+   };
+ }
```

**Edit `src/components/StructuredData.jsx`** to emit both blocks in a single `@graph`:

```diff
+ import { buildOrganizationSchema, buildWebSiteSchema } from '@/lib/business';

  export default function StructuredData() {
+   const graph = {
+     "@context": "https://schema.org",
+     "@graph": [
+       buildOrganizationSchema(),
+       buildWebSiteSchema()
+     ]
+   };
    return (
-     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
+     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
    );
  }
```

**Verify:** `curl -sL https://ldndecks.com | grep -E '"@id":\s*"https://ldndecks.com/#(organization|website)"'` should return both.

---

## §F4 — Fix form placeholder leakage

**Issue:** Server-rendered HTML on homepage contains `placeholder="(555) 123-4567"`, `placeholder="you@example.com"`, `placeholder="123 Main St"`.

**Edit `src/components/ContactForm.jsx`:**

```diff
- <input type="tel" placeholder="(555) 123-4567" ... />
+ <input type="tel" placeholder="(571) 555-0100" aria-label="Your phone number" ... />

- <input type="email" placeholder="you@example.com" ... />
+ <input type="email" placeholder="name@example.com" aria-label="Your email" ... />

- <input type="text" placeholder="123 Main St" ... />
+ <input type="text" placeholder="Street address" aria-label="Your street address" ... />
```

(Or implement floating-label pattern with no placeholder text.)

---

## §F5 — Fix favicon and add manifest

**Issue:** `favicon.ico`, `manifest.json`, `site.webmanifest` all 404. No `theme-color`.

1. **Add `app/icon.ico`** (16×16 + 32×32 multi-resolution ICO file generated from your logo).

2. **Add `app/manifest.ts`** (Next.js convention auto-generates `/manifest.webmanifest`):

```ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Loudoun Decks',
    short_name: 'Loudoun Decks',
    description: 'TrexPro Platinum deck builder serving Northern Virginia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a3a5c',
    icons: [
      { src: '/icon.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
}
```

3. **Add `theme-color` meta in `src/app/layout.js`:**

```diff
  export const metadata = {
    metadataBase: new URL(SITE_URL),
+   themeColor: '#1a3a5c',
    ...
  };
```

(Or in modern Next: use `viewport` export with `themeColor` — refer to current Next.js docs for App Router conventions.)

---

## §F6 — Differentiate Ashburn ↔ Leesburg city copy

See [07-copy/city-page-template.md](07-copy/city-page-template.md) — fill in the per-city differentiation table for Ashburn and Leesburg with their distinct subdivisions, HOAs, landmarks, cost factors, timeline notes, material preferences, and design considerations.

After deploy, run uniqueness check:

```bash
python3 -c "
import re, sys
from difflib import SequenceMatcher
def text(p):
    h = open(p).read()
    h = re.sub(r'<script.*?</script>','',h,flags=re.S)
    h = re.sub(r'<style.*?</style>','',h,flags=re.S)
    return re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',h)).strip()
import urllib.request
def fetch(u):
    req = urllib.request.Request(u, headers={'User-Agent':'Mozilla/5.0'})
    return urllib.request.urlopen(req).read().decode('utf-8')
a = text(fetch('https://ldndecks.com/deck-builder-ashburn-va').encode().decode())
b = text(fetch('https://ldndecks.com/deck-builder-leesburg-va').encode().decode())
print(f'Similarity: {SequenceMatcher(None,a,b).ratio():.1%}')
"
```

Target: ≤ 40%.

---

## §F7 — Add 7 cities to sitemap (or remove from llms.txt)

**Decision:** build pages for high-affluence cities currently missing from sitemap.

**Add to sitemap (build pages first):**
- `/deck-builder-broadlands-va`
- `/deck-builder-lansdowne-va`
- `/deck-builder-annandale-va`
- `/deck-builder-middleburg-va`

**Remove from `llms.txt`** if no page exists:
- Aldie, Lovettsville, Hamilton, Hillsboro, Round Hill, Waterford

**Edit `src/app/llms.txt`:** trim the area-served list to match the actual sitemap. If you keep these, build the pages within 30 days.

---

## §F8 — Fix duplicate hero image preload

**Issue:** `/home-page-ldn.webp` appears in two `<link rel="preload">` tags in homepage HTML.

**Fix:** Find the second source.

```bash
grep -nE 'home-page-ldn\.webp.*preload|preload.*home-page-ldn\.webp' \
  src/app/page.* \
  src/app/layout.* \
  src/components/Hero.* \
  2>/dev/null
```

Likely culprit: a `<link rel="preload">` tag in `src/app/page.js` AND a Next.js `<Image priority>` auto-injected preload. Remove the manual `<link>` — Next handles it.

---

## §F9 — Self-host BBB seal

**Issue:** `https://seal-dc-easternpa.bbb.org/seals/blue-seal-200-65-bbb-236091241.png` is preloaded from third-party origin on every page.

**Fix:**

1. Download the seal image to `public/badges/bbb-a-plus-seal.png`.
2. Replace the preload reference with a local path.
3. Wrap in `<a href="https://www.bbb.org/us/va/centreville/profile/...">` linking your actual BBB profile.

**Edit `src/components/TrustLogos.jsx`** (or wherever the seal lives):

```diff
- <link rel="preload" as="image" href="https://seal-dc-easternpa.bbb.org/seals/blue-seal-200-65-bbb-236091241.png" />
+ <link rel="preload" as="image" href="/badges/bbb-a-plus-seal.png" />

- <img src="https://seal-dc-easternpa.bbb.org/seals/blue-seal-200-65-bbb-236091241.png" ... />
+ <a href="https://www.bbb.org/us/va/centreville/profile/general-contractor/loudoun-decks-..."
+    target="_blank" rel="noopener">
+   <img src="/badges/bbb-a-plus-seal.png" alt="BBB Accredited Business — A+ rating" width="200" height="65" loading="lazy" />
+ </a>
```

---

## §F10 — Title entity normalization

**Issue:** Homepage title contains `★` and `&amp;`.

**Fix in `src/lib/seo.js` `buildMetadata()`:**

Decide globally:
- **Option A** (recommended): drop `★` and `&amp;` entirely; use `5-star` and `and`/`+`.
- **Option B**: keep `★` (it's safe in modern Google) but normalize `&amp;` to `+` or `and`.

**A/B test:** ship Option A on half the city pages and `★` on the other half; measure CTR over 60 days in GSC.

---

## §F11 — Add CSP header

**Edit `next.config.mjs`:**

```diff
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
+         {
+           // Start with Report-Only; promote to enforcing after 30 days clean
+           key: 'Content-Security-Policy-Report-Only',
+           value: [
+             "default-src 'self'",
+             "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.googletagservices.com https://analytics.ahrefs.com https://va.vercel-scripts.com",
+             "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
+             "font-src 'self' https://fonts.gstatic.com data:",
+             "img-src 'self' data: blob: https://*.googleusercontent.com https://www.google-analytics.com https://*.google.com https://*.googletagmanager.com",
+             "connect-src 'self' https://www.google-analytics.com https://analytics.ahrefs.com https://*.vercel-insights.com",
+             "frame-src 'self' https://www.google.com https://www.youtube.com",
+             "object-src 'none'",
+             "base-uri 'self'",
+             "form-action 'self'",
+             "report-uri /api/csp-report"
+           ].join('; ')
+         }
        ]
      },
      ...
    ];
  }
```

Add `app/api/csp-report/route.ts` to log violations for 30 days; review and tighten before flipping to enforcing.

---

## §F12 — Slim sitemap (remove deprecated fields)

**Edit `src/app/sitemap.js`:** remove `priority` and `changefreq` from every entry.

```diff
- { url: `${SITE}/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }
+ { url: `${SITE}/${slug}`, lastModified: new Date() }
```

Google has officially ignored both since at least 2017. Keep `lastModified` — that's the only signal Google still uses.

---

## §F13 — HTTP/3

Verify Vercel project is on a plan that enables HTTP/3 (Pro+). In Vercel project settings, confirm "Edge Network" / "HTTP/3" is enabled. Re-test:

```bash
curl -I -v --http3 https://ldndecks.com 2>&1 | head -20
```

If `Alt-Svc: h3=":443"` appears in headers, you're good.

---

## §F14 — Verify image-sitemap and news-sitemap are programmatic, not static

```bash
grep -rE "sitemap.*image|image.*sitemap" src/app/sitemap*
grep -rE "news.?sitemap" src/app/
```

If these are static files in `public/`, you'll have indexation gaps as new content lands. Either:
- (a) Generate them in `app/image-sitemap.xml/route.ts` and `app/news-sitemap.xml/route.ts`, or
- (b) Reference image entries inside the main sitemap via `<image:image>` extension.

---

## §S1 — Sitemap diff after Phase 3 architecture additions

Per [03-ARCHITECTURE.md](03-ARCHITECTURE.md), 26 new pages launching. **Sitemap addition:**

```js
// src/app/sitemap.js — add to TIER2 (weekly)
const newCityPages = [
  '/deck-builder-broadlands-va',
  '/deck-builder-lansdowne-va',
  '/deck-builder-annandale-va',
  '/deck-builder-middleburg-va',
  '/deck-builder-fairfax-station-va',
  '/deck-builder-nokesville-va',
  '/deck-builder-aquia-harbour-va',
];

// TIER2 (weekly)
const newServicePages = [
  '/three-season-room-northern-virginia',
  '/louvered-pergola-northern-virginia',
  '/multi-level-decks-northern-virginia',
  '/second-story-decks-northern-virginia',
  '/pool-decks-northern-virginia',
  '/services/rooftop-decks-northern-virginia',
  '/low-maintenance-decks-northern-virginia',
  '/pet-friendly-decks-northern-virginia',
  '/deck-rot-repair-northern-virginia',
  '/deck-railing-replacement-northern-virginia',
  '/deck-board-replacement-northern-virginia',
  '/annual-deck-inspection-program',
];

// TIER3 (monthly)
const newComparisonPages = [
  '/pergola-vs-pavilion-vs-gazebo',
  '/covered-deck-vs-pergola-vs-screened-porch',
  '/four-season-room-vs-screened-porch-vs-sunroom',
  '/composite-vs-wood-deck-cost-comparison-virginia',
  '/trex-pro-platinum-vs-non-certified-installer',
  '/licensed-vs-unlicensed-deck-contractor-virginia',
  '/aluminum-vs-cable-vs-glass-railing-comparison',
];

// TIER1 (daily)
const newCalculatorPages = [
  '/deck-payment-estimator',
];

// TIER2 (weekly)
const newPermitPages = [
  '/deck-permit-arlington-county-virginia',
  '/deck-permit-stafford-county-virginia',
  '/deck-permit-city-of-fairfax',
  '/deck-permit-city-of-falls-church',
  '/deck-permit-city-of-alexandria',
];

const newHOAPages = [
  '/brambleton-hoa-deck-rules',
  '/one-loudoun-hoa-deck-rules',
  '/lansdowne-hoa-deck-rules',
  '/stone-ridge-hoa-deck-rules',
  '/belmont-country-club-hoa-deck-rules',
  '/ashburn-village-hoa-deck-rules',
];

// TIER3 (monthly) — county cost pages
const newCountyCostPages = [
  '/deck-cost-loudoun-county',
  '/deck-cost-fairfax-county',
  '/deck-cost-prince-william-county',
  '/deck-cost-arlington-county',
];

// TIER3 (monthly) — design pages
const newDesignPages = [
  '/modern-deck-designs-northern-virginia',
  '/craftsman-deck-designs-virginia',
  '/coastal-deck-designs-virginia',
  '/transitional-deck-designs-northern-virginia',
  '/deck-color-trends-2026',
  '/built-in-bench-seating-deck-ideas',
];
```

---

## §S2 — Robots.txt additions

Confirm `src/app/robots.js` AI-bot allowlist still passes. Add explicit `Allow:` for `/api/og/*` (if you generate dynamic OG images via API route) and `Disallow:` for any new admin/draft path.

---

## §S3 — Redirects to add for new architecture

If you rename `/services/gazebo-pergola` to `/services/pergola`:

```js
// next.config.mjs redirects
{ source: '/services/gazebo-pergola', destination: '/services/pergola', permanent: true }
```

If you sunset `/showcase/rooftop-deck-washington-dc` and replace with `/services/rooftop-decks-northern-virginia`:

```js
{ source: '/showcase/rooftop-deck-washington-dc', destination: '/services/rooftop-decks-northern-virginia', permanent: true }
```

---

## Verification checklist after shipping

```bash
# 1. Schema duplicates
for url in \
  "https://ldndecks.com/deck-builder-ashburn-va" \
  "https://ldndecks.com/deck-builder-leesburg-va" \
  "https://ldndecks.com/deck-builders-loudoun" \
  "https://ldndecks.com/services/porches/screened-porch" \
  "https://ldndecks.com/deck-repair-loudoun-county"; do
  echo -n "$url FAQPage count: "
  curl -sL "$url" | grep -c '"@type":"FAQPage"'
done
# Each should return 1.

# 2. Single LocalBusiness type per page
curl -sL https://ldndecks.com/deck-builder-ashburn-va | grep -oE '"@type":"(GeneralContractor|HomeAndConstructionBusiness|LocalBusiness)"' | sort | uniq -c
# Should show 1 GeneralContractor (referenced via @id) — no HomeAndConstructionBusiness.

# 3. @id presence
curl -sL https://ldndecks.com | grep -E '"@id":\s*"https://ldndecks.com/#(organization|website)"' | wc -l
# Should be ≥ 2.

# 4. Form placeholders gone
curl -sL https://ldndecks.com | grep -E '\(555\) 123-4567|you@example\.com|123 Main St'
# Should return 0 lines.

# 5. Favicon and manifest
curl -sI https://ldndecks.com/favicon.ico | head -1
curl -sI https://ldndecks.com/manifest.webmanifest | head -1
# Both should return 200.

# 6. Hero preload deduped
curl -sL https://ldndecks.com | grep -c 'rel="preload".*home-page-ldn'
# Should return 1.

# 7. BBB seal self-hosted
curl -sL https://ldndecks.com | grep -c 'seal-dc-easternpa\.bbb\.org'
# Should return 0.

# 8. CSP report-only present
curl -sI https://ldndecks.com | grep -i 'content-security-policy'
# Should show CSP-Report-Only.

# 9. Ashburn ↔ Leesburg uniqueness
# Run the difflib script in §F6.
# Target: < 40% similarity.

# 10. Schema validation
# Manually paste any updated page into:
#   - https://validator.schema.org/
#   - https://search.google.com/test/rich-results
```

Move to [Phase 9 — Backlinks](09-BACKLINK-PLAYBOOK.md).
