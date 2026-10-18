#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();
const SITEMAP_BODY_PATH = path.join(ROOT, '.next/server/app/sitemap.xml.body');
const MIN_EXPECTED_SITEMAP_URLS = 350;

const REQUIRED_ENTRIES = [
  {
    label: 'Deck planning tools hub',
    url: 'https://ldndecks.com/tools',
    source: 'src/app/tools/page.js',
    sourceDateSnippet: 'dateModified="2026-10-03"',
    expectedLastmod: '2026-10-03',
    expectedChangefreq: 'monthly',
    expectedPriority: '0.7',
    sourceSlugCheck: false,
  },
  {
    label: 'Virginia deck stair calculator',
    url: 'https://ldndecks.com/tools/deck-stair-calculator',
    source: 'src/app/tools/deck-stair-calculator/page.js',
    sourceDateSnippet: 'dateModified="2026-10-04"',
    expectedLastmod: '2026-10-04',
    expectedChangefreq: 'monthly',
    expectedPriority: '0.88',
    sourceSlugCheck: false,
  },
  {
    label: 'Deck stair lighting service',
    url: 'https://ldndecks.com/services/deck-stair-lighting',
    source: 'src/app/services/deck-stair-lighting/page.js',
    sourceDateSnippet: 'dateModified="2026-10-04"',
    expectedLastmod: '2026-10-04',
    expectedChangefreq: 'monthly',
    expectedPriority: '0.75',
    sourceSlugCheck: false,
  },
  {
    label: 'Deck replacement service',
    url: 'https://ldndecks.com/services/deck-replacement',
    source: 'src/app/services/deck-replacement/page.js',
    sourceDateSnippet: 'dateModified="2026-10-05"',
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'monthly',
    expectedPriority: '0.85',
    sourceSlugCheck: false,
  },
  {
    label: 'Loudoun County deck permit guide',
    url: 'https://ldndecks.com/deck-permit-loudoun-county-virginia',
    source: 'src/app/deck-permit-loudoun-county-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-05"',
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.9',
    sourceSlugCheck: false,
  },
  {
    label: 'Fairfax County deck permit guide',
    url: 'https://ldndecks.com/deck-permit-fairfax-county-virginia',
    source: 'src/app/deck-permit-fairfax-county-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-05"',
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.85',
    sourceSlugCheck: false,
  },
  {
    label: 'Arlington County deck permit guide',
    url: 'https://ldndecks.com/deck-permit-arlington-county-virginia',
    source: 'src/app/deck-permit-arlington-county-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-05"',
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.85',
    sourceSlugCheck: false,
  },
  {
    label: 'Prince William County deck permit guide',
    url: 'https://ldndecks.com/deck-permit-prince-william-county-virginia',
    source: 'src/app/deck-permit-prince-william-county-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-05"',
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.85',
    sourceSlugCheck: false,
  },
  {
    label: 'Covered deck builder Northern Virginia',
    url: 'https://ldndecks.com/covered-deck-builder-northern-virginia',
    source: 'src/app/covered-deck-builder-northern-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-06"',
    expectedLastmod: '2026-10-06',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.9',
    sourceSlugCheck: false,
  },
  {
    label: 'Covered deck cost Northern Virginia',
    url: 'https://ldndecks.com/covered-deck-cost-northern-virginia',
    source: 'src/app/covered-deck-cost-northern-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-06"',
    expectedLastmod: '2026-10-06',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.9',
    sourceSlugCheck: false,
  },
  {
    label: 'Composite decks',
    url: 'https://ldndecks.com/composite-decks',
    source: 'src/app/composite-decks/page.js',
    sourceDateSnippet: 'dateModified="2026-10-06"',
    expectedLastmod: '2026-10-06',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.9',
    sourceSlugCheck: false,
  },
  {
    label: 'TimberTech and AZEK deck cost',
    url: 'https://ldndecks.com/timbertech-azek-deck-cost-northern-virginia',
    source: 'src/app/timbertech-azek-deck-cost-northern-virginia/page.js',
    sourceDateSnippet: 'dateModified="2026-10-06"',
    expectedLastmod: '2026-10-06',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.85',
    sourceSlugCheck: false,
  },
  {
    label: 'Trex vs TimberTech vs AZEK',
    url: 'https://ldndecks.com/trex-vs-timbertech-vs-azek',
    source: 'src/app/trex-vs-timbertech-vs-azek/page.js',
    sourceDateSnippet: "const modifiedDate = '2026-10-06'",
    expectedLastmod: '2026-10-06',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.9',
    sourceSlugCheck: false,
  },
  {
    label: 'Premium composite deck replacement Arlington Alexandria McLean',
    url: 'https://ldndecks.com/premium-composite-deck-replacement-arlington-alexandria-mclean-va',
    source: 'src/app/premium-composite-deck-replacement-arlington-alexandria-mclean-va/page.js',
    sourceDateSnippet: 'dateModified="2026-10-07"',
    expectedLastmod: '2026-10-07',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.92',
    sourceSlugCheck: false,
  },
  {
    label: 'Virginia deck stair code',
    url: 'https://ldndecks.com/education/deck-stair-code-rise-run-virginia',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'July 18, 2026'",
    expectedLastmod: '2026-07-18',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.86',
  },
  {
    label: 'Deck stair construction diagram',
    url: 'https://ldndecks.com/education/deck-stair-construction-diagram',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'October 7, 2026'",
    expectedLastmod: '2026-10-07',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.86',
  },
  {
    label: 'Common deck stair inspection failures',
    url: 'https://ldndecks.com/education/common-deck-stair-inspection-failures-virginia',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'October 5, 2026'",
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.82',
  },
  {
    label: 'Deck stair safety inspection checklist',
    url: 'https://ldndecks.com/education/deck-stair-safety-inspection-checklist',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'October 5, 2026'",
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.82',
  },
  {
    label: 'Ledger board flashing guide',
    url: 'https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'October 5, 2026'",
    expectedLastmod: '2026-10-05',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.86',
  },
  {
    label: 'Deck understructure guide',
    url: 'https://ldndecks.com/education/deck-understructure-guide',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'October 6, 2026'",
    expectedLastmod: '2026-10-06',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.82',
  },
  {
    label: 'Composite fading blog',
    url: 'https://ldndecks.com/blog/why-composite-trex-decking-fades-sun-solutions',
    source: 'src/lib/blogData.js',
    sourceDateSnippet: "dateModified: 'June 19, 2026'",
    expectedLastmod: '2026-06-19',
    expectedChangefreq: 'monthly',
    expectedPriority: '0.7',
  },
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function extractSitemapEntries(xml) {
  return [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<changefreq>([^<]+)<\/changefreq>\s*<priority>([^<]+)<\/priority>\s*<\/url>/g)].map((match) => ({
    url: match[1],
    lastmod: match[2],
    changefreq: match[3],
    priority: match[4],
  }));
}

function readIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  const warnings = [];
  const validationJsonPath = path.join(OUTPUT_DIR, `sitemap-freshness-validation-${DATE}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `sitemap-freshness-validation-${DATE}.md`);

  assert(fs.existsSync(SITEMAP_BODY_PATH), 'Missing built sitemap body at .next/server/app/sitemap.xml.body. Run `npm run build` before this validator.', errors);

  const sitemapXml = readIfExists(SITEMAP_BODY_PATH);
  const entries = extractSitemapEntries(sitemapXml);
  const entryByUrl = new Map(entries.map((entry) => [entry.url, entry]));

  // Current sitemap intentionally excludes broad noindex programmatic city-service
  // pages; keep this as a floor for accidental sitemap collapse, not a stale
  // target from the larger pre-pruning sitemap surface.
  assert(entries.length >= MIN_EXPECTED_SITEMAP_URLS, `Expected at least ${MIN_EXPECTED_SITEMAP_URLS} sitemap URLs, found ${entries.length}.`, errors);

  const checkedEntries = REQUIRED_ENTRIES.map((required) => {
    const sourcePath = path.join(ROOT, required.source);
    const sourceText = readIfExists(sourcePath);
    const entry = entryByUrl.get(required.url) || null;
    const slug = required.url.split('/').pop();

    assert(Boolean(sourceText), `Missing source data file for ${required.label}: ${required.source}`, errors);
    if (required.sourceSlugCheck !== false) {
      assert(sourceText.includes(`slug: '${slug}'`) || sourceText.includes(`slug: "${slug}"`), `${required.source} is missing slug for ${required.label}: ${slug}`, errors);
    }
    assert(sourceText.includes(required.sourceDateSnippet), `${required.source} is missing expected modified-date source for ${required.label}: ${required.sourceDateSnippet}`, errors);

    assert(Boolean(entry), `Missing priority sitemap URL: ${required.url}`, errors);
    if (entry) {
      assert(entry.lastmod === required.expectedLastmod, `${required.url} lastmod mismatch: expected ${required.expectedLastmod}, found ${entry.lastmod}.`, errors);
      assert(entry.changefreq === required.expectedChangefreq, `${required.url} changefreq mismatch: expected ${required.expectedChangefreq}, found ${entry.changefreq}.`, errors);
      assert(entry.priority === required.expectedPriority, `${required.url} priority mismatch: expected ${required.expectedPriority}, found ${entry.priority}.`, errors);
    }

    return {
      label: required.label,
      url: required.url,
      source: required.source,
      expectedLastmod: required.expectedLastmod,
      actualLastmod: entry?.lastmod || null,
      expectedChangefreq: required.expectedChangefreq,
      actualChangefreq: entry?.changefreq || null,
      expectedPriority: required.expectedPriority,
      actualPriority: entry?.priority || null,
      sourceDateSnippetPresent: sourceText.includes(required.sourceDateSnippet),
      present: Boolean(entry),
    };
  });

  const result = {
    ok: errors.length === 0,
    date: DATE,
    sitemapBody: path.relative(ROOT, SITEMAP_BODY_PATH),
    sitemapUrls: entries.length,
    checkedEntries,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const markdown = [
    `# Sitemap Freshness Validation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Sitemap body: \`${result.sitemapBody}\``,
    `- Sitemap URLs parsed: ${result.sitemapUrls}`,
    `- Priority freshness entries checked: ${checkedEntries.length}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Checked Entries',
    '',
    '| Entry | URL | Lastmod | Changefreq | Priority | Source Date Present |',
    '|---|---|---|---|---|---:|',
    ...checkedEntries.map((entry) => `| ${entry.label} | \`${entry.url}\` | ${entry.actualLastmod || 'missing'} / ${entry.expectedLastmod} | ${entry.actualChangefreq || 'missing'} / ${entry.expectedChangefreq} | ${entry.actualPriority || 'missing'} / ${entry.expectedPriority} | ${entry.sourceDateSnippetPresent ? 'yes' : 'no'} |`),
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

  fs.writeFileSync(validationJsonPath, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(validationMdPath, `${markdown}\n`);

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
