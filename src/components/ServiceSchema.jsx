import React from 'react';

/**
 * ServiceSchema — Adds Service structured data to service pages.
 * Helps Google show rich results for service searches and enables AI systems
 * to understand what specific services you offer with pricing.
 */
export default function ServiceSchema({ name, description, price, areaServed }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@id': 'https://ldndecks.com/#organization',
    },
    areaServed: areaServed || [
      { '@type': 'AdministrativeArea', name: 'Loudoun County, VA' },
      { '@type': 'AdministrativeArea', name: 'Fairfax County, VA' },
      { '@type': 'AdministrativeArea', name: 'Prince William County, VA' },
      { '@type': 'AdministrativeArea', name: 'Arlington County, VA' },
      { '@type': 'AdministrativeArea', name: 'Stafford County, VA' },
    ],
    ...(price ? {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'USD',
          price,
          unitText: 'per project',
        },
      },
    } : {}),
  };

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  });
}
