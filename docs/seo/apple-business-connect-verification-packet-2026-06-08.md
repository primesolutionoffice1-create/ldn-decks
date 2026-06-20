# Apple Business Connect Verification Packet

Date: 2026-06-08
Platform: Apple Business Connect / Apple Maps
Canonical entity: Loudoun Decks

## Why This Matters

Apple Business Connect controls how the company appears in Apple Maps, Spotlight, Siri, and other Apple local surfaces. It is a core local entity source, but it usually cannot be fully verified from public web search alone. Treat this as an owner-dashboard verification task, not a public SEO claim until screenshots or a public Apple Maps place link confirm the profile.

Do not add an Apple Maps URL to `BUSINESS.sameAs` until the public profile or Apple Business Connect dashboard confirms canonical NAP, website, phone, and category.

## Current Status

| Item | Status |
| --- | --- |
| Public Apple Maps profile URL | Not verified in local proof artifacts. |
| Apple Business Connect claim state | Unknown. |
| Canonical NAP confirmed in Apple dashboard | Missing evidence. |
| Category/service fit confirmed | Missing evidence. |
| Website field confirmed | Missing evidence. |
| Photos/logo uploaded | Missing evidence. |

## Canonical Fields To Set

Use these exact values unless the owner confirms an updated source of truth:

| Field | Canonical value |
| --- | --- |
| Business name | Loudoun Decks |
| Website | https://ldndecks.com/ |
| Phone | +1 571-655-7207 |
| Email, if shown in dashboard | office@ldndecks.com |
| Address | 13704 Winding Oak Cir, Centreville, VA 20121 |
| Primary category | Deck Builder, Contractor, or General Contractor, depending on Apple category availability |
| Secondary/service categories | Deck Contractor, Patio Contractor, Porch Contractor, Pergola Contractor, Outdoor Living Contractor, Deck Repair |
| Service areas | Loudoun County, Fairfax County, Prince William County, Arlington County, Stafford County |
| Hours | Match `src/lib/business.js` unless owner confirms different Apple-specific hours |

## Recommended Apple Business Connect Steps

1. Go to `https://businessconnect.apple.com/`.
2. Sign in with the owner-controlled Apple ID.
3. Search for `Loudoun Decks` and `13704 Winding Oak Cir, Centreville, VA 20121`.
4. If a profile exists, request ownership/claim access.
5. If no profile exists, create the place profile.
6. Set the canonical business name, phone, website, and address.
7. Choose the closest truthful primary category available in Apple.
8. Add service-area and service/category details only where Apple supports them.
9. Upload only real brand assets or original business/project photos.
10. Save and complete Apple’s verification flow.

## Screenshots Required

| Screenshot | Required? | Notes |
| --- | --- | --- |
| Apple Business Connect dashboard profile overview | Yes | Shows account/place ownership or claim state. |
| NAP details screen | Yes | Shows name, address, phone, and website. |
| Category/services screen | Yes | Shows category fit. |
| Verification status screen | Yes | Shows verified, pending, or requested status. |
| Public Apple Maps place card | If available | Include URL if Apple exposes one. |
| Logo/photo asset screen | Optional | Useful only if real assets were uploaded. |

## Suggested Internal Notes For Proof Archive

```text
Apple Business Connect reviewed on [DATE].
Claim status: [verified / pending / requested / not found].
Public Apple Maps URL: [INSERT IF AVAILABLE].
Canonical NAP shown: [yes/no].
Website field shown: [yes/no].
Category shown: [INSERT CATEGORY].
Screenshots stored at: [INSERT PATH].
```

## Proof Ops Acceptance Criteria

The Apple Business Connect task can move from `owner-needed` to `owner-verify-live` when:

- The owner has dashboard access or a support/verification request is submitted.
- A screenshot shows the Apple place/profile record.
- The screenshot shows canonical name, address, phone, and website, or clearly shows the fields are pending correction.

The task can move to `resolved` only when:

- Apple Business Connect shows the profile as verified or active.
- Canonical NAP is visible in Apple Business Connect.
- A public Apple Maps place card is available or the dashboard confirms the live Apple Maps listing.
- Proof screenshots are archived.

## SameAs Policy

Add an Apple Maps URL to `src/lib/business.js` `sameAs` only after:

- the public place card URL is known;
- the public or dashboard evidence shows canonical `Loudoun Decks` identity;
- no old Prime Solutions/Ashburn/LDN variant is exposed as the primary public entity.
