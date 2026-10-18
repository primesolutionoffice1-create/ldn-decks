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
  toolsHubPage: 'src/app/tools/page.js',
  stairCalculatorPage: 'src/app/tools/deck-stair-calculator/page.js',
  stairLightingPage: 'src/app/services/deck-stair-lighting/page.js',
  deckReplacementPage: 'src/app/services/deck-replacement/page.js',
  loudounPermitPage: 'src/app/deck-permit-loudoun-county-virginia/page.js',
  fairfaxPermitPage: 'src/app/deck-permit-fairfax-county-virginia/page.js',
  princeWilliamPermitPage: 'src/app/deck-permit-prince-william-county-virginia/page.js',
  arlingtonPermitPage: 'src/app/deck-permit-arlington-county-virginia/page.js',
  compositeDecksPage: 'src/app/composite-decks/page.js',
  trexDecksPage: 'src/app/trex-decks/page.js',
  timbertechDecksPage: 'src/app/timbertech-decks/page.js',
  materialComparisonPage: 'src/app/trex-vs-timbertech-vs-azek/page.js',
  timbertechAzekCostPage: 'src/app/timbertech-azek-deck-cost-northern-virginia/page.js',
  premiumCompositeReplacementPage: 'src/app/premium-composite-deck-replacement-arlington-alexandria-mclean-va/page.js',
  coveredDeckPage: 'src/app/covered-deck-builder-northern-virginia/page.js',
  coveredDeckCostPage: 'src/app/covered-deck-cost-northern-virginia/page.js',
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
  '/premium-composite-deck-replacement-arlington-alexandria-mclean-va',
  '/services/deck-inspection',
  '/services/deck-resurfacing',
  '/tools',
  '/tools/deck-stair-calculator',
  '/services/deck-stair-lighting',
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

const REQUIRED_STAIR_CALCULATOR_LINKS = [
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/deck-stair-safety-inspection-checklist',
  '/education/common-deck-stair-inspection-failures-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/deck-footing-code-northern-virginia',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/deck-permit-arlington-county-virginia',
  '/near-you/loudoun-county',
  '/near-you/fairfax-county',
  '/services/deck-inspection',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/get-estimate',
];

const REQUIRED_STAIR_LIGHTING_LINKS = [
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/deck-stair-safety-inspection-checklist',
  '/education/common-deck-stair-inspection-failures-virginia',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/get-estimate',
];

const REQUIRED_PERMIT_HANDOFF_LINKS = [
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/deck-stair-safety-inspection-checklist',
  '/education/common-deck-stair-inspection-failures-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/services/deck-inspection',
  '/services/deck-repair',
  '/services/deck-replacement',
  '/lead-magnets/nova-deck-permit-checklist-2026',
  '/get-estimate',
];

const REQUIRED_DECK_REPLACEMENT_HANDOFF_LINKS = [
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/common-deck-stair-inspection-failures-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/deck-permit-arlington-county-virginia',
];

const REQUIRED_MATERIAL_CLUSTER_HANDOFF_LINKS = [
  '/services/deck-replacement',
  '/premium-composite-deck-replacement-arlington-alexandria-mclean-va',
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/deck-permit-arlington-county-virginia',
];

const REQUIRED_MATERIAL_HANDOFF_SNIPPETS = [
  'Structural, Stair and Permit Handoff',
  'premium boards should follow the structural decision',
];

const REQUIRED_COVERED_DECK_HANDOFF_LINKS = [
  '/services/deck-replacement',
  '/premium-composite-deck-replacement-arlington-alexandria-mclean-va',
  '/covered-deck-cost-northern-virginia',
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/deck-permit-arlington-county-virginia',
  '/get-estimate',
];

const REQUIRED_COVERED_DECK_HANDOFF_SNIPPETS = [
  'dateModified="2026-10-06"',
  'lastUpdated="2026-10-06"',
  'covered-deck-structural-handoff',
  'Covered Deck Structural, Permit and Cost Handoff',
];

const REQUIRED_COVERED_DECK_COST_HANDOFF_LINKS = [
  '/covered-deck-builder-northern-virginia',
  '/services/deck-replacement',
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/deck-permit-loudoun-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/deck-permit-prince-william-county-virginia',
  '/deck-permit-arlington-county-virginia',
  '/get-estimate',
];

const REQUIRED_COVERED_DECK_COST_HANDOFF_SNIPPETS = [
  'dateModified="2026-10-06"',
  'lastUpdated="2026-10-06"',
  'covered-deck-cost-structural-handoff',
  'Covered Deck Structural, Stair and Permit Handoff',
];

const REQUIRED_DECK_REPLACEMENT_SNIPPETS = [
  'dateModified="2026-10-05"',
  'lastUpdated="2026-10-05"',
  '#deck-replacement-structural-handoff',
  'Structure-First Replacement Handoff',
];

const REQUIRED_PREMIUM_COMPOSITE_REPLACEMENT_LINKS = [
  '/services/deck-replacement',
  '/tools/deck-stair-calculator',
  '/education/deck-stair-code-rise-run-virginia',
  '/education/deck-stair-construction-diagram',
  '/education/ledger-board-flashing-deck-attachment-virginia',
  '/deck-permit-arlington-county-virginia',
  '/deck-permit-fairfax-county-virginia',
  '/get-estimate',
];

const REQUIRED_PREMIUM_COMPOSITE_REPLACEMENT_SNIPPETS = [
  'dateModified="2026-10-07"',
  'lastUpdated="2026-10-07"',
  'premium-composite-structural-handoff',
  'Structural, Stair, Permit and Estimate Handoff',
];

const REQUIRED_EDUCATION_HANDOFF_SNIPPETS = [
  '## Diagram-to-Estimate Handoff',
  '## Inspection, Repair or Replacement Handoff',
  '## Failed Stair Inspection Handoff',
  '## Understructure, Permit or Replacement Handoff',
  '[Virginia deck stair calculator](/tools/deck-stair-calculator)',
  '[Virginia deck stair code guide](/education/deck-stair-code-rise-run-virginia)',
  '[professional deck inspection](/services/deck-inspection)',
  '[structural deck repair](/services/deck-repair)',
  '[deck replacement](/services/deck-replacement)',
  '[Loudoun County deck permit guide](/deck-permit-loudoun-county-virginia)',
  '[Fairfax County deck permit guide](/deck-permit-fairfax-county-virginia)',
  '[written estimate](/get-estimate)',
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

function validateToolsHubSchema(text, errors) {
  const positionMatches = [...text.matchAll(/position:\s*(\d+)/g)].map((match) => Number(match[1]));
  const duplicatePositions = positionMatches.filter((position, index) => positionMatches.indexOf(position) !== index);

  if (positionMatches.length < 8) {
    errors.push(`${FILES.toolsHubPage} should expose tool ItemList positions; found ${positionMatches.length}.`);
  }

  if (duplicatePositions.length > 0) {
    errors.push(`${FILES.toolsHubPage} has duplicate ItemList positions: ${[...new Set(duplicatePositions)].join(', ')}.`);
  }

  if (!text.includes('dateModified="2026-10-03"')) {
    errors.push(`${FILES.toolsHubPage} WebPageSchema dateModified is not aligned to the current calculator/llms cycle date.`);
  }

  if (!text.includes("href: '/tools/deck-stair-calculator'")) {
    errors.push(`${FILES.toolsHubPage} is missing the deck stair calculator card.`);
  }
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
  const toolsHubPage = read(FILES.toolsHubPage, errors);
  const stairCalculatorPage = read(FILES.stairCalculatorPage, errors);
  const stairLightingPage = read(FILES.stairLightingPage, errors);
  const deckReplacementPage = read(FILES.deckReplacementPage, errors);
  const coveredDeckPage = read(FILES.coveredDeckPage, errors);
  const coveredDeckCostPage = read(FILES.coveredDeckCostPage, errors);
  const premiumCompositeReplacementPage = read(FILES.premiumCompositeReplacementPage, errors);
  const materialPages = {
    [FILES.compositeDecksPage]: read(FILES.compositeDecksPage, errors),
    [FILES.trexDecksPage]: read(FILES.trexDecksPage, errors),
    [FILES.timbertechDecksPage]: read(FILES.timbertechDecksPage, errors),
    [FILES.materialComparisonPage]: read(FILES.materialComparisonPage, errors),
    [FILES.timbertechAzekCostPage]: read(FILES.timbertechAzekCostPage, errors),
    [FILES.premiumCompositeReplacementPage]: premiumCompositeReplacementPage,
  };
  const permitPages = {
    [FILES.loudounPermitPage]: read(FILES.loudounPermitPage, errors),
    [FILES.fairfaxPermitPage]: read(FILES.fairfaxPermitPage, errors),
    [FILES.princeWilliamPermitPage]: read(FILES.princeWilliamPermitPage, errors),
    [FILES.arlingtonPermitPage]: read(FILES.arlingtonPermitPage, errors),
  };
  const fullText = [
    relatedGuides,
    educationData,
    cityAuthority,
    toolsHubPage,
    stairCalculatorPage,
    stairLightingPage,
    deckReplacementPage,
    premiumCompositeReplacementPage,
    coveredDeckPage,
    coveredDeckCostPage,
    ...Object.values(materialPages),
    ...Object.values(permitPages),
  ].join('\n');

  const relatedGuideCoverage = coverage(relatedGuides, REQUIRED_RELATED_GUIDES);
  const educationCoverage = coverage(educationData, REQUIRED_EDUCATION_RELATED_LINKS);
  const cityCoverage = coverage(cityAuthority, REQUIRED_CITY_AUTHORITY_LINKS);
  const stairCalculatorCoverage = coverage(stairCalculatorPage, REQUIRED_STAIR_CALCULATOR_LINKS);
  const stairLightingCoverage = coverage(stairLightingPage, REQUIRED_STAIR_LIGHTING_LINKS);
  const deckReplacementCoverage = coverage(deckReplacementPage, REQUIRED_DECK_REPLACEMENT_HANDOFF_LINKS);
  const premiumCompositeReplacementCoverage = coverage(premiumCompositeReplacementPage, REQUIRED_PREMIUM_COMPOSITE_REPLACEMENT_LINKS);
  const coveredDeckCoverage = coverage(coveredDeckPage, REQUIRED_COVERED_DECK_HANDOFF_LINKS);
  const coveredDeckCostCoverage = coverage(coveredDeckCostPage, REQUIRED_COVERED_DECK_COST_HANDOFF_LINKS);
  const materialPageCoverage = Object.entries(materialPages).map(([file, text]) => ({
    file,
    links: coverage(text, REQUIRED_MATERIAL_CLUSTER_HANDOFF_LINKS),
    snippets: REQUIRED_MATERIAL_HANDOFF_SNIPPETS.map((snippet) => ({
      snippet,
      count: count(text, snippet),
      line: lineNumber(text, snippet),
    })),
  }));
  const permitPageCoverage = Object.entries(permitPages).map(([file, text]) => ({
    file,
    links: coverage(text, REQUIRED_PERMIT_HANDOFF_LINKS),
  }));
  const siteWideCoverage = coverage(fullText, PRIORITY_LINKS);

  requireCoverage(FILES.relatedGuides, relatedGuideCoverage, errors);
  requireCoverage(FILES.educationData, educationCoverage, errors);
  requireCoverage(FILES.cityAuthority, cityCoverage, errors);
  requireCoverage(FILES.stairCalculatorPage, stairCalculatorCoverage, errors);
  requireCoverage(FILES.stairLightingPage, stairLightingCoverage, errors);
  requireCoverage(FILES.deckReplacementPage, deckReplacementCoverage, errors);
  requireCoverage(FILES.premiumCompositeReplacementPage, premiumCompositeReplacementCoverage, errors);
  requireCoverage(FILES.coveredDeckPage, coveredDeckCoverage, errors);
  requireCoverage(FILES.coveredDeckCostPage, coveredDeckCostCoverage, errors);
  for (const row of materialPageCoverage) {
    requireCoverage(row.file, row.links, errors);
    for (const snippet of row.snippets) {
      if (snippet.count === 0) {
        errors.push(`${row.file} is missing material handoff snippet: ${snippet.snippet}`);
      }
    }
  }
  for (const row of permitPageCoverage) {
    requireCoverage(row.file, row.links, errors);
  }
  requireCoverage('priority SEO link surface', siteWideCoverage, errors);
  validateToolsHubSchema(toolsHubPage, errors);

  for (const snippet of REQUIRED_EDUCATION_HANDOFF_SNIPPETS) {
    if (!educationData.includes(snippet)) {
      errors.push(`${FILES.educationData} is missing stair inspection handoff snippet: ${snippet}`);
    }
  }

  for (const snippet of REQUIRED_DECK_REPLACEMENT_SNIPPETS) {
    if (!deckReplacementPage.includes(snippet)) {
      errors.push(`${FILES.deckReplacementPage} is missing replacement handoff snippet: ${snippet}`);
    }
  }

  for (const snippet of REQUIRED_PREMIUM_COMPOSITE_REPLACEMENT_SNIPPETS) {
    if (!premiumCompositeReplacementPage.includes(snippet)) {
      errors.push(`${FILES.premiumCompositeReplacementPage} is missing premium replacement handoff snippet: ${snippet}`);
    }
  }

  for (const snippet of REQUIRED_COVERED_DECK_HANDOFF_SNIPPETS) {
    if (!coveredDeckPage.includes(snippet)) {
      errors.push(`${FILES.coveredDeckPage} is missing covered deck handoff snippet: ${snippet}`);
    }
  }

  for (const snippet of REQUIRED_COVERED_DECK_COST_HANDOFF_SNIPPETS) {
    if (!coveredDeckCostPage.includes(snippet)) {
      errors.push(`${FILES.coveredDeckCostPage} is missing covered deck cost handoff snippet: ${snippet}`);
    }
  }

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
    educationHandoffSnippets: REQUIRED_EDUCATION_HANDOFF_SNIPPETS,
    cityAuthorityRequiredLinks: cityCoverage,
    stairCalculatorRequiredLinks: stairCalculatorCoverage,
    stairLightingRequiredLinks: stairLightingCoverage,
    deckReplacementRequiredLinks: deckReplacementCoverage,
    premiumCompositeReplacementRequiredLinks: premiumCompositeReplacementCoverage,
    coveredDeckRequiredLinks: coveredDeckCoverage,
    permitPageRequiredLinks: permitPageCoverage,
    materialPageRequiredLinks: materialPageCoverage,
    deckReplacementHandoffSnippets: REQUIRED_DECK_REPLACEMENT_SNIPPETS,
    premiumCompositeReplacementHandoffSnippets: REQUIRED_PREMIUM_COMPOSITE_REPLACEMENT_SNIPPETS,
    coveredDeckHandoffSnippets: REQUIRED_COVERED_DECK_HANDOFF_SNIPPETS,
    coveredDeckCostRequiredLinks: coveredDeckCostCoverage,
    coveredDeckCostHandoffSnippets: REQUIRED_COVERED_DECK_COST_HANDOFF_SNIPPETS,
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
    '## Stair Calculator Handoff Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...stairCalculatorCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
    '',
    '## Stair Lighting Handoff Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...stairLightingCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
    '',
    '## Deck Replacement Handoff Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...deckReplacementCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
    '',
    '## Premium Composite Replacement Handoff Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...premiumCompositeReplacementCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
    '',
    '## Covered Deck Handoff Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...coveredDeckCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
    '',
    '## Covered Deck Cost Handoff Coverage',
    '',
    '| Link | Count | First Line |',
    '|---|---:|---:|',
    ...coveredDeckCostCoverage.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
    '',
    '## Material Cluster Structural Handoff Coverage',
    '',
    ...materialPageCoverage.flatMap((page) => [
      `### ${page.file}`,
      '',
      '| Link | Count | First Line |',
      '|---|---:|---:|',
      ...page.links.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
      '',
      '| Snippet | Count | First Line |',
      '|---|---:|---:|',
      ...page.snippets.map((row) => `| \`${row.snippet}\` | ${row.count} | ${row.line ?? 'missing'} |`),
      '',
    ]),
    '## County Permit Handoff Coverage',
    '',
    ...permitPageCoverage.flatMap((page) => [
      `### ${page.file}`,
      '',
      '| Link | Count | First Line |',
      '|---|---:|---:|',
      ...page.links.map((row) => `| \`${row.href}\` | ${row.count} | ${row.line ?? 'missing'} |`),
      '',
    ]),
    '## Education Inspection Handoff Snippets',
    '',
    ...REQUIRED_EDUCATION_HANDOFF_SNIPPETS.map((snippet) => `- \`${snippet}\``),
    '',
    '## Deck Replacement Handoff Snippets',
    '',
    ...REQUIRED_DECK_REPLACEMENT_SNIPPETS.map((snippet) => `- \`${snippet}\``),
    '',
    '## Premium Composite Replacement Handoff Snippets',
    '',
    ...REQUIRED_PREMIUM_COMPOSITE_REPLACEMENT_SNIPPETS.map((snippet) => `- \`${snippet}\``),
    '',
    '## Covered Deck Handoff Snippets',
    '',
    ...REQUIRED_COVERED_DECK_HANDOFF_SNIPPETS.map((snippet) => `- \`${snippet}\``),
    '',
    '## Covered Deck Cost Handoff Snippets',
    '',
    ...REQUIRED_COVERED_DECK_COST_HANDOFF_SNIPPETS.map((snippet) => `- \`${snippet}\``),
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
