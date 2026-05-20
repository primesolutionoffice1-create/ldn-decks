import React from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css';

const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.53 9-10.95z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
  </svg>
);

const teamData = [
  { id: 1, name: 'John Doe', role: 'Manager', image: '/team_1.png' },
  { id: 2, name: 'Kevin Martin', role: 'Manager', image: '/team_2.png' },
  { id: 3, name: 'Steve Jobs', role: 'Manager', image: '/team_3.png' },
  { id: 4, name: 'Mason Mount', role: 'Manager', image: '/team_4.png' }
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
           <div className={styles.titleArea}>
              <span className={styles.subtext}>Professional Team Members</span>
              <span className={styles.line}></span>
           </div>
           <h2 className={styles.title}>Meet Our Experts</h2>
        </div>

        <div className={styles.grid}>
          {teamData.map(member => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imgWrapper}>
                 <Image src={member.image} alt={member.name} fill className={styles.cardImg} sizes="(max-width: 768px) 100vw, 300px" />
              </div>
              <div className={styles.cardInfo}>
                 <h3 className={styles.name}>{member.name}</h3>
                 <p className={styles.role}>{member.role}</p>
                  <div className={styles.socialRow}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}><FbIcon /></a>
                    <a href="https://x.com/ldndecks" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}><XIcon /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}><LinkedinIcon /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}><InstagramIcon /></a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
