#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const SRC_APP = path.join(ROOT, 'src/app');
const today = localDateStamp();

function readJson(relativePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
  } catch {
    return fallback;
  }
}

function parseJsonBlocks(output) {
  const blocks = [];
  for (let start = output.indexOf('{'); start !== -1; start = output.indexOf('{', start + 1)) {
    let depth = 0;
    for (let index = start; index < output.length; index += 1) {
      if (output[index] === '{') depth += 1;
      if (output[index] === '}') depth -= 1;
      if (depth === 0) {
        const candidate = output.slice(start, index + 1);
        try {
          blocks.push({
            json: JSON.parse(candidate),
            length: candidate.length,
          });
        } catch {
          // Keep scanning; console output can contain non-JSON braces.
        }
        break;
      }
    }
  }
  return blocks;
}

function runJson(command, args) {
  try {
    const output = execFileSync(command, args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const blocks = parseJsonBlocks(output);
    return blocks.find((block) => block.json?.ok === true)?.json
      || blocks.sort((a, b) => b.length - a.length)[0]?.json
      || null;
  } catch (error) {
    const output = `${error.stdout || ''}\n${error.stderr || ''}`;
    const blocks = parseJsonBlocks(output);
    return blocks.find((block) => block.json?.ok === true)?.json
      || blocks.sort((a, b) => b.length - a.length)[0]?.json
      || null;
  }
}

function routeFromPageFile(filePath) {
  const relative = path.relative(SRC_APP, filePath);
  const route = relative
    .replace(/\/page\.[jt]sx?$/, '')
    .replace(/^page\.[jt]sx?$/, '')
    .replace(/\/\([^)]+\)/g, '');
  return `/${route}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
}

function walkPageFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkPageFiles(full, out);
    if (entry.isFile() && /^page\.[jt]sx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function classifyRoute(route) {
  if (route === '/') return 'home';
  if (route.includes('/services')) return 'services';
  if (route.includes('/deck-builder-') || route.includes('/near-you')) return 'local pages';
  if (route.includes('cost') || route.includes('financing') || route.includes('payment')) return 'cost and financing';
  if (route.includes('permit') || route.includes('hoa')) return 'permit and HOA';
  if (route.includes('repair') || route.includes('resurfacing') || route.includes('maintenance') || route.includes('inspection')) return 'repair lifecycle';
  if (route.includes('trex') || route.includes('timbertech') || route.includes('composite') || route.includes('wood') || route.includes('azek')) return 'materials';
  if (route.includes('patio') || route.includes('porch') || route.includes('pergola') || route.includes('outdoor') || route.includes('kitchen')) return 'outdoor living';
  if (route.includes('/blog') || route.includes('/education')) return 'education';
  if (route.includes('review') || route.includes('team') || route.includes('about') || route.includes('bbb') || route.includes('houzz')) return 'trust';
  if (route.includes('/tools')) return 'tools';
  if (route.includes('/showcase') || route.includes('/before-and-after')) return 'proof pages';
  return 'other';
}

function countBy(rows, keyFn) {
  return rows.reduce((acc, row) => {
    const key = keyFn(row);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function table(rows) {
  return rows.join('\n');
}

function routeList(routes, predicate) {
  return routes.filter(predicate).slice(0, 24).map((route) => `- \`${route}\``);
}

function main() {
  const pageFiles = walkPageFiles(SRC_APP);
  const routes = [...new Set(pageFiles.map(routeFromPageFile))].sort();
  const routeClusters = countBy(routes, classifyRoute);

  const schema = runJson('node', ['scripts/validate-seo-schema.mjs']);
  const links = runJson('node', ['scripts/seo-link-audit.mjs']) || readJson(`scripts/output/seo-link-audit-${today}.json`, null);
  const freshness = runJson('node', ['scripts/audit-content-freshness.mjs']);
  const readinessSummary = runJson('node', ['scripts/publish-readiness-gate.mjs']);
  const readiness = readinessSummary?.json ? readJson(readinessSummary.json, readinessSummary) : readinessSummary;
  const coverage = runJson('node', ['scripts/evidence-coverage-report.mjs']);
  const ownerPacket = runJson('node', ['scripts/generate-owner-evidence-packet.mjs']);
  const og = readJson(`scripts/output/og-image-audit-${today}.json`, {});
  const breadcrumb = readJson(`scripts/output/breadcrumb-audit-${today}.json`, {});

  const md = [
    `# LDN Decks Deep SEO Growth Map — ${today}`,
    '',
    'Purpose: current execution map for what LDNDecks.com already has, what must be improved, and what should be created next. This report is generated from the repository and current SEO gate outputs so the plan stays tied to evidence instead of vibes.',
    '',
    '## Executive Read',
    '',
    'LDN Decks now has a mature local SEO architecture: service pages, city pages, county hubs, cost calculators, material comparisons, permit/HOA pages, education content, proof pages, schema, OG cards, image sitemap, `llms.txt`, and AI-crawler access. The next growth ceiling is not raw page count. It is proof ingestion, entity trust, conversion UX, and selective creation of pages that close real intent gaps.',
    '',
    'The site should not enter another mass-content phase until the evidence blockers are resolved for deck repair, before/after, showcase, and composite cost examples.',
    '',
    '## Current Inventory',
    '',
    `- App page modules scanned: ${routes.length}`,
    `- Live sitemap URLs from latest weekly/live check: ${links?.sitemapUrls ?? 'unknown'}`,
    `- Internal links audited: ${links?.internalLinks ?? 'unknown'} · bad links: ${links?.badCount ?? 'unknown'}`,
    `- JSON-LD files scanned: ${schema?.jsonLdFiles ?? 'unknown'} · duplicate FAQ risks: ${schema?.duplicateFaqRisks ?? 'unknown'} · NAP drift: ${schema?.napDriftFiles ?? 'unknown'}`,
    `- Freshness audit: ${freshness?.FRESH ?? 'unknown'} fresh · ${freshness?.STALE ?? 'unknown'} stale · ${freshness?.UNDATED ?? 'unknown'} undated`,
    `- OG audit: ${og?.pages ?? 'unknown'} pages · ${(og?.findings || []).filter((item) => item.severity !== 'OK').length} issues`,
    `- Breadcrumb audit: ${breadcrumb?.unknownSegments?.length ?? 0} unknown segments · ${breadcrumb?.duplicateBreadcrumbList?.length ?? 0} duplicate BreadcrumbList risks`,
    '',
    '## Route Cluster Map',
    '',
    '| Cluster | Page modules |',
    '|---|---:|',
    ...Object.entries(routeClusters).sort((a, b) => b[1] - a[1]).map(([cluster, count]) => `| ${cluster} | ${count} |`),
    '',
    '## What We Have',
    '',
    '- Strong commercial cost cluster: composite deck cost, size-based cost pages, financing, payment estimator, tariff page, Trex/TimberTech/AZEK comparisons.',
    '- Strong local cluster: city pages across Loudoun, Fairfax, Prince William, Arlington, Stafford, plus county and near-you architecture.',
    '- Strong permit/HOA cluster: county permit pages and HOA/community rule pages.',
    '- Strong repair lifecycle foundation: deck repair, inspection, maintenance, replacement, resurfacing, safety checklist, resurfacing-vs-replacement.',
    '- Strong technical base: schema validation green, links green, breadcrumbs green, OG green, freshness green, build green.',
    '- Strong anti-fabrication system: evidence ledger, owner packets, import dry-runs, regression tests, proof runtime validation, prepublish hard gate.',
    '',
    '## What Must Be Improved First',
    '',
    '### P0 — Evidence and Proof Layer',
    '',
    `- Projects: ${coverage?.projects?.total ?? 0} total · ${coverage?.projects?.byStatus?.partial ?? 0} partial · 0 verified.`,
    `- Asset requirements: ${coverage?.assets?.total ?? 0} total · ${coverage?.assets?.byStatus?.missing ?? 0} missing.`,
    `- Warranty terms: ${coverage?.warrantyTerms?.total ?? 0} recorded.`,
    `- Repair cost ranges: ${coverage?.repairCostRanges?.total ?? 0} recorded.`,
    `- Owner action packet: ${ownerPacket?.rows ?? 'unknown'} actions · ${ownerPacket?.p0 ?? 'unknown'} P0 · ${ownerPacket?.p1 ?? 'unknown'} P1.`,
    '',
    'Blocked proof pages:',
    ...((Array.isArray(readiness?.pages) ? readiness.pages : []).map((page) => `- \`${page.page}\`: ${page.verdict} — ${page.issues?.[0]?.message || 'review needed'}`)),
    '',
    '### P0 — Deck Repair Publish Readiness',
    '',
    'Keep `/services/deck-repair` proof-gated until real photos, exact warranty wording, and verified repair cost ranges are supplied. This page is structurally valuable, but publishing proof claims before evidence would weaken E-E-A-T and increase trust risk.',
    '',
    '### P1 — Conversion and SXO Tightening',
    '',
    '- Keep calculators high on cost pages and route estimate CTAs toward inspection/consultation intent.',
    '- Add stronger “when not to buy / when replacement is smarter” sections on repair, resurfacing, replacement, and financing pages.',
    '- Normalize mobile CTA patterns on all money pages: call, estimate, calculator, financing where relevant.',
    '- Add proof modules only from `src/data/verifiedProofSnippets.json`, not from handcrafted copy.',
    '',
    '### P1 — Local Maps Operations',
    '',
    'The website is strong; map-pack growth now needs operating cadence outside the codebase: GBP photos, GBP posts, review responses, Q&A, citation parity, and partner directory profile completion. Do not claim live GBP metrics unless API/source evidence is available.',
    '',
    '## What We Should Create Next',
    '',
    '### Create After Evidence Arrives',
    '',
    '- Verified deck repair case study module set from the 6 deck-repair cards.',
    '- Before/after case study upgrades for Leesburg, Ashburn, Manassas, and Sterling once scope, materials, month/year, and photo linkage are verified.',
    '- Composite cost “real project examples” only after estimate/invoice-backed records are supplied.',
    '- GBP-ready photo captions and post snippets generated from verified project records.',
    '',
    '### Create Now Without Fabrication',
    '',
    '- Internal link gap report focused on pushing authority into `/services/deck-repair`, `/deck-cost-calculator`, `/composite-deck-cost-northern-virginia`, `/services/deck-resurfacing`, and `/services/deck-replacement`.',
    '- SXO pass for the top money pages using existing page content and CTAs.',
    '- Maps/GBP task board with owner-only action items and no invented metrics.',
    '- A “proof source checklist” in the admin/ops docs so every future project can become SEO evidence without rebuilding the system.',
    '',
    '### Candidate New Pages, In Order',
    '',
    'Do not create all at once. Create only when they have a clear internal-link target and unique value.',
    '',
    '1. `/deck-repair-cost-northern-virginia` — only after verified repair cost ranges exist.',
    '2. `/deck-ledger-repair-northern-virginia` — structural education + inspection CTA; needs real photos or stays educational.',
    '3. `/deck-stair-repair-northern-virginia` — stair instability, rise/run/code failures, inspection CTA.',
    '4. `/deck-railing-repair-northern-virginia` — guardrail spacing/height/fastener failures and repair-vs-replace.',
    '5. `/deck-post-rot-repair-northern-virginia` — post rot, footing issues, moisture/freeze-thaw education.',
    '6. `/deck-repair-fairfax-county` and `/deck-repair-prince-william-county` — only after Loudoun repair hub is proof-ready and non-doorway uniqueness is defined.',
    '7. `/patio-cost-northern-virginia` — next hardscape money page, calculator/table-led.',
    '8. `/paver-patio-cost-northern-virginia` — if patio cluster becomes priority.',
    '9. `/screened-porch-cost-by-size-northern-virginia` — extend existing porch cost cluster.',
    '10. `/outdoor-living-cost-northern-virginia` — hub for deck + patio + pergola + porch combinations.',
    '',
    '## Priority Route Samples',
    '',
    '### Cost and Financing',
    ...routeList(routes, (route) => classifyRoute(route) === 'cost and financing'),
    '',
    '### Repair Lifecycle',
    ...routeList(routes, (route) => classifyRoute(route) === 'repair lifecycle'),
    '',
    '### Outdoor Living',
    ...routeList(routes, (route) => classifyRoute(route) === 'outdoor living'),
    '',
    '### Local Pages',
    ...routeList(routes, (route) => classifyRoute(route) === 'local pages'),
    '',
    '## Next 10 Execution Moves',
    '',
    '1. Collect and ingest P0 deck repair photos.',
    '2. Confirm repair workmanship warranty wording.',
    '3. Confirm repair cost ranges from invoices, accepted estimates, calculator data, or owner-approved pricing policy.',
    '4. Promote only verified project rows and regenerate proof snippets.',
    '5. Re-run `npm run seo:prepublish-evidence`; it must fail until all proof blockers are actually resolved.',
    '6. Create internal-link gap report for the five priority money pages.',
    '7. Run SXO review on `/composite-deck-cost-northern-virginia` and `/services/deck-repair` after evidence is in.',
    '8. Create GBP weekly post/photo queue from verified project data.',
    '9. Create `/deck-repair-cost-northern-virginia` only after verified repair ranges exist.',
    '10. Start patio-cost money page after deck repair proof is safe.',
    '',
    '## Verification Commands Used By This Map',
    '',
    '```bash',
    'npm run seo:validate-schema',
    'npm run seo:link-audit',
    'npm run seo:audit-freshness',
    'npm run seo:audit-breadcrumbs',
    'npm run seo:audit-og',
    'npm run seo:publish-readiness',
    'npm run seo:evidence-owner-packet',
    'npm run seo:weekly',
    'npm run build',
    '```',
    '',
    'Live robots/sitemap/IndexNow were verified with network access on 2026-06-02 and passed 6/6. The local sandbox DNS failure report should not be treated as a live site failure.',
    '',
  ].join('\n');

  fs.mkdirSync(DOCS_DIR, { recursive: true });
  const report = path.join(DOCS_DIR, `ldndecks-deep-seo-growth-map-${today}.md`);
  fs.writeFileSync(report, `${md}\n`);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, report),
    routes: routes.length,
    clusters: routeClusters,
    blockedPages: readinessSummary?.blocked ?? readiness?.counts?.blocked ?? null,
    proofIncomplete: readinessSummary?.proofIncomplete ?? readiness?.counts?.['proof-incomplete'] ?? null,
    ownerActions: ownerPacket?.rows ?? null,
  }, null, 2));
}

main();
