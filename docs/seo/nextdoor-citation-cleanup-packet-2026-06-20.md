# Nextdoor Citation Cleanup Packet

Date: 2026-06-20
Profile: https://nextdoor.com/pages/loudoun-decks-buildin-centreville-va/
Canonical entity: Loudoun Decks

## Why This Matters

Nextdoor is already a public, indexable local profile for the business, but the current profile appears to use a non-canonical name and older contact pattern. Because Nextdoor is a strong neighborhood/local-intent platform, this can split entity confidence between `Loudoun Decks`, `LDN Decks`, `loudoun decks buildin`, old Gmail contact data, and any legacy Prime Solutions/Ashburn variants.

This is a cleanup task only. Do not add fabricated reviews, project stories, photos, awards, warranty claims, certifications, or service claims that are not already true and documented.

## Current Public State To Capture Before Editing

Capture screenshots before making edits:

| Field | Current public signal | Evidence needed |
| --- | --- | --- |
| Public profile URL | `https://nextdoor.com/pages/loudoun-decks-buildin-centreville-va/` | Full-page screenshot with URL bar visible. |
| Business name | `loudoun decks buildin` | Screenshot of the profile header. |
| Email | `loudoundecks@gmail.com` | Screenshot of contact details. |
| Website | `ldndecks.com` / ad-tagged URL variants may appear | Screenshot of website field. |
| Phone | `+15716557207` | Screenshot of phone field. |
| Address | `13704 Winding Oak Circle, Centreville, VA 20121` | Screenshot of map/address field. |
| Categories | Roof Deck, Roofer, Water damage restoration or similar noisy mix | Screenshot of category/service section. |
| Claim/admin state | Unknown | Screenshot from Nextdoor Business admin if accessible. |

## Canonical Fields To Set

Use these exact values unless the owner confirms a newer canonical source of truth:

| Field | Canonical value |
| --- | --- |
| Business name | Loudoun Decks |
| Alternate/public short name | LDN Decks only if Nextdoor supports alternate names; do not use it as primary. |
| Website | https://ldndecks.com/ |
| Phone | +1 571-655-7207 |
| Email | office@ldndecks.com |
| Address | 13704 Winding Oak Cir, Centreville, VA 20121 |
| Primary category | Deck Builder |
| Secondary categories | Deck Contractor, Deck Renovation Service, Patio Contractor, Porch Contractor, Pergola Contractor, Outdoor Living Contractor |
| Categories to remove if present | Roofer, Water damage restoration, generic roofing categories, unrelated restoration categories |
| Service areas | Loudoun County, Fairfax County, Prince William County, Arlington County, Stafford County |

## Owner/Admin Actions

1. Log in to Nextdoor Business.
2. Claim the profile if it is not already claimed.
3. Update primary business name to `Loudoun Decks`.
4. Replace old Gmail contact with `office@ldndecks.com`.
5. Normalize website to `https://ldndecks.com/`.
6. Confirm the phone is `+1 571-655-7207`.
7. Confirm address is `13704 Winding Oak Cir, Centreville, VA 20121`.
8. Remove unrelated categories, especially roofing or water damage restoration.
9. Add truthful deck/outdoor-living categories only.
10. Save changes and capture after screenshots.

## Support Request Template

Subject: Loudoun Decks Nextdoor profile correction

Hi Nextdoor Support,

Please help us correct the public Nextdoor business page for Loudoun Decks:

https://nextdoor.com/pages/loudoun-decks-buildin-centreville-va/

The profile appears to use a truncated or incorrect business name and older contact details. Please update the profile to the canonical business information below:

- Business name: Loudoun Decks
- Website: https://ldndecks.com/
- Phone: +1 571-655-7207
- Email: office@ldndecks.com
- Address: 13704 Winding Oak Cir, Centreville, VA 20121
- Primary category: Deck Builder
- Secondary categories: Deck Contractor, Deck Renovation Service, Patio Contractor, Porch Contractor, Pergola Contractor, Outdoor Living Contractor

Please also remove unrelated categories such as roofing or water damage restoration if they are attached to this profile.

Thank you,
[Owner name]

## After Screenshots Required

| Screenshot | Required? | Notes |
| --- | --- | --- |
| Public profile header after correction | Yes | Shows `Loudoun Decks`. |
| Contact details after correction | Yes | Shows `office@ldndecks.com`, phone, canonical URL, and address. |
| Categories/services after correction | Yes | Shows deck/outdoor-living categories only. |
| Admin claim state | Yes, if accessible | Shows claimed/managed profile state. |
| Support ticket confirmation | Yes, if support was used | Screenshot or email export. |

## Proof Ops Acceptance Criteria

The Nextdoor cleanup task can move from `owner-needed` to `owner-verify-live` only when the public profile or admin screenshot shows `Loudoun Decks` as the primary business name, the profile no longer uses `loudoun decks buildin` as the primary name, the email is `office@ldndecks.com` or the old email is hidden, the website is canonical, and the category mix is relevant to decks/outdoor living.

The task can move to `resolved` only after a public re-check confirms the corrected fields are visible without relying only on admin screenshots.

## Do Not Publish Yet

Do not add the Nextdoor URL to organization `sameAs` until the public profile name and contact fields are corrected. A public profile with the wrong primary name can make the entity graph worse, not better.
