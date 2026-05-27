#!/usr/bin/env node
/**
 * Adds conversion link blocks to pages missing them.
 * Targets: tools pages, cost pages, near-you pages.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const BASE = resolve(import.meta.dirname, '../src/app');
let updated = 0;

const TOOLS_CTA = `
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Next Steps</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (5.0★ Google) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>`;

// Tools pages
const toolPages = [
  'tools/deck-beam-span-calculator-virginia',
  'tools/deck-footing-depth-calculator-virginia',
  'tools/deck-joist-span-calculator-virginia',
  'tools/deck-load-calculator-virginia',
  'tools/deck-stair-calculator',
];

for (const page of toolPages) {
  const fp = resolve(BASE, page, 'page.js');
  if (!existsSync(fp)) continue;
  let content = readFileSync(fp, 'utf8');
  if (content.includes('href="/services/new-decks"') && content.includes('href="/deck-cost-calculator"')) continue;

  // Insert before RelatedGuides
  const marker = content.match(/<RelatedGuides[^/]*\/>/);
  if (marker) {
    content = content.replace(marker[0], TOOLS_CTA + '\n      ' + marker[0]);
    writeFileSync(fp, content, 'utf8');
    updated++;
    console.log(`✓ ${page}`);
  }
}

// Cost/pricing pages — add links to /services/new-decks and /reviews
const costPages = [
  'composite-deck-cost-northern-virginia',
  'screened-porch-cost-northern-virginia',
  'deck-financing-northern-virginia',
  'deck-financing',
  'deck-payment-estimator',
  'how-much-does-a-deck-cost-northern-virginia',
  'northern-virginia-deck-cost-report-2026',
  'deck-roi-calculator-northern-virginia',
];

const COST_LINKS = `
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (5.0★ Google) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>`;

for (const page of costPages) {
  const fp = resolve(BASE, page, 'page.js');
  if (!existsSync(fp)) continue;
  let content = readFileSync(fp, 'utf8');
  if (content.includes('href="/services/new-decks"') && content.includes('href="/reviews"')) continue;

  // Try to insert before RelatedGuides, SimpleCTA, or ContactHome
  const markers = [
    /<RelatedGuides[^/]*\/>/,
    /<SimpleCTA[^/]*\/>/,
    /<ContactHome\s*\/>/,
  ];
  let inserted = false;
  for (const m of markers) {
    const match = content.match(m);
    if (match) {
      content = content.replace(match[0], COST_LINKS + '\n      ' + match[0]);
      writeFileSync(fp, content, 'utf8');
      updated++;
      inserted = true;
      console.log(`✓ ${page}`);
      break;
    }
  }
  if (!inserted) console.log(`— ${page} (no insertion point found)`);
}

// Near-you county pages
const nearYouPages = [
  'near-you/loudoun-county',
  'near-you/fairfax-county',
  'near-you/prince-william-county',
  'near-you/arlington-county',
  'near-you/stafford-county',
];

const NEARYOU_LINKS = `
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Explore Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (5.0★ Google) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>`;

for (const page of nearYouPages) {
  const fp = resolve(BASE, page, 'page.js');
  if (!existsSync(fp)) continue;
  let content = readFileSync(fp, 'utf8');
  if (content.includes('href="/services/new-decks"') && content.includes('href="/reviews"')) continue;

  const markers = [/<RelatedGuides[^/]*\/>/, /<SimpleCTA[^/]*\/>/, /<ContactHome\s*\/>/];
  for (const m of markers) {
    const match = content.match(m);
    if (match) {
      content = content.replace(match[0], NEARYOU_LINKS + '\n      ' + match[0]);
      writeFileSync(fp, content, 'utf8');
      updated++;
      console.log(`✓ ${page}`);
      break;
    }
  }
}

// Materials comparison pages — add brand links
const materialPages = [
  'trex-vs-timbertech-vs-azek',
  'composite-deck-vs-wood-deck-virginia',
  'deck-materials-comparison-virginia',
];

const MATERIAL_LINKS = `
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Brand Pages &amp; Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex Decks — Platinum Partner →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/timbertech-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>TimberTech AZEK Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite Deck Installation →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
        </ul>
      </section>`;

for (const page of materialPages) {
  const fp = resolve(BASE, page, 'page.js');
  if (!existsSync(fp)) continue;
  let content = readFileSync(fp, 'utf8');
  if (content.includes('href="/trex-decks"') && content.includes('href="/timbertech-decks"') && content.includes('href="/services/new-decks"')) continue;

  const markers = [/<RelatedGuides[^/]*\/>/, /<SimpleCTA[^/]*\/>/, /<ContactHome\s*\/>/];
  for (const m of markers) {
    const match = content.match(m);
    if (match) {
      content = content.replace(match[0], MATERIAL_LINKS + '\n      ' + match[0]);
      writeFileSync(fp, content, 'utf8');
      updated++;
      console.log(`✓ ${page}`);
      break;
    }
  }
}

console.log(`\nTotal updated: ${updated} files`);
