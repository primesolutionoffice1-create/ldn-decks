import React from 'react';
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '@/lib/business';
import JsonLd from './JsonLd';

export default function StructuredData() {
  const organization = {
    ...buildOrganizationSchema(),
    // Public brand stays on `name` (Loudoun Decks). legalName is the contracting entity.
    legalName: 'Prime Solution LLC',
  };
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      buildWebSiteSchema(),
    ],
  };

  return <JsonLd data={graph} />;
}
