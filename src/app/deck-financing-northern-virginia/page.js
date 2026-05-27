import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-financing-northern-virginia',
  title: 'Deck Financing Options in Northern Virginia | Build Now, Pay Over Time',
  description: 'Finance your deck project with affordable monthly payments. $0 down options, 12-60 month terms, quick approval. Build your dream deck now pay over time.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I finance a deck in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer financing through trusted lending partners with terms from 12 to 60 months. Many homeowners finance $20,000-$50,000 deck projects with monthly payments of $350-$900 depending on term length and rate." } },
    { "@type": "Question", name: "What are typical monthly payments for a deck?", acceptedAnswer: { "@type": "Answer", text: "For a $30,000 composite deck: approximately $525/month over 60 months, or $680/month over 48 months at typical rates. Exact payments depend on credit score and term selected." } },
    { "@type": "Question", name: "Do you offer $0 down financing?", acceptedAnswer: { "@type": "Answer", text: "Yes qualified applicants can finance 100% of the project with $0 down. Approval is typically within minutes and does not affect your credit score for the initial check." } },
    { "@type": "Question", name: "Is financing a deck a good idea?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially for composite decks that add 60-80% of their cost to home value. You enjoy the deck immediately while paying over time, and the home equity increase often exceeds the financing cost." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckFinancingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-financing-northern-virginia" name="Deck Financing Options in Northern Virginia | Build Now, Pay Over Time" description="Finance your deck project with affordable monthly payments. $0 down options, 12-60 month terms, quick approval. Build your dream deck now pay over time." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Financing Options</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Build your dream deck now affordable monthly payments, quick approval</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img01.jpeg"
              alt="Modern outdoor deck build made affordable with financing options"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>How Deck Financing Works</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Get your free estimate</strong> we design your deck and provide a detailed, itemized quote.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Apply in minutes</strong> quick online application through our lending partners. Soft credit check (no impact on your score) for pre-qualification.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Choose your terms</strong> select from 12, 24, 36, 48, or 60-month payment plans. Fixed rates, no hidden fees.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>We build your deck</strong> construction starts per the agreed schedule. You make your first payment after the project begins.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Enjoy now, pay over time</strong> your deck adds value to your home from day one while you spread the cost comfortably.</li>
          </ol>

          <h2 style={S.h2}>Typical Monthly Payments</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Project Cost', '36 Months', '48 Months', '60 Months'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['$15,000', '~$460/mo', '~$360/mo', '~$300/mo'],
                  ['$25,000', '~$770/mo', '~$600/mo', '~$500/mo'],
                  ['$35,000', '~$1,075/mo', '~$840/mo', '~$700/mo'],
                  ['$50,000', '~$1,535/mo', '~$1,200/mo', '~$1,000/mo'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic', marginBottom: '2rem' }}>
            Estimated payments based on typical rates for qualified borrowers. Actual rates and terms depend on creditworthiness. Payments shown are approximate.
          </p>

          <h2 style={S.h2}>Why Financing Makes Sense</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Enjoy It Now', desc: 'Don\'t wait years to save. Build your deck this season and start using it immediately.' },
              { title: 'Home Value Increase', desc: 'A composite deck adds 60-80% of its cost to your home value. Your equity increases from day one.' },
              { title: 'Beat Price Increases', desc: 'Material and labor costs rise 5-8% annually. Building now at today\'s prices saves money vs waiting.' },
              { title: 'Preserve Cash', desc: 'Keep your savings for emergencies. Spread the deck cost over predictable monthly payments.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Financing Options Available</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Option', 'Terms', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Personal home improvement loan', '12–60 months, fixed rate, unsecured', 'Most homeowners quick approval, no home equity needed'],
                  ['Home equity loan (HELOC)', 'Variable or fixed, longer terms, lower rates', 'Larger projects ($50k+) where you have significant equity'],
                  ['Credit card (0% intro APR)', '12–18 months interest-free', 'Smaller projects under $15k if you can pay within promo period'],
                  ['Contractor financing', 'Through our lending partners', 'Convenience apply as part of your estimate process'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Requirements</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Minimum credit score: typically 600+ (varies by lender)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Proof of income or employment</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Valid ID and SSN for credit check</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Property ownership (for home improvement loans)</li>
          </ul>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Can I finance a deck?", a: "Yes we offer financing with terms from 12 to 60 months. $0 down options available for qualified applicants." },
            { q: "What are typical monthly payments?", a: "For a $30,000 deck: ~$525/mo over 60 months or ~$680/mo over 48 months at typical rates." },
            { q: "Does applying affect my credit score?", a: "The initial pre-qualification uses a soft check (no impact). A hard check occurs only when you accept terms and formally apply." },
            { q: "Is financing a deck a good idea?", a: "Yes especially for composite decks that add 60-80% of cost to home value. You enjoy the deck now and build equity simultaneously." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value?'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
              ['/best-time-to-build-a-deck-northern-virginia', 'Best Time to Build'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Build Now, Pay Over Time" buttonText="Get Free Estimate + Financing Options" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
