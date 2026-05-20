# Authority Outreach Execution

Date: 2026-05-20
Domain: https://ldndecks.com

## Today Status

The 2026-05-17 reputation/schema sprint is merged and live. The homepage now exposes the verified entity graph for BBB, Trustpilot, Loudoun Chamber, NADRA, and related public profiles. IndexNow was submitted again on 2026-05-20 and returned `200 OK` with 204 submitted URLs.

## Current Reputation Read

| Source | Current status | Action |
| --- | --- | --- |
| BBB | Canonical Centreville profile, A+ Accredited, license `2705191673`, expiration `2027-02-28` | Use as proof when correcting BuildZoom and citation conflicts. |
| Loudoun Chamber | Public profile now uses Centreville NAP and links to `ldndecks.com` | Keep as verified local authority citation. |
| BuildZoom | Centreville NAP is now visible, but license still shows `Unable To Verify`, `No active license on file`, `Inactive`, and BuildZoom score `0` | Escalate with BBB/DPOR proof and ask for license re-verification. |
| Growcycle | Public profile links to `ldndecks.com` and shows license `2705191673`, but still uses old Ashburn address | Claim/update or suppress old Ashburn NAP. |
| Trustpilot | Claimed reputation profile tied to `ldndecks.com` | Keep active; request more real customer reviews after completed projects. |

## Decisions For This Sprint

- Treat BuildZoom as a trust repair issue before a link-building issue. A crawlable profile with a license warning can hurt conversion confidence.
- Use BBB as the strongest third-party proof because it independently lists the license number and 2027 expiration date.
- Prioritize outreach that produces a public, crawlable profile link or resource link. Directory quantity is less important than clean, trusted entity references.
- Push the deck cost calculator and Northern Virginia deck cost report as linkable assets for realtors, home inspectors, HOA managers, and local homeowner resources.

## Outreach Queue

| Priority | Target | Ask | Asset / evidence |
| --- | --- | --- | --- |
| 1 | BuildZoom support / Contractor Relations | Re-verify license `2705191673`, remove `No active license on file`, expose website if available | BBB profile, DPOR/license proof, Centreville NAP |
| 1 | Growcycle support/profile owner | Replace `42785 Generation Dr, Ashburn, VA 20147` with canonical Centreville NAP | Canonical NAP and website |
| 1 | Trex profile/directory | Confirm or create contractor profile with `ldndecks.com` link | Trex Platinum status, project photos |
| 1 | TimberTech/AZEK locator | Confirm or create contractor profile with `ldndecks.com` link | TimberTech Certified status, project photos |
| 2 | Fairfax Chamber | Member/profile link | Canonical NAP, category, website |
| 2 | Prince William Chamber | Member/profile link | Canonical NAP, category, website |
| 2 | Realtor partners | Resource link to cost calculator/report | `https://ldndecks.com/deck-cost-calculator` |
| 2 | Home inspector partners | Resource link to inspection/safety checklist | `https://ldndecks.com/services/deck-inspection` |

## Manual Send List

Use `docs/seo/backlink-outreach-templates.md` and send in this order:

1. BuildZoom license correction.
2. Growcycle NAP correction.
3. Trex / TimberTech contractor profile verification.
4. Fairfax / Prince William Chamber profile requests.
5. Realtor and home inspector resource pitch.

## Follow-Up Rule

Track each sent email or support ticket with:

- Date sent
- Contact URL/email
- Requested public URL
- Current status
- Follow-up date, normally 7 days later
- Whether the final public page has a crawlable link to `https://ldndecks.com/`
