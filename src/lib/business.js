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
    // 5-decimal precision (~1m accuracy) per Whitespark + schema.org recommendations.
    // Verified against Google Maps pin for 13704 Winding Oak Cir, Centreville VA.
    latitude: '38.83966',
    longitude: '-77.43927',
  },
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
    { days: ['Saturday'], opens: '08:00', closes: '17:00' },
  ],
  areaServed: [
    'Loudoun County, VA',
    'Fairfax County, VA',
    'Prince William County, VA',
    'Arlington County, VA',
    'Alexandria, VA',
    'Falls Church, VA',
    'Stafford County, VA',
  ],
  sameAs: [
    'https://x.com/ldndecks',
    'https://www.instagram.com/loudoundecks/',
    'https://www.facebook.com/profile.php?id=61574201228967',
    'https://www.google.com/maps/place/Loudoun+Decks/',
    'https://www.houzz.com/pro/webuser-782541997/loudoun-decks',
    'https://www.yelp.com/biz/loudoun-decks-centreville',
    'https://www.tiktok.com/@loudoun.decks',
    'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
    'https://www.trustpilot.com/review/ldndecks.com',
    'https://www.buildzoom.com/contractor/loudoun-decks',
    'https://business.loudounchamber.org/list/member/loudoun-decks-30047',
    'https://www.mapquest.com/us/virginia/loudoun-decks-532352487',
    'https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b',
  ],
  // Professional credentials mirrored into schema as hasCredential.
  // Keep this list limited to verifiable credentials. Manufacturer profiles,
  // BBB, Houzz, Yelp, and other public trust references belong in sameAs or
  // visible "verify directly" copy, not credential schema.
  credentials: [
    {
      name: 'Class A Contractor License',
      category: 'license',
      recognizedBy: 'Virginia Department of Professional and Occupational Regulation',
    },
    {
      name: 'NADRA Builder/Contractor/Remodeler Membership',
      category: 'membership',
      recognizedBy: 'North American Deck and Railing Association',
    },
    {
      name: 'Houzz Public Profile',
      category: 'profile',
      recognizedBy: 'Houzz',
    },
  ],
  memberships: [
    {
      name: 'North American Deck and Railing Association',
      alternateName: 'NADRA',
      url: 'https://www.nadra.org/',
      logoPath: null, // Set to an original or NADRA-approved /badges/... asset only after owner proof is archived.
      memberType: 'Deck Builder/Contractor/Remodeler Primary Member',
      memberSince: '2026-04-29',
      expires: '2027-04-29',
      directoryUrl: 'https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b',
    },
  ],
  // Founder / Owner Person entity. Used as Author for ArticleSchema across
  // permit/inspection/material-comparison content + as employee/founder of
  // the Organization. Strengthens E-E-A-T and entity-trust signals by giving
  // Google + AI engines a named, verifiable expert to attribute content to,
  // rather than an anonymous corporate site.
  founder: {
    name: 'Nicolae Zugrav',
    jobTitle: 'Founder & Lead Contractor',
    worksFor: 'Loudoun Decks',
    knowsAbout: [
      'composite deck building',
      'PVC deck construction',
      'Fairfax County deck permits',
      'Loudoun County deck permits',
      'Northern Virginia HOA architectural review',
      'Trex installation',
      'TimberTech installation',
      'structural deck inspection',
    ],
    hasCredential: 'VA Class A Contractor License #2705191673',
    // sameAs URLs added as the founder's professional profiles come online.
    // Keep this list in sync with BUSINESS.sameAs where the founder is
    // explicitly represented vs the organization.
    sameAs: [],
  },
  // Do not add individual review excerpts here unless they are copied from a
  // verified public profile or owner-supplied evidence packet. Keeping this
  // empty prevents accidentally publishing fabricated customer stories.
  reviews: [],
};

export const ORG_ID = `${BUSINESS.url}/#organization`;
export const WEBSITE_ID = `${BUSINESS.url}/#website`;
export const FOUNDER_ID = `${BUSINESS.url}/#founder`;
export const BUSINESS_PHONE_DISPLAY = '(571) 655-7207';

// Builds the WebSite JSON-LD object.
// Use this once in the root layout alongside buildOrganizationSchema.
// Resolves the dangling "#website" @id references some pages emit (e.g., WebPage.isPartOf).
// Do not advertise SearchAction until the site has a real, tested search route.
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

// Hero intro video shown on the homepage (also referenced in sitemap.xml).
// Duration measured from the actual MP4 (mvhd atom): 12.12s → ISO 8601 PT12S.
export const INTRO_VIDEO = {
  contentUrl: `${BUSINESS.url}/introvideo.mp4`,
  thumbnailUrl: `${BUSINESS.url}/og-default.webp`,
  name: 'Craftsmanship in Motion | Loudoun Decks',
  description:
    'See how Loudoun Decks transforms Northern Virginia backyards into luxury outdoor living spaces with custom Trex decks and screened porches.',
  uploadDate: '2026-04-23T08:00:00.000Z',
  durationISO: 'PT12S',
};

// Builds the VideoObject JSON-LD for the homepage hero video.
// Emit once globally next to the Organization/WebSite nodes.
export function buildVideoObjectSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${BUSINESS.url}/#intro-video`,
    name: INTRO_VIDEO.name,
    description: INTRO_VIDEO.description,
    thumbnailUrl: INTRO_VIDEO.thumbnailUrl,
    contentUrl: INTRO_VIDEO.contentUrl,
    uploadDate: INTRO_VIDEO.uploadDate,
    duration: INTRO_VIDEO.durationISO,
    publisher: { '@id': ORG_ID },
    isFamilyFriendly: true,
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
      // Reference the single canonical org by @id only — re-declaring
      // '@type': 'GeneralContractor' here minted a second contractor node.
      member: { '@id': ORG_ID },
    })),
    // Founder Person entity — strengthens E-E-A-T by giving Google + AI
    // engines a named, verifiable expert to attribute the organization's
    // expertise to. Surfaces as `founder` on the org and as a reusable
    // Person @id that ArticleSchema / NamedAuthor components can reference.
    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: BUSINESS.founder.name,
      jobTitle: BUSINESS.founder.jobTitle,
      worksFor: { '@id': ORG_ID },
      knowsAbout: BUSINESS.founder.knowsAbout,
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: BUSINESS.founder.hasCredential,
        credentialCategory: 'license',
        recognizedBy: { '@type': 'Organization', name: 'Virginia Department of Professional and Occupational Regulation' },
      },
      // Spread only if non-empty — empty `sameAs: []` is valid but adds noise.
      ...(BUSINESS.founder.sameAs && BUSINESS.founder.sameAs.length
        ? { sameAs: BUSINESS.founder.sameAs }
        : {}),
    },
  };
}

// Standalone helper for Article / NamedAuthor components — emit only the
// Person entity (not the full Organization graph) when an article needs to
// reference the founder as Author.
export function buildFounderSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: BUSINESS.founder.name,
    jobTitle: BUSINESS.founder.jobTitle,
    worksFor: { '@id': ORG_ID, '@type': 'GeneralContractor', name: BUSINESS.name },
    knowsAbout: BUSINESS.founder.knowsAbout,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: BUSINESS.founder.hasCredential,
      credentialCategory: 'license',
    },
    ...(BUSINESS.founder.sameAs && BUSINESS.founder.sameAs.length
      ? { sameAs: BUSINESS.founder.sameAs }
      : {}),
  };
}
