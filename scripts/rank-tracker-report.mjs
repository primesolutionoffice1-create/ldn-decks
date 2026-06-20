#!/usr/bin/env node
/**
 * Rank tracker report — Ahrefs API v3
 *
 * Pulls all tracked keywords for the Ldndecks project (project_id=9182691,
 * verified via Ahrefs MCP) and writes a Markdown report to
 * `wiki/reports/rank-tracker-<date>.md`.
 *
 * Two ways to invoke:
 *
 * 1. With AHREFS_API_TOKEN env set:
 *      AHREFS_API_TOKEN=xxx node scripts/rank-tracker-report.mjs
 *    Runs autonomously, pulls fresh data, writes the dated report.
 *
 * 2. Without env (no token configured):
 *      node scripts/rank-tracker-report.mjs
 *    Prints an instruction block: ask Claude with Ahrefs MCP enabled to
 *    run the equivalent rank-tracker-overview query and write the report.
 *
 * The token can be generated at app.ahrefs.com → API → Generate token.
 * Free trial tier supports rank-tracker-overview at 0 units/row.
 */
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { resolveVaultReportsDir } from './lib/report-paths.mjs';
import { localDateStamp } from './lib/local-date.mjs';

const PROJECT_ID = 9182691;
const PROJECT_NAME = 'Ldndecks';
const REPORT_DIR = resolveVaultReportsDir(path.resolve('.'));
const SELECT = [
  'keyword',
  'position',
  'volume',
  'url',
  'traffic',
  'clicks',
  'keyword_difficulty',
  'best_position_kind',
  'is_local',
  'is_branded',
];

function todayISO() {
  return localDateStamp();
}

function instruct() {
  console.log('No AHREFS_API_TOKEN found in environment.');
  console.log('');
  console.log('Two options:');
  console.log('  1. Generate a token at app.ahrefs.com → API → Generate token,');
  console.log('     then re-run as:');
  console.log('       AHREFS_API_TOKEN=xxx node scripts/rank-tracker-report.mjs');
  console.log('');
  console.log('  2. Ask Claude with Ahrefs MCP enabled to refresh the report:');
  console.log('     "Refresh rank-tracker report for project Ldndecks (id 9182691).');
  console.log('      Pull all keywords via rank-tracker-overview endpoint with');
  console.log(`      select=${SELECT.join(',')},`);
  console.log(`      device=desktop, date=${todayISO()}, limit=100.`);
  console.log(`      Write the report to wiki/reports/rank-tracker-${todayISO()}.md`);
  console.log('      following the same format as the most recent rank-tracker-*.md."');
  process.exit(2);
}

function fetchAhrefs(endpoint, params, token) {
  const u = new URL(`https://api.ahrefs.com/v3/${endpoint}`);
  for (const [k, v] of Object.entries(params)) {
    u.searchParams.set(k, String(v));
  }
  return new Promise((resolve, reject) => {
    https
      .get(
        u,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
        (res) => {
          const chunks = [];
          res.on('data', (c) => chunks.push(c));
          res.on('end', () => {
            const body = Buffer.concat(chunks).toString('utf8');
            if (res.statusCode !== 200) {
              reject(new Error(`Ahrefs ${endpoint} returned ${res.statusCode}: ${body.slice(0, 200)}`));
              return;
            }
            try {
              resolve(JSON.parse(body));
            } catch (e) {
              reject(e);
            }
          });
        },
      )
      .on('error', reject);
  });
}

function opportunityScore(row) {
  const vol = row.volume || 0;
  const kd = row.keyword_difficulty ?? 50;
  return Math.round(vol * (1 - kd / 100));
}

function renderReport(rows, date) {
  const ranking = rows.filter((r) => r.position !== null && r.position !== undefined);
  const unranked = rows.filter((r) => r.position === null || r.position === undefined);

  const bandsOrder = [
    ['#1', (r) => r.position === 1],
    ['#2–3', (r) => r.position >= 2 && r.position <= 3],
    ['#4–5', (r) => r.position >= 4 && r.position <= 5],
    ['#6–10', (r) => r.position >= 6 && r.position <= 10],
    ['#11–20', (r) => r.position >= 11 && r.position <= 20],
    ['#21–30', (r) => r.position >= 21 && r.position <= 30],
    ['#31+', (r) => r.position >= 31],
  ];
  const bandRows = bandsOrder.map(([label, fn]) => [label, ranking.filter(fn).length]);

  const top10 = [...ranking].sort((a, b) => (a.position || 999) - (b.position || 999)).slice(0, 10);
  const opportunities = [...unranked]
    .map((r) => ({ ...r, opp: opportunityScore(r) }))
    .sort((a, b) => b.opp - a.opp)
    .slice(0, 15);
  const page2 = ranking.filter((r) => r.position >= 11 && r.position <= 32).sort((a, b) => a.position - b.position);
  const localRows = ranking.filter((r) => r.is_local).sort((a, b) => a.position - b.position);

  let md = `---
type: report
title: "Rank Tracker — ${date}"
created: ${date}
source: "Ahrefs Rank Tracker, project_id=${PROJECT_ID} (${PROJECT_NAME}), device=desktop"
keyword_count: ${rows.length}
ranking: ${ranking.length}
unranked: ${unranked.length}
tags: [seo, rank-tracker, ahrefs]
---

# Rank Tracker — ${date}

> ${rows.length} keywords tracked, ${ranking.length} ranking (positions ${ranking[0]?.position}–${ranking[ranking.length - 1]?.position}), ${unranked.length} unranked.

## Position-band summary

| Band | Count |
|---|---|
`;
  for (const [label, count] of bandRows) md += `| **${label}** | ${count} |\n`;
  md += `| **Unranked** | ${unranked.length} |\n\n`;

  md += `## Top 10 wins (currently ranking strongest)\n\n| # | Keyword | Pos | Volume | Traffic est | URL |\n|---|---|---|---|---|---|\n`;
  top10.forEach((r, i) => {
    md += `| ${i + 1} | ${r.keyword} | **${r.position}** | ${r.volume?.toLocaleString() || 0} | ${r.traffic || 0} | ${r.url || '—'} |\n`;
  });

  md += `\n## Top 15 unranked opportunities (volume × (1 − KD/100))\n\n| # | Keyword | Volume | KD | Opportunity |\n|---|---|---|---|---|\n`;
  opportunities.forEach((r, i) => {
    md += `| ${i + 1} | ${r.keyword} | ${r.volume?.toLocaleString() || 0} | ${r.keyword_difficulty ?? '—'} | **${r.opp.toLocaleString()}** |\n`;
  });

  md += `\n## Page 2 break-through candidates (positions 11–32)\n\n| # | Keyword | Pos | Volume | URL |\n|---|---|---|---|---|\n`;
  page2.forEach((r, i) => {
    md += `| ${i + 1} | ${r.keyword} | ${r.position} | ${r.volume?.toLocaleString() || 0} | ${r.url || '—'} |\n`;
  });

  md += `\n## Local-intent keywords (is_local=true) — ${localRows.length} ranking\n\n| # | Keyword | Pos | Volume |\n|---|---|---|---|\n`;
  localRows.forEach((r, i) => {
    md += `| ${i + 1} | ${r.keyword} | ${r.position} | ${r.volume?.toLocaleString() || 0} |\n`;
  });

  md += `\n## Data source\n\n`;
  md += `- Project: ${PROJECT_NAME} (project_id=${PROJECT_ID})\n`;
  md += `- Device: desktop\n`;
  md += `- Date: ${date}\n`;
  md += `- Endpoint: Ahrefs v3 \`rank-tracker-overview\`\n`;
  md += `- Columns: ${SELECT.join(', ')}\n`;
  return md;
}

async function main() {
  const token = process.env.AHREFS_API_TOKEN;
  if (!token) instruct();

  const date = todayISO();
  console.log(`Fetching rank-tracker-overview for project ${PROJECT_ID} on ${date}…`);
  const data = await fetchAhrefs('rank-tracker-overview', {
    project_id: PROJECT_ID,
    date,
    device: 'desktop',
    select: SELECT.join(','),
    limit: 100,
    order_by: 'position:asc',
  });
  const rows = data.overviews || data.rows || data.data || [];
  if (!Array.isArray(rows) || rows.length === 0) {
    console.error('No rows returned. Response shape:', Object.keys(data));
    process.exit(1);
  }

  const md = renderReport(rows, date);
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const dest = path.join(REPORT_DIR, `rank-tracker-${date}.md`);
  fs.writeFileSync(dest, md);
  console.log(`Wrote ${dest}`);
  console.log(`Tracked: ${rows.length} | Ranking: ${rows.filter((r) => r.position).length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
