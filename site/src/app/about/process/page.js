import React from 'react';
import ProcessHeader from '@/components/ProcessHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ProcessMatters from '@/components/ProcessMatters';
import ProcessFAQ from '@/components/ProcessFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/about/process",
  title: "Our Deck Building Process | 6 Steps to Your Dream Deck",
  description: "From free consultation to final walkthrough — our 6-step deck building process in Northern Virginia. Design, permits, HOA, construction, and warranty.",
});

export default function ProcessPage() {
  return (
    <main>
      <ProcessHeader />
      <ProcessSteps />
      <ServicesFooterInfo />
      <ServicesCallToAction />
      <ProcessMatters />
      <ProcessFAQ />
      <SimpleCTA title="Start your project" buttonText="Contact Us" link="/contact" />
    </main>
  );
}
