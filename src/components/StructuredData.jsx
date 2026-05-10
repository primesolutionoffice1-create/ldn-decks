import React from 'react';
import { buildOrganizationSchema } from '@/lib/business';

export default function StructuredData() {
  const orgSchema = buildOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
