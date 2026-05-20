---
type: "prompt"
title: "PAA Question Rewording Prompt"
parent: "Property Audit Part 2"
parent_folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# PAA Question Rewording Prompt

> AI prompt extracted from [[property-audit-part-2|Property Audit Part 2]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

I will provide you with a list of "People Also Ask" (PAA) questions related to a specific target keyword. Your task is to reword each question in a semantically relevant way that:

1. Maintains the same search intent and core meaning  
2. Uses natural, conversational language that feels authentic  
3. Incorporates synonyms, related terms, or alternative phrasings  
4. Remains highly relevant to the target keyword for search algorithms  
5. Avoids the exact PAA phrasing that has been widely scraped

**Guidelines for rewording:**

* Change question structure (e.g., "How to..." → "What's the best way to..." or "Steps to...")  
* Use synonyms for key terms where appropriate  
* Vary question formats (Why/How/What/When/Where)  
* Keep the same level of specificity  
* Ensure the reworded version would logically appear in search results for the same queries

**Format your response as:**

* Original PAA: \[original question\]  
* Reworded: \[your semantically relevant alternative\]

**Target keyword:** \[INSERT\]

**PAA questions to reword:** \[INSERT LIST\]

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[property-audit-part-2|Property Audit Part 2]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
