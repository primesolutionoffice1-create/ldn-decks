import React from 'react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/terms-of-service',
  title: 'Terms of Service | LDN Decks',
  description: 'Terms and conditions for using Loudoun Decks services.',
});

export default function TermsOfService() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px', lineHeight: '1.6', color: '#333' }}>
      <h1>Terms of Service</h1>
      <p>Last Updated: April 2026</p>
      
      <section style={{ marginTop: '40px' }}>
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the services provided by Loudoun Decks, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>2. Services Provided</h2>
        <p>
          Loudoun Decks provides custom deck construction, fencing, and outdoor living project services. All projects are subject to individual contracts and local building codes.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>3. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, and images, is the property of Loudoun Decks and is protected by copyright laws.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The materials on Loudoun Decks&apos; website are provided on an &apos;as is&apos; basis. Loudoun Decks makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>5. Limitation of Liability</h2>
        <p>
          Loudoun Decks shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use of our services or website.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>6. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Commonwealth of Virginia.
        </p>
      </section>
    </div>
  );
}
