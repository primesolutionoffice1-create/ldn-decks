#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();

const FILES = [
  { path: 'public/llms.txt' },
  { path: 'public/llms-full.txt' },
  {
    path: 'src/app/llms.txt/route.js',
    validatesContentFrom: 'public/llms.txt',
    requiredSourceSnippets: ["readFile(CONTENT_PATH, 'utf8')", "'public', 'llms.txt'"],
  },
  {
    path: 'src/app/llms-full.txt/route.js',
    validatesContentFrom: 'public/llms-full.txt',
    requiredSourceSnippets: ["readFile(CONTENT_PATH, 'utf8')", "'public', 'llms-full.txt'"],
  },
];

const PAGE_FRESHNESS_GUARDS = [
  {
    path: 'src/app/tools/deck-stair-calculator/page.js',
    label: 'Virginia Deck Stair Calculator',
    expectedDate: '2026-10-04',
    dateSnippets: [
      { label: 'WebApplication dateModified', template: (date) => `dateModified: '${date}'` },
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
    ],
  },
  {
    path: 'src/app/services/deck-stair-lighting/page.js',
    label: 'Deck Stair Lighting Service',
    expectedDate: '2026-10-04',
    dateSnippets: [
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
    ],
  },
  {
    path: 'src/app/covered-deck-builder-northern-virginia/page.js',
    label: 'Covered Deck Builder Northern Virginia',
    expectedDate: '2026-10-06',
    dateSnippets: [
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
      { label: 'structural handoff section', template: () => 'Covered Deck Structural, Permit and Cost Handoff' },
      { label: 'deck replacement handoff route', template: () => 'href="/services/deck-replacement"' },
      { label: 'written estimate route', template: () => 'href="/get-estimate"' },
    ],
  },
  {
    path: 'src/app/covered-deck-cost-northern-virginia/page.js',
    label: 'Covered Deck Cost Northern Virginia',
    expectedDate: '2026-10-06',
    dateSnippets: [
      { label: 'Article dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
      { label: 'structural handoff section', template: () => 'Covered Deck Structural, Stair and Permit Handoff' },
      { label: 'deck replacement handoff route', template: () => 'href="/services/deck-replacement"' },
      { label: 'written estimate route', template: () => 'href="/get-estimate"' },
    ],
  },
  {
    path: 'src/app/composite-decks/page.js',
    label: 'Composite Decks',
    expectedDate: '2026-10-06',
    dateSnippets: [
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
      { label: 'structural handoff section', template: () => 'Structural, Stair and Permit Handoff' },
      { label: 'deck replacement handoff route', template: () => "'/services/deck-replacement'" },
      { label: 'stair calculator handoff route', template: () => "'/tools/deck-stair-calculator'" },
      { label: 'written estimate route', template: () => "'/get-estimate'" },
    ],
  },
  {
    path: 'src/app/timbertech-azek-deck-cost-northern-virginia/page.js',
    label: 'TimberTech and AZEK Deck Cost Northern Virginia',
    expectedDate: '2026-10-06',
    dateSnippets: [
      { label: 'Article dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
      { label: 'structural handoff section', template: () => 'Structural, Stair and Permit Handoff' },
      { label: 'deck replacement handoff route', template: () => 'href="/services/deck-replacement"' },
      { label: 'stair calculator handoff route', template: () => 'href="/tools/deck-stair-calculator"' },
      { label: 'written estimate route', template: () => 'href="/get-estimate"' },
    ],
  },
  {
    path: 'src/app/trex-vs-timbertech-vs-azek/page.js',
    label: 'Trex vs TimberTech vs AZEK',
    expectedDate: '2026-10-06',
    dateSnippets: [
      { label: 'modifiedDate constant', template: (date) => `const modifiedDate = '${date}'` },
      { label: 'structural handoff section', template: () => 'Structural, Stair and Permit Handoff' },
      { label: 'deck replacement handoff route', template: () => "['/services/deck-replacement', 'Deck replacement decision']" },
      { label: 'stair calculator handoff route', template: () => "['/tools/deck-stair-calculator', 'Deck stair calculator']" },
      { label: 'written estimate route', template: () => "['/get-estimate', 'Written estimate request']" },
    ],
  },
  {
    path: 'src/app/premium-composite-deck-replacement-arlington-alexandria-mclean-va/page.js',
    label: 'Premium Composite Deck Replacement Arlington Alexandria McLean',
    expectedDate: '2026-10-07',
    dateSnippets: [
      { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      { label: 'NamedAuthor lastUpdated', template: (date) => `lastUpdated="${date}"` },
      { label: 'structural handoff section', template: () => 'Structural, Stair, Permit and Estimate Handoff' },
      { label: 'deck replacement handoff route', template: () => 'href="/services/deck-replacement"' },
      { label: 'stair calculator handoff route', template: () => "['/tools/deck-stair-calculator', 'Stair calculator'" },
      { label: 'ledger flashing handoff route', template: () => "['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger flashing guide'" },
      { label: 'written estimate route', template: () => "['/get-estimate', 'Written estimate'" },
    ],
  },
  {
    path: 'src/lib/educationData.js',
    label: 'Deck Stair Construction Diagram',
    expectedDate: 'October 7, 2026',
    dateSnippets: [
      { label: 'article dateModified', template: (date) => `dateModified: '${date}'` },
      { label: 'diagram estimate handoff heading', template: () => '## Diagram-to-Estimate Handoff' },
      { label: 'stair calculator handoff link', template: () => '[Virginia deck stair calculator](/tools/deck-stair-calculator)' },
      { label: 'stair code handoff link', template: () => '[Virginia deck stair code guide](/education/deck-stair-code-rise-run-virginia)' },
      { label: 'written estimate handoff link', template: () => '[written estimate](/get-estimate)' },
    ],
  },
  {
    path: 'src/lib/educationData.js',
    label: 'Deck Understructure Guide',
    expectedDate: 'October 6, 2026',
    dateSnippets: [
      { label: 'article dateModified', template: (date) => `dateModified: '${date}'` },
      { label: 'understructure handoff heading', template: () => '## Understructure, Permit or Replacement Handoff' },
      { label: 'Loudoun permit handoff link', template: () => '[Loudoun County deck permit guide](/deck-permit-loudoun-county-virginia)' },
      { label: 'Fairfax permit handoff link', template: () => '[Fairfax County deck permit guide](/deck-permit-fairfax-county-virginia)' },
      { label: 'written estimate handoff link', template: () => '[written estimate](/get-estimate)' },
    ],
  },
  {
    path: 'src/lib/educationData.js',
    label: 'Ledger Board Flashing Guide',
    expectedDate: 'October 5, 2026',
    dateSnippets: [
      { label: 'article dateModified', template: (date) => `dateModified: '${date}'` },
      { label: 'inspection handoff heading', template: () => '## Inspection, Permit, Repair or Replacement Handoff' },
      { label: 'deck replacement handoff link', template: () => '[deck replacement](/services/deck-replacement)' },
      { label: 'written estimate handoff link', template: () => '[written estimate](/get-estimate)' },
    ],
  },
  {
    path: 'src/lib/educationData.js',
    label: 'Deck Stair Safety Inspection Checklist',
    expectedDate: 'October 5, 2026',
    dateSnippets: [
      { label: 'article dateModified', template: (date) => `dateModified: '${date}'` },
      { label: 'inspection handoff heading', template: () => '## Inspection, Repair or Replacement Handoff' },
      { label: 'deck replacement route', template: () => '[deck replacement](/services/deck-replacement)' },
      { label: 'written estimate route', template: () => '[written estimate](/get-estimate)' },
    ],
  },
  {
    path: 'src/lib/educationData.js',
    label: 'Common Deck Stair Inspection Failures',
    expectedDate: 'October 5, 2026',
    dateSnippets: [
      { label: 'article dateModified', template: (date) => `dateModified: '${date}'` },
      { label: 'failed inspection handoff heading', template: () => '## Failed Stair Inspection Handoff' },
      { label: 'professional deck inspection route', template: () => '[professional deck inspection](/services/deck-inspection)' },
      { label: 'written estimate route', template: () => '[written estimate](/get-estimate)' },
    ],
  },
];

const FORBIDDEN_ADDRESS_PATTERNS = [
  { label: 'street number', pattern: /\b13704\b/i },
  { label: 'street name', pattern: /\bWinding\s+Oak\b/i },
  { label: 'HQ shorthand', pattern: /\bHQ\s*,/i },
  { label: 'headquarters wording', pattern: /\bHeadquarters\b/i },
  { label: 'showroom wording', pattern: /office\s*\+\s*material\s+showroom/i },
];

const REQUIRED_PRIORITY_URLS = [
  'https://ldndecks.com/tools',
  'https://ldndecks.com/tools/deck-stair-calculator',
  'https://ldndecks.com/services/deck-stair-lighting',
  'https://ldndecks.com/education/deck-stair-code-rise-run-virginia',
  'https://ldndecks.com/education/deck-stair-construction-diagram',
  'https://ldndecks.com/education/deck-stair-safety-inspection-checklist',
  'https://ldndecks.com/education/common-deck-stair-inspection-failures-virginia',
  'https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia',
  'https://ldndecks.com/education/deck-snow-load-requirements-virginia',
  'https://ldndecks.com/education/understanding-deck-load-paths',
  'https://ldndecks.com/education/soil-bearing-capacity-deck-footings-va',
  'https://ldndecks.com/education/deck-understructure-guide',
  'https://ldndecks.com/deck-permit-loudoun-county-virginia',
  'https://ldndecks.com/deck-permit-fairfax-county-virginia',
  'https://ldndecks.com/deck-permit-prince-william-county-virginia',
  'https://ldndecks.com/deck-permit-arlington-county-virginia',
  'https://ldndecks.com/composite-deck-cost-northern-virginia',
  'https://ldndecks.com/timbertech-azek-deck-cost-northern-virginia',
  'https://ldndecks.com/composite-decks',
  'https://ldndecks.com/trex-decks',
  'https://ldndecks.com/timbertech-decks',
  'https://ldndecks.com/trex-vs-timbertech-vs-azek',
  'https://ldndecks.com/services/deck-repair',
  'https://ldndecks.com/services/deck-replacement',
  'https://ldndecks.com/premium-composite-deck-replacement-arlington-alexandria-mclean-va',
  'https://ldndecks.com/covered-deck-builder-northern-virginia',
  'https://ldndecks.com/covered-deck-cost-northern-virginia',
  'https://ldndecks.com/get-estimate',
];

function lineNumber(text, index) {
  return text.slice(0, index).split('\n').length;
}

function countOccurrences(text, needle) {
  let count = 0;
  let index = text.indexOf(needle);
  while (index !== -1) {
    count += 1;
    index = text.indexOf(needle, index + needle.length);
  }
  return count;
}

function extractPriorityUrlSection(text) {
  const heading = '## Priority AI Retrieval URLs';
  const headingIndex = text.indexOf(heading);
  if (headingIndex === -1) return null;

  const sectionStart = headingIndex + heading.length;
  const rest = text.slice(sectionStart);
  const nextHeadingIndex = rest.search(/\n##\s+/);
  return nextHeadingIndex === -1 ? rest : rest.slice(0, nextHeadingIndex);
}

function readIfExists(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) return null;
  return fs.readFileSync(absolutePath, 'utf8');
}

function llmsLastUpdated(text) {
  const match = text?.match(/^Last updated:\s*(\d{4}-\d{2}-\d{2})\s*$/m);
  return match?.[1] || null;
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  const warnings = [];
  const fileResults = [];

  for (const file of FILES) {
    const relativePath = file.path;
    const absolutePath = path.join(ROOT, relativePath);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`Missing AI discovery file: ${relativePath}`);
      fileResults.push({ path: relativePath, exists: false });
      continue;
    }

    const sourceText = fs.readFileSync(absolutePath, 'utf8');
    let text = sourceText;
    let validatesContentFrom = null;

    if (file.validatesContentFrom) {
      validatesContentFrom = file.validatesContentFrom;
      const contentPath = path.join(ROOT, file.validatesContentFrom);

      if (!fs.existsSync(contentPath)) {
        errors.push(`${relativePath} validates missing AI discovery source: ${file.validatesContentFrom}`);
      } else {
        text = fs.readFileSync(contentPath, 'utf8');
      }

      for (const snippet of file.requiredSourceSnippets || []) {
        if (!sourceText.includes(snippet)) {
          errors.push(`${relativePath} is not wired to the canonical source; missing route snippet: ${snippet}`);
        }
      }
    }

    const forbiddenMatches = [];

    for (const forbidden of FORBIDDEN_ADDRESS_PATTERNS) {
      for (const match of text.matchAll(new RegExp(forbidden.pattern, forbidden.pattern.flags.includes('g') ? forbidden.pattern.flags : `${forbidden.pattern.flags}g`))) {
        forbiddenMatches.push({
          label: forbidden.label,
          match: match[0],
          line: lineNumber(text, match.index || 0),
        });
      }
    }

    for (const match of forbiddenMatches) {
      errors.push(`${relativePath}:${match.line} contains forbidden exact-address amplification (${match.label}): ${match.match}`);
    }

    const urlCoverage = REQUIRED_PRIORITY_URLS.map((url) => ({
      url,
      count: countOccurrences(text, url),
    }));
    const priorityUrlSection = extractPriorityUrlSection(text);
    const prioritySectionCoverage = REQUIRED_PRIORITY_URLS.map((url) => ({
      url,
      count: priorityUrlSection ? countOccurrences(priorityUrlSection, url) : 0,
    }));

    for (const coverage of urlCoverage) {
      if (coverage.count === 0) {
        errors.push(`${relativePath} is missing priority AI retrieval URL: ${coverage.url}`);
      }
    }

    if (!priorityUrlSection) {
      errors.push(`${relativePath} is missing a dedicated Priority AI Retrieval URLs section.`);
    }

    for (const coverage of prioritySectionCoverage) {
      if (coverage.count === 0) {
        errors.push(`${relativePath} Priority AI Retrieval URLs section is missing: ${coverage.url}`);
      }
    }

    fileResults.push({
      path: relativePath,
      exists: true,
      bytes: Buffer.byteLength(sourceText, 'utf8'),
      validatesContentFrom,
      validatedContentBytes: Buffer.byteLength(text, 'utf8'),
      forbiddenMatches,
      requiredUrls: urlCoverage,
      presentRequiredUrls: urlCoverage.filter((entry) => entry.count > 0).length,
      missingRequiredUrls: urlCoverage.filter((entry) => entry.count === 0).map((entry) => entry.url),
      prioritySectionRequiredUrls: prioritySectionCoverage,
      presentPrioritySectionUrls: prioritySectionCoverage.filter((entry) => entry.count > 0).length,
      missingPrioritySectionUrls: prioritySectionCoverage.filter((entry) => entry.count === 0).map((entry) => entry.url),
    });
  }

  const freshnessGuardResults = [];

  for (const guard of PAGE_FRESHNESS_GUARDS) {
    const pageText = readIfExists(guard.path);
    const sourceText = guard.sourceFile ? readIfExists(guard.sourceFile) : null;
    const expectedDate = guard.expectedDate || llmsLastUpdated(sourceText);
    const guardErrors = [];

    if (guard.sourceFile && !sourceText) {
      guardErrors.push(`Missing freshness source file: ${guard.sourceFile}`);
    }

    if (!pageText) {
      guardErrors.push(`Missing guarded source page: ${guard.path}`);
    }

    if (!expectedDate) {
      guardErrors.push(`${guard.sourceFile} is missing a parseable Last updated date.`);
    }

    if (pageText && expectedDate) {
      const requiredSnippets = (guard.dateSnippets || [
        { label: 'WebPageSchema dateModified', template: (date) => `dateModified="${date}"` },
      ]).map((requirement) => ({
        label: requirement.label,
        snippet: requirement.template(expectedDate),
      }));

      for (const requirement of requiredSnippets) {
        if (!pageText.includes(requirement.snippet)) {
          guardErrors.push(`${guard.label} page is missing ${requirement.label} aligned to ${guard.sourceFile} (${expectedDate}).`);
        }
      }
    }

    errors.push(...guardErrors);
    freshnessGuardResults.push({
      path: guard.path,
      label: guard.label,
      sourceFile: guard.sourceFile || null,
      expectedDate,
      ok: guardErrors.length === 0,
      errors: guardErrors,
    });
  }

  const result = {
    ok: errors.length === 0,
    date: DATE,
    filesChecked: FILES.length,
    existingFiles: fileResults.filter((file) => file.exists).length,
    requiredUrls: REQUIRED_PRIORITY_URLS.length,
    forbiddenPatterns: FORBIDDEN_ADDRESS_PATTERNS.map((entry) => entry.label),
    freshnessGuards: freshnessGuardResults,
    files: fileResults,
    warnings,
    errors,
    outputs: {
      json: `scripts/output/ai-discovery-validation-${DATE}.json`,
      markdown: `scripts/output/ai-discovery-validation-${DATE}.md`,
    },
  };

  const markdown = [
    `# AI Discovery Validation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Files checked: ${result.filesChecked}`,
    `- Existing files: ${result.existingFiles}`,
    `- Required priority URLs per file: ${result.requiredUrls}`,
    `- Forbidden exact-address patterns: ${result.forbiddenPatterns.length}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## File Coverage',
    '',
    '| File | Validated Content | Required URLs Present | Forbidden Matches | Source Bytes | Content Bytes |',
    '|---|---|---:|---:|---:|---:|',
    ...fileResults.map((file) => `| \`${file.path}\` | ${file.validatesContentFrom ? `\`${file.validatesContentFrom}\`` : 'self'} | ${file.presentRequiredUrls ?? 0}/${REQUIRED_PRIORITY_URLS.length} | ${file.forbiddenMatches?.length ?? 0} | ${file.bytes ?? 0} | ${file.validatedContentBytes ?? file.bytes ?? 0} |`),
    '',
    '## Priority Section Coverage',
    '',
    '| File | Required URLs in Priority Section | Missing Priority Section URLs |',
    '|---|---:|---|',
    ...fileResults.map((file) => `| \`${file.path}\` | ${file.presentPrioritySectionUrls ?? 0}/${REQUIRED_PRIORITY_URLS.length} | ${(file.missingPrioritySectionUrls || []).length ? file.missingPrioritySectionUrls.join('<br>') : 'None'} |`),
    '',
    '## Page Freshness Guards',
    '',
    '| Page | Source | Expected Date | Status |',
    '|---|---|---|---|',
    ...freshnessGuardResults.map((guard) => `| \`${guard.path}\` | ${guard.sourceFile ? `\`${guard.sourceFile}\`` : 'inline guard'} | ${guard.expectedDate || 'missing'} | ${guard.ok ? 'PASS' : 'FAIL'} |`),
    '',
    '## Required URLs',
    '',
    ...REQUIRED_PRIORITY_URLS.map((url) => `- ${url}`),
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
    filesChecked: result.filesChecked,
    existingFiles: result.existingFiles,
    requiredUrls: result.requiredUrls,
    errors: result.errors,
    warnings: result.warnings,
    outputs: result.outputs,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
