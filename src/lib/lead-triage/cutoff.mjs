import { DEFAULT_CONFIDENCE_CUTOFF, JEV_BAND_CALIBRATION_POINTS } from './config.mjs';

// Confidence is the probability of the chosen side, not the raw "yes"
// probability. A noul of 0.12 means "no" with confidence 0.88.
export function decisionConfidence(answer) {
  if (!answer || typeof answer !== 'object') return null;
  if (answer.type === 'noul' || Object.prototype.hasOwnProperty.call(answer, 'noul')) {
    const yes = Number(answer.noul);
    if (!Number.isFinite(yes) || yes < 0 || yes > 1) return null;
    return Math.max(yes, 1 - yes);
  }
  if (answer.type === 'choice' || answer.type === 'score') {
    const confidence = Number(answer.confidence);
    if (!Number.isFinite(confidence) || confidence < 0 || confidence > 1) return null;
    return confidence;
  }
  return null;
}

export function noulYes(answer) {
  const yes = Number(answer?.noul);
  if (!Number.isFinite(yes)) return null;
  return yes >= 0.5;
}

// Piecewise linear map. `points` is [[raw, calibrated], ...] covering 0..1.
// Null points means identity, which is the default until a labeled set is fit.
export function calibrateProbability(raw, points = null) {
  if (!Number.isFinite(raw)) return null;
  const x = Math.min(1, Math.max(0, raw));
  if (!Array.isArray(points) || points.length < 2) return x;
  const sorted = [...points]
    .map(([left, right]) => [Number(left), Number(right)])
    .filter(([left, right]) => Number.isFinite(left) && Number.isFinite(right))
    .sort((a, b) => a[0] - b[0]);
  if (sorted.length < 2) return x;
  if (x <= sorted[0][0]) return clamp01(sorted[0][1]);
  for (let i = 1; i < sorted.length; i += 1) {
    const [x0, y0] = sorted[i - 1];
    const [x1, y1] = sorted[i];
    if (x <= x1) {
      if (x1 === x0) return clamp01(y1);
      const t = (x - x0) / (x1 - x0);
      return clamp01(y0 + t * (y1 - y0));
    }
  }
  return clamp01(sorted[sorted.length - 1][1]);
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

export function calibrationPointsFor(profile, questionId) {
  if (profile == null || profile === 'identity') return null;
  if (profile === 'jev-band') return JEV_BAND_CALIBRATION_POINTS;
  if (typeof profile === 'object') {
    const table = profile.questions || profile;
    const specific = table[questionId];
    if (Array.isArray(specific)) return specific;
    if (Array.isArray(table.default)) return table.default;
  }
  return null;
}

export function evaluateAnswers(answers, questionIds, { cutoff = DEFAULT_CONFIDENCE_CUTOFF, calibration = 'identity' } = {}) {
  return questionIds.map((questionId) => {
    const answer = answers?.[questionId] ?? null;
    const rawConfidence = decisionConfidence(answer);
    const calibratedConfidence = calibrateProbability(
      rawConfidence,
      calibrationPointsFor(calibration, questionId),
    );
    return {
      questionId,
      answer,
      rawConfidence,
      calibratedConfidence,
      meetsCutoff: calibratedConfidence != null && calibratedConfidence >= cutoff,
    };
  });
}

export function bucketFromEvaluations(kind, evaluations) {
  const low = (evaluations || []).filter((item) => !item.meetsCutoff);
  if (low.length > 0) {
    return {
      bucket: 'needs_human_review',
      reasons: low.map((item) => `${item.questionId}:confidence`),
    };
  }

  if (kind === 'permit') {
    const residential = evaluations.find((item) => item.questionId === 'residential_deck_or_porch');
    if (noulYes(residential?.answer) !== true) {
      return { bucket: 'rejected', reasons: ['not_residential_deck_or_porch'] };
    }
    return { bucket: 'passed', reasons: [] };
  }

  const spam = evaluations.find((item) => item.questionId === 'spam');
  const job = evaluations.find((item) => item.questionId === 'job_over_minimum');
  const area = evaluations.find((item) => item.questionId === 'in_service_area');
  const reasons = [];
  if (noulYes(spam?.answer) === true) reasons.push('spam');
  if (noulYes(job?.answer) === false) reasons.push('below_minimum');
  if (noulYes(area?.answer) === false) reasons.push('outside_service_area');
  if (reasons.length > 0) return { bucket: 'rejected', reasons };
  return { bucket: 'passed', reasons: [] };
}

export function minCalibratedConfidence(evaluations) {
  const values = (evaluations || [])
    .map((item) => item.calibratedConfidence)
    .filter((value) => Number.isFinite(value));
  if (values.length === 0) return null;
  return Math.min(...values);
}

/**
 * Score a cutoff against hand-labeled rows. Use this when replacing the
 * identity map. Boolean rows contribute to Brier score via `yesProbability`
 * (the model's P(yes), before calibration). Every row needs `label` and
 * `predicted`. Rows under the cutoff are counted as review, not as errors.
 *
 * row = { yesProbability?: number, confidence: number, predicted, label }
 */
export function scoreCalibration(rows, cutoff = DEFAULT_CONFIDENCE_CUTOFF) {
  let brierSum = 0;
  let brierN = 0;
  let decided = 0;
  let correct = 0;
  let review = 0;
  for (const row of rows || []) {
    if (typeof row.label === 'boolean' && Number.isFinite(Number(row.yesProbability))) {
      const p = Math.min(1, Math.max(0, Number(row.yesProbability)));
      brierSum += (p - (row.label ? 1 : 0)) ** 2;
      brierN += 1;
    }
    const confidence = Number(row.confidence);
    if (!Number.isFinite(confidence) || confidence < cutoff) {
      review += 1;
      continue;
    }
    decided += 1;
    if (row.predicted === row.label) correct += 1;
  }
  return {
    n: (rows || []).length,
    review,
    decided,
    correct,
    accuracy: decided ? correct / decided : null,
    brier: brierN ? brierSum / brierN : null,
  };
}
