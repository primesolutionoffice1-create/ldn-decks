# LDN Decks GEO Proof Lock

Status: **draft / needs-owner-verification / do-not-publish-as-fact**
Date: **2026-07-19**
Scope: **LDN Decks / Loudoun Decks only**

This register prevents unverified business facts from being repeated in visible copy, JSON-LD, `llms.txt`, author bylines, or AI answer blocks. A claim is publishable only when its status is `verified` and the cited evidence is current.

| Claim | Canonical public value | Evidence | Checked | Status | Safe wording until verified | Affected surfaces |
|---|---|---|---|---|---|---|
| Public brand | Loudoun Decks; LDN Decks abbreviation | `src/lib/business.js` and current site identity | 2026-07-19 | verified for brand use | “Loudoun Decks” or “LDN Decks” | metadata, schema, llms, headings |
| Legal entity name | Not confirmed in supplied owner evidence | Internal NAP reconciliation marks owner confirmation needed | 2026-07-19 | blocked | Do not publish or infer a legal suffix | llms, legal pages, schema |
| Founder public name | Nicolae Zugrav vs Nick relationship not confirmed in supplied evidence | `src/lib/business.js`; `src/components/NamedAuthor.jsx` | 2026-07-19 | blocked | Use an organizational editorial byline or obtain owner confirmation | Person schema, team page, bylines |
| Experience duration | “10+ years” lacks archived proof in the supplied evidence | `src/components/NamedAuthor.jsx`; team/press copy | 2026-07-19 | blocked | Omit the duration pending documentation | bylines, team, press, schema |
| Contractor license | VA Class A #2705191673 | `src/lib/business.js`; current DPOR status must be checked before public citation | 2026-07-19 | verify-current | “Verify current license status with Virginia DPOR” | schema, llms, trust pages |
| Insurance status | Current certificate not supplied | Owner evidence required | 2026-07-19 | blocked | Do not state “insured” without a current certificate | team, trust, service pages |
| Workmanship warranty | Current signed terms not supplied | Owner contract/warranty document required | 2026-07-19 | blocked | “Terms are defined in the signed project agreement” | llms, warranty pages, proposals |
| Project minimum and typical range | Current owner-approved pricing evidence not supplied | Estimate history or approved pricing policy required | 2026-07-19 | blocked | “Request a current written estimate” | llms, pricing pages, sales copy |
| Loudoun deck permit requirement | All decks require building and zoning permits | https://www.loudoun.gov/1166/Decks | 2026-07-19 | verified-source | Cite the county and tell readers to recheck current instructions | permit page, FAQ/schema, llms routing |
| Loudoun deck fees | $265 typical under 1,000 sq ft outside an incorporated town; $395 using county plan specifications | https://www.loudoun.gov/1166/Decks | 2026-07-19 | verified-source / time-sensitive | Include checked date and direct county link | permit page, FAQ/schema |
| Permit processing time | Varies by intake, building/zoning review, corrections, and jurisdiction | https://www.loudoun.gov/6084/Residential-Permits-Processing-Dashboard | 2026-07-19 | time-sensitive | Link the live dashboard; do not promise a fixed duration | permit pages, estimates, AI answers |
| Website search | No public `/search` route found | Local route inventory and public 404 observed in GEO audit | 2026-07-17 | verified-absent | Do not emit WebSite `SearchAction` | global WebSite schema |

## Promotion rule

Before moving any blocked claim to `verified`:

1. Archive the owner or authoritative source.
2. Record the source URL/file and checked date above.
3. Update every affected surface from the same canonical value.
4. Run schema, AI-discovery, proof-runtime, and build checks.
5. Obtain action-specific approval before deployment.
