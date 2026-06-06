import React from 'react';
import JsonLd from './JsonLd';
import { ORG_ID, WEBSITE_ID } from '@/lib/business';

export default function WebPageSchema({
  url,
  name,
  description,
  speakable = false,
  datePublished = undefined,
  dateModified = undefined,
}) {
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

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  if (speakable) {
    schema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    };
  }

  return <JsonLd data={schema} />;
}
