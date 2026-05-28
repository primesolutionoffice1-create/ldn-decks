import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Our Team | Professional Deck Builders & Porch Specialists',
  description: 'Meet the expert deck builders and porch specialists at LDN Decks. Licensed, insured, and Trex Platinum certified with 10+ years of local experience.',
});

// ProfilePage is the canonical Schema.org type for pages that describe
// people/teams. Pairs with the existing Person @id emitted by TeamGrid
// (https://ldndecks.com/#nick). Without ProfilePage, Google treats this
// as a generic WebPage which weakens E-E-A-T attribution.
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://ldndecks.com/team#profilepage',
  url: 'https://ldndecks.com/team',
  name: 'Our Team | Loudoun Decks',
  description: 'Owner-led custom deck building team for Northern Virginia: Nick (Owner & Lead Designer, Virginia Class A Licensed Contractor, Trex Platinum Partner, TimberTech Certified Installer), Jeff Mineo (Head of Sales), and the master technician crew.',
  inLanguage: 'en-US',
  mainEntity: { '@id': 'https://ldndecks.com/#nick' },
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
      <WebPageSchema url="https://ldndecks.com/team" name="Our Team | Professional Deck Builders &amp; Porch Specialists" description="Meet the expert deck builders and porch specialists at LDN Decks. Licensed, insured, and Trex Platinum certified with 10+ years of local experience." speakable />
      <TeamHeader />
      <TeamGrid />
      <ContactHome />
    </main>
  );
}
