---
type: "prompt"
title: "CTR AUDIT PROMPT"
parent: "Property CTR Audit"
parent_folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# CTR AUDIT PROMPT

> AI prompt extracted from [[property-ctr-audit|Property CTR Audit]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

Analyze the provided Google Search Console data for our domain, using two separate datasets:

Query-level data (query, clicks, impressions, CTR, position) for the entire domain

URL-level data (URL, clicks, impressions, CTR, position)

Perform a comprehensive click-through rate (CTR) analysis, aiming to identify the most likely primary keyword for each URL. Include the following elements:

Overall domain performance:

Calculate the average CTR across all queries and pages.

Identify top-performing queries and their metrics.

Analyze the distribution of queries by position.

URL performance:

List the top 10 and bottom 10 URLs by CTR.

Identify URLs with high impressions but low CTR as optimization opportunities.

Primary keyword inference:

For each URL, attempt to infer the most likely primary keyword by comparing URL performance metrics with query-level data.

Consider factors such as similar click and impression volumes, CTR, and position.

CTR trends:

Analyze CTR trends over time for both queries and URLs, noting significant changes or patterns.

Position analysis:

Break down average CTR by search result position ranges (e.g., 1-3, 4-10, 11-20) for both queries and URLs.

Identify positions where CTR performance differs notably from expected averages.

Optimization opportunities:

Highlight URLs and queries with potential for CTR improvement based on current performance and position.

Suggest content or metadata optimizations that could improve CTR for specific URL-query pairs.

Keyword cannibalization detection:

Identify potential keyword cannibalization issues by looking for similar high-volume queries that might map to multiple URLs.

Recommendations:

Provide actionable recommendations to improve overall domain CTR and specific URL performance.

Suggest strategies for better aligning URLs with their inferred primary keywords.

Present the findings using tables, charts, and concise bullet points. Include a brief executive summary highlighting key insights and top recommendations.

Note: Due to the separate nature of the query and URL datasets, some analyses will be based on inferences and may have limitations. Highlight any areas where additional data could provide more precise insights.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[property-ctr-audit|Property CTR Audit]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
