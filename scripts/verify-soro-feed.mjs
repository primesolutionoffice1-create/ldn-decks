// Verifies the Soro RSS parser + sanitizer against the checked-in fixture and
// confirms the live fetch path degrades to an empty list instead of throwing.
//
// Usage: node scripts/verify-soro-feed.mjs
// Exit 1 on any failed assertion.

import fs from 'node:fs';
import path from 'node:path';
import {
  parseRssItems,
  parseSoroFeed,
  sanitizeArticleHtml,
  slugify,
  getSoroArticles,
  getSoroFeedUrl,
  DEFAULT_SORO_RSS_URL,
} from '../src/lib/soro.js';

const FIXTURE = path.resolve('src/lib/__fixtures__/soro-sample.xml');

let failures = 0;
function check(label, condition, detail = '') {
  if (condition) {
    console.log(`PASS ${label}`);
  } else {
    failures += 1;
    console.error(`FAIL ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

const xml = fs.readFileSync(FIXTURE, 'utf8');

// --- Raw item parsing --------------------------------------------------------
const items = parseRssItems(xml);
check('parses two <item> blocks', items.length === 2, `got ${items.length}`);
check(
  'CDATA title is decoded (ampersand entity inside CDATA stays literal text)',
  items[0].title === 'Composite Decking & Winter Weather: What Northern Virginia Homeowners Should Know',
  items[0].title,
);
check('enclosure image is picked up', items[0].image === 'https://cdn.example.com/soro/winter-deck.jpg', items[0].image);
check('categories are collected (2)', items[0].categories.length === 2, JSON.stringify(items[0].categories));
check('guid isPermaLink="false" is respected', items[0].guidIsPermaLink === false);
check('entity-encoded <description> decodes to HTML', items[0].description.startsWith('<p>'), items[0].description.slice(0, 40));
check('second item has no image', items[1].image === '');

// --- Normalized articles -----------------------------------------------------
const articles = parseSoroFeed(xml);
check('normalizes two articles', articles.length === 2, `got ${articles.length}`);
check('newest first', articles[0].slug.startsWith('composite-decking'), articles.map((a) => a.slug).join(', '));
check(
  'slug is kebab-case ascii derived from title',
  articles[0].slug === 'composite-decking-and-winter-weather-what-northern-virginia-homeowners-should-know',
  articles[0].slug,
);
check(
  'slug strips punctuation',
  articles[1].slug === 'screened-porch-vs-covered-deck-choosing-for-loudoun-county-lots',
  articles[1].slug,
);
check('date is ISO', articles[0].date === '2026-09-21T14:30:00.000Z', articles[0].date);
check('display date formatted', articles[0].dateDisplay === 'September 21, 2026', articles[0].dateDisplay);
check(
  'excerpt is plain text from description',
  articles[0].excerpt === 'A short summary of how composite boards behave through freeze & thaw cycles.',
  articles[0].excerpt,
);
check('excerpt falls back to CDATA description text', articles[1].excerpt.startsWith('Two popular ways'), articles[1].excerpt);
check('wordCount computed', articles[0].wordCount > 30, String(articles[0].wordCount));

// --- Sanitization ------------------------------------------------------------
const html = articles[0].contentHtml;
check('script tag removed', !/<script/i.test(html) && !/alert\("xss"\)/.test(html));
check('style tag removed', !/<style/i.test(html) && !/\.hidden/.test(html));
check('iframe removed', !/<iframe/i.test(html) && !/evil\.example\.com/.test(html));
check('inline style attribute stripped', !/style=/i.test(html));
check('event handlers stripped', !/on(click|mouseover|error)=/i.test(html));
check('class attribute stripped', !/class=/i.test(html));
check('h1 demoted to h2', /<h2>Composite Decking &amp; Winter Weather<\/h2>/.test(html) && !/<h1/i.test(html), html.slice(0, 120));
check('<b> mapped to <strong>', /<strong>expand and contract<\/strong>/.test(html));
check(
  'ldndecks.com absolute link rewritten to relative (query + hash kept)',
  html.includes('<a href="/deck-maintenance-checklist-virginia?utm_source=soro#winter">maintenance checklist</a>'),
);
check(
  'external link gets rel="nofollow noopener" + target=_blank',
  html.includes('<a href="https://www.trex.com/care" rel="nofollow noopener" target="_blank">Trex care page</a>'),
);
check('javascript: link dropped but text kept', !/javascript:/i.test(html) && html.includes('should be stripped'));
check(
  'https image kept with alt, width, height and lazy loading',
  html.includes('<img src="https://cdn.example.com/soro/winter-deck.jpg" alt="Composite deck after snowfall" loading="lazy" decoding="async" width="1200" height="800" />'),
);
check('http (insecure) image dropped', !/insecure\.example\.com/.test(html));
check('table structure preserved', /<table><thead><tr><th>Board<\/th><th>Gap<\/th><\/tr><\/thead>/.test(html.replace(/\s+/g, '')));
check('colspan preserved', /<td colspan="1">/.test(html));
check('blockquote preserved', /<blockquote>Always follow/.test(html));
check('figure/figcaption preserved', /<figure>/.test(html) && /<figcaption>Composite deck after snowfall<\/figcaption>/.test(html));
check('div/span unwrapped but text kept', !/<div|<span/i.test(html) && html.includes('Wrapped text stays.'));

const html2 = articles[1].contentHtml;
check('relative internal link kept as-is', html2.includes('<a href="/deck-permit-loudoun-county-virginia">'));
check('unclosed tags are balanced at end', html2.trim().endsWith('</strong></p>'), html2.slice(-40));

// --- Direct sanitizer edge cases -------------------------------------------
check('empty input → empty string', sanitizeArticleHtml('') === '');
check('stray "<" is escaped', sanitizeArticleHtml('<p>a < b</p>') === '<p>a &lt; b</p>', sanitizeArticleHtml('<p>a < b</p>'));
check('data: image dropped', !/data:/.test(sanitizeArticleHtml('<img src="data:image/png;base64,AAAA" alt="x">')));
check('unterminated <script> drops the rest', sanitizeArticleHtml('<p>ok</p><script>while(1){}') === '<p>ok</p>');
check('slugify handles diacritics + symbols', slugify('Café Décor: 10% Off!') === 'cafe-decor-10-off', slugify('Café Décor: 10% Off!'));

// --- Degradation paths -------------------------------------------------------
check('garbage XML → []', parseSoroFeed('<html><body>not a feed</body></html>').length === 0);
check('empty channel → []', parseSoroFeed('<rss><channel></channel></rss>').length === 0);
check('default feed URL used when SORO_RSS_URL unset', !process.env.SORO_RSS_URL ? getSoroFeedUrl() === DEFAULT_SORO_RSS_URL : true);

// Live fetch: whatever the upstream state (403 "Feed is disabled", empty, or
// live), this must resolve to an array and never throw. Run outside Next so
// `next: { revalidate }` is simply ignored by the platform fetch.
const live = await getSoroArticles().catch((error) => error);
check('live getSoroArticles() resolves to an array (never throws)', Array.isArray(live), String(live));
console.log(`INFO live feed currently yields ${Array.isArray(live) ? live.length : 'n/a'} article(s)`);

const previousUrl = process.env.SORO_RSS_URL;
process.env.SORO_RSS_URL = 'https://127.0.0.1:9/unreachable-feed.xml';
const unreachable = await getSoroArticles().catch((error) => error);
if (previousUrl === undefined) delete process.env.SORO_RSS_URL; else process.env.SORO_RSS_URL = previousUrl;
check('unreachable host → [] (no throw)', Array.isArray(unreachable) && unreachable.length === 0, String(unreachable));

if (failures) {
  console.error(`\n${failures} check(s) failed.`);
  process.exit(1);
}
console.log('\nAll Soro feed checks passed.');
