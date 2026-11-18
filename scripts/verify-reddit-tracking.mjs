import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source = fs.readFileSync('src/lib/redditTracking.js', 'utf8').replace(/export /g, '');
function fixture({ consent = true, search = '', blockedStorage = false } = {}) {
  const scripts = [], values = new Map();
  const window = { ldnConsentGranted: consent, location: { pathname: '/get-estimate', search }, sessionStorage: {
    getItem(k) { if (blockedStorage) throw Error('blocked'); return values.get(k); },
    setItem(k,v) { if (blockedStorage) throw Error('blocked'); values.set(k,v); },
  }};
  const ctx = vm.createContext({window, URLSearchParams, document: {createElement: () => ({}),head:{appendChild(s){scripts.push(s);}}}});
  vm.runInContext(source + '\nthis.page=trackRedditPageVisit;this.lead=trackRedditConfirmedLead;', ctx);
  const events = () => window.rdt?.callQueue || [];
  return {window, scripts, ctx, events};
}
let f = fixture({consent:false});
assert.equal(await f.ctx.page(), false);assert.equal(await f.ctx.lead({eventId:'x'}), false);assert.equal(f.scripts.length,0);
for (const search of ['?proof=secret&eid=x','?eid=x','?proof=secret']) {
  f=fixture({search}); assert.equal(await f.ctx.page(),false);assert.equal(await f.ctx.lead({eventId:'x'}),false);assert.equal(f.scripts.length,0);
}
f=fixture();f.window.location.pathname='/admin/operations';assert.equal(await f.ctx.page(),false);assert.equal(f.scripts.length,0);
f=fixture();let a=f.ctx.page(), b=f.ctx.page();assert.equal(f.scripts.length,1);f.scripts[0].onload();await Promise.all([a,b]);assert.equal(f.events().length,2);assert.equal(f.events()[1][1],'PageVisit');
await f.ctx.lead({eventId:'verified-1'});await f.ctx.lead({eventId:'verified-1'});assert.equal(f.events().filter(e=>e[1]==='Lead').length,1);assert.deepEqual(Object.keys(f.events().at(-1)[2]),['conversionId']);
f.window.location.pathname='/another-project';await f.ctx.page();assert.equal(f.events().filter(e=>e[1]==='PageVisit').length,2);
f.window.ldnConsentGranted=false;await f.ctx.lead({eventId:'verified-2'});assert.equal(f.events().filter(e=>e[1]==='Lead').length,1);
f=fixture({blockedStorage:true});a=f.ctx.lead({eventId:'verified-3'});f.scripts[0].onload();await a;await f.ctx.lead({eventId:'verified-3'});assert.equal(f.events().filter(e=>e[1]==='Lead').length,1);
f=fixture();a=f.ctx.page();f.window.ldnConsentGranted=false;f.scripts[0].onload();await a;assert.equal(f.events().length,0);f.window.ldnConsentGranted=true;await f.ctx.page();assert.equal(f.events().length,2);
f=fixture();a=f.ctx.lead({eventId:'verified-4'});f.scripts[0].onerror();assert.equal(await a,false);assert.equal(f.events().length,0);
// Confirm the current receipt-based route; proof is no longer placed in the URL.
const confirmation=fs.readFileSync('src/components/ThankYouTracking.jsx','utf8');
const client=fs.readFileSync('src/lib/leadConfirmationClient.js','utf8').replace(/export /g,'');
const ctx=vm.createContext({});
vm.runInContext(client+'\nthis.verify=verifyLeadConfirmation;',ctx);
for (const [httpOk,bodyOk,expected] of [[true,true,true],[false,true,false],[true,false,false]]) {
  const calls=[];
  const verified=await ctx.verify('verified-local','local-proof',async(url,options)=>{
    calls.push({url,options});return {ok:httpOk,json:async()=>({ok:bodyOk})};
  });
  assert.equal(verified,expected);
  assert.equal(calls[0].url,'/api/lead-confirmation/verify');
  assert.equal(calls[0].options.method,'POST');
  assert.deepEqual(JSON.parse(calls[0].options.body),{eventId:'verified-local',token:'local-proof'});
}
assert.match(confirmation,/consumeLeadConfirmationReceipt\(\)/);
assert.match(confirmation,/if \(isVerified\) \{\s*trackLeadConfirmed\(\{ eventId: receipt.eventId \}\)/);
assert(!confirmation.includes('window.location.search'),'confirmation must not take proof from URL');
console.log('PASS: consent, sensitive routes, URL proof guard, load race, route events, deduplication, blocked storage, revocation, SDK failure, current server-verified receipt contract. No network or real leads generated.');
