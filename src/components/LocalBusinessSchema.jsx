import React from 'react';
import JsonLd from './JsonLd';

export default function LocalBusinessSchema({ city, description, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `https://ldndecks.com/#organization-${city.toLowerCase().replace(/\s+/g, '-')}`,
    "name": "Loudoun Decks",
    "alternateName": "LDN Decks",
    "url": url || "https://ldndecks.com",
    "logo": "https://ldndecks.com/ldndecks-logo.webp",
    "image": "https://ldndecks.com/images/img64.jpeg",
    "description": description || `Top-rated custom deck builder in ${city}, Northern Virginia. Trex Platinum Partner and TimberTech Certified Installer.`,
    "telephone": "+1-571-655-7207",
    "email": "office@ldndecks.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13704 Winding Oak Cir",
      "addressLocality": "Centreville",
      "addressRegion": "VA",
      "postalCode": "20121",
      "addressCountry": "US"
    },
    "geo": { 
      "@type": "GeoCoordinates", 
      "latitude": 38.8404, 
      "longitude": -77.4289 
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "17:00" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "41",
      "bestRating": "5"
    },
    "areaServed": [
      { "@type": "City", "name": `${city}, VA` }
    ],
    "sameAs": [
      "https://x.com/ldndecks",
      "https://www.instagram.com/loudoundecks/",
      "https://www.facebook.com/profile.php?id=61573750423712",
      "https://www.google.com/maps/place/Loudoun+Decks/",
      "https://www.houzz.com/pro/webuser-782541997/loudoun-decks",
      "https://www.yelp.com/biz/loudoun-decks-centreville"
    ]
  };

  return <JsonLd data={schema} />;
}
