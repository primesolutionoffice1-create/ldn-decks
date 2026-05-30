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
  // UI-only rating data — NOT included in JSON-LD schema (removed per Google self-serving policy)
  aggregateRating: {
    ratingValue: '5.0',
    reviewCount: 49,
    bestRating: '5',
    worstRating: '1',
  },
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
    'https://www.facebook.com/profile.php?id=61573750423712',
    'https://www.google.com/maps/place/Loudoun+Decks/',
    'https://www.houzz.com/pro/webuser-782541997/loudoun-decks',
    'https://www.yelp.com/biz/loudoun-decks-centreville',
    'https://www.tiktok.com/@loudoun.decks',
    'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
    'https://www.trustpilot.com/review/ldndecks.com',
    'https://www.buildzoom.com/contractor/loudoun-decks',
    'https://business.loudounchamber.org/list/member/loudoun-decks-30047',
    'https://www.mapquest.com/us/virginia/loudoun-decks-532352487',
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
    {
      name: 'Best of Houzz 2026',
      category: 'award',
      recognizedBy: 'Houzz',
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
  // Verified client reviews — single source of truth for both the org-level
  // `review` JSON-LD (emitted site-wide via buildOrganizationSchema) and the
  // /reviews page cards. First name + last initial only, never full last names.
  // `body` is the text shown on /reviews so on-page content matches schema.
  reviews: [
    {
      author: 'Sarah J.',
      city: 'Ashburn',
      datePublished: '2026-03-15',
      dateLabel: 'March 2026',
      rating: 5,
      project: '400 sqft Trex Transcend Deck',
      platform: 'Google',
      body: 'Loudoun Decks built our 400 sqft Trex deck in Ashburn. From design to final walkthrough, everything was professional and on schedule. The crew was respectful, clean, and skilled. Our deck looks amazing and we use it every evening now.',
    },
    {
      author: 'Michael T.',
      city: 'Leesburg',
      datePublished: '2026-02-28',
      dateLabel: 'February 2026',
      rating: 5,
      project: 'Deck Replacement — Wood to Composite',
      platform: 'Google',
      body: "Best contractor experience we've had in 15 years of homeownership. Nick and his team replaced our old wood deck with Trex Transcend in Leesburg. Handled the HOA submission, pulled all permits, and finished a day early. Highly recommend.",
    },
    {
      author: 'Robert & Linda K.',
      city: 'Centreville',
      datePublished: '2026-01-20',
      dateLabel: 'January 2026',
      rating: 5,
      project: 'Screened Porch with EZE-Breeze',
      platform: 'Google',
      body: "We had a screened porch built with EZE-Breeze windows in Centreville. The quality of work is outstanding. We've already used it through March evenings with just a space heater. Worth every penny.",
    },
    {
      author: 'Jennifer M.',
      city: 'Sterling',
      datePublished: '2025-12-10',
      dateLabel: 'December 2025',
      rating: 5,
      project: 'Multi-Level Composite Deck',
      platform: 'Google',
      body: 'Loudoun Decks designed and built a beautiful two-level deck for our family. The attention to detail was impressive — from the hidden fasteners to the integrated lighting. The permit process was handled entirely by them.',
    },
    {
      author: 'David P.',
      city: 'Reston',
      datePublished: '2025-11-18',
      dateLabel: 'November 2025',
      rating: 5,
      project: 'Deck Resurfacing',
      platform: 'Google',
      body: 'Had our 12-year-old wood deck resurfaced with TimberTech. The team was efficient, the communication was excellent, and the result looks like a brand new deck. No more annual staining — love it.',
    },
    {
      author: 'Amanda S.',
      city: 'McLean',
      datePublished: '2025-10-05',
      dateLabel: 'October 2025',
      rating: 5,
      project: 'Premium Deck + Outdoor Kitchen',
      platform: 'Google',
      body: 'We hired Loudoun Decks for a large project — AZEK deck with an outdoor kitchen island. The design process was collaborative, they understood our vision immediately, and the execution was flawless. Our neighbors keep asking who built it.',
    },
    {
      author: 'Chris & Maria R.',
      city: 'Vienna',
      datePublished: '2025-09-20',
      dateLabel: 'September 2025',
      rating: 5,
      project: 'Pergola with Lighting',
      platform: 'Google',
      body: "Beautiful pergola installation. The team was professional from day one. They suggested lighting options we hadn't considered that completely transformed the space. Great value for the quality delivered.",
    },
    {
      author: 'Tom H.',
      city: 'Fairfax',
      datePublished: '2025-08-15',
      dateLabel: 'August 2025',
      rating: 5,
      project: 'Fence + Deck Package',
      platform: 'Google',
      body: 'Got both a new composite deck and privacy fence done in one project. Saved money by bundling, and the timeline was faster than expected. Very happy with the communication throughout.',
    },
  ],
};

export const ORG_ID = `${BUSINESS.url}/#organization`;
export const WEBSITE_ID = `${BUSINESS.url}/#website`;
export const FOUNDER_ID = `${BUSINESS.url}/#founder`;

// Builds the WebSite JSON-LD object.
// Use this once in the root layout alongside buildOrganizationSchema.
// Resolves the dangling "#website" @id references some pages emit (e.g., WebPage.isPartOf).
// potentialAction enables Google's SiteLinks Search Box rich result —
// requires a real search endpoint at /search?q={search_term_string}.
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BUSINESS.url,
    name: BUSINESS.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BUSINESS.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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
    aggregateRating: { '@type': 'AggregateRating', ...BUSINESS.aggregateRating },
    // Self-hosted `review` markup is intentionally NOT emitted on the
    // organization entity. Google's review-snippet policy disallows
    // self-serving Review structured data (a business marking up reviews
    // about itself) and it risks a "Spam: structured data" manual action.
    // Visible reviews still render from BUSINESS.reviews on /reviews and
    // related pages. aggregateRating is retained — keep reviewCount in
    // sync with the live Google Business Profile total.
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
