---
type: "knowledge"
title: "LLM Schema"
folder: "llm-seo"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# LLM Schema

> [!warning] 2026 freshness layer
> Industry-specific subtypes are now mandatory; Person schema is load-bearing.
> See **[[2026-schema-modernization|2026 Schema Modernization for Local SEO]]** for current state.

Schema markup is your direct line of communication to AI and search engines—it's the only way to explicitly tell them about your business without relying on interpretation. While users never see this code embedded in your site, it's crucial for both Google's search features and ChatGPT's understanding of your business legitimacy.

💡 **Key Insight:** Use language that matches how users actually ask ChatGPT for help. Natural phrases and conversational speech make it easier for AI to match your services to user queries.

Understanding Schema's Role

Think of Schema like labels on moving boxes. You could move without labeling anything and rummage through boxes later to find what you need—but labeling makes unpacking infinitely easier. Schema works the same way, telling search engines and AI exactly:

* Who you are  
* What you offer  
* Where you serve  
* When you're open  
* Why people trust you

📦 **Note:** While Google developed Schema (not ChatGPT), ChatGPT now heavily relies on it to interpret business legitimacy and make recommendations.

Essential Schema for Local SEO

Minimum Requirements

Every local business needs these Schema types at minimum:

1. **Local Business Schema** \- Only on your GBP landing page  
2. **Organization Schema** \- Can go everywhere on your site  
3. **Postal Address Schema** \- Only on your GBP landing page  
4. **Opening Hours Schema** \- Only on your GBP landing page

Advanced Schema for AI Optimization

Beyond the basics, implement Service schema types to maximize ChatGPT visibility:

List each service with natural, conversational descriptions. This is crucial even if services are already on your Google Business Profile.

**❌ Bad Example:**

Service: Emergency Plumbing  
Description: We offer professional emergency plumbing services 24 hours a day, seven days a week.

**✅ Good Example:**

Service: Emergency Plumbing    
Description: Need help fast? We fix burst pipes, leaks, and clogs 24/7 within the hour.

Additional Schema Types

* **Product Schema** \- If you sell products  
* **FAQ Schema** \- Massively helpful for matching content to user questions  
* **Review Schema** \- Still valuable for ChatGPT even if less effective for Google  
* **Aggregate Rating Schema** \- Similar to review schema  
* **Geo Coordinates** \- Precise location data  
* **Service Area** \- Where you serve

🎯 **Related Lesson:** Review our lesson on "[[llm-seo|How ChatGPT Makes Recommendations]]" to understand why FAQ Schema is particularly powerful for conversational AI searches.

Advanced Technique: Nested Schema

Take your Schema to the next level by nesting related types. For example, place Service Schema inside your Local Business Schema to create stronger connections between data points.

Don't know how to code JSON? No problem—ChatGPT can write nested Schema for you. Simply tell it what you want to achieve, and it will generate the proper code structure.

🛠️ **Pro Tip:** Start with ChatGPT for Schema generation—it can handle advanced nested structures and suggest Schema types you might not have considered.

Writing Effective Schema Descriptions

Mirror User Intent

Since ChatGPT generates answers based on user questions, your FAQ Schema should anticipate common queries:

* **"Do you offer emergency services?"**  
* **"How much does \[service\] cost?"**  
* **"Are you available on weekends?"**

While exact-match language isn't as critical for ChatGPT as it was for Google, mirroring user language makes it easier for AI to create semantically relevant matches.

Include Real Testimonials

Use Review Schema to inject actual customer testimonials into your data. This builds trust signals that AI can reference when making recommendations.

Implementation Tools & Testing

Schema Generation

* **ChatGPT** \- Best option for complex, nested Schema  
* **Schema Markup Generator** \- Good for simple Schema types  
* **Google's Structured Data Markup Helper** \- Basic tool for beginners

Always Validate Your Schema

Test your Schema at: [https://validator.schema.org](https://validator.schema.org)

If you encounter errors or warnings:

1. Copy the error message  
2. Give it to ChatGPT  
3. Ask it to fix the issue

<!-- cross-link:start -->
## Related Chapters

- [[schema-explanation|Schema Explanation]]
- [[llm-seo|LLM SEO]]
- [[llm-ranking-factors|LLM Ranking Factors]]

<!-- cross-link:end -->

## Related

- [[Index]]
- [[Hot]]
- [[wiki/llm-seo/_index|LLM SEO Hub]]
- [[wiki/concepts/_index|Concepts Hub]]
