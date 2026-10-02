#!/usr/bin/env node
/**
 * Ahrefs Web Analytics install guard.
 *
 * Ahrefs' "Script installation" check reads the raw page source, so the
 * analytics tag must be present in the server-rendered HTML — not injected
 * client-side or gated on the consent banner. When it was, Ahrefs reported
 * "Script isn't found" and visitors who declined the banner went uncounted.
 *
 * Fetches a sample of routes from a running server and fails (exit 1) if any
 * page is missing the tag, uses the wrong data-key, or loads it synchronously.
 *
 * Usage:
 *   PORT=4179 npm run start &
 *   SEO_AUDIT_ORIGIN=http://127.0.0.1:4179 npm run seo:verify-ahrefs
 */
import process from 'node:process';

const ORIGIN = (process.env.SEO_AUDIT_ORIGIN || 'http://127.0.0.1:3000').replace(/\/$/, '');
const SRC = 'https://analytics.ahrefs.com/analytics.js';
const DATA_KEY = '3i7ZUj2Ik0UT5pH1a3mooQ';

// One route per rendering mode: static, SSG city page, blog, contact.
const ROUTES = ['/', '/wood-decks', '/wood-decks/ashburn', '/blog', '/contact'];

function findAhrefsTags(html) {
  const tags = html.match(/<script\b[^>]*>/gi) || [];
  return tags.filter((tag) => tag.includes(SRC));
}

const failures = [];

for (const route of ROUTES) {
  const url = `${ORIGIN}${route}`;
  const before = failures.length;
  let html;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) {
      failures.push(`${route}: HTTP ${res.status}`);
      continue;
    }
    html = await res.text();
  } catch (err) {
    failures.push(`${route}: request failed (${err.message})`);
    continue;
  }

  const tags = findAhrefsTags(html);
  if (tags.length === 0) {
    failures.push(`${route}: no <script src="${SRC}"> in server HTML`);
    continue;
  }
  if (tags.length > 1) {
    failures.push(`${route}: ${tags.length} Ahrefs tags (expected 1)`);
  }
  const [tag] = tags;
  if (!tag.includes(`data-key="${DATA_KEY}"`)) {
    failures.push(`${route}: Ahrefs tag missing data-key="${DATA_KEY}" → ${tag}`);
  }
  if (!/\basync\b/.test(tag)) {
    failures.push(`${route}: Ahrefs tag is not async → ${tag}`);
  }
  if (failures.length === before) {
    console.log(`✓ ${route}`);
  }
}

if (failures.length > 0) {
  console.error('\nAhrefs Web Analytics install check failed:');
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error(
    '\nRender the tag as a plain <script async src="…analytics.js" data-key="…"> in src/app/layout.js <head>.',
  );
  process.exit(1);
}

console.log(`\nAhrefs Web Analytics tag present on ${ROUTES.length} routes (${ORIGIN}).`);
