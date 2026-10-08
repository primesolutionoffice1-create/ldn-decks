import { randomUUID } from 'node:crypto';
import { classifyLead } from './classify.mjs';
import {
  easternDayBounds,
  isSevenAmEastern,
  resolveMode,
  resolvePermitSource,
  summaryRecipient,
} from './config.mjs';
import { draftReply } from './draft.mjs';
import { fetchPermitPage } from './permits.mjs';
import { buildSummaryEmail } from './summary.mjs';
import { createMemoryStore, getStore } from './store.mjs';

const OPEN_STATUSES = ['pending', 'error'];

export function blankRecord(fields) {
  const timestamp = new Date().toISOString();
  return {
    id: fields.id || randomUUID(),
    source: fields.source,
    externalId: fields.externalId,
    receivedAt: fields.receivedAt || timestamp,
    contactName: fields.contactName || '',
    email: fields.email || '',
    phone: fields.phone || '',
    city: fields.city || '',
    state: fields.state || '',
    address: fields.address || '',
    serviceHint: fields.serviceHint || '',
    message: fields.message || '',
    raw: fields.raw || {},
    status: 'pending',
    classification: null,
    draft: null,
    summarySentAt: null,
    createdAt: fields.createdAt || timestamp,
    updatedAt: timestamp,
  };
}

async function storeOf(deps) {
  if (deps.store) return deps.store;
  return getStore(deps.env || process.env);
}

export async function classifyStoredRecord(id, deps = {}) {
  const store = await storeOf(deps);
  const record = await store.getById(id);
  if (!record) return null;
  if (!OPEN_STATUSES.includes(record.status) && !deps.reclassify) return record;

  const mode = deps.mode || resolveMode(deps.env);
  try {
    const classification = await classifyLead(record, { ...deps, mode });
    let draft = null;
    let draftError = null;
    if (classification.bucket === 'passed') {
      try {
        draft = await draftReply(record, classification, { ...deps, mode });
        if (draft) {
          draft.sendable = false;
          draft.autoSent = false;
        }
      } catch (error) {
        draftError = String(error?.message || error).slice(0, 500);
      }
    }
    return store.update(id, {
      status: classification.bucket,
      classification: draftError ? { ...classification, draftError } : classification,
      draft,
    });
  } catch (error) {
    return store.update(id, {
      status: 'error',
      classification: {
        bucket: 'error',
        error: String(error?.message || error).slice(0, 500),
        customerContacted: false,
      },
    });
  }
}

export async function ingestPermits(deps = {}) {
  const store = await storeOf(deps);
  const source = deps.permitSource || resolvePermitSource(deps.env);
  const meta = await store.getMeta();
  const notes = [];
  const createdIds = [];
  for (const county of ['loudoun', 'fairfax']) {
    const cursor = meta.cursors?.[county] || { offset: 0, exhausted: false };
    if (cursor.exhausted && !deps.rewind) {
      notes.push(`${county}: already ingested for this window`);
      continue;
    }
    try {
      const page = await fetchPermitPage({
        county,
        offset: cursor.offset || 0,
        source,
        fetchImpl: deps.fetchImpl,
        env: deps.env,
        limit: deps.permitLimit,
        window: deps.permitWindow,
      });
      if (page.note) notes.push(`${county}: ${page.note}`);
      let created = 0;
      const clock = deps.now instanceof Date ? deps.now.toISOString() : new Date().toISOString();
      for (const lead of page.leads) {
        const saved = await store.upsert(blankRecord({ ...lead, createdAt: clock }));
        if (saved.created) {
          created += 1;
          createdIds.push(saved.record.id);
        }
      }
      const nextOffset = (cursor.offset || 0) + page.fetched;
      await store.setMeta({
        cursors: {
          [county]: {
            offset: nextOffset,
            exhausted: !page.hasMore,
            updatedAt: new Date().toISOString(),
          },
        },
      });
      notes.push(`${county}: fetched ${page.fetched}, new ${created}`);
    } catch (error) {
      notes.push(`${county}: ${String(error?.message || error).slice(0, 300)}`);
    }
  }
  for (const id of createdIds) {
    await classifyStoredRecord(id, deps);
  }
  return { notes, createdIds };
}

export async function listToday(deps = {}) {
  const store = await storeOf(deps);
  const now = deps.now instanceof Date ? deps.now : new Date();
  const bounds = easternDayBounds(now);
  const todays = await store.list({
    createdSince: bounds.start,
    createdUntil: bounds.end,
  });
  const counts = { passed: 0, needs_human_review: 0, rejected: 0, pending: 0, error: 0 };
  for (const record of todays) {
    if (Object.prototype.hasOwnProperty.call(counts, record.status)) counts[record.status] += 1;
  }
  const passed = todays.filter((record) => record.status === 'passed');
  const top = passed.slice(0, 5);
  return {
    date: bounds.dateKey,
    timezone: 'America/New_York',
    mode: deps.mode || resolveMode(deps.env),
    cutoff: deps.cutoff,
    counts,
    top,
    passed,
    review: todays.filter((record) => record.status === 'needs_human_review'),
  };
}

export async function runNightly(deps = {}) {
  const now = deps.now instanceof Date ? deps.now : new Date();
  const mode = deps.mode || resolveMode(deps.env);
  const bounds = easternDayBounds(now);
  if (!deps.force && !isSevenAmEastern(now)) {
    return {
      ok: true,
      skipped: true,
      reason: 'not-7am-et',
      date: bounds.dateKey,
      mode,
      customerContacted: false,
    };
  }
  const store = await storeOf(deps);
  const meta = await store.getMeta();
  const permitRun = await ingestPermits({ ...deps, mode });
  const pending = await store.list({ statuses: OPEN_STATUSES, limit: 100 });
  for (const record of pending) {
    if (!permitRun.createdIds.includes(record.id)) {
      await classifyStoredRecord(record.id, { ...deps, mode });
    }
  }
  const today = await listToday({ ...deps, now, mode, store });
  const mail = buildSummaryEmail({
    dateKey: bounds.dateKey,
    top: today.top,
    counts: today.counts,
    mode,
    cutoff: today.top[0]?.classification?.cutoff ?? deps.cutoff,
    permitNotes: permitRun.notes,
    to: deps.summaryTo || summaryRecipient(deps.env),
  });
  let email;
  const alreadySent = meta.lastSummaryDate === bounds.dateKey && !deps.force;
  if (mode !== 'live' || deps.dryRun) {
    email = { ok: false, skipped: true, reason: mode === 'live' ? 'dry_run' : 'mock_mode', to: mail.to };
  } else if (alreadySent) {
    email = { ok: true, skipped: true, reason: 'already_sent', to: mail.to };
  } else if (typeof deps.sendEmail === 'function') {
    email = await deps.sendEmail(mail);
  } else {
    email = { ok: false, skipped: false, reason: 'no_sender', to: mail.to };
  }
  if (email?.ok) {
    await store.setMeta({ lastSummaryDate: bounds.dateKey });
    for (const record of today.top) {
      await store.update(record.id, { summarySentAt: now.toISOString() });
    }
  }
  return {
    ok: email?.ok !== false || email?.skipped === true,
    skipped: false,
    date: bounds.dateKey,
    mode,
    counts: today.counts,
    topIds: today.top.map((record) => record.id),
    permitNotes: permitRun.notes,
    email,
    customerContacted: false,
    summaryTo: mail.to,
    store: store.kind,
  };
}

export function createPipelineHarness(env = {}) {
  return {
    store: createMemoryStore(),
    mode: 'mock',
    permitSource: 'fixture',
    env: { ...process.env, LEAD_TRIAGE_MODE: 'mock', ...env },
    force: true,
  };
}
