import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/reviews',
  title: 'Loudoun Decks Reviews | 5.0★ Google Rating | 41+ Reviews',
  description: 'Read what Northern Virginia homeowners say about Loudoun Decks. 5.0★ on Google with 41+ reviews. Real feedback from Ashburn, Leesburg, McLean, Vienna & more.',
});

// Attaches the review list to the single canonical org (@id #organization)
// without redefining the business entity (no @type / name re-declaration).
const reviewSchema = {
  "@context": "https://schema.org",
  "@id": "https://ldndecks.com/#organization",
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Sarah J." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Loudoun Decks built our 400 sqft Trex deck in Ashburn. From design to final walkthrough, everything was professional and on schedule. The crew was respectful, clean, and skilled. Our deck looks amazing and we use it every evening now.", "datePublished": "2026-03-15" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Michael T." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Best contractor experience we've had in 15 years of homeownership. Nick and his team replaced our old wood deck with Trex Transcend in Leesburg. Handled the HOA submission, pulled all permits, and finished a day early. Highly recommend.", "datePublished": "2026-02-28" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Robert & Linda K." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "We had a screened porch built with EZE-Breeze windows in Centreville. The quality of work is outstanding. We've already used it through March evenings with just a space heater. Worth every penny.", "datePublished": "2026-01-20" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Jennifer M." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Loudoun Decks designed and built a beautiful two-level deck for our family. The attention to detail was impressive from the hidden fasteners to the integrated lighting. The permit process was handled entirely by them.", "datePublished": "2025-12-10" },
    { "@type": "Review", "author": { "@type": "Person", "name": "David P." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Had our 12-year-old wood deck resurfaced with TimberTech. The team was efficient, the communication was excellent, and the result looks like a brand new deck. No more annual staining love it.", "datePublished": "2025-11-18" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Amanda S." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "We hired Loudoun Decks for a large project AZEK deck with an outdoor kitchen island. The design process was collaborative, they understood our vision immediately, and the execution was flawless. Our neighbors keep asking who built it.", "datePublished": "2025-10-05" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Chris & Maria R." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Beautiful pergola installation. The team was professional from day one. They suggested lighting options we hadn't considered that completely transformed the space. Great value for the quality delivered.", "datePublished": "2025-09-20" },
    { "@type": "Review", "author": { "@type": "Person", "name": "Tom H." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Got both a new composite deck and privacy fence done in one project. Saved money by bundling, and the timeline was faster than expected. Very happy with the communication throughout.", "datePublished": "2025-08-15" },
  ]
};

const reviews = [
  { name: "Sarah J.", city: "Ashburn", date: "March 2026", rating: 5, project: "400 sqft Trex Transcend Deck", text: "From design to final walkthrough, everything was professional and on schedule. The crew was respectful, clean, and skilled. Our deck looks amazing and we use it every evening now. Couldn't be happier with the result.", platform: "Google" },
  { name: "Michael T.", city: "Leesburg", date: "February 2026", rating: 5, project: "Deck Replacement — Wood to Composite", text: "Best contractor experience we've had in 15 years of homeownership. Nick and his team replaced our old wood deck with Trex Transcend. Handled the HOA submission, pulled all permits, and finished a day early. Highly recommend.", platform: "Google" },
  { name: "Robert & Linda K.", city: "Centreville", date: "January 2026", rating: 5, project: "Screened Porch with EZE-Breeze", text: "We had a screened porch built with EZE-Breeze windows. The quality of work is outstanding. We've already used it through March evenings with just a space heater. Worth every penny.", platform: "Google" },
  { name: "Jennifer M.", city: "Sterling", date: "December 2025", rating: 5, project: "Multi-Level Composite Deck", text: "Loudoun Decks designed and built a beautiful two-level deck for our family. The attention to detail was impressive — from the hidden fasteners to the integrated lighting. The permit process was handled entirely by them.", platform: "Google" },
  { name: "David P.", city: "Reston", date: "November 2025", rating: 5, project: "Deck Resurfacing", text: "Had our 12-year-old wood deck resurfaced with TimberTech. The team was efficient, the communication was excellent, and the result looks like a brand new deck. No more annual staining — love it.", platform: "Google" },
  { name: "Amanda S.", city: "McLean", date: "October 2025", rating: 5, project: "Premium Deck + Outdoor Kitchen", text: "We hired Loudoun Decks for a large project — AZEK deck with an outdoor kitchen island. The design process was collaborative, they understood our vision immediately, and the execution was flawless. Our neighbors keep asking who built it.", platform: "Google" },
  { name: "Chris & Maria R.", city: "Vienna", date: "September 2025", rating: 5, project: "Pergola with Lighting", text: "Beautiful pergola installation. The team was professional from day one. They suggested lighting options we hadn't considered that completely transformed the space. Great value for the quality delivered.", platform: "Google" },
  { name: "Tom H.", city: "Fairfax", date: "August 2025", rating: 5, project: "Fence + Deck Package", text: "Got both a new composite deck and privacy fence done in one project. Saved money by bundling, and the timeline was faster than expected. Very happy with the communication throughout.", platform: "Google" },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Our Clients Say</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>5.0★ on Google with 41+ reviews from Northern Virginia homeowners</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>5.0</p>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>★★★★★</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Google Rating</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>41+</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Verified Reviews</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>100%</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>5-Star Ratings</p>
            </div>
          </div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
            {reviews.map((review, i) => (
              <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>{review.name}</span>
                    <span style={{ color: '#888', marginLeft: '0.5rem', fontSize: '0.9rem' }}>{review.city}, VA &middot; {review.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#f59e0b' }}>★★★★★</span>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>via {review.platform}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{review.project}</p>
                <p style={{ lineHeight: 1.7, color: '#444' }}>&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: 8, padding: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Read All Reviews</h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>See every review on our verified platforms:</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.google.com/maps/search/Loudoun+Decks+Centreville+VA" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Google Reviews</a>
              <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Yelp Reviews</a>
              <a href="https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>BBB Profile</a>
            </div>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Had a Great Experience?</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>If we built your deck, porch, or patio, we&apos;d love to hear about your experience. Your review helps other Northern Virginia homeowners make confident decisions.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="https://www.google.com/maps/search/Loudoun+Decks+Centreville+VA" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Leave a Google Review →</a>
            <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Leave a Yelp Review →</a>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about', 'About Loudoun Decks'],
              ['/about/certifications-and-licenses', 'Our Certifications & Licenses'],
              ['/showcase', 'Project Gallery'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Join 41+ Happy Homeowners" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/reviews" />
      <ContactHome />
    </>
  );
}
