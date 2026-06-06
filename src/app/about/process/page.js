import React from 'react';
import ProcessHeader from '@/components/ProcessHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ProcessMatters from '@/components/ProcessMatters';
import ProcessFAQ from '@/components/ProcessFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: "/about/process",
  title: "Our Deck Building Process | 6 Steps to Your Dream Deck",
  description: "From free consultation to final walkthrough — our 6-step deck building process in Northern Virginia. Design, permits, HOA, construction, and warranty.",
  image: "/social/deck-building-process-social.png",
});

export default function ProcessPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/about/process" name="Our Deck Building Process | 6 Steps to Your Dream Deck" description="From free consultation to final walkthrough — our 6-step deck building process in Northern Virginia. Design, permits, HOA, construction, and warranty." speakable />
      <ProcessHeader />
      <ProcessSteps />
      <ServicesFooterInfo />
      <ServicesCallToAction />
      <ProcessMatters />
      <ProcessFAQ />
      <SimpleCTA title="Start your project" buttonText="Request a Written Estimate" link="/get-estimate" />
    </main>
  );
}
