import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const origin = process.env.SEO_AUDIT_ORIGIN || 'http://127.0.0.1:3197';
const output = process.env.AUDIT_OUTPUT || 'scripts/output/quality-release-local';
const routes = ['/get-estimate', '/before-and-after', '/review', '/deck-builder-centreville-va', '/composite-decks/ashburn', '/deck-repair/fairfax', '/screened-porches/reston'];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
try {
  for (const width of [320, 360, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    // Keep QA visits out of third-party analytics and never send a form request.
    await context.route('**/*', (route) => {
      const request = route.request();
      return new URL(request.url()).origin === origin && ['GET', 'HEAD'].includes(request.method())
        ? route.continue() : route.abort();
    });
    const page = await context.newPage();
    for (const path of routes) {
      const response = await page.goto(`${origin}${path}`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, `${path}: HTTP status`);
      await page.evaluate(() => document.fonts.ready);
      const metrics = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
        h1: document.querySelectorAll('h1').length,
        formCount: document.forms.length,
        phone: Boolean(document.querySelector('a[href="tel:+15716557207"]')),
      }));
      assert.ok(metrics.scroll <= metrics.client + 1, `${path} at ${width}: overflow ${JSON.stringify(metrics)}`);
      assert.equal(metrics.h1, 1, `${path}: H1 count`);
      assert.ok(metrics.phone, `${path}: phone CTA absent`);
      if (path === '/get-estimate') {
        assert.ok(metrics.formCount > 0, 'Estimate form absent');
        const submit = page.locator('form button[type="submit"]').first();
        await submit.scrollIntoViewIfNeeded();
        assert.ok(await submit.isVisible(), 'Estimate submit control hidden');
        const box = await submit.boundingBox();
        assert.ok(box.x >= 0 && box.x + box.width <= width + 1, 'Submit control outside viewport');
      }
      if (width === 320 || width === 1440) {
        await page.screenshot({ path: `${output}/${path.slice(1).replaceAll('/', '-')}-${width}.png`, fullPage: true });
      }
      results.push({ path, width, ...metrics });
    }
    await context.close();
  }
  const response = await fetch(`${origin}/review-request`, { redirect: 'manual' });
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://ldndecks.com/review');
  const xml = await (await fetch(`${origin}/image-sitemap.xml`)).text();
  for (const image of ['deck_stair_failures_infographic.png', 'permit-portal.png', 'deck-permit-fairfax-county-social.png']) {
    assert.ok(xml.includes(image), `Image sitemap missing ${image}`);
  }
  const report = { status: 'PASS', captured: new Date().toISOString(), origin, scenarios: results.length, results, reviewRedirect: 301 };
  await writeFile(`${output}/results.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ ...report, results: undefined }, null, 2));
} finally {
  await browser.close();
}
