# Service-area inventory

Verified 18 October 2026 against `origin/main` at `f782f17d` and the public HTML of https://ldndecks.com. Method: repository read plus HTTP GET. This file records the pre-change state and the change made in this lot.

| URL | Source | Text before | Change | Acceptance check |
| --- | --- | --- | --- | --- |
| `/` | `src/components/Hero.jsx`, `Hero.module.css` | One `h1` contained two spans. CSS hid the Northern Virginia sentence below 768px and showed a different sentence naming only Loudoun, Fairfax, and Prince William. | One `h1`: “Custom Deck Builder Near You in Northern Virginia.” Visible subtitle, coverage sentence, and “View all service areas” link at every breakpoint. | Same H1 string in the DOM. No `titleShort`. Coverage line visible. Estimate and phone controls remain. |
| `/` title | `src/app/page.tsx` | `Custom Deck Builder in Northern Virginia \| Loudoun Decks` | Unchanged. | Exact title. |
| `/` | `src/components/HomeQuickLinks.jsx` | “70+ cities across Loudoun, Fairfax & Prince William.” | Card names the seven declared areas. | No “70+”. No three-county-only description. |
| `/contact` | `src/app/contact/page.js`, `ContactForm.jsx` | Visible copy and the 139-character description already named all seven areas. | Unchanged. | Stafford and Falls Church remain. Form field names unchanged. |
| `/get-estimate` | `src/app/get-estimate/page.js` | FAQ used `formatServiceArea()`. A footer line named five counties and omitted Alexandria and Falls Church. | Footer line is “Serving Northern Virginia” plus a visible link to `/areas-we-serve`. | FAQ still uses the shared formatter. The five-county line is gone. |
| `/areas-we-serve` | `src/app/areas-we-serve/page.js` | “70+ cities.” Intro named five counties and said unlisted cities were likely served. Alexandria and Falls Church rendered under Fairfax from slug title case. Stafford was missing from the hub list. | “Communities across Northern Virginia.” Independent-city group. Proper names from `cityData`. Stafford hub. Permit-authority note. | No “70+”. McLean, Great Falls, South Riding, One Loudoun. Stafford hub. Existing city URLs only. |
| `/deck-financing` | `src/app/deck-financing/page.js` | CTAs go to `/get-estimate`, `#financing-options`, the cost calculator, and the payment estimator. Provider `@id` is `#organization`. | No copy change. | No `#localbusiness`. Estimate path remains. |
| `/press` | `src/app/press/page.js` | “70+ cities served across 5 Northern Virginia counties.” | Replaced with the declared area. The three-county permit-coordination bullet stays. | No undemonstrated city count. |
| `/referral-partners` | `src/app/referral-partners/page.js` | “and surrounding Northern Virginia communities.” | Shared coverage sentence. Metadata names the seven areas. | No “surrounding” expansion. |
| `/deck-resurfacing-northern-virginia` | page source | Serving line omitted Falls Church and Stafford. | Shared coverage sentence. The existing price claim was not edited. | Declared areas present. |
| `public/llms.txt` | existing file | Already named Alexandria, Falls Church, and Stafford. | Unchanged. | Still factual and without a street address. |
| `public/llms-full.txt` | summary line | Five counties only. | Summary line now includes Alexandria and Falls Church. | No private address. |
| Footer and header | `Footer.jsx`, `Header.jsx` | “Areas We Serve” links to the hub. Financing pill remains. | No menu directory of every community. | Hub still holds the full list. |

Blog and permit pages that name Loudoun, Fairfax, and Prince William for a specific jurisdiction were not bulk-edited.

Schema `areaServed` already comes from `BUSINESS.areaServed` in `src/lib/business.js`. This lot does not add a second business entity, reviews, ratings, HowTo, or FAQPage markup.
