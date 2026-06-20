# Before/After Evidence Resolution Sprint

Created: 2026-06-03

## Purpose

This sprint moves `/before-and-after` and related cost examples from placeholder-safe content toward verified proof assets without fabricating project details.

Current status:

- Before/after image files exist in `public/Projectsbeforeandafter`.
- Four `/before-and-after` project cards are now represented in `seo-blueprint/evidence/project-evidence-ledger.json`.
- All four are marked `partial`, not `verified`.
- Public copy keeps `[VERIFY ...]` markers for month/year, timeline, final cost, and claim-specific highlights.

## Publish Rule

Do not remove `[VERIFY ...]` placeholders or describe these entries as verified case studies until the matching project record has:

- signed estimate, invoice, or owner-confirmed job record
- city and neighborhood, if available
- month/year
- exact service type
- material line and color
- verified scope of work
- final cost or approved publishable cost range
- construction timeline or approved publishable timeline range
- permit or HOA status, if applicable
- before and after photo linkage confirmation

No customer names, street addresses, phone numbers, emails, permit numbers, or unredacted private documents should be stored in the public repo.

## Current Project Cards

### before-after-project-1

Current page label: Wood to Composite Resurfacing

Known:

- City: Leesburg
- Photo pair:
  - `/Projectsbeforeandafter/project1before.jpeg`
  - `/Projectsbeforeandafter/project1after.jpeg`
- Claimed material on page: Trex Enhance Naturals Foggy Wharf

Needs verification:

- month/year
- neighborhood, if safe to publish
- actual material line and color
- whether this was resurfacing or full replacement
- frame inspection result
- final cost or publishable cost range
- timeline
- savings claim or replacement note
- permit or HOA status

### before-after-project-2

Current page label: Elevated Deck Modernization

Known:

- City: Ashburn
- Photo pair:
  - `/Projectsbeforeandafter/project2before.jpeg`
  - `/Projectsbeforeandafter/project2after.jpeg`
- Claimed material on page: TimberTech Reserve Collection

Needs verification:

- month/year
- neighborhood or community, if safe to publish
- actual material line and color
- structural scope
- whether frame, ledger, footings, stairs, or railings were replaced
- final cost or publishable cost range
- timeline
- permit or HOA status
- any code-compliance claims

### before-after-project-3

Current page label: Full Backyard Revitalization

Known:

- City: Manassas
- Photo pair:
  - `/Projectsbeforeandafter/project3before.jpeg`
  - `/Projectsbeforeandafter/project3after.jpeg`
- Claimed material on page: Trex Transcend Lineage

Needs verification:

- month/year
- actual material line and color
- whether skirting and storage access were included
- final cost or publishable cost range
- timeline
- permit or HOA status
- exact work performed

### before-after-project-4

Current page label: Townhome Deck Transformation

Known:

- City: Sterling
- Photo pair:
  - `/Projectsbeforeandafter/project4before.jpeg`
  - `/Projectsbeforeandafter/project4after.jpeg`
- Claimed material on page: Trex Enhance Basics Clam Shell

Needs verification:

- month/year
- neighborhood/community, if safe to publish
- actual material line and color
- townhome/HOA requirements
- final cost or publishable cost range
- timeline
- permit or HOA status
- any claim about minimal neighbor disruption

## Composite Cost Page Evidence Gap

`/composite-deck-cost-northern-virginia` currently treats local examples as estimating scenarios, not verified case studies.

To upgrade them into proof-bearing examples, collect:

- signed estimate or invoice
- city
- month/year
- size
- material line/color
- railing/stair/light scope
- elevation and site conditions
- final installed cost or approved publishable cost band
- permit or HOA status
- at least one matching project photo

## Owner Collection Packet

For each project, ask the owner for:

```text
Project ID:
City:
Neighborhood/community:
Month/year:
Service type:
Materials:
Scope performed:
Failure found, if any:
Permit/HOA required?
Final cost or publishable range:
Timeline or publishable range:
Before photo path:
After photo path:
Notes safe to publish:
Private details to omit:
```

Prefilled CSV for owner completion:

`seo-blueprint/evidence/before-after-owner-intake-2026-06-02.csv`

The CSV already includes project IDs and image paths. The owner should replace `UNKNOWN - OWNER TO FILL` values and add only facts that can be supported by an estimate, invoice, project record, photo metadata, or direct owner confirmation.

## Next Implementation Step After Evidence Arrives

1. Fill `seo-blueprint/evidence/project-evidence-intake-template.csv`.
2. Run dry import:

```bash
npm run seo:import-evidence -- --file path/to/owner-filled.csv --dry-run
```

3. Inspect each row manually.
4. Import with verified status only if evidence has been inspected:

```bash
npm run seo:import-evidence -- --file path/to/owner-filled.csv --allow-verified
```

5. Run:

```bash
npm run seo:validate-evidence
npm run seo:validate-schema
npm run build
```

6. Remove the matching `[VERIFY ...]` markers only for records that are actually verified.
