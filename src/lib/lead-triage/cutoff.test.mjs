import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { authorizeCron, authorizeInternal, captureWebsiteLead } from './capture.mjs';
import { classifyLead } from './classify.mjs';
import {
  easternDayBounds,
  isSevenAmEastern,
  resolveCutoff,
  resolveMode,
} from './config.mjs';
import {
  bucketFromEvaluations,
  calibrateProbability,
  decisionConfidence,
  evaluateAnswers,
  scoreCalibration,
} from './cutoff.mjs';
import { decideRecord } from './jev.mjs';
import {
  fairfaxWhere,
  fetchPermitPage,
  loudounWhere,
  normalizeFairfaxFeature,
  normalizeLoudounFeature,
  fairfaxFixtureFeatures,
  loudounFixtureFeatures,
} from './permits.mjs';
import { blankRecord, classifyStoredRecord, listToday, runNightly } from './pipeline.mjs';
import { createFileStore, createMemoryStore, rowToRecord } from './store.mjs';
import { buildSummaryEmail } from './summary.mjs';
import { JEV_BAND_CALIBRATION_POINTS } from './config.mjs';

const NOW = new Date('2026-10-08T11:00:00.000Z');

function request(headers) {
  return { headers: { get: (name) => headers[name.toLowerCase()] || null } };
}

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
    ...overrides,
    raw: { timeline: 'Immediately', budgetRange: '$25K-$50K', materialInterest: 'Trex', ...(overrides.raw || {}) },
  });
}

test('default cutoff is 0.70 and garbage falls back to it', () => {
  assert.equal(resolveCutoff({}), 0.7);
  assert.equal(resolveCutoff({ LEAD_TRIAGE_CONFIDENCE_CUTOFF: '0.82' }), 0.82);
  assert.equal(resolveCutoff({ LEAD_TRIAGE_CONFIDENCE_CUTOFF: 'nope' }), 0.7);
  assert.equal(resolveCutoff({ LEAD_TRIAGE_CONFIDENCE_CUTOFF: '4' }), 1);
  assert.equal(resolveCutoff({ LEAD_TRIAGE_CONFIDENCE_CUTOFF: '-1' }), 0);
  assert.equal(resolveMode({}), 'mock');
  assert.equal(resolveMode({ LEAD_TRIAGE_MODE: 'live' }), 'live');
});

test('noul confidence is the chosen side, and 0.70 is the pass line', () => {
  assert.equal(decisionConfidence({ type: 'noul', noul: 0.12 }), 0.88);
  assert.equal(decisionConfidence({ type: 'noul', noul: 0.65 }), 0.65);
  assert.equal(decisionConfidence({ type: 'choice', confidence: 0.7 }), 0.7);
  assert.equal(decisionConfidence({ type: 'noul', noul: 1.2 }), null);

  const passing = evaluateAnswers({
    spam: { type: 'noul', noul: 0.2 },
  }, ['spam'], { cutoff: 0.7 });
  assert.equal(passing[0].meetsCutoff, true);
  assert.equal(passing[0].calibratedConfidence, 0.8);

  const boundary = evaluateAnswers({
    spam: { type: 'choice', choice: 'no', confidence: 0.7, type: 'choice' },
  }, ['spam'], { cutoff: 0.7 });
  assert.equal(boundary[0].meetsCutoff, true);

  const under = evaluateAnswers({
    job_over_minimum: { type: 'noul', noul: 0.699 },
  }, ['job_over_minimum'], { cutoff: 0.7 });
  assert.equal(under[0].meetsCutoff, false);
  assert.equal(under[0].calibratedConfidence, 0.699);

  const missing = evaluateAnswers({}, ['urgency'], { cutoff: 0.7 });
  assert.equal(missing[0].meetsCutoff, false);
  assert.equal(bucketFromEvaluations('website', missing).bucket, 'needs_human_review');
});

test('identity calibration leaves 0.70 in place; jev-band pulls that boundary into review', () => {
  assert.equal(calibrateProbability(0.7, null), 0.7);
  assert.equal(calibrateProbability(0.7, JEV_BAND_CALIBRATION_POINTS), 0.62);
  const answers = { service_type: { type: 'choice', choice: 'new_deck', confidence: 0.7 } };
  const identity = evaluateAnswers(answers, ['service_type'], { cutoff: 0.7, calibration: 'identity' });
  const band = evaluateAnswers(answers, ['service_type'], { cutoff: 0.7, calibration: 'jev-band' });
  assert.equal(identity[0].meetsCutoff, true);
  assert.equal(band[0].meetsCutoff, false);
  assert.equal(bucketFromEvaluations('website', band).bucket, 'needs_human_review');
});

test('hand-labeled rows can be scored without another model call', () => {
  const report = scoreCalibration([
    { yesProbability: 1, confidence: 0.9, predicted: true, label: true },
    { yesProbability: 0, confidence: 0.9, predicted: false, label: false },
    { yesProbability: 0.65, confidence: 0.65, predicted: true, label: false },
  ], 0.7);
  assert.equal(report.review, 1);
  assert.equal(report.decided, 2);
  assert.equal(report.accuracy, 1);
  assert.ok(Math.abs(report.brier - ((0.65 ** 2) / 3)) < 1e-9);
});

test('mock classifier passes a clear Ashburn deck and holds thin ones for review', async () => {
  const passed = await classifyLead(websiteLead(), { mode: 'mock', cutoff: 0.7 });
  assert.equal(passed.bucket, 'passed');
  assert.equal(passed.answers.service_type.choice, 'new_deck');
  assert.equal(passed.customerContacted, false);
  assert.ok(passed.rank > 50);

  const review = await classifyLead(websiteLead({
    externalId: 'review',
    message: 'Thinking about a deck.',
    raw: { timeline: '', budgetRange: 'Not Sure' },
  }), { mode: 'mock', cutoff: 0.7 });
  assert.equal(review.bucket, 'needs_human_review');

  const spam = await classifyLead(websiteLead({
    externalId: 'spam',
    message: 'Buy SEO backlink services for your deck website',
  }), { mode: 'mock', cutoff: 0.7 });
  assert.equal(spam.bucket, 'rejected');
  assert.deepEqual(spam.reasons, ['spam']);

  const small = await classifyLead(websiteLead({
    externalId: 'small',
    city: 'Sterling',
    serviceHint: 'Deck Resurfacing',
    message: 'Can you replace a single board? Budget is $400.',
    raw: { timeline: '1-3 Months', budgetRange: '' },
  }), { mode: 'mock', cutoff: 0.7 });
  assert.equal(small.bucket, 'rejected');
  assert.ok(small.reasons.includes('below_minimum'));

  const away = await classifyLead(websiteLead({
    externalId: 'away',
    city: 'Richmond',
    message: 'New deck in Richmond please',
  }), { mode: 'mock', cutoff: 0.7 });
  assert.equal(away.bucket, 'rejected');
  assert.ok(away.reasons.includes('outside_service_area'));
});

test('a JSON calibration file is applied per question', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'lead-triage-cal-'));
  try {
    const path = join(dir, 'calibration.json');
    const { writeFile } = await import('node:fs/promises');
    await writeFile(path, JSON.stringify({
      service_type: [[0, 0], [1, 0.4]],
    }));
    const result = await classifyLead(websiteLead({ externalId: 'calibrated' }), {
      mode: 'mock',
      cutoff: 0.7,
      env: { LEAD_TRIAGE_CALIBRATION: path },
    });
    const service = result.evaluations.find((item) => item.questionId === 'service_type');
    assert.ok(service.rawConfidence >= 0.7);
    assert.ok(service.calibratedConfidence < 0.7);
    assert.equal(result.bucket, 'needs_human_review');
    assert.equal(result.calibration, 'custom');
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('live mode does not silently mock when the OpenRouter key is missing', async () => {
  let called = false;
  await assert.rejects(
    () => decideRecord(websiteLead(), {
      mode: 'live',
      env: {},
      fetchImpl: async () => {
        called = true;
        throw new Error('network should not be called without a key');
      },
    }),
    /OPENROUTER_API_KEY/,
  );
  assert.equal(called, false);
});

test('Loudoun and Fairfax permit rows use the live field names', () => {
  assert.match(loudounWhere(), /PermitType = 'Building \(Residential\)'/);
  assert.match(loudounWhere(), /DATE '2000-01-01'/);
  assert.match(fairfaxWhere(), /APPTYPEALIAS/);
  assert.match(fairfaxWhere(), /PROJECT_NAME/);
  assert.match(fairfaxWhere(), /ISSUED_DATE/);

  const loudoun = normalizeLoudounFeature(loudounFixtureFeatures()[0]);
  assert.equal(loudoun.externalId, 'B80061870200');
  assert.equal(loudoun.city, 'LEESBURG');
  assert.equal(loudoun.address, '413 ANDROMEDA TER');
  assert.equal(loudoun.raw.issuedAt.slice(0, 10), '2000-07-17');
  assert.equal(loudoun.raw.workClass, 'Deck - County Typical');

  const fairfax = normalizeFairfaxFeature(fairfaxFixtureFeatures()[0]);
  assert.equal(fairfax.externalId, 'ALTR-170610221');
  assert.equal(fairfax.city, 'FAIRFAX STATION');
  assert.equal(fairfax.raw.projectName, 'SCREEN PORCH W OPEN DECK');
  assert.equal(fairfax.raw.issuedAt.slice(0, 10), '2017-03-02');
  assert.equal(fairfax.raw.appType, 'Residential Addition/Alteration');
});

test('fixture permit ingest does not call the network', async () => {
  const page = await fetchPermitPage({
    county: 'loudoun',
    source: 'fixture',
    fetchImpl: async () => {
      throw new Error('fixture mode called the network');
    },
  });
  assert.equal(page.leads.length, 3);
  const fairfax = await fetchPermitPage({ county: 'fairfax', source: 'fixture' });
  assert.equal(fairfax.leads.length, 0);
  assert.match(fairfax.note, /2000-2010/);
});

test('drafts are stored for passing leads and never marked sendable', async () => {
  const store = createMemoryStore();
  const saved = await store.upsert(websiteLead({ createdAt: NOW.toISOString() }));
  const record = await classifyStoredRecord(saved.record.id, { store, mode: 'mock', cutoff: 0.7 });
  assert.equal(record.status, 'passed');
  assert.equal(record.draft.sendable, false);
  assert.equal(record.draft.autoSent, false);
  assert.equal(record.draft.channel, 'email_reply');
  assert.match(record.draft.text, /571\) 655-7207/);
  assert.doesNotMatch(record.draft.text, /this message was sent/i);

  const permit = normalizeLoudounFeature(loudounFixtureFeatures()[0]);
  const permitSaved = await store.upsert(blankRecord({ ...permit, createdAt: NOW.toISOString() }));
  const permitRecord = await classifyStoredRecord(permitSaved.record.id, { store, mode: 'mock', cutoff: 0.7 });
  assert.equal(permitRecord.status, 'passed');
  assert.equal(permitRecord.draft.channel, 'internal_call_note');
  assert.equal(permitRecord.draft.sendable, false);
  assert.match(permitRecord.draft.text, /do not email/i);
});

test('a low-confidence answer on an otherwise good lead stays in review and gets no draft', async () => {
  const store = createMemoryStore();
  const saved = await store.upsert(websiteLead({
    externalId: 'thin',
    message: 'Thinking about a deck.',
    raw: { timeline: '', budgetRange: 'Not Sure' },
    createdAt: NOW.toISOString(),
  }));
  const record = await classifyStoredRecord(saved.record.id, { store, mode: 'mock' });
  assert.equal(record.status, 'needs_human_review');
  assert.equal(record.draft, null);
});

test('7:00 AM Eastern is 11:00 UTC in July and October, and 12:00 UTC in January', () => {
  assert.equal(isSevenAmEastern(new Date('2026-07-15T11:00:00.000Z')), true);
  assert.equal(isSevenAmEastern(new Date('2026-07-15T12:00:00.000Z')), false);
  assert.equal(isSevenAmEastern(new Date('2026-10-08T11:00:00.000Z')), true);
  assert.equal(isSevenAmEastern(new Date('2026-10-08T12:00:00.000Z')), false);
  assert.equal(isSevenAmEastern(new Date('2026-01-15T12:00:00.000Z')), true);
  assert.equal(isSevenAmEastern(new Date('2026-01-15T11:00:00.000Z')), false);
  const summer = easternDayBounds(new Date('2026-07-15T15:00:00.000Z'));
  assert.equal(summer.start, '2026-07-15T04:00:00.000Z');
  const winter = easternDayBounds(new Date('2026-01-15T15:00:00.000Z'));
  assert.equal(winter.start, '2026-01-15T05:00:00.000Z');
});

test('nightly run in mock mode stores a summary and does not email or contact the customer', async () => {
  const store = createMemoryStore();
  const env = { LEAD_TRIAGE_MODE: 'mock', LEAD_TRIAGE_SUMMARY_TO: 'office@ldndecks.com' };
  await captureWebsiteLead({
    eventId: 'event-ada',
    name: 'Ada Homeowner',
    email: 'ada@example.com',
    phone: '5715550100',
    city: 'Ashburn',
    state: 'VA',
    service: 'New Decks',
    message: 'We want a new Trex deck behind the house.',
    timeline: 'Immediately',
    budgetRange: '$25K-$50K',
    materialInterest: 'Trex',
  }, { store, now: NOW });

  let fetches = 0;
  const skipped = await runNightly({
    store,
    env,
    mode: 'mock',
    permitSource: 'fixture',
    now: new Date('2026-10-08T12:00:00.000Z'),
    fetchImpl: async () => { fetches += 1; throw new Error('no network'); },
    sendEmail: async () => { throw new Error('mock mode must not send'); },
  });
  assert.equal(skipped.skipped, true);
  assert.equal(skipped.reason, 'not-7am-et');
  assert.equal(fetches, 0);

  const result = await runNightly({
    store,
    env,
    mode: 'mock',
    permitSource: 'fixture',
    now: NOW,
    fetchImpl: async () => { fetches += 1; throw new Error('no network'); },
    sendEmail: async () => { throw new Error('mock mode must not send'); },
  });
  assert.equal(result.customerContacted, false);
  assert.equal(result.summaryTo, 'office@ldndecks.com');
  assert.equal(result.email.skipped, true);
  assert.equal(result.email.reason, 'mock_mode');
  assert.equal(fetches, 0);
  assert.ok(result.topIds.length >= 1);
  assert.ok(result.topIds.length <= 5);

  const today = await listToday({ store, now: NOW, mode: 'mock' });
  assert.equal(today.date, '2026-10-08');
  assert.equal(today.top[0].source, 'website');
  assert.equal(today.top[0].draft.autoSent, false);
  assert.ok(today.counts.passed >= 1);

  const again = await runNightly({
    store,
    env,
    mode: 'mock',
    permitSource: 'fixture',
    now: NOW,
    fetchImpl: async () => { throw new Error('no network'); },
  });
  assert.match(again.permitNotes.join('\n'), /already ingested/);
});

test('office summary escapes lead text and is addressed to the office', () => {
  const mail = buildSummaryEmail({
    dateKey: '2026-10-08',
    mode: 'mock',
    cutoff: 0.7,
    counts: { passed: 1, needs_human_review: 0, rejected: 0, pending: 0, error: 0 },
    to: 'office@ldndecks.com',
    top: [{
      source: 'website',
      contactName: '<script>alert(1)</script>',
      city: 'Leesburg',
      phone: '5715550100',
      email: 'ada@example.com',
      classification: { rank: 91, answers: { service_type: { choice: 'new_deck' } } },
      draft: { channel: 'email_reply', text: 'Hi <b>Ada</b>', sendable: false, autoSent: false },
    }],
  });
  assert.equal(mail.to, 'office@ldndecks.com');
  assert.doesNotMatch(mail.html, /<script>/);
  assert.match(mail.html, /&lt;script&gt;/);
  assert.match(mail.html, /Nothing in this email was sent to a customer/);
  assert.equal(mail.replyTo, undefined);
});

test('file store keeps classification across a reload', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'lead-triage-'));
  try {
    const path = join(dir, 'store.json');
    const store = createFileStore(path);
    const saved = await store.upsert(websiteLead({ createdAt: NOW.toISOString() }));
    await classifyStoredRecord(saved.record.id, { store, mode: 'mock' });
    const reloaded = createFileStore(path);
    const record = await reloaded.getById(saved.record.id);
    assert.equal(record.status, 'passed');
    assert.equal(record.draft.sendable, false);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('postgres row mapping keeps the draft flag off', () => {
  const record = rowToRecord({
    id: '1',
    source: 'website',
    external_id: 'evt',
    received_at: '2026-10-08T11:00:00.000Z',
    contact_name: 'Ada',
    email: 'ada@example.com',
    phone: '5715550100',
    city: 'Ashburn',
    state: 'VA',
    address: '',
    service_hint: 'New Decks',
    message: 'Deck',
    raw: {},
    status: 'passed',
    classification: { bucket: 'passed', rank: 80 },
    draft: { sendable: false, autoSent: false, text: 'Hi' },
    summary_sent_at: null,
    created_at: '2026-10-08T11:00:00.000Z',
    updated_at: '2026-10-08T11:00:00.000Z',
  });
  assert.equal(record.externalId, 'evt');
  assert.equal(record.draft.sendable, false);
  assert.equal(record.draft.autoSent, false);
});

test('cron and today endpoints require a secret in production', () => {
  const denied = authorizeCron(request({}), { CRON_SECRET: 'topsecret' });
  assert.equal(denied.ok, false);
  const allowed = authorizeCron(request({ authorization: 'Bearer topsecret' }), { CRON_SECRET: 'topsecret' });
  assert.equal(allowed.ok, true);
  const basic = authorizeInternal(request({
    authorization: `Basic ${Buffer.from('admin:hunter2').toString('base64')}`,
  }), { ADMIN_USERNAME: 'admin', ADMIN_PASSWORD: 'hunter2', NODE_ENV: 'production', CRON_SECRET: 'other' });
  assert.equal(basic.ok, true);
  const openLocal = authorizeInternal(request({}), { NODE_ENV: 'development' });
  assert.equal(openLocal.ok, true);
  const closed = authorizeInternal(request({}), { NODE_ENV: 'production', VERCEL_ENV: 'production' });
  assert.equal(closed.ok, false);
});
