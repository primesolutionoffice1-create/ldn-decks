import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createSubmissionGate } from '../src/lib/submissionGate.js';

const CONTACT_HOME = new URL('../src/components/ContactHome.jsx', import.meta.url);
const SERVICES_HEADER = new URL('../src/components/ServicesHeader.jsx', import.meta.url);
const ABOVE_FOLD_CTA = new URL('../src/components/AboveFoldCTA.jsx', import.meta.url);
const REPLACEMENT_PAGE = new URL(
  '../src/app/replace-wood-deck-with-composite-northern-virginia/page.js',
  import.meta.url
);
const REPLACEMENT_SERVICE_PAGE = new URL('../src/app/services/deck-replacement/page.js', import.meta.url);
const RESURFACING_SERVICE_PAGE = new URL('../src/app/services/deck-resurfacing/page.js', import.meta.url);
const SCREENED_PORCH_PAGE = new URL('../src/app/screened-porch-builder-northern-virginia/page.js', import.meta.url);
const THANK_YOU_PAGE = new URL('../src/app/thank-you/page.js', import.meta.url);
const PAID_SEARCH_FORM = new URL('../src/components/PaidSearchLeadForm.jsx', import.meta.url);
const CONTACT_FORM = new URL('../src/components/ContactForm.jsx', import.meta.url);
const META_LEAD_FORM = new URL('../src/components/MetaLeadForm.jsx', import.meta.url);

const contactHome = fs.readFileSync(CONTACT_HOME, 'utf8');
const servicesHeader = fs.readFileSync(SERVICES_HEADER, 'utf8');
const aboveFoldCta = fs.readFileSync(ABOVE_FOLD_CTA, 'utf8');
const replacementPage = fs.readFileSync(REPLACEMENT_PAGE, 'utf8');
const replacementServicePage = fs.readFileSync(REPLACEMENT_SERVICE_PAGE, 'utf8');
const resurfacingServicePage = fs.readFileSync(RESURFACING_SERVICE_PAGE, 'utf8');
const screenedPorchPage = fs.readFileSync(SCREENED_PORCH_PAGE, 'utf8');
const thankYouPage = fs.readFileSync(THANK_YOU_PAGE, 'utf8');
const paidSearchForm = fs.readFileSync(PAID_SEARCH_FORM, 'utf8');
const contactForm = fs.readFileSync(CONTACT_FORM, 'utf8');
const metaLeadForm = fs.readFileSync(META_LEAD_FORM, 'utf8');

assert.match(
  aboveFoldCta,
  /leadSource[\s\S]*<PaidSearchLeadForm[\s\S]*leadSource=\{leadSource\}/,
  'AboveFoldCTA must accept and forward an explicit leadSource to PaidSearchLeadForm'
);
assert.match(
  aboveFoldCta,
  /pageContext[\s\S]*<PaidSearchLeadForm[\s\S]*pageContext=\{pageContext\}/,
  'AboveFoldCTA must accept and forward pageContext to PaidSearchLeadForm'
);

assert.match(
  servicesHeader,
  /quickFormId[\s\S]*href=\{showQuickForm\s*\?\s*`#\$\{quickFormId\}`\s*:\s*estimateHref\}[\s\S]*<PaidSearchLeadForm[\s\S]*formId=\{quickFormId\}/,
  'ServicesHeader primary CTA must target the embedded quick form instead of the hero wrapper'
);

for (const route of [
  {
    name: 'deck replacement',
    source: replacementServicePage,
    service: 'Deck Replacement',
    slug: 'deck_replacement',
    aboveFoldLocation: 'paid_search_replacement_above_fold',
    terminalLocation: 'paid_search_replacement_terminal',
  },
  {
    name: 'deck resurfacing',
    source: resurfacingServicePage,
    service: 'Deck Resurfacing',
    slug: 'deck_resurfacing',
    aboveFoldLocation: 'paid_search_resurfacing_above_fold',
    terminalLocation: 'paid_search_resurfacing_terminal',
  },
  {
    name: 'screened porch',
    source: screenedPorchPage,
    service: 'Screened Porches',
    slug: 'screened_porch',
    aboveFoldLocation: 'paid_search_screened_porch_above_fold',
    terminalLocation: 'paid_search_screened_porch_terminal',
  },
]) {
  assert.match(route.source, /<ServicesHeader[\s\S]*?showQuickForm[\s\S]*?\/>/, `${route.name} must mount its quick form inside the first hero`);
  assert.ok(route.source.includes(`quickFormService="${route.service}"`), `${route.name} quick form must use its fixed service`);
  assert.ok(route.source.includes(`quickFormLocation="${route.aboveFoldLocation}"`), `${route.name} quick form must use its fixed location`);
  assert.ok(route.source.includes(`service: '${route.slug}'`), `${route.name} must expose route-specific page context`);
  assert.match(
    route.source,
    new RegExp(`<ContactHome[\\s\\S]*?formType="paid_search"[\\s\\S]*?formLocation="${route.terminalLocation}"[\\s\\S]*?service="${route.service}"[\\s\\S]*?pageContext=\\{PAGE_CONTEXT\\}[\\s\\S]*?/>`),
    `${route.name} terminal form must use route-specific type, location, service, and context`
  );
}
assert.match(
  resurfacingServicePage,
  /title="Deck Resurfacing[^"\n]*"[\s\S]*description="[^"]*(?:inspect|inspection)[^"]*frame/i,
  'deck resurfacing hero must lead with Deck Resurfacing and frame inspection'
);
assert.equal(
  /lowPrice="(?:[0-9]{1,4}|1[0-4][0-9]{3})"/.test(resurfacingServicePage),
  false,
  'deck resurfacing must not publish a planning minimum below $15K'
);

assert.match(
  contactHome,
  /export default function ContactHome\(\{[\s\S]*formType[\s\S]*formLocation[\s\S]*service[\s\S]*pageContext[\s\S]*\}\s*=\s*\{\}\)/,
  'ContactHome must safely accept explicit form type, location, service, and page context props'
);
assert.match(
  contactHome,
  /const resolvedFormType\s*=\s*formType\s*\|\|[\s\S]*['"]homepage['"]/,
  'ContactHome must preserve homepage as the no-context form type default'
);
assert.match(
  contactHome,
  /const resolvedFormLocation\s*=\s*formLocation\s*\|\|[\s\S]*['"]homepage_contact_form['"]/,
  'ContactHome must preserve homepage_contact_form only as the no-context location default'
);
assert.match(contactHome, /useLeadSubmit\(\{\s*formType:\s*resolvedFormType,\s*pageContext\s*\}\)/, 'ContactHome must submit with its derived form type');
assert.match(contactHome, /data-form-location=\{resolvedFormLocation\}/, 'ContactHome must expose its derived form location');
assert.match(contactHome, /<select[^>]*name="service"[^>]*defaultValue=\{resolvedService\}/, 'ContactHome must apply its route-specific service default');
for (const field of ['page_type', 'page_city', 'page_county']) {
  assert.ok(contactHome.includes(`name="${field}"`), `ContactHome must deliver ${field} context with the lead`);
}
assert.match(
  contactHome,
  /restrictLowBudget\s*=\s*\[[\s\S]*Deck Replacement[\s\S]*Deck Resurfacing[\s\S]*\]\.includes\(resolvedService\)/,
  'ContactHome must restrict lower-budget choices only for replacement and resurfacing service context'
);
assert.match(
  contactHome,
  /!restrictLowBudget[\s\S]*\$10K-\$20K/,
  'ContactHome must retain its prior lower-budget choice outside replacement and resurfacing routes'
);
assert.match(
  contactForm,
  /usePathname\(\)[\s\S]*restrictedBudgetRoute[\s\S]*\/services\/deck-replacement[\s\S]*\/services\/deck-resurfacing/,
  'global ContactForm must detect replacement and resurfacing routes before showing budget choices'
);
assert.match(
  contactForm,
  /!restrictedBudgetRoute[\s\S]*Under \$15K/,
  'global ContactForm must hide the under-$15K option on replacement and resurfacing routes'
);

assert.match(
  contactHome,
  /value=["']Deck Replacement["']/, 
  'homepage form must offer Deck Replacement as a service'
);
for (const [name, source] of [
  ['PaidSearchLeadForm', paidSearchForm],
  ['ContactForm', contactForm],
  ['ContactHome', contactHome],
]) {
  assert.match(
    source,
    /<button[\s\S]*?href=["']\/privacy-policy["'][\s\S]*?Privacy Policy/i,
    `${name} must show an adjacent visible Privacy Policy disclosure after its submit control`
  );
  assert.equal(
    /name=["'](?:ad|marketing|optional)[^"']*consent/i.test(source),
    false,
    `${name} privacy disclosure must remain separate from optional advertising consent`
  );
}

for (const field of ['name', 'phone', 'city', 'email']) {
  assert.ok(
    paidSearchForm.includes('htmlFor={`${formLocation}-' + field + '`}'),
    `PaidSearchLeadForm must provide a persistent label for ${field}`
  );
}

assert.equal(
  replacementPage.includes('leadSource="Google Search"'),
  false,
  'replacement landing page must not hard-code Google Search attribution'
);
assert.equal(
  paidSearchForm.includes("leadSource = 'Google Search'"),
  false,
  'paid-search form must derive source from click IDs and UTM data'
);
assert.match(
  thankYouPage,
  /ThankYouTracking/,
  'thank-you page must delegate visible state to endpoint-backed verification'
);
assert.equal(
  thankYouPage.includes('hasConfirmationProof'),
  false,
  'thank-you page must not infer success from query-string presence'
);
assert.match(
  contactForm,
  /result\.success\s*&&\s*result\.confirmationReady/,
  'modal contact form may close only when a verified confirmation handoff is ready'
);
assert.match(
  contactForm,
  /result\.success[\s\S]*setStatus\(["']success["']\)/,
  'modal contact form must leave a visible success state when delivery succeeds without navigation'
);
assert.match(
  metaLeadForm,
  /result\.success[\s\S]*setStatus\(["']success["']\)/,
  'Meta lead form must leave submitting state after successful delivery'
);
assert.match(
  metaLeadForm,
  /status\s*===\s*["']success["']/,
  'Meta lead form must render an inline success state when confirmation navigation is unavailable'
);
const successGate = createSubmissionGate();
let deliveryCalls = 0;
let finishDelivery;
const pendingDelivery = new Promise((resolve) => { finishDelivery = resolve; });
const firstAttempt = successGate.run(async () => {
  deliveryCalls += 1;
  await pendingDelivery;
  return { success: true };
});
const reentrantAttempt = await successGate.run(async () => {
  deliveryCalls += 1;
  return { success: true };
});
assert.equal(reentrantAttempt.skipped, true, 'same-tick duplicate submission must be skipped');
assert.equal(deliveryCalls, 1, 'same-tick duplicate submission must not invoke operational delivery twice');
finishDelivery();
await firstAttempt;
const postSuccessAttempt = await successGate.run(async () => {
  deliveryCalls += 1;
  return { success: true };
});
assert.equal(postSuccessAttempt.skipped, true, 'successful delivery must keep the gate locked');
assert.equal(deliveryCalls, 1, 'post-success submit must not invoke operational delivery again');

const retryGate = createSubmissionGate();
const failedAttempt = await retryGate.run(async () => ({ success: false }));
assert.equal(failedAttempt.result.success, false, 'failed delivery result must be returned');
const retryAttempt = await retryGate.run(async () => ({ success: true }));
assert.equal(retryAttempt.skipped, false, 'failed delivery must unlock the gate for retry');
const rejectedGate = createSubmissionGate();
await assert.rejects(
  rejectedGate.run(async () => { throw new Error('expected rejection'); }),
  /expected rejection/,
  'rejected delivery must be surfaced while unlocking the gate'
);
const retryAfterRejection = await rejectedGate.run(async () => ({ success: true }));
assert.equal(retryAfterRejection.skipped, false, 'rejected delivery must unlock the same gate for retry');

for (const [name, source] of [
  ['PaidSearchLeadForm', paidSearchForm],
  ['ContactHome', contactHome],
  ['ContactForm', contactForm],
]) {
  assert.match(
    source,
    /createSubmissionGate\(\)[\s\S]*\.run\(\(\)\s*=>\s*submit\(/,
    `${name} must route operational delivery through the tested synchronous submission gate`
  );
}

for (const [name, source] of [
  ['PaidSearchLeadForm', paidSearchForm],
  ['ContactHome', contactHome],
]) {
  assert.match(
    source,
    /status\s*===\s*["']success["'][\s\S]*role=["']status["']/,
    `${name} must announce successful asynchronous delivery`
  );
  assert.match(
    source,
    /status\s*===\s*["']error["'][\s\S]*role=["']alert["']/,
    `${name} must announce asynchronous submission failure`
  );
}

for (const [name, source] of [
  ['PaidSearchLeadForm', paidSearchForm],
  ['ContactHome', contactHome],
]) {
  assert.match(
    source,
    /disabled=\{status\s*===\s*["']submitting["']\s*\|\|\s*status\s*===\s*["']success["']\}/,
    `${name} must disable its submit control after success`
  );
  assert.match(
    source,
    /status\s*===\s*["']success["'][\s\S]*["']Message Received["']/,
    `${name} must change its CTA after success`
  );
}

for (const [name, source] of [
  ['ContactForm', contactForm],
  ['MetaLeadForm', metaLeadForm],
]) {
  assert.match(
    source,
    /disabled=\{status\s*===\s*["']submitting["']\s*\|\|\s*status\s*===\s*["']success["']\}/,
    `${name} must disable its submit control after successful delivery`
  );
}
assert.match(
  metaLeadForm,
  /status\s*===\s*["']submitting["']\s*\|\|\s*status\s*===\s*["']success["']/,
  'MetaLeadForm must block duplicate submits while submitting and after success'
);

console.log('Lead UX regression checks passed.');
