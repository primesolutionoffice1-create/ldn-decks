---
type: "prompt"
title: "Content Prioritization Prompt"
parent: "Content Planning: Geographical Relevance Part 2"
parent_folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Content Prioritization Prompt

> AI prompt extracted from [[content-planning-geographical-relevance-part-2|Content Planning: Geographical Relevance Part 2]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

Please analyze the following rank data to identify content opportunities:

Rank map target keyword: **\[INSERT HERE\]**

The goal is to improve geographic relevance for specific locations for the target keyword above.

Data Format: CSV with columns:

·   	Scan Date

·   	Latitude/Longitude

*Analysis Requirements*

*1\.  	Geographic Coverage Assessment*

·   	Identify areas with weak ranking performance

·   	Map rank patterns across coordinates

·   	Note rank variations by neighborhood

2\.  	Competitor Analysis

·   	Identify neighborhoods with consistent rank drops

·   	Note patterns in competitive areas

·   	Highlight geographic gaps

*3\.  	Keyword Opportunity Analysis*

·   	List neighborhoods with ranking potential

·   	Suggest location-specific keyword variations

·   	Prioritize by ranking difficulty/opportunity

4\.  	Content Recommendations

·   	*Propose neighborhood-focused content topics*

·   	*Include geographic modifiers*

·   	*Target specific service areas with poor visibility*

Expected Output

1\. Priority neighborhood list ranked by opportunity. Priority should be given to areas that are already close to the top 3 unless there is a compelling reason otherwise. Make this reason clear.

2\. Specific keyword targets for each neighborhood. At least 3 exact target keywords for each area that needs rank improvement relevant to that area and the target keyword. The target keyword for the overall rank map is given above and keep that in mind

3\. Content topic suggestions with geographic focus. Find geographic landmarks or similar to focus the content on. For example, "plumber near wrigley field chicago"

4\. Ranking improvement potential estimates

Output Format

Which neighborhoods were selected to target and why. Rank each neighborhood on a scale of 1-10 for prioritization in terms of ease of ranking and traffic potential.

1\. Neighborhood name

1\. Target keyword 1

2\. Target keyword 2

3\. Target keyword 3

2\. Neighborhood two name

1\. Target keyword 1

2\. Target keyword 2

3\. Target keyword 3

3\. And so on in this format

---

Understanding Claude's Output

Claude will provide a prioritized list that typically includes:

1. **Immediate Opportunities**: Keywords where you're ranking 11-20 (just off page one)  
2. **High-Population Targets**: Neighborhoods with the most potential customers  
3. **Low-Competition Wins**: Areas where competitors haven't established strong presence  
4. **Strategic Expansions**: Logical next steps based on your current strengths

Sample Priority Structure

Priority 1: Downtown Plano \- "emergency plumber"

\- Current Rank: 14

\- Population: High density

\- Competition: Moderate

\- Recommendation: Create dedicated neighborhood page

Priority 2: West Plano \- "water heater repair"

\- Current Rank: 18

\- Population: Growing area

\- Competition: Low

\- Recommendation: Develop service-specific content

Implementing Your Priority Plan

Content Creation Workflow

1. **Start with Priority 1 items** \- These offer the fastest potential returns  
2. **Batch similar content** \- Group neighborhood pages or service pages together  
3. **Track progress weekly** \- Monitor ranking improvements as you publish  
4. **Adjust priorities** \- Re-run the analysis monthly as rankings shift

📝 **Pro Tip:** Claude has extensive data on neighborhoods, demographics, and local characteristics. Don't hesitate to ask follow-up questions about specific areas to enhance your content strategy.

Maximizing Efficiency

Time-Saving Strategies

* **Template development**: Create templates for neighborhood and service pages based on top priorities  
* **Batch processing**: Generate multiple pieces of content in one Claude session  
* **Strategic scheduling**: Plan content rollout based on seasonal demand patterns

💡 **Related Lesson:** Check out [[content-supporting-pages|Generating Supporting Content]] for specific techniques on efficiently creating the prioritized pages identified through this process.

Common Pitfalls to Avoid

1. **Over-prioritizing based on population alone** \- High population doesn't always mean high conversion  
2. **Ignoring seasonal factors** \- Some services have peak seasons that affect priority  
3. **Neglecting current strengths** \- Sometimes expanding where you already rank well yields faster results  
4. **Analysis paralysis** \- Don't spend weeks analyzing; start creating content and adjust as you go

Measuring Success

Track these metrics to validate your prioritization strategy:

* **Ranking improvements** in targeted keywords/locations  
* **Traffic increases** to new geographic pages  
* **Lead quality** from different neighborhoods  
* **Conversion rates** by location

🎯 **Next Steps:** Once you've identified your priorities, move on to creating optimized content. The [[content-service-pages|Generating Service & Category Pages]] lesson will show you exactly how to create high-performing pages for your prioritized targets.

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[content-planning-geographical-relevance-part-2|Content Planning: Geographical Relevance Part 2]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
