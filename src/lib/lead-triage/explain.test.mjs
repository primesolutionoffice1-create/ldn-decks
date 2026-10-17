import assert from 'node:assert/strict';
import test from 'node:test';
import { coverageAction, prioritizeCoverage } from './competitorMap.mjs';
import { explainLead } from './explain.mjs';
import { cityPageFor } from './personalize.mjs';
import { blankRecord, classifyStoredRecord, listToday } from './pipeline.mjs';
import { createMemoryStore } from './store.mjs';
import { buildSummaryEmail } from './summary.mjs';

const NOW = new Date('2026-10-08T11:00:00.000Z');

function websiteLead(overrides = {}) {
  return blankRecord({
    source: 'website',
    externalId: overrides.externalId || 'lead-1',
    contactName: 'Ada Homeowner',
    email: 'ada@example.com',
    phone: '5715550100',
    city: 'Ashburn',
    state: 'VA',
    serviceHint: 'New Decks',
    message: 'We want a new Trex deck behind the house.',
    raw: { timeline: 'Immediately', budgetRange: '$25K-$50K', materialInterest: 'Trex' },
    createdAt: NOW.toISOString(),
    ...overrides,
    raw: { timeline: 'Immediately', budgetRange: '$25K-$50K', materialInterest: 'Trex', ...(overrides.raw || {}) },
  });
}

async function classify(record) {
  const store = createMemoryStore();
  const saved = await store.upsert(record);
  return classifyStoredRecord(saved.record.id, { store, mode: 'mock', cutoff: 0.7 });
}

test('a thin lead names the weak answers, the cutoff, and the best guess', async () => {
  const record = await classify(websiteLead({
    externalId: 'thin',
    message: 'Thinking about a deck.',
    raw: { timeline: '', budgetRange: 'Not Sure' },
  }));
  assert.equal(record.status, 'needs_human_review');
  const lines = explainLead(record);
  assert.match(lines.join('\n'), /Job at least \$3,500 needs a person\. Confidence 0\.62 is under the 0\.70 cutoff\. Best guess: at least \$3,500\./);
  assert.match(lines.join('\n'), /Urgency needs a person\. Confidence 0\.50 is under the 0\.70 cutoff\. Best guess: Planning later this year\./);
  assert.equal(record.draft, null);
});

test('confident rejects say why they were set aside', async () => {
  const spam = await classify(websiteLead({
    externalId: 'spam',
    message: 'Buy SEO backlink services for your deck website',
  }));
  assert.deepEqual(explainLead(spam), ['Set aside as spam or a solicitation.']);

  const small = await classify(websiteLead({
    externalId: 'small',
    city: 'Sterling',
    serviceHint: 'Deck Resurfacing',
    message: 'Can you replace a single board? Budget is $400.',
    raw: { timeline: '1-3 Months', budgetRange: '' },
  }));
  assert.ok(explainLead(small).some((line) => line.includes('under the $3,500 minimum')));

  const away = await classify(websiteLead({
    externalId: 'away',
    city: 'Richmond',
    message: 'New deck in Richmond please',
  }));
  assert.ok(explainLead(away).some((line) => line.includes('outside the service area')));
});

test('a passed lead points at the existing page and says the draft was not sent', async () => {
  const record = await classify(websiteLead({ city: 'Leesburg' }));
  assert.equal(record.status, 'passed');
  const [line] = explainLead(record);
  assert.match(line, /has not been sent/);
  assert.match(line, /\/deck-builder-leesburg-va/);
  assert.equal(record.draft.sendable, false);
});

test('the morning email includes review reasons and escapes them', async () => {
  const store = createMemoryStore();
  const thin = await store.upsert(websiteLead({
    externalId: 'thin-mail',
    contactName: '<script>alert(1)</script>',
    message: 'Thinking about a deck.',
    raw: { timeline: '', budgetRange: 'Not Sure' },
  }));
  const review = await classifyStoredRecord(thin.record.id, { store, mode: 'mock' });
  const spamSaved = await store.upsert(websiteLead({
    externalId: 'spam-mail',
    contactName: 'Seo Seller',
    message: 'Buy SEO backlink services for your deck website',
  }));
  const rejected = await classifyStoredRecord(spamSaved.record.id, { store, mode: 'mock' });
  const today = await listToday({ store, now: NOW });
  assert.equal(today.review.length, 1);
  assert.equal(today.rejected.length, 1);

  const mail = buildSummaryEmail({
    dateKey: '2026-10-08',
    mode: 'mock',
    cutoff: 0.7,
    counts: today.counts,
    top: [],
    review: [review],
    rejected: [rejected],
  });
  assert.match(mail.html, /Needs a person/);
  assert.match(mail.html, /Confidence 0\.62 is under the 0\.70 cutoff/);
  assert.match(mail.html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.doesNotMatch(mail.html, /<script>/);
  assert.match(mail.html, /Set aside as spam or a solicitation/);
  assert.match(mail.text, /Needs a person/);
  assert.match(mail.html, /Nothing in this email was sent to a customer/);
});

test('the coverage work list puts organic gaps ahead of cities that were already ranking', () => {
  const cities = prioritizeCoverage().map((row) => row.city);
  assert.ok(cities.indexOf('Fairfax') < cities.indexOf('Sterling'));
  assert.ok(cities.indexOf('Leesburg') < cities.indexOf('Sterling'));
  assert.ok(cities.indexOf('Sterling') < cities.indexOf('Ashburn'));
  assert.equal(cities[0], 'Fairfax');
  assert.equal(cities.at(-1), 'Ashburn');

  const dale = prioritizeCoverage().find((row) => row.city === 'Dale City');
  const page = cityPageFor('Dale City');
  assert.equal(page.path, '/deck-builder-woodbridge-va');
  assert.match(coverageAction(dale, page.path), /\/deck-builder-woodbridge-va/);
  assert.match(coverageAction(
    prioritizeCoverage().find((row) => row.city === 'Leesburg'),
    '/deck-builder-leesburg-va',
  ), /Organic gap/);
  assert.match(coverageAction(
    prioritizeCoverage().find((row) => row.city === 'Ashburn'),
    '/deck-builder-ashburn-va',
  ), /already ranking/);
});
