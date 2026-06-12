# Angi Citation Cleanup Packet

Date: 2026-06-12
Platform: Angi
Canonical entity: Loudoun Decks

## Why This Matters

Angi is a high-visibility home-services directory, but the current public evidence is not clean enough to use as a canonical entity citation. Search/category results show `Prime Solution LLC` with Loudoun Decks copy in local deck categories, and the previously tracked direct Angi profile URL was crawler-blocked. This can split entity signals between `Loudoun Decks`, `LDN Decks`, `Prime Solution LLC`, and older business identity variants.

This is a cleanup and verification workflow. Do not add Angi to organization `sameAs`, public trust blocks, or proof snippets until the public profile or Angi admin dashboard confirms canonical `Loudoun Decks` identity.

## Current Public State To Capture Before Editing

Capture screenshots before making edits:

| Evidence item | Current signal | Screenshot needed |
| --- | --- | --- |
| Direct profile URL | `https://www.angi.com/companylist/us/va/manassas/ldn-decks` was previously tracked but blocked crawler verification. | Browser screenshot if it loads under owner login or public session. |
| Category/listing result | Angi local deck category pages may show `Prime Solution LLC` with Loudoun Decks copy. | Screenshot showing business name, category page URL, visible copy, and any request-quote button. |
| Public business name | `Prime Solution LLC` appears in some public category results. | Screenshot of name area. |
| Website field | Not publicly confirmed. | Admin/profile screenshot. |
| NAP | Exact Angi NAP not publicly confirmed. | Admin/profile screenshot. |
| Claim/admin state | Unknown. | Angi dashboard screenshot if accessible. |

## Canonical Fields To Set

Use these exact values unless the owner confirms a newer canonical source of truth:

| Field | Canonical value |
| --- | --- |
| Public business name | Loudoun Decks |
| Alternate name | LDN Decks only if Angi supports non-primary alternate names. |
| Legal entity field | Use the truthful legal entity only if Angi requires a non-public legal field; do not expose legacy/restoration names as public brand identity. |
| Website | https://ldndecks.com/ |
| Phone | +1 571-655-7207 |
| Email | office@ldndecks.com |
| Address | 13704 Winding Oak Cir, Centreville, VA 20121 |
| Primary category | Decks & Porches / Deck Builder / Deck Contractor, depending on Angi category availability |
| Secondary categories | Deck Repair, Deck Maintenance, Patio Contractor, Porch Contractor, Pergola Contractor, Outdoor Living Contractor |
| Categories to remove | Water damage restoration, roofing, unrelated remodeling/restoration categories, unrelated cleaning categories unless actively offered under Loudoun Decks |
| Service areas | Loudoun County, Fairfax County, Prince William County, Arlington County, Stafford County |

## Owner/Admin Actions

1. Log in to the Angi pro/business dashboard.
2. Locate any active profile tied to Loudoun Decks, LDN Decks, `Prime Solution LLC`, or the tracked direct URL.
3. Confirm whether the public Angi profile is claimed.
4. Update the public-facing business name to `Loudoun Decks`.
5. Confirm canonical phone, email, website, and address.
6. Remove or hide old public business identity variants where possible.
7. Remove unrelated categories and set deck/outdoor-living categories only.
8. If Angi requires legal entity continuity, keep that in a private/legal admin field only, not as public-facing profile name.
9. Ask Angi support to merge, rename, or suppress conflicting duplicate profiles if self-service editing is not available.
10. Capture after screenshots.

## Angi Support Request Template

Subject: Loudoun Decks Angi profile correction and duplicate/name cleanup

Hi Angi Support,

Please help us correct the public Angi profile for our company. The public profile/category results appear to show an old or incorrect business identity while using Loudoun Decks service copy.

Canonical public business details:

- Public business name: Loudoun Decks
- Website: https://ldndecks.com/
- Phone: +1 571-655-7207
- Email: office@ldndecks.com
- Address: 13704 Winding Oak Cir, Centreville, VA 20121
- Primary category: Decks & Porches / Deck Builder / Deck Contractor
- Service areas: Loudoun County, Fairfax County, Prince William County, Arlington County, Stafford County

Please update or merge any public-facing Angi records that show `Prime Solution LLC`, old Ashburn information, or other non-canonical names for this deck/outdoor-living business. If a legal entity field is required internally, please keep it non-public and ensure the public profile displays `Loudoun Decks`.

Please also confirm the public profile URL after the correction is complete.

Thank you,
[Owner name]

## After Screenshots Required

| Screenshot | Required? | Notes |
| --- | --- | --- |
| Public Angi profile after correction | Yes | Shows `Loudoun Decks` as public name. |
| NAP/contact details | Yes | Shows canonical website, phone, address, and email if public. |
| Category/services section | Yes | Shows deck/outdoor-living category fit. |
| Admin claim state | Yes, if accessible | Shows claimed/managed profile state. |
| Support ticket confirmation | Yes, if support was used | Screenshot/email export. |
| Duplicate suppression/merge confirmation | If applicable | Required if `Prime Solution LLC` or old variant remains discoverable. |

## Proof Ops Acceptance Criteria

The Angi cleanup task can move from `owner-needed` to `owner-verify-live` when Angi admin or support confirms a correction/merge/suppression request is submitted, screenshot evidence shows the profile fields being edited or a support thread tied to the profile, and no public claim is made on the website yet.

The task can move to `resolved` only when the public Angi profile shows `Loudoun Decks` as the primary business name, the profile shows canonical website and NAP or dashboard evidence confirms them, old `Prime Solution LLC`/Ashburn variants are removed or documented as non-public legal/admin-only data, and proof screenshots are archived.

## SameAs Policy

Add Angi to `src/lib/business.js` `sameAs` only after the corrected public Angi profile URL is known, the public profile uses `Loudoun Decks` as the primary name, website/NAP are canonical or dashboard evidence confirms them, and no old public Prime Solutions/Ashburn variant is visible as the primary profile identity.
