import { chromium } from 'playwright';
import fs from 'fs';

const base = 'http://127.0.0.1:3000';
const slugs = ['what-is-ai','how-ai-works','data-importance','machine-learning','neural-networks','nlp','computer-vision','generative-ai','fine-tuning','ethics-ai','ai-act','ai-at-work','practical-tools','advanced-patterns','future-ai'];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
const page = await context.newPage();
let consoleErrors=[]; let pageErrors=[];
page.on('console', m=>{ if(m.type()==='error') consoleErrors.push(m.text()); });
page.on('pageerror', e=>pageErrors.push(String(e)));

const routeResults=[];
for (const route of ['/',...slugs.map(s=>`/chapters/${s}`)]) {
  const r={route,status:'PASS',notes:[],consoleErrors:[],pageErrors:[]};
  try {
    const res=await page.goto(base+route,{waitUntil:'networkidle'});
    if(!res?.ok()) {r.status='FAIL'; r.notes.push(`HTTP ${res?.status()}`)}
    await page.locator('body').waitFor({timeout:5000});
    // basic chapter content/quiz checks
    if(route.startsWith('/chapters/')){
      const h1Count=await page.locator('h1').count();
      if(h1Count===0){r.status='FAIL'; r.notes.push('Missing H1')}
      const next=page.getByRole('button',{name:/next|avanti/i});
      const prev=page.getByRole('button',{name:/previous|indietro/i});
      if(await next.count()>0){await next.first().click().catch(()=>{});}
      if(await prev.count()>0){await prev.first().click().catch(()=>{});}
      const quizText=await page.locator('text=/quiz|domanda|question/i').count();
      if(quizText===0) r.notes.push('Quiz label not explicitly found');
    }
  } catch(e){r.status='FAIL'; r.notes.push(String(e).slice(0,200));}
  r.consoleErrors=[...consoleErrors]; r.pageErrors=[...pageErrors];
  routeResults.push(r);
  consoleErrors=[]; pageErrors=[];
}

// mobile viewport checks + screenshots on representative pages
const vps=[{w:375,h:812,name:'375'},{w:480,h:900,name:'480'},{w:768,h:1024,name:'768'},{w:1024,h:768,name:'1024'}];
const ux=[];
fs.mkdirSync('/tmp/ai-fundamentals-showcase/docs/screenshots',{recursive:true});
for(const vp of vps){
  const c=await browser.newContext({viewport:{width:vp.w,height:vp.h}});
  const p=await c.newPage();
  await p.goto(base+'/chapters/future-ai',{waitUntil:'networkidle'});
  const scrollW=await p.evaluate(()=>document.documentElement.scrollWidth);
  const clientW=await p.evaluate(()=>document.documentElement.clientWidth);
  const hasHScroll=scrollW>clientW+1;
  const minFont=await p.evaluate(()=>{
    const els=[...document.querySelectorAll('p,li,button,a,span,h1,h2,h3')];
    let min=999;
    for(const el of els){const s=parseFloat(getComputedStyle(el).fontSize||'0'); if(s>0&&s<min) min=s;}
    return min===999?0:min;
  });
  const tapCheck=await p.evaluate(()=>{
    const clickable=[...document.querySelectorAll('button,a,input,select,[role="button"]')];
    let small=0;
    for(const el of clickable){const r=el.getBoundingClientRect(); if(r.width>0&&r.height>0&&(r.width<44||r.height<44)) small++;}
    return {total:clickable.length,small};
  });
  await p.screenshot({path:`/tmp/ai-fundamentals-showcase/docs/screenshots/ux-${vp.name}.png`,fullPage:true});
  ux.push({viewport:`${vp.w}x${vp.h}`,hasHorizontalScroll:hasHScroll,minFontPx:minFont,tapTargets:tapCheck,status:(!hasHScroll && (vp.w>480 || minFont>=16))?'PASS':'WARN'});
  await c.close();
}

await browser.close();
fs.writeFileSync('/tmp/ai-fundamentals-showcase/docs/runtime-local.json',JSON.stringify(routeResults,null,2));
fs.writeFileSync('/tmp/ai-fundamentals-showcase/docs/ux-mobile.json',JSON.stringify(ux,null,2));
console.log('done runtime+ux');
