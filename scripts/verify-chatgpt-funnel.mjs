import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const read = p => fs.readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const strip = s => s.replace(/^\s*import[\s\S]*?;\n/gm, '').replace(/export (async )?function /g, '$1function ').replace(/export const /g, 'const ');
const pure = await import('data:text/javascript;base64,' + Buffer.from(read('src/lib/leadAttribution.js')).toString('base64'));
let count = 0;
function check(name, fn) { fn(); console.log(`PASS ${++count}: ${name}`); }
function storage() { const m = new Map(); return { getItem:k=>m.get(k)||null, setItem:(k,v)=>m.set(k,String(v)), removeItem:k=>m.delete(k) }; }
function browser({ accepted=true, blocked=false, href='https://ldndecks.com/services/deck-replacement?utm_source=chatgpt&utm_medium=paid&utm_campaign=ldn_deck_replacement', referrer='' }={}) {
  const cookies = new Map(); let now=100000; let writes=0;
  const document = {referrer};
  Object.defineProperty(document,'cookie',{get(){ if(blocked) throw Error('cookies blocked'); return [...cookies].map(([k,v])=>`${k}=${v}`).join('; '); },set(v){ if(blocked) throw Error('cookies blocked'); writes++;const [pair,...rest]=v.split(';'); const [k,value]=pair.split('='); if(rest.some(x=>x.trim()==='max-age=0')) cookies.delete(k);else cookies.set(k,value); }});
  const window = {ldnConsentGranted:accepted, location:new URL(href), __ldnFirstLanding:new URL(href).pathname, localStorage:{getItem(){if(blocked)throw Error();return accepted?'accepted':'declined';}}, sessionStorage:storage()};
  if(blocked) Object.defineProperty(window,'sessionStorage',{get(){throw Error('blocked');}});
  const c={ window,document,URL,URLSearchParams,Date:{now:()=>now},console };
  vm.runInNewContext(strip(read('src/lib/leadAttribution.js'))+'\n'+strip(read('src/lib/clickIds.js'))+'\nglobalThis.api={captureAttributionContext,getLeadAttributionContext,claimChatGPTArrival,getUtmParams,getClickIds,persistAttributionCookies,clearAttributionCookies};',c);
  return { ...c,api:c.api,cookies,get writes(){return writes;},advance(ms){now+=ms;} };
}
check('paid is explicit and nonpaid is distinct',()=>{
  assert.equal(pure.resolveLeadAttribution({source:'chatgpt',medium:'paid',consent:true}).channel,'chatgpt_paid');
  assert.equal(pure.resolveLeadAttribution({source:'chatgpt',medium:'referral',consent:true}).channel,'chatgpt_organic');
  assert.equal(pure.resolveLeadAttribution({source:'chatgpt',consent:true}).channel,'direct_or_unknown');
  assert.equal(pure.resolveLeadAttribution({referrer:'https://chatgpt.com/c/secret',consent:true}).channel,'chatgpt_organic');
});
check('unknown consent never becomes paid',()=>assert.equal(pure.resolveLeadAttribution({source:'chatgpt',medium:'paid'}).channel,'consent_not_granted'));
check('missing and sensitive paths do not fabricate home or disclose text',()=>{
  assert.equal(pure.safePagePath(), '');assert.equal(pure.safePagePath(''), '');
  assert.equal(pure.safePagePath('/customer-name-and-address'), '/other');
  assert.equal(pure.safePagePath('https://evil.example/contact'), '');
  assert.equal(pure.safePagePath('/get-estimate?proof=secret#x'),'/get-estimate');
  assert.equal(pure.safeCampaign('email=private@example.com'),'unknown');
});
check('current paid touch replaces complete stale cookie group and persists once',()=>{
  const b=browser();b.cookies.set('utm_source','google');b.cookies.set('utm_campaign','old');b.cookies.set('gclid','old-id');
  b.api.captureAttributionContext(); assert.equal(b.api.getUtmParams().utm_source,'chatgpt');assert.equal(b.api.getClickIds().gclid,undefined);
  const writes=b.writes;b.api.captureAttributionContext();assert.equal(b.writes,writes);
  b.window.location=new URL('https://ldndecks.com/get-estimate');const ctx=b.api.getLeadAttributionContext();
  assert.equal(ctx.first_landing_path,'/services/deck-replacement');assert.equal(ctx.submit_page_path,'/get-estimate');assert.equal(ctx.campaign,'ldn_deck_replacement');
});
check('unknown campaign does not inherit previous campaign',()=>{
 const b=browser();b.api.captureAttributionContext();b.window.location=new URL('https://ldndecks.com/?utm_source=chatgpt&utm_medium=paid');
 assert.equal(b.api.getLeadAttributionContext().campaign,'unknown');assert.equal(b.api.getUtmParams().utm_campaign,undefined);
});
check('arrival dedup and immutable arrival cohort survive later campaign',()=>{
 const b=browser();assert.equal(b.api.claimChatGPTArrival().campaign,'ldn_deck_replacement');assert.equal(b.api.claimChatGPTArrival(),null);
 b.window.location=new URL('https://ldndecks.com/get-estimate?utm_source=chatgpt&utm_medium=paid&utm_campaign=ldn_screened_porches');
 const lead=b.api.getLeadAttributionContext();assert.equal(lead.campaign,'ldn_screened_porches');assert.equal(lead.arrival_campaign,'ldn_deck_replacement');assert.equal(lead.arrival_observed,true);
});
check('referral beats legacy cookie and survives document navigation',()=>{
 const b=browser({href:'https://ldndecks.com/',referrer:'https://chatgpt.com/c/private?x=secret'});b.cookies.set('utm_source','chatgpt');b.cookies.set('utm_medium','paid');
 b.api.captureAttributionContext();b.window.location=new URL('https://ldndecks.com/get-estimate');b.document.referrer='https://ldndecks.com/';
 const ctx=b.api.getLeadAttributionContext();assert.equal(ctx.attribution_channel,'chatgpt_organic');assert.equal(ctx.arrival_referrer,'https://chatgpt.com');assert.equal(Object.keys(b.api.getUtmParams()).length,0);
 const form=new FormData();form.set('optional_tracking_consent','accepted');form.set('arrival_referrer',ctx.arrival_referrer);form.set('referrer',b.document.referrer);
 assert.equal(pure.normalizeLeadAttribution(form).channel,'chatgpt_organic');
});
check('blocked storage/cookies retain current explicit consent and memory dedup',()=>{
 const b=browser({blocked:true});assert.equal(b.api.getLeadAttributionContext().attribution_channel,'chatgpt_paid');assert.ok(b.api.claimChatGPTArrival());assert.equal(b.api.claimChatGPTArrival(),null);
});
check('decline and revocation remove optional session and block reads',()=>{
 const b=browser();b.api.claimChatGPTArrival();b.window.ldnConsentGranted=false;b.api.clearAttributionCookies();assert.equal(b.cookies.size,0);assert.equal(b.api.claimChatGPTArrival(),null);assert.equal(Object.keys(b.api.getUtmParams()).length,0);
});
check('30 minute session expiry does not invent paid arrival from legacy cookies',()=>{
 const b=browser();b.api.claimChatGPTArrival();b.window.location=new URL('https://ldndecks.com/get-estimate');b.advance(30*60*1000+1);assert.equal(b.api.claimChatGPTArrival(),null);assert.equal(b.api.getLeadAttributionContext().attribution_basis,'legacy_cookie');
});
check('server boundary strips sensitive URLs/control chars before all sinks',()=>{
 const f=new FormData();for(const [k,v] of Object.entries({optional_tracking_consent:'accepted',utm_source:'chatgpt',utm_medium:'paid',utm_campaign:'ldn_deck_replacement\n',source_url:'https://ldndecks.com/get-estimate?proof=private#p',referrer:'javascript:alert(1)',first_landing_path:'',submit_page_path:'/get-estimate?email=private'})) f.set(k,v);
 const out=pure.normalizeLeadAttribution(f);assert.equal(out.channel,'chatgpt_paid');assert.equal(f.get('source_url'),'https://ldndecks.com/get-estimate');assert.equal(f.get('referrer'),'');assert.equal(f.get('first_landing_path'),'');assert.equal(f.get('submit_page_path'),'/get-estimate');assert.equal(f.get('utm_campaign'),'ldn_deck_replacement');
 f.set('optional_tracking_consent','declined');pure.normalizeLeadAttribution(f);assert.equal(f.get('utm_source'),'');assert.equal(f.get('attribution_channel'),'consent_not_granted');
});
// Execute actual GHL sender against a stub transport, never a network request.
for (const [channel,tag] of [['chatgpt_paid','source-chatgpt-paid'],['chatgpt_organic','source-chatgpt-organic']]) {
 const captured=[];const c={process:{env:{GHL_INBOUND_WEBHOOK_URL:'https://invalid.local/test'}},console,AbortController,setTimeout,clearTimeout,lookupCounty(){return '';},async fetch(_url,options){captured.push(JSON.parse(options.body));return {ok:true};}};
 vm.runInNewContext(strip(read('src/server/ghl.js'))+'\nglobalThis.send=sendGhlLead;',c);
 const f=new FormData();f.set('attribution_channel',channel);f.set('leadSource','Local SEO city page');f.set('utm_source','chatgpt');f.set('utm_medium',channel==='chatgpt_paid'?'paid':'referral');f.set('event_id','offline-event');
 await c.send(f);check(`${channel} CRM source overrides static form label and preserves it separately`,()=>{assert.ok(captured[0].tags.includes(tag));assert.equal(captured[0].custom_fields.lead_source,'Local SEO city page');});
}
console.log(`PASS: ${count} funnel cases; all transports stubbed, no live events or lead records.`);
