#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');

const layout = read('src/app/layout.js');
const widget = read('src/components/XappChatWidget.jsx');
const widgetLib = read('src/lib/xappWidget.js');
const namedAuthor = read('src/components/NamedAuthor.jsx');
const trustBlock = read('src/components/TrustBlock.jsx');
const trustLib = read('src/lib/trust.js');
const business = read('src/lib/business.js');
const localService = read('src/components/LocalServicePage.jsx');
const profiles = read('src/lib/publicProfiles.js');
const guides = read('src/lib/guideCommercialLinks.js');
const projects = read('src/data/projectCaseStudies.js');
const snippets = JSON.parse(read('src/data/verifiedProofSnippets.json'));

assert.equal(/src=["']https:\/\/widget\.xapp\.ai\/xapp-chat-widget\.js/.test(layout), false);
assert.match(layout, /XappChatWidget/);
assert.match(widget, /requestIdleCallback/);
assert.match(widget, /pointerdown/);
assert.match(widget, /keydown/);
assert.match(widget, /touchstart/);
assert.match(widgetLib, /export const XAPP_SCRIPT_ID = 'xapp-js'/);
assert.equal(widgetLib.includes("'/undefined/"), false);
assert.match(widgetLib, /https:\/\/widget\.xapp\.ai/);

assert.equal(namedAuthor.includes('program status is not stated here'), false);
assert.match(namedAuthor, /TrustBlock/);
assert.match(namedAuthor, /programLabels/);
assert.match(trustBlock, /data-trust-block/);
assert.match(trustBlock, /as of/);
assert.equal(trustBlock.includes('AggregateRating'), false);
assert.equal(trustLib.includes('AggregateRating'), false);
assert.equal(business.includes('AggregateRating'), false);
assert.match(business, /Trex Platinum Partner/);
assert.match(business, /TimberTech Certified/);
assert.match(trustLib, /ratingValue: 5\.0/);
assert.match(trustLib, /reviewCount: 53/);
assert.match(trustLib, /asOfLabel: 'Nov 27, 2026'/);
assert.match(trustLib, /show: true/);
assert.match(trustLib, /google\.show !== true/);

assert.equal(localService.includes('source.sourceUrl'), false);
assert.match(localService, /publicProfileLinks/);
assert.match(profiles, /if \(!href\) return null/);
assert.match(profiles, /google-business-profile/);

const reviewSources = snippets.snippets.filter((item) => item.type === 'public_review_source');
assert.equal(reviewSources.length, 5);
for (const source of reviewSources) {
  assert.match(source.url, /^https:\/\//, source.source_id);
}

assert.match(guides, /blog\/2x8-vs-2x10-deck-joists/);
assert.match(guides, /education\/ledger-board-flashing-deck-attachment-virginia/);
assert.match(guides, /education\/understanding-deck-cantilevers-virginia/);
assert.match(guides, /education\/deck-stair-code-rise-run-virginia/);
assert.match(guides, /blog\/how-to-restore-faded-composite-decking/);
const moneyLinks = guides.match(/\/deck-builder-northern-virginia/g) || [];
assert.ok(moneyLinks.length >= 5);

assert.match(projects, /published: true/);
assert.match(projects, /quote: null/);
assert.match(projects, /new-composite-deck-ashburn/);
assert.equal((projects.match(/published: true/g) || []).length, 1);
assert.ok(fs.existsSync(path.join(root, 'public/images/img13.jpeg')));

const moneyPage = read('src/app/deck-builder-northern-virginia/page.js');
assert.match(moneyPage, /Deck Builder in Northern Virginia/);
assert.match(moneyPage, /Fairfax/);
assert.match(moneyPage, /Loudoun/);
assert.match(moneyPage, /Prince William/);
assert.match(moneyPage, /CallLink/);
assert.match(moneyPage, /PaidSearchLeadForm/);

const newDecks = read('src/app/services/new-decks/page.js');
assert.equal(newDecks.includes('Custom Deck Builder Northern Virginia | Design'), false);

const origin = process.env.SEO_AUDIT_ORIGIN;
if (origin) {
  const sitemapResponse = await fetch(new URL('/sitemap.xml', origin), { redirect: 'manual' });
  assert.equal(sitemapResponse.status, 200);
  const xml = await sitemapResponse.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  assert.ok(locs.length >= 400, `sitemap has ${locs.length} URLs`);
  const failures = [];
  const queue = [...locs];
  const workers = Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const loc = queue.pop();
      const response = await fetch(new URL(loc, origin), { redirect: 'manual' });
      if (response.status !== 200) failures.push(`${response.status} ${loc}`);
      else await response.arrayBuffer();
    }
  });
  await Promise.all(workers);
  assert.deepEqual(failures, []);

  const cityResponse = await fetch(new URL('/service/ashburn', origin));
  assert.equal(cityResponse.status, 200);
  const cityHtml = await cityResponse.text();
  assert.match(cityHtml, /data-trust-block/);
  assert.equal(cityHtml.includes('program status is not stated here'), false);
  assert.equal(/<a\b(?![^>]*\bhref=)[^>]*>/i.test(cityHtml), false);
  assert.equal(cityHtml.includes('aggregateRating'), false);
  assert.match(cityHtml, /https:\/\/www\.google\.com\/maps\?cid=10508603141052545545/);
  assert.match(cityHtml, /as of/);

  const homeHtml = await (await fetch(new URL('/', origin))).text();
  assert.equal(/<script[^>]+src=["'][^"']*xapp-chat-widget\.js/.test(homeHtml), false);
  assert.match(homeHtml, /data-trust-block/);
  assert.match(homeHtml, /GTM-N87MG6QS/);
  assert.match(homeHtml, /href="\/deck-builder-northern-virginia"/);

  const moneyHtml = await (await fetch(new URL('/deck-builder-northern-virginia', origin))).text();
  assert.match(moneyHtml, /<h1[^>]*>[\s\S]*Deck Builder in Northern Virginia/);
  assert.match(moneyHtml, /tel:\+15716557207/);
  assert.match(moneyHtml, /<form[\s>]/i);
  assert.match(moneyHtml, /data-trust-block/);

  const studyHtml = await (await fetch(new URL('/projects/new-composite-deck-ashburn', origin))).text();
  assert.match(studyHtml, /BUILD NEW COMPOSITE DECK/);
  assert.match(studyHtml, /Loudoun County/);
  assert.match(studyHtml, /Composite decking/);
  assert.equal(studyHtml.includes('Client said'), false);

  const guideHtml = await (await fetch(new URL('/blog/2x8-vs-2x10-deck-joists', origin))).text();
  assert.match(guideHtml, /href="\/deck-builder-northern-virginia"/);
  assert.match(guideHtml, /href="\/services\/new-decks"/);
}

console.log(JSON.stringify({ ok: true, live: Boolean(origin), profiles: reviewSources.length }, null, 2));
