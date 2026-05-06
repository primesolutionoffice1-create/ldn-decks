import React from 'react';
import AboutHeader from '@/components/AboutHeader';
import QualityLeader from '@/components/QualityLeader';
import StatsRow from '@/components/StatsRow';
import AboutDetails from '@/components/AboutDetails';
import TeamGrid from '@/components/TeamGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/about',
  title: 'About Loudoun Decks | 5-Star Deck Builder & Contractor Northern VA',
  description: "Learn why LDN Decks is Northern Virginia's most trusted deck builder and patio contractor. Trex Platinum Partner serving Loudoun, Fairfax, and Prince William County.",
});

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />
      <QualityLeader />
      <StatsRow />
      <AboutDetails />
      <TeamGrid />
    </main>
  );
}
