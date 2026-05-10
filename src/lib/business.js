// Single source of truth for business identity.
// All org-level Schema.org JSON-LD must derive from this module.

export const BUSINESS = {
  name: 'Loudoun Decks',
  alternateName: 'LDN Decks',
  url: 'https://ldndecks.com',
  logo: 'https://ldndecks.com/ldndecks-logo.webp',
  image: 'https://ldndecks.com/images/img64.jpeg',
  telephone: '+15716557207', // E.164 — canonical for Schema.org
  email: 'office@ldndecks.com',
  priceRange: '$$-$$$$',
  address: {
    streetAddress: '13704 Winding Oak Cir',
    addressLocality: 'Centreville',
    addressRegion: 'VA',
    postalCode: '20121',
    addressCountry: 'US',
  },
  geo: {
    latitude: '38.8404',
    longitude: '-77.4289',
  },
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
    { days: ['Saturday'], opens: '08:00', closes: '17:00' },
  ],
  aggregateRating: {
    ratingValue: '5.0',
    reviewCount: '41',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    'Loudoun County, VA',
    'Fairfax County, VA',
    'Prince William County, VA',
    'Arlington County, VA',
    'Stafford County, VA',
  ],
  sameAs: [
    'https://x.com/ldndecks',
    'https://www.instagram.com/loudoundecks/',
    'https://www.facebook.com/profile.php?id=61573750423712',
    'https://www.google.com/maps/place/Loudoun+Decks/',
    'https://www.houzz.com/pro/ldndecks',
    'https://www.yelp.com/biz/loudoun-decks-centreville',
  ],
};

export const ORG_ID = `${BUSINESS.url}/#organization`;
export const WEBSITE_ID = `${BUSINESS.url}/#website`;

// Builds the full GeneralContractor JSON-LD object.
// Use this once in the root layout. All other surfaces should reference {"@id": ORG_ID} only.
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': ORG_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: { '@type': 'PostalAddress', ...BUSINESS.address },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    openingHoursSpecification: BUSINESS.openingHours.map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: { '@type': 'AggregateRating', ...BUSINESS.aggregateRating },
    areaServed: BUSINESS.areaServed.map(name => ({ '@type': 'AdministrativeArea', name })),
    sameAs: BUSINESS.sameAs,
  };
}
