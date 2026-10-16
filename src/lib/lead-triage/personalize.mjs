import { OFFICE_PHONE_DISPLAY, normalizePlace } from './config.mjs';
import { competitorsInCity, CITY_ORGANIC_NOTES, COMPETITOR_SNAPSHOT_DATE, COMPETITOR_SNAPSHOT_SOURCE } from './competitorMap.mjs';
import { jobLabel } from './questions.mjs';

// Existing public routes only. Personalization suggests one of these.
// It does not create a page and it does not change what visitors see.
export const CITY_PAGES = Object.freeze({
  ashburn: '/deck-builder-ashburn-va',
  leesburg: '/deck-builder-leesburg-va',
  fairfax: '/deck-builder-fairfax-va',
  sterling: '/deck-builder-sterling-va',
  mclean: '/deck-builder-mclean-va',
  vienna: '/deck-builder-vienna-va',
  herndon: '/deck-builder-herndon-va',
  reston: '/deck-builder-reston-va',
  woodbridge: '/deck-builder-woodbridge-va',
  purcellville: '/deck-builder-purcellville-va',
  centreville: '/deck-builder-centreville-va',
  chantilly: '/deck-builder-chantilly-va',
  'south riding': '/deck-builder-south-riding-va',
  brambleton: '/deck-builder-brambleton-va',
  broadlands: '/deck-builder-broadlands-va',
  aldie: '/deck-builder-aldie-va',
  'great falls': '/deck-builder-great-falls-va',
  oakton: '/deck-builder-oakton-va',
  burke: '/deck-builder-burke-va',
  lorton: '/deck-builder-lorton-va',
  'fairfax station': '/deck-builder-fairfax-station-va',
  'falls church': '/deck-builder-falls-church-va',
  tysons: '/deck-builder-tysons-va',
  manassas: '/deck-builder-manassas-va',
  gainesville: '/deck-builder-gainesville-va',
  haymarket: '/deck-builder-haymarket-va',
  arlington: '/deck-builder-arlington-va',
  alexandria: '/deck-builder-alexandria-va',
  stafford: '/deck-builder-stafford-va',
  springfield: '/deck-builder-springfield-va',
  lansdowne: '/deck-builder-lansdowne-va',
  cascades: '/deck-builder-cascades-va',
  'one loudoun': '/deck-builder-one-loudoun-va',
});

const NEAREST_PAGE = Object.freeze({
  'dale city': {
    path: '/deck-builder-woodbridge-va',
    note: 'There is no Dale City page. The closest city page is Woodbridge.',
  },
});

export const SERVICE_PAGES = Object.freeze({
  new_deck: '/services/new-decks',
  repair_resurface: '/services/deck-repair',
  screened_porch: '/screened-porch-builder-northern-virginia',
  under_deck_ceiling: '/under-deck-ceiling-ideas',
  new: '/services/new-decks',
  replacement: '/services/deck-replacement',
  other: '/services',
  unknown: '/services',
});

export function cityPageFor(city) {
  const key = normalizePlace(city);
  if (!key) return { path: '/areas-we-serve', note: 'No city was given.' };
  if (CITY_PAGES[key]) return { path: CITY_PAGES[key], note: null };
  if (NEAREST_PAGE[key]) return NEAREST_PAGE[key];
  return { path: '/areas-we-serve', note: `No city page is mapped for ${city}.` };
}

export function servicePageFor(choice) {
  return SERVICE_PAGES[choice] || '/services';
}

export function buildPersonalization(record) {
  const choice = record?.classification?.answers?.service_type?.choice
    || record?.classification?.answers?.new_vs_replacement?.choice
    || null;
  const city = record?.city || '';
  const page = cityPageFor(city);
  const servicePage = servicePageFor(choice);
  const competitors = competitorsInCity(city);
  const organic = organicFor(city);
  const job = jobLabel(choice);
  const cityLabel = city || 'Northern Virginia';
  return {
    appliedToPublicSite: false,
    cityPage: page.path,
    cityPageNote: page.note,
    servicePage,
    job,
    headline: `${cityLabel}: ${job}. Use the existing city page for this lead.`,
    competitors: competitors.map((competitor) => ({
      id: competitor.id,
      name: competitor.name,
      domain: competitor.domain,
      threat: competitor.threat,
    })),
    organicGap: organic ? organic.gap : null,
    organicNote: organic ? organic.note : null,
    officePhone: OFFICE_PHONE_DISPLAY,
    snapshotDate: COMPETITOR_SNAPSHOT_DATE,
    snapshotSource: COMPETITOR_SNAPSHOT_SOURCE,
  };
}

function organicFor(city) {
  const key = normalizePlace(city);
  if (!key) return null;
  const match = Object.entries(CITY_ORGANIC_NOTES).find(([name]) => normalizePlace(name) === key);
  return match ? match[1] : null;
}
