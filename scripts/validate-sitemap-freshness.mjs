#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();
const SITEMAP_BODY_PATH = path.join(ROOT, '.next/server/app/sitemap.xml.body');

const REQUIRED_ENTRIES = [
  {
    label: 'Virginia deck stair code',
    url: 'https://ldndecks.com/education/deck-stair-code-rise-run-virginia',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'June 18, 2026'",
    expectedLastmod: '2026-06-18',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.86',
  },
  {
    label: 'Deck stair construction diagram',
    url: 'https://ldndecks.com/education/deck-stair-construction-diagram',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'June 3, 2026'",
    expectedLastmod: '2026-06-03',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.86',
  },
  {
    label: 'Ledger board flashing guide',
    url: 'https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia',
    source: 'src/lib/educationData.js',
    sourceDateSnippet: "dateModified: 'June 3, 2026'",
    expectedLastmod: '2026-06-03',
    expectedChangefreq: 'weekly',
    expectedPriority: '0.86',
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

  assert(entries.length >= 700, `Expected at least 700 sitemap URLs, found ${entries.length}.`, errors);

  const checkedEntries = REQUIRED_ENTRIES.map((required) => {
    const sourcePath = path.join(ROOT, required.source);
    const sourceText = readIfExists(sourcePath);
    const entry = entryByUrl.get(required.url) || null;
    const slug = required.url.split('/').pop();

    assert(Boolean(sourceText), `Missing source data file for ${required.label}: ${required.source}`, errors);
    assert(sourceText.includes(`slug: '${slug}'`) || sourceText.includes(`slug: "${slug}"`), `${required.source} is missing slug for ${required.label}: ${slug}`, errors);
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
