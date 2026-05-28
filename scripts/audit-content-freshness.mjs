#!/usr/bin/env node
/**
 * Content Freshness Audit.
 *
 * Scans every page that emits ArticleSchema or WebPageSchema and checks
 * the dateModified / datePublished props. Flags pages by age:
 *
 *   FRESH       <= 30 days since last modification
 *   AGING       31-90 days
 *   STALE       91-180 days
 *   CRITICAL    > 180 days
 *
 * Freshness is a Google ranking signal, especially for cost / pricing /
 * permit content where the year matters. A 2025-dated cost page in
 * 2026 visibly underperforms a 2026-dated peer page on the same query.
 *
 * Output:
 *   - Console: summary by class
 *   - Vault: wiki/reports/content-freshness-<YYYY-MM-DD>.md ranked by
 *     traffic-value proxy (URL depth + topical importance)
 *
 * Exit code 0 (report-only).
 *
 * Run: `npm run seo:audit-freshness`
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = path.resolve(path.dirname(__filename), '..');
const APP_DIR = path.resolve(REPO_ROOT, 'src/app');
const VAULT_REPORTS = path.resolve(REPO_ROOT, '../../ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports');

const TODAY = new Date();
const TODAY_ISO = TODAY.toISOString().split('T')[0];

// Pages we consider high-priority for freshness. Pricing + permit + city
// pages weighted highest. URL patterns matched.
const HIGH_PRIORITY_PATTERNS = [
  /-cost-/,
  /-cost$/,
  /^cost-/,
  /^deck-permit-/,
  /^deck-builder-/,
  /^composite-deck-cost/,
  /-2026/,
  /-2025/,
  /pricing/,
  /financing/,
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === 'page.js' || entry.name === 'page.tsx') out.push(full);
  }
  return out;
}

function extractDate(source, attr) {
  // ArticleSchema or any component prop: dateModified="2026-05-13"
  // or as JSON property in JsonLd: "dateModified": "2026-05-13"
  const re = new RegExp(`['"\`]?${attr}['"\`]?\\s*[:=]\\s*['"\`]?([\\d]{4}-[\\d]{2}-[\\d]{2})['"\`]?`);
  const m = source.match(re);
  return m ? m[1] : null;
}

function priorityFor(urlPath) {
  for (const pattern of HIGH_PRIORITY_PATTERNS) {
    if (pattern.test(urlPath)) return 'HIGH';
  }
  return 'NORMAL';
}

function classifyAge(date) {
  if (!date) return 'UNDATED';
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return 'INVALID';
  const ageDays = Math.floor((TODAY - parsed) / (1000 * 60 * 60 * 24));
  if (ageDays <= 30) return 'FRESH';
  if (ageDays <= 90) return 'AGING';
  if (ageDays <= 180) return 'STALE';
  return 'CRITICAL';
}

function urlFromFile(file) {
  return file
    .replace(APP_DIR + '/', '/')
    .replace(/\/page\.(js|tsx)$/, '')
    .replace(/^\//, '');
}

const files = walk(APP_DIR);
const findings = { FRESH: [], AGING: [], STALE: [], CRITICAL: [], UNDATED: [] };

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  // Only audit pages that emit ArticleSchema or WebPageSchema (those with
  // explicit freshness signals to Google).
  const emitsArticle = /<ArticleSchema|"@type"\s*:\s*"Article"|"@type"\s*:\s*"BlogPosting"/.test(source);
  const emitsWebPage = /<WebPageSchema/.test(source);
  if (!emitsArticle && !emitsWebPage) continue;
  const dateModified = extractDate(source, 'dateModified');
  const datePublished = extractDate(source, 'datePublished');
  const effectiveDate = dateModified || datePublished;
  const klass = classifyAge(effectiveDate);
  const urlPath = urlFromFile(file);
  findings[klass].push({
    file: path.relative(REPO_ROOT, file),
    url: urlPath,
    dateModified,
    datePublished,
    ageDays: effectiveDate ? Math.floor((TODAY - new Date(effectiveDate)) / (1000 * 60 * 60 * 24)) : null,
    priority: priorityFor(urlPath),
    emitsArticle,
    emitsWebPage,
  });
}

// Sort each class by priority then age (oldest first within priority)
for (const klass of Object.keys(findings)) {
  findings[klass].sort((a, b) => {
    if (a.priority !== b.priority) return a.priority === 'HIGH' ? -1 : 1;
    return (b.ageDays || 0) - (a.ageDays || 0);
  });
}

const summary = {
  totalAudited: Object.values(findings).reduce((sum, arr) => sum + arr.length, 0),
  FRESH: findings.FRESH.length,
  AGING: findings.AGING.length,
  STALE: findings.STALE.length,
  CRITICAL: findings.CRITICAL.length,
  UNDATED: findings.UNDATED.length,
  highPriorityNeedingRefresh: [
    ...findings.STALE.filter(f => f.priority === 'HIGH'),
    ...findings.CRITICAL.filter(f => f.priority === 'HIGH'),
    ...findings.AGING.filter(f => f.priority === 'HIGH'),
  ].length,
};

console.log(JSON.stringify(summary, null, 2));

// Write vault report
fs.mkdirSync(VAULT_REPORTS, { recursive: true });
const reportFile = path.join(VAULT_REPORTS, `content-freshness-${TODAY_ISO}.md`);
const reportLines = [
  '---',
  'type: report',
  `title: "Content Freshness Audit — ${TODAY_ISO}"`,
  `created: "${TODAY_ISO}"`,
  'tags: [seo, freshness, content-audit]',
  '---',
  '',
  `# Content Freshness Audit — ${TODAY_ISO}`,
  '',
  '> Auto-generated by `npm run seo:audit-freshness`. Lists every page emitting ArticleSchema or WebPageSchema, classified by age since `dateModified` (or `datePublished` as fallback). Freshness affects Google rankings on time-sensitive content (cost / pricing / permit / year-dated pages).',
  '',
  '## Summary',
  '',
  '| Class | Count | Action |',
  '|---|---|---|',
  `| FRESH (≤30d) | ${summary.FRESH} | No action |`,
  `| AGING (31-90d) | ${summary.AGING} | Watch — refresh if traffic drops |`,
  `| STALE (91-180d) | ${summary.STALE} | **Refresh recommended** |`,
  `| CRITICAL (>180d) | ${summary.CRITICAL} | **Refresh now** |`,
  `| UNDATED | ${summary.UNDATED} | Add dateModified to schema |`,
  '',
  `**High-priority pages needing refresh: ${summary.highPriorityNeedingRefresh}**`,
  '',
  '## Refresh queue (prioritized)',
  '',
  'Order: CRITICAL HIGH-priority → STALE HIGH-priority → CRITICAL NORMAL → AGING HIGH → STALE NORMAL.',
  '',
  '| Page | Class | Age | Priority | dateModified | dateLatestEditAvail |',
  '|---|---|---|---|---|---|',
];

const refreshQueue = [
  ...findings.CRITICAL.filter(f => f.priority === 'HIGH'),
  ...findings.STALE.filter(f => f.priority === 'HIGH'),
  ...findings.CRITICAL.filter(f => f.priority === 'NORMAL'),
  ...findings.AGING.filter(f => f.priority === 'HIGH'),
  ...findings.STALE.filter(f => f.priority === 'NORMAL'),
  ...findings.UNDATED,
];

for (const item of refreshQueue.slice(0, 50)) {
  reportLines.push(
    `| [\`/${item.url}\`](https://ldndecks.com/${item.url}) | ${classifyAge(item.dateModified || item.datePublished)} | ${item.ageDays ?? '?'}d | ${item.priority} | ${item.dateModified || '—'} | ${TODAY_ISO} |`
  );
}

reportLines.push('');
reportLines.push('## How to refresh a page');
reportLines.push('');
reportLines.push('1. Open the page source (e.g. `src/app/<slug>/page.js`)');
reportLines.push('2. Locate the `<ArticleSchema>` (or `<WebPageSchema>`) usage');
reportLines.push('3. Update `dateModified="YYYY-MM-DD"` to today');
reportLines.push('4. **Important:** also update at least one substantive piece of content on the page (a stat, a price, a section). Bumping the date without changing content is a known anti-pattern that Google can detect; the dateModified should reflect a real edit.');
reportLines.push('5. Optionally update the `datePublished` only if the page is genuinely new (don\'t backdate to look fresh).');
reportLines.push('6. Run `npm run seo:audit-freshness` again to confirm the page moved to FRESH.');
reportLines.push('');
reportLines.push('## Why freshness matters');
reportLines.push('');
reportLines.push('- Google\'s query-deserves-freshness (QDF) algorithm boosts time-sensitive content. Pricing, permits, building codes, and material recommendations all benefit.');
reportLines.push('- Pages with stale dates lose relevance to newer competitor content even when on-page content is still accurate.');
reportLines.push('- Cost pages (`/composite-deck-cost-*`, `/400-square-foot-deck-cost-*`, etc.) and permit pages are the most freshness-sensitive in our content portfolio.');
reportLines.push('- Year-dated content (`-2026`, `-2025`) is especially fragile — a 2025-dated page in mid-2026 underperforms a 2026-dated peer page.');
reportLines.push('');

fs.writeFileSync(reportFile, reportLines.join('\n'));
console.log(`\nReport: ${path.relative(REPO_ROOT, reportFile)}`);

if (process.argv.includes('--verbose') || process.argv.includes('-v')) {
  console.log(`\nTop 15 refresh queue:`);
  for (const item of refreshQueue.slice(0, 15)) {
    console.log(`  [${item.priority}] ${classifyAge(item.dateModified || item.datePublished).padEnd(8)} ${(item.ageDays ?? '?').toString().padStart(4)}d  /${item.url}`);
  }
}
