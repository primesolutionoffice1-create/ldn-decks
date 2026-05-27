import React from 'react';
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildVideoObjectSchema,
} from '@/lib/business';
import JsonLd from './JsonLd';

export default function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildVideoObjectSchema(),
    ],
  };

  return <JsonLd data={graph} />;
}
