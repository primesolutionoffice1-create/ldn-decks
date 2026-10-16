import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { coverageRows, gapCities } from './competitorMap.mjs';
import { blankRecord, classifyStoredRecord } from './pipeline.mjs';
import { CITY_PAGES, SERVICE_PAGES, buildPersonalization, cityPageFor } from './personalize.mjs';
import { createMemoryStore } from './store.mjs';
import { buildSummaryEmail } from './summary.mjs';

function pageExists(routePath) {
  const base = join(process.cwd(), 'src', 'app', ...routePath.split('/').filter(Boolean));
  return existsSync(join(base, 'page.js')) || existsSync(join(base, 'page.tsx'));
}

test('suggested pages are existing public routes', () => {
  for (const routePath of Object.values(CITY_PAGES)) {
    assert.equal(pageExists(routePath), true, routePath);
  }
  for (const routePath of Object.values(SERVICE_PAGES)) {
    assert.equal(pageExists(routePath), true, routePath);
  }
  assert.equal(pageExists('/areas-we-serve'), true);
});

test('Ashburn new-deck brief uses the Ashburn and new-deck pages', () => {
  const brief = buildPersonalization({
    city: 'Ashburn',
    classification: { answers: { service_type: { choice: 'new_deck' } } },
  });
  assert.equal(brief.appliedToPublicSite, false);
  assert.equal(brief.cityPage, '/deck-builder-ashburn-va');
  assert.equal(brief.cityPageNote, null);
  assert.equal(brief.servicePage, '/services/new-decks');
  assert.equal(brief.organicGap, false);
  assert.match(brief.organicNote, /Organic #1/);
  assert.ok(brief.competitors.some((competitor) => competitor.id === 'battlefield'));
  assert.ok(brief.competitors.every((competitor) => competitor.id !== 'fortress'));
});

test('Dale City points at Woodbridge, and an unmapped city points at the area index', () => {
  const dale = cityPageFor('Dale City');
  assert.equal(dale.path, '/deck-builder-woodbridge-va');
  assert.match(dale.note, /no Dale City page/i);
  const daleBrief = buildPersonalization({ city: 'Dale City' });
  assert.equal(daleBrief.appliedToPublicSite, false);
  assert.equal(daleBrief.servicePage, '/services');

  const unknown = cityPageFor('Richmond');
  assert.equal(unknown.path, '/areas-we-serve');
  assert.match(unknown.note, /Richmond/);
});

test('Leesburg is an organic gap in the stored snapshot', () => {
  const brief = buildPersonalization({
    city: 'leesburg',
    classification: { answers: { service_type: { choice: 'screened_porch' } } },
  });
  assert.equal(brief.cityPage, '/deck-builder-leesburg-va');
  assert.equal(brief.servicePage, '/screened-porch-builder-northern-virginia');
  assert.equal(brief.organicGap, true);
  assert.equal(brief.appliedToPublicSite, false);
  assert.deepEqual(gapCities(), ['Leesburg', 'Fairfax']);
  assert.equal(coverageRows().length, 13);
});

test('a classified lead stores the brief and the office email includes the existing pages', async () => {
  const store = createMemoryStore();
  const saved = await store.upsert(blankRecord({
    source: 'website',
    externalId: 'ada-personalize',
    contactName: 'Ada Homeowner',
    email: 'ada@example.com',
    phone: '5715550100',
    city: 'Ashburn',
    state: 'VA',
    serviceHint: 'New Decks',
    message: 'We want a new Trex deck behind the house.',
    raw: { timeline: 'Immediately', budgetRange: '$25K-$50K', materialInterest: 'Trex' },
    createdAt: '2026-10-08T11:00:00.000Z',
  }));
  const record = await classifyStoredRecord(saved.record.id, { store, mode: 'mock', cutoff: 0.7 });
  assert.equal(record.status, 'passed');
  assert.equal(record.personalization.appliedToPublicSite, false);
  assert.equal(record.personalization.cityPage, '/deck-builder-ashburn-va');
  assert.equal(record.personalization.servicePage, '/services/new-decks');
  assert.equal(record.draft.sendable, false);

  const mail = buildSummaryEmail({
    dateKey: '2026-10-08',
    mode: 'mock',
    cutoff: 0.7,
    counts: { passed: 1 },
    top: [{
      ...record,
      personalization: {
        ...record.personalization,
        organicNote: 'Rank <top>',
      },
    }],
  });
  assert.match(mail.html, /\/deck-builder-ashburn-va/);
  assert.match(mail.html, /\/services\/new-decks/);
  assert.match(mail.html, /Rank &lt;top&gt;/);
  assert.doesNotMatch(mail.html, /Rank <top>/);
  assert.match(mail.text, /Existing pages: \/deck-builder-ashburn-va/);
  assert.match(mail.html, /Nothing in this email was sent to a customer/);
});
