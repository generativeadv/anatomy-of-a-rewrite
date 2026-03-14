# Claude Code Project: AI Content Guide Scorecard Explorer

## What to Build

Build a multi-page web application that lets users explore a detailed comparative evaluation of five AI-generated rewrites of a corporate communications guide. The app teaches two things: (a) what makes the final "ideal composite" document better than the originals, and (b) how to evaluate AI model outputs in general — including a real-world demonstration of the wide variance in model performance given identical prompts.

## Infrastructure

- **Framework:** Next.js (or similar, your call based on what works best)
- **Database:** Turso (SQLite edge database — the developer has a live account)
- **AI:** Anthropic API (live account available — use only if needed for any dynamic features)
- **Hosting:** Vercel (live account, will deploy from GitHub)
- **Repo:** GitHub (live account)

The scorecard data lives in `scorecard_data.json` and should be loaded into Turso or used as a static data source — whichever is more appropriate for the architecture. The data file is the single source of truth for all evaluation content.

## Site Architecture

### Pages

**1. Home / Scorecard (`/`)**
The interactive scorecard table with a title, subhead, and brief intro paragraph above it. This is the centerpiece of the site.

**2. Detail Pages (`/scores/[attribute-id]/[column-id]`)**
One page per score cell (50 total, generated from data). Each shows the full analysis of a specific attribute × rewrite combination, with verbatim quotes from the rewrite and the ideal composite for comparison. Includes "back to scorecard" navigation and prev/next navigation to adjacent cells.

**3. About / Background (`/about`)**
The full background and methodology section explaining why the site exists, how it was made, the exact prompts used, and the key observations about model performance variance. This is a long-form editorial page. Content is provided in full below under "Background and Methodology Content."

**4. Methodology (`/methodology`)**  
A focused explanation of the 10 evaluation attributes — what each one measures and why it matters — plus the weighting approach used for the aggregate score. Can be a subsection of About or a standalone page, your call.

### Navigation

A simple top nav with: Scorecard | About | Methodology

On detail pages, add breadcrumb-style navigation: Scorecard > [Attribute Name] > [Rewrite Name]

---

## Home Page: Scorecard View

### Title and Intro

**Site Title:** "Anatomy of a Rewrite"

**Subhead:** "How five AI systems tackled the same task — and what their outputs reveal about evaluating AI work"

**Intro text (above the table):**
"This scorecard evaluates five attempts to rewrite a corporate communications guide about optimizing content for AI-powered search. The original document, written by the client's internal team using ChatGPT and Gemini, contained practical advice but significant technical inaccuracies and fabricated statistics — a case study in what has become known as 'workslop.' Each rewrite was produced by a different AI model or agency tool using the same base prompt, and the results varied dramatically. Explore the scores below to understand what separates a strong AI output from a weak one. For the full story of how and why this evaluation was created, see the [About](/about) section."

### Table Interaction Model

1. **Default view:** The scorecard table with color-coded scores (1-10) for each cell. Column headers for each rewrite (ordered left to right by ascending aggregate score: Fergus v1 → Client orig. → Fergus v2 → Opus 4.6 → GPT 5.4). Row headers for each attribute. An "Edge" column on the right with brief text noting which rewrite leads. Aggregate weighted scores at the bottom row.

2. **Hover on any score cell:** A tooltip/popover appears with the 2-sentence `hover` text from the JSON. The tooltip includes a subtle "Click to explore →" prompt.

3. **Click on any score cell:** Navigate to the detail page for that attribute × rewrite combination (`/scores/[attribute-id]/[column-id]`).

4. **Hover/click on attribute row headers:** Shows the 2-3 sentence attribute `description` from the JSON.

5. **Hover/click on column headers:** Shows the document `description` from the JSON.

### Score Cell Color Coding

- 1-3: Red zone (danger/poor) — use a warm red scale with intensity varying by score
- 4-5: Amber zone (mixed/mediocre) — use a warm amber/yellow scale
- 6-10: Green zone (good to excellent) — use a green scale with intensity varying by score

---

## Detail Pages (`/scores/[attribute-id]/[column-id]`)

Each detail page is a focused article explaining one score. Structure:

### Header
- Breadcrumb: Scorecard > [Attribute Label] > [Column Label]
- Score badge (large, color-coded)
- Attribute label as page title

### Section 1: What This Attribute Measures
The attribute `description` from the JSON (2-3 sentences).

### Section 2: How [Column Label] Scored
The `detail` text from the JSON (3-5 sentences explaining the score).

### Section 3: From the Document
A styled blockquote showing the `example_quote` — verbatim language from the rewrite being evaluated. Label it clearly with the document name.

### Section 4: How the Ideal Composite Handles This
The `composite_comparison` text explaining what the composite does differently (or similarly).

### Section 5: From the Ideal Composite
A styled blockquote showing the `composite_quote` — verbatim language from the composite for contrast. Label it clearly.

### Navigation Footer
- "← Back to Scorecard" link
- Prev/Next links to adjacent cells (navigate across columns within the same attribute, or to the next attribute)

---

## About Page Content

Use the following content for the About / Background page. Format it as a well-structured long-form editorial page with appropriate headings, but preserve the substance and key language faithfully. The verbatim prompts must be presented exactly as written (including any typos in the originals — these are authentic artifacts). Use blockquote or code-block styling for the prompts to set them apart from the editorial text.

### Background and Methodology

A communications advisory firm was counseling its client, a big-box electronics retailer, on how to navigate the new generative AI media environment and transform its communications function. The firm received a draft guidance document from the client — what this scorecard calls the "Client Original." The client's email cover note said:

> "Attached is the AI & External Communications plan/overview I put together for the team. Your feedback would be greatly appreciated—is this generally right?, anything glaringly wrong?, am I missing anything?, etc. For context, the 'plan' is focused on owned PR content (ie. announcements) and meant to both provide the team with a foundational understanding of what is important to generative AI platforms and why in our content, as well as an overview of the most effective structure and formatting for an announcement. It does not include schema-specific elements, etc. I put this together largely by researching via ChatGPT, Gemini and Google search—pressing ChatGPT/Gemini on the different components (and why) to ensure I wasn't getting completely different answers. I plan to do the same with Claude and Perplexity. I will eventually create a supplementary cheat sheet for the team but first want to make sure this more in-depth resource was in a good spot. Thanks, appreciate your expertise!"

#### The "Workslop" Problem

The client's candid disclosure that the document was "put together largely by researching via ChatGPT, Gemini and Google search" is a good example of what has become known as "workslop" — AI-generated work that has the appearance, polish, and confidence of a well-considered piece of professional work, but is actually suboptimal, misleading, or just plain wrong.

While proper use of AI and critical evaluation of outputs based on human expertise can deliver incredible insight and efficiency, workslop can severely harm productivity because it demands feedback, rewrites, and sometimes complete reorientation. The Client Original is a textbook case: it reads confidently, includes specific statistics (many fabricated), uses professional formatting, and provides detailed section-by-section guidance — but its technical model of how AI works is fundamentally incorrect.

#### The Rewrite Process

Generally, the best way to deal with workslop is to use superior AI and prompting to quickly optimize the work product. The creator of this site originally used the firm's internal AI tool ("Fergus") in a two-step process to generate an analysis and revision.

**Step 1: Initial test.** The first prompt, applied to approximately 900 words from the opening section of the client document, was:

> "you're a researcher at a frontier AI lab. the below text is an attempt from a client to explain how frontier LLM's work to their corporate communications organization for the purposes of education and content optimization. i get the sense it's pretty innacurate. give me your feedback on it as is, and if it's generally inaccurate, rewrite it:"

Fergus correctly assessed that the original was inaccurate and overly focused on RAG, and provided a revision developing the idea of "two pathways": training data and RAG.

**Step 2: Full rewrite.** Based on Fergus's performance on this test, the creator pushed further with the following prompt, attaching the full client document:

> "This is a solid rewrite, good job. That was a section of a much longer document. With this background in mind, evaluate the entire document and rewrite it so it accurately represents how models work and provides modern up-to-date guidance on best practices as of today March 14 2026."

Fergus produced what this scorecard evaluates as "Fergus v1." The creator was unsatisfied with the response — it was far shorter than the original and had stripped out nearly all practical guidance — and wanted to test how other AI systems would respond to the exact same prompt.

#### Testing Frontier Models

To test that hypothesis, the creator first created a version of the client document that was not identifiable to the client, using Fergus to strip out all company-specific references and replace them with a fictional brand ("TVs & More"). With this generic version in hand, the creator felt comfortable uploading it to frontier models outside the firm's IT environment — specifically ChatGPT 5.4 Pro and Claude Opus 4.6 Extended — with memory and training turned off.

The exact same two-step prompting process used with Fergus was applied to ChatGPT 5.4 Pro, yielding an output the creator was impressed with after review. The same process was applied to Claude Opus 4.6 Extended.

#### A Note on Processing Time

The creator observed that frontier reasoning models spend dramatically longer processing requests than Fergus. Fergus generated its response to the first prompt almost instantly, and took an estimated one to two minutes to render the full rewrite (beginning to write immediately after the prompt was entered). In contrast, GPT 5.4 Pro reasoned for 26 minutes in response to the initial prompt and 61 minutes in response to the second prompt requesting a full rewrite.

Fergus uses Gemini 3.0 Flash as a front-end "orchestration" agent and calls on other specialized agents to produce outputs. The performance gap is consistent with the architectural difference between a fast orchestration layer and a deep reasoning model.

#### Improving the Fergus Output

Hypothesizing that a different prompt might yield better results from Fergus, the creator followed up in the same Fergus chat with:

> "This version you created is much shorter than the original full document I shared with you. Rewrite it again, ensuring you evaluate every section within the original Word doc I shared with you. Assess the goal and role of each section and rewrite the entire document so it is accurate and practically useful, based on up-to-date information as of today March 14, 2026. Deliver it as a Word doc."

Fergus reasoned for notably longer before returning an answer — an estimated three to five minutes, compared to its near-instant initial response. This produced "Fergus v2," which is also evaluated in the scorecard.

#### Building the Scorecard

With outputs from four different AI systems (Fergus v1, Fergus v2, GPT 5.4 Pro, and Opus 4.6 Extended) plus the Client Original, the creator had the material for a structured evaluation. The scorecard was created with two goals:

1. **Establish a rubric** to help the firm evaluate the original document and explain recommendations for improvement to the client.
2. **Demonstrate the variance** in AI model performance given identical work tasks — both as a learning tool for firm colleagues and as an objective comparison of Fergus's performance against publicly available AI systems.

The evaluation was conducted in a Claude Opus 4.6 Extended chat. The initial prompt, attaching the blinded client original and Fergus v1 rewrite, was:

> "You're a researcher at a frontier generative AI lab. I'm going to give you two versions of a document to evaluate. The first is an attempt from a big box retailer TVs & More to give practical educate and guidance for its corporate communications team. The second is an attempted rewrite of the document by the company's communications agency, which used their proprietary AI system, Fergus, for the revision. I want you to create a detailed comparison and assessment of both documents, including technical/quantitative aspects (length, etc), but primarily focusing on qualitative analysis (accuracy, clarity, practicality, etc). Include a summary score card of all the attributes in a table format as part of your response. Be critical but fair. Ask any clarifying questions as needed."

The creator was pleased with the initial scorecard criteria and evaluation. The scorecard was then expanded iteratively: each additional rewrite (GPT 5.4, Opus 4.6, Fergus v2) was fed into the same evaluation chat and assessed against the established criteria, with previous scores held stable.

#### The Ideal Composite

After all five versions were evaluated, the creator asked the same Opus 4.6 chat to generate an "ideal composite" document combining the strongest elements from all versions: the Opus 4.6 rewrite's educational foundation and prose quality, the GPT 5.4 rewrite's technical publishing guidance and sourced appendix, and the Client Original and Fergus v2's worked examples and section-by-section templates. The composite is not included in the scorecard (it would be grading its own homework) but serves as the benchmark against which each rewrite's detail pages compare.

#### Building This Site

To consolidate and present these insights, the creator asked the same Opus 4.6 chat to produce the documentation and prompting inputs for Claude Code to build this interactive experience. The scorecard data, hover text, detailed explanations, and all verbatim quotes were generated in that chat and exported as a structured JSON file that powers this application.

### Disclaimers

- All company-identifying information has been removed from the source documents. "TVs and More" is a fictional brand used for illustration.
- The evaluation was conducted by Claude Opus 4.6 Extended, which is also one of the models being evaluated. This is disclosed transparently. The Opus 4.6 rewrite was assessed using the same criteria as all other versions, and its weaknesses (lack of operational guidance, missing template) are documented frankly.
- "Fergus" is the internal name for the firm's proprietary AI tool. Its underlying architecture (Gemini 3.0 Flash orchestration with specialized agents) is described as disclosed by the firm.
- Processing time observations are estimates based on the creator's recollection, not precise measurements.
- This evaluation reflects the state of these AI systems as of March 14, 2026. Model capabilities change rapidly.

---

## Design Direction

- Clean, editorial aesthetic — think analysis report or longform journalism, not SaaS dashboard
- Light background, generous whitespace, readable typography
- Score cells color-coded: red (1-3), amber (4-5), green (6-10) with intensity varying by score
- The table should be responsive but prioritize desktop readability
- Smooth transitions for hover states and page navigation
- Detail pages should feel like reading a well-formatted article
- The About page should feel like reading a well-structured longform piece — generous typography, pull quotes for the verbatim prompts, clear section breaks
- Blockquotes/code blocks for verbatim prompts should be visually distinct and clearly labeled

## Data Source

All scorecard data, hover text, detailed explanations, and verbatim quotes are in `scorecard_data.json`. This is the single source of truth for all evaluation content. The app should read from this file and never hardcode evaluation text.

The About page content is provided above in this prompt and can be hardcoded or stored separately — your call on what's cleanest architecturally.

## Document Files

The following source documents are available for reference. You don't need to parse them programmatically — all relevant quotes are already extracted in the JSON. But they're available if needed:

- `BBY_-_External_Comms_and_AI_in_2026.docx` (Client Original)
- `How_Frontier_LLMs_Work_Rewritten.docx` (Fergus v1)
- `OpenAIedit_AI_External_Comms_2026_Rewrite.docx` (GPT 5.4)
- `Fergus_v2_How_Frontier_LLMs_Work_Rewritten.docx` (Fergus v2)
- `Opus_4_6_Extended_revised_ai_content_guide__1_.docx` (Opus 4.6)
- `AI_External_Comms_Guide_v2.docx` (Ideal Composite)
