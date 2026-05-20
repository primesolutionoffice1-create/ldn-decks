"use client";
import React, { useState, useId, useEffect, useMemo } from 'react';
import JsonLd from './JsonLd';
import styles from './ServicesFAQ.module.css';

// -----------------------------------------------------------------------------
// Default fallback FAQs — used when a page mounts <ServicesFAQ /> with no
// faqs prop. Production pages should always pass page-specific faqs so the
// FAQPage schema reflects the page's actual intent and AI extraction quality.
// -----------------------------------------------------------------------------
const defaultFaqData = [
  {
    q: "What services does Loudoun Decks offer?",
    a: "We provide custom deck construction, deck resurfacing, patios, porches, and pergolas or gazebos."
  },
  {
    q: "Do you work on residential projects only?",
    a: "Yes. Loudoun Decks focuses on residential outdoor living projects."
  },
  {
    q: "What areas do you serve?",
    a: "We serve homeowners in Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer free consultations to discuss outdoor living projects."
  }
];

// -----------------------------------------------------------------------------
// sanitizeAnswerText — JSON-LD acceptedAnswer.text MUST be plain text.
// Visual UI may carry markup, line breaks, or entities; the schema must not.
// Strips HTML tags, decodes the most common HTML entities, and collapses
// whitespace. Anything else is fine to ignore — Schema.org parsers tolerate
// stray characters, but reject embedded HTML in some contexts.
// -----------------------------------------------------------------------------
function sanitizeAnswerText(input) {
  if (input == null) return '';
  const str = String(input);
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/\s+/g, ' ')
    .trim();
}

// -----------------------------------------------------------------------------
// buildFaqSchema — assembles a single FAQPage with stable @id references when
// canonicalUrl is provided. Stable @ids matter because downstream entity
// systems (Google's knowledge graph, AI Overviews) treat the @id as a
// persistent identifier across crawls. Anchoring on canonicalUrl#faq and
// canonicalUrl#faq-N guarantees no collisions across pages.
// -----------------------------------------------------------------------------
function buildFaqSchema({ faqs, canonicalUrl, withSpeakable }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(canonicalUrl ? { "@id": `${canonicalUrl}#faq` } : {}),
    "mainEntity": faqs.map((item, idx) => ({
      "@type": "Question",
      ...(canonicalUrl ? { "@id": `${canonicalUrl}#faq-${idx + 1}` } : {}),
      "name": sanitizeAnswerText(item.q),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": sanitizeAnswerText(item.a),
      },
    })),
  };
  if (withSpeakable) {
    schema.speakable = {
      "@type": "SpeakableSpecification",
      "cssSelector": [".faq-answer"],
    };
  }
  return schema;
}

/**
 * ServicesFAQ — accordion UI + centralized FAQPage JSON-LD emitter.
 *
 * Props:
 *   title        — Accordion section heading (UI only).
 *   faqs         — [{ q, a }, …]. If empty/invalid, the component renders
 *                  nothing and emits no schema.
 *   withSchema   — Default true. Set to false when the host page mounts a
 *                  custom page-level FAQPage block; mounting both creates
 *                  duplicate FAQPage entities, which suppresses Google rich-
 *                  result eligibility.
 *   canonicalUrl — Absolute URL of the page (no trailing slash). Required
 *                  for stable @id references (canonicalUrl#faq, #faq-N).
 *   withSpeakable — Default false. Adds SpeakableSpecification when true.
 */
export default function ServicesFAQ({
  title = "Services FAQs",
  faqs = defaultFaqData,
  withSchema = true,
  canonicalUrl,
  withSpeakable = false,
}) {
  // Defensive filter: drop malformed entries before render or schema emission.
  const safeFaqs = useMemo(() => (
    Array.isArray(faqs)
      ? faqs.filter((f) => f && typeof f.q === 'string' && typeof f.a === 'string' && f.q.trim() && f.a.trim())
      : []
  ), [faqs]);

  const [openIndex, setOpenIndex] = useState(0);
  // useId yields a deterministic SSR-safe ID base shared between server and
  // client renders, so accordion aria-controls / aria-labelledby targets
  // resolve consistently across hydration.
  const baseId = useId();

  // Dev-only validation. Surfaces issues that hurt SEO / AI extraction
  // without affecting production output. Tree-shaken in production builds
  // because Next.js inlines process.env.NODE_ENV.
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;
    if (safeFaqs.length === 0) return;
    if (withSchema && !canonicalUrl) {
      console.warn('[ServicesFAQ] withSchema=true but canonicalUrl is missing — FAQPage @id will be omitted. Pass canonicalUrl for stable entity-graph IDs.');
    }
    const seen = new Map();
    safeFaqs.forEach((item, idx) => {
      const cleanA = sanitizeAnswerText(item.a);
      if (cleanA.length < 120) {
        console.warn(`[ServicesFAQ] FAQ #${idx + 1} answer is short (${cleanA.length} chars). Recommend ≥120 chars for AI extraction quality. Q: "${item.q}"`);
      }
      const key = sanitizeAnswerText(item.q).toLowerCase();
      if (seen.has(key)) {
        console.warn(`[ServicesFAQ] Duplicate question detected at #${idx + 1} (also #${seen.get(key) + 1}): "${item.q}"`);
      } else {
        seen.set(key, idx);
      }
    });
  }, [safeFaqs, canonicalUrl, withSchema]);

  // No-op render when there's nothing to show. Prevents empty section + empty
  // FAQPage schema (which Google flags as invalid).
  if (safeFaqs.length === 0) return null;

  const toggleAccordion = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  // withSchema gate exists to prevent duplicate FAQPage entities when a host
  // page already injects its own page-level FAQ JSON-LD.
  const faqSchema = withSchema
    ? buildFaqSchema({ faqs: safeFaqs, canonicalUrl, withSpeakable })
    : null;

  return (
    <section className={styles.faqSection}>
      {faqSchema && <JsonLd data={faqSchema} />}
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.accordionContainer}>
          {safeFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const btnId = `${baseId}-q-${idx}`;
            const panelId = `${baseId}-a-${idx}`;
            return (
              <div key={btnId} className={styles.accordionItem}>
                <button
                  id={btnId}
                  type="button"
                  className={styles.accordionBtn}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  aria-hidden={!isOpen}
                  className={`${styles.accordionContent} ${isOpen ? styles.open : ''} faq-answer`}
                >
                  <div className={styles.answerText}>{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
