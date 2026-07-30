import React from 'react';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ContactFAQ from '@/components/ContactFAQ';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/contact",
  title: 'Contact Loudoun Decks | Free Deck Estimate Northern VA',
  description: 'Get a free deck estimate. Call (571) 655-7207 or submit a request. Composite deck builders serving Loudoun, Fairfax & Prince William counties.',
  image: "/social/contact-loudoun-decks-social.png",
});

export default function ContactPage() {
    return (
          <main>
            <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/contact" name="Contact Loudoun Decks | Free Deck Estimate Northern VA" description="Get a free deck estimate. Call (571) 655-7207 or submit a request. Composite deck builders serving Loudoun, Fairfax &amp; Prince William counties." speakable />
            <ContactHeader />
            <ContactForm />
            <ContactMap />
            <ServicesFooterInfo />
            <ContactFAQ />
      </main>
    );
}
