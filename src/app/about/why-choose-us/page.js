import React from 'react';
import Link from 'next/link';
import WhyChooseHeader from '@/components/WhyChooseHeader';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import WhyChooseServices from '@/components/WhyChooseServices';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import WhyChooseFAQ from '@/components/WhyChooseFAQ';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: "/about/why-choose-us",
  title: "Why Choose LDN Decks | Northern Virginia's Premier Deck Builder",
  description: "Why Northern Virginia homeowners choose LDN Decks: verified public profiles, local planning support, written warranty terms, and clear project scopes.",
  image: "/social/why-choose-loudoun-decks-social.png",
});

const verifiedFacts = [
  'Virginia DPOR Class A Contractor License #2705191673 — verifiable at dpor.virginia.gov before any contract is signed.',
  'Member of the North American Deck and Railing Association (NADRA), the trade association for deck professionals.',
  'Founder and lead contractor Nicolae Zugrav has 10+ years planning custom composite deck projects in Northern Virginia.',
  'Typical new deck projects in Northern Virginia range from $15,000 to $45,000 depending on size, materials, stairs, railings, site access, and permits.',
  'Standard deck construction usually takes 1 to 2 weeks from the day building begins, weather permitting.',
  'Resurfacing a structurally sound frame with composite boards can save homeowners up to 40% versus full replacement.',
  'Service area: Loudoun, Fairfax, Prince William, Arlington, and Stafford counties, plus Alexandria and Falls Church.',
  'Public profiles on BBB, Houzz, Yelp, Google, and Trustpilot carry the same business data as this site — verify us at the source.',
];

const comparisonRows = [
  { factor: 'Who builds your deck', local: 'The team you met at the estimate — the founder’s name and license are on every contract.', franchise: 'Varies by branch and subcontractor assignment.' },
  { factor: 'Permit and HOA familiarity', local: 'Daily work inside Loudoun, Fairfax, and Prince William permit offices and HOA review boards.', franchise: 'Depends on the local branch’s experience.' },
  { factor: 'Estimate structure', local: 'Written, itemized scope with materials, price, and timeline — no franchise fee layer in the pricing.', franchise: 'Brand-level pricing that includes franchise overhead.' },
  { factor: 'Accountability years later', local: 'Direct line to the owner who built the project, with written labor warranty terms in the signed paperwork.', franchise: 'Brand-level processes that may outlast branch staff turnover.' },
];

export default function WhyChooseUsPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-08-06" url="https://ldndecks.com/about/why-choose-us" name="Why Choose LDN Decks | Northern Virginia" description="Why Northern Virginia homeowners choose LDN Decks: verified public profiles, local planning support, written warranty terms, and clear project scopes." speakable />
      <WhyChooseHeader />

      <section style={{ padding: '70px 20px', background: '#fff' }} aria-labelledby="why-definition">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ margin: '0 0 10px', color: '#d14817', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Who you are hiring
          </p>
          <h2 id="why-definition" style={{ fontSize: '32px', fontWeight: 800, marginBottom: '18px', color: '#111' }}>
            What Loudoun Decks is, in one paragraph
          </h2>
          <p data-speakable style={{ fontSize: '18px', color: '#444', lineHeight: 1.75, marginBottom: '18px' }}>
            Loudoun Decks (LDN Decks) is a Virginia Class A licensed deck building contractor based in Centreville, VA,
            specializing in custom composite decks (Trex, TimberTech, AZEK), screened porches, covered decks, and patios
            for homeowners across Northern Virginia. The company handles county permit planning and HOA architectural
            review, provides written itemized estimates, and documents workmanship warranty terms in the signed project
            paperwork before construction begins.
          </p>
          <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '28px 0 14px', color: '#111' }}>
            Verified facts homeowners check first
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {verifiedFacts.map((fact) => (
              <article key={fact} style={{ border: '1px solid #e5e7eb', borderRadius: 8, background: '#fafafa', padding: '18px' }}>
                <p style={{ margin: 0, color: '#444', lineHeight: 1.6 }}>{fact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 20px 70px', background: '#fff' }} aria-labelledby="why-comparison">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 id="why-comparison" style={{ fontSize: '32px', fontWeight: 800, marginBottom: '14px', color: '#111' }}>
            Local specialist vs national franchise: an honest comparison
          </h2>
          <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.7, marginBottom: '22px', maxWidth: '860px' }}>
            National deck franchises build good decks too. The practical difference is who you talk to when a railing
            needs attention in year three, and whether the person quoting the project is the person building it.
            Homeowners should compare both paths on the factors below before signing anything.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15.5px' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff', textAlign: 'left' }}>
                  <th style={{ padding: '14px 16px' }}>Factor</th>
                  <th style={{ padding: '14px 16px' }}>Local specialist (Loudoun Decks)</th>
                  <th style={{ padding: '14px 16px' }}>National franchise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: '#111', verticalAlign: 'top' }}>{row.factor}</td>
                    <td style={{ padding: '14px 16px', color: '#444', lineHeight: 1.6, verticalAlign: 'top' }}>{row.local}</td>
                    <td style={{ padding: '14px 16px', color: '#666', lineHeight: 1.6, verticalAlign: 'top' }}>{row.franchise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.7, marginTop: '22px' }}>
            Want to verify these claims before calling? Read the{' '}
            <Link href="/deck-warranty-guide-northern-virginia" style={{ color: '#B9471E', fontWeight: 800 }}>Northern Virginia deck warranty guide</Link>,
            review the{' '}
            <Link href="/about/process" style={{ color: '#B9471E', fontWeight: 800 }}>six-step project process</Link>, or check{' '}
            <Link href="/about/certifications-and-licenses" style={{ color: '#B9471E', fontWeight: 800 }}>certifications and license context</Link>{' '}
            — then <Link href="/get-estimate" style={{ color: '#B9471E', fontWeight: 800 }}>request a written estimate</Link>.
          </p>
        </div>
      </section>

      <ServicesCallToAction />
      <ServicesFooterInfo />
      <WhyChooseServices />
      <ProjectProcess />
      <WhyChooseDetails />
      <WhyChooseFAQ />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-08-06" />
    </main>
  );
}
