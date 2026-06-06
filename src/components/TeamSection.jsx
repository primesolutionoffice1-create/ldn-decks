import React from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css';

const teamData = [
  {
    id: 1,
    name: 'Project Coordination',
    role: 'Scheduling, homeowner communication, and permit support.',
    image: '/images/img17.jpeg',
    alt: 'Project coordination for a Northern Virginia deck build',
  },
  {
    id: 2,
    name: 'Deck Design Support',
    role: 'Material selection, layout planning, and estimate preparation.',
    image: '/images/img18.jpeg',
    alt: 'Deck design support for a custom outdoor living project',
  },
  {
    id: 3,
    name: 'Installation Team',
    role: 'Framing, decking, railing, and finish installation.',
    image: '/images/img19.jpeg',
    alt: 'Deck installation craftsmanship on a finished outdoor living build',
  },
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
                 <Image src={member.image} alt={member.alt} fill className={styles.cardImg} sizes="(max-width: 768px) 100vw, 300px" />
              </div>
              <div className={styles.cardInfo}>
                 <h3 className={styles.name}>{member.name}</h3>
                 <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
