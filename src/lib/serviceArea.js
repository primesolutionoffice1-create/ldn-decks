// Public service-area labels derived from BUSINESS.areaServed.
// Internal confirmation notes stay in docs/seo and are not exported here,
// so they cannot ship in a client bundle or in public JSON-LD.

import { BUSINESS } from './business';

export const AREAS_HUB_PATH = '/areas-we-serve';
export const COMMUNITIES_LABEL = 'Communities across Northern Virginia';

export const DECLARED_AREAS = [
  {
    id: 'loudoun-county',
    match: 'Loudoun County, VA',
    type: 'county',
    path: '/near-you/loudoun-county',
  },
  {
    id: 'fairfax-county',
    match: 'Fairfax County, VA',
    type: 'county',
    path: '/near-you/fairfax-county',
  },
  {
    id: 'prince-william-county',
    match: 'Prince William County, VA',
    type: 'county',
    path: '/near-you/prince-william-county',
  },
  {
    id: 'arlington-county',
    match: 'Arlington County, VA',
    type: 'county',
    path: '/near-you/arlington-county',
  },
  {
    id: 'stafford-county',
    match: 'Stafford County, VA',
    type: 'county',
    path: '/near-you/stafford-county',
  },
  {
    id: 'alexandria',
    match: 'Alexandria, VA',
    type: 'independent-city',
    path: '/deck-builder-alexandria-va',
  },
  {
    id: 'falls-church',
    match: 'Falls Church, VA',
    type: 'independent-city',
    path: '/deck-builder-falls-church-va',
  },
].map((area) => ({
  ...area,
  name: area.match.replace(/, VA$/, ''),
  publishedCoverage: true,
}));

const businessNames = new Set(BUSINESS.areaServed);
for (const area of DECLARED_AREAS) {
  if (!businessNames.has(area.match)) {
    throw new Error(`Declared area ${area.match} is missing from BUSINESS.areaServed`);
  }
}
if (BUSINESS.areaServed.length !== DECLARED_AREAS.length) {
  throw new Error('BUSINESS.areaServed and DECLARED_AREAS drifted apart');
}

export const COVERAGE_SENTENCE = 'Serving Loudoun, Fairfax, Prince William, Arlington, and Stafford counties, plus Alexandria and Falls Church.';

export const SERVICE_AREA_FAQ_ANSWER = 'Loudoun Decks is based in Centreville, Virginia, and serves Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County, plus the independent cities of Alexandria, Falls Church, Fairfax, Manassas, and Manassas Park. A mailing address or ZIP code does not decide which office issues the building permit.';

// Published places that are Virginia independent cities. lookupCountySlug is only
// the existing cityData key used to resolve the current URL. It is not a parent.
export const INDEPENDENT_CITY_PLACES = [
  { name: 'Alexandria', label: 'Alexandria', lookupCountySlug: 'fairfax-county' },
  { name: 'Falls Church', label: 'Falls Church', lookupCountySlug: 'fairfax-county' },
  { name: 'Fairfax', label: 'City of Fairfax', lookupCountySlug: 'fairfax-county' },
  { name: 'Manassas', label: 'Manassas', lookupCountySlug: 'prince-william-county' },
  { name: 'Manassas Park', label: 'Manassas Park', lookupCountySlug: 'prince-william-county' },
];

const INDEPENDENT_CITY_NAMES = new Set(INDEPENDENT_CITY_PLACES.map((place) => place.name));

export function independentCityLabel(cityName) {
  return INDEPENDENT_CITY_PLACES.find((place) => place.name === cityName)?.label || null;
}

export function isIndependentCityName(cityName) {
  return INDEPENDENT_CITY_NAMES.has(cityName);
}

export const AREAS_META_DESCRIPTION = 'Communities across Northern Virginia: Loudoun, Fairfax, Prince William, Arlington, and Stafford counties, plus Alexandria and Falls Church.';

const REQUIRED_COVERAGE_NAMES = ['Loudoun', 'Fairfax', 'Prince William', 'Arlington', 'Stafford', 'Alexandria', 'Falls Church'];
for (const name of REQUIRED_COVERAGE_NAMES) {
  if (!COVERAGE_SENTENCE.includes(name) || !AREAS_META_DESCRIPTION.includes(name)) {
    throw new Error(`Service-area copy dropped ${name}`);
  }
}
