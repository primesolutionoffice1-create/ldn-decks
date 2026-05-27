#!/usr/bin/env node
/**
 * Adds missing internal links to blog post content in blogData.js.
 * Appends a "Related Resources" markdown section to each post's content.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const fp = resolve(import.meta.dirname, '../src/lib/blogData.js');
let src = readFileSync(fp, 'utf8');
let updated = 0;

const ENRICHMENTS = {
  'trex-vs-wood-decking': {
    check: '/composite-deck-vs-wood-deck-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Full Composite vs Wood Comparison for Virginia](/composite-deck-vs-wood-deck-virginia) · [Composite Deck Cost Guide](/composite-deck-cost-northern-virginia)',
  },
  'enclosed-porches-trending': {
    check: '/screened-porch-builder-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Screened Porch Builder Northern Virginia](/screened-porch-builder-northern-virginia) · [Screened Porch Services](/services/porches/screened-porch) · [Three-Season Room Options](/three-season-room-northern-virginia)',
  },
  'deck-resurfacing-guide': {
    check: '/deck-resurfacing-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Deck Resurfacing in Northern Virginia](/deck-resurfacing-northern-virginia) · [Resurfacing Services](/services/deck-resurfacing) · [Resurfacing vs Replacement Decision Guide](/deck-resurfacing-vs-replacement)',
  },
  'how-much-does-deck-cost-northern-virginia': {
    check: '/deck-cost-calculator',
    links: '\\n\\n---\\n\\n**Related:** [Free Deck Cost Calculator](/deck-cost-calculator) · [Composite Deck Cost Guide](/composite-deck-cost-northern-virginia) · [Deck Payment Estimator](/deck-payment-estimator)',
  },
  'trex-vs-timbertech-vs-azek': {
    check: '/trex-decks',
    links: '\\n\\n---\\n\\n**Related:** [Trex Decks — Platinum Partner](/trex-decks) · [TimberTech AZEK Decks](/timbertech-decks) · [Full Brand Comparison](/trex-vs-timbertech-vs-azek)',
  },
  'deck-structural-repair-rot-prevention': {
    check: '/services/deck-repair-and-structural-maintenance',
    links: '\\n\\n---\\n\\n**Related:** [Deck Repair & Structural Maintenance Services](/services/deck-repair-and-structural-maintenance) · [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist)',
  },
  'screened-porch-vs-three-season-room-virginia': {
    check: '/screened-porch-builder-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Screened Porch Builder Northern Virginia](/screened-porch-builder-northern-virginia) · [Three-Season Room Builder](/three-season-room-northern-virginia) · [Screened Porch Cost Guide](/screened-porch-cost-northern-virginia)',
  },
  'choosing-deck-resurfacing-contractor-va': {
    check: '/deck-resurfacing-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Deck Resurfacing in Northern Virginia](/deck-resurfacing-northern-virginia) · [Resurfacing Services](/services/deck-resurfacing)',
  },
  'how-long-does-it-take-to-build-a-deck-northern-virginia': {
    check: '/how-long-to-build-a-deck-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Full Deck Build Timeline Guide](/how-long-to-build-a-deck-northern-virginia)',
  },
  'outdoor-living-design-trends-2026': {
    check: '/outdoor-living-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Outdoor Living Services](/outdoor-living-northern-virginia) · [2026 Outdoor Living Trends](/outdoor-living-trends-northern-virginia-2026)',
  },
  'loudoun-county-deck-permit-guide-2026': {
    check: '/deck-permit-loudoun-county-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Loudoun County Deck Permit Guide](/deck-permit-loudoun-county-virginia) · [Fairfax County Permits](/deck-permit-fairfax-county-virginia)',
  },
  'louvered-pergola-over-deck-northern-virginia': {
    check: '/louvered-pergola-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Louvered Pergola Services](/louvered-pergola-northern-virginia) · [Pergola & Gazebo Services](/services/gazebo-pergola)',
  },
  'spring-deck-maintenance-guide': {
    check: '/deck-maintenance-checklist-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Full Deck Maintenance Checklist for Virginia](/deck-maintenance-checklist-virginia)',
  },
  'winterproof-your-deck-maintenance-virginia': {
    check: '/winterize-your-deck-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Winterize Your Deck Guide](/winterize-your-deck-northern-virginia) · [Deck Maintenance Checklist](/deck-maintenance-checklist-virginia)',
  },
  'does-deck-increase-home-value': {
    check: '/does-a-deck-add-value-to-your-home',
    links: '\\n\\n---\\n\\n**Related:** [Does a Deck Add Value?](/does-a-deck-add-value-to-your-home) · [Deck ROI Calculator](/deck-roi-calculator-northern-virginia)',
  },
};

for (const [slug, { check, links }] of Object.entries(ENRICHMENTS)) {
  if (src.includes(`slug: '${slug}'`) && !src.includes(check)) {
    // Find the end of this post's content string and append links before the closing quote
    const slugIdx = src.indexOf(`slug: '${slug}'`);
    // Find the content field after this slug
    const contentStart = src.indexOf("content: '", slugIdx);
    if (contentStart === -1) continue;

    // Find the closing quote of the content string — it's a single-quoted string
    // We need to find the matching closing quote, handling escaped quotes
    let i = contentStart + "content: '".length;
    while (i < src.length) {
      if (src[i] === '\\' && i + 1 < src.length) {
        i += 2; // skip escaped char
        continue;
      }
      if (src[i] === "'") break;
      i++;
    }
    // i is now at the closing quote
    src = src.slice(0, i) + links + src.slice(i);
    updated++;
    console.log(`✓ ${slug}`);
  } else if (src.includes(check)) {
    console.log(`— ${slug} (already has ${check})`);
  }
}

writeFileSync(fp, src, 'utf8');
console.log(`\nTotal enriched: ${updated} blog posts`);
