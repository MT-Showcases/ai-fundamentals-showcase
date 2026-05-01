import { chromium } from 'playwright';
import fs from 'fs';

const base = 'https://ai-fundamentals-showcase.vercel.app';
const slugs = [
  'what-is-ai','how-ai-works','data-importance','machine-learning','neural-networks','nlp','computer-vision','generative-ai','fine-tuning','ethics-ai','ai-act','ai-at-work','practical-tools','advanced-patterns','future-ai'
];

const results = [];
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
const page = await context.newPage();
const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', err => errors.push(String(err)));

await page.goto(base, { waitUntil: 'networkidle' });
results.push({ route: '/', ok: true, title: await page.title(), errors: [...errors] });
errors.length = 0;

for (const slug of slugs) {
  const route = `/chapters/${slug}`;
  let ok = true; let note='';
  try {
    const res = await page.goto(base + route, { waitUntil: 'networkidle' });
    if (!res || !res.ok()) { ok = false; note = `HTTP ${res?.status()}`; }

    // basic render sanity
    await page.locator('h1').first().waitFor({ timeout: 8000 });

    // quiz interaction if present
    const nextBtn = page.getByRole('button', { name: /next|avanti/i });
    const prevBtn = page.getByRole('button', { name: /previous|indietro/i });
    const optionBtns = page.locator('button').filter({ hasText: /A|B|C|D|opzione|option/i });
    if (await optionBtns.count() > 0) {
      await optionBtns.first().click({ timeout: 2000 }).catch(()=>{});
    }
    if (await nextBtn.count() > 0) await nextBtn.first().click({ timeout: 2500 }).catch(()=>{});
    if (await prevBtn.count() > 0) await prevBtn.first().click({ timeout: 2500 }).catch(()=>{});
  } catch (e) {
    ok = false;
    note = String(e).slice(0,180);
  }
  results.push({ route, ok, note, errors: [...errors] });
  errors.length = 0;
}

await browser.close();

fs.writeFileSync('/tmp/ai-fundamentals-showcase/docs/runtime-check.json', JSON.stringify(results, null, 2));
console.log('Saved runtime-check.json with', results.length, 'entries');
