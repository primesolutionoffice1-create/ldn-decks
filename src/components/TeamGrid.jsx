import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from './JsonLd';
import styles from './TeamGrid.module.css';
import { BUSINESS, FOUNDER_ID } from '@/lib/business';

const teamMembers = [
  {
    name: "Nick",
    role: "Owner & Lead Designer",
    image: "/team/Nick.jpg",
    bio: "Founder and lead designer of Loudoun Decks with over 10 years of experience in custom deck construction across Northern Virginia. Virginia Class A Licensed Contractor. Nick personally oversees deck planning from initial design through final inspection, with special focus on structure, materials, permits, and HOA requirements.",
    expertise: ["Custom deck design", "Trex & TimberTech systems", "HOA architectural review", "Structural engineering", "Permit management"],
  },
  {
    name: "Jeff Mineo",
    role: "Head of Sales Department",
    image: "/team/pete.png",
    bio: "Jeff manages all client relationships and project consultations for Loudoun Decks. With deep knowledge of composite and wood decking materials, local building codes, and Northern Virginia HOA requirements, Jeff guides homeowners through every decision — from material selection to budget planning. He conducts all on-site consultations and prepares detailed, itemized project proposals.",
    expertise: ["Client consultations", "Material selection", "Budget planning", "HOA submissions", "Project proposals"],
  },
  {
    name: "Alex, Daniel & Bet",
    role: "Master Technicians",
    image: "/team/alexdanielandbet.jpeg",
    bio: "Our lead construction team brings a combined 10+ years of hands-on deck building experience. Specialists in composite installation (Trex, TimberTech AZEK), structural framing, custom railing systems, and precision carpentry. They handle every phase of construction from footing installation to final trim, ensuring code compliance and exceptional craftsmanship on every project.",
    expertise: ["Composite installation", "Structural framing", "Custom railings", "Precision carpentry", "Code compliance"],
  }
];

const verifiedCompanyProfiles = [
  { label: 'BBB profile', href: BUSINESS.sameAs.find((url) => url.includes('bbb.org')) },
  { label: 'Houzz portfolio', href: BUSINESS.sameAs.find((url) => url.includes('houzz.com')) },
  { label: 'BuildZoom profile', href: BUSINESS.sameAs.find((url) => url.includes('buildzoom.com')) },
  { label: 'Yelp profile', href: BUSINESS.sameAs.find((url) => url.includes('yelp.com')) },
].filter((profile) => profile.href);

export default function TeamGrid() {
  // PersonSchema for the owner — critical for E-E-A-T and AI citations.
  // Single source of truth for the founder Person entity; every other surface
  // references FOUNDER_ID only.
  //
  // sameAs: only verified Person-level URLs. Organization profiles such as
  // BBB, BuildZoom, Yelp, and Houzz belong on BUSINESS.sameAs and the org node.
  // Do NOT add company profiles here just to fill the array.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    "name": BUSINESS.founder.name,
    "alternateName": "Nick",
    "jobTitle": "Owner & Lead Designer",
    "worksFor": { "@type": "Organization", "@id": "https://ldndecks.com/#organization" },
    "image": "https://ldndecks.com/team/Nick.jpg",
    "url": "https://ldndecks.com/team",
    "description": "Founder of Loudoun Decks with 10+ years of custom deck building experience in Northern Virginia. Virginia Class A Licensed Contractor and lead designer for deck planning across Loudoun, Fairfax, and Prince William counties.",
    "knowsAbout": [
      "Composite decking installation",
      "Trex Transcend installation",
      "Trex Enhance installation",
      "Trex Signature installation",
      "TimberTech AZEK Vintage installation",
      "TimberTech PRO installation",
      "Fiberon Concordia installation",
      "Custom deck design",
      "Screened porch construction",
      "Patio and hardscape construction",
      "Deck structural engineering",
      "Ledger flashing and deck-to-house attachment",
      "Northern Virginia residential building codes",
      "Fairfax County deck permitting",
      "Loudoun County LOLA portal permitting",
      "Prince William County deck permitting",
      "HOA architectural review submissions",
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "Virginia Class A Contractor License",
        "recognizedBy": { "@type": "Organization", "name": "Virginia Department of Professional and Occupational Regulation (DPOR)" }
      }
    ],
    "award": [
      "Trex product-line planning profile",
      "TimberTech and AZEK product planning",
      'Google Business Profile reviews (verify current count on Google Maps)'
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
      { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
      { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
      { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
      { "@type": "AdministrativeArea", "name": "Stafford County, VA" }
    ],
    ...(BUSINESS.founder.sameAs?.length ? { sameAs: BUSINESS.founder.sameAs } : {}),
  };

  return (
    <section className={styles.teamSection}>
      <JsonLd data={personSchema} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} at Loudoun Decks`}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#555', marginTop: '0.75rem' }}>{member.bio}</p>
                <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {member.expertise.map((skill, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', background: '#f0f0f0', padding: '0.2rem 0.6rem', borderRadius: 12, color: '#555' }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.profileStrip} aria-label="Verified Loudoun Decks company profiles">
          <span className={styles.profileLabel}>Verified company profiles</span>
          {verifiedCompanyProfiles.map((profile) => (
            <a key={profile.href} href={profile.href} target="_blank" rel="noreferrer" className={styles.profileLink}>
              {profile.label}
            </a>
          ))}
          <Link href="/reviews" className={styles.profileLink}>
            Review hub
          </Link>
        </div>
      </div>
    </section>
  );
}
