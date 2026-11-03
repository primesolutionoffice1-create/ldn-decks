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

const PATH = "/deck-builder-stafford-va";
const PAGE_URL = "https://ldndecks.com/deck-builder-stafford-va";
const PAGE_TITLE = "Deck Builder in Stafford, VA | Loudoun Decks";
const PAGE_DESCRIPTION = "Stafford deck builder for composite decks and deck replacement in Embrey Mill, Aquia Harbour, and nearby Stafford County communities.";

export const metadata = buildMetadata({
  path: PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: "/social/deck-builder-stafford-va-social.png",
});

const faqs = [
  {
    "q": "Who builds decks in Stafford, VA?",
    "a": "Loudoun Decks LLC is a Centreville-based residential deck contractor and a Virginia Class A contractor (DPOR license #2705191673), owned by Nicolae (Nick) Zugrav. Stafford County is named on the areas and contact pages."
  },
  {
    "q": "What should a deck project in Stafford plan for?",
    "a": "County permit requirements and HOA rules should be confirmed before assuming a faster or simpler approval path. Older decks should be inspected for ledger, footing, stair, and railing safety before resurfacing. Embrey Mill, Aquia Harbour, Garrisonville, Falmouth, North Stafford, Winding Creek, Abberly, Augustine, and Rocky Run are the communities named for this planning."
  },
  {
    "q": "What deck services does Loudoun Decks offer in Stafford?",
    "a": "These are services named on the Loudoun Decks site, not a separate menu invented for Stafford. The work includes new custom decks, deck replacement, deck repair, and deck resurfacing when the existing frame is structurally sound. The homepage lists Trex, TimberTech, Fiberon, AZEK, and Wolf as composite and PVC options and labels the company a Trex Partner. Screened porches, open porches, and front porches are included, along with pergolas and gazebos. Patios, fencing, railings, under-deck patios, and fire pits are included when that scope is part of the project. Homeowners should verify current Trex profile details directly with Trex."
  },
  {
    "q": "How are permits and HOA packages handled for Stafford?",
    "a": "Loudoun Decks identifies permit triggers and structural-drawing needs, and prepares the county building permit and the HOA architectural review package so the two can run concurrently. What the written scope includes is confirmed in that scope. The homepage permit table has no Stafford County row, so this page gives no timeline. Stafford County requirements are confirmed for each project, and Loudoun Decks handles the submission."
  },
  {
    "q": "Which documented project does this Stafford page cite?",
    "a": "No Stafford project page was found. The documented project cited here is the September 20, 2026 article about a Trex Foggy Wharf deck in Gainesville, not Stafford. The article says Loudoun Decks built that Gainesville deck with Trex Enhance in Foggy Wharf, matching fascia, a Foggy Wharf cocktail rail top, and Trex Enhance Classic Black-on-Black railings."
  },
  {
    "q": "How do I contact Loudoun Decks about a Stafford deck?",
    "a": "Stafford is listed by name under Stafford County on the areas page. Loudoun Decks serves Loudoun, Fairfax, and Prince William Counties, plus Arlington and Stafford. The office is in Centreville. Loudoun Decks LLC, 13704 Winding Oak Cir, Centreville, VA 20121. Phone (571) 655-7207. Email office@ldndecks.com. Free consultations and estimates are available for homeowners in the service area. The contact page says the team calls back within 1 business day."
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

export default function StaffordDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Stafford" url={PAGE_URL} description={PAGE_DESCRIPTION} />
      <WebPageSchema
        dateModified="2026-11-03"
        url={PAGE_URL}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        speakable
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck builder in Stafford, VA</h1>
          <p data-speakable="true" style={{ color: '#ccc', fontSize: '1.1rem' }}>{PAGE_DESCRIPTION}</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Virginia Class A contractor, DPOR license #2705191673. Office: 13704 Winding Oak Cir, Centreville, VA 20121.</p>
        </div>
      </section>
      <CityLeadFormSection
        city="Stafford"
        county="Stafford County"
        service="deck replacement, composite deck, or screened porch"
      />
      <GeoAnswerBlock
        question="Who builds decks in Stafford, VA?"
        answer={faqs[0].a}
        facts={[faqs[1].a]}
        links={[
          { href: '/get-estimate', label: "Request a Stafford estimate" },
          { href: "/blog/trex-foggy-wharf-deck-gainesville-va", label: "Trex Foggy Wharf Deck in Gainesville, VA" },
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img32.jpeg"
              alt="Deck photo on the Loudoun Decks Stafford, VA page"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Planning a deck in Stafford</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[0].a}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>{faqs[1].a}</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Services in Stafford</h2>
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
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"The homepage permit table has no Stafford County row, so this page gives no timeline. Stafford County requirements are confirmed for each project, and Loudoun Decks handles the submission."}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Homepage permit table</Link>
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>A documented project</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[4].a}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            <Link href="/blog/trex-foggy-wharf-deck-gainesville-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Trex Foggy Wharf Deck in Gainesville, VA"}</Link>
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Service area</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"Stafford is listed by name under Stafford County on the areas page. Loudoun Decks serves Loudoun, Fairfax, and Prince William Counties, plus Arlington and Stafford. The office is in Centreville."}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link key="/deck-builder-woodbridge-va" href="/deck-builder-woodbridge-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Woodbridge</Link>
            <Link key="/deck-builder-manassas-va" href="/deck-builder-manassas-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Manassas</Link>
            <Link key="/deck-builder-gainesville-va" href="/deck-builder-gainesville-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Gainesville</Link>
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
              <li key="/blog/trex-foggy-wharf-deck-gainesville-va" style={{ marginBottom: '0.5rem' }}><Link href="/blog/trex-foggy-wharf-deck-gainesville-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Gainesville Trex Foggy Wharf article"}</Link></li>
              <li key="/near-you/stafford-county" style={{ marginBottom: '0.5rem' }}><Link href="/near-you/stafford-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Stafford County deck builder hub"}</Link></li>
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
          <GoogleMapEmbed city="Stafford" />
        </div>
      </section>
      <SimpleCTA title="Request a Stafford deck estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Stafford, VA" lastUpdated="2026-11-03" />
      <ContactHome
        pageContext={{
          city: "Stafford",
          county: "Stafford County",
          service: "Stafford deck replacement, composite deck, or screened porch",
          pageType: 'local_city_landing_page',
        }}
      />
    </>
  );
}
