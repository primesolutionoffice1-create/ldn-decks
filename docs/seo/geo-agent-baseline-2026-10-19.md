# GEO agent baseline — 19 October 2026

The cost–warranty–reflow lot stays closed at `a8a63a34` (PR #223) and `3ae7b79b` (PR #224). This file does not reopen it. It records what the GEO agent can actually do, what was checked, and what remains the firm’s to confirm.

## Capabilities checked

| Capability | Result | Evidence |
| --- | --- | --- |
| Repo skill and agents | Present | `.cursor/skills/website-seo-geo/SKILL.md`, `.cursor/agents/geo-researcher.md`, `technical-seo.md`, `content-local-seo.md`, `seo-verifier.md`, `.cursor/rules/seo-geo.mdc` |
| Project brain | Present, separate from this agent | `docs/ads-brain/ldn-decks/` (ads memory, updated 2026-05-15). `docs/seo/LDN-GEO-PROOF-LOCK-2026-07-19.md` is the claim lock. `docs/seo/backlog.md` is stale: it still says PR #220 was unpublished and that price tables were waiting. Those prices were removed in PR #223. |
| Search Console, GA4, GBP, Bing, DataForSEO, CRM | Not available in this environment | No matching environment variables. Absence is not zero traffic or zero leads. |
| GitHub scheduling | Real and already tested for two existing jobs | `local-seo-deployment-watchdog.yml` cron `20 10 * * *` succeeded on schedule through 18 October 2026 (run 39134160341). `automation-stack-watchdog.yml` cron `0 * * * *` succeeded on schedule, including run 39173572910 at 22:44 UTC on 18 October. Those jobs check the local SEO deployment guard and the voice-agent routes. They are not a GEO claim monitor. |
| A new GEO monitor | Not configured | No subscription timer and no new workflow were added. A monitor is not active until a new job has been added and one scheduled run has succeeded. |
| Public repository | Public | `primesolutionoffice1-create/ldn-decks`. An internal price register with numbers must not be committed here. |

## Memory

- This file, in the repository: `docs/seo/geo-agent-baseline-2026-10-19.md`.
- Agent store, not on the website and not in the public repository: `/cursor/stores/self/geo/`. The blank price register is only there.
- Claim lock reused, not rewritten: `docs/seo/LDN-GEO-PROOF-LOCK-2026-07-19.md`.

## Live baseline, 19 October 2026

Checked https://ldndecks.com after PR #223 and #224.

- Homepage H1 remains `Custom Deck Builder Near You in Northern Virginia`. Title remains `Custom Deck Builder in Northern Virginia | Loudoun Decks`.
- `/trex-decks`, `/timbertech-decks`, and `/composite-deck-cost-northern-virginia` do not contain `$18`, `$45–$65`, or `/sq ft`. The search-index snippets that still show those rates are stale.
- Homepage dollar amounts that remain are the financing illustration and the visitor’s budget brackets.
- `public/llms.txt` had 204 absolute URLs. 200 returned HTTP 200 and were not `noindex`. Four returned 308 and were pointed at the canonical URL in this pass: `/deck-remodeling`, `/deck-repair`, `/deck-financing-northern-virginia`, and `/deck-design-ideas-northern-virginia-2026`.
- Blog posts in `src/lib/blogData.js`: 139 `date` fields. The “130+” line in `llms.txt` still matches.
- `robots.js` allows the listed search and AI crawlers and disallows `/admin/`, `/api/`, `/draft/`, and tracking-parameter URLs. Allowing a crawler is not a citation guarantee.

## Official warranty and profile research

Checked 19 October 2026. Not copied onto the public warranty table. Loudoun Decks’ installer level is still unconfirmed, so none of these terms are an LDN offer.

| Source | What the public page says | LDN status |
| --- | --- | --- |
| https://www.trex.com/customer-support/trex-owners/warranty/ | Index still links the product warranty and a separate TrexPro labor warranty. Marketing line says residential decking and railing warranties range from 25 to 50 years. | Level not confirmed. The 18 October product terms on the warranty guide stay as published. |
| Older Trex labor PDF at `images.trex.com` | A year grid of 1/2, 3/6, and 5/10 years appears in that file. It is not the 2026 booklet already cited on the site. | Not republished. The cell grid stays off the site. |
| https://www.trex.com/find-a-builder/ | Public locator copy says TrexPro, Gold, and Platinum are independent contractors. A search did not show Loudoun Decks on that locator. | Unconfirmed. |
| https://www.timbertech.com/about-warranties/ | Advanced PVC: limited lifetime product warranty, and 50-year or 35-year fade and stain depending on the document linked. Composite: 25- to 30-year product and fade/stain. Railing periods differ. A separate limited replacement labor warranty applies when a registered TimberTech contractor installs and registers the products. | Contractor registration unconfirmed. Years stay off the LDN table. |
| https://www.fiberondecking.com/pages/warranty | Residential physical-integrity and stain/fade periods differ by collection, from 25 years to lifetime. Commercial decking on that page is 10 years. Labor coverage of five, ten, or fifteen years is only through a pre-qualified Fiberon Certified Installer. | Certified Installer status unconfirmed. |
| DPOR Class A bulk file `2705a__crnt.txt` | The downloaded file did not contain `2705191673`, Loudoun Decks, or Zugrav. The interactive lookup was not completed. BuildZoom says it could not verify the license. | Not proof the license is invalid. The site still says to verify with DPOR. |
| https://www.dpor.virginia.gov/sites/default/files/boards/Contractors/Contractor_Consumer_Info.pdf | Class A at $150,000 or more, Class B from $30,000, Class C above $1,000 and below $30,000. | State thresholds, not an LDN price. Cited on the certifications page. |

## Changes in this pass

Supported by the proof lock plus live HTML. Not a rewrite of PR #223.

- Removed the company “10+ years” claim from `NamedAuthor`, `TeamGrid`, the team page, the press page, the why-choose-us fact list, and the team quick link.
- Stopped the about FAQ and the certifications page from stating insurance, BBB accreditation, or a manufacturer program as fact. The license number remains, with a DPOR check.
- Removed the unconfirmed legal suffix “LLC” from the certifications contact block.
- Removed Falls Church from the Fairfax County city list on that page. Alexandria and Falls Church stay in “Also serving”.
- Removed the unsourced “up to 40%” resurfacing sentence and the unsourced “1 to 2 weeks” duration from the why-choose-us verified-fact list.
- Replaced one blog sentence that assigned 25 years to Trex and TimberTech and 30 years to AZEK. The replacement does not publish a new year table.
- Pointed four `llms.txt` links at the canonical URL instead of a 308.

Homeowner phrases such as “if you stay 10+ years” were left. They are not a company tenure claim. Service-page cards that still say “licensed and insured” are listed below and were not all edited in this pass.

## Backlog

| ID | Priority | Item | Why it waits |
| --- | --- | --- | --- |
| GEO-001 | Firm | Approve or leave blank every row in the private price register | No owner ledger exists. Do not commit prices to this public repo. |
| GEO-002 | Firm | TrexPro / Gold / Platinum, TimberTech registered contractor, Fiberon Certified Installer | Public locators did not confirm Loudoun Decks. Do not contact the manufacturers without a separate authorization. |
| GEO-003 | Firm | Current insurance certificate, legal entity name, and experience start date | Proof lock still blocks all three. |
| GEO-004 | P2 | Remaining “licensed and insured” lines on service, city, and referral pages | Same blocked claim. This pass fixed the about, team, press, and certifications surfaces only. |
| GEO-005 | P2 | `docs/seo/backlog.md` still describes PR #220 as unpublished | Historical note. Do not treat it as the current production state. |
| GEO-006 | P3 | Interactive DPOR lookup for #2705191673 | The bulk file missed it. That is not a revocation. |
| GEO-007 | Not started | A GEO claim cron | Existing crons are tested for other jobs. A new monitor is not active. |

## Next task

The firm fills the private price register and confirms TrexPro, insurance, the legal name, and any year count it wants published. Until then, the public site keeps the written estimate and does not state those credentials.
