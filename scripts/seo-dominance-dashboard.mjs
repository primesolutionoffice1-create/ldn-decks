#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = path.resolve(path.dirname(__filename), '..');
const ORIGIN = process.env.SEO_AUDIT_ORIGIN || 'https://ldndecks.com';
const today = new Date().toISOString().split('T')[0];

const priorityPaths = [
  '/service/ashburn',
  '/composite-decks/leesburg',
  '/deck-repair/fairfax',
  '/screened-porches/chantilly',
  '/outdoor-living/woodbridge',
  '/service/mclean',
  '/service/great-falls',
  '/service/gainesville',
  '/service/haymarket',
  '/service/lake-ridge',
];

const topLocalMarkets = [
  'Ashburn',
  'Leesburg',
  'Sterling',
  'Aldie',
  'South Riding',
  'Brambleton',
  'Fairfax',
  'Chantilly',
  'Centreville',
  'Reston',
  'McLean',
  'Vienna',
  'Great Falls',
  'Gainesville',
  'Haymarket',
  'Bristow',
  'Manassas',
  'Woodbridge',
  'Lake Ridge',
];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'LDNDecksDominanceDashboard/1.0 (+https://ldndecks.com)' },
    signal: AbortSignal.timeout(12000),
  });
  return { status: response.status, ok: response.ok, text: await response.text() };
}

async function fetchHead(pathname) {
  const response = await fetch(`${ORIGIN}${pathname}`, {
    method: 'HEAD',
    headers: { 'user-agent': 'LDNDecksDominanceDashboard/1.0 (+https://ldndecks.com)' },
    signal: AbortSignal.timeout(12000),
  });
  return { path: pathname, status: response.status, ok: response.ok };
}

function run(label, command) {
  try {
    const out = execSync(command, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return { label, ok: true, out };
  } catch (error) {
    return {
      label,
      ok: false,
      out: `${error.stdout || ''}\n${error.stderr || ''}`.trim(),
    };
  }
}

function jsonFromOutput(output) {
  const match = output.match(/\{[\s\S]*\}\s*$/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

const sitemap = await fetchText(`${ORIGIN}/sitemap.xml`);
const sitemapUrls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const localUrls = sitemapUrls.filter(url => /\/(service|composite-decks|wood-decks|deck-repair|screened-porches|pergolas|patios|outdoor-living)\//.test(url));
const priorityLive = await Promise.all(priorityPaths.map(fetchHead));

const schemaAudit = run('schema', 'node scripts/validate-seo-schema.mjs');
const linkAudit = run('links', 'node scripts/seo-link-audit.mjs');
const robotsAudit = run('robots', 'node scripts/verify-robots-indexnow.mjs');
const linkJson = jsonFromOutput(linkAudit.out);

const failedAudits = [schemaAudit, linkAudit, robotsAudit].filter(result => !result.ok).map(result => result.label);
const report = {
  generated: new Date().toISOString(),
  origin: ORIGIN,
  sitemapUrls: sitemapUrls.length,
  localServiceUrls: localUrls.length,
  priorityPagesLive: priorityLive,
  indexedCandidates: priorityPaths.map(pathname => `${ORIGIN}${pathname}`),
  brokenLinks: linkJson?.badCount ?? null,
  topLocalMarkets,
  failedAudits,
};

const lines = [
  '---',
  'type: report',
  `title: "LDN Decks Dominance Dashboard - ${today}"`,
  `created: "${today}"`,
  `updated: "${today}"`,
  'status: snapshot',
  'tags: [seo, local-seo, dominance, automated]',
  '---',
  '',
  `# LDN Decks Dominance Dashboard - ${today}`,
  '',
  `Origin: ${ORIGIN}`,
  '',
  '## Health',
  '',
  `- Sitemap URLs: ${report.sitemapUrls}`,
  `- Local service URLs: ${report.localServiceUrls}`,
  `- Broken links: ${report.brokenLinks ?? 'unknown'}`,
  `- Failed audits: ${failedAudits.length ? failedAudits.join(', ') : 'none'}`,
  '',
  '## Priority local pages',
  '',
  '| URL | Status |',
  '|---|---:|',
  ...priorityLive.map(page => `| ${ORIGIN}${page.path} | ${page.status} |`),
  '',
  '## Indexing candidates',
  '',
  ...report.indexedCandidates.map(url => `- ${url}`),
  '',
  '## Top local markets',
  '',
  ...topLocalMarkets.map(market => `- ${market}`),
  '',
  '## Off-site weekly checks',
  '',
  '- [ ] GBP post published with photo/video and CTA',
  '- [ ] 10+ new project photos uploaded to GBP',
  '- [ ] New reviews requested and all reviews answered',
  '- [ ] Citation/backlink outreach updated',
  '- [ ] GSC priority URLs inspected or submitted',
  '',
  '## Related',
  '',
  '- [[wiki/reports/_index|Reports Hub]]',
  `- [[wiki/reports/seo-weekly-${today}|SEO Weekly Report ${today}]]`,
  '- [[wiki/deliverables/local-seo-fixes/00 Overview|Local SEO Fixes Overview]]',
  '',
];

const reportDir = process.env.LDN_VAULT_REPORTS
  || path.resolve(process.env.HOME || '', 'ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports');
fs.mkdirSync(reportDir, { recursive: true });
const reportPath = path.join(reportDir, `dominance-dashboard-${today}.md`);
fs.writeFileSync(reportPath, lines.join('\n'));

console.log(JSON.stringify(report, null, 2));
console.log(`\nWrote dashboard: ${reportPath}`);

if (failedAudits.length || priorityLive.some(page => !page.ok) || (report.brokenLinks ?? 1) > 0) {
  process.exit(1);
}
