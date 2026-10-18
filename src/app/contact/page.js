import React from 'react';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ContactFAQ from '@/components/ContactFAQ';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS_PHONE_DISPLAY, formatServiceArea } from '@/lib/business';

const contactDescription = `Get a free deck estimate. Call ${BUSINESS_PHONE_DISPLAY}. Serving ${formatServiceArea().replaceAll(' County', '')}.`;

export const metadata = buildMetadata({
  path: "/contact",
  title: 'Contact Loudoun Decks | Free Deck Estimate Northern VA',
  description: contactDescription,
  image: "/social/contact-loudoun-decks-social.png",
});

export default function ContactPage() {
    return (
          <main>
            <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/contact" name="Contact Loudoun Decks | Free Deck Estimate Northern VA" description={contactDescription} speakable />
            <ContactHeader />
            <ContactForm />
            <ContactMap />
            <ServicesFooterInfo />
            <ContactFAQ />
      </main>
    );
}
