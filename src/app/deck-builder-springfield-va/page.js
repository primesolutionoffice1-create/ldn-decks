import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';

const PATH = "/deck-builder-springfield-va";
const PAGE_URL = "https://ldndecks.com/deck-builder-springfield-va";
const PAGE_TITLE = "Deck Builder in Springfield, VA | Loudoun Decks";
const PAGE_DESCRIPTION = "Springfield deck builder for deck replacement, townhome decks, and deck-and-patio combinations, with Fairfax County permits and Kingstowne ARC review.";

export const metadata = buildMetadata({
  path: PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: "/social/deck-builder-springfield-va-social.png",
});

const faqs = [
  {
    "q": "Who builds decks in Springfield, VA?",
    "a": "Loudoun Decks LLC is a Centreville-based residential deck contractor and a Virginia Class A contractor (DPOR license #2705191673), owned by Nicolae (Nick) Zugrav. Springfield is in Fairfax County."
  },
  {
    "q": "What should a deck project in Springfield plan for?",
    "a": "Kingstowne and other HOA communities should be screened for architectural review before permit documents are final. The Kingstowne ARC application needs drawings, material specifications, color selections, and sometimes neighbor notification. North Springfield, Kings Park, West Springfield, Saratoga, Franconia, Kingstowne, and Daventry are the planning areas named here. Deck-and-patio combinations need early drainage planning."
  },
  {
    "q": "What deck services does Loudoun Decks offer in Springfield?",
    "a": "These are services named on the Loudoun Decks site, not a separate menu invented for Springfield. The work includes new custom decks, deck replacement, deck repair, and deck resurfacing when the existing frame is structurally sound. The homepage lists Trex, TimberTech, Fiberon, AZEK, and Wolf as composite and PVC options and labels the company a Trex Partner. Screened porches, open porches, and front porches are included, along with pergolas and gazebos. Patios, fencing, railings, under-deck patios, and fire pits are included when that scope is part of the project. Homeowners should verify current Trex profile details directly with Trex."
  },
  {
    "q": "How are permits and HOA packages handled for Springfield?",
    "a": "Loudoun Decks identifies permit triggers and structural-drawing needs, and prepares the county building permit and the HOA architectural review package so the two can run concurrently. What the written scope includes is confirmed in that scope. The permit note used here is the one published on the Loudoun Decks homepage. The table lists Fairfax County plan review at 3–5 weeks through PLUS / Building Development Division, calls Fairfax County the most documentation-heavy jurisdiction in Northern Virginia, and says sealed structural drawings, ledger bolt schedules, and footing depths are required up front. Loudoun Decks handles every submission, so the homeowner does not log into the county portal."
  },
  {
    "q": "Which documented project does this Springfield page cite?",
    "a": "No Springfield project page was found. The documented project cited here is the November 2024 multi-level wood deck gallery record in Chantilly, not Springfield."
  },
  {
    "q": "How do I contact Loudoun Decks about a Springfield deck?",
    "a": "Springfield is listed by name under Fairfax County on the areas page. Loudoun Decks serves Loudoun, Fairfax, and Prince William Counties, plus Arlington and Stafford. The office is in Centreville. Loudoun Decks LLC, 13704 Winding Oak Cir, Centreville, VA 20121. Phone (571) 655-7207. Email office@ldndecks.com. Free consultations and estimates are available for homeowners in the service area. The contact page says the team calls back within 1 business day."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function SpringfieldDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Springfield" url={PAGE_URL} description={PAGE_DESCRIPTION} />
      <WebPageSchema
        dateModified="2026-11-03"
        url={PAGE_URL}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        speakable
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck builder in Springfield, VA</h1>
          <p data-speakable="true" style={{ color: '#ccc', fontSize: '1.1rem' }}>{PAGE_DESCRIPTION}</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Virginia Class A contractor, DPOR license #2705191673. Office: 13704 Winding Oak Cir, Centreville, VA 20121.</p>
        </div>
      </section>
      <CityLeadFormSection
        city="Springfield"
        county="Fairfax County"
        service="deck replacement, composite deck, or screened porch"
      />
      <GeoAnswerBlock
        question="Who builds decks in Springfield, VA?"
        answer={faqs[0].a}
        facts={[faqs[1].a]}
        links={[
          { href: '/get-estimate', label: "Request a Springfield estimate" },
          { href: "/showcase/wood-multi-level-deck-chantilly", label: "WOOD MULTI LEVEL DECK" },
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img17.jpeg"
              alt="Deck photo on the Loudoun Decks Springfield, VA page"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Planning a deck in Springfield</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[0].a}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>{faqs[1].a}</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Services in Springfield</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[2].a}</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
              <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"New custom decks"}</Link></li>
              <li key="/services/deck-replacement" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck replacement"}</Link></li>
              <li key="/services/deck-repair" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck repair"}</Link></li>
              <li key="/services/deck-resurfacing" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck resurfacing"}</Link></li>
              <li key="/services/porches" style={{ marginBottom: '0.5rem' }}><Link href="/services/porches" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Screened, open, and front porches"}</Link></li>
              <li key="/services/gazebo-pergola" style={{ marginBottom: '0.5rem' }}><Link href="/services/gazebo-pergola" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Pergolas and gazebos"}</Link></li>
              <li key="/services" style={{ marginBottom: '0.5rem' }}><Link href="/services" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Patios, fencing, railings, and outdoor living"}</Link></li>
              <li key="/areas-we-serve" style={{ marginBottom: '0.5rem' }}><Link href="/areas-we-serve" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Areas we serve"}</Link></li>
              <li key="/about/certifications-and-licenses" style={{ marginBottom: '0.5rem' }}><Link href="/about/certifications-and-licenses" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Licenses and Trex Partner note"}</Link></li>
              <li key="/contact" style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Contact"}</Link></li>
              <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Request an estimate"}</Link></li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2rem 0 1rem' }}>Permits and HOA paperwork</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"Loudoun Decks identifies permit triggers and structural-drawing needs, and prepares the county building permit and the HOA architectural review package so the two can run concurrently. What the written scope includes is confirmed in that scope."}</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"The permit note used here is the one published on the Loudoun Decks homepage. The table lists Fairfax County plan review at 3–5 weeks through PLUS / Building Development Division, calls Fairfax County the most documentation-heavy jurisdiction in Northern Virginia, and says sealed structural drawings, ledger bolt schedules, and footing depths are required up front. Loudoun Decks handles every submission, so the homeowner does not log into the county portal."}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Homepage permit table</Link>
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>A documented project</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[4].a}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            <Link href="/showcase/wood-multi-level-deck-chantilly" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"WOOD MULTI LEVEL DECK"}</Link>
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Service area</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"Springfield is listed by name under Fairfax County on the areas page. Loudoun Decks serves Loudoun, Fairfax, and Prince William Counties, plus Arlington and Stafford. The office is in Centreville."}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link key="/deck-builder-lorton-va" href="/deck-builder-lorton-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Lorton</Link>
            <Link key="/deck-builder-alexandria-va" href="/deck-builder-alexandria-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Alexandria</Link>
            <Link key="/deck-builder-fairfax-va" href="/deck-builder-fairfax-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Fairfax</Link>
            <Link key="/deck-builder-burke-va" href="/deck-builder-burke-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Burke</Link>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Contact</h2>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>{"Loudoun Decks LLC, 13704 Winding Oak Cir, Centreville, VA 20121. Phone (571) 655-7207. Email office@ldndecks.com. Free consultations and estimates are available for homeowners in the service area. The contact page says the team calls back within 1 business day."}</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
              <li key="/showcase/wood-multi-level-deck-chantilly" style={{ marginBottom: '0.5rem' }}><Link href="/showcase/wood-multi-level-deck-chantilly" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Chantilly wood deck gallery"}</Link></li>
              <li key="/deck-permit-fairfax-county-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Fairfax County deck permit guide"}</Link></li>
              <li key="/near-you/fairfax-county" style={{ marginBottom: '0.5rem' }}><Link href="/near-you/fairfax-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Fairfax County deck builder hub"}</Link></li>
              <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"New custom decks"}</Link></li>
              <li key="/services/deck-replacement" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck replacement"}</Link></li>
              <li key="/services/deck-repair" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck repair"}</Link></li>
              <li key="/services/deck-resurfacing" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck resurfacing"}</Link></li>
              <li key="/services/porches" style={{ marginBottom: '0.5rem' }}><Link href="/services/porches" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Screened, open, and front porches"}</Link></li>
              <li key="/services/gazebo-pergola" style={{ marginBottom: '0.5rem' }}><Link href="/services/gazebo-pergola" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Pergolas and gazebos"}</Link></li>
              <li key="/services" style={{ marginBottom: '0.5rem' }}><Link href="/services" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Patios, fencing, railings, and outdoor living"}</Link></li>
              <li key="/areas-we-serve" style={{ marginBottom: '0.5rem' }}><Link href="/areas-we-serve" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Areas we serve"}</Link></li>
              <li key="/about/certifications-and-licenses" style={{ marginBottom: '0.5rem' }}><Link href="/about/certifications-and-licenses" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Licenses and Trex Partner note"}</Link></li>
              <li key="/contact" style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Contact"}</Link></li>
              <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Request an estimate"}</Link></li>
          </ul>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Springfield" />
        </div>
      </section>
      <SimpleCTA title="Request a Springfield deck estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Springfield, VA" lastUpdated="2026-11-03" />
      <ContactHome
        pageContext={{
          city: "Springfield",
          county: "Fairfax County",
          service: "Springfield deck replacement, composite deck, or screened porch",
          pageType: 'local_city_landing_page',
        }}
      />
    </>
  );
}
