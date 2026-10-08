import { JEV_DECISIONS_URL, jevModel, resolveMode } from './config.mjs';
import { mockAnswersFor } from './mockClassify.mjs';
import { permitQuestions, websiteQuestions } from './questions.mjs';

export function questionsFor(record) {
  return record?.source === 'website' ? websiteQuestions() : permitQuestions();
}

export function stateFor(record) {
  return {
    business: {
      name: 'Loudoun Decks',
      minimum_job_usd: 3500,
      phone: '(571) 655-7207',
    },
    lead: {
      source: record.source,
      name: record.contactName || null,
      city: record.city || null,
      state: record.state || null,
      address: record.address || null,
      service: record.serviceHint || null,
      message: record.message || null,
      timeline: record.raw?.timeline || null,
      budget: record.raw?.budgetRange || null,
      material: record.raw?.materialInterest || null,
      permit_type: record.raw?.permitType || record.raw?.appType || null,
      work_class: record.raw?.workClass || null,
      description: record.raw?.description || record.raw?.projectName || null,
      issued_at: record.raw?.issuedAt || record.receivedAt || null,
    },
  };
}

export async function requestDecisions({
  state,
  questions,
  apiKey,
  model,
  fetchImpl = globalThis.fetch,
  signal,
}) {
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not set');
  }
  const response = await fetchImpl(JEV_DECISIONS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model || jevModel(),
      state,
      questions,
    }),
    signal,
  });
  const bodyText = await response.text();
  let body;
  try {
    body = JSON.parse(bodyText);
  } catch {
    body = { raw: bodyText.slice(0, 400) };
  }
  if (!response.ok) {
    const detail = body?.error?.message || body?.error || bodyText.slice(0, 300);
    throw new Error(`Jev decisions failed (${response.status}): ${detail}`);
  }
  if (!body?.answers || typeof body.answers !== 'object') {
    throw new Error('Jev decisions response did not include answers');
  }
  return body;
}

export async function decideRecord(record, deps = {}) {
  const mode = deps.mode || resolveMode(deps.env);
  const questions = questionsFor(record);
  const state = stateFor(record);
  if (mode === 'mock') {
    return {
      provider: 'mock',
      model: 'mock',
      answers: mockAnswersFor(record),
      usage: null,
      state,
    };
  }
  const env = deps.env || process.env;
  const apiKey = deps.apiKey ?? env.OPENROUTER_API_KEY;
  const timeoutMs = deps.timeoutMs ?? 20000;
  const signal = deps.signal || AbortSignal.timeout(timeoutMs);
  const result = await requestDecisions({
    state,
    questions,
    apiKey,
    model: deps.model || jevModel(env),
    fetchImpl: deps.fetchImpl,
    signal,
  });
  return {
    provider: 'openrouter',
    model: result.model || deps.model || jevModel(env),
    answers: result.answers,
    usage: result.usage || null,
    id: result.id || null,
    state,
  };
}
