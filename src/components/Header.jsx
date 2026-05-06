"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import styles from "./Header.module.css";

const EnvelopeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

const CaretDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10L12 15L17 10H7Z" />
  </svg>
);

const CaretRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.06 21 2 12.94 2 3C2 2.45 2.45 2 3 2H6.5C7.05 2 7.5 2.45 7.5 3C7.5 4.25 7.7 5.45 8.07 6.57C8.18 6.92 8.1 7.31 7.82 7.59L5.62 9.79L6.62 10.79Z" />
  </svg>
);

const BarsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--button-hover-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

import { counties, slugify, getCanonicalCityUrl } from '@/data/cityData';


// Using slugify imported from cityData


import { useContact } from '@/context/ContactContext';
import { trackPhoneClick } from '@/lib/tracking';

export default function Header() {
  const { isContactOpen, openContact, closeContact, toggleContact } = useContact();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState({}); // Changed to object for multi-level support
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/" ? styles.active : "";
    }
    return pathname?.startsWith(path) ? styles.active : "";
  };

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
      setActiveSubMenu({});
    } else {
      setOpenDropdown(menu);
      setActiveSubMenu({});
    }
  };

  const toggleSubMenu = (subMenu) => {
    setActiveSubMenu(prev => ({
      ...prev,
      [subMenu]: !prev[subMenu]
    }));
  };

  // Prevent scrolling when any drawer is open
  React.useEffect(() => {
    if (isMobileOpen || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen, isContactOpen]);

  return (
    <div className={styles.headerWrapper}>
      {/* Mobile Sticky Top Call Bar */}
      <button onClick={openContact} className={styles.mobileTopCallBar} aria-label="Open Contact Form">
        <PhoneIcon />
        <span>Get A Free Estimate</span>
      </button>

      <header className={styles.header}>
        {/* Left Logo Area */}
        <div className={styles.logoArea}>
          <Link href="/">
            <Image
              src="/ldndecks-logo.webp"
              alt="ldndecks logo"
              width={200}
              height={100}
              style={{ objectFit: "contain", width: 'auto', height: 'auto' }}
              sizes="(max-width: 768px) 160px, 200px"
              priority
            />
          </Link>
        </div>

        {/* Right Header Content */}
        <div className={styles.headerRight}>
          {/* Top Bar */}
          <div className={styles.topBar}>
            <div className={styles.topBarLeft}>
              <div className={styles.topBarItem}>
                <a href="mailto:office@ldndecks.com" aria-label="Email office@ldndecks.com">
                  <EnvelopeIcon />
                  <span>office@ldndecks.com</span>
                </a>
              </div>
              <div className={styles.topBarItem}>
                <a href="https://www.google.com/maps/search/?api=1&query=13704+Winding+Oak+Cir+Centreville+VA+20121" target="_blank" rel="noopener noreferrer" aria-label="View our location on Google Maps">
                  <LocationIcon />
                  <span>13704 Winding Oak Cir, Centreville, VA 20121</span>
                </a>
              </div>
              <div className={styles.topBarItem}>
                 <a href="tel:+15716557207" aria-label="Call Loudoun Decks" onClick={trackPhoneClick}>
                    <PhoneIcon />
                    <span>(571) 655-7207</span>
                 </a>
              </div>
            </div>
            <div className={styles.topBarRight}>
              <Link href="/team">Our Team</Link>
              <Link href="/blog">News</Link>
              <Link href="/faqs">FAQs</Link>
            </div>
          </div>

          {/* Main Navigation Row */}
          <div className={styles.mainNav}>
            {/* Desktop Nav */}
            <div className={styles.desktopNav}>
              <nav className={styles.navLinks}>
                <div className={styles.navItem}>
                  <Link href="/" className={isActive("/")}>Home</Link>
                </div>

                <div className={styles.navItem}>
                  <Link href="/about" className={isActive("/about")}>About <CaretDownIcon /></Link>
                  <div className={styles.dropdown}>
                    <Link href="/contact">Our contacts</Link>
                    <Link href="/about/why-choose-us">Why Choose Us</Link>
                    <Link href="/about/process">Our Process</Link>
                    <Link href="/about/warranty">2-Year Warranty</Link>
                    <Link href="/faqs">FAQ</Link>
                  </div>
                </div>

                <div className={styles.navItem}>
                  <Link href="/services" className={isActive("/services")}>Services <CaretDownIcon /></Link>
                  <div className={styles.dropdown}>
                    {/* Pillar 1: New Decks */}
                    <Link href="/services/new-decks" style={{ padding: '10px 20px', display: 'block' }}>New Decks</Link>
                    <Link href="/services/deck-replacement" style={{ padding: '10px 20px', display: 'block' }}>Deck Replacement</Link>
                    <Link href="/services/deck-inspection" style={{ padding: '10px 20px', display: 'block' }}>Deck Inspection</Link>
                    <Link href="/services/deck-maintenance" style={{ padding: '10px 20px', display: 'block' }}>Deck Maintenance</Link>
                    <Link href="/services/gazebo-pergola" style={{ padding: '10px 20px', display: 'block' }}>Gazebo and Pergola</Link>
                    <Link href="/services/porches" style={{ padding: '10px 20px', display: 'block' }}>Porches</Link>

                    {/* Pillar 2: Patios */}
                    <div className={styles.nestedNavItem}>
                      <Link href="/services/patios">
                        Patios <CaretRightIcon />
                      </Link>
                      <div className={styles.subMenu}>
                        <Link href="/services/entry-doors">Entry Doors</Link>
                        <Link href="/services/fence">Fence</Link>
                      </div>
                    </div>

                    {/* Outdoor Washing (Back to Level 2) */}
                    <div className={styles.nestedNavItem}>
                      <Link href="/services/outdoor-washing">
                        Outdoor washing <CaretRightIcon />
                      </Link>
                      <div className={styles.subMenu}>
                        <Link href="/services/deck-washing">Deck Washing</Link>
                        <Link href="/services/house-siding-washing">House Siding Washing</Link>
                        <Link href="/services/concrete-washing">Concrete Washing</Link>
                        <Link href="/services/fence-cleaning">Fence Cleaning</Link>
                      </div>
                    </div>
                    
                    <Link href="/services/deck-resurfacing" style={{ padding: '10px 20px', display: 'block' }}>Deck Resurfacing</Link>
                    <Link href="/services/trex-calm-shell" style={{ padding: '10px 20px', display: 'block' }}>Trex Calm Shell</Link>
                    <Link href="/services/deck-stair-lighting" style={{ padding: '10px 20px', display: 'block' }}>Deck Stair Lighting</Link>
                    <Link href="/services/trex-railings" style={{ padding: '10px 20px', display: 'block' }}>Trex Railings</Link>
                    <Link href="/services/fire-pits" style={{ padding: '10px 20px', display: 'block' }}>Custom Fire Pits</Link>
                    <Link href="/services/under-deck-patios" style={{ padding: '10px 20px', display: 'block' }}>Under Deck Patios</Link>
                  </div>
                </div>

                <div className={styles.navItem}>
                  <Link href="/near-you" className={isActive("/near-you")}>Near You <CaretDownIcon /></Link>
                  <div className={styles.dropdown}>
                    {Object.entries(counties).map(([countySlug, county]) => (
                      <div key={countySlug} className={styles.nestedNavItem}>
                        <Link href={`/near-you/${countySlug}`} onClick={() => setActiveSubMenu({})}>
                          {county.name} <CaretRightIcon />
                        </Link>
                        <div className={styles.subMenu}>
                          {county.cities.slice(0, 15).map(city => (
                            <Link key={city} href={getCanonicalCityUrl(countySlug, city)} onClick={() => setIsMobileOpen(false)}>{city}, VA</Link>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

                <div className={styles.navItem}>
                  <Link href="/showcase" className={isActive("/showcase")}>Showcase <CaretDownIcon /></Link>
                  <div className={styles.dropdown}>
                    <Link href="/showcase">Recent Projects</Link>
                    <Link href="/houzz-deck-projects">Houzz Projects</Link>
                  </div>
                </div>

                <div className={styles.navItem}>
                  <Link href="/before-and-after" className={isActive("/before-and-after")}>Before &amp; After</Link>
                </div>

                <div className={styles.navItem}>
                  <Link href="/deck-cost-calculator" className={isActive("/deck-cost-calculator")}>Deck Price Calculator</Link>
                </div>

                <div className={styles.navItem}>
                  <Link href="/blog" className={isActive("/blog")}>Blog</Link>
                </div>
              </nav>

              <a href="tel:+15716557207" className={styles.callNowBtn} aria-label="Call Us" onClick={trackPhoneClick}>
                <PhoneIcon />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className={styles.mobileToggle}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Open Menu"
            >
              <BarsIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <Image
            src="/ldndecks-logo.webp"
            alt="ldndecks logo"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
          <button
            className={styles.closeBtn}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close Menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavLink} ${isActive('/')}`}>
              <Link href="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <div
              className={`${styles.mobileNavLink} ${isActive('/about')}`}
              onClick={() => toggleDropdown('about')}
            >
              <span>About</span> {openDropdown === 'about' ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={`${styles.drawerAccordion} ${openDropdown === 'about' ? styles.expanded : ''}`}>
               <div className={styles.drawerAccordionInner}>
                <div className={styles.mobileDropdown}>
                  <Link href="/contact" onClick={() => setIsMobileOpen(false)}>Our contacts</Link>
                  <Link href="/about/why-choose-us" onClick={() => setIsMobileOpen(false)}>Why Choose Us</Link>
                  <Link href="/about/process" onClick={() => setIsMobileOpen(false)}>Our Process</Link>
                  <Link href="/about/warranty" onClick={() => setIsMobileOpen(false)}>2-Year Warranty</Link>
                  <Link href="/faqs" onClick={() => setIsMobileOpen(false)}>FAQ</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <div
              className={`${styles.mobileNavLink} ${isActive('/services')}`}
              onClick={() => toggleDropdown('services')}
            >
              <span>Services</span> {openDropdown === 'services' ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={`${styles.drawerAccordion} ${openDropdown === 'services' ? styles.expanded : ''}`}>
               <div className={styles.drawerAccordionInner}>
                <div className={styles.mobileDropdown}>
                  
                  {/* Pillar 1: New Decks */}
                  <Link href="/services/new-decks" onClick={() => setIsMobileOpen(false)}>New Decks</Link>
                  <Link href="/services/deck-replacement" onClick={() => setIsMobileOpen(false)}>Deck Replacement</Link>
                  <Link href="/services/deck-inspection" onClick={() => setIsMobileOpen(false)}>Deck Inspection</Link>
                  <Link href="/services/deck-maintenance" onClick={() => setIsMobileOpen(false)}>Deck Maintenance</Link>
                  <Link href="/services/gazebo-pergola" onClick={() => setIsMobileOpen(false)}>Gazebo and Pergola</Link>
                  <Link href="/services/porches" onClick={() => setIsMobileOpen(false)}>Porches</Link>

                  {/* Pillar 2: Patios */}
                  <div 
                    className={styles.mobileNavLink} 
                    onClick={(e) => { e.stopPropagation(); toggleSubMenu('patios'); }}
                    style={{ fontSize: '14px', fontWeight: '500', padding: '10px 20px 10px 30px', background: 'transparent' }}
                  >
                    <Link href="/services/patios" onClick={() => setIsMobileOpen(false)} style={{ padding: 0 }}>Patios</Link>
                    {activeSubMenu['patios'] ? <MinusIcon /> : <PlusIcon />}
                  </div>
                  
                  <div className={`${styles.drawerAccordion} ${activeSubMenu['patios'] ? styles.expanded : ''}`}>
                     <div className={styles.drawerAccordionInner}>
                        <div className={styles.mobileDropdown} style={{ background: 'transparent' }}>
                          <Link href="/services/entry-doors" onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>Entry Doors</Link>
                          <Link href="/services/fence" onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>Fence</Link>
                        </div>
                     </div>
                  </div>

                  {/* Outdoor Washing (Back to Level 2) */}
                  <div 
                    className={styles.mobileNavLink} 
                    onClick={(e) => { e.stopPropagation(); toggleSubMenu('outdoor'); }}
                    style={{ fontSize: '14px', fontWeight: '500', padding: '10px 20px 10px 30px', background: 'transparent' }}
                  >
                    <Link href="/services/outdoor-washing" onClick={() => setIsMobileOpen(false)} style={{ padding: 0 }}>Outdoor washing</Link>
                    {activeSubMenu['outdoor'] ? <MinusIcon /> : <PlusIcon />}
                  </div>
                  
                  <div className={`${styles.drawerAccordion} ${activeSubMenu['outdoor'] ? styles.expanded : ''}`}>
                     <div className={styles.drawerAccordionInner}>
                        <div className={styles.mobileDropdown} style={{ background: 'transparent' }}>
                          <Link href="/services/deck-washing" onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>- Deck Washing</Link>
                          <Link href="/services/house-siding-washing" onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>- House Siding Washing</Link>
                          <Link href="/services/concrete-washing" onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>- Concrete Washing</Link>
                          <Link href="/services/fence-cleaning" onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>- Fence Cleaning</Link>
                        </div>
                     </div>
                  </div>

                  <Link href="/services/deck-resurfacing" onClick={() => setIsMobileOpen(false)}>Deck Resurfacing</Link>
                  <Link href="/services/trex-calm-shell" onClick={() => setIsMobileOpen(false)}>Trex Calm Shell</Link>
                  <Link href="/services/deck-stair-lighting" onClick={() => setIsMobileOpen(false)}>Deck Stair Lighting</Link>
                  <Link href="/services/trex-railings" onClick={() => setIsMobileOpen(false)}>Trex Railings</Link>
                  <Link href="/services/fire-pits" onClick={() => setIsMobileOpen(false)}>Custom Fire Pits</Link>
                  <Link href="/services/under-deck-patios" onClick={() => setIsMobileOpen(false)}>Under Deck Patios</Link>
                </div>
              </div>
            </div>

          </div>

          <div className={styles.mobileNavItem}>
            <div
              className={`${styles.mobileNavLink} ${isActive('/near-you')}`}
              onClick={() => toggleDropdown('near')}
            >
              <span>Near You</span> {openDropdown === 'near' ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={`${styles.drawerAccordion} ${openDropdown === 'near' ? styles.expanded : ''}`}>
               <div className={styles.drawerAccordionInner}>
                <div className={styles.mobileDropdown}>
                  {Object.entries(counties).map(([countySlug, county]) => (
                    <React.Fragment key={countySlug}>
                      <div 
                        className={styles.mobileNavLink} 
                        onClick={(e) => { e.stopPropagation(); toggleSubMenu(countySlug); }}
                        style={{ fontSize: '14px', fontWeight: '500', padding: '10px 20px 10px 30px', background: 'transparent' }}
                      >
                        <Link href={`/near-you/${countySlug}`} onClick={() => setIsMobileOpen(false)} style={{ padding: 0 }}>{county.name}</Link>
                        {activeSubMenu[countySlug] ? <MinusIcon /> : <PlusIcon />}
                      </div>
                      <div className={`${styles.drawerAccordion} ${activeSubMenu[countySlug] ? styles.expanded : ''}`}>
                        <div className={styles.drawerAccordionInner}>
                          <div className={styles.mobileDropdown} style={{ background: 'transparent' }}>
                            {county.cities.slice(0, 15).map(city => (
                              <Link key={city} href={getCanonicalCityUrl(countySlug, city)} onClick={() => setIsMobileOpen(false)} style={{ paddingLeft: '50px', fontSize: '13px' }}>- {city}, VA</Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}

                </div>
              </div>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <div
              className={`${styles.mobileNavLink} ${isActive('/showcase')}`}
              onClick={() => toggleDropdown('showcase')}
            >
              <span>Showcase</span> {openDropdown === 'showcase' ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={`${styles.drawerAccordion} ${openDropdown === 'showcase' ? styles.expanded : ''}`}>
               <div className={styles.drawerAccordionInner}>
                <div className={styles.mobileDropdown}>
                  <Link href="/showcase" onClick={() => setIsMobileOpen(false)}>Recent Projects</Link>
                  <Link href="/houzz-deck-projects" onClick={() => setIsMobileOpen(false)}>Houzz Projects</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavLink} ${isActive('/before-and-after')}`}>
              <Link href="/before-and-after" onClick={() => setIsMobileOpen(false)}>Before &amp; After</Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavLink} ${isActive('/deck-cost-calculator')}`}>
              <Link href="/deck-cost-calculator" onClick={() => setIsMobileOpen(false)}>Deck Price Calculator</Link>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavLink} ${isActive('/blog')}`}>
              <Link href="/blog" onClick={() => setIsMobileOpen(false)}>Blog</Link>
            </div>
          </div>

          <div style={{ marginTop: 'auto', padding: '40px 20px' }}>
            <a href="tel:+15716557207" className={styles.callNowBtn} style={{ width: '100%', justifyContent: 'center' }} onClick={trackPhoneClick}>
              <PhoneIcon />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Drawer Panel */}
      <div className={`${styles.contactDrawerOverlay} ${isContactOpen ? styles.open : ''}`} onClick={closeContact}></div>
      <div className={`${styles.contactDrawer} ${isContactOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#333' }}>Get A Free Quote</h3>
          <button
            className={styles.closeBtn}
            onClick={closeContact}
            aria-label="Close Contact Drawer"
          >
            <CloseIcon />
          </button>
        </div>
        <div className={styles.contactDrawerContent}>
          <ContactForm hideInfoCol={true} noPadding={true} />
        </div>
      </div>
    </div>
  );
}
