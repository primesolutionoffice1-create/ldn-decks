import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/hoa-deck-rules-northern-virginia',
  title: 'HOA Deck Rules in Northern Virginia (2026)',
  description: 'Most NoVA HOAs require approval before deck construction. Learn the process, common restrictions, what to submit, and how we handle it 100% approval rate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval to build a deck in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Almost always yes. Over 80% of Northern Virginia homes are in HOA communities that require architectural review committee (ARC) approval before exterior construction." } },
    { "@type": "Question", name: "What do I need to submit to my HOA?", acceptedAnswer: { "@type": "Answer", text: "Typically: site plan, materials list with brand and color, railing style details, and sometimes a rendering. We prepare and submit the full package as part of our standard scope." } },
    { "@type": "Question", name: "How long does HOA approval take?", acceptedAnswer: { "@type": "Answer", text: "2-4 weeks for most communities. Some meet monthly. We track submission deadlines for all major Loudoun, Fairfax, and Prince William HOAs." } },
    { "@type": "Question", name: "Can my HOA deny a deck?", acceptedAnswer: { "@type": "Answer", text: "Denials are usually due to non-compliant materials or colors, not the concept of a deck. We review guidelines before submitting. Our approval rate is 100%." } },
    { "@type": "Question", name: "What happens if I build without HOA approval?", acceptedAnswer: { "@type": "Answer", text: "Fines ($50-$200/day), liens on your property, or required removal. Also creates issues at home sale. Always get approval first." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function HOADeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/hoa-deck-rules-northern-virginia" name="HOA Deck Rules in Northern Virginia (2026)" description="Most NoVA HOAs require approval before deck construction. Learn the process, common restrictions, what to submit, and how we handle it 100% approval rate." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>HOA Deck Rules in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>What you need to know before building approval process, restrictions, and how we handle it</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img15.jpeg"
              alt="HOA compliant custom deck builders in Northern Virginia community"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Do You Need HOA Approval?</h2>
          <p style={S.p}><strong>Almost certainly yes.</strong> Over 80% of Northern Virginia homes are in HOA communities. If you live in any planned development Broadlands, Ashburn Farm, Brambleton, South Riding, Belmont Country Club, Stone Ridge, One Loudoun, Reston, Burke Centre, or hundreds of others you need architectural review committee (ARC) approval before any exterior construction.</p>
          <p style={S.p}>This applies to new decks, replacements, screened porches, pergolas, fences, and even changing stain color. <strong>HOA approval is separate from your county building permit</strong> you need both.</p>

          <h2 style={S.h2}>Common HOA Restrictions</h2>
          <h3 style={S.h3}>Materials &amp; Colors</h3>
          <p style={S.p}>Most HOAs specify approved material types and limit colors to earth tones. Some require specific brands. We check your HOA&apos;s design guidelines before selecting materials.</p>
          <h3 style={S.h3}>Railing Styles</h3>
          <p style={S.p}>Many HOAs mandate railing profile, color, and spacing. Cable rail is restricted in some communities. We know which systems each community allows.</p>
          <h3 style={S.h3}>Height &amp; Setback Requirements</h3>
          <p style={S.p}>HOAs often impose setback distances more restrictive than county code. Typical: 15–25 feet from rear property line, 10–15 feet from sides.</p>
          <h3 style={S.h3}>Screening &amp; Privacy</h3>
          <p style={S.p}>Some communities require lattice skirting below elevated decks, restrict privacy screen heights, or mandate specific screening materials.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>The Approval Process (Step by Step)</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Get your HOA&apos;s design guidelines</strong> usually on your management company&apos;s portal. We have guidelines on file for 50+ communities.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Prepare the submission:</strong> site plan, materials list, railing details, sometimes a rendering.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Submit to the ARC</strong> via management portal (FirstService, SFMC, Cardinal, etc.).</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Wait for review</strong> most meet every 2–4 weeks. Average turnaround: 2–4 weeks.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Receive approval</strong> conditions typically involve minor color or railing changes. We address and resubmit within 48 hours.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Apply for county building permit.</strong> We do both in parallel when possible.</li>
          </ol>

          <h2 style={S.h2}>We Handle the Entire HOA Process</h2>
          <p style={S.p}>As part of our standard scope (no extra charge):</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              'Review your HOA design guidelines before design begins',
              'Select compliant materials and colors',
              'Prepare the complete ARC submission package',
              'Submit on your behalf and track the timeline',
              'Address any revision requests',
              'Coordinate HOA approval with county permit submission',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>
          <p style={{ ...S.p, fontWeight: 600 }}>Our HOA approval rate: 100%. We&apos;ve never had a final denial because we check compliance before submitting.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Communities We&apos;ve Built In</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { county: 'Loudoun County', communities: ['Broadlands', 'Ashburn Farm', 'Belmont Country Club', 'Brambleton', 'Stone Ridge', 'One Loudoun', 'Loudoun Valley Estates', 'South Riding', 'Lansdowne', 'Potomac Falls'] },
              { county: 'Fairfax County', communities: ['Reston', 'Burke Centre', 'West Springfield', 'Fair Oaks', 'Centreville Farms', 'Sully Station', 'Virginia Run', 'Oak Hill', 'Franklin Farm', 'Chantilly Highlands'] },
              { county: 'Prince William County', communities: ['Dominion Valley', 'Piedmont', 'Bristow Manor', 'Lake Ridge', 'Dale City', 'Montclair', 'Gainesville', 'Haymarket', 'Kingstowne', 'Occoquan'] },
            ].map(({ county, communities }) => (
              <div key={county}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{county}</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  {communities.map(c => <li key={c} style={{ marginBottom: '0.25rem', color: '#555' }}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Do I need HOA approval?", a: "Almost always yes in Northern Virginia. Over 80% of homes are in HOA communities requiring architectural review." },
            { q: "What do I submit?", a: "Site plan, materials list, railing details, sometimes a rendering. We prepare and submit everything." },
            { q: "How long does approval take?", a: "2-4 weeks. We track review cycles for all major NoVA HOAs." },
            { q: "Can the HOA deny my deck?", a: "Rarely and usually only for non-compliant materials. We review guidelines first. Our rate is 100%." },
            { q: "What if I build without approval?", a: "Fines ($50-$200/day), liens, or required removal. Also creates sale issues." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-permit-loudoun-county-virginia', 'Deck Permit Guide: Loudoun County'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/deck-builder-ashburn-va', 'Deck Builder in Ashburn, VA'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Don't Navigate HOA Alone" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}