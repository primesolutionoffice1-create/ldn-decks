import React from 'react';
import TeamHeader from '@/components/TeamHeader';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Our Team | Professional Deck Builders & Porch Specialists',
  description: 'Meet the expert deck builders and porch specialists at LDN Decks. Licensed, insured, and Trex Platinum certified with 10+ years of local experience.',
});

export default function TeamPage() {
  return (
    <main>
      <TeamHeader />
      <TeamGrid />
      <ContactHome />
    </main>
  );
}
