---
type: "prompt"
title: "Reddit Claude Prompt"
parent: "LLM Reddit Importance"
parent_folder: "llm-seo"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Reddit Claude Prompt

> AI prompt extracted from [[llm-reddit-importance|LLM Reddit Importance]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

You're writing content for Reddit that mentions a **\[type of service business\]** in **\[city, state\]**.

I want you to generate:

* 3 **natural Reddit comments** that would appear in real threads  
* 1 **Reddit post** asking for advice or sharing a personal experience

✅ Each comment should:

* Sound like it’s written by a real local resident—not a marketer  
* Mention a firsthand experience with the business or service type  
* Include realistic details: how long it took, how much it cost, what the customer was nervous about, and what the result was  
* Avoid overly promotional language (no “top-rated,” “best in the business,” etc.)  
* Mention emotional elements when appropriate (e.g., stress, relief, frustration, etc.)

✅ The Reddit post should:

* Be 3–4 paragraphs long  
* Either ask for help deciding between 2–3 local providers *or* share a personal story  
* Include real-life context (e.g., “My AC went out at 2am,” or “I’ve had 3 roof leaks in the last year”)  
* Mention a specific business by name **only once**  
* Sound vulnerable and honest—not like a polished review  
* Fit the tone of a post in a subreddit like r/\[cityname\] or r/HomeImprovement

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[llm-reddit-importance|LLM Reddit Importance]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
