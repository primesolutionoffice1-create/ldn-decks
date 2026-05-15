import React from 'react';
import { buildOrganizationSchema, buildWebSiteSchema } from '@/lib/business';
import JsonLd from './JsonLd';

export default function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
    ],
  };

  return <JsonLd data={graph} />;
}
