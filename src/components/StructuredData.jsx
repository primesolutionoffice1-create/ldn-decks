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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '41',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
