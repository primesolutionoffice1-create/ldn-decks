#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();
const ROUTE_PATH = 'src/app/image-sitemap.xml/route.js';

const REQUIRED_IMAGE_ENTRIES = [
  {
    page: '/composite-deck-cost-northern-virginia',
    image: '/social/composite-deck-cost-northern-virginia-social.png',
    terms: ['Composite', 'Cost', 'Northern Virginia'],
  },
  {
    page: '/deck-permit-loudoun-county-virginia',
    image: '/social/deck-permit-loudoun-county-social.png',
    terms: ['Loudoun', 'Permit'],
  },
  {
    page: '/deck-permit-fairfax-county-virginia',
    image: '/social/deck-permit-fairfax-county-social.png',
    terms: ['Fairfax', 'Permit'],
  },
  {
    page: '/deck-permit-prince-william-county-virginia',
    image: '/social/deck-permit-prince-william-county-social.png',
    terms: ['Prince William', 'Permit'],
  },
  {
    page: '/deck-permit-arlington-county-virginia',
    image: '/social/deck-permit-arlington-county-social.png',
    terms: ['Arlington', 'Permit'],
  },
  {
    page: '/education/deck-stair-code-rise-run-virginia',
    image: '/images/deck-stair-code-virginia.png',
    terms: ['Stair', 'Rise', 'Run'],
  },
  {
    page: '/tools/deck-stair-calculator',
    image: '/social/deck-stair-calculator-social.png',
    terms: ['Stair', 'Calculator'],
  },
  {
    page: '/education/deck-stair-construction-diagram',
    image: '/images/deck-stair-construction-diagram.png',
    terms: ['Stair', 'Diagram'],
  },
  {
    page: '/education/ledger-board-flashing-deck-attachment-virginia',
    image: '/images/ledger_flashing_diagram.png',
    terms: ['Ledger', 'Flashing'],
  },
  {
    page: '/trex-decks',
    image: '/social/trex-decks-social.png',
    terms: ['Trex'],
  },
  {
    page: '/timbertech-decks',
    image: '/social/timbertech-decks-social.png',
    terms: ['TimberTech'],
  },
  {
    page: '/composite-decks',
    image: '/social/composite-decks-social.png',
    terms: ['Composite'],
  },
  {
    page: '/services/deck-repair',
    image: '/social/deck-repair-social.png',
    terms: ['Repair'],
  },
  {
    page: '/services/deck-replacement',
    image: '/social/deck-replacement-service-social.png',
    terms: ['Replacement'],
  },
  {
    page: '/covered-deck-builder-northern-virginia',
    image: '/social/covered-deck-builder-northern-virginia-social.png',
    terms: ['Covered'],
  },
  {
    page: '/get-estimate',
    image: '/pinterest/deck-builder-loudoun-project-2x3.jpg',
    terms: ['Estimate'],
  },
];

function read(relativePath, errors) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`Missing required source file: ${relativePath}`);
    return '';
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function fileExists(publicPath) {
  return fs.existsSync(path.join(ROOT, 'public', publicPath.replace(/^\//, '')));
}

function lineNumber(text, needle) {
  const index = text.indexOf(needle);
  if (index === -1) return null;
  return text.slice(0, index).split('\n').length;
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getEntryLiteral(routeText, entry) {
  const pattern = new RegExp(
    String.raw`\{[^\n{}]*page:\s*['"]${escapeRegExp(entry.page)}['"][^\n{}]*image:\s*['"]${escapeRegExp(entry.image)}['"][^\n{}]*title:\s*['"]([^'"]+)['"][^\n{}]*\}`,
  );
  const match = routeText.match(pattern);
  if (!match) return null;
  return {
    literal: match[0],
    title: match[1],
  };
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  const warnings = [];
  const routeText = read(ROUTE_PATH, errors);

  if (!routeText.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"')) {
    errors.push(`${ROUTE_PATH} is missing the Google image sitemap namespace.`);
  }

  if (!routeText.includes('showcaseProjects')) {
    errors.push(`${ROUTE_PATH} is not including showcase project images.`);
  }

  const entries = REQUIRED_IMAGE_ENTRIES.map((entry) => {
    const pagePresent = routeText.includes(`page: '${entry.page}'`) || routeText.includes(`page: "${entry.page}"`);
    const imagePresent = routeText.includes(`image: '${entry.image}'`) || routeText.includes(`image: "${entry.image}"`);
    const entryLiteral = getEntryLiteral(routeText, entry);
    const titleLine = entry.terms.map((term) => ({
      term,
      present: entryLiteral?.title.toLowerCase().includes(term.toLowerCase()) ?? false,
    }));
    const exists = fileExists(entry.image);

    if (!pagePresent) errors.push(`${ROUTE_PATH} is missing priority image sitemap page: ${entry.page}`);
    if (!imagePresent) errors.push(`${ROUTE_PATH} is missing priority image sitemap image: ${entry.image}`);
    if (!entryLiteral) errors.push(`${ROUTE_PATH} is missing a single priority entry with page, image, and title: ${entry.page} -> ${entry.image}`);
    if (!exists) errors.push(`Priority image sitemap asset does not exist: public${entry.image}`);
    for (const term of titleLine) {
      if (!term.present) {
        errors.push(`${ROUTE_PATH} priority image entry title for ${entry.page} is missing term: ${term.term}`);
      }
    }

    return {
      ...entry,
      pagePresent,
      imagePresent,
      title: entryLiteral?.title ?? null,
      assetExists: exists,
      firstPageLine: lineNumber(routeText, entry.page),
      firstImageLine: lineNumber(routeText, entry.image),
      requiredTerms: titleLine,
    };
  });

  const result = {
    ok: errors.length === 0,
    date: DATE,
    route: ROUTE_PATH,
    requiredEntries: entries.length,
    entries,
    warnings,
    errors,
    outputs: {
      json: `scripts/output/image-sitemap-validation-${DATE}.json`,
      markdown: `scripts/output/image-sitemap-validation-${DATE}.md`,
    },
  };

  const markdown = [
    `# Image Sitemap Validation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Route: \`${ROUTE_PATH}\``,
    `- Required image entries: ${result.requiredEntries}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Required Entries',
    '',
    '| Page | Image | Page Present | Image Present | Asset Exists |',
    '|---|---|---:|---:|---:|',
    ...entries.map((entry) => `| \`${entry.page}\` | \`${entry.image}\` | ${entry.pagePresent ? 'yes' : 'no'} | ${entry.imagePresent ? 'yes' : 'no'} | ${entry.assetExists ? 'yes' : 'no'} |`),
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(warnings.length ? warnings.map((warning) => `- ${warning}`) : ['- None']),
    '',
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, result.outputs.json), `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, result.outputs.markdown), `${markdown}\n`);

  console.log(JSON.stringify({
    ok: result.ok,
    date: result.date,
    route: result.route,
    requiredEntries: result.requiredEntries,
    errors: result.errors,
    warnings: result.warnings,
    outputs: result.outputs,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
