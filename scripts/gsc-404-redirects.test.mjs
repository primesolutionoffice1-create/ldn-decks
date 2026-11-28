import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import nextConfig from '../next.config.mjs';
import { blogPosts } from '../src/lib/blogData.js';
import { educationArticles } from '../src/lib/educationData.js';
import { gsc404LeftAlone, gsc404Redirects } from '../src/lib/gsc404Redirects.mjs';
import { isRedirectedBlogPost } from '../src/lib/blogRoutes.js';
import { showcaseProjects } from '../src/lib/showcaseData.js';
import pkg from 'next/dist/compiled/path-to-regexp/index.js';

const { pathToRegexp } = pkg;
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function parseCsvRows(text) {
  const rows = [];
  let field = '';
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }
    if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      field = '';
      if (row.some((cell) => cell.length)) rows.push(row);
      row = [];
    } else if (char !== '\r') {
      field += char;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    if (row.some((cell) => cell.length)) rows.push(row);
  }
  const [header, ...body] = rows;
  return body.map((cells) => Object.fromEntries(header.map((key, index) => [key, cells[index] ?? ''])));
}

function redirectRegex(source) {
  const compiled = pathToRegexp(source, [], { strict: true, sensitive: false, delimiter: '/' });
  return new RegExp(compiled.source.replace(/\$$/, '(?:\\/)?$'));
}

function destinationPath(rule) {
  if (!rule.destination || rule.destination.includes(':')) return null;
  if (rule.destination.startsWith('http')) return new URL(rule.destination).pathname;
  return rule.destination;
}

function walkPages(dir, segments = []) {
  const pages = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry.startsWith('(') && entry.endsWith(')')) {
        pages.push(...walkPages(full, segments));
      } else if (!entry.startsWith('[') && entry !== 'api') {
        pages.push(...walkPages(full, [...segments, entry]));
      }
      continue;
    }
    if (/^page\.(js|jsx|ts|tsx)$/.test(entry)) {
      pages.push(`/${segments.join('/')}`);
    }
  }
  return pages.map((page) => (page === '/' ? '/' : page.replace(/\/$/, '')));
}

function canonicalPaths() {
  const staticPages = walkPages(path.join(root, 'src/app')).filter((page) => page !== '/');
  const blog = blogPosts
    .filter((post) => !isRedirectedBlogPost(post))
    .map((post) => post.canonicalPath || `/blog/${post.slug}`);
  const education = educationArticles.map((article) => `/education/${article.slug}`);
  const showcase = showcaseProjects.map((project) => `/showcase/${project.slug}`);
  return new Set([...staticPages, ...blog, ...education, ...showcase]);
}

test('CSV fixture and redirect module describe the same 404 rows', () => {
  const csvPath = path.join(root, 'scripts/fixtures/gsc-404-redirects.csv');
  const rows = parseCsvRows(readFileSync(csvPath, 'utf8'));
  assert.equal(rows.length, 59);

  const redirects = rows.filter((row) => !row.proposed_target.startsWith('leave'));
  const left = rows.filter((row) => row.proposed_target.startsWith('leave'));
  assert.equal(redirects.length, gsc404Redirects.length);
  assert.equal(left.length, gsc404LeftAlone.length);

  redirects.forEach((row, index) => {
    const rule = gsc404Redirects[index];
    assert.equal(rule.source, row.old_path);
    assert.equal(rule.destination, row.proposed_target);
    assert.equal(rule.confidence, row.confidence);
    assert.equal(rule.impressions, Number(row.gsc_impressions));
    assert.equal(rule.note, row.note);
    assert.ok(rule.confidence === 'high' || rule.confidence === 'medium' || rule.confidence === 'low');
  });

  left.forEach((row, index) => {
    assert.equal(gsc404LeftAlone[index].source, row.old_path);
    assert.equal(gsc404LeftAlone[index].confidence, 'high');
  });
});

test('next.config redirects include every GSC mapping once, ahead of the slash strip', async () => {
  assert.equal(nextConfig.trailingSlash, false);
  assert.equal(nextConfig.skipTrailingSlashRedirect, true);

  const rules = await nextConfig.redirects();
  const sources = new Set(gsc404Redirects.map((rule) => rule.source));
  const pathRules = rules.filter((rule) => sources.has(rule.source) && !rule.has);
  const wwwRules = rules.filter((rule) => sources.has(rule.source) && rule.has);
  assert.equal(pathRules.length, gsc404Redirects.length);
  assert.equal(wwwRules.length, gsc404Redirects.length);

  for (const mapping of gsc404Redirects) {
    const pathRule = pathRules.find((rule) => rule.source === mapping.source);
    const wwwRule = wwwRules.find((rule) => rule.source === mapping.source);
    assert.ok(pathRule, mapping.source);
    assert.equal(pathRule.destination, mapping.destination);
    assert.equal(pathRule.statusCode, 301);
    assert.equal(pathRule.source.includes('*'), false);
    assert.equal(pathRule.source.includes(':'), false);
    assert.equal(wwwRule.destination, `https://ldndecks.com${mapping.destination}`);
    assert.equal(wwwRule.statusCode, 301);
    assert.deepEqual(wwwRule.has, [{ type: 'host', value: 'www.ldndecks.com' }]);
  }

  const wwwCatchAll = rules.findIndex((rule) => rule.source === '/:path*' && rule.has);
  const lastWwwGsc = rules.reduce((index, rule, ruleIndex) => (
    sources.has(rule.source) && rule.has ? ruleIndex : index
  ), -1);
  assert.ok(wwwCatchAll > lastWwwGsc, 'www GSC rules must match before the www catch-all');

  const slashStrip = rules[rules.length - 1];
  assert.equal(slashStrip.source, '/:path+/');
  assert.equal(slashStrip.destination, '/:path+');
  assert.equal(slashStrip.permanent, true);

  for (const left of gsc404LeftAlone) {
    assert.equal(rules.some((rule) => rule.source === left.source), false, left.source);
  }
});

test('Washington DC rooftop showcase stays noindex and out of the sitemap', () => {
  const seo = readFileSync(path.join(root, 'src/lib/seo.js'), 'utf8');
  const sitemap = readFileSync(path.join(root, 'src/app/sitemap.js'), 'utf8');
  assert.match(seo, /path === '\/showcase\/rooftop-deck-washington-dc'/);
  assert.match(sitemap, /'\/showcase\/rooftop-deck-washington-dc'/);
});

test('redirect graph has no loops and GSC targets are canonical pages', async () => {
  const rules = await nextConfig.redirects();
  const apexRules = rules.filter((rule) => !rule.has);
  const compiled = apexRules.map((rule) => ({ rule, regex: redirectRegex(rule.source) }));
  const live = canonicalPaths();

  for (const mapping of gsc404Redirects) {
    assert.equal(live.has(mapping.source), false, `${mapping.source} is a live page`);
    assert.equal(live.has(mapping.destination), true, `${mapping.destination} is not a known page`);
    assert.equal(mapping.destination.endsWith('/'), false);
  }

  for (const { rule } of compiled) {
    const target = destinationPath(rule);
    if (!target) continue;
    assert.notEqual(target, rule.source, `${rule.source} redirects to itself`);
    for (const other of compiled) {
      if (other.rule === rule) continue;
      assert.equal(
        other.regex.test(target),
        false,
        `${rule.source} -> ${target} is chained by ${other.rule.source}`,
      );
    }
  }

  const gscCompiled = gsc404Redirects.map((mapping) => ({
    mapping,
    regex: redirectRegex(mapping.source),
  }));
  for (const page of live) {
    for (const { mapping, regex } of gscCompiled) {
      assert.equal(regex.test(page), false, `${mapping.source} would redirect live ${page}`);
    }
  }

  for (const mapping of gsc404Redirects) {
    const regex = redirectRegex(mapping.source);
    assert.equal(regex.test(mapping.source), true);
    assert.equal(regex.test(`${mapping.source}/`), true);
    assert.equal(regex.test(`${mapping.source}/extra`), false);
  }
});
