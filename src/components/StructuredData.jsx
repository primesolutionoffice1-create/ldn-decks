import React from 'react';
import { buildOrganizationSchema, buildWebSiteSchema } from '@/lib/business';

export default function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
