import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { educationArticles } from '@/lib/educationData';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, FOUNDER_ID, ORG_ID, WEBSITE_ID } from '@/lib/business';
import JsonLd from '@/components/JsonLd';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesHome from '@/components/ServicesHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import CallLink from '@/components/CallLink';
import MidArticleCta from '@/components/MidArticleCta';
import styles from '@/app/blog/[slug]/BlogContent.module.css';

// Pre-render all education articles at build time for proper indexing
export async function generateStaticParams() {
  return educationArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = educationArticles.find(p => p.slug === resolvedParams.slug);
  if (!article) return { title: 'Article Not Found', robots: { index: false, follow: false } };
  const base = buildMetadata({
    path: `/education/${article.slug}`,
    title: article.metaTitle || `${article.title} | Loudoun Decks Education`,
    description: article.metaDescription || article.excerpt,
    image: article.image,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
    },
  };
}

function renderInline(text, keyPrefix = 'i') {
  const nodes = [];
  let cursor = 0;
  const linkBoldRegex = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let match;
  let n = 0;
  while ((match = linkBoldRegex.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }
    if (match[1]) {
      nodes.push(<strong key={`${keyPrefix}-b-${n++}`}>{match[2]}</strong>);
    } else if (match[3]) {
      const href = match[5];
      const label = match[4];
      if (href.startsWith('/')) {
        nodes.push(<Link key={`${keyPrefix}-l-${n++}`} href={href}>{label}</Link>);
      } else {
        nodes.push(
          <a key={`${keyPrefix}-a-${n++}`} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
        );
      }
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function renderContentBlock(para, idx) {
  if (para.startsWith('## ')) {
    return <h2 key={idx} style={{ marginTop: '40px', marginBottom: '20px', color: '#111' }}>{para.replace('## ', '')}</h2>;
  }
  if (para.startsWith('### ')) {
    return <h3 key={idx} style={{ marginTop: '30px', marginBottom: '15px', color: '#222' }}>{para.replace('### ', '')}</h3>;
  }

  const lines = para.split('\n').filter(Boolean);
  if (lines.length > 1 && lines.every(line => line.startsWith('- '))) {
    return (
      <ul key={idx} style={{ paddingLeft: '1.35rem', margin: '0 0 24px' }}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex} style={{ marginBottom: '0.55rem' }}>
            {renderInline(line.replace(/^- /, ''), `li${idx}-${lineIndex}`)}
          </li>
        ))}
      </ul>
    );
  }

  return <p key={idx}>{renderInline(para, `p${idx}`)}</p>;
}

function buildArticleAuthor(article) {
  const authorName = article.author || BUSINESS.name;

  if (authorName.toLowerCase().includes('team')) {
    return {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: BUSINESS.name,
      url: BUSINESS.url,
    };
  }

  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: BUSINESS.founder.name,
    jobTitle: BUSINESS.founder.jobTitle,
    worksFor: { '@id': ORG_ID },
    knowsAbout: BUSINESS.founder.knowsAbout,
  };
}

function buildArticleSchema(article, clampedDate, clampedModifiedDate) {
  const articleUrl = `${BUSINESS.url}/education/${article.slug}`;
  const contentText = [article.excerpt, article.content]
    .filter(Boolean)
    .join(' ')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const relatedMentions = (article.relatedLinks || []).map((item) => ({
    '@type': 'WebPage',
    '@id': `${BUSINESS.url}${item.href}`,
    name: item.label,
    description: item.description,
    url: `${BUSINESS.url}${item.href}`,
  }));
  const quickAnswerParts = (article.answerBlock || []).map((text, index) => ({
    '@type': 'WebPageElement',
    '@id': `${articleUrl}#quick-answer-${index + 1}`,
    name: `Quick answer ${index + 1}`,
    text: text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
    isPartOf: { '@id': `${articleUrl}#article` },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    isPartOf: { '@id': WEBSITE_ID },
    headline: article.title,
    image: [`${BUSINESS.url}${article.image}`],
    datePublished: clampedDate.toISOString(),
    dateModified: clampedModifiedDate.toISOString(),
    author: [buildArticleAuthor(article)],
    publisher: { '@id': ORG_ID },
    description: article.excerpt,
    articleSection: article.category,
    wordCount: contentText.split(/\s+/).filter(Boolean).length,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
      url: articleUrl,
    },
    about: [
      ...(article.tags || []).map((name) => ({ '@type': 'DefinedTerm', name })),
      { '@type': 'Thing', name: 'Northern Virginia deck construction' },
      { '@type': 'Thing', name: 'Deck permits and inspections' },
    ],
    mentions: relatedMentions,
    ...(quickAnswerParts.length > 0 ? { hasPart: quickAnswerParts } : {}),
    citation: (article.sourceLinks || []).map((item) => item.href),
    keywords: article.tags || [],
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable="education-lead"]', '[data-speakable="quick-answer"]'],
    },
  };
}

function hasVisibleModifiedDate(article) {
  return article.dateModified && article.dateModified !== article.date;
}

export default async function SingleEducationPage({ params }) {
  const resolvedParams = await params;
  const article = educationArticles.find(p => p.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content.split('\n\n');

  // Mid-article CTA slot: nearest H2 boundary to the midpoint (see blog
  // template for rationale). Short guides skip it.
  const h2Indexes = paragraphs
    .map((para, i) => (para.startsWith('## ') ? i : -1))
    .filter((i) => i > 0);
  const midCtaIdx = paragraphs.length >= 16 && h2Indexes.length
    ? h2Indexes.reduce((best, i) =>
        Math.abs(i - paragraphs.length / 2) < Math.abs(best - paragraphs.length / 2) ? i : best,
      h2Indexes[0])
    : -1;

  const articleDate = new Date(article.date);
  const articleModifiedDate = new Date(article.dateModified || article.date);
  const today = new Date();
  const clampedDate = articleDate > today ? today : articleDate;
  const clampedModifiedDate = articleModifiedDate > today ? today : articleModifiedDate;

  const articleSchema = buildArticleSchema(article, clampedDate, clampedModifiedDate);

  const faqSchema = article.faq && article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://ldndecks.com/education/${article.slug}#faq`,
    "url": `https://ldndecks.com/education/${article.slug}`,
    "name": `${article.title} FAQs`,
    "isPartOf": { "@id": `${BUSINESS.url}/education/${article.slug}#article` },
    "mainEntity": article.faq.map((item, index) => ({
      "@type": "Question",
      "@id": `https://ldndecks.com/education/${article.slug}#faq-${index + 1}`,
      "name": item.q,
      "isPartOf": { "@id": `${BUSINESS.url}/education/${article.slug}#faq` },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  } : null;

  const downloadableResourceSchema = article.download ? {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "@id": `https://ldndecks.com${article.download.href}#document`,
    "name": article.download.title,
    "description": article.download.description,
    "encodingFormat": "application/pdf",
    "contentUrl": `https://ldndecks.com${article.download.href}`,
    "url": `https://ldndecks.com${article.download.href}`,
    "isAccessibleForFree": true,
    "publisher": { "@id": ORG_ID },
    "about": article.tags || [],
  } : null;

  const checklistSchema = article.checklistItems ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `https://ldndecks.com/education/${article.slug}#checklist`,
    "name": article.checklistName || article.title,
    "itemListElement": article.checklistItems.map((name, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": name,
    })),
  } : null;

  return (
    <article className={styles.articlePage}>
       <JsonLd data={articleSchema} />
       {faqSchema && <JsonLd data={faqSchema} />}
       {downloadableResourceSchema && <JsonLd data={downloadableResourceSchema} />}
       {checklistSchema && <JsonLd data={checklistSchema} />}

       <div className={styles.heroSection}>
          <div className={styles.imgWrapper}>
             <Image src={article.image} alt={article.title} fill className={styles.heroImg} priority sizes="100vw" />
             <div className={styles.imgOverlay}>
                <div className={styles.containerLarge}>
                  <Link href="/education" className={styles.backLink}>&larr; Back to Education Center</Link>
                  <h1 className={styles.title}>{article.title}</h1>
                  <div className={styles.meta}>
                     <span className={styles.author}>By {article.author}</span>
                     <span className={styles.divider}>•</span>
                     <span className={styles.date}>Published {article.date}</span>
                     {hasVisibleModifiedDate(article) && (
                       <>
                         <span className={styles.divider}>•</span>
                         <span className={styles.date}>Updated {article.dateModified}</span>
                       </>
                     )}
                  </div>
                </div>
             </div>
          </div>
       </div>

       <div className={styles.contentSection}>
          <div className={styles.containerNarrow}>
             <div className={styles.contentBody}>
               <p className={styles.leadParagraph} data-speakable="education-lead">{renderInline(article.excerpt, 'lead')}</p>
               {article.answerBlock && (
                 <section
                   data-speakable="quick-answer"
                   style={{
                     margin: '28px 0',
                     padding: '1.25rem',
                     borderLeft: '4px solid var(--button-color, #d14817)',
                     background: '#fff7f3',
                   }}
                 >
                   <h2 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#111' }}>Quick Answer</h2>
                   {article.answerBlock.map((item, answerIndex) => (
                     <p key={answerIndex} style={{ marginBottom: answerIndex === article.answerBlock.length - 1 ? 0 : '0.75rem' }}>
                       {renderInline(item, `answer${answerIndex}`)}
                     </p>
                   ))}
                 </section>
               )}
               {article.sourceLinks && article.sourceLinks.length > 0 && (
                 <section
                   style={{
                     margin: '0 0 32px',
                     padding: '1rem',
                     border: '1px solid #e5e5e5',
                     borderRadius: 8,
                     background: '#fff',
                   }}
                 >
                   <h2 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#111' }}>Source Context</h2>
                   <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                     {article.sourceLinks.map((item) => (
                       <li key={item.href} style={{ marginBottom: '0.4rem' }}>
                         <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                       </li>
                     ))}
                   </ul>
                 </section>
               )}
               {article.download && (
                 <section
                   style={{
                     margin: '32px 0',
                     padding: '1.5rem',
                     border: '1px solid #f0c9b8',
                     borderRadius: 8,
                     background: '#fff7f3',
                   }}
                 >
                   <h2 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#111' }}>{article.download.title}</h2>
                   <p style={{ marginBottom: '1rem' }}>{article.download.description}</p>
                   <a
                     href={article.download.href}
                     download
                     style={{
                       display: 'inline-block',
                       padding: '0.85rem 1.1rem',
                       borderRadius: 6,
                       background: 'var(--button-color, #d14817)',
                       color: '#fff',
                       fontWeight: 700,
                       textDecoration: 'none',
                     }}
                   >
                     Download PDF Checklist
                   </a>
                 </section>
               )}

               {paragraphs.map((para, idx) => (
                 <React.Fragment key={`block-${idx}`}>
                   {idx === midCtaIdx && <MidArticleCta />}
                   {renderContentBlock(para, idx)}
                 </React.Fragment>
               ))}

               {article.relatedLinks && article.relatedLinks.length > 0 && (
                 <section style={{ marginTop: '44px' }}>
                   <h2 style={{ marginBottom: '20px', color: '#111' }}>Related Resources</h2>
                   <div style={{ display: 'grid', gap: '0.85rem' }}>
                     {article.relatedLinks.map((item) => (
                       <Link
                         key={item.href}
                         href={item.href}
                         style={{
                           display: 'block',
                           padding: '1rem',
                           border: '1px solid #e5e5e5',
                           borderRadius: 8,
                           textDecoration: 'none',
                           color: 'inherit',
                           background: '#fff',
                         }}
                       >
                         <strong style={{ color: 'var(--button-color, #d14817)' }}>{item.label}</strong>
                         {item.description && <span style={{ display: 'block', marginTop: '0.35rem', color: '#555' }}>{item.description}</span>}
                       </Link>
                     ))}
                   </div>
                 </section>
               )}

               {article.faq && article.faq.length > 0 && (
                 <section style={{ marginTop: '60px' }}>
                   <h2 style={{ marginBottom: '20px', color: '#111' }}>Frequently Asked Questions</h2>
                   {article.faq.map((item, i) => (
                     <div key={i} style={{ marginBottom: '24px' }}>
                       <h3 style={{ marginBottom: '10px', color: '#222' }}>{item.q}</h3>
                       <p>{renderInline(item.a, `faq${i}`)}</p>
                     </div>
                   ))}
                 </section>
               )}

               {article.disclaimer && (
                 <p style={{ marginTop: '40px', fontSize: '14px', color: '#777', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                   {article.disclaimer}
                 </p>
               )}

               <div className={styles.conclusionBox}>
                 <h3>Plan Your Northern Virginia Deck Project With Loudoun Decks</h3>
                 <p>
                   Get a free, no-pressure consultation from a licensed Northern Virginia deck builder. Call{' '}
                   <CallLink style={{ color: 'var(--button-color)', fontWeight: 700 }} />{' '}
                   or visit <Link href="/get-estimate" style={{ color: 'var(--button-color)', fontWeight: 700 }}>ldndecks.com/get-estimate</Link>.
                 </p>
                 <Link href="/get-estimate" className={styles.ctaBtn}>Get a Free Estimate</Link>
               </div>
             </div>
          </div>
       </div>
       <ServicesHome />
       <ServiceAreasGrid />
       <RelatedGuides currentPath={`/education/${article.slug}`} category="deck-core" />
    </article>
  );
}
