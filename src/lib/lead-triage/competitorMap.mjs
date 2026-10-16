import { SERVICE_CITIES } from './config.mjs';

// Snapshot from seo-blueprint/02-COMPETITOR-INTEL.md, captured 2026-05-11.
// This is not a live scrape. Review counts are included only when that
// note recorded them. Facebook, Nextdoor, and Craigslist are not sources.
export const COMPETITOR_SNAPSHOT_DATE = '2026-05-11';
export const COMPETITOR_SNAPSHOT_SOURCE = 'seo-blueprint/02-COMPETITOR-INTEL.md';

export const COMPETITORS = Object.freeze([
  {
    id: 'battlefield',
    name: 'Battlefield Custom Decks & Patios',
    domain: 'battlefielddecks.com',
    hq: 'Gainesville, VA',
    threat: 'high',
    serpHits: 6,
    reviewNote: 'Public review count was not displayed.',
    cities: ['Ashburn', 'Leesburg', 'Fairfax'],
  },
  {
    id: 'fortress',
    name: 'Fortress Construction',
    domain: 'fortress.builders',
    hq: 'Annandale, VA',
    threat: 'high',
    serpHits: 5,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: ['Fairfax', 'Alexandria'],
  },
  {
    id: 'fa-outdoor',
    name: 'FA Outdoor Spaces',
    domain: 'faoutdoorspaces.com',
    hq: 'Maryland / DC / Virginia',
    threat: 'medium',
    serpHits: 4,
    reviewNote: 'Site was behind a firewall during the snapshot, so reviews were not read.',
    cities: ['Leesburg', 'Fairfax', 'Ashburn', 'Alexandria', 'Arlington', 'McLean'],
  },
  {
    id: 'northern-deckworks',
    name: 'Northern Deckworks',
    domain: 'northerndeckworks.com',
    hq: 'Northern Virginia',
    threat: 'medium',
    serpHits: 4,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: [],
  },
  {
    id: 'distinctive',
    name: 'Distinctive Deck Designs',
    domain: 'virginiadeckdesigns.com',
    hq: 'Northern Virginia',
    threat: 'medium',
    serpHits: 3,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: [],
  },
  {
    id: 'core-outdoor',
    name: 'Core Outdoor Living',
    domain: 'coreoutdoor.com',
    hq: 'Fairfax, VA',
    threat: 'low',
    serpHits: 3,
    reviewNote: 'The snapshot saw a broken widget reading "0 5-Star Google Reviews".',
    cities: ['Fairfax'],
  },
  {
    id: 'leesburg-decks',
    name: 'Leesburg Decks & Porches',
    domain: 'leesburgdecksandporches.com',
    hq: 'Leesburg, VA',
    threat: 'medium',
    serpHits: 2,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: ['Leesburg', 'Ashburn'],
  },
  {
    id: 'ashburn-deck-builders',
    name: 'Ashburn Deck Builders',
    domain: 'ashburndeckbuilders.com',
    hq: 'Ashburn, VA',
    threat: 'medium',
    serpHits: 2,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: ['Ashburn'],
  },
  {
    id: 'deckscapes',
    name: 'Deckscapes of VA',
    domain: 'deckscapesofva.com',
    hq: 'Northern Virginia',
    threat: 'medium',
    serpHits: 2,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: ['Fairfax'],
  },
  {
    id: 'nvdeck',
    name: 'NV Deck',
    domain: 'nvdeck.com',
    hq: 'Northern Virginia',
    threat: 'medium',
    serpHits: 2,
    reviewNote: 'Review count was not recorded in the snapshot.',
    cities: [],
  },
]);

// Only cities the 2026-05-11 head-query set actually scored.
export const CITY_ORGANIC_NOTES = Object.freeze({
  Ashburn: { gap: false, note: 'Organic #1 for "deck builders ashburn va". Custom-Ashburn was outside the top 5.' },
  Leesburg: { gap: true, note: 'Not in the top 10 for "deck builders leesburg va".' },
  Fairfax: { gap: true, note: 'Organic rank 5–8 for "deck builders fairfax va".' },
});

export function competitorsInCity(city) {
  const name = String(city || '').trim().toLowerCase();
  if (!name) return [];
  return COMPETITORS.filter((competitor) => competitor.cities.some((entry) => entry.toLowerCase() === name));
}

export function coverageRows() {
  return SERVICE_CITIES.map((city) => {
    const organic = CITY_ORGANIC_NOTES[city] || null;
    return {
      city,
      competitors: competitorsInCity(city),
      organicGap: organic ? organic.gap : null,
      organicNote: organic ? organic.note : 'This city was not in the 2026-05-11 head-query set.',
    };
  });
}

export function gapCities() {
  return coverageRows().filter((row) => row.organicGap === true).map((row) => row.city);
}

export function unassignedCompetitors() {
  return COMPETITORS.filter((competitor) => competitor.cities.length === 0);
}
