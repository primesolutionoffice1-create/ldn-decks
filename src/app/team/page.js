import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Our Team | Professional Deck Builders & Porch Specialists',
  description: 'Meet the expert deck builders and porch specialists at LDN Decks. Licensed, insured, and Trex Platinum certified with 10+ years of local experience.',
});

export default function TeamPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/team" name="Our Team | Professional Deck Builders &amp; Porch Specialists" description="Meet the expert deck builders and porch specialists at LDN Decks. Licensed, insured, and Trex Platinum certified with 10+ years of local experience." speakable />
      <TeamHeader />
      <TeamGrid />
      <ContactHome />
    </main>
  );
}
