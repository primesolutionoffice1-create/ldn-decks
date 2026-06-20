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
import WebPageSchema from '@/components/WebPageSchema';
import hubStyles from '@/components/EducationHub.module.css';

export const metadata = buildMetadata({
  path: '/education',
  title: 'Northern Virginia Deck Education Center | Loudoun Decks',
  description: 'Expert guides for deck safety, permits, materials, costs, HOA approvals and outdoor living decisions in Northern Virginia.',
  image: '/social/education-hub-social.png',
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
        'Deck stair construction',
        'Virginia deck stair code',
        'Ledger board flashing',
        'Deck repair triage',
        'Deck resurfacing vs replacement',
        'Deck permits',
        'Loudoun County deck permits',
        'Fairfax County deck permits',
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
      hasPart: [
        {
          '@type': 'ItemList',
          '@id': 'https://ldndecks.com/education#structural-safety-learning-path',
          name: 'Structural deck safety learning path',
          description: 'Inspection-ready sequence for Virginia stair code, stair construction parts, ledger flashing and county deck permit planning.',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              url: 'https://ldndecks.com/education/deck-stair-construction-diagram',
              name: 'Deck Stair Construction Diagram',
            },
            {
              '@type': 'ListItem',
              position: 2,
              url: 'https://ldndecks.com/education/deck-stair-code-rise-run-virginia',
              name: 'Virginia Deck Stair Code Guide',
            },
            {
              '@type': 'ListItem',
              position: 3,
              url: 'https://ldndecks.com/tools/deck-stair-calculator',
              name: 'Virginia Deck Stair Calculator',
            },
            {
              '@type': 'ListItem',
              position: 4,
              url: 'https://ldndecks.com/education/common-deck-stair-inspection-failures-virginia',
              name: 'Common Deck Stair Inspection Failures',
            },
            {
              '@type': 'ListItem',
              position: 5,
              url: 'https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia',
              name: 'Ledger Board Flashing and Deck Attachment',
            },
            {
              '@type': 'ListItem',
              position: 6,
              url: 'https://ldndecks.com/deck-permit-loudoun-county-virginia',
              name: 'Loudoun County Deck Permit Guide',
            },
            {
              '@type': 'ListItem',
              position: 7,
              url: 'https://ldndecks.com/deck-permit-fairfax-county-virginia',
              name: 'Fairfax County Deck Permit Guide',
            },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://ldndecks.com/education#structural-repair-learning-path',
          name: 'Structural deck repair triage learning path',
          description: 'Repair, resurfacing, replacement, permit and written-scope sequence for homeowners who find stair, ledger, railing or framing risk.',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              url: 'https://ldndecks.com/deck-repair-loudoun-county',
              name: 'Deck Repair Loudoun County',
            },
            {
              '@type': 'ListItem',
              position: 2,
              url: 'https://ldndecks.com/deck-resurfacing-vs-replacement',
              name: 'Deck Resurfacing vs Replacement',
            },
            {
              '@type': 'ListItem',
              position: 3,
              url: 'https://ldndecks.com/services/deck-repair',
              name: 'Structural Deck Repair',
            },
            {
              '@type': 'ListItem',
              position: 4,
              url: 'https://ldndecks.com/deck-permit-loudoun-county-virginia',
              name: 'Loudoun County Deck Permit Guide',
            },
            {
              '@type': 'ListItem',
              position: 5,
              url: 'https://ldndecks.com/get-estimate',
              name: 'Get a Written Deck Repair Estimate',
            },
          ],
        },
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
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/education" name="Northern Virginia Deck Education Center | Loudoun Decks" description="Expert guides for deck safety, permits, materials, costs, HOA approvals and outdoor living decisions in Northern Virginia." speakable />
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
