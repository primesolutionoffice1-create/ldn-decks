import { readFileSync } from 'node:fs';
import { resolveCutoff, resolveMode } from './config.mjs';
import {
  bucketFromEvaluations,
  evaluateAnswers,
  minCalibratedConfidence,
} from './cutoff.mjs';
import { decideRecord } from './jev.mjs';
import { questionIdsFor, URGENCY_SCALE } from './questions.mjs';

export function rankRecord(record) {
  if (record.source !== 'website') {
    const issued = String(record.raw?.issuedAt || record.receivedAt || '');
    const year = Number(issued.slice(0, 4));
    const ageBoost = Number.isFinite(year) ? Math.min(1, Math.max(0, (2010 - year) / 10)) : 0.4;
    const primary = record.raw?.primaryCity ? 1 : 0.65;
    return Math.round((40 + ageBoost * 25 + primary * 20) * 10) / 10;
  }
  const urgency = Number(record.classification?.answers?.urgency?.score);
  const urgencyNorm = Number.isFinite(urgency) ? Math.min(1, Math.max(0, urgency / (URGENCY_SCALE.length - 1))) : 0.35;
  const service = record.classification?.answers?.service_type?.choice;
  const serviceWeight = service && service !== 'other' ? 1 : 0.45;
  const confidence = Number(record.classification?.minCalibratedConfidence);
  const confidenceWeight = Number.isFinite(confidence) ? confidence : 0.7;
  const blend = 0.6 * urgencyNorm + 0.25 * serviceWeight + 0.15 * confidenceWeight;
  return Math.round((50 + 50 * blend) * 10) / 10;
}

export function loadCalibrationProfile(env = process.env) {
  const raw = String(env.LEAD_TRIAGE_CALIBRATION || '').trim();
  if (!raw || raw === 'identity') return 'identity';
  if (raw === 'jev-band') return 'jev-band';
  if (raw.startsWith('{')) return JSON.parse(raw);
  return JSON.parse(readFileSync(raw, 'utf8'));
}

export async function classifyLead(record, deps = {}) {
  const env = deps.env || process.env;
  const cutoff = deps.cutoff ?? resolveCutoff(env);
  const calibration = deps.calibration ?? loadCalibrationProfile(env);
  const kind = record.source === 'website' ? 'website' : 'permit';
  const decision = await decideRecord(record, { ...deps, env, mode: deps.mode || resolveMode(env) });
  const questionIds = questionIdsFor(record);
  const evaluations = evaluateAnswers(decision.answers, questionIds, { cutoff, calibration });
  const outcome = bucketFromEvaluations(kind, evaluations);
  const classification = {
    provider: decision.provider,
    model: decision.model,
    cutoff,
    calibration: typeof calibration === 'string' ? calibration : 'custom',
    answers: decision.answers,
    evaluations,
    minCalibratedConfidence: minCalibratedConfidence(evaluations),
    bucket: outcome.bucket,
    reasons: outcome.reasons,
    usage: decision.usage,
    requestId: decision.id || null,
    customerContacted: false,
  };
  const ranked = { ...record, classification };
  classification.rank = rankRecord(ranked);
  return classification;
}
