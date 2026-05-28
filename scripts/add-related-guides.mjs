#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const PAGES = [
  'ashburn-village-hoa-deck-rules',
  'belmont-country-club-hoa-deck-rules',
  'brambleton-hoa-deck-rules',
  'broadlands-hoa-deck-rules',
  'cable-railing-for-decks-northern-virginia',
  'deck-design-ideas-2026',
  'deck-enclosure-ideas-northern-virginia',
  'deck-financing-northern-virginia',
  'deck-lighting-ideas-northern-virginia',
  'deck-maintenance-checklist-virginia',
  'deck-permit-fairfax-county-virginia',
  'deck-permit-prince-william-county-virginia',
  'deck-railing-options-northern-virginia',
  'deck-resurfacing-northern-virginia',
  'deck-resurfacing-vs-replacement',
  'deck-safety-inspection-checklist',
  'deck-staining-northern-virginia',
  'deck-vs-patio-which-is-right',
  'does-a-deck-add-value-to-your-home',
  'eco-friendly-composite-decking',
  'hoa-deck-rules-northern-virginia',
  'how-long-does-a-composite-deck-last',
  'how-long-to-build-a-deck-northern-virginia',
  'how-tariffs-affect-deck-prices-2026',
  'how-to-choose-a-deck-builder-northern-virginia',
  'lansdowne-hoa-deck-rules',
  'louvered-pergola-northern-virginia',
  'multi-level-deck-builder-northern-virginia',
  'northern-virginia-deck-building-guide',
  'one-loudoun-hoa-deck-rules',
  'outdoor-kitchen-builder-northern-virginia',
  'paver-vs-flagstone-patio-northern-virginia',
  'pet-friendly-deck-design',
  'pool-deck-builder-northern-virginia',
  'porch-repair-vs-replacement-northern-virginia',
  'porch-vs-deck-which-should-you-build',
  'pressure-washing-deck-northern-virginia',
  'questions-to-ask-before-building-a-deck',
  'screened-porch-cost-northern-virginia',
  'showcase/rooftop-deck-washington-dc',
  'stamped-concrete-patio-northern-virginia',
  'stone-ridge-hoa-deck-rules',
  'sully-station-hoa-deck-rules',
  'three-season-room-northern-virginia',
  'trex-performance-products',
  'trex-vs-timbertech-vs-azek',
  'under-deck-ceiling-ideas',
  'virginia-run-hoa-deck-rules',
  'what-size-deck-should-i-build',
  'winterize-your-deck-northern-virginia',
  'wood-decks',
];

let updated = 0;

for (const slug of PAGES) {
  const fp = resolve(import.meta.dirname, `../src/app/${slug}/page.js`);
  let src = readFileSync(fp, 'utf8');

  if (src.includes('RelatedGuides')) {
    console.log(`— ${slug} (already has RelatedGuides)`);
    continue;
  }

  if (!src.includes('<ContactHome')) {
    console.log(`✗ ${slug} (no ContactHome anchor)`);
    continue;
  }

  // 1. Add import — find a good insertion point
  if (src.includes("import ContactHome from '@/components/ContactHome';")) {
    src = src.replace(
      "import ContactHome from '@/components/ContactHome';",
      "import ContactHome from '@/components/ContactHome';\nimport RelatedGuides from '@/components/RelatedGuides';"
    );
  } else if (src.includes('import ContactHome from "@/components/ContactHome"')) {
    src = src.replace(
      'import ContactHome from "@/components/ContactHome"',
      'import ContactHome from "@/components/ContactHome";\nimport RelatedGuides from \'@/components/RelatedGuides\''
    );
  } else {
    console.log(`✗ ${slug} (unexpected ContactHome import format)`);
    continue;
  }

  // 2. Derive the path for currentPath prop
  const pagePath = `/${slug}`;

  // 3. Add <RelatedGuides /> before <ContactHome />
  // Handle both <ContactHome /> and <ContactHome/> patterns
  const contactPattern = /(\s*)(<ContactHome\s*\/>)/;
  const match = src.match(contactPattern);
  if (match) {
    const indent = match[1];
    src = src.replace(
      contactPattern,
      `${indent}<RelatedGuides currentPath="${pagePath}" />${indent}${match[2]}`
    );
  } else {
    console.log(`✗ ${slug} (could not match ContactHome JSX)`);
    continue;
  }

  writeFileSync(fp, src, 'utf8');
  updated++;
  console.log(`✓ ${slug}`);
}

console.log(`\nTotal updated: ${updated} pages`);
