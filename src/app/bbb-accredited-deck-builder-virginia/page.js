import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/bbb-accredited-deck-builder-virginia',
  title: 'BBB Accredited Deck Builder in Northern Virginia | Loudoun Decks',
  description: 'Verify Loudoun Decks on BBB and review public profile details, licensing references, deck services, and Northern Virginia service areas.',
  image: '/social/bbb-accredited-deck-builder-social.png',
});

const BBB_PROFILE_URL = 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241';

// Breadcrumbs and other page-specific schema below

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BBB Accredited Deck Builder in Northern Virginia",
  "description": "Verify Loudoun Decks on BBB and review public profile details, licensing references, deck services, and Northern Virginia service areas.",
  "url": "https://ldndecks.com/bbb-accredited-deck-builder-virginia",
  "isPartOf": { "@type": "WebSite", "@id": "https://ldndecks.com/#website" },
  "about": { "@id": "https://ldndecks.com/#organization" }
};

const faqs = [
  {
    q: "Is Loudoun Decks BBB accredited?",
    a: "Loudoun Decks links to its public BBB Business Profile so homeowners can verify the current accreditation and rating details directly on bbb.org."
  },
  {
    q: "What does BBB accreditation mean for homeowners?",
    a: "BBB accreditation means the business has committed to the BBB's published Standards for Trust, including transparency and responsiveness. Accreditation is one helpful signal — homeowners should still review the company's licensing, photo galleries or source-verified references, written estimates, and warranty terms before hiring any contractor."
  },
  {
    q: "Is Loudoun Decks licensed in Virginia?",
    a: "The public BBB profile has listed Virginia DPOR contractor license number 2705191673. Homeowners should verify current license status directly through the Virginia Department of Professional and Occupational Regulation before hiring any contractor."
  },
  {
    q: "What areas does Loudoun Decks serve?",
    a: "Loudoun Decks serves homeowners throughout Northern Virginia, including Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County. Specific cities include Centreville, Ashburn, Leesburg, Reston, Herndon, Vienna, McLean, Fairfax, Manassas, Gainesville, Chantilly, Arlington, Dumfries, Purcellville, and surrounding communities."
  },
  {
    q: "What types of decks does Loudoun Decks build?",
    a: "We build custom decks, Trex composite decks, TimberTech composite decks, AZEK polymer decks, deck replacements, deck resurfacing projects, screened porches, pergolas, railings, stairs, and full outdoor living spaces."
  },
  {
    q: "Where can I view the official BBB profile?",
    a: "You can view the official Loudoun Decks BBB Business Profile on the BBB website. The profile shows our accreditation status, A+ rating, contact information, and listed Virginia contractor license."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', marginTop: '2.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

const profileHighlights = [
  { label: 'BBB profile', detail: 'Verify accreditation status directly on bbb.org' },
  { label: 'BBB rating', detail: 'Check the current rating on the official BBB profile' },
  { label: 'Accreditation date', detail: 'Verify current BBB profile details before citing' },
  { label: 'Virginia DPOR License', detail: '#2705191673 — verify current status on DPOR' },
  { label: 'Service Area', detail: 'All of Northern Virginia' },
  { label: 'Primary Category', detail: 'Deck Builder & Composite Deck Contractor' },
];

const services = [
  { title: 'Custom Decks', href: '/services/new-decks' },
  { title: 'Trex Decks', href: '/trex-decks' },
  { title: 'TimberTech Decks', href: '/composite-decks' },
  { title: 'Composite Decking', href: '/composite-decks' },
  { title: 'Deck Replacement', href: '/services/deck-replacement' },
  { title: 'Deck Resurfacing', href: '/services/deck-resurfacing' },
  { title: 'Screened Porches', href: '/services/porches/screened-porch' },
  { title: 'Pergolas', href: '/services/gazebo-pergola' },
  { title: 'Railings & Stairs', href: '/services/trex-railings' },
  { title: 'Outdoor Living Projects', href: '/services' },
];

const cities = [
  { name: 'Centreville', href: '/deck-builder-centreville-va' },
  { name: 'Ashburn', href: '/deck-builder-ashburn-va' },
  { name: 'Leesburg', href: '/deck-builder-leesburg-va' },
  { name: 'Sterling', href: '/deck-builder-sterling-va' },
  { name: 'Reston', href: '/deck-builder-reston-va' },
  { name: 'Herndon', href: '/deck-builder-herndon-va' },
  { name: 'Vienna', href: '/deck-builder-vienna-va' },
  { name: 'McLean', href: '/deck-builder-mclean-va' },
  { name: 'Fairfax', href: '/deck-builder-fairfax-va' },
  { name: 'Manassas', href: '/deck-builder-manassas-va' },
  { name: 'Gainesville', href: '/deck-builder-gainesville-va' },
  { name: 'Chantilly', href: '/deck-builder-chantilly-va' },
  { name: 'Arlington', href: '/deck-builder-arlington-va' },
  { name: 'Purcellville', href: '/deck-builder-purcellville-va' },
];

export default function BBBPage() {
  return (
    <>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/bbb-accredited-deck-builder-virginia" name="BBB Accredited Deck Builder in Northern Virginia | Loudoun Decks" description="Verify Loudoun Decks on BBB and review public profile details, licensing references, deck services, and Northern Virginia service areas." speakable />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
            BBB Accredited Deck Builder Serving Northern Virginia
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: 720 }}>
            Choosing a deck contractor is a major decision. You&apos;re trusting a team to design, permit, and build a structure that your family will use for years. That decision deserves verification &mdash; clear licensing, transparent estimates, and public profile checks. Use this page to open the official BBB profile and verify the current details directly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/get-estimate" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.9rem 1.6rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
              Get a Free Deck Estimate
            </Link>
            <a
              href={BBB_PROFILE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{ display: 'inline-block', background: 'transparent', color: '#fff', padding: '0.9rem 1.6rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}
            >
              View Our BBB Profile &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Loudoun Decks</strong> &middot; Public BBB profile &middot; Virginia DPOR license reference &middot; Trex material options &middot; (571) 655-7207
          </p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Why BBB Accreditation Matters When Choosing a Deck Builder</h2>
          <p style={S.p}>
            For most homeowners, a deck is a $20,000&ndash;$60,000+ investment. The right contractor delivers a structure that lasts decades. The wrong contractor can leave you with code violations, voided manufacturer warranties, or unfinished work. That gap is why third-party verification matters.
          </p>
          <p style={S.p}>
            The Better Business Bureau provides a separate, public profile where homeowners can review a company&apos;s contact information, listed credentials, and accreditation status. Accreditation reflects a business&apos;s commitment to the BBB&apos;s published Standards for Trust &mdash; including transparency, responsiveness, and honest representation.
          </p>
          <p style={S.p}>
            Accreditation isn&apos;t a guarantee of perfection, and the BBB does not endorse the products or services of any business. It is one helpful data point among several. Before hiring any contractor, we encourage you to verify state license status, ask for written estimates, review warranty terms, and check photo galleries or source-verified references.
          </p>

          <h2 style={S.h2}>Loudoun Decks BBB Profile Highlights</h2>
          <p style={S.p}>The following details are publicly available on our BBB Business Profile:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {profileHighlights.map((h) => (
              <div key={h.label} style={{ background: '#f9f9f9', borderRadius: 10, padding: '1.25rem', borderLeft: '4px solid var(--color-primary)' }}>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{h.label}</p>
                <p style={{ fontSize: '0.85rem', color: '#555', margin: 0, lineHeight: 1.5 }}>{h.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777', fontStyle: 'italic' }}>
            The details above are references to public profile fields that can change. To verify current status, visit the official profile linked at the bottom of this page or look up &ldquo;Loudoun Decks Centreville&rdquo; on bbb.org.
          </p>

          <h2 style={S.h2}>Trusted Deck Building Services</h2>
          <p style={S.p}>Our BBB profile categorizes us as a Deck Builder, Deck Repair, Patio Contractor, Gazebo Builder, Deck Maintenance, and Fence Contractor. Here are the projects we build for Northern Virginia homeowners:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} style={{ display: 'block', background: '#fff', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5', transition: 'border-color 0.2s' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{s.title} &rarr;</p>
              </Link>
            ))}
          </div>

          <h2 style={S.h2}>Built for Homeowners Who Care About Quality</h2>
          <p style={S.p}>
            Public trust profiles are useful, but the contract and project process matter just as much. Here is what homeowners should expect before signing:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Clear, itemized estimates.</strong> No vague quotes. You see materials, labor, permits, dumpster, cleanup, and warranty terms in writing before signing anything.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Honest material guidance.</strong> We sell the right material for your project &mdash; not the most expensive one. If pressure-treated wood is the right call, we say so.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Permit support.</strong> We handle the entire permit process with Loudoun, Fairfax, Prince William, Arlington, and Stafford counties. You don&apos;t visit the building department.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA-friendly planning.</strong> Many Northern Virginia homes are in HOA communities. We prepare submission packages around the community requirements available for your property.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Clean job-site expectations.</strong> Property protection, debris handling, access, and cleanup expectations should be documented before construction starts.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Professional communication.</strong> Homeowners should know who to contact, how updates are delivered, and what happens at each inspection milestone.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Long-term durability.</strong> Premium composite materials, proper substructure, code-compliant ledger flashing, and written workmanship terms should all appear in the project paperwork.</li>
          </ul>

          <h2 style={S.h2}>Serving Northern Virginia Communities</h2>
          <p style={S.p}>
            Headquartered in Centreville, we serve homeowners throughout Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County. Below are the cities where we most frequently build &mdash; click any link to see local information, neighborhoods, permit details, and planning notes for that area:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {cities.map((c) => (
              <Link key={c.href} href={c.href} style={{ display: 'inline-block', padding: '0.45rem 0.9rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', background: '#fff' }}>
                {c.name}, VA
              </Link>
            ))}
          </div>
          <p style={S.p}>
            We also serve Dumfries, Stafford, Bristow, Haymarket, Springfield, Burke, Falls Church, Tysons, and other Northern Virginia communities. If your city isn&apos;t listed, <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>request a written estimate</Link> &mdash; we likely serve your area.
          </p>

          <h2 style={S.h2}>Verify Loudoun Decks on BBB</h2>
          <p style={S.p}>
            We encourage every prospective client to independently verify our credentials. Visit our BBB Business Profile to review accreditation status, A+ rating, license information, and any customer feedback on file:
          </p>
          <div style={{ background: '#f9f9f9', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', fontWeight: 600 }}>Official BBB Business Profile</p>
            <a
              href={BBB_PROFILE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.85rem 1.5rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}
            >
              View Loudoun Decks BBB Business Profile &rarr;
            </a>
            <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.75rem', marginBottom: 0 }}>
              Opens on bbb.org in a new tab.
            </p>
          </div>

          <p style={S.p}>You can also independently verify our Virginia contractor license at the <a href="https://www.dpor.virginia.gov" target="_blank" rel="nofollow noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia DPOR public license search</a>. Our license number is 2705191673.</p>

          <h2 style={S.h2}>Request Your Free Deck Estimate</h2>
          <p style={S.p}>
            Ready to build a deck with a trusted Northern Virginia contractor? We provide free on-site consultations, custom design renderings, and itemized written quotes &mdash; with no obligation to proceed. Most homeowners decide within 1&ndash;2 weeks of meeting our team.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.9rem 1.6rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
              Call (571) 655-7207
            </CallLink>
            <Link href="/get-estimate" style={{ display: 'inline-block', background: 'var(--color-dark)', color: '#fff', padding: '0.9rem 1.6rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
              Get Free Estimate
            </Link>
          </div>

          {/* FAQs */}
          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* Related */}
          <h2 style={S.h2}>Related Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about/certifications-and-licenses', 'Certifications & Licenses'],
              ['/reviews', 'Google Reviews — public profile verification'],
              ['/houzz-deck-projects', 'Houzz Project Portfolio'],
              ['/team', 'Meet the Loudoun Decks Team'],
              ['/before-and-after', 'Before & After Project Gallery'],
              ['/showcase', 'Completed Deck Project Gallery'],
              ['/deck-cost-calculator', 'Deck Cost Calculator'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Permit Guide'],
              ['/get-estimate', 'Request a Written Estimate'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: `${text} &rarr;` }} />
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1.5rem', lineHeight: 1.6 }}>
            <strong>Disclosure:</strong> &ldquo;BBB&rdquo; and &ldquo;Better Business Bureau&rdquo; are registered trademarks of the Council of Better Business Bureaus, Inc. The Council does not endorse any product, service, or business. References to BBB accreditation and rating on this page reflect publicly available information from our official BBB Business Profile. Customers are encouraged to verify all credentials independently.
          </p>

        </div>
      </article>

      <SimpleCTA title="Ready to Build with a Trusted Deck Contractor?" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/bbb-accredited-deck-builder-virginia" />
      <NamedAuthor context="Northern Virginia trust profile verification" lastUpdated="2026-06-01" />

      <ContactHome />
    </>
  );
}
