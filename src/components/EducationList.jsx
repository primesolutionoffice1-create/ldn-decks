"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { educationArticles } from '@/lib/educationData';
import styles from './BlogList.module.css';

export default function EducationList() {
  const sortedArticles = [...educationArticles].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    return b.id - a.id; 
  });

  return (
    <section className={`${styles.blogSection} ${styles.educationSection}`}>
      <div className={styles.container}>
        <div className={styles.educationListHeader}>
          <p className={styles.educationEyebrow}>All education guides</p>
          <h2 className={styles.educationHeading}>Deep guides for permit-ready deck decisions</h2>
          <p className={styles.educationIntro}>
            Browse source-backed planning guides for structure, materials, permits, HOA approvals, drainage, lighting, financing and stair safety.
          </p>
        </div>
        <div className={styles.grid}>
          {sortedArticles.map(article => (
            <div key={article.id} className={styles.blogCard}>
              <Link href={`/education/${article.slug}`} className={styles.imgLink}>
                <div className={styles.imgWrapper}>
                  <Image src={article.image} alt={article.title} fill className={styles.cardImg} sizes="(max-width: 900px) 100vw, 45vw" />
                </div>
              </Link>
              
              <div className={styles.cardContent}>
                 <div className={styles.meta}>
                   <span className={styles.categoryBadge}>{article.category}</span>
                   <span className={styles.date}>{article.date}</span>
                   <span className={styles.metaDivider}>|</span>
                   <span className={styles.author}>{article.author}</span>
                 </div>
                 
                 <Link href={`/education/${article.slug}`} className={styles.titleLink}>
                   <h2 className={styles.title}>{article.title}</h2>
                 </Link>
                 
                 <p className={styles.excerpt}>{article.excerpt}</p>
                 
                 <div className={styles.cardFooter}>
                   <Link href={`/education/${article.slug}`} className={styles.readMoreBtn}>
                     Read Guide
                   </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
