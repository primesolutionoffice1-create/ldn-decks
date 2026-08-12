import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import { buildMetadata } from '@/lib/seo';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesHome from '@/components/ServicesHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import CallLink from '@/components/CallLink';
import NamedAuthor from '@/components/NamedAuthor';
import MidArticleCta from '@/components/MidArticleCta';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, FOUNDER_ID, ORG_ID, WEBSITE_ID } from '@/lib/business';
import styles from './BlogContent.module.css';

// Pre-render all blog posts at build time for proper indexing
export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Post Not Found', robots: { index: false, follow: false } };
  const base = buildMetadata({
    path: `/blog/${post.slug}`,
    title: post.metaTitle || `${post.title} | Loudoun Decks`,
    description: post.metaDescription || post.excerpt,
    image: post.image,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
    },
  };
}

// Lightweight inline renderer: handles **bold** and [label](url) without
// pulling in a markdown lib. Anchors that begin with "/" are routed through
// next/link; external links render as plain anchors.
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

function parseMarkdownTable(block) {
  const rows = block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (rows.length < 3 || !rows[0].startsWith('|') || !/^\|?[\s:|\-]+\|?$/.test(rows[1])) {
    return null;
  }

  const toCells = (line) => line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
  const headers = toCells(rows[0]);
  const bodyRows = rows.slice(2).map(toCells);

  if (!headers.length || bodyRows.some((row) => row.length !== headers.length)) {
    return null;
  }

  return { headers, bodyRows };
}

function buildArticleAuthor(post) {
  const authorName = post.author || BUSINESS.name;

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
    alternateName: 'Nick',
    url: `${BUSINESS.url}/team`,
    jobTitle: BUSINESS.founder.jobTitle,
    worksFor: { '@id': ORG_ID },
    knowsAbout: BUSINESS.founder.knowsAbout,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: BUSINESS.founder.hasCredential,
      credentialCategory: 'license',
    },
  };
}

function extractInternalMentions(content) {
  const seen = new Set();
  const mentions = [];
  const linkRegex = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(content || '')) !== null) {
    const [, label, href] = match;
    if (seen.has(href)) continue;
    seen.add(href);
    mentions.push({
      '@type': 'WebPage',
      '@id': `${BUSINESS.url}${href}`,
      name: label,
      url: `${BUSINESS.url}${href}`,
    });
  }

  return mentions;
}

function buildBlogPostingSchema(post, clampedDate, clampedModifiedDate) {
  const postUrl = `${BUSINESS.url}/blog/${post.slug}`;
  const terms = [
    ...(post.category ? [post.category] : []),
    ...(post.tags || []),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    isPartOf: { '@id': WEBSITE_ID },
    headline: post.title,
    image: [`${BUSINESS.url}${post.image}`],
    datePublished: clampedDate.toISOString(),
    dateModified: clampedModifiedDate.toISOString(),
    author: [buildArticleAuthor(post)],
    publisher: { '@id': ORG_ID },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
      url: postUrl,
    },
    about: [
      ...terms.map((name) => ({ '@type': 'DefinedTerm', name })),
      { '@type': 'Thing', name: 'Northern Virginia deck construction' },
      { '@type': 'Thing', name: 'Deck planning and outdoor living' },
    ],
    mentions: extractInternalMentions(post.content),
    ...(post.sourceLinks && post.sourceLinks.length
      ? { citation: post.sourceLinks.map((item) => item.href) }
      : {}),
    keywords: terms,
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable]', 'h1', 'h2'],
    },
  };
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Pre-split the content by double newline to render paragraphs cleanly
  const paragraphs = post.content.split('\n\n');

  // Mid-article CTA slot: the H2 boundary nearest the article midpoint, so
  // the aside lands between sections instead of splitting one. Short posts
  // (under 16 blocks) skip it — the conclusionBox is close enough there.
  const h2Indexes = paragraphs
    .map((para, i) => (para.startsWith('## ') ? i : -1))
    .filter((i) => i > 0);
  const midCtaIdx = paragraphs.length >= 16 && h2Indexes.length
    ? h2Indexes.reduce((best, i) =>
        Math.abs(i - paragraphs.length / 2) < Math.abs(best - paragraphs.length / 2) ? i : best,
      h2Indexes[0])
    : -1;

  const postDate = new Date(post.date);
  const postModifiedDate = new Date(post.dateModified || post.date);
  const today = new Date();
  const clampedDate = postDate > today ? today : postDate;
  const clampedModifiedDate = postModifiedDate > today ? today : postModifiedDate;

  const articleSchema = buildBlogPostingSchema(post, clampedDate, clampedModifiedDate);

  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        // Strip basic markdown out of the answer text for the schema payload
        "text": item.a.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  } : null;

  return (
    <article className={styles.articlePage}>
       <JsonLd data={articleSchema} />
       {faqSchema && <JsonLd data={faqSchema} />}

       {/* Hero Image Block */}
       <div className={styles.heroSection}>
          <div className={styles.imgWrapper}>
             <Image
               src={post.image}
               alt={post.title}
               fill
               className={styles.heroImg}
               priority
               quality={70}
               sizes="100vw"
               style={post.imagePosition ? { objectPosition: post.imagePosition } : undefined}
             />
             <div className={styles.imgOverlay}>
                <div className={styles.containerLarge}>
                  <Link href="/blog" className={styles.backLink}>&larr; Back to News</Link>
                  <h1 className={styles.title}>{post.title}</h1>
                  <div className={styles.meta}>
                     <span className={styles.author}>By {post.author}</span>
                     <span className={styles.divider}>•</span>
                     <span className={styles.date}>{post.date}</span>
                  </div>
                </div>
             </div>
          </div>
       </div>

       {/* Article Content Block */}
       <div className={styles.contentSection}>
          <div className={styles.containerNarrow}>
             <div className={styles.contentBody}>
               <p className={styles.leadParagraph} data-speakable>{renderInline(post.excerpt, 'lead')}</p>
               {paragraphs.map((para, idx) => {
                 if (para.startsWith('## ')) {
                   return (
                     <React.Fragment key={idx}>
                       {idx === midCtaIdx && <MidArticleCta />}
                       <h2 style={{ marginTop: '40px', marginBottom: '20px', color: '#111' }}>{para.replace('## ', '')}</h2>
                     </React.Fragment>
                   );
                 }
                 if (para.startsWith('### ')) {
                   return <h3 key={idx} style={{ marginTop: '30px', marginBottom: '15px', color: '#222' }}>{para.replace('### ', '')}</h3>;
                 }
                 const table = parseMarkdownTable(para);
                 if (table) {
                   return (
                     <div key={idx} style={{ overflowX: 'auto', margin: '32px 0' }}>
                       <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e5e7eb', fontSize: '0.95rem' }}>
                         <thead>
                           <tr>
                             {table.headers.map((header, cellIdx) => (
                               <th
                                 key={cellIdx}
                                 style={{
                                   textAlign: 'left',
                                   padding: '12px',
                                   borderBottom: '2px solid #d1d5db',
                                   background: '#f9fafb',
                                   color: '#111827',
                                 }}
                               >
                                 {renderInline(header, `t${idx}-h${cellIdx}`)}
                               </th>
                             ))}
                           </tr>
                         </thead>
                         <tbody>
                           {table.bodyRows.map((row, rowIdx) => (
                             <tr key={rowIdx}>
                               {row.map((cell, cellIdx) => (
                                 <td
                                   key={cellIdx}
                                   style={{
                                     padding: '12px',
                                     borderTop: '1px solid #e5e7eb',
                                     verticalAlign: 'top',
                                   }}
                                 >
                                   {renderInline(cell, `t${idx}-r${rowIdx}-c${cellIdx}`)}
                                 </td>
                               ))}
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   );
                 }
                 // Inline image block: a paragraph that is just ![alt](src) renders as an
                 // illustration (diagram / infographic). Square dims because the current
                 // diagram set is 1024x1024; auto height keeps non-square images fluid.
                 const imageOnly = para.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
                 if (imageOnly) {
                   const [, alt, src] = imageOnly;
                   return (
                     <figure key={idx} style={{ margin: '40px auto', maxWidth: '720px' }}>
                       <Image
                         src={src}
                         alt={alt}
                         width={1024}
                         height={1024}
                         style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                         sizes="(max-width: 768px) 100vw, 720px"
                       />
                       {alt && (
                         <figcaption style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666', textAlign: 'center', fontStyle: 'italic' }}>
                           {alt}
                         </figcaption>
                       )}
                     </figure>
                   );
                 }
                 return <p key={idx}>{renderInline(para, `p${idx}`)}</p>;
               })}

               {post.faq && post.faq.length > 0 && (
                 <section style={{ marginTop: '60px' }}>
                   <h2 style={{ marginBottom: '20px', color: '#111' }}>Frequently Asked Questions</h2>
                   {post.faq.map((item, i) => (
                     <div key={i} style={{ marginBottom: '24px' }}>
                       <h3 style={{ marginBottom: '10px', color: '#222' }}>{item.q}</h3>
                       <p>{renderInline(item.a, `faq${i}`)}</p>
                     </div>
                   ))}
                 </section>
               )}

               {post.disclaimer && (
                 <p style={{ marginTop: '40px', fontSize: '14px', color: '#777', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                   {post.disclaimer}
                 </p>
               )}

               <div style={{ marginTop: '40px' }}>
                 <NamedAuthor context="Northern Virginia" lastUpdated={post.date} />
               </div>

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
       <RelatedGuides currentPath={`/blog/${post.slug}`} category="blog-commercial" />
    </article>
  );
}
