import Link from 'next/link';
import { counties, slugify, getCanonicalCityUrl } from '@/data/cityData';
import styles from './ServiceAreasGrid.module.css';

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '8px' }} aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

export default function ServiceAreasGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Local Expertise Across Northern Virginia</h2>
        <p className={styles.sectionSubtitle}>
          Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, Prince William County, Arlington, and Stafford.
        </p>
        
        <div className={styles.columns}>
          {Object.keys(counties).map((countySlug) => {
            const county = counties[countySlug];
            return (
              <div key={countySlug} className={styles.column}>
                <Link href={`/near-you/${countySlug}`} className={styles.countyLink}>
                  <h3 className={styles.countyTitle}>{county.name}</h3>
                </Link>
                <ul className={styles.cityList}>
                  {county.cities.map((city, cIdx) => (
                    <li key={cIdx}>
                      <Link 
                        href={getCanonicalCityUrl(countySlug, city)}
                        className={styles.cityLink}
                        title={`Deck Builder in ${city}, VA`}
                      >
                        <LocationIcon />
                        {city}, VA
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
