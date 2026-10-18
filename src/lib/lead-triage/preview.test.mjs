import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { blankRecord, classifyStoredRecord, loadPreview } from './pipeline.mjs';
import { buildVisitorPreview, renderPreviewDocument, renderPreviewNotFound } from './preview.mjs';
import { createMemoryStore } from './store.mjs';

const NOW = '2026-10-08T11:00:00.000Z';

function websiteLead(overrides = {}) {
  return blankRecord({
    source: 'website',
    externalId: overrides.externalId || 'preview-1',
    contactName: 'Ada Homeowner',
    email: 'ada@example.com',
    phone: '5715550100',
    city: 'Leesburg',
    state: 'VA',
    serviceHint: 'Screened Porches',
    message: 'We want a screened porch. My email is ada@example.com.',
    raw: { timeline: 'Immediately', budgetRange: '$25K-$50K', materialInterest: 'Trex' },
    createdAt: NOW,
    ...overrides,
    raw: { timeline: 'Immediately', budgetRange: '$25K-$50K', materialInterest: 'Trex', ...(overrides.raw || {}) },
  });
}

test('a passed lead gets a stable customer page that hides the office notes', async () => {
  const store = createMemoryStore();
  const saved = await store.upsert(websiteLead());
  const first = await classifyStoredRecord(saved.record.id, { store, mode: 'mock', cutoff: 0.7 });
  assert.equal(first.status, 'passed');
  assert.equal(first.personalization.appliedToPublicSite, false);
  assert.match(first.personalization.previewToken, /^[A-Za-z0-9_-]{22,}$/);
  assert.equal(first.personalization.previewPath, `/r/${first.personalization.previewToken}`);

  const again = await classifyStoredRecord(saved.record.id, { store, mode: 'mock', cutoff: 0.7, reclassify: true });
  assert.equal(again.personalization.previewToken, first.personalization.previewToken);

  const loaded = await loadPreview(first.personalization.previewToken, { store });
  const preview = loaded.preview;
  assert.equal(preview.greeting, 'Ada, this page is for your screened porch / enclosure in Leesburg.');
  assert.match(preview.body, /571\) 655-7207/);
  assert.equal(preview.cityPage, '/deck-builder-leesburg-va');
  assert.equal(preview.servicePage, '/screened-porch-builder-northern-virginia');
  assert.equal(preview.appliedToPublicSite, false);
  const packed = JSON.stringify(preview);
  assert.equal(packed.includes('ada@example.com'), false);
  assert.equal(packed.includes('5715550100'), false);
  assert.equal(packed.includes('Battlefield'), false);
  assert.equal(packed.includes(first.draft.text), false);

  assert.equal(await loadPreview('not-a-real-token', { store }), null);
  assert.equal(await loadPreview(`${first.personalization.previewToken}x`, { store }), null);
});

test('a rejected lead has no customer page', async () => {
  const store = createMemoryStore();
  const saved = await store.upsert(websiteLead({
    externalId: 'spam-preview',
    contactName: 'Seo Seller',
    message: 'Buy SEO backlink services for your deck website',
  }));
  const record = await classifyStoredRecord(saved.record.id, { store, mode: 'mock' });
  assert.equal(record.status, 'rejected');
  assert.equal(record.personalization.previewToken, null);
  assert.equal(record.personalization.previewPath, null);
  assert.equal(buildVisitorPreview(record), null);
});

test('robots.txt disallows the customer page prefix and the sitemap list does not add it', () => {
  const robots = readFileSync(new URL('../../app/robots.js', import.meta.url), 'utf8');
  assert.match(robots, /'\/r\/'/);
  const published = readFileSync(new URL('../../../public/robots.txt', import.meta.url), 'utf8');
  const draftRules = published.split('\n').filter((line) => line === 'Disallow: /draft/').length;
  const previewRules = published.split('\n').filter((line) => line === 'Disallow: /r/').length;
  assert.equal(previewRules, draftRules);
  assert.ok(previewRules > 0);
  assert.equal(published.includes('Disallow: /r\n') || published.includes('Disallow: /r\r'), false);
  const sitemap = readFileSync(new URL('../../app/sitemap.js', import.meta.url), 'utf8');
  assert.equal(sitemap.includes('/r/'), false);
});

test('the customer document leaves out marketing tags and does not leak the token', () => {
  const html = renderPreviewDocument({
    title: 'Ada — Screened porch / enclosure in Leesburg | Loudoun Decks',
    greeting: 'Ada, this page is for your screened porch / enclosure in Leesburg.',
    body: 'Call (571) 655-7207. <script>alert(1)</script>',
    phone: '(571) 655-7207',
    phoneHref: 'tel:+15716557207',
    cityPage: '/deck-builder-leesburg-va',
    servicePage: '/screened-porch-builder-northern-virginia',
    cityPageNote: null,
  });
  assert.match(html, /Ada, this page is for your screened porch \/ enclosure in Leesburg\./);
  assert.match(html, /href="\/deck-builder-leesburg-va" rel="noreferrer" referrerpolicy="no-referrer"/);
  assert.match(html, /name="referrer" content="no-referrer"/);
  assert.match(html, /noindex, nofollow, noarchive/);
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.doesNotMatch(html, /<script/i);
  for (const marker of ['googletagmanager', 'ahrefs', 'facebook', 'pinterest', 'pinimg', 'clarity.ms', 'GTM-', 'gtag', 'dataLayer']) {
    assert.equal(html.toLowerCase().includes(marker.toLowerCase()), false, marker);
  }

  const hostile = renderPreviewDocument({
    title: 'Ok',
    greeting: 'Ok',
    body: 'Ok',
    phone: '(571) 655-7207',
    phoneHref: 'javascript:alert(1)',
    cityPage: 'https://evil.example/steal',
    servicePage: '/services/new-decks',
  });
  assert.doesNotMatch(hostile, /javascript:/);
  assert.match(hostile, /href="\/areas-we-serve"/);
  assert.match(hostile, /href="\/services\/new-decks"/);
  assert.doesNotMatch(renderPreviewNotFound(), /<script/i);

  const route = readFileSync(new URL('../../app/r/[token]/route.js', import.meta.url), 'utf8');
  assert.match(route, /referrer-policy/);
  assert.equal(route.includes('tel:'), false);
  const layout = readFileSync(new URL('../../app/layout.js', import.meta.url), 'utf8');
  assert.match(layout, /GTM-N87MG6QS/);
  assert.match(layout, /analytics\.ahrefs\.com/);
});
