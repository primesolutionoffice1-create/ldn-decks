import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import SimpleCTA from '@/components/SimpleCTA';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/referral-partners',
  title: 'Referral Partners | LDN Decks Northern Virginia',
  description: 'Refer deck, porch, patio, and outdoor living projects to LDN Decks. Serving Loudoun, Fairfax, Prince William, Arlington, and Stafford.',
  image: '/social/referral-partners-social.png',
});

const partnerTypes = [
  'Realtors and listing agents',
  'Home inspectors',
  'Mortgage and insurance professionals',
  'Architects and designers',
  'Landscapers and hardscape contractors',
  'Remodelers, roofers, siding, and window contractors',
  'Property managers and HOA contacts',
  'BNI and chamber referral partners',
];

const referralFits = [
  'A homeowner replacing an aging wood deck with composite decking',
  'A buyer or seller who needs a deck inspection, repair plan, or upgrade estimate',
  'A family planning a screened porch, pergola, patio, or outdoor living space',
  'A client who needs help with permits, HOA requirements, materials, and design choices',
  'A Northern Virginia homeowner comparing licensed contractors before a major project',
];

const serviceAreas = [
  { name: 'Loudoun County', href: '/near-you/loudoun-county' },
  { name: 'Fairfax County', href: '/near-you/fairfax-county' },
  { name: 'Prince William County', href: '/near-you/prince-william-county' },
  { name: 'Arlington County', href: '/deck-builder-arlington-va' },
  { name: 'Stafford County', href: '/deck-builder-stafford-va' },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Referral Partners for Northern Virginia Deck Projects',
  description: 'Referral partner page for professionals who want to introduce homeowners to LDN Decks for deck, porch, patio, and outdoor living projects.',
  url: 'https://ldndecks.com/referral-partners',
  isPartOf: { '@type': 'WebSite', '@id': 'https://ldndecks.com/#website' },
  about: { '@id': 'https://ldndecks.com/#organization' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a good referral for LDN Decks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good referral is a homeowner in Northern Virginia who needs a deck replacement, new deck, screened porch, patio, pergola, railing, or outdoor living project and wants a licensed, insured contractor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas does LDN Decks serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LDN Decks serves Loudoun County, Fairfax County, Prince William County, Arlington County, Stafford County, and nearby Northern Virginia communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should referral partners introduce a homeowner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best introduction includes the homeowner name, phone number, project location, project type, timeline, and whether they are comparing estimates or ready to schedule a consultation.',
      },
    },
  ],
};

const S = {
  section: { padding: '4rem 0' },
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' },
  eyebrow: { color: 'var(--color-primary)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.82rem', marginBottom: '0.75rem' },
  h2: { fontSize: 'clamp(1.8rem, 3vw, 2.45rem)', lineHeight: 1.15, marginBottom: '1rem', color: 'var(--color-dark)' },
  p: { lineHeight: 1.7, color: '#4b5563', fontSize: '1.02rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' },
  card: { background: '#fff', border: '1px solid #e8e2da', borderRadius: 8, padding: '1.35rem', boxShadow: '0 10px 24px rgba(28, 23, 19, 0.06)' },
};

export default function ReferralPartnersPage() {
  return (
    <main id="main">
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />

      <section style={{ background: 'linear-gradient(135deg, #1f2933 0%, #3a3028 100%)', color: '#fff', padding: '5rem 0 4.5rem' }}>
        <div style={S.container}>
          <div style={{ maxWidth: 790 }}>
            <p style={{ ...S.eyebrow, color: '#f2b37b' }}>Referral partners</p>
            <h1 style={{ fontSize: 'clamp(2.35rem, 5vw, 4.25rem)', lineHeight: 1.05, marginBottom: '1.15rem', letterSpacing: 0 }}>
              Send Your Clients to a Deck Builder Who Protects the Relationship
            </h1>
            <p style={{ color: '#f4eee7', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: 720, marginBottom: '1.6rem' }}>
              LDN Decks helps Northern Virginia homeowners plan, permit, and build custom decks, screened porches, patios, pergolas, and outdoor living spaces. If you work with homeowners, we make referrals simple: fast response, clear estimates, and professional updates.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/get-estimate" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 48, background: 'var(--color-primary)', color: '#fff', padding: '0.9rem 1.35rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
                Send a Referral
              </Link>
              <CallLink style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 48, color: '#fff', padding: '0.85rem 1.25rem', border: '2px solid rgba(255,255,255,0.45)', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
                Call (571) 655-7207
              </CallLink>
            </div>
            <p style={{ marginTop: '1rem', color: '#d9d2ca', fontSize: '0.95rem' }}>
              Serving Loudoun, Fairfax, Prince William, Arlington, Stafford, and surrounding Northern Virginia communities.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff8ef', borderBottom: '1px solid #eadfce', padding: '1.35rem 0' }}>
        <div style={S.container}>
          <p style={{ margin: 0, lineHeight: 1.6, color: '#372f28' }}>
            <strong>Best referral:</strong> a homeowner considering a composite deck replacement, new deck, screened porch, patio, or outdoor living upgrade in Northern Virginia.
          </p>
        </div>
      </section>

      <section style={S.section}>
        <div style={S.container}>
          <div style={{ maxWidth: 760, marginBottom: '2rem' }}>
            <p style={S.eyebrow}>Who we partner with</p>
            <h2 style={S.h2}>A Referral Network Built Around Homeowner Trust</h2>
            <p style={S.p}>
              The strongest referral partners are already having conversations about homes, renovations, inspections, financing, insurance, outdoor spaces, and property value. We help those clients move from uncertainty to a clear project plan.
            </p>
          </div>

          <div style={S.grid}>
            {partnerTypes.map((type) => (
              <div key={type} style={S.card}>
                <p style={{ margin: 0, fontWeight: 800, color: '#2c241f' }}>{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f7f4ef' }}>
        <div style={S.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <p style={S.eyebrow}>What to send us</p>
              <h2 style={S.h2}>Ideal Referral Types</h2>
              <p style={S.p}>
                These are the introductions where we can respond quickly, protect your reputation, and give the homeowner useful guidance even if they are still comparing options.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.85rem' }}>
              {referralFits.map((fit) => (
                <div key={fit} style={{ ...S.card, display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flex: '0 0 auto' }}>&#10003;</span>
                  <p style={{ margin: 0, lineHeight: 1.55, color: '#3d342d' }}>{fit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={S.section}>
        <div style={S.container}>
          <div style={{ maxWidth: 760, marginBottom: '2rem' }}>
            <p style={S.eyebrow}>Process</p>
            <h2 style={S.h2}>How Referrals Work</h2>
          </div>

          <div style={S.grid}>
            {[
              ['1', 'Make the introduction', 'Send the homeowner to our contact page or introduce us by email/text with their project type, location, and timeline.'],
              ['2', 'We contact them quickly', 'Our team reviews the project, confirms fit, answers early questions, and schedules the free estimate conversation.'],
              ['3', 'They get a clear plan', 'We provide scope guidance, material options, permit/HOA direction, and next steps so the homeowner knows what to expect.'],
              ['4', 'You stay trusted', 'We handle the client professionally and protect the relationship that earned the referral in the first place.'],
            ].map(([step, title, text]) => (
              <div key={step} style={S.card}>
                <div style={{ width: 38, height: 38, borderRadius: 8, background: '#2c241f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '1rem' }}>
                  {step}
                </div>
                <h3 style={{ marginBottom: '0.55rem', color: '#2c241f' }}>{title}</h3>
                <p style={{ ...S.p, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#2c241f', color: '#fff' }}>
        <div style={S.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
            <div>
              <p style={{ ...S.eyebrow, color: '#f2b37b' }}>Service areas</p>
              <h2 style={{ ...S.h2, color: '#fff' }}>Northern Virginia Coverage for Local Referral Partners</h2>
              <p style={{ ...S.p, color: '#eadfd5' }}>
                We are best matched for residential projects in the counties below. For nearby cities, send the project details and we will confirm fit before the homeowner invests time.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {serviceAreas.map((area) => (
                <Link key={area.name} href={area.href} style={{ display: 'block', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '0.9rem 1rem', textDecoration: 'none', fontWeight: 800 }}>
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={S.section}>
        <div style={S.container}>
          <div style={{ maxWidth: 760, marginBottom: '2rem' }}>
            <p style={S.eyebrow}>Quick script</p>
            <h2 style={S.h2}>Simple Way to Introduce Us</h2>
            <p style={S.p}>
              &ldquo;I know a licensed Northern Virginia deck builder who handles composite decks, screened porches, patios, and outdoor living projects. They can look at your project, explain options, and give you a free estimate. I can introduce you to LDN Decks if you want.&rdquo;
            </p>
          </div>
          <div style={{ ...S.card, background: '#fff8ef' }}>
            <h3 style={{ color: '#2c241f', marginBottom: '0.75rem' }}>Helpful details to include</h3>
            <p style={{ ...S.p, margin: 0 }}>
              Homeowner name, phone number, project address or city, project type, timeline, budget range if known, and whether the project involves HOA or permit questions.
            </p>
          </div>
        </div>
      </section>

      <SimpleCTA title="Have a homeowner to refer?" buttonText="Send a Referral or Request a Free Estimate" link="/get-estimate" />
      <ContactForm />
    </main>
  );
}
