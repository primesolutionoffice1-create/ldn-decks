---
type: "prompt"
title: "Step 2: The Follow-Up Qualifying Prompt"
parent: "LLM SEO"
parent_folder: "llm-seo"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Step 2: The Follow-Up Qualifying Prompt

> AI prompt extracted from [[llm-seo|LLM SEO]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

Of those recommendations, which one would you choose if you were looking for **\[SPECIFIC CRITERIA \- reliability/quality/value/experience\]** and why? What specific factors influenced that choice?

Step 3: The Google Comparison

*Now search Google for:*

best **\[TYPE OF BUSINESS\]** in **\[CITY/AREA\]**

Also try:

**\[TYPE OF BUSINESS\]** near me

and

**\[TYPE OF BUSINESS\] \[CITY\]** reviews

Step 4: The Analysis Framework

*Compare and document:*

**ChatGPT Results:**

* Which businesses were mentioned?  
* What reasons did it give? (reputation, atmosphere, specialties, customer experience)  
* Did it mention specific qualities or unique selling points?  
* How did it explain its reasoning?

**Google Results:**

* Which businesses appeared in maps/local pack?  
* What ranking factors seem to matter? (reviews, proximity, website optimization)  
* Are there paid ads influencing results?  
* How different are the top recommendations?

Step 5: The Pattern Recognition Questions

* Did ChatGPT recommend businesses that DON'T appear in Google's top results?  
* Did ChatGPT give reasons that Google can't easily measure (like "authentic feel" or "passionate owner")?  
* Which businesses appeared in both and why might that be?  
* If you were a local business owner, which system would you rather optimize for and why?

—

Understanding how ChatGPT recommends your business to potential customers is crucial for modern local SEO. Just as Google personalizes search results, ChatGPT customizes its responses based on who's asking—which means you might not see what your customers see.

Both Google and ChatGPT tailor their results to individual users:

**With Google:** If you frequently visit a specific plumber's website, then search "plumber near me," Google will likely show you that website—even if it doesn't rank in the top three for most users. That's why professional SEOs always check rankings using:

* Third-party ranking tools  
* Incognito/private browsing mode  
* Different locations and devices

**With ChatGPT:** The personalization runs even deeper. ChatGPT knows:

* Who you are  
* What you do  
* Your conversation history  
* Your location and preferences

This creates a dangerous blind spot: If you're a plumber in Fort Wayne, Indiana, and you ask ChatGPT to "recommend a plumber in Fort Wayne, Indiana," it will likely recommend *you*—but that's not necessarily what it tells everyone else.

💡 **Related Lesson:** This personalization challenge is why we emphasize third-party verification throughout our Rank Tracking tool (local falcon). The same principles apply whether you're checking Google or ChatGPT visibility.

How to Check Your True Visibility

The key to accurate visibility checking is removing all personalization and forcing ChatGPT to treat you like any other user. Use the prompt provided below this lesson to:

1. **Strip away user context** \- Remove all personalization factors  
2. **Force external sourcing** \- Make ChatGPT rely on publicly available information  
3. **Simulate a neutral user** \- Get results as if you were "just some person" with no prior knowledge

What to Look For in Results

When you run the visibility check prompt, analyze these three critical elements:

1\. Is Your Business Mentioned?

The first and most obvious question—does ChatGPT even know your business exists?

2\. What Sources Are Cited?

ChatGPT will show its sources. Pay attention to:

* Which websites it's pulling information from  
* Whether it's using your Google Business Profile  
* If it's referencing review sites or directories  
* Whether your own website appears as a source

📝 **Note:** The sources ChatGPT cites give you a roadmap for optimization. If it's pulling from Yelp but not your website, you know where to focus your efforts.

3\. What Language Does ChatGPT Use?

The specific words and phrases ChatGPT uses when describing your business matter. Look for:

* Keywords and services mentioned  
* How it describes your expertise  
* What differentiators it highlights  
* The overall tone and positioning

Don't panic if your business doesn't appear. This diagnostic approach reveals exactly what ChatGPT values when making recommendations, giving you a clear optimization path.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[llm-seo|LLM SEO]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
