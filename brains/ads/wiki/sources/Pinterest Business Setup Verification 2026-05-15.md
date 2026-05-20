---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: source
title: "Pinterest Business Setup Verification 2026-05-15"
source_type: browser_observation
status: compiled
updated: "2026-05-15"
sources: []
relationships:
  - "[[Pinterest Business]]"
  - "[[Pinterest Lead Setup Action Queue 2026-05-15]]"
  - "[[Tracking and Attribution Risk Register]]"
---

# Pinterest Business Setup Verification 2026-05-15

## Source Context

Browser-observed setup session in Pinterest Business Hub for the account
`Loudoun Decks | Custom Deck Builders`, with supporting observation in Bing
Webmaster Tools and repo-level tracking search in
`/Users/ldndecks/ldn-decks-next`.

## Verified Facts

- Pinterest profile About/bio was updated to lead-focused positioning:
  custom decks, resurfacing, repairs, outdoor living, Loudoun County and
  Northern Virginia, licensed/insured trust language, premium wood/composite
  materials, free-estimate CTA, `ldndecks.com`, and `571-655-7207`.
- Instagram account `@loudoundecks` was reconnected and Pinterest showed
  "Instagram account successfully claimed".
- Instagram auto-publish to Pinterest is enabled and points to the board
  `From decks to patios`.
- Domain `ldndecks.com` is claimed in Pinterest Business Hub.
- One pin was published from `https://www.ldndecks.com/showcase`:
  `Composite Decking Detail Ideas in Loudoun County`.
- Pinterest displayed the published pin URL:
  `https://www.pinterest.com/pin/1058838562408203289`.
- A second pin was published from `https://www.ldndecks.com/showcase`:
  `Composite Deck Stairs for Northern Virginia Homes`.
- Pinterest displayed the second published pin URL:
  `https://www.pinterest.com/pin/1058838562408204195`.
- Pinterest warned that the image aspect ratio should be at least 2:3. The
  warning did not block publication of the confirmed pin.
- Bing Webmaster Tools URL Submission for `ldndecks.com` is active, with quota
  remaining and recent URL submissions visible.
- Repo search found GTM helper coverage for `form_submit`, `phone_click`, and
  `lead_confirmed` in `src/lib/tracking.js`, with GTM container
  `GTM-N87MG6QS` in `src/app/layout.js`.
- Pinterest Conversions Tag Manager showed advertiser ID `549768468889` and
  Tag ID `2612622395697`.
- Repo implementation added Pinterest base tag loading in `src/app/layout.js`
  and mapped `lead_confirmed` to Pinterest `lead` in `src/lib/tracking.js`.
- `npm run lint` passed.
- `npm run build` passed.
- Git commit `c31088e` (`Add Pinterest tag tracking`) was pushed to `main`.
- Live `https://ldndecks.com/thank-you` HTML check found `pintrk`, Tag ID
  `2612622395697`, `s.pinimg.com`, and `ct.pinterest.com`.
- Pinterest Test Events launched `https://ldndecks.com/thank-you`, but the
  Event Manager UI did not display received events during the observed pass.

## Inference

Organic Pinterest lead capture is ready to run. Pinterest paid-media
optimization is still not ready until Pinterest Event Manager displays the page
and lead events. This is an inference from the current state: the tag is live in
HTML, but Event Manager evidence has not yet appeared in the observed session.

## Related Automation

The existing heartbeat automation `LDN Decks Pinterest daily posts` was updated
to run daily at 9:00, 13:00, and 17:00 America/New_York. Each run should create
one lead-focused Pinterest/Instagram post package for Loudoun Decks, rotating
deck topics and including title, caption, keywords, hashtags, destination, image
source, and CTA. Live posting should only occur when authenticated browser
access is available.
