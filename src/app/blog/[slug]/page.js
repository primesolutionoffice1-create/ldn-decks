import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import { buildMetadata } from '@/lib/seo';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesHome from '@/components/ServicesHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
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
    title: `${post.title} | Loudoun Decks Expert Insights`,
    description: post.excerpt,
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
    "headline": post.title,
    "image": [`https://ldndecks.com${post.image}`],
    "datePublished": clampedDate.toISOString(),
    "dateModified": clampedDate.toISOString(),
    "author": [{
      "@type": "Organization",
      "name": post.author,
      "url": "https://ldndecks.com"
    }],
    "publisher": {
      "@type": "Organization",
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

  return (
    <article className={styles.articlePage}>
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
       />

       {/* Hero Image Block */}
       <div className={styles.heroSection}>
          <div className={styles.imgWrapper}>
             <Image src={post.image} alt={post.title} fill className={styles.heroImg} priority sizes="100vw" />
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
               <p className={styles.leadParagraph}>{post.excerpt}</p>
               {paragraphs.map((para, idx) => {
                 // Check if it's an H2 or H3 heading
                 if (para.startsWith('## ')) {
                   return <h2 key={idx} style={{ marginTop: '40px', marginBottom: '20px', color: '#111' }}>{para.replace('## ', '')}</h2>
                 }
                 if (para.startsWith('### ')) {
                   return <h3 key={idx} style={{ marginTop: '30px', marginBottom: '15px', color: '#222' }}>{para.replace('### ', '')}</h3>
                 }
                 return <p key={idx}>{para}</p>
               })}
               
               <div className={styles.conclusionBox}>
                 <h3>Ready to upgrade your outdoor living space?</h3>
                 <p>Contact Loudoun Decks today for a free estimate and planning consultation.</p>
                 <Link href="/contact" className={styles.ctaBtn}>Get Started</Link>
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
