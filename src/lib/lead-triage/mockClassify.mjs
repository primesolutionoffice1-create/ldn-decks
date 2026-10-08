import { classifyPlace } from './config.mjs';
import {
  PERMIT_WORK_OPTIONS,
  SERVICE_TYPE_OPTIONS,
  URGENCY_SCALE,
} from './questions.mjs';

const SERVICE_FIELD = new Map([
  ['new decks', 'new_deck'],
  ['deck replacement', 'new_deck'],
  ['composite decks', 'new_deck'],
  ['deck resurfacing', 'repair_resurface'],
  ['screened porches', 'screened_porch'],
  ['porches', 'screened_porch'],
  ['pergolas', 'other'],
  ['patios', 'other'],
  ['fencing', 'other'],
  ['other', 'other'],
]);

function textOf(record) {
  return [
    record.serviceHint,
    record.message,
    record.raw?.timeline,
    record.raw?.budgetRange,
    record.raw?.materialInterest,
    record.city,
    record.raw?.description,
    record.raw?.workClass,
    record.raw?.permitType,
    record.raw?.projectName,
  ].filter(Boolean).join(' \n ').toLowerCase();
}

function choiceAnswer(selected, confidence, options) {
  const keys = Object.keys(options);
  const rest = Math.max(0, 1 - confidence);
  const probabilities = {};
  const others = keys.filter((key) => key !== selected);
  keys.forEach((key) => {
    if (key === selected) probabilities[key] = round4(confidence);
    else probabilities[key] = round4(rest / Math.max(1, others.length));
  });
  return {
    type: 'choice',
    choice: selected,
    confidence: round4(confidence),
    probabilities,
  };
}

function noulAnswer(yesProbability) {
  return { type: 'noul', noul: round4(yesProbability) };
}

function scoreAnswer(index, confidence) {
  const probabilities = {};
  const remainder = Math.max(0, 1 - confidence);
  URGENCY_SCALE.forEach((_, level) => {
    probabilities[String(level)] = level === index ? round4(confidence) : 0;
  });
  if (remainder > 0) {
    const neighbor = Math.min(URGENCY_SCALE.length - 1, index + 1);
    const target = neighbor === index ? Math.max(0, index - 1) : neighbor;
    probabilities[String(target)] = round4(Number(probabilities[String(target)] || 0) + remainder);
  }
  const legend = {};
  URGENCY_SCALE.forEach((label, level) => {
    legend[String(level)] = label;
  });
  const score = URGENCY_SCALE.reduce((sum, _label, level) => sum + level * Number(probabilities[String(level)] || 0), 0);
  return {
    type: 'score',
    score: round4(score),
    confidence: round4(confidence),
    probabilities,
    legend,
  };
}

function round4(value) {
  return Math.round(value * 10000) / 10000;
}

function inferService(record, text) {
  const fromField = SERVICE_FIELD.get(String(record.serviceHint || '').trim().toLowerCase());
  let fromText = null;
  if (/under[- ]?deck|ceiling under|dry space under/.test(text)) fromText = 'under_deck_ceiling';
  else if (/screen(?:ed)? porch|porch enclosure|enclos\w+ porch|screen enclosure/.test(text)) fromText = 'screened_porch';
  else if (/resurface|re-surface|repair|rotten|rotting|boards?|refinish/.test(text)) fromText = 'repair_resurface';
  else if (/new deck|build a deck|\btrex\b|composite deck|deck builder/.test(text)) fromText = 'new_deck';

  if (fromField && fromText && fromField !== fromText && fromField !== 'other') {
    return choiceAnswer(fromText, 0.64, SERVICE_TYPE_OPTIONS);
  }
  if (fromField) return choiceAnswer(fromField, fromField === 'other' ? 0.9 : 0.93, SERVICE_TYPE_OPTIONS);
  if (fromText) return choiceAnswer(fromText, 0.82, SERVICE_TYPE_OPTIONS);
  return choiceAnswer('other', 0.55, SERVICE_TYPE_OPTIONS);
}

function explicitSmallBudget(text) {
  if (/under \$?1,?000|few hundred|single board|one board|just a board/.test(text)) return true;
  for (const match of text.matchAll(/\$\s*([0-9]{1,3}(?:,[0-9]{3})+|[0-9]+)(?![\d,]|\s*k)/gi)) {
    const amount = Number(match[1].replace(/,/g, ''));
    if (amount > 0 && amount < 3500) return true;
  }
  return false;
}

function inferMinimum(record, text) {
  const budget = String(record.raw?.budgetRange || '');
  if (explicitSmallBudget(text)) return noulAnswer(0.08);
  if (/under \$15k|\$10k|\$15k|\$20k|\$25k|\$40k|\$50k|\$70k|\$100k/.test(`${budget} ${text}`.toLowerCase())) {
    return noulAnswer(0.94);
  }
  if (/not sure/.test(budget.toLowerCase())) return noulAnswer(0.62);
  if (/deck|porch|trex|resurface|under-deck|under deck/.test(text)) return noulAnswer(0.86);
  return noulAnswer(0.6);
}

function inferArea(record, text) {
  const place = classifyPlace(record.city);
  if (place === 'service_area') return noulAnswer(0.96);
  if (place === 'adjacent') return noulAnswer(0.64);
  if (place === 'blank') return noulAnswer(0.55);
  if (/\bmaryland\b|\bbethesda\b|\bsilver spring\b|\bbaltimore\b|\bwashington,? d\.?c\.?\b|\bdistrict of columbia\b|\brichmond\b/.test(text)) {
    return noulAnswer(0.06);
  }
  return noulAnswer(0.58);
}

function inferUrgency(record, text) {
  const timeline = String(record.raw?.timeline || '').toLowerCase();
  if (/collaps|unsafe|safety|injury|falling apart|immediately/.test(text) || timeline === 'immediately') {
    return scoreAnswer(4, 0.95);
  }
  if (timeline.includes('1-3')) return scoreAnswer(3, 0.9);
  if (timeline.includes('3-6')) return scoreAnswer(2, 0.9);
  if (/just exploring/.test(timeline) || /just exploring|no rush|next year/.test(text)) return scoreAnswer(0, 0.92);
  return scoreAnswer(1, 0.5);
}

function inferSpam(record, text) {
  if (/seo|backlink|guest post|crypto|bitcoin|web design|increase your ranking|click here|viagra/.test(text)) {
    return noulAnswer(0.97);
  }
  const hasContact = Boolean(String(record.email || '').includes('@') || String(record.phone || '').replace(/\D/g, '').length >= 7);
  const hasProject = /deck|porch|trex|rail|stair|resurface|composite|repair/.test(text);
  if (hasContact && hasProject) return noulAnswer(0.04);
  if (!hasContact && !hasProject) return noulAnswer(0.84);
  return noulAnswer(0.66);
}

export function mockWebsiteAnswers(record) {
  const text = textOf(record);
  return {
    service_type: inferService(record, text),
    job_over_minimum: inferMinimum(record, text),
    in_service_area: inferArea(record, text),
    urgency: inferUrgency(record, text),
    spam: inferSpam(record, text),
  };
}

export function mockPermitAnswers(record) {
  const text = textOf(record);
  const permitType = String(record.raw?.permitType || record.raw?.appType || '').toLowerCase();
  const residential = /residential/.test(permitType) || /residential/.test(text);
  const deckish = /deck|porch|screen/.test(text);
  const commercial = /commercial|certificate of occupancy|tenant/.test(text) && !residential;
  let residentialAnswer;
  if (commercial && !deckish) residentialAnswer = noulAnswer(0.05);
  else if (residential && deckish) residentialAnswer = noulAnswer(0.94);
  else if (deckish) residentialAnswer = noulAnswer(0.72);
  else residentialAnswer = noulAnswer(0.4);

  const workClass = String(record.raw?.workClass || '').toLowerCase();
  let work = 'unknown';
  let confidence = 0.5;
  if (/replace|resurface|existing|enclos|repair|alteration/.test(text) && !/county typical/.test(workClass)) {
    work = 'replacement';
    confidence = 0.86;
  } else if (/county typical|new deck|addition/.test(`${workClass} ${text}`)) {
    work = 'new';
    confidence = /county typical/.test(workClass) ? 0.9 : 0.8;
  }
  return {
    residential_deck_or_porch: residentialAnswer,
    new_vs_replacement: choiceAnswer(work, confidence, PERMIT_WORK_OPTIONS),
  };
}

export function mockAnswersFor(record) {
  if (record?.source === 'website') return mockWebsiteAnswers(record);
  return mockPermitAnswers(record);
}
