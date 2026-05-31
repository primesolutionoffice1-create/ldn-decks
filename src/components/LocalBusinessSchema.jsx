import React from 'react';
import JsonLd from './JsonLd';
import { ORG_ID } from '@/lib/business';

// City / county page schema.
// Emits a Service node that REFERENCES the single canonical organization
// (@id #organization, defined once globally in StructuredData) via `provider`.
// It must NOT redefine the business: minting a per-city business node
// fragments review and entity-trust signals into duplicate entities.
export default function LocalBusinessSchema({ city, description, url, areaType = 'City' }) {
  const areaName = city.includes(',') ? city : `${city}, VA`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...(url ? { '@id': `${url}#service` } : {}),
    serviceType: 'Deck building',
    name: `Deck Builder in ${city}`,
    description:
      description ||
      `Trusted custom deck builder serving ${city}, Northern Virginia. Trex Platinum Partner and TimberTech Certified Installer.`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': areaType, name: areaName },
    ...(url ? { url } : {}),
  };

  return <JsonLd data={schema} />;
}
