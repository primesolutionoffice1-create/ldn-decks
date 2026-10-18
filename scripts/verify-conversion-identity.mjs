#!/usr/bin/env node
/**
 * Guards the estimate path against three regressions:
 * - conversion copy that drops a confirmed service area
 * - duplicate ContactForm field ids when the header drawer is also open
 * - a second LocalBusiness @id on the financing page
 *
 * Reads the repository. It does not fetch production and it does not send a lead.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const errors = [];

const business = read('src/lib/business.js');
const requiredAreas = [
  'Loudoun County, VA',
  'Fairfax County, VA',
  'Prince William County, VA',
  'Arlington County, VA',
  'Alexandria, VA',
  'Falls Church, VA',
  'Stafford County, VA',
];
for (const area of requiredAreas) {
  if (!business.includes(`'${area}'`)) {
    errors.push(`src/lib/business.js is missing confirmed area ${area}`);
  }
}
if (!business.includes('export function formatServiceArea')) {
  errors.push('src/lib/business.js no longer exports formatServiceArea');
}

const consumers = [
  'src/components/ContactForm.jsx',
  'src/components/ServiceAreasGrid.jsx',
  'src/components/TrustSection.jsx',
  'src/components/HomeSEOContent.jsx',
  'src/components/TeamGrid.jsx',
  'src/app/get-estimate/page.js',
  'src/app/contact/page.js',
];
for (const file of consumers) {
  const text = read(file);
  if (!text.includes('formatServiceArea')) {
    errors.push(`${file} does not render the service area from formatServiceArea`);
  }
}

const form = read('src/components/ContactForm.jsx');
if (!form.includes('useId')) {
  errors.push('src/components/ContactForm.jsx does not use useId for field ids');
}
if (/id="(?:email|firstName|phone)"/.test(form)) {
  errors.push('src/components/ContactForm.jsx still uses a fixed field id');
}
if (!form.includes('name="email"') || !form.includes('name="phone"') || !form.includes('name="service"')) {
  errors.push('src/components/ContactForm.jsx lost a lead field name');
}

const financing = read('src/app/deck-financing/page.js');
if (financing.includes('#localbusiness')) {
  errors.push('src/app/deck-financing/page.js still emits #localbusiness');
}
if (!financing.includes('#organization')) {
  errors.push('src/app/deck-financing/page.js does not reference #organization');
}

const header = read('src/components/Header.jsx');
if (!header.includes('Financing Available') || !header.includes('/deck-payment-estimator')) {
  errors.push('Header financing entry is missing');
}

const serviceArea = read('src/lib/serviceArea.js');
const coverageMatch = serviceArea.match(/export const COVERAGE_SENTENCE = '([^']+)';/);
const areasMetaMatch = serviceArea.match(/export const AREAS_META_DESCRIPTION = '([^']+)';/);
const COVERAGE_SENTENCE = coverageMatch?.[1] || '';
const AREAS_META_DESCRIPTION = areasMetaMatch?.[1] || '';
const declaredCount = (serviceArea.match(/match: '/g) || []).length;
const hero = read('src/components/Hero.jsx');
const heroH1 = 'Custom Deck Builder Near You in Northern Virginia';
if (!hero.includes(`<h1 className={styles.title}>${heroH1}</h1>`)) {
  errors.push('Homepage hero no longer uses one H1 for the Northern Virginia promise');
}
if (hero.includes('titleShort') || hero.includes('titleFull') || hero.includes('descShort')) {
  errors.push('Homepage hero still swaps a second headline or description');
}
if (!hero.includes('COVERAGE_SENTENCE') || !hero.includes('View all service areas') || !hero.includes('AREAS_HUB_PATH')) {
  errors.push('Homepage hero is missing the shared coverage line or service-area link');
}
if (!COVERAGE_SENTENCE.includes('Alexandria') || !COVERAGE_SENTENCE.includes('Falls Church') || !COVERAGE_SENTENCE.includes('Stafford')) {
  errors.push('Coverage sentence dropped a declared area');
}

const areasPage = read('src/app/areas-we-serve/page.js');
if (areasPage.includes('70+')) {
  errors.push('Areas page still claims an undemonstrated 70+ total');
}
if (!areasPage.includes('Stafford County Deck Builder Hub') || !areasPage.includes('Independent cities')) {
  errors.push('Areas page is missing the Stafford hub or independent-city group');
}
if (areasPage.includes('charAt(0).toUpperCase()')) {
  errors.push('Areas page still title-cases community slugs');
}
if (!areasPage.includes('AREAS_META_DESCRIPTION') || AREAS_META_DESCRIPTION.includes('70+')) {
  errors.push('Areas metadata is not using the shared community description');
}
const cityData = read('src/data/cityData.js');
for (const name of ['McLean', 'Great Falls', 'South Riding', 'One Loudoun', 'Falls Church', 'Manassas Park', 'Alexandria']) {
  if (!cityData.includes(`"${name}"`)) {
    errors.push(`cityData is missing the published community ${name}`);
  }
}
if (!areasPage.includes('county.cities') || !areasPage.includes('getCityLink')) {
  errors.push('Areas page no longer renders community names from cityData');
}
if (!areasPage.includes('City of Fairfax') || !areasPage.includes('Manassas Park')) {
  errors.push('Areas page does not list the independent cities separately');
}
const faqSchema = read('src/lib/faqSchema.js');
if (/two\s+offices/i.test(faqSchema) || faqSchema.includes('Platinum Partner') || faqSchema.includes('TimberTech Certified')) {
  errors.push('FAQ schema still publishes an unconfirmed office or certification claim');
}
if (!faqSchema.includes('SERVICE_AREA_FAQ_ANSWER')) {
  errors.push('FAQ schema is not using the shared service-area answer');
}
const businessGeo = read('src/lib/business.js');
if (businessGeo.includes('city.latitude') || businessGeo.includes("latitude: '39.")) {
  errors.push('City-center coordinates are still stored for the business geo');
}

const quickLinks = read('src/components/HomeQuickLinks.jsx');
if (quickLinks.includes('70+') || quickLinks.includes('Loudoun, Fairfax & Prince William')) {
  errors.push('Homepage Areas We Serve card still describes only three counties or an undemonstrated total');
}

const estimate = read('src/app/get-estimate/page.js');
if (estimate.includes('Serving Loudoun, Fairfax, Prince William, Arlington &amp; Stafford counties')) {
  errors.push('Estimate page still uses the five-county coverage line');
}
if (!estimate.includes('View all service areas')) {
  errors.push('Estimate page is missing the visible service-area link');
}

if (declaredCount !== requiredAreas.length) {
  errors.push('Public service-area registry does not match the confirmed area list');
}
if (serviceArea.includes('businessConfirmation') || serviceArea.includes('pending')) {
  errors.push('Public service-area module exposes an internal confirmation note');
}

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, files: consumers.length + 3 }, null, 2));
