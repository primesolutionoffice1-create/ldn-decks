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

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, files: consumers.length + 3 }, null, 2));
