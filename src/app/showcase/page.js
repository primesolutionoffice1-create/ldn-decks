import React from 'react';
import ShowcaseHeader from '@/components/ShowcaseHeader';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import ShowcaseStats from '@/components/ShowcaseStats';
import Testimonials from '@/components/Testimonials';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/showcase',
  title: 'Custom Deck Project Gallery | Trex Deck Designer & Showcase',
  description: 'Explore our portfolio of custom deck, porch, and patio projects across Northern Virginia. See why we are the leading Trex deck designer in the region.',
});

export default function ShowcasePage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/showcase" name="Custom Deck Project Gallery | Trex Deck Designer &amp; Showcase" description="Explore our portfolio of custom deck, porch, and patio projects across Northern Virginia. See why we are the leading Trex deck designer in the region." speakable />
      <ShowcaseHeader />
      <ShowcaseGrid />
      <ShowcaseStats />
      <Testimonials />
      <RelatedGuides currentPath="/showcase" />
      <ContactHome />
    </main>
  );
}
