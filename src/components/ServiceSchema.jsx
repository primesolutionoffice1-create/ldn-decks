import React from 'react';
import JsonLd from './JsonLd';
import { BUSINESS, ORG_ID } from '@/lib/business';

const DEFAULT_AREA_SERVED = BUSINESS.areaServed.map(name => ({
  '@type': 'AdministrativeArea',
  name,
}));

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  category,
  price,
  lowPrice,
  highPrice,
  areaServed,
  relatedServices,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url ? `${url}#service` : undefined,
    name,
    serviceType: serviceType || name,
    description,
    url: url || undefined,
    category: category || undefined,
    provider: { '@id': ORG_ID },
    areaServed: areaServed || DEFAULT_AREA_SERVED,
  };

  if (lowPrice && highPrice) {
    schema.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice,
      highPrice,
    };
  } else if (price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price,
        unitText: 'per project',
      },
    };
  }

  if (relatedServices?.length) {
    schema.isRelatedTo = relatedServices.map(svcUrl => ({
      '@type': 'Service',
      '@id': `${svcUrl}#service`,
    }));
  }

  return <JsonLd data={schema} />;
}
