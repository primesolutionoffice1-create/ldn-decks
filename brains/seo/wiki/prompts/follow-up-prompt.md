---
type: "prompt"
title: "Follow-up Prompt"
parent: "Schema Explanation"
parent_folder: "frameworks"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Follow-up Prompt

> AI prompt extracted from [[schema-explanation|Schema Explanation]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

Here is the information you need to create **\[schema type\]**. Please write it for me.

What is Schema?

Schema is a structured data markup language that helps Google and other search engines understand what your content is about. Think of it as providing clear labels and context for your website's information, removing any guesswork for search engines.

Types of Schema Markup

Let's break down the main types of schema you'll be implementing:

1\. Organization Schema

* **Where to use:** Every single URL on your domain (in the header)  
* **Purpose:** Provides consistent business information across your entire website  
* **Why it matters:** Ensures search engines understand your business identity throughout your site

2\. Local Business Schema

* **Where to use:** Only on the URL your Google Business Profile points to  
* **Purpose:** Confirms your landing page matches your GBP information exactly  
* **Why it matters:** Strengthens local SEO signals by linking your website to your GBP

💡 **Note on Location Types:** If you have multiple locations, each location page should have schema matching its specific Google Business Profile. For single locations, this typically goes on your homepage.

3\. Product Schema

* **Where to use:** Individual product pages (mainly e-commerce)  
* **Purpose:** Provides detailed product information including price, availability, and specifications  
* **Why it matters:** While Google can guess product details, schema ensures accuracy

4\. Article Schema

* **Where to use:** Every blog post and article  
* **Purpose:** Helps your content appear better in search results  
* **Why it matters:** Can improve click-through rates by enhancing how your content displays

5\. FAQ Schema

* **Where to use:** Any page with frequently asked questions  
* **Purpose:** Allows Google to display Q\&As directly in search results  
* **Why it matters:** More SERP real estate \= more clicks

📌 **Pro Tip:** Following our content structure guidelines means many of your pages should include FAQs, making this schema type especially valuable.

6\. Review Schema

* **Where to use:** Every page containing customer reviews  
* **Purpose:** Can display review ratings in search results  
* **Why it matters:** Star ratings in SERPs can significantly boost click-through rates (though this is becoming harder to achieve)

7\. Breadcrumb Schema

* **Where to use:** Pages with hierarchical structure (especially target URLs and supporting content)  
* **Purpose:** Helps Google understand your site structure and content silos  
* **Why it matters:** Reinforces the topical relevance you're building with your content strategy

Local business schema

Local business schema is a critical piece of markup language that communicates directly with Google, identifying your website as a local business and providing all the essential information search engines need to understand your business better.

Schema markup is structured data that helps search engines understand the content and context of your website. For local businesses, this specialized markup ensures Google recognizes you as a local entity and can properly display your business information in search results.

💡 **Key Insight**: Schema markup acts as a translator between your website and search engines, making your business information crystal clear to Google's algorithms.

Creating Schema with AI

The fastest way to generate local business schema is using ChatGPT or Claude. Here's the simple process:

1. **Ask the AI what information it needs** to write local business schema  
2. **Provide all the requested information** (detailed below)  
3. **Request the schema markup** by saying: "Please write local business schema for me"  
4. **Validate the output** using Google's Structured Data Testing Tool

⚠️ **Important**: Always verify AI-generated schema, as AI tools can occasionally make formatting errors or include outdated markup standards.

Where to Place Your Schema

Schema placement is straightforward but crucial:

* **Single location businesses**: Place schema only on your GBP landing page (the page your Google Business Profile links to)  
* **Multi-location businesses**: Each location needs its own landing page with location-specific schema

❌ **Common Mistake**: Don't add schema to every page on your website—only the designated landing page(s) need this markup.

⏩⏩ **Related**: Learn how to create effective landing pages in [[content-homepage|**Generating a GBP Landing Page**]] and understand site structures in [[the-core-30-content-strategy|**How to Structure the Core 30**]]**.**

Essential Schema Information

Every piece of information in your schema must **exactly match** what appears on your Google Business Profile:

* **Business Name**: Must match GBP name exactly  
* **Business Type**: Use your primary GBP category (🔗 See **"GBP Categories"** for optimization tips)  
* **Description**: Copy your GBP description verbatim (🔗 Learn to craft effective descriptions in **"GBP Description"**)  
* **Address**: Match the GBP address format precisely  
* **Phone Number**: Use the exact number from your GBP  
* **Email Address**: Must match GBP contact email  
* **Website URL**: The landing page URL  
* **Coordinates**: Latitude and longitude of your business location

📍 **Pro Tip**: To find coordinates, right-click any location in Google Maps to instantly see latitude and longitude.

* **Opening Hours**: Mirror your GBP hours exactly (🔗 Don't forget **"Upcoming Holiday Hours"**)  
* **Service Area**: Match your GBP service area settings  
* **Social Media Profiles**: Include all profiles listed on GBP  
* **Business Logo URL**: Right-click your logo on your website → "Copy image address"  
* **Additional Images**: Optional but recommended; can include storefront or service photos  
* **Payment Methods**: List accepted payment types  
* **Price Range**: Use dollar signs ($, $$) to indicate pricing tier

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[schema-explanation|Schema Explanation]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
