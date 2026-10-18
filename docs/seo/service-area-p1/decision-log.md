# Decision log — service area, 18 October 2026

## Declared coverage

The public list stays the seven areas already in `BUSINESS.areaServed`: Loudoun County, Fairfax County, Prince William County, Arlington County, Alexandria, Falls Church, and Stafford County. Nothing was added for Washington DC, Maryland, Fauquier, Frederick, Clarke, Warren, or Fredericksburg.

`publishedCoverage` is true for those seven because the live site already promises them. `businessConfirmation` is pending. That status is recorded only in this document. It is not a field on `src/lib/serviceArea.js` and it is not rendered.

## Administrative distinctions

Alexandria and Falls Church are Virginia independent cities. The registry gives them `type: independent-city` and no county parent. `cityData.js` still lists them under `fairfax-county` so existing `/deck-builder-alexandria-va` and `/deck-builder-falls-church-va` lookups stay valid. The areas page shows them in an independent-city group and explains that a Fairfax mailing address is not permit authority.

Manassas and Manassas Park are independent cities. They remain in the Prince William group because that is the published grouping and their existing URLs were not retargeted. The page now says so. Fairfax city and Fairfax County stay as already published; `/deck-builder-fairfax-va` was not removed.

Community labels on the areas page now come from the original `cityData` names, so McLean, Great Falls, South Riding, and One Loudoun keep their capitals. Localities without a canonical city URL stay plain text through `getCityLink`.

## Wording that was not demonstrated

“70+ cities” counted communities and neighborhoods together. It was replaced with “Communities across Northern Virginia.” No new total was invented.

“We likely serve your area” and “surrounding Northern Virginia communities” were removed from the general statements this lot touched. A homeowner whose community is not listed is asked to call or request an estimate so availability can be confirmed.

Permit pages that mention only Loudoun, Fairfax, and Prince William were left in place. Those sentences describe a jurisdiction, not the company-wide service area.

## Schema, robots, and discovery

`areaServed` continues to be generated from `BUSINESS.areaServed`. No second LocalBusiness, review, aggregate rating, HowTo, or new FAQPage was added. The existing estimate FAQ stays.

`robots.ts` policy was not changed. Search and training user-agents already have explicit groups, and `/admin/`, `/api/`, and `/draft/` stay disallowed. `Allow: /` was already paired with those disallows. A spoofed user-agent was not treated as proof of crawler access. No WAF logs were available.

`llms.txt` already matched the seven areas and was left as the short experimental file. One summary line in `llms-full.txt` was aligned. No `/ai/summary.json` or `/ai/faq.json` was created.

No geo CLI was installed. No DataForSEO call was made. The OG card generator still contains a “70+ SERVICE AREAS” kicker; those images were not regenerated in this lot.

## Financing

Visible financing actions already lead to `/get-estimate`, `#financing-options`, `/deck-cost-calculator`, and `/deck-payment-estimator`. Lender terms were not invented. `#localbusiness` was not reintroduced.
