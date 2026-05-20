"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import styles from './BlogList.module.css';

// SVG Icons for social sharing
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h3v3h-3v6.95c5.05-1.11 9-5.53 9-10.95z" />
  </svg>
);
const TwIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.728 8.088 4.1 6.128 1.671 3.149c-1.045 1.79-.33 4.103 1.144 5.089-.8-.025-1.553-.245-2.209-.61V7.69c0 2.278 1.578 4.305 3.82 4.755-.395.108-.82.164-1.258.164-.303 0-.598-.029-.885-.084.618 1.916 2.395 3.309 4.5 3.348-1.782 1.396-4.027 2.115-6.326 2.115-.403 0-.8-.024-1.193-.07 2.133 1.368 4.667 2.167 7.376 2.167 8.995 0 14.161-7.669 13.784-14.774 1.002-.723 1.874-1.626 2.56-2.651z"/>
  </svg>
);
const LiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export default function BlogList() {
  
  const handleShare = (network, title) => {
    // In a real application, this would open a popup to native share intents.
    // For now, it evaluates native interaction!
    alert(`Triggering share to ${network} for: "${title}"`);
  };

  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    return b.id - a.id; // Tie-breaker: higher ID (newer) first
  });

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {sortedPosts.map(post => (
            <div key={post.id} className={styles.blogCard}>
              <Link href={`/blog/${post.slug}`} className={styles.imgLink}>
                <div className={styles.imgWrapper}>
                  <Image src={post.image} alt={post.title} fill className={styles.cardImg} sizes="(max-width: 900px) 100vw, 45vw" />
                </div>
              </Link>
              
              <div className={styles.cardContent}>
                 <div className={styles.meta}>
                   <span className={styles.date}>{post.date}</span>
                   <span className={styles.metaDivider}>|</span>
                   <span className={styles.author}>{post.author}</span>
                 </div>
                 
                 <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                   <h2 className={styles.title}>{post.title}</h2>
                 </Link>
                 
                 <p className={styles.excerpt}>{post.excerpt}</p>
                 
                 <div className={styles.cardFooter}>
                   <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn}>
                     Read Article
                   </Link>
                   
                   <div className={styles.shareBlock}>
                     <span className={styles.shareLabel}>Share:</span>
                     <button onClick={() => handleShare('Facebook', post.title)} className={styles.shareBtn} aria-label="Share on Facebook">
                       <FbIcon />
                     </button>
                     <button onClick={() => handleShare('Twitter', post.title)} className={styles.shareBtn} aria-label="Share on Twitter">
                       <TwIcon />
                     </button>
                     <button onClick={() => handleShare('LinkedIn', post.title)} className={styles.shareBtn} aria-label="Share on LinkedIn">
                       <LiIcon />
                     </button>
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
