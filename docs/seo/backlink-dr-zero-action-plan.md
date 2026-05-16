# Backlink / DR 0 Action Plan

Date: 2026-05-16
Site: https://ldndecks.com
Tool context: Ahrefs project shows Domain Rating 0 with 103 referring domains.

## Diagnosis

Ahrefs DR 0 is not the same as "no backlinks." It usually means Ahrefs is not seeing enough followed, crawlable, authority-passing links to the root domain. Directory citations, blocked profile pages, JavaScript-only website fields, nofollow links, and low-authority domains can count as referring domains without moving DR.

## Verified Profile Checks

| Source | URL | Fetch status | Crawlable link to ldndecks.com | Notes | Action |
| --- | --- | ---: | --- | --- | --- |
| Birdeye | https://reviews.birdeye.com/loudoun-decks-builder-171818893055699 | 200 | Yes | HTML contains an anchor to `https://ldndecks.com/`. | Keep profile updated. |
| Loudoun Chamber | https://business.loudounchamber.org/list/member/loudoun-deck-30047 | 200 | Yes | HTML contains direct anchor `<a href="https://ldndecks.com" ... itemprop="url">Visit Website</a>` with no `nofollow` in the tag. ChamberMaster admin was updated on 2026-05-16 to `Loudoun Decks`, `13704 Winding Oak Cir`, `Centreville, VA 20121`; public page still showed old `Loudoun Deck` / Ashburn NAP immediately after save. | High-value backlink; recheck public page after cache/publication delay. |
| BuildZoom | https://www.buildzoom.com/contractor/loudoun-decks | 200 | No | Page exists with correct Centreville NAP, description, and photos, but fetched HTML did not include `ldndecks.com`. Public profile also shows `No active license on file` / `Unable To Verify`, which is a trust issue even if the citation is live. | Claim/update profile at BuildZoom admin, add website/social profiles, and verify license/business credentials. |
| MapQuest | https://www.mapquest.com/us/virginia/loudoun-decks-532352487 | 202 / Yext scan submitted | No | Fetched HTML did not include `ldndecks.com`. MapQuest/Yext scan on 2026-05-16 found MapQuest missing from the active scan result and only 25% listing optimization across the directory set. | Continue only to free/account claim steps unless paid Yext is approved; otherwise clean priority citations manually. |
| Houzz | https://www.houzz.com/pro/webuser-782541997/loudoun-decks | 200 | Not found as anchor | Correct profile resolves, but fetched HTML did not expose a direct anchor to `ldndecks.com`. | Confirm website field inside Houzz profile. |
| Trustpilot | https://www.trustpilot.com/review/ldndecks.com | 403 public crawler / verified in dashboard | Dashboard confirms profile content | Business profile is claimed, description is 251 words, primary category is Deck Builder, contact info is complete, and Google Business contact details are verified/synced. | Keep active; optional next step is proof of identity if desired. |
| BBB Centreville | https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241 | Verified via public page/search result | Yes, public page exposes `Visit Website` | Canonical BBB profile is `Loudoun Decks`, A+ Accredited Business, `13704 Winding Oak Cir, Centreville, VA 20121`, phone `571-655-7207`. | Keep as canonical BBB profile; no site change needed. |
| BBB Manassas | https://www.bbb.org/us/va/manassas/profile/deck-builder/ldn-decks | Not canonical | N/A | Site references have been consolidated to the Centreville BBB profile. | Do not use internally; monitor only if it appears in Ahrefs/GSC. |
| Yelp Centreville | https://www.yelp.com/biz/loudoun-decks-centreville | Verified via public page | Yes, public page exposes business website `ldndecks.com` | Claimed profile for `Loudoun Decks`, `13704 Winding Oak Cir, Centreville, VA 20121`, phone `(571) 655-7207`, category Decks & Railing. | Keep as canonical Yelp profile; no site change needed. |
| Yelp Manassas | https://www.yelp.com/biz/ldn-decks-manassas | Not canonical | N/A | Site references have been consolidated to the Centreville Yelp profile. | Do not use internally; monitor only if it appears in Ahrefs/GSC. |
| Angi | https://www.angi.com/companylist/us/va/manassas/ldn-decks | 403 | Blocked | Angi blocked crawler verification. | Manually confirm profile and website field. |

## Site Fixes Completed

- Replaced dead Houzz URL `https://www.houzz.com/pro/ldndecks` with the working Houzz profile URL:
  `https://www.houzz.com/pro/webuser-782541997/loudoun-decks`
- Updated organization `sameAs` references and social/review links that used the dead Houzz URL.
- Standardized internal Yelp references on the Centreville profile used across the rest of the site:
  `https://www.yelp.com/biz/loudoun-decks-centreville`
- Standardized internal BBB references on the Centreville BBB profile used by the BBB seal:
  `https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241`
- Verified BBB Centreville as the canonical BBB profile: public profile/search result shows `Loudoun Decks`, A+ Accredited Business, `13704 Winding Oak Cir, Centreville, VA 20121`, phone `571-655-7207`, and `Visit Website`.
- Verified Yelp Centreville as the canonical Yelp profile: public profile shows claimed `Loudoun Decks`, `13704 Winding Oak Cir, Centreville, VA 20121`, phone `(571) 655-7207`, category Decks & Railing, and website `ldndecks.com`.
- Verified Loudoun Chamber as a real crawlable backlink:
  `https://business.loudounchamber.org/list/member/loudoun-deck-30047` links directly to `https://ldndecks.com`.
  ChamberMaster admin was updated on 2026-05-16 from singular `Loudoun Deck` and Ashburn NAP to `Loudoun Decks`, `13704 Winding Oak Cir`, `Centreville, VA 20121`. The public directory page still showed the old values immediately after save, so recheck after cache/publication delay.
- Verified legacy indexed URLs preserve redirect equity:
  `https://www.ldndecks.com/about-loudoun-deck-company/` -> `https://ldndecks.com/about`,
  `https://www.ldndecks.com/deck-builder-in-loudoun-county/` -> `https://ldndecks.com/near-you/loudoun-county`,
  `https://www.ldndecks.com/contacts/` -> `https://ldndecks.com/contact`.
- Submitted the MapQuest/Yext scan on 2026-05-16. The scan reported 25% listing optimization for Loudoun Decks and revealed multiple missing or incorrect citations that should be cleaned before expecting Ahrefs/local entity signals to improve.

## Ahrefs Checks To Run

In Ahrefs, open Backlinks / Referring Domains and apply:

- `Dofollow`
- `Live`
- `One link per domain`
- `DR > 10`
- Target contains `ldndecks.com`

Export the filtered list. If it is close to empty, DR 0 is explained by weak/non-followed/non-crawlable backlinks.

## External Profile Cleanup

Use one canonical website URL everywhere:

```text
https://ldndecks.com/
```

Update or verify these listings:

- BBB: Centreville profile is canonical and verified; keep site references pointed there.
- Loudoun Chamber: admin profile updated on 2026-05-16 to `Loudoun Decks`, `13704 Winding Oak Cir`, `Centreville, VA 20121`; verify the public directory page updates. If it still shows Ashburn after 24-48 hours, send the Chamber cleanup request.
- Yelp: Centreville profile is canonical and verified; keep site references pointed there.
- Houzz: confirm the profile website field is present; the old `/pro/ldndecks` URL should no longer be used.
- BuildZoom: claim profile and add website field, social profiles, business description, service categories, project photos, and license verification. The current public trust issue is not just backlink-related; `No active license on file` can reduce conversion confidence.
- MapQuest/Yext: scan submitted on 2026-05-16. The `Fix all errors` / `Fix my listings now` path returned to a Yext scan/contact flow rather than a direct free correction screen. Do not purchase paid Yext without approval. Use the scan output as a citation cleanup map: MapQuest, Bing, Citysearch, Foursquare, Insider Pages, eLocal, Tupalo, Navmii, Opendi, iGlobal/iBegin are missing; Facebook has a phone/name variant; MerchantCircle, EZlocal, CitySquares, USCity.net, GoLocal247, and AroundMe show old `Prime Solutions` / Ashburn-style contamination; ShowMeLocal, Where To?, and Cylex use name variants.
- Angi: confirm website field and exact NAP.
- Birdeye: keep current profile because it has a crawlable website link.
- Trustpilot: profile is claimed and usable. Dashboard confirms `ldndecks.com`, email `office@ldndecks.com`, phone `+1 (571) 655-7207`, address `13704 Winding Oak Cir, Centreville, VA 20121`, primary category `Deck Builder`, and secondary categories `Carpenter`, `Carport and Pergola Builder`, `Construction Company`, `General Contractor`.

## Link Building Plan

Target 10-15 real followed links in 60 days:

1. Manufacturer profiles: Trex, TimberTech/AZEK, Deckorators, Fiberon.
2. Local chambers: Loudoun Chamber, Fairfax Chamber, Prince William Chamber.
3. Supplier/vendor partner pages with project photos.
4. Local sponsorship pages for schools, sports, HOA/community events.
5. Guest resources for realtors, home inspectors, HOA management companies.
6. Local press/case studies around before-after deck transformations.
7. Linkable assets: Northern Virginia Deck Cost Guide, Permit Checklist, HOA Deck Rules Guide, Deck Cost Calculator.

## Do Not Do Yet

- Do not disavow links unless there is clear evidence of spam or manual action risk.
- Do not buy generic directory backlinks.
- Do not chase DR with low-quality guest post farms.

## Success Criteria

- Ahrefs filtered dofollow/live export shows at least 10 authority-passing referring domains.
- All major profiles use the same canonical URL and NAP.
- Loudoun Chamber remains live with a direct website link and corrected name/NAP.
- Dead Houzz URL no longer appears in the codebase.
- DR should begin moving after Ahrefs recrawls the improved profile links and new editorial links.
