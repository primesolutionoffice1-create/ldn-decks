#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const fp = resolve(import.meta.dirname, '../src/lib/educationData.js');
let src = readFileSync(fp, 'utf8');
let updated = 0;

const ENRICHMENTS = {
  'deck-understructure-guide': {
    check: '/services/new-decks',
    links: '\\n\\n---\\n\\n**Related:** [New Deck Construction](/services/new-decks) · [Deck Footing Code in Northern Virginia](/deck-footing-code-northern-virginia) · [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist)',
  },
  'deck-material-comparison-2026': {
    check: '/trex-vs-timbertech-vs-azek',
    links: '\\n\\n---\\n\\n**Related:** [Trex vs TimberTech vs AZEK](/trex-vs-timbertech-vs-azek) · [Composite vs Wood Deck](/composite-deck-vs-wood-deck-virginia) · [Wood Decks](/wood-decks) · [Composite Deck Cost](/composite-deck-cost-northern-virginia)',
  },
  'deck-financing-guide-2026': {
    check: '/deck-financing',
    links: '\\n\\n---\\n\\n**Related:** [Deck Financing Options](/deck-financing) · [Deck Payment Estimator](/deck-payment-estimator) · [Deck Cost Calculator](/deck-cost-calculator) · [Composite Deck Cost](/composite-deck-cost-northern-virginia)',
  },
  'understanding-deck-load-paths': {
    check: '/tools/deck-load-calculator-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Deck Load Calculator](/tools/deck-load-calculator-virginia) · [Deck Footing Code](/deck-footing-code-northern-virginia) · [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist)',
  },
  'guide-to-deck-lighting-automation': {
    check: '/deck-lighting-ideas-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Deck Lighting Ideas Northern Virginia](/deck-lighting-ideas-northern-virginia) · [Deck Stair Lighting Service](/services/deck-stair-lighting) · [Outdoor Living in Northern Virginia](/outdoor-living-northern-virginia)',
  },
  'deck-drainage-systems-guide': {
    check: '/under-deck-ceiling-ideas',
    links: '\\n\\n---\\n\\n**Related:** [Under-Deck Ceiling Ideas](/under-deck-ceiling-ideas) · [Under-Deck Patios](/services/under-deck-patios) · [Deck Maintenance Checklist](/deck-maintenance-checklist-virginia)',
  },
  'fairfax-county-deck-setbacks-zoning': {
    check: '/deck-permit-fairfax-county-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Fairfax County Deck Permit Guide](/deck-permit-fairfax-county-virginia) · [Deck Builder in Northern Virginia](/deck-builder-northern-virginia) · [Deck Footing Code](/deck-footing-code-northern-virginia)',
  },
  'hoa-deck-approval-guidelines-nova': {
    check: '/hoa-deck-rules-northern-virginia',
    links: '\\n\\n---\\n\\n**Related:** [HOA Deck Rules Northern Virginia](/hoa-deck-rules-northern-virginia) · [Loudoun County HOA Guide](/loudoun-county-hoa-deck-rules) · [Deck Permit & HOA Cost Loudoun](/deck-permit-hoa-cost-loudoun-county)',
  },
  'soil-bearing-capacity-deck-footings-va': {
    check: '/tools/deck-footing-depth-calculator-virginia',
    links: '\\n\\n---\\n\\n**Related:** [Deck Footing Depth Calculator](/tools/deck-footing-depth-calculator-virginia) · [Deck Footing Code Northern Virginia](/deck-footing-code-northern-virginia) · [Deck Load Calculator](/tools/deck-load-calculator-virginia)',
  },
  'deck-stair-code-rise-run-virginia': {
    check: '/tools/deck-stair-calculator',
    links: '\\n\\n---\\n\\n**Related:** [Deck Stair Calculator](/tools/deck-stair-calculator) · [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist) · [Deck Builder in Northern Virginia](/deck-builder-northern-virginia)',
  },
  'deck-stair-construction-diagram': {
    check: '/tools/deck-stair-calculator',
    links: '\\n\\n---\\n\\n**Related:** [Deck Stair Calculator](/tools/deck-stair-calculator) · [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist) · [Services — New Deck Construction](/services/new-decks)',
  },
  'deck-stair-safety-inspection-checklist': {
    check: '/deck-safety-inspection-checklist',
    links: '\\n\\n---\\n\\n**Related:** [Full Deck Safety Inspection Checklist](/deck-safety-inspection-checklist) · [Deck Repair & Structural Maintenance](/services/deck-repair-and-structural-maintenance) · [Deck Stair Calculator](/tools/deck-stair-calculator)',
  },
  'common-deck-stair-inspection-failures-virginia': {
    check: '/deck-safety-inspection-checklist',
    links: '\\n\\n---\\n\\n**Related:** [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist) · [Deck Repair Services](/services/deck-repair-and-structural-maintenance) · [Deck Stair Calculator](/tools/deck-stair-calculator)',
  },
  'ledger-board-flashing-deck-attachment-virginia': {
    check: '/deck-safety-inspection-checklist',
    links: '\\n\\n---\\n\\n**Related:** [Deck Safety Inspection Checklist](/deck-safety-inspection-checklist) · [Deck Repair & Structural Maintenance](/services/deck-repair-and-structural-maintenance) · [Deck Builder Northern Virginia](/deck-builder-northern-virginia)',
  },
};

for (const [slug, { check, links }] of Object.entries(ENRICHMENTS)) {
  const slugPatterns = [`slug: '${slug}'`, `slug: "${slug}"`];
  const slugIdx = slugPatterns.reduce((found, pat) => found !== -1 ? found : src.indexOf(pat), -1);

  if (slugIdx === -1) {
    console.log(`✗ ${slug} (slug not found)`);
    continue;
  }

  if (src.indexOf(check, slugIdx) !== -1 && src.indexOf(check, slugIdx) < slugIdx + 8000) {
    console.log(`— ${slug} (already has ${check})`);
    continue;
  }

  const contentStart = src.indexOf("content: '", slugIdx);
  if (contentStart === -1) {
    console.log(`✗ ${slug} (no content field)`);
    continue;
  }

  let i = contentStart + "content: '".length;
  while (i < src.length) {
    if (src[i] === '\\' && i + 1 < src.length) {
      i += 2;
      continue;
    }
    if (src[i] === "'") break;
    i++;
  }
  src = src.slice(0, i) + links + src.slice(i);
  updated++;
  console.log(`✓ ${slug}`);
}

writeFileSync(fp, src, 'utf8');
console.log(`\nTotal enriched: ${updated} education articles`);
