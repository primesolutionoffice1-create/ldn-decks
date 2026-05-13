import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesGrid.module.css';

const servicesContent = [
  {
    id: 1,
    title: 'Custom Deck Builder & Design',
    desc: 'As the premier custom deck builder in Northern Virginia, we design and build fully tailored outdoor spaces from concept to completion. No templates, no shortcuts — just 5-Star craftsmanship.',
    image: '/showcase/img08.jpeg',
    link: '/services/new-decks'
  },
  {
    id: 2,
    title: 'Deck Resurfacing & Repair',
    desc: 'Save on the cost of a full build with our expert deck resurfacing and repair services. We replace old boards with premium Trex or wood while ensuring your underlying structure is safe and stable.',
    image: '/images/img25.jpeg',
    link: '/services/deck-resurfacing'
  },
  {
    id: 3,
    title: 'Patio Contractor & Bluestone Patios',
    desc: 'Looking for a professional patio contractor? We specialize in high-end bluestone and paver patios that offer natural beauty, unmatched durability, and a timeless look for your backyard.',
    image: '/showcase/img11.jpeg',
    link: '/services/patios'
  },
  {
    id: 4,
    title: 'Screened Porch Builder',
    desc: 'Experience the best of Northern Virginia outdoors as a leading screened porch builder. We create comfortable, bug-free transitions between indoor and outdoor living that add massive value to your home.',
    image: '/images/img03.jpeg',
    link: '/services/porches'
  },
  {
    id: 5,
    title: 'Pergolas and Gazebos',
    desc: 'We also build pergolas and gazebos as part of outdoor living projects. These structures can add definition and function to an outdoor space while complementing decks, patios, or landscaped areas. Each structure is planned based on the available space and homeowner goals.',
    image: '/images/img28.jpeg',
    link: '/services/gazebo-pergola'
  },
  {
    id: 6,
    title: 'Deck Stair Lighting',
    desc: 'Custom built LED lighting systems installed directly into your deck stairs for safety and a luxurious evening atmosphere.',
    image: '/showcase/light-img.jpeg',
    link: '/services/deck-stair-lighting'
  },
  {
    id: 7,
    title: 'Trex Railings',
    desc: 'Upgrade your deck with modern Trex railing systems and a custom cocktail top perfect for entertaining and relaxing.',
    image: '/showcase/img06.jpg',
    link: '/services/trex-railings'
  },
  {
    id: 8,
    title: 'Custom Fire Pits',
    desc: 'Transform your backyard into a warm, inviting space with a custom-built fire pit perfect for relaxing nights and entertaining guests.',
    image: '/showcase/img15.jpeg',
    link: '/services/fire-pits'
  },
  {
    id: 9,
    title: 'Under Deck Patios',
    desc: 'Maximize your outdoor living space with a custom under-deck patio system protected from rain, clean, and perfect for relaxing or entertaining year-round.',
    image: '/showcase/img19.jpg',
    link: '/services/under-deck-patios'
  },
  {
    id: 10,
    title: 'Trex Calm Shell Resurfacing',
    desc: 'Give your old deck a fresh, modern look with Trex Calm Shell a premium composite color designed for durability, style, and low maintenance.',
    image: '/images/img26.jpeg',
    link: '/services/trex-calm-shell'
  },
  {
    id: 11,
    title: 'Deck Repair & Structural Restoration',
    desc: 'Inspection-first deck repair across Northern Virginia. Ledger flashing, joist sistering, post rot, stair stringers, and code-compliant railing rebuilds. Composite resurfacing when the framing is sound, full structural rebuild when it is not.',
    image: '/torndeck.webp',
    link: '/services/deck-repair'
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>

        <div className={styles.introBlock}>
          <h2>Our Outdoor Living Services</h2>
          <p>Loudoun Decks specializes in residential outdoor living projects across Northern Virginia. Whether you’re planning a new deck or improving an existing outdoor space, our services are designed to help homeowners create functional and well‑planned outdoor areas. Below is an overview of the services we provide.</p>
        </div>

        <div className={styles.grid}>
          {servicesContent.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image src={service.image} alt={service.title} fill className={styles.cardImg} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link href={service.link} className={styles.readMoreBtn}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
