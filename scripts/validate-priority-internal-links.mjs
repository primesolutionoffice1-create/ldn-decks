#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();

const FILES = {
  relatedGuides: 'src/components/RelatedGuides.jsx',
  educationData: 'src/lib/educationData.js',
  cityAuthority: 'src/components/CityAuthorityExpansion.jsx',
};

const PRIORITY_LINKS = [
  '/deck-builder-northern-virginia',
  '/near-you/loudoun-county',
  '/near-you/fairfax-county',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/deck-permit-arlington-county-virginia',
  '/deck-permit-hoa-cost-loudoun-county',
  '/composite-deck-cost-northern-virginia',
  '/composite-decks',
  '/trex-decks',
  '/timbertech-decks',
  '/trex-vs-timbertech-vs-azek',
  '/covered-deck-builder-northern-virginia',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/services/deck-inspection',
  '/services/deck-resurfacing',
  '/tools/deck-stair-calculator',
  '/tools/deck-footing-depth-calculator-virginia',
  '/tools/deck-beam-span-calculator-virginia',
  '/tools/deck-joist-span-calculator-virginia',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/deck-stair-safety-inspection-checklist',
  '/education/common-deck-stair-inspection-failures-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/education/deck-snow-load-requirements-virginia',
  '/education/understanding-deck-load-paths',
  '/education/soil-bearing-capacity-deck-footings-va',
  '/education/deck-understructure-guide',
  '/get-estimate',
];

const REQUIRED_RELATED_GUIDES = [
  '/deck-builder-northern-virginia',
  '/composite-deck-cost-northern-virginia',
  '/trex-vs-timbertech-vs-azek',
  '/timbertech-decks',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/covered-deck-builder-northern-virginia',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/ledger-board-flashing-deck-attachment-virginia',
];

const REQUIRED_EDUCATION_RELATED_LINKS = [
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/tools/deck-stair-calculator',
  '/tools/deck-footing-depth-calculator-virginia',
  '/tools/deck-beam-span-calculator-virginia',
  '/tools/deck-joist-span-calculator-virginia',
  '/services/deck-inspection',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/ledger-board-flashing-deck-attachment-virginia',
];

const REQUIRED_CITY_AUTHORITY_LINKS = [
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/composite-decks',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/covered-deck-builder-northern-virginia',
];

const FORBIDDEN_LINKS = [
  {
    path: '/services/deck-repair-and-structural-maintenance',
    reason: 'Use the canonical deck repair, inspection, or replacement path instead of the redirect alias.',
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

function count(text, needle) {
  let total = 0;
  let index = text.indexOf(needle);
  while (index !== -1) {
    total += 1;
    index = text.indexOf(needle, index + needle.length);
  }
  return total;
}

function lineNumber(text, needle) {
  const index = text.indexOf(needle);
  if (index === -1) return null;
  return text.slice(0, index).split('\n').length;
}

function coverage(text, links) {
  return links.map((href) => ({
    href,
    count: count(text, href),
    line: lineNumber(text, href),
  }));
}

function requireCoverage(label, rows, errors) {
  for (const row of rows) {
    if (row.count === 0) {
      errors.push(`${label} is missing priority internal link: ${row.href}`);
    }
  }
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  const warnings = [];
  const relatedGuides = read(FILES.relatedGuides, errors);
  const educationData = read(FILES.educationData, errors);
  const cityAuthority = read(FILES.cityAuthority, errors);
  const fullText = [relatedGuides, educationData, cityAuthority].join('\n');

  const relatedGuideCoverage = coverage(relatedGuides, REQUIRED_RELATED_GUIDES);
  const educationCoverage = coverage(educationData, REQUIRED_EDUCATION_RELATED_LINKS);
  const cityCoverage = coverage(cityAuthority, REQUIRED_CITY_AUTHORITY_LINKS);
  const siteWideCoverage = coverage(fullText, PRIORITY_LINKS);

  requireCoverage(FILES.relatedGuides, relatedGuideCoverage, errors);
  requireCoverage(FILES.educationData, educationCoverage, errors);
  requireCoverage(FILES.cityAuthority, cityCoverage, errors);
  requireCoverage('priority SEO link surface', siteWideCoverage, errors);

  const forbiddenMatches = FORBIDDEN_LINKS
    .map((entry) => ({
      ...entry,
      count: count(fullText, entry.path),
      line: lineNumber(fullText, entry.path),
    }))
    .filter((entry) => entry.count > 0);

  for (const match of forbiddenMatches) {
    errors.push(`Forbidden internal link remains (${match.path}): ${match.reason}`);
  }

  if (!relatedGuides.includes("category === 'structural-repair'")) {
    errors.push(`${FILES.relatedGuides} is missing the structural-repair category branch.`);
  }

  if (!relatedGuides.includes('DECK_CORE_PRIORITY')) {
    errors.push(`${FILES.relatedGuides} is missing the deck-core priority link group.`);
  }

  const result = {
    ok: errors.length === 0,
    date: DATE,
    filesChecked: Object.values(FILES),
    priorityLinksChecked: PRIORITY_LINKS.length,
    relatedGuideRequiredLinks: relatedGuideCoverage,
    educationRequiredLinks: educationCoverage,
    cityAuthorityRequiredLinks: cityCoverage,
    siteWidePriorityCoverage: siteWideCoverage,
    forbiddenMatches,
    warnings,
    errors,
    outputs: {
      json: `scripts/output/priority-internal-links-validation-${DATE}.json`,
      markdown: `scripts/output/priority-internal-links-validation-${DATE}.md`,
    },
  };

  const markdown = [
    `# Priority Internal Links Validation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Files checked: ${result.filesChecked.length}`,
    `- Priority links checked: ${result.priorityLinksChecked}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Site-Wide Priority Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...siteWideCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
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
    filesChecked: result.filesChecked.length,
    priorityLinksChecked: result.priorityLinksChecked,
    errors: result.errors,
    warnings: result.warnings,
    outputs: result.outputs,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
