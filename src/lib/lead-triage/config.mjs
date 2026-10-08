// Lead-triage settings. Every secret is read from the environment at call
// time. Nothing in this module has a default API key.

export const OFFICE_EMAIL = 'office@ldndecks.com';
export const OFFICE_PHONE_DISPLAY = '(571) 655-7207';
export const MINIMUM_JOB_USD = 3500;
export const DEFAULT_CONFIDENCE_CUTOFF = 0.7;
export const EASTERN_TIME_ZONE = 'America/New_York';

export const JEV_MODEL = 'typesafe/jev-1.13';
export const JEV_DECISIONS_URL = 'https://openrouter.ai/api/alpha/decisions';
export const ANTHROPIC_MESSAGES_URL = 'https://api.anthropic.com/v1/messages';
export const DEFAULT_ANTHROPIC_MODEL = 'claude-sonnet-5-5';

// Primary cities from the operating brief. Communities below sit in
// Loudoun, Fairfax, or Prince William and are treated as in-area when a
// homeowner names the neighborhood instead of the city.
export const SERVICE_CITIES = Object.freeze([
  'Ashburn',
  'Leesburg',
  'Fairfax',
  'Sterling',
  'McLean',
  'Vienna',
  'Herndon',
  'Reston',
  'Woodbridge',
  'Purcellville',
  'Centreville',
  'Chantilly',
  'Dale City',
]);

export const SERVICE_COMMUNITIES = Object.freeze([
  'South Riding',
  'Brambleton',
  'Broadlands',
  'Aldie',
  'Hamilton',
  'Round Hill',
  'Lovettsville',
  'Middleburg',
  'Lansdowne',
  'Cascades',
  'Stone Ridge',
  'Great Falls',
  'Oakton',
  'Burke',
  'Annandale',
  'Clifton',
  'Lorton',
  'Fairfax Station',
  'Falls Church',
  'Tysons',
  'Dunn Loring',
  'Manassas',
  'Lake Ridge',
  'Montclair',
  'Gainesville',
  'Haymarket',
  'Nokesville',
]);

export const SERVICE_COUNTIES = Object.freeze([
  'Loudoun County, VA',
  'Fairfax County, VA',
  'Prince William County, VA',
]);

// Adjacent places the public site sometimes mentions. They are not an
// automatic yes or no — low confidence sends them to a person.
export const ADJACENT_PLACES = Object.freeze([
  'Arlington',
  'Alexandria',
  'Stafford',
]);

export const PERMIT_WINDOW = Object.freeze({
  start: '2000-01-01',
  end: '2011-01-01',
});

// Pulled down inside the band an independent check found overconfident.
// Not applied unless LEAD_TRIAGE_CALIBRATION=jev-band (or a JSON file
// supplies its own points). Default scoring uses the raw probability.
export const JEV_BAND_CALIBRATION_POINTS = Object.freeze([
  [0, 0],
  [0.6, 0.6],
  [0.7, 0.62],
  [1, 1],
]);

export function resolveMode(env = process.env) {
  const raw = String(env.LEAD_TRIAGE_MODE || '').trim().toLowerCase();
  if (raw === 'live' || raw === 'mock') return raw;
  return 'mock';
}

export function resolveCutoff(env = process.env) {
  const raw = env.LEAD_TRIAGE_CONFIDENCE_CUTOFF;
  if (raw == null || String(raw).trim() === '') return DEFAULT_CONFIDENCE_CUTOFF;
  const value = Number(raw);
  if (!Number.isFinite(value)) return DEFAULT_CONFIDENCE_CUTOFF;
  return Math.min(1, Math.max(0, value));
}

export function resolvePermitSource(env = process.env) {
  const raw = String(env.LEAD_TRIAGE_PERMIT_SOURCE || '').trim().toLowerCase();
  if (raw === 'fixture' || raw === 'live') return raw;
  return resolveMode(env) === 'live' ? 'live' : 'fixture';
}

export function resolvePermitWindow(env = process.env) {
  const start = String(env.LEAD_TRIAGE_PERMIT_START || PERMIT_WINDOW.start).slice(0, 10);
  const end = String(env.LEAD_TRIAGE_PERMIT_END || PERMIT_WINDOW.end).slice(0, 10);
  return { start, end };
}

export function resolvePermitLimit(env = process.env) {
  const value = Number(env.LEAD_TRIAGE_PERMIT_LIMIT ?? 25);
  if (!Number.isFinite(value) || value < 1) return 25;
  return Math.min(200, Math.floor(value));
}

export function summaryRecipient(env = process.env) {
  const configured = String(env.LEAD_TRIAGE_SUMMARY_TO || '').trim();
  return configured || OFFICE_EMAIL;
}

export function jevModel(env = process.env) {
  return String(env.JEV_MODEL || JEV_MODEL).trim() || JEV_MODEL;
}

export function anthropicModel(env = process.env) {
  return String(env.ANTHROPIC_MODEL || DEFAULT_ANTHROPIC_MODEL).trim() || DEFAULT_ANTHROPIC_MODEL;
}

export function normalizePlace(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function placeSet(list) {
  return new Set(list.map((name) => normalizePlace(name)));
}

const CITY_SET = placeSet(SERVICE_CITIES);
const COMMUNITY_SET = placeSet(SERVICE_COMMUNITIES);
const ADJACENT_SET = placeSet(ADJACENT_PLACES);

export function classifyPlace(value) {
  const name = normalizePlace(value);
  if (!name) return 'blank';
  if (CITY_SET.has(name) || COMMUNITY_SET.has(name)) return 'service_area';
  if (ADJACENT_SET.has(name)) return 'adjacent';
  return 'other';
}

export function easternParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: EASTERN_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });
  const parts = {};
  for (const part of formatter.formatToParts(date)) {
    if (part.type !== 'literal') parts[part.type] = part.value;
  }
  let hour = Number(parts.hour);
  if (hour === 24) hour = 0;
  return {
    year: parts.year,
    month: parts.month,
    day: parts.day,
    hour,
    minute: Number(parts.minute),
    dateKey: `${parts.year}-${parts.month}-${parts.day}`,
  };
}

export function isSevenAmEastern(date = new Date()) {
  return easternParts(date).hour === 7;
}

// ET midnight is 04:00 UTC during EDT and 05:00 UTC during EST.
export function easternDayBounds(date = new Date()) {
  const { dateKey } = easternParts(date);
  const [year, month, day] = dateKey.split('-').map(Number);
  for (const utcHour of [4, 5]) {
    const start = new Date(Date.UTC(year, month - 1, day, utcHour, 0, 0));
    const parts = easternParts(start);
    if (parts.dateKey === dateKey && parts.hour === 0 && parts.minute === 0) {
      const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
      return { start: start.toISOString(), end: end.toISOString(), dateKey };
    }
  }
  const end = new Date(date);
  const start = new Date(end.getTime() - 24 * 60 * 60 * 1000);
  return { start: start.toISOString(), end: end.toISOString(), dateKey };
}
