#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const SRC_APP = path.join(ROOT, 'src/app');
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const TARGETS = [
  {
    route: '/composite-deck-cost-northern-virginia',
    intent: 'commercial investigation: composite deck cost, Trex/TimberTech pricing, calculator-to-estimate',
    expected: ['quick answer', 'calculator', 'pricing tables', 'financing', 'manufacturer comparison', 'estimate CTA'],
  },
  {
    route: '/deck-cost-calculator',
    intent: 'calculator-led estimate capture',
    expected: ['calculator', 'written estimate CTA', 'financing', 'embed trust'],
  },
  {
    route: '/services/deck-repair',
    intent: 'inspection-first deck repair lead capture',
    expected: ['safety answer', 'inspection CTA', 'repair-vs-replace', 'permit/code guidance', 'no unverified pricing'],
  },
  {
    route: '/deck-repair',
    intent: 'legacy/top-level deck repair support page canonicalized to service hub',
    expected: ['canonical support', 'inspection CTA', 'repair hub link'],
  },
  {
    route: '/deck-repair-loudoun-county',
    intent: 'local deck repair page for Loudoun County',
    expected: ['local repair signals', 'inspection CTA', 'Loudoun permit guidance', 'service hub link'],
  },
  {
    route: '/services/deck-resurfacing',
    intent: 'sound-frame resurfacing and wood-to-composite upgrade lead capture',
    expected: ['frame inspection', 'resurface-vs-replace', 'material comparison', 'calculator/payment CTA'],
  },
  {
    route: '/services/deck-replacement',
    intent: 'full rebuild and repair-vs-replace lead capture',
    expected: ['replacement threshold', 'structural evaluation CTA', 'pricing anchor', 'calculator/payment CTA'],
  },
  {
    route: '/deck-resurfacing-vs-replacement',
    intent: 'decision page for repair/resurface/replace ambiguity',
    expected: ['decision framework', 'cost comparison', 'service path links', 'estimate CTA'],
  },
  {
    route: '/deck-financing',
    intent: 'financing education and payment path capture',
    expected: ['payment CTA', 'calculator', 'compliance language', 'service links'],
  },
  {
    route: '/get-estimate',
    intent: 'lead form and bottom-funnel conversion hub',
    expected: ['phone CTA', 'form path', 'service triage', 'trust verification', 'calculator'],
  },
];

function readText(relativePath, fallback = '') {
  try {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
  } catch {
    return fallback;
  }
}

function readJson(relativePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
  } catch {
    return fallback;
  }
}

function pageFileForRoute(route) {
  const trimmed = route.replace(/^\//, '') || 'page';
  return path.join(SRC_APP, trimmed === 'page' ? 'page.js' : trimmed, 'page.js');
}

function routeFile(relativeRoute) {
  return path.relative(ROOT, pageFileForRoute(relativeRoute));
}

function stripCode(text) {
  return text
    .replace(/import\s+[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function extractInternalLinks(text) {
  const links = new Set();
  const patterns = [
    /href\s*=\s*["'](\/[^"']+)["']/g,
    /<Link[^>]+href=["'](\/[^"']+)["']/g,
    /\{\s*href:\s*["'](\/[^"']+)["']/g,
    /\[\s*["'](\/[^"']+)["']/g,
  ];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const href = match[1].split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
      if (!href.startsWith('/_next') && !href.startsWith('/api') && !/\.(?:png|jpe?g|webp|svg|xml|txt)$/i.test(href)) {
        links.add(href);
      }
    }
  }
  return [...links].sort();
}

function detectRedirect(text) {
  const match = text.match(/redirect\(['"]([^'"]+)['"]\)/);
  return match?.[1] || null;
}

function readinessFor(route, readiness) {
  return (readiness?.pages || []).find((page) => page.page === route) || null;
}

function hasAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function scorePage(text, target, readiness) {
  const compact = stripCode(text);
  const redirectTarget = detectRedirect(text);
  if (redirectTarget) {
    return {
      route: target.route,
      file: routeFile(target.route),
      intent: target.intent,
      redirectTarget,
      score: null,
      status: 'redirect',
      issues: [`Redirects to ${redirectTarget}. Make sure this is intentional for search intent and internal links.`],
      wins: [],
      metrics: {},
    };
  }

  const pageReadiness = readinessFor(target.route, readiness);
  const proofGated = ['blocked', 'proof-incomplete'].includes(pageReadiness?.verdict);
  const links = extractInternalLinks(text);
  const repairPricingSchema = /price=["']\d|lowPrice=["']\d|highPrice=["']\d/i.test(text);
  const repairCostAnswerWithDollar = /q:\s*["'][^"']*cost[^"']*["'][\s\S]{0,260}a:\s*["'][^"']*\$[0-9]/i.test(text);
  const repairCostCopyWithDollar = /(deck repair costs?|structural deck repair pricing|repair pricing)[^.\n]{0,180}\$[0-9]/i.test(text);

  const signals = {
    metadata: /buildMetadata|export const metadata/.test(text),
    h1: /<h1\b/i.test(text),
    quickAnswer: /Quick Answer|data-speakable|PlanningUpdate|AboveFoldCTA|Pricing Anchor|ServicesHeader/i.test(text),
    calculator: /DeckCostCalculatorWidget|deck-cost-calculator|deck-payment-estimator|payment estimator/i.test(text),
    estimateCta: /get-estimate|CallLink|SimpleCTA|ContactHome|ServicesCallToAction|AboveFoldCTA/i.test(text),
    financing: /financing|payment|subject to approval|deck-financing/i.test(compact),
    namedAuthor: /NamedAuthor/.test(text),
    trust: /TrustBanner|BBB|reviews|Customer Reviews|Google reviews|buildMetadata|WebPageSchema|ServiceSchema|ArticleSchema/i.test(text),
    faq: /FAQPage|ServicesFAQ|faqs\s*=|<details/i.test(text),
    local: /Loudoun|Fairfax|Prince William|Arlington|Ashburn|Leesburg|Sterling|Vienna|McLean|Reston|Herndon|Manassas|Gainesville|Haymarket/i.test(text),
    permit: /permit|inspection|code|HOA|county/i.test(compact),
    repairDecision: /repair-vs-replace|repair vs replace|resurface|replacement|structural evaluation|frame is sound|not worth/i.test(compact),
    evidenceSafePricing: !(/repair/i.test(target.route) && (repairPricingSchema || repairCostAnswerWithDollar || repairCostCopyWithDollar)),
  };

  const groups = {
    technical: [signals.metadata, signals.h1, /WebPageSchema/.test(text), /ServiceSchema|ArticleSchema|FAQPage/.test(text)],
    answer: [signals.quickAnswer, signals.faq, signals.permit || signals.repairDecision, countMatches(text, /<h2\b/g) >= 2],
    conversion: [signals.estimateCta, signals.calculator || /get-estimate/.test(text), signals.financing || /payment|calculator/i.test(text), links.includes('/get-estimate')],
    trust: [signals.namedAuthor, signals.trust, signals.local, proofGated ? signals.evidenceSafePricing : true],
    local: [signals.local, signals.permit, /ServiceAreasGrid|areaServed|Loudoun|Fairfax|Prince William/.test(text)],
    proofSafety: [signals.evidenceSafePricing, !/\[INSERT|\[VERIFY|DO NOT PUBLISH|OWNER TO FILL/i.test(text), !(/AggregateRating|Review\b/.test(text) && /GeneralContractor|LocalBusiness/i.test(text))],
  };

  const weights = { technical: 20, answer: 20, conversion: 20, trust: 20, local: 10, proofSafety: 10 };
  const score = Object.entries(groups).reduce((sum, [group, checks]) => {
    const passed = checks.filter(Boolean).length;
    return sum + Math.round((passed / checks.length) * weights[group]);
  }, 0);

  const issues = [];
  const wins = [];

  if (signals.quickAnswer) wins.push('Has an above-fold answer/intent framing signal.');
  else issues.push('Add a stronger above-fold answer block or decision framing.');
  if (signals.estimateCta) wins.push('Has estimate/contact CTA path.');
  else issues.push('Add a visible estimate/inspection CTA.');
  if (signals.calculator) wins.push('Connects to calculator/payment path.');
  else if (/cost|financ|replace|resurface|repair/i.test(target.intent)) issues.push('Add or strengthen calculator/payment path.');
  if (signals.namedAuthor) wins.push('Has NamedAuthor trust signal.');
  else issues.push('Add NamedAuthor trust signal.');
  if (!signals.evidenceSafePricing) issues.push('Remove or verify repair pricing before publish; evidence ledger has no verified repair cost ranges.');
  if (proofGated) issues.push(`Proof gate: ${target.route} is ${pageReadiness.verdict} — ${(pageReadiness.issues || []).map((issue) => issue.message).join(' ')}`);
  if (!signals.local) issues.push('Strengthen local NoVA/county/city signals.');

  let status = 'healthy';
  if (score < 75) status = 'needs-sxo-work';
  if (proofGated) status = status === 'healthy' ? 'proof-gated' : `${status}+proof-gated`;

  return {
    route: target.route,
    file: routeFile(target.route),
    intent: target.intent,
    expected: target.expected,
    score,
    status,
    proofVerdict: pageReadiness?.verdict || 'not-tracked',
    issues,
    wins,
    metrics: {
      internalLinks: links.length,
      h2Count: countMatches(text, /<h2\b/g),
      faq: signals.faq,
      namedAuthor: signals.namedAuthor,
      calculator: signals.calculator,
      estimateCta: signals.estimateCta,
      evidenceSafePricing: signals.evidenceSafePricing,
    },
  };
}

function tableRows(rows) {
  return rows.map((row) => `| \`${row.route}\` | ${row.score ?? 'redirect'} | ${row.status} | ${row.proofVerdict || 'n/a'} | ${row.issues[0] || 'No major issue detected.'} |`);
}

function actionRows(rows) {
  const actions = [];
  for (const row of rows) {
    if (row.redirectTarget) {
      actions.push({
        priority: 'P1',
        route: row.route,
        action: `Confirm redirect to ${row.redirectTarget} remains intentional and all internal links point to the preferred URL.`,
      });
      continue;
    }
    for (const issue of row.issues.slice(0, 3)) {
      const priority = /Proof gate|pricing|verified repair/i.test(issue) ? 'P0' : row.score < 75 ? 'P1' : 'P2';
      actions.push({ priority, route: row.route, action: issue });
    }
  }
  return actions.sort((a, b) => ({ P0: 0, P1: 1, P2: 2 }[a.priority] - { P0: 0, P1: 1, P2: 2 }[b.priority]));
}

function main() {
  const readiness = readJson(`scripts/output/publish-readiness-${today}.json`, readJson('scripts/output/publish-readiness-2026-06-02.json', {}));

  const rows = TARGETS.map((target) => {
    const file = pageFileForRoute(target.route);
    return scorePage(fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '', target, readiness);
  });
  const actions = actionRows(rows);

  const md = [
    `# SXO Conversion Report — ${today}`,
    '',
    'Purpose: repo-based Search Experience Optimization audit for the highest-intent LDN Decks pages. This does not claim live SERP rankings or live GBP data; it checks whether current pages satisfy homeowner intent, conversion paths, trust signals, local relevance, and proof-safety constraints.',
    '',
    '## Summary',
    '',
    `- Targets scanned: ${rows.length}`,
    `- Proof-gated targets: ${rows.filter((row) => /proof-gated/.test(row.status)).length}`,
    `- Redirect targets: ${rows.filter((row) => row.redirectTarget).length}`,
    `- Average scored page SXO score: ${Math.round(rows.filter((row) => row.score != null).reduce((sum, row) => sum + row.score, 0) / rows.filter((row) => row.score != null).length)}`,
    '',
    '| Page | SXO score | Status | Proof verdict | Top issue |',
    '|---|---:|---|---|---|',
    ...tableRows(rows),
    '',
    '## Priority Actions',
    '',
    '| Priority | Page | Action |',
    '|---|---|---|',
    ...actions.slice(0, 30).map((action) => `| ${action.priority} | \`${action.route}\` | ${action.action.replaceAll('|', '\\|')} |`),
    '',
    '## Page Detail',
    '',
    ...rows.flatMap((row) => [
      `### ${row.route}`,
      '',
      `- Intent: ${row.intent}`,
      `- File: \`${row.file}\``,
      `- Status: ${row.status}`,
      `- SXO score: ${row.score ?? 'redirect'}`,
      `- Proof verdict: ${row.proofVerdict || 'n/a'}`,
      row.redirectTarget ? `- Redirect target: \`${row.redirectTarget}\`` : '',
      '',
      'Wins:',
      ...(row.wins.length ? row.wins.map((win) => `- ${win}`) : ['- None detected by scanner.']),
      '',
      'Issues:',
      ...(row.issues.length ? row.issues.map((issue) => `- ${issue}`) : ['- No major issues detected.']),
      '',
      'Detected metrics:',
      `- Internal links: ${row.metrics.internalLinks ?? 'n/a'}`,
      `- H2 count: ${row.metrics.h2Count ?? 'n/a'}`,
      `- FAQ: ${row.metrics.faq ?? 'n/a'}`,
      `- NamedAuthor: ${row.metrics.namedAuthor ?? 'n/a'}`,
      `- Calculator/payment path: ${row.metrics.calculator ?? 'n/a'}`,
      `- Estimate CTA: ${row.metrics.estimateCta ?? 'n/a'}`,
      `- Evidence-safe pricing: ${row.metrics.evidenceSafePricing ?? 'n/a'}`,
      '',
    ].filter(Boolean)),
    '## Rules For Next Edits',
    '',
    '- Do not add proof modules until `src/data/verifiedProofSnippets.json` contains verified project snippets.',
    '- Do not publish repair cost ranges until `repair_cost_ranges` evidence rows are source-verified.',
    '- Keep calculator and estimate CTAs high on cost pages.',
    '- Keep inspection-first positioning on repair pages.',
    '- Use internal links as decision paths, not mechanical exact-match stuffing.',
    '',
  ].join('\n');

  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const reportPath = path.join(DOCS_DIR, `sxo-conversion-report-${today}.md`);
  const jsonPath = path.join(OUTPUT_DIR, `sxo-conversion-report-${today}.json`);
  fs.writeFileSync(reportPath, md);

  const payload = {
    ok: true,
    generated: localIsoTimestamp(),
    report: path.relative(ROOT, reportPath),
    json: path.relative(ROOT, jsonPath),
    targets: rows.length,
    proofGated: rows.filter((row) => /proof-gated/.test(row.status)).length,
    redirects: rows.filter((row) => row.redirectTarget).length,
    averageScore: Math.round(rows.filter((row) => row.score != null).reduce((sum, row) => sum + row.score, 0) / rows.filter((row) => row.score != null).length),
    rows,
    actions,
  };
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(JSON.stringify({
    ok: payload.ok,
    report: payload.report,
    json: payload.json,
    targets: payload.targets,
    proofGated: payload.proofGated,
    redirects: payload.redirects,
    averageScore: payload.averageScore,
  }, null, 2));
}

main();
