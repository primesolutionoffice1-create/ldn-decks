// Hits a running next start (or a Vercel preview) and checks every GSC 404 row.
//
//   npm run build && PORT=3210 npm run start
//   BASE_URL=http://127.0.0.1:3210 npm run verify:gsc-redirects
//
// Asserts, for every redirect row: 301/308, Location path equals the proposed
// target, and that target is 200 with no further redirect. Also checks the
// trailing-slash and www forms are one hop, legacy slash chains collapse,
// /drafts stays 410, wp-content images are not redirected, robots.txt lists
// news-sitemap.xml, and every sitemap.xml URL returns 200.

import http from 'node:http';
import https from 'node:https';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { gsc404LeftAlone, gsc404Redirects } from '../src/lib/gsc404Redirects.mjs';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:3210';
const failures = [];
const rows = [];

function locationPath(location) {
  if (!location) return '';
  const value = Array.isArray(location) ? location[0] : location;
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return new URL(value).pathname;
  }
  return value.split('?')[0];
}

function request(pathname, { host } = {}) {
  const url = new URL(pathname, baseUrl);
  const lib = url.protocol === 'https:' ? https : http;
  return new Promise((resolve, reject) => {
    const req = lib.request({
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: `${url.pathname}${url.search}`,
      method: 'GET',
      headers: {
        'user-agent': 'ldn-gsc-redirect-check',
        ...(host ? { host } : {}),
      },
      timeout: 20000,
    }, (res) => {
      res.resume();
      resolve({
        status: res.statusCode,
        location: res.headers.location || '',
      });
    });
    req.on('timeout', () => {
      req.destroy(new Error(`timeout ${pathname}`));
    });
    req.on('error', reject);
    req.end();
  });
}

function fail(message) {
  failures.push(message);
}

function assertRedirect(label, response, expectedPath) {
  if (response.status !== 301 && response.status !== 308) {
    fail(`${label}: expected 301 or 308, got ${response.status} location=${response.location}`);
    return;
  }
  const got = locationPath(response.location);
  if (got !== expectedPath) {
    fail(`${label}: location ${response.location || '(none)'} is not ${expectedPath}`);
  }
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()));
  return results;
}

async function checkRedirectRow(mapping) {
  const bare = await request(mapping.source);
  const slashed = await request(`${mapping.source}/`);
  const www = await request(mapping.source, { host: 'www.ldndecks.com' });
  const wwwSlashed = await request(`${mapping.source}/`, { host: 'www.ldndecks.com' });
  const target = await request(mapping.destination);

  assertRedirect(mapping.source, bare, mapping.destination);
  assertRedirect(`${mapping.source}/`, slashed, mapping.destination);
  assertRedirect(`www ${mapping.source}`, www, mapping.destination);
  assertRedirect(`www ${mapping.source}/`, wwwSlashed, mapping.destination);

  if (target.status !== 200 || target.location) {
    fail(`${mapping.destination}: expected 200 with no redirect, got ${target.status} location=${target.location}`);
  }

  const hopOk = [bare, slashed, www, wwwSlashed].every((response) => (
    (response.status === 301 || response.status === 308)
    && locationPath(response.location) === mapping.destination
  ));
  rows.push({
    source: mapping.source,
    destination: mapping.destination,
    impressions: mapping.impressions,
    confidence: mapping.confidence,
    status: bare.status,
    slashStatus: slashed.status,
    wwwStatus: www.status,
    targetStatus: target.status,
    oneHop: hopOk && target.status === 200 && !target.location,
  });
}

async function checkSitemap() {
  const url = new URL('/sitemap.xml', baseUrl);
  const lib = url.protocol === 'https:' ? https : http;
  const xml = await new Promise((resolve, reject) => {
    const req = lib.request(url, { timeout: 20000 }, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    req.end();
  });
  if (xml.status !== 200) {
    fail(`sitemap.xml status ${xml.status}`);
    return [];
  }
  const locs = [...xml.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  if (locs.includes('/showcase/rooftop-deck-washington-dc')) {
    fail('sitemap.xml includes /showcase/rooftop-deck-washington-dc');
  }
  if (locs.length !== 411) {
    fail(`sitemap.xml has ${locs.length} URLs, expected 411`);
  }
  const checked = await mapPool(locs, 8, async (pathname) => {
    const response = await request(pathname);
    if (response.status !== 200 || response.location) {
      fail(`sitemap ${pathname}: expected 200, got ${response.status} location=${response.location}`);
      return false;
    }
    return true;
  });
  return { total: locs.length, ok: checked.filter(Boolean).length };
}

function markdownTable() {
  const header = [
    '| old_path | target | impressions | confidence | bare | slash | www | target | one hop |',
    '| --- | --- | ---: | --- | ---: | ---: | ---: | ---: | --- |',
  ];
  const body = rows.map((row) => (
    `| \`${row.source}\` | \`${row.destination}\` | ${row.impressions} | ${row.confidence} | ${row.status} | ${row.slashStatus} | ${row.wwwStatus} | ${row.targetStatus} | ${row.oneHop ? 'yes' : 'NO'} |`
  ));
  return [...header, ...body].join('\n');
}

async function main() {
  console.log(`Checking ${baseUrl}`);

  for (const mapping of gsc404Redirects) {
    await checkRedirectRow(mapping);
  }

  const drafts = await request('/drafts');
  if (drafts.status !== 410) fail(`/drafts expected 410, got ${drafts.status} location=${drafts.location}`);
  for (const left of gsc404LeftAlone) {
    const response = await request(left.source);
    if (response.status === 301 || response.status === 308 || response.status === 302 || response.status === 307) {
      fail(`${left.source} should not redirect, got ${response.status} location=${response.location}`);
    }
  }

  const legacySlash = await request('/about-loudoun-deck-company/');
  assertRedirect('legacy /about-loudoun-deck-company/', legacySlash, '/about');
  const liveSlash = await request('/about/');
  assertRedirect('live /about/', liveSlash, '/about');
  const about = await request('/about');
  if (about.status !== 200 || about.location) {
    fail(`/about expected 200, got ${about.status} location=${about.location}`);
  }
  const tagSlash = await request('/tag/deck-builders/');
  assertRedirect('legacy /tag/deck-builders/', tagSlash, '/near-you');

  const robots = await new Promise((resolve, reject) => {
    const url = new URL('/robots.txt', baseUrl);
    const lib = url.protocol === 'https:' ? https : http;
    const req = lib.request(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    req.end();
  });
  if (robots.status !== 200 || !robots.body.includes('Sitemap: https://ldndecks.com/news-sitemap.xml')) {
    fail('robots.txt does not list https://ldndecks.com/news-sitemap.xml');
  }

  const rooftop = await new Promise((resolve, reject) => {
    const url = new URL('/showcase/rooftop-deck-washington-dc', baseUrl);
    const lib = url.protocol === 'https:' ? https : http;
    const req = lib.request(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, location: res.headers.location || '', body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    req.end();
  });
  if (rooftop.status !== 200 || rooftop.location || !/noindex/i.test(rooftop.body)) {
    fail(`rooftop showcase expected noindex 200, got ${rooftop.status} location=${rooftop.location} noindex=${/noindex/i.test(rooftop.body)}`);
  }

  const sitemap = await checkSitemap();
  const table = markdownTable();
  console.log(table);
  console.log(`\nRedirect rows: ${rows.length}. One hop: ${rows.filter((row) => row.oneHop).length}.`);
  if (sitemap.total) console.log(`Sitemap URLs: ${sitemap.ok}/${sitemap.total} returned 200.`);

  const artifactDir = '/opt/cursor/artifacts';
  mkdirSync(artifactDir, { recursive: true });
  const artifact = path.join(artifactDir, 'gsc-404-redirect-results.md');
  writeFileSync(artifact, `# GSC 404 redirect check\n\nBase: ${baseUrl}\n\n${table}\n\nSitemap: ${sitemap.ok || 0}/${sitemap.total || 0} returned 200.\n\nFailures: ${failures.length ? failures.map((item) => `- ${item}`).join('\n') : 'none'}\n`);

  if (failures.length) {
    console.error(`\n${failures.length} failure(s):`);
    for (const message of failures) console.error(`- ${message}`);
    process.exit(1);
  }
  console.log('\nAll redirect checks passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
