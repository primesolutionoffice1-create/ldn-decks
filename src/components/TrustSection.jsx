import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, formatServiceArea } from '@/lib/business';
import styles from './TrustSection.module.css';

const WORK = [
  {
    href: '/composite-decks',
    src: '/images/projects/mclean-composite-deck/mclean-deck-stairs.jpg',
    alt: 'Composite deck stairs with brown treads, white risers, and black balusters in McLean, Virginia',
    kicker: 'Deck',
    caption: 'Composite deck · McLean, VA',
  },
  {
    href: '/blog/screened-porch-trex-select-purcellville-va',
    src: '/images/projects/purcellville-screened-porch/purcellville-screened-porch-01-retouched.png',
    alt: 'Screened porch with white trim and dark balusters in Purcellville, Virginia',
    kicker: 'Screened porch',
    caption: 'Screened porch · Purcellville, VA',
  },
  {
    href: '/services/patios',
    src: '/showcase/img12.jpeg',
    alt: 'Natural stone patio with a fire feature in Fairfax County, Virginia',
    kicker: 'Patio',
    caption: 'Stone patio · Fairfax County',
  },
];

export default function TrustSection() {
  const nadraMembership = BUSINESS.memberships.find((membership) => membership.alternateName === 'NADRA');
  const nadraDirectoryUrl = nadraMembership?.directoryUrl || 'https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b';

  return (
    <section className={styles.section} aria-labelledby="built-work-heading">
      <div className={styles.container}>
        <h2 id="built-work-heading">Decks, screened porches, and patios</h2>
        <p className={styles.intro}>
          Built for homeowners in {formatServiceArea().replaceAll(' County', '')}. The written estimate names the product line, the county permit, and the HOA review.
        </p>

        <div className={styles.workGrid}>
          {WORK.map((project) => (
            <Link key={project.href} href={project.href} className={styles.workCard}>
              <div className={styles.workPhoto}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 380px"
                  quality={75}
                  className={styles.workImage}
                />
              </div>
              <p className={styles.workKicker}>{project.kicker}</p>
              <p className={styles.workCaption}>{project.caption}</p>
            </Link>
          ))}

        </div>

        <div className={styles.credentialRow}>
          <a
            href="https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241/#sealclick"
            target="_blank"
            rel="nofollow"
            className={styles.credentialLink}
          >
            <Image
              src="/badges/bbb-a-plus-seal.png"
              className={styles.bbbSealImg}
              alt="Loudoun Decks BBB Business Review"
              width={160}
              height={52}
            />
          </a>
          <a
            href={nadraDirectoryUrl}
            target="_blank"
            rel="noopener nofollow"
            className={styles.credentialLink}
          >
            NADRA Member
          </a>
          <Link href="/about/certifications-and-licenses" className={styles.credentialLink}>
            VA Class A #2705191673
          </Link>
          <span className={styles.partnerPair}>
            We install <Link href="/trex-decks" className={styles.credentialLink}>Trex</Link>, <Link href="/timbertech-decks" className={styles.credentialLink}>TimberTech</Link> and other composite brands.
          </span>
        </div>
      </div>
    </section>
  );
}
