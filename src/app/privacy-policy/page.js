import React from 'react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/privacy-policy',
  title: 'Privacy Policy | LDN Decks',
  description: 'Learn how Loudoun Decks protects your personal information and privacy.',
  image: '/social/privacy-policy-social.png',
});

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px', lineHeight: '1.6', color: '#333' }}>
      <h1>Privacy Policy</h1>
      <p>Last Updated: November 2026</p>
      <p>
        This website is operated by Prime Solution LLC, doing business as Loudoun Decks.
        Virginia Class A contractor license #2705191673 held by Prime Solution LLC.
        Office: 13704 Winding Oak Cir, Centreville, VA 20121. Phone (571) 655-7207.
      </p>
      
      <section style={{ marginTop: '40px' }}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide to us directly, such as when you request a free quote, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and details about your project.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>2. Cookies and Web Beacons</h2>
        <p>
          Loudoun Decks uses essential browser storage to remember your privacy choice. If you accept optional tracking, we may also store advertising click identifiers and campaign parameters, such as gclid and UTM values, in first-party cookies for up to 90 days. We use those values to understand which marketing source produced an estimate request and to support offline conversion reporting.
        </p>
        <p>
          Optional analytics and advertising storage is denied by default. You can accept or decline it in the privacy banner. Your choice is stored in your browser and can be reset by clearing site data for ldndecks.com.
        </p>
      </section>

      <p>
        If you accept optional advertising tracking, we use the Reddit Pixel to measure page visits
        and confirmed estimate requests. Reddit may receive browser and device information and
        advertising identifiers. We do not send your form answers, email address, or phone number
        through this integration, and automatic email and phone matching is disabled.
      </p>
      <section style={{ marginTop: '30px' }}>
        <h3>OpenAI advertising measurement</h3>
        <p>
          Where OpenAI advertising measurement is enabled, we load the OpenAI Pixel only after
          you accept optional tracking. It uses advertising click references and browser identifiers
          to help connect confirmed estimate requests to ads in ChatGPT. Its first-party cookies
          include __oppref (30 days after it is written) and __obref (365 days after creation).
          Browser restrictions or clearing cookies may shorten those periods.
        </p>
        <p>
          OpenAI&apos;s automatic advanced matching may detect supported contact information
          entered in recognizable forms or available elsewhere on the site. It normalizes and
          hashes supported identifiers, such as email addresses and phone numbers, in your
          browser before including them with conversion events. Hashing is not anonymization.
          We ask for your privacy choice before loading this measurement tool, including its
          automatic matching features.
        </p>
        <p>
          Our conversion event identifies a confirmed request, not its project description or
          estimated value. The Pixel may also send browser/device information and the site origin.
          We request exclusion of these events from future user-level personalization using
          OpenAI&apos;s event opt-out setting. Declining optional tracking prevents our OpenAI
          integration from loading. You can reset your choice by clearing this site&apos;s browser
          data and choosing again in the privacy banner. Learn more in the{' '}
          <a href="https://help.openai.com/en/articles/20001409-conversion-measurement" target="_blank" rel="noopener noreferrer">OpenAI conversion measurement explanation</a>.
        </p>
      </section>
      <section style={{ marginTop: '30px' }}>
        <h2>3. Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>4. Our Advertising Partners</h2>
        <p>
          Some of advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below:
        </p>
        <ul>
          <li>Google: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
          <li>Reddit: <a href="https://www.reddit.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Reddit Privacy Policy</a></li>
          <li>Pinterest: <a href="https://policy.pinterest.com/en/privacy-policy" target="_blank" rel="noopener noreferrer">https://policy.pinterest.com/en/privacy-policy</a></li>
          <li>OpenAI: <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy</a></li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>5. Third Party Privacy Policies</h2>
        <p>
          Loudoun Decks&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. If you make a request, we have one month to respond to you.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>7. GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, the right to rectification, the right to erasure, the right to restrict processing, and the right to data portability.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at office@ldndecks.com.
        </p>
      </section>
    </div>
  );
}
