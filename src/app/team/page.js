import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import { BUSINESS, FOUNDER_ID } from '@/lib/business';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Our Team | Professional Deck Builders & Porch Specialists',
  description: `Meet the deck builders at LDN Decks. Virginia Class A licensed. ${PARTNER_SENTENCE}`,
  image: '/social/team-social.png',
});

// ProfilePage is the canonical Schema.org type for pages that describe
// people/teams. Pairs with the existing Person @id emitted by TeamGrid
// (https://ldndecks.com/#founder). Without ProfilePage, Google treats this
// as a generic WebPage which weakens E-E-A-T attribution.
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://ldndecks.com/team#profilepage',
  url: 'https://ldndecks.com/team',
  name: 'Our Team | Loudoun Decks',
  description: `Owner-led custom deck building team for Northern Virginia: Nick (${BUSINESS.founder.jobTitle}, Virginia Class A Licensed Contractor, Trex product-line planning, TimberTech and AZEK product planning), Jeff Mineo (Head of Sales), and the master technician crew.`,
  inLanguage: 'en-US',
  mainEntity: { '@id': FOUNDER_ID },
  about: { '@id': 'https://ldndecks.com/#organization' },
  isPartOf: { '@id': 'https://ldndecks.com/#website' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://ldndecks.com/team/Nick.jpg',
  },
  significantLink: [
    'https://ldndecks.com/about/certifications-and-licenses',
    'https://ldndecks.com/reviews',
    'https://ldndecks.com/contact',
  ],
};

export default function TeamPage() {
  return (
    <main>
      <JsonLd data={profilePageSchema} />
      <WebPageSchema dateModified="2026-11-01" url="https://ldndecks.com/team" name="Our Team | Professional Deck Builders &amp; Porch Specialists" description={`Meet the deck builders at LDN Decks. Virginia Class A licensed. ${PARTNER_SENTENCE}`} speakable />
      <TeamHeader />
      <p style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0', lineHeight: 1.7 }}>
        {PARTNER_SENTENCE} Last reviewed <time dateTime="2026-11-01">November 1, 2026</time>.
      </p>
      <TeamGrid />
      <ContactHome />
    </main>
  );
}
