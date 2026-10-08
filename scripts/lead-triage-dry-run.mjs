import { captureWebsiteLead } from '../src/lib/lead-triage/capture.mjs';
import { createMemoryStore } from '../src/lib/lead-triage/store.mjs';
import { listToday, runNightly } from '../src/lib/lead-triage/pipeline.mjs';
import { buildSummaryEmail } from '../src/lib/lead-triage/summary.mjs';

const now = new Date('2026-10-08T11:00:00.000Z');
const store = createMemoryStore();
const env = { LEAD_TRIAGE_MODE: 'mock' };

await captureWebsiteLead({
  eventId: 'dry-run-ada',
  name: 'Ada Homeowner',
  email: 'ada@example.com',
  phone: '5715550100',
  city: 'Ashburn',
  state: 'VA',
  service: 'New Decks',
  message: 'We want a new Trex deck this month.',
  timeline: 'Immediately',
  budgetRange: '$25K-$50K',
  materialInterest: 'Trex',
}, { store, now, env });

await captureWebsiteLead({
  eventId: 'dry-run-spam',
  name: 'Seo Bot',
  email: 'bot@example.com',
  phone: '5715550199',
  city: 'Leesburg',
  state: 'VA',
  service: 'Other',
  message: 'Guest post and SEO backlink offer for your deck site.',
  timeline: 'Immediately',
  budgetRange: '$25K-$50K',
}, { store, now, env });

const result = await runNightly({
  store,
  env,
  mode: 'mock',
  permitSource: 'fixture',
  now,
  force: true,
  fetchImpl: async () => {
    throw new Error('dry run tried to reach a permit API');
  },
  sendEmail: async () => {
    throw new Error('dry run tried to send email');
  },
});

const today = await listToday({ store, now, mode: 'mock', cutoff: 0.7 });
const mail = buildSummaryEmail({
  dateKey: today.date,
  top: today.top,
  counts: today.counts,
  mode: 'mock',
  cutoff: 0.7,
  permitNotes: result.permitNotes,
  to: 'office@ldndecks.com',
});

console.log(JSON.stringify({
  mode: result.mode,
  date: result.date,
  customerContacted: result.customerContacted,
  email: result.email,
  counts: today.counts,
  top: today.top.map((record) => ({
    source: record.source,
    city: record.city,
    job: record.classification?.answers?.service_type?.choice
      || record.classification?.answers?.new_vs_replacement?.choice,
    score: record.classification?.rank,
    bucket: record.status,
    draftStored: Boolean(record.draft?.text),
    draftSendable: record.draft?.sendable ?? null,
  })),
  permitNotes: result.permitNotes,
  summaryTo: mail.to,
  summarySubject: mail.subject,
}, null, 2));

if (result.customerContacted !== false || mail.to !== 'office@ldndecks.com') {
  process.exitCode = 1;
}
