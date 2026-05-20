---
type: "prompt"
title: "Prompt: Core 30 Content Audit"
parent: "Property Audit Part 1"
parent_folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Prompt: Core 30 Content Audit

> AI prompt extracted from [[property-audit-part-1|Property Audit Part 1]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

1. **Data Inputs**  
   * **Screaming Frog Files**:  
     * `links_all.csv`  
     * `internal_all.csv`  
   * **Homepage Content**: `[Paste the homepage copy here or provide a reference]`  
   * **GBP Categories** (primary \+ secondary):  
     * Primary: `Plumber`  
     * Secondary: `Drainage Service, Gas Installation Service, Heating Contractor`  
   * **Services**:  
     * `[List each service…]`  
   * **City Name**: `[e.g., Anytown]`  
2. **Analysis Goals**  
   * For **each secondary GBP category**, confirm there is a dedicated URL whose **title tag** and **H1 tag** includes the keyword phrase in the format `"GBP Category" + "City Name"` plus additional context (e.g., `"Plumbing Services Anytown | Expert Installation & Repair"`).  
   * Check that the **homepage**:  
     * Mentions each of the secondary categories in the copy.  
     * Has an **internal link** to each secondary category page.  
   * For each **service**, ensure there is a dedicated URL whose **title tag** exactly includes `"Service City Name"` plus additional words (e.g., `"Drain Cleaning Anytown | Quick & Reliable Service"`).  
   * Assign each **service** to the most relevant **GBP secondary category** and make sure there is a link from that category’s page to the specific service page.  
3. **What to Output**  
   * Provide a list of **missing pages** or **title tag gaps** (i.e., any GBP category or service that does not have its corresponding dedicated URL with the right format).  
   * Identify if the **homepage** is missing mentions or internal links to any secondary categories.  
   * Show any **services** that do not have a dedicated page or the required exact-match title tag.  
   * Highlight if any **category pages** are missing links to the relevant service pages.  
   * Summarize all **gaps** in a clear, bulleted list so it’s easy to see where the website does not match the intended structure.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[property-audit-part-1|Property Audit Part 1]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
