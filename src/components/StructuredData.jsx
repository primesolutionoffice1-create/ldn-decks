import React from 'react';

export default function StructuredData() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': 'https://ldndecks.com/#organization',
    name: 'Loudoun Decks',
    url: 'https://ldndecks.com',
    logo: 'https://ldndecks.com/ldndecks-logo.webp',
    image: 'https://ldndecks.com/images/img64.jpeg',
    telephone: '+1-571-655-7207',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13704 Winding Oak Cir',
      addressLocality: 'Centreville',
      addressRegion: 'VA',
      postalCode: '20121',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Ashburn' },
      { '@type': 'City', name: 'Leesburg' },
      { '@type': 'City', name: 'Sterling' },
      { '@type': 'City', name: 'Reston' },
      { '@type': 'City', name: 'Herndon' },
      { '@type': 'City', name: 'Fairfax' },
      { '@type': 'City', name: 'Vienna' },
      { '@type': 'AdministrativeArea', name: 'Loudoun County' },
      { '@type': 'AdministrativeArea', name: 'Fairfax County' },
      { '@type': 'AdministrativeArea', name: 'Prince William County' },
    ],
    geo: { '@type': 'GeoCoordinates', latitude: 38.8404, longitude: -77.4289 },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61573750423712',
      'https://www.instagram.com/loudoundecks/',
      'https://x.com/ldndecks',
      'https://g.page/ldndecks',
    ],
    email: 'office@ldndecks.com',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '41',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'James R.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Nick and his team built us a 500 sqft Trex Transcend deck in Ashburn — exceptional craftsmanship.',
        datePublished: '2025-08-15'
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Maria S.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Loudoun Decks handled the HOA submission and permits themselves. Deck was done in 10 days.',
        datePublished: '2025-09-22'
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
