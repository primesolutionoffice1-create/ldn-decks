#!/usr/bin/env node
/**
 * robots.txt + IndexNow verification
 *
 * Hits the production site and verifies:
 *   1. /robots.txt is reachable, has correct sitemap entries, includes
 *      the AI-bot allow-list, and never returns "Disallow: /" in prod.
 *   2. /sitemap.xml is reachable and lists at least 100 URLs.
 *   3. /image-sitemap.xml is reachable.
 *   4. /<INDEXNOW_KEY>.txt returns the matching key (Bing requires this
 *      file for IndexNow ownership verification).
 *   5. Optionally pings IndexNow with the current sitemap URLs when
 *      called with `--submit`. Without `--submit` it only reports.
 *
 * Run locally:  node scripts/verify-robots-indexnow.mjs
 * Run + submit: node scripts/verify-robots-indexnow.mjs --submit
 */
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://ldndecks.com';
const INDEXNOW_KEY = 'ldndecks2026indexnow';
const REPORT_DIR = '/Users/ldndecks/ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports';

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'user-agent': 'ldndecks-verify/1.0' } }, (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () =>
          resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }),
        );
      })
      .on('error', reject);
  });
}

function postJson(url, payload) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request(
      {
        method: 'POST',
        hostname: u.hostname,
        path: u.pathname + u.search,
        headers: { 'content-type': 'application/json', 'user-agent': 'ldndecks-verify/1.0' },
      },
      (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
      },
    );
    req.on('error', reject);
    req.write(JSON.stringify(payload));
    req.end();
  });
}

async function main() {
  const submit = process.argv.includes('--submit');
  const checks = [];
  const fail = (label, detail) => checks.push({ ok: false, label, detail });
  const pass = (label, detail) => checks.push({ ok: true, label, detail });

  // 1. robots.txt
  try {
    const r = await fetchText(`${SITE}/robots.txt`);
    if (r.status !== 200) {
      fail('robots.txt reachable', `status ${r.status}`);
    } else {
      if (/disallow:\s*\/\s*$/im.test(r.body)) {
        fail('robots.txt is not blocking all', 'found "Disallow: /" — production should not block crawlers');
      } else {
        pass('robots.txt not blocking all', null);
      }
      if (!/Sitemap:\s*https:\/\/ldndecks\.com\/sitemap\.xml/i.test(r.body)) {
        fail('robots.txt declares sitemap', 'no Sitemap: directive for sitemap.xml');
      } else {
        pass('robots.txt declares sitemap', null);
      }
      const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot'];
      const missing = aiBots.filter((b) => !new RegExp(`User-agent:\\s*${b}`, 'i').test(r.body));
      if (missing.length) fail('AI bots declared', `missing: ${missing.join(', ')}`);
      else pass('AI bots declared', `${aiBots.length} bots present`);
    }
  } catch (e) {
    fail('robots.txt reachable', e.message);
  }

  // 2. sitemap.xml
  let sitemapUrls = [];
  try {
    const r = await fetchText(`${SITE}/sitemap.xml`);
    if (r.status !== 200) {
      fail('sitemap.xml reachable', `status ${r.status}`);
    } else {
      sitemapUrls = [...r.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      if (sitemapUrls.length < 100) {
        fail('sitemap.xml has 100+ URLs', `only ${sitemapUrls.length} URLs`);
      } else {
        pass('sitemap.xml URL count', `${sitemapUrls.length} URLs`);
      }
    }
  } catch (e) {
    fail('sitemap.xml reachable', e.message);
  }

  // 3. image-sitemap.xml
  try {
    const r = await fetchText(`${SITE}/image-sitemap.xml`);
    if (r.status !== 200) fail('image-sitemap.xml reachable', `status ${r.status}`);
    else pass('image-sitemap.xml reachable', null);
  } catch (e) {
    fail('image-sitemap.xml reachable', e.message);
  }

  // 4. IndexNow key file
  try {
    const r = await fetchText(`${SITE}/${INDEXNOW_KEY}.txt`);
    if (r.status !== 200) {
      fail('IndexNow key file reachable', `status ${r.status}`);
    } else if (r.body.trim() !== INDEXNOW_KEY) {
      fail('IndexNow key file matches', `body "${r.body.trim().slice(0, 40)}" != "${INDEXNOW_KEY}"`);
    } else {
      pass('IndexNow key file matches', null);
    }
  } catch (e) {
    fail('IndexNow key file reachable', e.message);
  }

  // 5. Optional IndexNow submission
  let submitResult = null;
  if (submit && sitemapUrls.length > 0) {
    try {
      const r = await postJson('https://api.indexnow.org/indexnow', {
        host: 'ldndecks.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
        urlList: sitemapUrls.slice(0, 10000),
      });
      submitResult = { status: r.status, sample: r.body.slice(0, 240) };
      if (r.status === 200 || r.status === 202) pass('IndexNow submission accepted', `status ${r.status}, ${sitemapUrls.length} URLs`);
      else fail('IndexNow submission accepted', `status ${r.status}: ${r.body.slice(0, 200)}`);
    } catch (e) {
      fail('IndexNow submission', e.message);
    }
  } else if (submit) {
    fail('IndexNow submission', 'no sitemap URLs to submit');
  }

  // Print + persist
  const ok = checks.filter((c) => c.ok).length;
  const bad = checks.filter((c) => !c.ok).length;
  console.log(`Robots + IndexNow Verification — ${new Date().toISOString().slice(0, 10)}`);
  console.log(`Site: ${SITE}`);
  console.log(`Submitted to IndexNow: ${submit ? 'yes' : 'no (pass --submit to enable)'}`);
  console.log('');
  for (const c of checks) {
    console.log(`  ${c.ok ? '✓' : '✗'} ${c.label}${c.detail ? ` — ${c.detail}` : ''}`);
  }
  console.log('');
  console.log(`Passed: ${ok}  Failed: ${bad}`);

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const dest = path.join(REPORT_DIR, `robots-indexnow-${new Date().toISOString().slice(0, 10)}.json`);
  fs.writeFileSync(dest, JSON.stringify({ site: SITE, submit, checks, submitResult, sitemapUrlCount: sitemapUrls.length }, null, 2));
  console.log(`Wrote report: ${dest}`);

  process.exit(bad > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
