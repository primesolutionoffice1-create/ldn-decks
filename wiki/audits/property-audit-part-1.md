---
type: "knowledge"
title: "Property Audit Part 1"
folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Property Audit Part 1

When optimizing an existing property, one of your first tasks is understanding what content we already have and what's missing. This lesson will show you how to perform a comprehensive content audit that aligns with the Core 30 structure we've been building throughout this course.

This audit process helps you:

* Identify existing content that fits the Core 30 framework  
* Discover content gaps that need to be filled  
* Create a clear action plan for content development  
* Ensure proper site structure for local SEO success

Prerequisites

Before starting your content audit, you'll need:

1. **Screaming Frog SEO Spider** (free for sites under 500 URLs) \- CAN BE REPLACED BY N8N  
2. **Access to ChatGPT o1** (or Claude as an alternative)  
3. **The property’s Google Business Profile information**  
4. **Basic text editor or Word processor**

💡 **Note**: While ChatGPT o1 performs better for this analysis task, Claude can handle it effectively if you don't have a ChatGPT subscription.

Step-by-Step Audit Process

Step 1: Gather Homepage Content

Start by collecting the client's homepage content:

1. Navigate to the client's website  
2. Select all content (Ctrl+A or Cmd+A)  
3. Copy the content (Ctrl+C or Cmd+C)  
4. Paste into a Word document or text file  
5. Save this for later use

Step 2: Collect Service Information

Next, gather the services from the client's Google Business Profile:

1. Access the client's GBP  
2. Click on "Services"  
3. Copy all listed services  
4. Keep this list handy for the prompt

Step 3: Run Screaming Frog Analysis

Now it's time to crawl the website:

1. Open Screaming Frog SEO Spider  
2. Enter the main domain (e.g., `example.com`)  
3. Click "Start" to begin crawling  
4. Wait for the crawl to complete

Once finished, export two critical files:

**Export 1: Internal URLs**

* Navigate to the "Internal" tab  
* Click "Export"  
* Select "Internal \- All (CSV)"  
* Save the file

**Export 2: Links Data**

* Navigate to the "Links" tab  
* Click "Export"  
* Select "All Links (CSV)"  
* Save the file

Step 4: Prepare Your AI Prompt

Use the provided prompt template (available in this lesson) and customize it with:

* The client's secondary services/categories  
* The complete list of services from their GBP

Step 5: Run the Analysis

1. Open ChatGPT o1 (or Claude)  
2. Paste your customized prompt  
3. Upload the three files:  
   * Homepage content document  
   * Internal URLs CSV  
   * Links CSV

Step 6: Handle Common Issues

It's common for ChatGPT to initially claim it can't read the CSV files. If this happens, don't panic \- this is normal. Respond with this:

I gave you the CSV files necessary. Please use them in the analysis. I can give them to you again if necessary.

Then, the AI will typically then process the files correctly using Python

⚠️ **Important**: This extra step is almost always necessary with ChatGPT o1. Be patient and persistent.

Understanding the Output

Your content audit will reveal several key insights:

Missing Category Pages

The analysis will identify which service category pages are absent, such as:

* Drainage service category page  
* Gas service category page  
* Heating contractor category page

Homepage Gaps

The audit will show:

* Which services aren't linked from the homepage  
* Which services aren't mentioned in homepage content  
* Internal linking opportunities being missed

Service Page Analysis

For each GBP service, you'll learn:

* Which service pages exist  
* Which are missing  
* Which need improvement

Action Items

The analysis concludes with:

* Summary of all content gaps  
* Priority order for content creation  
* Specific next steps for implementation

🎯 **Pro Tip**: This level of detailed analysis is typically reserved for clients or near-clients. For initial prospects, consider a simpler content review to save time.

Next Steps

After completing your Core 30 Content Audit:

1. **Create Missing Category Pages**: Start with the high-priority category pages identified in the audit  
2. **Update Homepage Content**: Add mentions of missing services and improve internal linking  
3. **Build Service Pages**: Develop individual pages for each missing service  
4. **Review Site Structure**: Ensure your content aligns with the Core 30 framework

⏩⏩ **Related Lessons**  
[[the-core-30-content-strategy|How to Structure the Core 30]] \- Review the ideal site structure  
[[content-blog-post-writing|AI-Writing Content]] \- Learn how to efficiently create the missing pages  
[[content-internal-anchor-text-guidelines|Internal Anchor Text Guidelines]] \- Optimize your internal linking

---

## AI Prompts

- [[prompt-core-30-content-audit|Prompt: Core 30 Content Audit]]


<!-- cross-link:start -->
## Related Chapters

- [[property-audit-quick-wins|Property Audit Quick Wins]]
- [[property-audit-part-2|Property Audit Part 2]]
- [[property-technical-audit|Property Technical Audit]]
- [[content-audit-overview|Content Audit: Overview]]

<!-- cross-link:end -->

## Related

- [[Index]]
- [[Hot]]
- [[wiki/audits/_index|Audits Hub]]
- [[wiki/content/_index|Content Hub]]
- [[wiki/gbp/_index|GBP Hub]]
