#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const OUT_DIR = path.resolve('docs/seo-ops/generated');

const weeklyThemes = [
  {
    market: 'Ashburn',
    service: 'composite deck replacement',
    url: 'https://ldndecks.com/composite-decks/ashburn',
    image: 'ashburn-composite-deck-railing.jpg',
    citation: 'Bing Places',
    backlink: 'Trex Find a Builder profile',
  },
  {
    market: 'Leesburg',
    service: 'screened porch or covered deck',
    url: 'https://ldndecks.com/screened-porches/leesburg',
    image: 'leesburg-screened-porch-detail.jpg',
    citation: 'Apple Business Connect',
    backlink: 'TimberTech/AZEK installer profile',
  },
  {
    market: 'Woodbridge',
    service: 'outdoor living design',
    url: 'https://ldndecks.com/outdoor-living/woodbridge',
    image: 'woodbridge-outdoor-living-patio-deck.jpg',
    citation: 'Nextdoor Business',
    backlink: 'local Realtor resource page',
  },
  {
    market: 'Fairfax',
    service: 'deck repair and structural safety',
    url: 'https://ldndecks.com/deck-repair/fairfax',
    image: 'fairfax-deck-repair-ledger-stairs.jpg',
    citation: 'Angi',
    backlink: 'supplier testimonial link',
  },
  {
    market: 'McLean and Great Falls',
    service: 'premium composite deck budgets',
    url: 'https://ldndecks.com/service/mclean',
    image: 'mclean-great-falls-premium-deck-lighting.jpg',
    citation: 'NADRA directory',
    backlink: 'Loudoun Chamber member news',
  },
];

const priorityUrls = [
  'https://ldndecks.com/service/ashburn',
  'https://ldndecks.com/composite-decks/leesburg',
  'https://ldndecks.com/deck-repair/fairfax',
  'https://ldndecks.com/screened-porches/chantilly',
  'https://ldndecks.com/outdoor-living/woodbridge',
  'https://ldndecks.com/service/mclean',
  'https://ldndecks.com/service/great-falls',
  'https://ldndecks.com/service/gainesville',
  'https://ldndecks.com/service/haymarket',
  'https://ldndecks.com/service/lake-ridge',
];

function isoDate(date) {
  return localDateStamp(date);
}

function weekNumber(date) {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const diffDays = Math.floor((date - start) / 86400000);
  return Math.floor(diffDays / 7) + 1;
}

function pickTheme(date) {
  return weeklyThemes[(weekNumber(date) - 1) % weeklyThemes.length];
}

function renderPack(date) {
  const theme = pickTheme(date);
  const today = isoDate(date);

  return `# LDN Decks Local Authority Pack - ${today}

Status: ready for weekly execution
Owner: Local SEO / GBP / Reviews / Citations / AI Search agents

## This Week's Focus

- Market: ${theme.market}
- Service angle: ${theme.service}
- Target URL: ${theme.url}
- Photo filename target: ${theme.image}

## GBP Post

Title:

\`\`\`
${theme.market} ${theme.service}
\`\`\`

Body:

\`\`\`
Planning a ${theme.service} in ${theme.market}? Loudoun Decks helps Northern Virginia homeowners line up the design, materials, permit/HOA details, and installation schedule before construction starts. This week's focus is practical: choose the right Trex, TimberTech, wood, porch, patio, or outdoor-living scope for the home and avoid avoidable approval delays.
\`\`\`

Button: Learn more
Link: ${theme.url}

## Photo Checklist

- [ ] Upload 5-10 real project photos to GBP.
- [ ] Use city/service filenames before upload.
- [ ] Include one finished project, one detail shot, one framing/inspection detail, one stairs/railings detail, and one team/process photo.
- [ ] Avoid stock-looking or unrelated images.

## Review Request

\`\`\`
Hi [Name], thank you for trusting Loudoun Decks with your project. If you are happy with the work, would you leave us a quick Google review? It helps local homeowners find a reliable deck builder. If comfortable, mention the city and what we built, such as a composite deck, screened porch, deck repair, patio, or pergola.
\`\`\`

## Review Response Template

\`\`\`
Thank you, [Name]. We appreciate you choosing Loudoun Decks for your [service] project in [city]. It was a pleasure helping with the design, permitting, materials, and build details, and we are glad the finished outdoor space is working well for your home.
\`\`\`

## Citation Action

- [ ] Complete or update: ${theme.citation}
- [ ] Confirm NAP: Loudoun Decks, 13704 Winding Oak Cir, Centreville, VA 20121, (571) 655-7207.
- [ ] Add service categories: deck builder, contractor, porch contractor, patio/pergola where available.
- [ ] Add website URL with no tracking unless the platform supports campaign links cleanly.

## Backlink Outreach

- [ ] Target: ${theme.backlink}
- [ ] Preferred anchor: Loudoun Decks
- [ ] Proof to include: TrexPro Platinum, TimberTech Certified, BBB Accredited, VA Class A licensed, Northern Virginia service area.
- [ ] Avoid exact-match spam anchors.

## GSC Priority URLs

${priorityUrls.map((url) => `- [ ] Inspect/request indexing if needed: ${url}`).join('\n')}

## AI / Entity Proof Checklist

- [ ] Confirm the target page clearly answers cost, permit/HOA, material choice, timeline, and contact path.
- [ ] Confirm relevant proof appears: certifications, BBB, reviews, local service area, project-fit language.
- [ ] Confirm \`llms.txt\` and \`llms-full.txt\` still expose the 464-page local architecture.

## Weekly Closeout

- [ ] GBP post published.
- [ ] Photos uploaded.
- [ ] Review requests sent.
- [ ] Citation/backlink action logged.
- [ ] \`npm run seo:deployment-guard\` passed.
- [ ] \`npm run seo:dominance\` report reviewed.
`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const today = new Date();
const outPath = path.join(OUT_DIR, `local-authority-pack-${isoDate(today)}.md`);
fs.writeFileSync(outPath, renderPack(today));
console.log(`Wrote ${outPath}`);
