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
    'https://www.tiktok.com/@loudoun.decks',
    'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
  ],
  // Professional credentials surfaced site-wide on the site — mirrored into
  // schema as hasCredential for E-E-A-T / entity-trust signals.
  credentials: [
    {
      name: 'TrexPro Platinum Installer',
      category: 'certification',
      recognizedBy: 'Trex Company, Inc.',
    },
    {
      name: 'Class A Contractor License',
      category: 'license',
      recognizedBy: 'Virginia Department of Professional and Occupational Regulation',
    },
    {
      name: 'TimberTech Certified Installer',
      category: 'certification',
      recognizedBy: 'AZEK Building Products',
    },
    {
      name: 'NADRA Builder/Contractor/Remodeler Membership',
      category: 'membership',
      recognizedBy: 'North American Deck and Railing Association',
    },
  ],
  memberships: [
    {
      name: 'North American Deck and Railing Association',
      alternateName: 'NADRA',
      url: 'https://www.nadra.org/',
      memberType: 'Deck Builder/Contractor/Remodeler Primary Member',
      memberSince: '2026-04-29',
      expires: '2027-04-29',
      directoryUrl: 'https://www.nadra.org/membership/directory/builders',
    },
  ],
};

export const ORG_ID = `${BUSINESS.url}/#organization`;
export const WEBSITE_ID = `${BUSINESS.url}/#website`;

// Builds the WebSite JSON-LD object.
// Use this once in the root layout alongside buildOrganizationSchema.
// Resolves the dangling "#website" @id references some pages emit (e.g., WebPage.isPartOf).
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BUSINESS.url,
    name: BUSINESS.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

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
    hasCredential: BUSINESS.credentials.map(c => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: c.category,
      recognizedBy: { '@type': 'Organization', name: c.recognizedBy },
    })),
    memberOf: BUSINESS.memberships.map(m => ({
      '@type': 'Organization',
      name: m.name,
      alternateName: m.alternateName,
      url: m.url,
      member: {
        '@type': 'GeneralContractor',
        '@id': ORG_ID,
      },
    })),
  };
}
