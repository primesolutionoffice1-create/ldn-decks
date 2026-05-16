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
import styles from './BlogContent.module.css';

// Pre-render all blog posts at build time for proper indexing
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Post Not Found', robots: { index: false, follow: false } };
  const base = buildMetadata({
    path: `/blog/${post.slug}`,
    title: post.metaTitle || `${post.title} | Loudoun Decks Expert Insights`,
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

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Pre-split the content by double newline to render paragraphs cleanly
  const paragraphs = post.content.split('\n\n');

    const postDate = new Date(post.date);
    const today = new Date();
    const clampedDate = postDate > today ? today : postDate;

    const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://ldndecks.com/blog/${post.slug}#article`,
    "isPartOf": { "@id": "https://ldndecks.com/#website" },
    "headline": post.title,
    "image": [`https://ldndecks.com${post.image}`],
    "datePublished": clampedDate.toISOString(),
    "dateModified": clampedDate.toISOString(),
    "author": [{
      "@type": post.author && post.author.toLowerCase().includes('team') ? "Organization" : "Person",
      "name": post.author,
      "url": post.author && post.author.toLowerCase().includes('team')
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
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ldndecks.com/blog/${post.slug}`
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
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ldndecks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://ldndecks.com/blog/${post.slug}` },
    ],
  };

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

       {/* Hero Image Block */}
       <div className={styles.heroSection}>
          <div className={styles.imgWrapper}>
             <Image src={post.image} alt={post.title} fill className={styles.heroImg} priority quality={70} sizes="100vw" />
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
               <p className={styles.leadParagraph}>{renderInline(post.excerpt, 'lead')}</p>
               {paragraphs.map((para, idx) => {
                 if (para.startsWith('## ')) {
                   return <h2 key={idx} style={{ marginTop: '40px', marginBottom: '20px', color: '#111' }}>{para.replace('## ', '')}</h2>;
                 }
                 if (para.startsWith('### ')) {
                   return <h3 key={idx} style={{ marginTop: '30px', marginBottom: '15px', color: '#222' }}>{para.replace('### ', '')}</h3>;
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
       <RelatedGuides currentPath={`/blog/${post.slug}`} />
    </article>
  );
}
