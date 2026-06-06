import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/hoa-deck-rules-northern-virginia',
  title: 'HOA Deck Rules in Northern Virginia (2026)',
  description: 'Most NoVA HOAs require approval before deck construction. Learn the process, common restrictions, what to submit, and how LDN Decks manages HOA packages.',
  image: '/social/hoa-deck-rules-northern-virginia-social.png',
});

const PATH = '/hoa-deck-rules-northern-virginia';

const faqs = [
  {
    q: 'Do I need HOA approval to build a deck in Northern Virginia?',
    a: 'Almost always yes. Over 80% of Northern Virginia homes are in HOA communities that require architectural review committee (ARC) approval before exterior construction. HOA approval is separate from the county building permit, so most deck projects need both before construction starts.',
  },
  {
    q: 'What do I need to submit to my HOA?',
    a: 'Most HOAs ask for a site plan, material list with brand and color, railing details, deck dimensions, stair placement, and sometimes renderings or neighbor notification. We prepare the full package so the HOA can review aesthetics while the county reviews code and structure.',
  },
  {
    q: 'How long does HOA approval take?',
    a: 'Most Northern Virginia HOA approvals take 2-4 weeks, but monthly ARC meetings can stretch review to 4-6 weeks if the submission misses the cutoff. Loudoun, Fairfax, and Prince William county permits often run in parallel when the HOA allows it.',
  },
  {
    q: 'Can my HOA deny a deck?',
    a: 'Yes, but denials are usually caused by non-compliant materials, colors, setbacks, stair placement, railing style, or incomplete documentation. We review the written guidelines before submitting so preventable issues are addressed before the ARC sees the package.',
  },
  {
    q: 'What happens if I build without HOA approval?',
    a: 'Unapproved deck work can trigger daily fines, liens, forced removal, or resale problems when title and buyer inspections flag the exterior change. Always secure written HOA approval and the required county permit before construction begins.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://ldndecks.com${PATH}#faq`,
  url: `https://ldndecks.com${PATH}`,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function HOADeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-05" url={`https://ldndecks.com${PATH}`} name="HOA Deck Rules in Northern Virginia (2026)" description="Most NoVA HOAs require approval before deck construction. Learn the process, common restrictions, what to submit, and how LDN Decks manages HOA packages." speakable />
      <ArticleSchema
        title="HOA Deck Rules in Northern Virginia"
        description="Northern Virginia HOA deck approval process, documents, material restrictions, county permit sequencing, and submission support."
        path={PATH}
        image="/images/img15.jpeg"
        datePublished="2026-05-26"
        dateModified="2026-06-05"
      />

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
          <p style={S.p}>For Loudoun projects, use the <Link href="/deck-permit-hoa-cost-loudoun-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>permit and HOA cost breakdown</Link> to budget review fees and engineering drawings. For structural approval, pair the HOA packet with the <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger flashing guide</Link> and <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code guide</Link> so the design matches both appearance rules and inspection requirements.</p>

          <h2 style={S.h2}>Common HOA Restrictions</h2>
          <h3 style={S.h3}>Materials &amp; Colors</h3>
          <p style={S.p}>Most HOAs specify approved material types and limit colors to earth tones. Some require specific brands. We check your HOA&apos;s design guidelines before selecting materials.</p>
          <h3 style={S.h3}>Railing Styles</h3>
          <p style={S.p}>Many HOAs mandate railing profile, color, and spacing. Cable rail is restricted in some communities, so railing selections should be checked against the written community standards before the ARC packet is submitted.</p>
          <h3 style={S.h3}>Height &amp; Setback Requirements</h3>
          <p style={S.p}>HOAs often impose setback distances more restrictive than county code. Typical: 15–25 feet from rear property line, 10–15 feet from sides.</p>
          <h3 style={S.h3}>Screening &amp; Privacy</h3>
          <p style={S.p}>Some communities require lattice skirting below elevated decks, restrict privacy screen heights, or mandate specific screening materials.</p>
          <p style={S.p}>County reviewers look at a different layer of the project: footings, framing, ledger attachment, railings, stairs, and inspection access. Homeowners can compare county requirements in the <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County deck permit guide</Link>, <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County deck permit guide</Link>, <Link href="/deck-permit-prince-william-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Prince William County deck permit guide</Link>, and <Link href="/deck-permit-arlington-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Arlington County deck permit guide</Link>. For structural details, review our <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link> and <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>.</p>

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
          <p style={{ ...S.p, fontWeight: 600 }}>We check compliance before submitting so the package is aligned with the HOA&apos;s written requirements and preventable revisions are reduced.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>HOA Communities We Help Plan Around</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {(() => {
              // Communities with dedicated HOA-rules pages get linked; the rest render as plain text.
              const HOA_PAGE = {
                'Broadlands': '/broadlands-hoa-deck-rules',
                'Brambleton': '/brambleton-hoa-deck-rules',
                'Belmont Country Club': '/belmont-country-club-hoa-deck-rules',
                'Stone Ridge': '/stone-ridge-hoa-deck-rules',
                'One Loudoun': '/one-loudoun-hoa-deck-rules',
                'Lansdowne': '/lansdowne-hoa-deck-rules',
                'Ashburn Village': '/ashburn-village-hoa-deck-rules',
                'Sully Station': '/sully-station-hoa-deck-rules',
                'Virginia Run': '/virginia-run-hoa-deck-rules',
              };
              const groups = [
                { county: 'Loudoun County', communities: ['Broadlands', 'Ashburn Farm', 'Ashburn Village', 'Belmont Country Club', 'Brambleton', 'Stone Ridge', 'One Loudoun', 'Loudoun Valley Estates', 'South Riding', 'Lansdowne', 'Potomac Falls'] },
                { county: 'Fairfax County', communities: ['Reston', 'Burke Centre', 'West Springfield', 'Fair Oaks', 'Centreville Farms', 'Sully Station', 'Virginia Run', 'Oak Hill', 'Franklin Farm', 'Chantilly Highlands'] },
                { county: 'Prince William County', communities: ['Dominion Valley', 'Piedmont', 'Bristow Manor', 'Lake Ridge', 'Dale City', 'Montclair', 'Gainesville', 'Haymarket', 'Kingstowne', 'Occoquan'] },
              ];
              return groups.map(({ county, communities }) => (
                <div key={county}>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{county}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                    {communities.map(c => (
                      <li key={c} style={{ marginBottom: '0.25rem', color: '#555' }}>
                        {HOA_PAGE[c]
                          ? <Link href={HOA_PAGE[c]} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{c}</Link>
                          : c}
                      </li>
                    ))}
                  </ul>
                </div>
              ));
            })()}
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Fairfax HOA Planning by Project Type</h2>
          <p style={S.p}>Fairfax County deck projects often need the HOA packet, county permit drawings, and structural details to agree before submission. Use the paths below to match the approval strategy to the property type and avoid serial review delays.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              {
                title: 'Estate and golf-course decks',
                copy: 'Virginia Run and similar estate lots usually need premium material samples, landscape integration notes, load-path clarity, and sometimes engineering coordination.',
                links: [
                  ['/virginia-run-hoa-deck-rules', 'Virginia Run HOA guide'],
                  ['/deck-builder-centreville-va', 'Centreville deck builder'],
                  ['/tools/deck-load-calculator-virginia', 'Virginia deck load calculator'],
                ],
              },
              {
                title: 'Townhome and master-planned decks',
                copy: 'Sully Station, Centre Ridge, Newgate, and similar communities need tighter footprint, railing, stair, and color documentation before ARC review.',
                links: [
                  ['/sully-station-hoa-deck-rules', 'Sully Station HOA guide'],
                  ['/deck-permit-fairfax-county-virginia', 'Fairfax permit guide'],
                  ['/education/deck-stair-code-rise-run-virginia', 'Virginia deck stair code'],
                ],
              },
              {
                title: 'Replacement and resurfacing projects',
                copy: 'Older wood decks need the packet to explain whether framing stays, where ledger flashing changes, and how stairs and guards are brought to current code.',
                links: [
                  ['/deck-resurfacing-vs-replacement', 'Resurface vs replace'],
                  ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger flashing guide'],
                  ['/near-you/fairfax-county', 'Fairfax County hub'],
                ],
              },
            ].map(({ title, copy, links }) => (
              <div key={title} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1rem', background: '#fafafa' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ marginBottom: '0.75rem', lineHeight: 1.6, color: '#555' }}>{copy}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {links.map(([href, text]) => (
                    <li key={href} style={{ marginBottom: '0.35rem' }}>
                      <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="faq" style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-permit-loudoun-county-virginia', 'Deck Permit Guide: Loudoun County'],
              ['/deck-permit-fairfax-county-virginia', 'Deck Permit Guide: Fairfax County'],
              ['/near-you/fairfax-county', 'Fairfax County Deck Builder Hub'],
              ['/deck-builder-centreville-va', 'Deck Builder in Centreville, VA'],
              ['/sully-station-hoa-deck-rules', 'Sully Station HOA Deck Rules'],
              ['/virginia-run-hoa-deck-rules', 'Virginia Run HOA Deck Rules'],
              ['/deck-permit-prince-william-county-virginia', 'Deck Permit Guide: Prince William County'],
              ['/deck-permit-hoa-cost-loudoun-county', 'Loudoun Permit + HOA Cost Breakdown'],
              ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Board Flashing Guide'],
              ['/education/deck-stair-code-rise-run-virginia', 'Virginia Deck Stair Code Guide'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/deck-builder-ashburn-va', 'Deck Builder in Ashburn, VA'],
              ['/ashburn-composite-deck-cost-financing', 'Ashburn Composite Deck Cost &amp; Financing'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Don't Navigate HOA Alone" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-06-05" />

      <RelatedGuides currentPath="/hoa-deck-rules-northern-virginia" />

      <ContactHome />
    </>
  );
}
