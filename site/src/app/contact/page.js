import React from 'react';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ContactFAQ from '@/components/ContactFAQ';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/contact",
  title: 'Contact Loudoun Decks | Free Deck Estimate Northern VA',
  description: 'Get a free deck estimate. Call (571) 655-7207 or submit a request. Trex Pro builders serving Loudoun, Fairfax & Prince William counties.',
});

export default function ContactPage() {
    return (
          <main>
            <ContactHeader />
            <ContactForm />
            <ContactMap />
            <ServicesFooterInfo />
            <ContactFAQ />
      </main>
    );
}
