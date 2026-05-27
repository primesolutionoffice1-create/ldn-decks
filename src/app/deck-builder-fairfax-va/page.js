import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/deck-builder-fairfax-va',
  title: 'Deck Contractor Fairfax VA | Class A Licensed | Loudoun Decks',
  description: 'Licensed Virginia Class A deck contractor in Fairfax, VA. Trex Platinum Partner serving Mosby Woods, Country Club Hills, Fair Lakes, Mantua, Fairfax Station. City of Fairfax + County permits handled.',
  image: '/images/img37.jpeg',
});

const fairfaxFAQs = [
  {
    q: "Do you build decks in Mosby Woods or Country Club Hills?",
    a: "Yes. Mosby Woods and Country Club Hills are two of the more frequent City of Fairfax neighborhoods we work in. Both have active HOAs with specific deck submission requirements, and we prepare the architectural review packet, color samples and elevation drawings each board expects."
  },
  {
    q: "City of Fairfax or Fairfax County permit for my deck?",
    a: "It depends on your exact address. The City of Fairfax is an independent jurisdiction and runs its own building department; Fairfax County runs a separate, larger department. The 22030, 22031 and 22032 zip codes overlap both jurisdictions. We verify which one covers your parcel before we draw plans."
  },
  {
    q: "How long does the Fairfax County deck permit process take?",
    a: "Fairfax County's Building Development Division currently averages 3 to 5 weeks for residential deck plan review, with structural drawings, ledger attachment specifications and setback calculations required up front. The City of Fairfax tends to run faster at 2 to 3 weeks because it's a smaller department with less queue depth."
  },
  {
    q: "What's the typical cost for a composite deck in Fairfax?",
    a: "Most Fairfax composite deck builds land between $25,000 and $50,000 for a 350 to 500 sqft footprint. Trex Enhance Naturals projects start near the bottom of that range, and TimberTech AZEK Vintage with cable rail and integrated lighting commonly runs to the top end."
  },
  {
    q: "Do you replace old wood decks in Fairfax's 1950s-70s neighborhoods?",
    a: "Yes, this is a large share of our Fairfax workload. Mantua, Mosby Woods, Country Club Hills and the older Fairfax Station sections often still have original or first-replacement pressure-treated decks now 20 to 30 years old. We assess the framing, ledger and footings before recommending a resurface or full structural replacement."
  },
  {
    q: "Can you handle the structural drawings Fairfax County requires?",
    a: "Yes. Fairfax County is one of the more demanding deck-permit jurisdictions in Northern Virginia. Our submissions include sealed structural drawings, ledger attachment details with bolt patterns, footing schedules tied to your soils report, and full setback analysis. This is the level of documentation that gets approved on the first round."
  }
];

const fairfaxFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": fairfaxFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const fairfaxServices = [
  { title: 'New Composite Decks', range: 'From $25k', link: '/services/new-decks' },
  { title: 'Deck Resurfacing', range: 'From $15k', link: '/services/deck-resurfacing' },
  { title: 'Screened Porches', range: 'From $28k', link: '/services/porches' },
  { title: 'Pergolas & Gazebos', range: 'From $10k', link: '/services/gazebo-pergola' },
  { title: 'Paver Patios', range: 'From $10k', link: '/services/patios' },
  { title: 'Privacy Fencing', range: 'From $5k', link: '/services/fence' },
];

const fairfaxNeighborhoods = [
  { name: 'Old Town Fairfax', desc: 'Walkable historic core inside the City of Fairfax. Smaller lots and tighter setbacks favor compact 250 to 350 sqft single-level builds, often paired with a screened porch enclosure.' },
  { name: 'Mosby Woods', desc: 'Established mid-century neighborhood with an active HOA and a clear architectural review process. A high concentration of original wood decks here are now 30 plus years old and ready for full replacement.' },
  { name: 'Country Club Hills', desc: 'Mature single-family neighborhood adjacent to Army Navy Country Club. Larger lots and higher-end home values support multi-level Trex Transcend and TimberTech AZEK builds with integrated lighting.' },
  { name: 'Fair Lakes', desc: 'Newer Fairfax County community west of Fairfax City with consistent architectural standards. Composite decks dominate; we see frequent walkout designs off the kitchen onto graded rear yards.' },
  { name: 'Mantua', desc: '1960s and 70s neighborhood inside the Beltway with mature lots, heavy tree cover and a high replacement rate on aging pressure-treated decks. Lighter Trex tones perform best under partial shade here.' },
  { name: 'Fairfax Station & Fairlee', desc: 'Wooded south Fairfax County neighborhoods with larger lots and walkout basement grades. Multi-level decks and deck-plus-screened-porch combinations are the typical request profile.' },
];

export default function FairfaxDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={fairfaxFaqSchema} />
      <LocalBusinessSchema city="Fairfax" url="https://ldndecks.com/deck-builder-fairfax-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-fairfax-va" name="Deck Contractor Fairfax VA | Class A Licensed | Loudoun Decks" description="Licensed Virginia Class A deck contractor in Fairfax, VA. Trex Platinum Partner serving Mosby Woods, Country Club Hills, Fair Lakes, Mantua, Fairfax Station. City of Fairfax + County permits handled." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Contractor in Fairfax, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Virginia Class A licensed deck contractor and Trex Platinum Partner serving the City of Fairfax, Fair Lakes, Mantua and Fairfax Station. Composite and wood deck construction, screened porches, full permit handling.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</strong>
            <p style={{ margin: 0, lineHeight: 1.65 }} data-speakable>A custom composite deck in Fairfax, VA typically costs $25,000 to $50,000 installed. Fairfax County permits run 3 to 5 weeks; City of Fairfax 2 to 3 weeks. Loudoun Decks is a Virginia Class A licensed deck contractor in Fairfax, Trex Platinum Partner and TimberTech Certified Installer, with first-round permit approval on structural deck submissions in both jurisdictions.</p>
          </div>

          <NamedAuthor context="Fairfax County and the City of Fairfax" />

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
            <Image
              src="/images/img37.jpeg"
              alt="Custom Trex composite deck built by Loudoun Decks in Fairfax, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>What to Look For in a Deck Contractor in Fairfax, VA</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A deck contractor working in Fairfax, VA needs three credentials before anything else: a current Virginia Class A contractor license (verifiable at <em>dpor.virginia.gov</em>), full liability and workers&apos; comp insurance, and a track record submitting through both the City of Fairfax Building Department and Fairfax County&apos;s Building Development Division. The two jurisdictions overlap geographically — the 22030, 22031 and 22032 zip codes straddle both — and a contractor who only files in one will guess wrong about a third of the time. We file in both every week, and the manufacturer credentials (Trex Platinum Partner, TimberTech Certified Installer) attached to our company are verifiable on each manufacturer&apos;s installer locator.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Custom Deck Builder Serving Fairfax Homeowners</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Fairfax is two markets stitched together. The City of Fairfax is an independent jurisdiction with its own building department, its own zoning, and its own architectural reviews around Old Town. Fairfax County wraps around the city and runs one of the more rigorous deck-permitting processes in Northern Virginia. Build a deck on the wrong side of Chain Bridge Road and you've filed with the wrong department. We handle this every week, and the first thing we do on any Fairfax project is verify which jurisdiction your parcel actually sits in.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>The other defining feature of the Fairfax market is age. Mantua, Mosby Woods, Country Club Hills and large parts of Fairfax Station were built in the 1950s through 70s, which means a meaningful share of our work here is full structural deck replacement on properties where the original pressure-treated deck is now 25 to 30 years past its design life. These projects need real engineering, not improvisation, and our scope includes the structural drawings, ledger details and footing schedules Fairfax County's reviewers expect.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Trex and TimberTech Composite Decks in Fairfax</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Composite is the right answer for the Fairfax climate, full stop. The freeze-thaw cycles between January and March, the August humidity, and the heavy tree-pollen load through April all conspire against pressure-treated wood inside ten years. Our most-installed boards here are Trex Transcend in Spiced Rum and Lava Rock for clients who want a deeper, richer grain pattern, and Trex Enhance Naturals in Foggy Wharf or Toasted Sand for tree-canopy lots where lighter colors hide leaf staining and stay cooler underfoot.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>For Country Club Hills and Fairfax Station projects where homeowners want the absolute top of the market, we install TimberTech AZEK Vintage. The PVC core is functionally moisture-proof, the grain is the most authentic wood-look on the market, and the warranty is industry-leading. Every Trex and TimberTech deck we build in Fairfax ships with hidden fasteners on every board, butyl-tape ledger flashing, and stainless connectors at every load-critical joint. That's the install standard, not an upcharge.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Deck Replacement and Resurfacing in Fairfax, VA</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The single most common call we get in Fairfax is some version of "my deck is 25 years old and the boards are splintering." That conversation almost always leads to a structural inspection, because at the 20-plus year mark the surface boards are usually telling you the framing has problems too. Bolted ledgers from the 90s frequently lack proper flashing and have water-damaged the rim joist behind them. Footings that met code in 1998 often don't meet current Fairfax County depth requirements.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>If the framing is sound, footings are intact and the ledger detail is safe, we resurface. A Trex Transcend resurface on a 380 sqft Mantua deck typically runs $16,000 to $24,000 and gives you a full new deck experience for two-thirds the cost of teardown. If the framing is past it, we tear down and rebuild from new footings. Full structural replacement on a typical Fairfax project runs $30,000 to $45,000 depending on size, board selection, and railing system. We send photos and a written structural assessment with every quote so you can see what we saw.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Outdoor Living Services in Fairfax</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {fairfaxServices.map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1.1rem', textDecoration: 'none', color: 'inherit', border: '1px solid #ececec' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.35rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Neighborhoods We Serve in Fairfax</h2>
          <div style={{ marginBottom: '2.5rem' }}>
            {fairfaxNeighborhoods.map((n) => (
              <div key={n.name} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #ececec' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>{n.name}</h3>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#444' }}>{n.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Why Homeowners in Fairfax Choose Loudoun Decks</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Two-jurisdiction expertise.</strong> City of Fairfax and Fairfax County are entirely separate building departments with different timelines and review standards. We work in both every week.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Engineered structural drawings.</strong> Fairfax County requires sealed plans with ledger details, bolt schedules and footing depths. Our submission packets clear first-round review.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Replacement specialists.</strong> Two-thirds of our Fairfax workload is deck replacement on aging mid-century homes. We've seen what fails and we know how to rebuild it correctly.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Trex Certified, TimberTech installer.</strong> Full Trex catalog plus TimberTech AZEK Vintage and Pro lines available on every Fairfax quote.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Honest scoping.</strong> If your existing deck can be safely resurfaced, we'll tell you. If it can't, you'll get the photo evidence to understand why.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Permits, HOA and Planning Support in Fairfax</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Fairfax County's Building Development Division is the most documentation-heavy deck-permit jurisdiction in our service area. Standard residential plan review currently runs 3 to 5 weeks, and the county expects sealed structural drawings, ledger attachment specifications with bolt patterns, footing depth schedules tied to soils, beam and joist span tables, and a full setback analysis. We file at this level on every project, which is why our submissions clear first-round review without revision requests.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>The City of Fairfax runs its own building department, separate from the county, and tends to turn around deck permits in 2 to 3 weeks. The smaller queue and dedicated review staff also make for faster revision cycles when they do come up. HOA approvals run in parallel; Mosby Woods, Country Club Hills, Mantua and Fair Lakes each maintain published architectural standards we pre-screen designs against before submission. <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our full Fairfax County deck permit guide</Link>.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Recent Deck Projects Near Fairfax</h2>
          <p style={{ marginBottom: '2.5rem', lineHeight: 1.7 }}>Typical Fairfax projects we help with include 380 to 500 sqft Trex Transcend builds for Mosby Woods and Mantua homeowners replacing original 1990s pressure-treated decks, multi-level walkout deck designs for Fairfax Station and Fairlee homes built into sloped wooded lots with walkout basement grades, and deck-plus-screened-porch combinations for Country Club Hills families wanting bug-free outdoor living from April through October. In Old Town and Fairfax Heights we've also handled smaller compact replacements on tighter setbacks where the new structure has to thread carefully between rear-yard property lines and existing tree protection zones.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Fairfax Deck Builder FAQs</h2>
          {fairfaxFAQs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.7, color: '#444', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}

        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/how-much-does-a-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/how-much-does-a-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
        </ul>
      </section>


      <SimpleCTA title="Build Your Fairfax Deck With a Trex Certified Team" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-fairfax-va" />
      <ContactHome />
    </main>
  );
}
