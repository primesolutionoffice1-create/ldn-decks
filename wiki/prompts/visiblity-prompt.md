---
type: "prompt"
title: "Visiblity Prompt"
parent: "LLM SEO"
parent_folder: "llm-seo"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Visiblity Prompt

> AI prompt extracted from [[llm-seo|LLM SEO]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

If someone had never searched for a **\[service type\]** before and lived in **\[city, state\]**, who would you recommend and why? Please base your answer on publicly available sources like Bing, Yelp, Google reviews, or local mentions. Assume you know nothing about the person asking—just give the best general recommendation for the public.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[llm-seo|LLM SEO]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
