# NADRA Directory Verification Packet

Date: 2026-06-08
Platform: NADRA directory
Canonical profile URL: https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b
Canonical entity: Loudoun Decks

## Why This Matters

NADRA is a deck-industry entity signal, not a generic citation. The supplied member profile URL can support trust, contractor expertise, and local deck-builder relevance because it ties Loudoun Decks to the North American Deck and Railing Association.

The website may link the NADRA Proud Member logo to the supplied profile URL. Keep the profile treated as owner-proof gated until a live profile or member-dashboard screenshot is archived.

## Current Known State

| Item | Status |
| --- | --- |
| Supplied profile URL | `https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b` |
| Website badge link | Updated to the supplied NADRA profile URL. |
| Organization `sameAs` | Includes the supplied NADRA profile URL. |
| Membership record in `src/lib/business.js` | Records NADRA Builder/Contractor/Remodeler membership with member dates. |
| Remaining proof gap | Current public profile screenshot or member-dashboard screenshot. |

## Canonical Fields To Confirm

| Field | Canonical value |
| --- | --- |
| Business name | Loudoun Decks |
| Website | https://ldndecks.com/ |
| Phone | +1 571-655-7207 |
| Email | office@ldndecks.com |
| Address | 13704 Winding Oak Cir, Centreville, VA 20121 |
| Member category | Deck Builder/Contractor/Remodeler Primary Member |
| Membership organization | North American Deck and Railing Association |

## Owner/Admin Verification Steps

1. Open the supplied NADRA profile URL:
   `https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b`
2. Capture a public profile screenshot with the URL bar visible.
3. If public profile data is limited, log in to the NADRA member dashboard.
4. Capture the dashboard screen showing Loudoun Decks membership status and profile URL or member record.
5. Confirm the website NADRA Proud Member logo links to the supplied profile URL.
6. Archive the screenshot path in the owner proof ledger before treating the citation as fully resolved.

## Screenshots Required

| Screenshot | Required? | Notes |
| --- | --- | --- |
| Public NADRA profile | Yes, if accessible | URL bar visible; shows Loudoun Decks or member profile context. |
| NADRA member dashboard | Yes, if public profile is limited | Shows member status and business identity. |
| Website NADRA badge link check | Yes | Confirms the logo sends users to the supplied profile URL. |
| Profile details/contact fields | Optional | Useful if NADRA exposes NAP, phone, email, or website. |

## Suggested Internal Notes For Proof Archive

```text
NADRA profile reviewed on [DATE].
Public profile URL: https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b
Membership status shown: [yes/no].
Loudoun Decks identity shown: [yes/no].
Website badge link verified: [yes/no].
Screenshots stored at: [INSERT PATH].
```

## Proof Ops Acceptance Criteria

The NADRA task can stay `owner-verify-live` when:

- the supplied profile URL is linked from the NADRA badge;
- the profile URL is recorded in `src/lib/business.js`;
- the remaining work is screenshot archival, not content creation.

The task can move to `resolved` only when:

- a public NADRA profile or member-dashboard screenshot is archived;
- the screenshot shows the Loudoun Decks membership context;
- the website badge link is confirmed against the supplied profile URL.

## SameAs Policy

NADRA is already allowed in `BUSINESS.sameAs` because the URL was supplied directly by NADRA and the site badge now links to that unique profile.

Do not add additional NADRA, association, award, or certification claims unless owner proof shows the exact membership category, status, and date. Do not rewrite the membership into a certification or award unless NADRA documentation explicitly supports that wording.
