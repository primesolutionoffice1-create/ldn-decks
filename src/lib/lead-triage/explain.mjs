import { DEFAULT_CONFIDENCE_CUTOFF } from './config.mjs';
import { noulYes } from './cutoff.mjs';
import { jobLabel, URGENCY_SCALE } from './questions.mjs';

export const QUESTION_LABELS = Object.freeze({
  service_type: 'Service',
  job_over_minimum: 'Job at least $3,500',
  in_service_area: 'Service area',
  urgency: 'Urgency',
  spam: 'Spam',
  residential_deck_or_porch: 'Residential deck or porch',
  new_vs_replacement: 'New or replacement',
});

const REJECTED_LINES = Object.freeze({
  spam: 'Set aside as spam or a solicitation.',
  below_minimum: 'Set aside. The job looks under the $3,500 minimum.',
  outside_service_area: 'Set aside. The location looks outside the service area.',
  not_residential_deck_or_porch: 'Set aside. This permit does not look like a residential deck or porch.',
});

export function explainLead(record) {
  const classification = record?.classification || {};
  const bucket = classification.bucket || record?.status;
  if (bucket === 'needs_human_review') return reviewLines(classification);
  if (bucket === 'rejected') return rejectedLines(classification);
  if (bucket === 'passed') return [passedLine(record)];
  if (bucket === 'error') {
    return [classification.error || 'Classification failed. Read the original lead.'];
  }
  return ['Still waiting to be classified.'];
}

export function answerLines(record) {
  const cutoff = record?.classification?.cutoff ?? DEFAULT_CONFIDENCE_CUTOFF;
  return (record?.classification?.evaluations || []).map((item) => ({
    questionId: item.questionId,
    label: QUESTION_LABELS[item.questionId] || item.questionId,
    value: bestGuess(item.questionId, item.answer),
    confidence: formatProbability(item.calibratedConfidence),
    meetsCutoff: item.meetsCutoff === true,
    cutoff: formatProbability(cutoff),
  }));
}

function reviewLines(classification) {
  const cutoff = classification.cutoff ?? DEFAULT_CONFIDENCE_CUTOFF;
  const weak = (classification.evaluations || []).filter((item) => !item.meetsCutoff);
  if (weak.length === 0) {
    return ['A person needs to read this lead. Confidence did not clear the cutoff.'];
  }
  return weak.map((item) => {
    const label = QUESTION_LABELS[item.questionId] || item.questionId;
    const confidence = formatProbability(item.calibratedConfidence);
    const guess = bestGuess(item.questionId, item.answer);
    return `${label} needs a person. Confidence ${confidence} is under the ${formatProbability(cutoff)} cutoff. Best guess: ${guess}.`;
  });
}

function rejectedLines(classification) {
  const reasons = classification.reasons || [];
  if (reasons.length === 0) return ['Set aside.'];
  return reasons.map((reason) => REJECTED_LINES[reason] || `Set aside (${reason}).`);
}

function passedLine(record) {
  const page = record?.personalization?.cityPage;
  if (record?.source === 'website') {
    const where = page ? ` Start from ${page}.` : '';
    return `Ready to answer. The draft is stored for the office and has not been sent.${where}`;
  }
  return 'Ready to call. The note is internal and has not been sent.';
}

function bestGuess(questionId, answer) {
  if (!answer || typeof answer !== 'object') return 'unclear';
  if (questionId === 'service_type' || questionId === 'new_vs_replacement') {
    return jobLabel(answer.choice);
  }
  if (questionId === 'urgency' || answer.type === 'score') return bestScoreLabel(answer);
  const yes = noulYes(answer);
  if (yes == null) return 'unclear';
  const phrases = {
    job_over_minimum: ['at least $3,500', 'under $3,500'],
    in_service_area: ['inside the service area', 'outside the service area'],
    spam: ['spam or a solicitation', 'a real project inquiry'],
    residential_deck_or_porch: ['a residential deck or porch', 'not a residential deck or porch'],
  };
  const pair = phrases[questionId];
  if (!pair) return yes ? 'yes' : 'no';
  return yes ? pair[0] : pair[1];
}

function bestScoreLabel(answer) {
  const probabilities = answer.probabilities || {};
  let bestLevel = null;
  let bestProbability = -1;
  for (const [level, probability] of Object.entries(probabilities)) {
    const value = Number(probability);
    if (value > bestProbability) {
      bestProbability = value;
      bestLevel = Number(level);
    }
  }
  if (!Number.isFinite(bestLevel)) {
    const score = Number(answer.score);
    bestLevel = Number.isFinite(score) ? Math.round(score) : null;
  }
  if (!Number.isFinite(bestLevel)) return 'unclear';
  return answer.legend?.[String(bestLevel)] || URGENCY_SCALE[bestLevel] || 'unclear';
}

function formatProbability(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 'unknown';
  return number.toFixed(2);
}
