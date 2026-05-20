import React from 'react';
import Image from 'next/image';
import JsonLd from './JsonLd';
import styles from './TeamGrid.module.css';

const teamMembers = [
  {
    name: "Nick",
    role: "Owner & Lead Designer",
    image: "/team/Nick.jpg",
    bio: "Founder and lead designer of Loudoun Decks with over 10 years of experience in custom deck construction across Northern Virginia. Virginia Class A Licensed Contractor. Trex Platinum Certified and TimberTech Certified Installer. Nick personally oversees every project from initial design through final inspection, ensuring each build meets the highest structural and aesthetic standards. He has completed 200+ custom deck projects across Loudoun, Fairfax, and Prince William counties.",
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

export default function TeamGrid() {
  // PersonSchema for the owner — critical for E-E-A-T and AI citations.
  // Single source of truth for #nick; every other surface references the @id only.
  //
  // sameAs: only verified URLs. Houzz comes from the org's documented profile.
  // LinkedIn / BBB / TrexPro installer-locator profile URLs are TODO — pending
  // Daniel Agrici confirmation. Do NOT add fabricated profile URLs (white-hat
  // guardrail per CODEX.md). When verified, add to the sameAs array below.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ldndecks.com/#nick",
    "name": "Nick",
    "jobTitle": "Owner & Lead Designer",
    "worksFor": { "@type": "Organization", "@id": "https://ldndecks.com/#organization" },
    "image": "https://ldndecks.com/team/Nick.jpg",
    "url": "https://ldndecks.com/team",
    "description": "Founder of Loudoun Decks with 10+ years of custom deck building experience in Northern Virginia. Virginia Class A Licensed Contractor, Trex Platinum Partner, TimberTech Certified Installer. 200+ completed custom deck projects across Loudoun, Fairfax, and Prince William counties.",
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
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Manufacturer Certification",
        "name": "Trex Platinum Partner",
        "recognizedBy": { "@type": "Organization", "name": "Trex Company, Inc." }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Manufacturer Certification",
        "name": "TimberTech Certified Installer",
        "recognizedBy": { "@type": "Organization", "name": "TimberTech (The AZEK Company)" }
      }
    ],
    "award": [
      "Trex Platinum Partner — highest installer tier",
      "TimberTech Certified Installer",
      "5.0★ Google Business Profile rating (49+ reviews)"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
      { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
      { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
      { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
      { "@type": "AdministrativeArea", "name": "Stafford County, VA" }
    ],
    "sameAs": [
      "https://www.houzz.com/pro/webuser-782541997/loudoun-decks"
      // TODO: add when Daniel confirms verified URLs:
      //   "https://www.linkedin.com/in/<nick-handle>",
      //   "https://www.bbb.org/us/va/<region>/profile/<...>",
      //   "https://www.trex.com/contractors/<trex-pro-profile>"
    ],
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
      </div>
    </section>
  );
}
