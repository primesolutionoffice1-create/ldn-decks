# Întreținere

Data: 2026-10-18. Stare: verificări la cerere și în CI. Nu este monitorizare 24/7.

## Comenzi

```bash
npm run seo:verify-conversion-identity
npm run lint
npm run build
npm run seo:validate-schema
npm run seo:link-audit
npm run verify:financing
```

`seo:verify-conversion-identity` citește fișierele. Nu trimite lead-uri și nu cere rețea. Cod de ieșire 0 la succes, 1 la regresie.

## Unde rulează

| Verificare | Executor | Program |
| --- | --- | --- |
| Identitate de conversie, schema, linkuri, build | GitHub Actions, workflow `Production Governance` | La fiecare pull request și push pe `main` |
| `seo:deployment-guard` pe site-ul live | GitHub Actions, `Local SEO Deployment Watchdog` | `20 10 * * *` UTC, adică 06:20 în America/New_York pe 18 octombrie 2026 (EDT) |
| Stack Vapi | `Automation Stack Watchdog` | Orar. Nu l-am modificat |

Nu am adăugat un cron nou. Eșecurile apar în fila Actions. Nu există o destinație separată de alertă autorizată, deci nu am trimis o alertă de test.

## După un deploy

```bash
curl -fsS https://ldndecks.com/get-estimate | grep -o 'Stafford County'
curl -fsS https://ldndecks.com/contact | grep -o 'Falls Church'
curl -fsS https://ldndecks.com/deck-financing | grep -c '#localbusiness' || true
```

Ultima comandă trebuie să întoarcă 0 pe HTML-ul public.

## Rollback

Revert commit-ul de pe `main`. Vercel republică commit-ul anterior. Ultima versiune bună înainte de acest lot: `5a0364a0`.

## Ce nu este programat

Căutarea în Search Console, raportul GA4 și revizuirea lunară de conținut rămân la cerere până există acces și o destinație de rezultat. O rulare manuală nu înseamnă că monitorizarea este activă.
