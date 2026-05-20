---
type: "prompt"
title: "Prompt: Generating a Title Tag"
parent: "Metadata: SEO Titles and Descriptions"
parent_folder: "content"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Prompt: Generating a Title Tag

> AI prompt extracted from [[metadata-seo-titles-and-descriptions|Metadata: SEO Titles and Descriptions]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

I want you to help me create compelling \[Page type\] title that are optimized for a specific keyword phrase. I will provide you with the target SEO keyword phrase, and your task is to generate 10 unique, enticing titles that incorporate this phrase. Each title should:

Include the exact keyword phrase or a very close variation to maintain SEO relevance

Be concise and attention-grabbing, with a character count between 50 and 60 characters per title.

After generating the titles, assign each one a score from 1 to 10 based on two factors: One \- How likely the title is to rank well for the target keyword phrase (SEO Score) and Two \- How likely viewers are to click on the title due to its engaging and compelling nature (Engagement Score)

Additionally, provide an overall score that combines both the SEO score and engagement score, giving equal weight to each. The overall score should also be on a scale from 1 to 10\.

Please format your response as follows:

\[Title\] \- SEO Score: \[X\]/10, Engagement Score: \[Y\]/10, Overall Score: \[Z\]/10

Please generate these for the list of keywords I’m going to give you.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[metadata-seo-titles-and-descriptions|Metadata: SEO Titles and Descriptions]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
