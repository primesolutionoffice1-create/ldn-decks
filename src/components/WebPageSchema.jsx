import React from 'react';
import JsonLd from './JsonLd';
import { ORG_ID, WEBSITE_ID } from '@/lib/business';

export default function WebPageSchema({ url, name, description, speakable = false }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };

  if (speakable) {
    schema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    };
  }

  return <JsonLd data={schema} />;
}
