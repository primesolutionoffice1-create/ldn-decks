import React from 'react';
import EducationHeader from '@/components/EducationHeader';
import EducationList from '@/components/EducationList';
import RelatedGuides from '@/components/RelatedGuides';
import {
  EducationClusterNav,
  EducationLeadCTA,
  EducationLocalTrustRoutes,
  EducationSourceNote,
  EducationTrustBar,
} from '@/components/EducationHubComponents';
import { educationArticles } from '@/lib/educationData';
import { buildMetadata } from '@/lib/seo';
import hubStyles from '@/components/EducationHub.module.css';

export const metadata = buildMetadata({
  path: '/education',
  title: 'Northern Virginia Deck Education Center | Loudoun Decks',
  description: 'Expert guides for deck safety, permits, materials, costs, HOA approvals and outdoor living decisions in Northern Virginia.',
});

function buildEducationHubSchema() {
  const itemListElement = educationArticles.map((article, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://ldndecks.com/education/${article.slug}`,
    name: article.title,
    description: article.excerpt,
  }));

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://ldndecks.com/education#collection',
      url: 'https://ldndecks.com/education',
      name: 'Northern Virginia Deck Education Center',
      description: 'Expert guides for deck safety, permits, materials, costs, HOA approvals and outdoor living decisions in Northern Virginia.',
      isPartOf: { '@id': 'https://ldndecks.com/#website' },
      about: [
        'Deck construction',
        'Deck safety',
        'Deck permits',
        'HOA approval',
        'Composite decking',
        'Trex decking',
        'TimberTech decking',
        'AZEK decking',
        'Northern Virginia deck building',
      ],
      mainEntity: {
        '@type': 'ItemList',
        '@id': 'https://ldndecks.com/education#guides',
        itemListElement,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ldndecks.com/' },
        { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://ldndecks.com/education' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should I learn before building a deck in Northern Virginia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with project scope, budget, material choice, county permit requirements, HOA rules, structural design, stairs, railings and long-term maintenance expectations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I start with materials or permits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a new deck, start with scope and material preference, then confirm permit and HOA requirements. For an older or damaged deck, start with structure and safety before choosing finish materials.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can education pages help me get a better estimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The more clearly you understand size, material, stairs, railings, drainage, lighting, HOA status and timeline, the easier it is to create an accurate estimate.',
          },
        },
      ],
    },
  ];
}

function serializeJsonLd(schema) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export default function EducationPage() {
  const educationHubSchema = buildEducationHubSchema();

  return (
    <main className={hubStyles.educationPage}>
      {educationHubSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <EducationHeader />
      <EducationTrustBar />
      <EducationClusterNav />
      <EducationLocalTrustRoutes />
      <EducationLeadCTA />
      <EducationList />
      <EducationSourceNote />
      <RelatedGuides currentPath="/education" category="deck-core" />
    </main>
  );
}
