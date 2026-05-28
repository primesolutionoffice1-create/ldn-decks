#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const PAGES = [
  'ashburn-composite-deck-cost-financing',
  'best-time-to-finance-build-deck-northern-virginia',
  'composite-deck-cost-by-size',
  'covered-deck-cost-northern-virginia',
  'credit-score-deck-financing',
  'deck-lighting-railings-stairs-addon-cost',
  'deck-permit-hoa-cost-loudoun-county',
  'mclean-great-falls-premium-deck-budget',
  'monthly-payment-composite-deck-northern-virginia',
  'resurface-or-replace-deck-financing',
  'timbertech-azek-deck-cost-northern-virginia',
  'trex-deck-cost-monthly-payment',
  'wood-vs-composite-deck-long-term-cost',
];

let updated = 0;

for (const slug of PAGES) {
  const fp = resolve(import.meta.dirname, `../src/app/${slug}/page.js`);
  let src = readFileSync(fp, 'utf8');

  if (src.includes('WebPageSchema')) {
    console.log(`— ${slug} (already has WebPageSchema)`);
    continue;
  }

  // 1. Add import after ArticleSchema import
  src = src.replace(
    "import ArticleSchema from '@/components/ArticleSchema';",
    "import ArticleSchema from '@/components/ArticleSchema';\nimport WebPageSchema from '@/components/WebPageSchema';"
  );

  // 2. Extract title and description from buildMetadata
  const titleMatch = src.match(/buildMetadata\(\{[^}]*title:\s*['"]([^'"]+)['"]/s);
  const descMatch = src.match(/buildMetadata\(\{[^}]*description:\s*['"]([^'"]+)['"]/s);
  const title = titleMatch?.[1] || '';
  const desc = descMatch?.[1] || '';

  if (!title || !desc) {
    console.log(`✗ ${slug} (could not extract title/desc)`);
    continue;
  }

  // 3. Find closing /> of ArticleSchema and add WebPageSchema after it
  const articleEnd = src.match(/<ArticleSchema[\s\S]*?\/>/);
  if (!articleEnd) {
    console.log(`✗ ${slug} (could not find ArticleSchema JSX)`);
    continue;
  }

  const escapedTitle = title.replace(/&/g, '&amp;');
  const escapedDesc = desc.replace(/&/g, '&amp;');

  const webpageTag = `\n      <WebPageSchema url={\`https://ldndecks.com\${PATH}\`} name="${escapedTitle}" description="${escapedDesc}" speakable />`;

  src = src.replace(articleEnd[0], articleEnd[0] + webpageTag);

  writeFileSync(fp, src, 'utf8');
  updated++;
  console.log(`✓ ${slug}`);
}

console.log(`\nTotal updated: ${updated} pages`);
