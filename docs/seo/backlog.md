# Backlog SEO, GEO și lead-uri

Data: 2026-10-18. Domeniu: https://ldndecks.com. Repository: `primesolutionoffice1-create/ldn-decks`. Hosting: Vercel, producția urmărește `main`. Framework: Next.js 16 App Router. Sursa de identitate: `src/lib/business.js`. Nu este Prime Solution Services.

## Lead calificat

Confirmat din formular și din `business.js`, fără prag de buget:

- serviciu relevant: new deck, replacement, composite, resurfacing, screened porch, pergola, patio, fence, sau un proiect descris la Other;
- localitate în lista `areaServed`;
- proiect real: serviciul ales plus orașul, iar mesajul este opțional;
- contact utilizabil: prenume, nume, email și telefon.

Honeypot-ul este spam. Același `event_id` este duplicat. Recrutarea și solicitările de la furnizori nu au un câmp propriu; rămân în „Other” până există o regulă de CRM. Nu există acces la CRM, deci volumul de lead-uri calificate nu este măsurat aici.

## Situația inițială, 2026-10-18

| Indicator | Valoare | Sursă | Limită |
| --- | --- | --- | --- |
| Sitemap | 379 URL-uri, HTTP 200 | `curl` pe `/sitemap.xml` | Nu dovedește indexarea în Google |
| Eșantion live | 38 URL-uri: 200, un H1, canonical pe `ldndecks.com`, fără `noindex` | GET, concurență 4 | Nu acoperă toate șabloanele de oraș |
| Titlu homepage | Custom Deck Builder in Northern Virginia \| Loudoun Decks | HTML live | — |
| Search Console, GA4, GBP, Bing, CRM | Fără acces | variabile de mediu absente | Nu înseamnă trafic zero sau zero lead-uri |

Pagini protejate, deja în sitemap și cu cerere de ofertă: `/`, `/get-estimate`, `/contact`, `/deck-builder-northern-virginia`, `/composite-decks`, `/services/new-decks`, `/services/deck-replacement`, `/services/deck-repair`, hub-urile de județ și paginile de oraș canonice. Nu le-am schimbat URL-ul.

## Lotul curent

### LDN-SEO-001 — P1 — zonă de servicii incompletă pe traseul de ofertă

- Dovadă: `ContactForm`, grila de pe homepage și FAQ-ul de la `/get-estimate` omiteau cel puțin una dintre Alexandria, Falls Church sau Stafford, deși `areaServed` le conține. Meta description de la `/contact` se oprea la Prince William și era tăiată de limita de 155 de caractere dacă lista completă era lipită.
- Cauză: text scris manual, încredere mare.
- Impact: un proprietar din Stafford sau Falls Church poate crede că nu este în zona deservită chiar pe pagina de cerere.
- Alternativă respinsă: pagini noi de oraș. Paginile există.
- Implementare: `formatServiceArea()` și folosirea lui în formular, grilă, FAQ și descrierea de contact.
- Test: `npm run seo:verify-conversion-identity` și HTML-ul local.
- Indicator: cereri din Stafford, Alexandria și Falls Church, de evaluat la 30/60/90 de zile numai dacă există CRM sau Search Console.
- Stare: testat local pe `next start`. Publicarea depinde de CI și de preview.

### LDN-SEO-002 — P1 — id-uri de formular care se ciocnesc

- Dovadă: `ContactForm` folosea `id="email"` și celelalte id-uri fixe. Header-ul montează al doilea formular când sertarul este deschis, inclusiv pe `/get-estimate` și `/contact`.
- Cauză: un singur set de id-uri, încredere mare.
- Impact: eticheta poate focaliza câmpul din formularul din spate, deci textul poate ajunge în formularul nevizibil.
- Alternativă respinsă: să ascund formularul din pagină când se deschide sertarul. Asta schimbă mai mult comportament.
- Implementare: `useId()` pentru fiecare câmp. `name` rămâne neschimbat, ca să nu se schimbe payload-ul.
- Test: două formulare în DOM au id-uri diferite; scriptul respinge `id="email"`.
- Indicator: același cu LDN-SEO-001. Nu există încă o rată de eroare de formular.
- Stare: testat local. Două formulare pe `/contact` au id-uri de email diferite. Nu s-a trimis niciun lead.

### LDN-SEO-003 — P1 — a doua entitate LocalBusiness pe finanțare

- Dovadă: `src/app/deck-financing/page.js` emitea `@id` `#localbusiness`, cu adresă stradală, în timp ce entitatea canonică este `#organization`. Adresa nu este vizibilă în hero-ul paginii.
- Cauză: schema locală, încredere mare.
- Impact: semnale de entitate împărțite pe o pagină comercială.
- Alternativă respinsă: să adaug adresa vizibil în pagină. Asta amplifică adresa fără o nevoie de conversie.
- Implementare: `provider` referă doar `#organization`.
- Test: scriptul eșuează dacă reapare `#localbusiness`.
- Indicator: nu este un indicator de lead. Se reverifică la următorul audit de schema.
- Stare: testat local. HTML-ul de la `/deck-financing` nu mai conține `#localbusiness`.

## Așteaptă aprobare

- LDN-SEO-004, P2: tabelele de preț rămase, inclusiv Prince William. Ștergerea lor schimbă o promisiune publicată. Nu le-am modificat.
- LDN-SEO-005, P3: lanțul `www` plus slash final, în doi pași. Schimbarea de redirect cere aprobare.
- Acces read-only la Search Console, GA4, Google Business Profile, Bing Webmaster Tools și CRM. Fără acesta nu există baseline de impresii, apeluri sau proiecte câștigate.

## Ținte de implementare, nu de venit

- 30 de zile: lotul acesta rămâne live, iar verificarea de identitate rămâne în CI.
- 60 de zile: același crawl de control pe URL-urile comerciale, plus Search Console dacă accesul există.
- 90 de zile: compararea cererilor pe județ numai din CRM sau din exportul de lead-uri. Niciun volum nu este garantat.
