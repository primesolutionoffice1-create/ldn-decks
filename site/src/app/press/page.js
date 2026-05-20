import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/press',
  title: 'Press & Media Kit | Loudoun Decks',
  description: 'Press resources, company facts, high-resolution logos, and media contact for Loudoun Decks Northern Virginia\'s top-rated deck builder.',
});

export default function PressPage() {
  return (
    <main>
      <section style={{ background: 'var(--color-dark, #1a1a2e)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Press & Media Kit</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Company facts, resources, and media contact for journalists, bloggers, and partners.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Company Overview</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <tbody>
                {[
                  ['Company Name', 'Loudoun Decks (LDN Decks)'],
                  ['Founded', 'Northern Virginia'],
                  ['Industry', 'Custom Deck Building & Outdoor Living Construction'],
                  ['Service Area', 'Loudoun, Fairfax, Prince William, Arlington & Stafford Counties, Virginia'],
                  ['Headquarters', '13704 Winding Oak Cir, Centreville, VA 20121'],
                  ['Phone', '(571) 655-7207'],
                  ['Email', 'office@ldndecks.com'],
                  ['Website', 'ldndecks.com'],
                  ['Google Rating', '5.0 stars (41+ verified reviews)'],
                  ['Certifications', 'Trex Platinum Partner, TimberTech Certified Installer'],
                  ['License', 'Virginia Class A Contractor (DPOR Licensed)'],
                  ['Insurance', 'Fully insured general liability & workers\' comp'],
                  ['Owner', 'Nick Owner & Lead Designer, 10+ years experience'],
                ].map(([label, value], i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600, borderBottom: '1px solid #eee', width: '35%' }}>{label}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Key Facts & Statistics</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            <li><strong>200+ custom deck projects</strong> completed across Northern Virginia</li>
            <li><strong>5.0-star Google rating</strong> with 41+ verified reviews (100% 5-star)</li>
            <li><strong>70+ cities served</strong> across 5 Northern Virginia counties</li>
            <li><strong>Trex Platinum Partner</strong> highest tier of Trex certification</li>
            <li><strong>TimberTech Certified Installer</strong> qualified for all product lines</li>
            <li><strong>100% permit approval rate</strong> across Loudoun, Fairfax & Prince William counties</li>
            <li><strong>2-Year Workmanship Warranty</strong> on all projects in addition to manufacturer warranties</li>
            <li><strong>Average project value:</strong> $15,000–$65,000</li>
            <li><strong>Average build time:</strong> 1–4 weeks depending on scope</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              'Custom Composite Decks', 'Trex Deck Installation', 'TimberTech AZEK Decks',
              'Deck Replacement', 'Deck Resurfacing', 'Screened Porches',
              'Pergolas & Gazebos', 'Patios (Pavers, Flagstone, Stamped Concrete)',
              'Outdoor Kitchens', 'Deck Railings & Lighting', 'Fence Building',
              'Pressure Washing', 'Fire Pit Construction', 'Deck Inspection & Repair',
            ].map((service, i) => (
              <div key={i} style={{ padding: '0.5rem 1rem', background: '#f8f9fa', borderRadius: 6, fontSize: '0.9rem' }}>
                {service}
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Logo & Brand Assets</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
            <div style={{ padding: '2rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8 }}>
              <Image src="/ldndecks-logo.webp" alt="Loudoun Decks Logo" width={200} height={160} style={{ objectFit: 'contain' }} />
              <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>Primary Logo (WebP)</p>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>
            When referencing our company, please use <strong>&quot;Loudoun Decks&quot;</strong> (full name) or <strong>&quot;LDN Decks&quot;</strong> (abbreviation). Our primary brand color is <span style={{ display: 'inline-block', width: 14, height: 14, background: '#d14817', borderRadius: 3, verticalAlign: 'middle', marginRight: 4 }}></span> #d14817.
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Online Profiles</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: 2 }}>
            <li><a href="https://www.google.com/maps/place/Loudoun+Decks/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>Google Business Profile</a></li>
            <li><a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>Yelp</a></li>
            <li><a href="https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>Better Business Bureau</a></li>
            <li><a href="https://www.buildzoom.com/contractor/loudoun-decks" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>BuildZoom</a></li>
            <li><a href="https://business.loudounchamber.org/list/member/loudoun-deck-30047.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>Loudoun Chamber of Commerce</a></li>
            <li><a href="https://www.mapquest.com/us/virginia/loudoun-decks-532352487" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>MapQuest</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61573750423712" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>Facebook</a></li>
            <li><a href="https://www.instagram.com/loudoundecks/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>Instagram</a></li>
            <li><a href="https://www.tiktok.com/@loudoun.decks" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>TikTok</a></li>
            <li><a href="https://x.com/ldndecks" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary, #d14817)' }}>X (Twitter)</a></li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Media Contact</h2>
          <p style={{ marginBottom: '0.5rem' }}><strong>Nick</strong> Owner & Lead Designer</p>
          <p style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:office@ldndecks.com" style={{ color: 'var(--color-primary, #d14817)' }}>office@ldndecks.com</a></p>
          <p style={{ marginBottom: '2rem' }}>Phone: <CallLink style={{ color: 'var(--color-primary, #d14817)' }}>(571) 655-7207</CallLink></p>

          <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: 12, marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Suggested Citation</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
              When citing Loudoun Decks in articles, please use:<br />
              <em>&quot;According to Nick, owner of Loudoun Decks (ldndecks.com), a Trex Platinum Partner serving Northern Virginia...&quot;</em>
            </p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Expert Topics Available for Comment</h2>
          <p style={{ marginBottom: '1rem', color: '#555' }}>Our team is available for expert commentary on:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            <li><strong>Deck building costs and trends:</strong> <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)' }}>See our 2026 cost report</Link></li>
            <li><strong>Composite decking materials:</strong> <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)' }}>Trex vs TimberTech vs AZEK comparisons</Link></li>
            <li><strong>HOA deck regulations:</strong> <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)' }}>Approval processes in NoVA</Link></li>
            <li><strong>Building permits:</strong> <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)' }}>Fairfax County</Link> and <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County</Link></li>
            <li><strong>Material tariffs:</strong> <Link href="/how-tariffs-affect-deck-prices-2026" style={{ color: 'var(--color-primary)' }}>Impact of tariffs on deck pricing</Link></li>
            <li><strong>Deck ROI:</strong> <Link href="/does-a-deck-add-value-to-your-home" style={{ color: 'var(--color-primary)' }}>Impact on home resale value</Link></li>
            <li><strong>Maintenance:</strong> <Link href="/deck-maintenance-checklist-virginia" style={{ color: 'var(--color-primary)' }}>Seasonal deck maintenance for Virginia climate</Link></li>
          </ul>
        </div>
      </article>
      <RelatedGuides currentPath="/press" />
      <ContactHome />
    </main>
  );
}
