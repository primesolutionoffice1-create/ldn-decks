import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { educationArticles } from '@/lib/educationData';
import { buildMetadata } from '@/lib/seo';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesHome from '@/components/ServicesHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import CallLink from '@/components/CallLink';
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

export default async function SingleEducationPage({ params }) {
  const resolvedParams = await params;
  const article = educationArticles.find(p => p.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content.split('\n\n');

  const articleDate = new Date(article.date);
  const today = new Date();
  const clampedDate = articleDate > today ? today : articleDate;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://ldndecks.com/education/${article.slug}#article`,
    "isPartOf": { "@id": "https://ldndecks.com/#website" },
    "headline": article.title,
    "image": [`https://ldndecks.com${article.image}`],
    "datePublished": clampedDate.toISOString(),
    "dateModified": clampedDate.toISOString(),
    "author": [{
      "@type": article.author && article.author.toLowerCase().includes('team') ? "Organization" : "Person",
      "name": article.author,
      "url": article.author && article.author.toLowerCase().includes('team')
        ? "https://ldndecks.com"
        : "https://ldndecks.com/team"
    }],
    "publisher": {
      "@type": "Organization",
      "@id": "https://ldndecks.com/#organization",
      "name": "Loudoun Decks",
      "url": "https://ldndecks.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ldndecks.com/ldndecks-logo.webp"
      }
    },
    "description": article.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ldndecks.com/education/${article.slug}`
    },
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".leadParagraph", "h1", "h2"]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ldndecks.com/" },
      { "@type": "ListItem", "position": 2, "name": "Education", "item": "https://ldndecks.com/education" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://ldndecks.com/education/${article.slug}` },
    ],
  };

  const faqSchema = article.faq && article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
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
    "publisher": { "@id": "https://ldndecks.com/#organization" },
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
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
       />
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
       />
       {faqSchema && (
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
         />
       )}
       {downloadableResourceSchema && (
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadableResourceSchema) }}
         />
       )}
       {checklistSchema && (
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(checklistSchema) }}
         />
       )}

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
                     <span className={styles.date}>{article.date}</span>
                  </div>
                </div>
             </div>
          </div>
       </div>

       <div className={styles.contentSection}>
          <div className={styles.containerNarrow}>
             <div className={styles.contentBody}>
               <p className={styles.leadParagraph}>{renderInline(article.excerpt, 'lead')}</p>
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

               {paragraphs.map(renderContentBlock)}

               {article.relatedLinks && article.relatedLinks.length > 0 && (
                 <section style={{ marginTop: '44px' }}>
                   <h2 style={{ marginBottom: '20px', color: '#111' }}>Related Stair Safety Resources</h2>
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
                   or visit <Link href="/contact" style={{ color: 'var(--button-color)', fontWeight: 700 }}>ldndecks.com/contact</Link>.
                 </p>
                 <Link href="/contact" className={styles.ctaBtn}>Get a Free Estimate</Link>
               </div>
             </div>
          </div>
       </div>
       <ServicesHome />
       <ServiceAreasGrid />
       <RelatedGuides currentPath={`/education/${article.slug}`} />
    </article>
  );
}
