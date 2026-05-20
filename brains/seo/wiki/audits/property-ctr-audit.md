---
type: "knowledge"
title: "Property CTR Audit"
folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Property CTR Audit

Click Through Rate (CTR) represents the percentage of users who click on your website link after seeing it in search results. This metric is one of the most straightforward yet powerful ways to increase your website traffic without extensive SEO overhauls.

Improving your CTR from 2% to 3% can represent a **50% increase in traffic** to your site—a significant boost from what seems like a small percentage change. This improvement typically comes from optimizing your title tags and meta descriptions to be more compelling to searchers.

The CTR Analysis Process

Step 1: Export Your Search Console Data

1. Navigate to **Google Search Console**  
2. Click on **Performance** in the left sidebar  
3. Select **Export** and choose **CSV** format  
4. You'll receive two key files:  
   * **Queries**: Shows what people searched for to find your site  
   * **Pages**: Shows which URLs appeared in search results

Step 2: Prepare Your Data with Screaming Frog

For comprehensive analysis, you can use Screaming Frog to crawl your site. The free version allows crawling up to 500 URLs.

* Extracts current title tags and meta descriptions  
* Helps identify non-indexable pages to exclude from analysis

**💡 Tip**: Focus only on indexable HTML pages in your analysis. Filter out PDFs, images, and other non-HTML content types to streamline your work.

Step 3: Analyze with Claude

Upload both CSV files to Claude along with the analysis [[ctr-audit-prompt|prompt]]. Claude will:

* Match queries to specific URLs based on performance data  
* Identify your likely primary keywords for each page  
* Calculate domain-wide and page-specific CTR metrics  
* Highlight optimization opportunities

Step 4: Implement High-Priority Changes

Focus on pages with:

* **High impressions but low CTR**: These represent your biggest opportunities  
* **Rankings in positions 4-10**: Small improvements here can push you to the first page  
* **Misaligned titles/descriptions**: Where the current metadata doesn't match user intent

What Claude's Analysis Provides

Overall Domain Performance

* Average CTR across all queries and pages  
* Top-performing queries and their metrics  
* Query distribution by search position

URL-Specific Insights

* Top 10 and bottom 10 URLs by CTR  
* Pages with optimization potential  
* Inferred primary keywords for each URL

Actionable Recommendations

* Specific title tag and meta description rewrites  
* Priority pages for immediate optimization  
* Strategies for addressing keyword cannibalization

**⏩⏩ Related Lessons**:  
[[metadata-seo-titles-and-descriptions|Generating Metadata]] \- For creating optimized title tags and descriptions at scale  
[[property-audit-quick-wins|Search Console for Existing Content]] \- Deep dive into Search Console data analysis

Best Practices for CTR Optimization

When rewriting title tags and meta descriptions based on Claude's analysis:

1. **Include the primary keyword** naturally in both title and description  
2. **Match search intent** \- ensure your message aligns with what users want  
3. **Stay within limits**:  
   * Title tags: 50-60 characters  
   * Meta descriptions: 150-160 characters

**⚠️ Important**: While Claude provides excellent recommendations, always review suggestions before implementing. Ensure they align with your brand voice and accurately represent your content.

CTR optimization is an ongoing process. As search trends and user behavior evolve, regularly revisiting your title tags and meta descriptions ensures you're always putting your best foot forward in search results.

## AI Prompts

- [[ctr-audit-prompt|CTR AUDIT PROMPT]]


<!-- cross-link:start -->
## Related Chapters

- [[property-technical-audit|Property Technical Audit]]
- [[metadata-seo-titles-and-descriptions|Metadata: SEO Titles and Descriptions]]
- [[property-audit-part-2|Property Audit Part 2]]

<!-- cross-link:end -->

## Related

- [[Index]]
- [[Hot]]
- [[wiki/audits/_index|Audits Hub]]
- [[wiki/content/_index|Content Hub]]
- [[wiki/gbp/_index|GBP Hub]]
