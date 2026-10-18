# Correction after the service-area lot

Date: 18 October 2026. This note corrects the same-day decision that left Manassas, Manassas Park, and the City of Fairfax inside neighboring county groups.

## What changed

Virginia independent cities are not administratively part of the neighboring county. The areas page, the organization `areaServed` graph, programmatic city schema, and the Prince William hub now say that directly. Existing URLs were not changed. The served area was not expanded or reduced.

The organization `geo` is only the verified Centreville business location. City-center coordinates are no longer emitted as business locations. Manassas Park is included in `areaServed` as an independent city, with no `containedInPlace`, matching the visible FAQ.

The `/faqs` page had two FAQ graphs. The visible answers named three counties. The hidden JSON-LD named two offices, a Trex Platinum credential, a TimberTech Certified credential, a 50+ city total, and unsourced prices. One visible FAQ now supplies the JSON-LD. Those unconfirmed claims were removed. No authorized source for the credentials or the second office was found in the repository.

The active areas, Fairfax hub, and Prince William hub social images no longer say “70+ cities” or place an independent city inside a county subtitle. The about and certifications cards no longer say Trex Platinum, TimberTech certified, or Trex Pro.

The partner ticker used `width: max-content` without inline-size containment, so its track widened the page. The ticker is now clipped inside its own section (`overflow: clip` and `contain: inline-size`). The homepage video used its intrinsic width, so it painted past 360, 390, and 768 CSS pixels. The video wrapper now takes its width from the column. Homepage grids that used a fixed minimum track can shrink. This lot did not add a global `overflow-x: hidden`. At 360, 390, 768, and 1440 CSS pixels the homepage has no element past the viewport. At 180–195 CSS pixels, a few homepage quick-link lines still extend past the window.

## What was not found

`docs/seo/service-area-p1` does not promise 10–35 leads a month or $600K–$2.4M. No `Business-Name:` line was added to `llms.txt`.

## What remains published elsewhere

Older cost guides outside this correction still contain project ranges. They were not re-sourced and were not deleted sitewide. A written estimate remains the price for a specific property.
