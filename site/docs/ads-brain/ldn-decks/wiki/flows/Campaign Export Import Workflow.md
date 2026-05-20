---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: flow
title: "Campaign Export Import Workflow"
status: ready
updated: "2026-05-15"
---

# Campaign Export Import Workflow

## Steps

1. Export campaign/ad/ad set/search term data from the ad platform.
2. Save the original file outside the vault until imported.
3. Run `import_ads_export.py`.
4. Confirm the raw copy exists under `.raw/sources/exports/`.
5. Open the source note in `wiki/sources/`.
6. Review campaign pages created or updated under `wiki/campaigns/`.

## Rule

Never edit raw exports in place. Refresh by importing a new dated file.

## Related

- [[Export Intake Guide]]
- [[wiki/sources/_index|Sources Hub]]
- [[wiki/campaigns/_index|Campaigns Hub]]
- [[Dashboard]]
