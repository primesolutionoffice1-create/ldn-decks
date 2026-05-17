import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

const pageUrl = 'https://ldndecks.com/composite-deck-builder-loudoun';

export const metadata = buildMetadata({
  path: '/composite-deck-builder-loudoun',
  title: 'Composite Deck Builder Loudoun County, VA | Loudoun Decks',
  description: 'Premium composite deck builder in Loudoun County, VA. Trex and TimberTech decks, HOA support, permits, replacements, railings, stairs, and free estimates.',
  image: '/images/img10.jpeg',
});

const serviceHighlights = [
  'Trex, TimberTech, AZEK, and Fiberon composite deck systems',
  'Full deck replacement from aging wood to low-maintenance composite',
  'Permit-ready framing, footings, stairs, railings, and code details',
  'HOA-friendly planning for Brambleton, Broadlands, Lansdowne, South Riding, and One Loudoun',
  'Premium railings, lighting, privacy screens, pergolas, and screened porch tie-ins',
  'Clear scope, clean job sites, and a 5-year workmanship warranty on all labor',
];

const communities = [
  ['Ashburn', '/deck-builder-ashburn-va'],
  ['Leesburg', '/deck-builder-leesburg-va'],
  ['Sterling', '/deck-builder-sterling-va'],
  ['Brambleton', '/deck-builder-brambleton-va'],
  ['South Riding', '/deck-builder-south-riding-va'],
  ['Purcellville', '/deck-builder-purcellville-va'],
  ['Herndon', '/deck-builder-herndon-va'],
  ['Chantilly', '/deck-builder-chantilly-va'],
];

const faqItems = [
  {
    q: 'How much does a composite deck cost in Loudoun County?',
    a: 'Most full composite deck projects in Loudoun County start around $15,000 and commonly fall between $25,000 and $50,000+, depending on size, height, stairs, railing type, lighting, demolition, and material line. Premium multi-level outdoor living projects can exceed that range.',
  },
  {
    q: 'Do I need a permit for a composite deck in Loudoun County?',
    a: 'Yes, most new decks and structural deck replacements require a Loudoun County building permit. Loudoun Decks prepares permit-ready plans, coordinates structural details, and helps homeowners move through the county approval process with fewer delays.',
  },
  {
    q: 'Can you help with HOA approval for a composite deck?',
    a: 'Yes. Many Loudoun communities require HOA approval before construction starts. We help with drawings, material information, color guidance, and scope details for communities such as Brambleton, Broadlands, Ashburn Farm, One Loudoun, Lansdowne, South Riding, and Stone Ridge.',
  },
  {
    q: 'Which composite decking brand is best for Loudoun homes?',
    a: 'Trex and TimberTech/AZEK are usually the best fit for homeowners who want long-term durability, strong warranty coverage, and a premium finished look. The right choice depends on budget, heat exposure, color preference, board profile, railing style, and how the deck will be used.',
  },
  {
    q: 'Can you replace an old wood deck with composite decking?',
    a: 'Yes. We regularly replace aging wood decks with composite decking, upgraded framing where needed, safer stairs, modern railings, and lower-maintenance finishes. If the frame is not suitable for resurfacing, we recommend a proper rebuild instead of covering structural problems.',
  },
  {
    q: 'How long does a composite deck build take in Loudoun County?',
    a: 'After permit and HOA approvals are complete, many composite deck builds take about 1 to 3 weeks of active construction. Larger decks, second-story decks, screened porch combinations, lighting, and custom railing packages can take longer.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Composite Deck Builder Loudoun County, VA | Loudoun Decks',
    description: 'Premium composite deck builder serving Loudoun County homeowners with Trex, TimberTech, deck replacement, permits, HOA support, railings, stairs, and outdoor living upgrades.',
    about: { '@id': `${pageUrl}#service` },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ldndecks.com' },
      { '@type': 'ListItem', position: 2, name: 'Composite Decks', item: 'https://ldndecks.com/composite-decks' },
      { '@type': 'ListItem', position: 3, name: 'Composite Deck Builder Loudoun County', item: pageUrl },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://ldndecks.com/#organization',
    name: 'Loudoun Decks',
    alternateName: 'LDN Decks',
    url: 'https://ldndecks.com',
    telephone: '+1-571-655-7207',
    image: 'https://ldndecks.com/ldndecks-logo.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13704 Winding Oak Cir',
      addressLocality: 'Centreville',
      addressRegion: 'VA',
      postalCode: '20121',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Loudoun County, VA' },
      { '@type': 'City', name: 'Ashburn, VA' },
      { '@type': 'City', name: 'Leesburg, VA' },
      { '@type': 'City', name: 'Sterling, VA' },
      { '@type': 'City', name: 'Brambleton, VA' },
      { '@type': 'City', name: 'South Riding, VA' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'Composite Deck Building in Loudoun County, VA',
    serviceType: 'Composite deck construction, deck replacement, and outdoor living construction',
    provider: { '@id': 'https://ldndecks.com/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Loudoun County, VA' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '15000',
      highPrice: '75000',
      offerCount: '100',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  },
];

const S = {
  section: { padding: '72px 20px' },
  container: { maxWidth: 1180, margin: '0 auto' },
  eyebrow: { color: 'var(--color-primary, #d14817)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 13, marginBottom: 12 },
  h2: { fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08, margin: '0 0 18px', color: '#111' },
  p: { fontSize: 18, lineHeight: 1.75, color: '#444', margin: '0 0 18px' },
  card: { background: '#fff', border: '1px solid #e8e2dc', borderRadius: 8, padding: 28, boxShadow: '0 16px 45px rgba(17,17,17,.07)' },
  button: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 48, padding: '0 22px', borderRadius: 6, background: 'var(--color-primary, #d14817)', color: '#fff', fontWeight: 800, textDecoration: 'none' },
  outlineButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 48, padding: '0 22px', borderRadius: 6, border: '1px solid #222', color: '#111', fontWeight: 800, textDecoration: 'none' },
};

export default function CompositeDeckBuilderLoudounPage() {
  return (
    <main>
      {schema.map((item, index) => <JsonLd key={index} data={item} />)}

      <section style={{ padding: '96px 20px 72px', background: '#17130f', color: '#fff' }}>
        <div style={{ ...S.container, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 42, alignItems: 'center' }}>
          <div>
            <p style={{ ...S.eyebrow, color: '#f3b391' }}>Loudoun County Composite Deck Specialist</p>
            <h1 style={{ fontSize: 'clamp(2.7rem, 6vw, 5rem)', lineHeight: 1, margin: '0 0 22px', color: '#fff' }}>
              Composite Deck Builder in Loudoun County, VA
            </h1>
            <p style={{ ...S.p, color: '#f4ede7', fontSize: 20 }}>
              Premium Trex and TimberTech deck design, replacement, and construction for Loudoun homeowners who want a clean, durable outdoor space without the yearly sanding, staining, and repair cycle of wood.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '30px 0 14px' }}>
              <Link href="/get-estimate" style={S.button}>Schedule Free Consultation</Link>
              <a href="tel:+15716557207" style={{ ...S.outlineButton, color: '#fff', borderColor: 'rgba(255,255,255,.55)' }}>Call (571) 655-7207</a>
            </div>
            <p style={{ color: '#cdbfb5', fontSize: 14, margin: 0 }}>Best fit for full deck builds, replacements, and premium outdoor living projects from $15,000+.</p>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,.35)' }}>
            <Image src="/images/img10.jpeg" alt="Composite deck project by Loudoun Decks in Northern Virginia" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff' }}>
        <div style={{ ...S.container, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 38 }}>
          <div>
            <p style={S.eyebrow}>Built for Loudoun homes</p>
            <h2 style={S.h2}>Low-maintenance decks for Ashburn, Leesburg, Sterling, Brambleton, and South Riding</h2>
            <p style={S.p}>
              Composite decking is not just a material upgrade. For Loudoun County homeowners, it is a way to protect a major outdoor investment from humidity, pollen, freeze-thaw movement, harsh sun, and the maintenance fatigue that comes with traditional wood.
            </p>
            <p style={S.p}>
              Loudoun Decks designs and builds complete composite deck projects with the details that matter: permit-ready framing, proper joist spacing, hidden fasteners, clean stair geometry, code-compliant railings, and material selections that match your home instead of fighting it.
            </p>
            <p style={S.p}>
              We are not the cheapest option, and we do not try to be. We are the right fit when you want a finished deck that looks intentional, passes inspections, respects HOA requirements, and still feels solid years after the final walkthrough.
            </p>
          </div>
          <aside style={{ ...S.card, alignSelf: 'start' }}>
            <h2 style={{ fontSize: 28, margin: '0 0 16px' }}>Project Fit</h2>
            <p style={{ ...S.p, fontSize: 16 }}>This page is for homeowners planning a full composite deck build, serious replacement, or outdoor living upgrade.</p>
            <ul style={{ margin: 0, paddingLeft: 20, color: '#333', lineHeight: 1.8 }}>
              <li>Typical projects from $15,000+</li>
              <li>Trex and TimberTech/AZEK options</li>
              <li>Permit and HOA support included</li>
              <li>5-year workmanship warranty on all labor</li>
            </ul>
          </aside>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f7f4ef' }}>
        <div style={S.container}>
          <p style={S.eyebrow}>What we build</p>
          <h2 style={S.h2}>Composite deck construction with the whole system handled</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 18, marginTop: 30 }}>
            {serviceHighlights.map((item) => (
              <div key={item} style={S.card}>
                <p style={{ ...S.p, margin: 0, fontSize: 17 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff' }}>
        <div style={{ ...S.container, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 42, alignItems: 'center' }}>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden' }}>
            <Image src="/images/img21.jpeg" alt="Loudoun County composite deck with stairs and railings" fill sizes="(max-width: 900px) 100vw, 48vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={S.eyebrow}>Trex and TimberTech guidance</p>
            <h2 style={S.h2}>A better material choice starts with how you actually live outside</h2>
            <p style={S.p}>
              Some Loudoun homes need a cooler-feeling board for full sun. Others need a higher-end capstock for entertaining, pets, planters, furniture, and heavy daily use. A townhouse deck in Ashburn is not the same design problem as a second-story deck in Leesburg or a wide entertaining platform in South Riding.
            </p>
            <p style={S.p}>
              We help you compare board lines, color families, railing packages, lighting, fascia, picture framing, and long-term warranty expectations. The goal is not to upsell every option. The goal is to choose the right system once, so you are not rebuilding the same deck twice.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              <Link href="/trex-decks" style={S.outlineButton}>Compare Trex Decks</Link>
              <Link href="/timbertech-decks" style={S.outlineButton}>Explore TimberTech</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#111', color: '#fff' }}>
        <div style={S.container}>
          <p style={{ ...S.eyebrow, color: '#f3b391' }}>Loudoun County planning</p>
          <h2 style={{ ...S.h2, color: '#fff' }}>Permits and HOA details handled before construction gets messy</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginTop: 28 }}>
            {[
              ['Loudoun County permits', 'We prepare the project around structural requirements, footing depth, railing rules, stair geometry, and inspection expectations.'],
              ['HOA submissions', 'We help homeowners organize material colors, drawings, scope descriptions, and design details for community review.'],
              ['Replacement decisions', 'If your existing frame is not safe for resurfacing, we explain why and price the rebuild honestly before work starts.'],
            ].map(([title, text]) => (
              <div key={title} style={{ ...S.card, background: '#1f1a15', borderColor: 'rgba(255,255,255,.12)' }}>
                <h3 style={{ margin: '0 0 12px', color: '#fff', fontSize: 24 }}>{title}</h3>
                <p style={{ ...S.p, color: '#ddd', fontSize: 16, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff' }}>
        <div style={S.container}>
          <p style={S.eyebrow}>Areas served</p>
          <h2 style={S.h2}>Composite deck builder serving Loudoun County communities</h2>
          <p style={S.p}>
            We serve homeowners across Loudoun County and nearby Northern Virginia communities, with special focus on full composite deck builds, deck replacement, screened porch combinations, and premium outdoor living spaces.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
            {communities.map(([name, href]) => (
              <Link key={name} href={href} style={{ ...S.outlineButton, minHeight: 44 }}>{name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f7f4ef' }}>
        <div style={S.container}>
          <p style={S.eyebrow}>Cost context</p>
          <h2 style={S.h2}>What a premium composite deck usually costs in Loudoun County</h2>
          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 8, border: '1px solid #e6ded6' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr style={{ background: '#17130f', color: '#fff' }}>
                  <th style={{ textAlign: 'left', padding: 18 }}>Project Type</th>
                  <th style={{ textAlign: 'left', padding: 18 }}>Typical Range</th>
                  <th style={{ textAlign: 'left', padding: 18 }}>Best Fit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Straightforward composite deck', '$15,000-$30,000+', 'Ground-level or modest raised deck with standard railing.'],
                  ['Deck replacement with stairs/railings', '$25,000-$50,000+', 'Older wood deck removed and rebuilt with composite surfaces.'],
                  ['Premium outdoor living deck', '$50,000-$75,000+', 'Larger layout, upgraded railing, lighting, privacy, pergola, or porch tie-in.'],
                ].map((row) => (
                  <tr key={row[0]} style={{ borderTop: '1px solid #eee' }}>
                    {row.map((cell) => <td key={cell} style={{ padding: 18, color: '#333', lineHeight: 1.55 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, marginTop: 22 }}>
            For detailed pricing, compare this page with our <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary, #d14817)', fontWeight: 800 }}>Northern Virginia composite deck cost guide</Link>.
          </p>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff' }}>
        <div style={S.container}>
          <p style={S.eyebrow}>FAQ</p>
          <h2 style={S.h2}>Composite deck questions from Loudoun County homeowners</h2>
          <div style={{ display: 'grid', gap: 16, marginTop: 28 }}>
            {faqItems.map((item) => (
              <div key={item.q} style={S.card}>
                <h3 style={{ margin: '0 0 10px', fontSize: 22 }}>{item.q}</h3>
                <p style={{ ...S.p, fontSize: 16, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '76px 20px', background: '#17130f', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ ...S.eyebrow, color: '#f3b391' }}>Ready to plan it correctly?</p>
          <h2 style={{ ...S.h2, color: '#fff' }}>Get a free composite deck estimate in Loudoun County</h2>
          <p style={{ ...S.p, color: '#f4ede7' }}>
            Tell us what you want to build, where you live, and whether you are replacing an existing deck. We will help you understand the right material path, realistic budget, and next steps.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
            <Link href="/get-estimate" style={S.button}>Request Free Estimate</Link>
            <a href="tel:+15716557207" style={{ ...S.outlineButton, color: '#fff', borderColor: 'rgba(255,255,255,.55)' }}>Call Now</a>
          </div>
        </div>
      </section>

      <RelatedGuides currentPath="/composite-deck-builder-loudoun" />
      <ContactHome />
    </main>
  );
}
