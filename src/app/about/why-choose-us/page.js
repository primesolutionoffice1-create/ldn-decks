import React from 'react';
import WhyChooseHeader from '@/components/WhyChooseHeader';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import WhyChooseServices from '@/components/WhyChooseServices';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import WhyChooseFAQ from '@/components/WhyChooseFAQ';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: "/about/why-choose-us",
  title: "Why Choose LDN Decks | Northern Virginia's Premier Deck Builder",
  description: "Why Northern Virginia homeowners choose LDN Decks: verified public profiles, local planning support, written warranty terms, and clear project scopes.",
  image: "/social/why-choose-loudoun-decks-social.png",
});

export default function WhyChooseUsPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/about/why-choose-us" name="Why Choose LDN Decks | Northern Virginia" description="Why Northern Virginia homeowners choose LDN Decks: verified public profiles, local planning support, written warranty terms, and clear project scopes." speakable />
      <WhyChooseHeader />
      <ServicesCallToAction />
      <ServicesFooterInfo />
      <WhyChooseServices />
      <ProjectProcess />
      <WhyChooseDetails />
      <WhyChooseFAQ />
    </main>
  );
}
