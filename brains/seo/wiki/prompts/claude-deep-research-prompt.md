---
type: "prompt"
title: "Claude 'Deep Research' Prompt"
parent: "Backlinking: Local Citations"
parent_folder: "backlinks"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Claude 'Deep Research' Prompt

> AI prompt extracted from [[backlinking-local-citations|Backlinking: Local Citations]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

I need a comprehensive list of all the potential backlink opportunities in **\[CITY, STATE\]** for a local **\[NICHE\]** business.

This should include (but not be limited to): Local Organizations & Community Groups Chambers of commerce, neighborhood associations, Rotary clubs, or nonprofit organizations that allow local business listings or sponsor acknowledgments.

Events & Sponsorship Opportunities Annual festivals, charitable fundraisers, community fairs, and any other local events that might offer sponsorship packages or partnerships in exchange for a backlink on their event page.

Business Directories & Listing Websites Established local business directories, industry-specific directories (e.g., Home Services directories), and niche platforms relevant to home improvement, real estate, or contracting in the target city.

Local Media Outlets Online versions of newspapers, magazines, radio stations, or community newsletters that accept submissions, sponsor mentions, or directory listings. Educational Institutions & Government Pages Local schools, colleges, or government websites that may list or partner with local service providers (e.g., vendor lists or career day sponsorships).

For each opportunity, please include:

* The organization/event/directory name and a short description of why it’s relevant for a plumbing business.  
* The website URL (or other contact details) A brief note on how to apply or request inclusion (e.g., sponsorship packages, membership fees, contact forms, etc.)  
* Paid or free opportunities should both be highlighted and specified which is which. Search for a mix of opportunities; both high authority websites and lower authority websites.  
* Finally, note any requirements, costs, or other important details that might affect the feasibility of these backlink opportunities.

The output should be in an easily read format. Start with “Local Organizations and Community Groups” and list them in a numbered list in order of priority for seeking a link. Start with the URL for the link, then the organization name, and an overview of how to get the link and any requirements. Each specific URL should have its own entry in the list. Do not combine URLs into one entry.

The second broad category should be “Events and Sponsorship Opportunities” with the same organization as the “Local Organizations and Community Groups.”

Third should be “Local Media Outlets & Publications” and include suggestions as to how to contact local publications such as the local newspaper. Analyze recent stories about local businesses and suggest an approach that could work to getting the newspaper to feature my business. Make sure to include the specific contact information for the person and whether it is sponsored or editorial coverage. If sponsored, include a rough estimate of the cost.

Fourth should be “Educational Institutes and Government Pages” and focus on local government and schools. Find opportunities on local school and government websites and give an estimate of the cost of sponsorship if there is an opportunity. Also include contact information for the best person to reach out to. Include elementary, middle, and high schools, as well as local Universities and Colleges.

Fifth should be “Business Directories and Listing Websites” and this category should not just be focused on local opportunities. Do not include Google Business Profile and do not repeat organizations. For this third category, look for industry specific opportunities. For example, a plumber might want to register with the brand of equipment they install if that brand gives a link.

Do not worry about whether the link is dofollow or nofollow for this exercise. The priority list should be based on both the authority of the potential link as well as the effort required to earn the link. Low authority, high effort links would clearly rank low and low effort, high authority links, even if they come with a cost, would be ranked high.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[backlinking-local-citations|Backlinking: Local Citations]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
