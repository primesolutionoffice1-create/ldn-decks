---
type: "knowledge"
title: "Property Technical Audit"
folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Property Technical Audit

> [!warning] 2026 freshness layer
> Add schema validation step via Schema Markup Validator.
> See **[[2026-schema-modernization|2026 Schema Modernization for Local SEO]]** for current state.

A technical audit is a comprehensive analysis of a website's technical health and SEO performance. 

**When to Perform Technical Audits**

Here's when you should consider one:

* **Website size**: More than 500 URLs (requires Screaming Frog license)  
* **Competition level**: Operating in highly competitive niches  
* **Budget**: Client has resources to implement comprehensive fixes

💡 **Note**: The example in this lesson features a plastic surgeon in Houston with 1,400 URLs—a perfect candidate for technical auditing due to both website size and competitive market.

Setting Up Screaming Frog

Before running your audit, you'll need to configure Screaming Frog properly:

1\. Configure PageSpeed Insights API

* Navigate to **Configuration → API Access → PageSpeed Insights**  
* Click the provided link to obtain a free API key  
* Enter your API key in the designated field

⚠️ **Important**: Without the API key, your PageSpeed data will be blank, missing crucial performance insights.

2\. Running the Crawl

* Enter the client's homepage URL  
* Click **Start** to begin crawling  
* Note: Crawls with PageSpeed API enabled take longer but provide essential performance data

Exporting Required Data

Once your crawl is complete, you'll need to export specific datasets for AI analysis. Export the following files:

**From Screaming Frog:**

* internal\_all.csv \- All internal URLs  
* page\_titles\_all.csv \- Title tag analysis  
* meta\_description\_all.csv \- Meta description analysis  
* response\_codes\_all.csv \- HTTP status codes  
* images\_all.csv \- All image files  
* canonicals\_all.csv \- Canonical tag analysis  
* structured\_data\_all.csv \- Schema markup data  
* pagespeed\_all.csv \- Core Web Vitals data  
* links\_all.csv \- Internal linking data  
* directives\_all.csv \- Robots meta directives

**From Google Search Console:**

* performance\_export.csv \- Search performance data  
* coverage\_issues.csv \- Indexation issues  
* mobile\_usability.csv \- Mobile issues

## AI Prompts

- [[technical-audit-prompt|Technical Audit Prompt]]


<!-- cross-link:start -->
## Related Chapters

- [[property-audit-quick-wins|Property Audit Quick Wins]]
- [[schema-explanation|Schema Explanation]]
- [[property-ctr-audit|Property CTR Audit]]

- [[property-audit-part-1|Property Audit Part 1]]

<!-- cross-link:end -->

## Related

- [[Index]]
- [[Hot]]
- [[wiki/audits/_index|Audits Hub]]
- [[wiki/content/_index|Content Hub]]
- [[wiki/gbp/_index|GBP Hub]]
