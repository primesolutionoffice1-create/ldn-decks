# Domain Authority / Reputation Sprint

Date: 2026-05-17
Domain: https://ldndecks.com

## Current Read

Ahrefs showed Domain Rating 0 while the project had 103 referring domains. That is plausible because DR is based on the strength and distribution of unique referring domains, not the raw count of citations. Ahrefs explains that DR considers unique linking domains, the authority of those domains, how many other domains they link out to, and then maps the result to a 0-100 scale.

Local evidence now supports the same diagnosis:

- Common Crawl found `ldndecks.com` in the crawl, but the domain is still below the ranking threshold for PageRank-style metrics in `cc-main-2026-jan-feb-mar`.
- Loudoun Chamber is now publicly corrected to `Loudoun Decks`, Centreville NAP, and has a direct `Visit Website` link to `ldndecks.com`.
- Trustpilot is claimed, lists `ldndecks.com`, has 4 reviews, and shows contact info matching the canonical NAP.
- BBB Centreville is canonical, A+ accredited, and exposes `Visit Website`.
- BuildZoom is useful for trust, but still has a public license-warning issue.

## Confirmed Authority Assets

| Source | Status | Authority value |
| --- | --- | --- |
| Loudoun Chamber | Public page corrected and linking to `ldndecks.com` | High local authority/entity signal |
| BBB Centreville | A+ Accredited, canonical NAP, website link | High trust signal |
| Trustpilot | Claimed profile, 4 reviews, website/contact info present | Reputation and brand proof |
| Yelp Centreville | Claimed canonical profile | Local citation and review trust |
| Birdeye | Direct website link present | Review/citation trust |

## Reputation Problems To Fix

| Problem | Why it matters | Next action |
| --- | --- | --- |
| BuildZoom license warning | Public trust issue and may reduce conversion confidence | Contact BuildZoom Contractor Relations/support and push license verification for `2705191673` |
| Growcycle old Ashburn address | Conflicts with canonical Centreville NAP | Claim/update or suppress old record |
| Nextdoor name variant | Uses `loudoun decks buildin` and older email pattern | Claim/update page if account access is available |
| Prime Solutions/Ashburn contamination | Splits entity signals across business identities | Continue manual citation cleanup from Yext scan |

## Decisions Made

- Do not chase generic directory volume. More low-authority citations will not reliably move DR.
- Prioritize followed/crawlable links from local institutions, manufacturers, suppliers, sponsors, and real project partners.
- Use `https://ldndecks.com/deck-cost-calculator` and `https://ldndecks.com/northern-virginia-deck-cost-report-2026` as outreach assets because they are useful to realtors, HOAs, suppliers, and local homeowner resources.
- Add verified authority profiles to Schema.org `sameAs` so Google/AI crawlers see one entity graph across BBB, Trustpilot, Chamber, Yelp, Houzz, Google, and social profiles.

## 30-Day Authority Sprint

1. BuildZoom verification: remove `No active license on file`.
2. Manufacturer profiles: Trex, TimberTech/AZEK, Deckorators, Fiberon.
3. Supplier links: ask lumber/decking suppliers for preferred contractor pages or project showcases.
4. Local institution links: Fairfax Chamber, Prince William Chamber, Loudoun Chamber event/sponsorship pages.
5. Realtor/home inspector outreach: pitch the deck cost calculator and permit guide as homeowner resources.
6. Citation cleanup: Growcycle, Nextdoor, MerchantCircle, EZlocal, Brownbook, Cylex, ShowMeLocal.

## Measurement

Run Ahrefs weekly with:

- `Dofollow`
- `Live`
- `One link per domain`
- `DR > 10`
- target contains `ldndecks.com`

Success is not just total referring domains. The target is 10-15 real authority-passing referring domains and a clean canonical NAP/entity footprint.
