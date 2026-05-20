import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import styles from './BlogFeed.module.css';

export default function BlogFeed() {
  // Sort posts by date (newest first) and take the top 3
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest from our Blog</h2>
          <p className={styles.subtitle}>Expert advice on deck building, maintenance, and outdoor living in Northern Virginia.</p>
        </div>
        
        <div className={styles.grid}>
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <span className={styles.date}>{post.date}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.link}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.footer}>
          <Link href="/blog" className={styles.viewAll}>
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
