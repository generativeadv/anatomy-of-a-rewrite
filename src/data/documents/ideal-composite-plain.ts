/**
 * Plain-text version of the Ideal Composite document.
 * Converted from IdealComposite.tsx JSX for use in the chat agent system prompt.
 */
export const IDEAL_COMPOSITE_TEXT = `# AI & External Communications: Optimizing Owned Content for AI Discovery and Accuracy

## Overview

When we publish content on our corporate blog or newsroom — whether it's a product announcement, a seasonal campaign, or an evergreen explainer — we are now writing for three audiences at once:

- **AI platforms** — infrastructure that searches for, retrieves, and synthesizes our content into answers. These systems prioritize content that is clear, factual, well-structured, and easy to cite.
- **Journalists** — professionals who need to understand what we announced, decide it matters, and expect the news in a format they recognize.
- **Consumers** — anyone searching for information about TVs and More, from the products we sell to our community work to our membership programs.

This guide has two goals. First, provide the communications team with a foundational understanding of how AI systems actually discover, process, and use our content. Second, establish practical best practices for structure and formatting that serve all three audiences — without requiring anyone to write like a robot.

You will not optimize every element of every announcement, and that is fine. The goal is fluency, not perfection. Understanding what these systems need and why allows you to make informed decisions about when and how to optimize, and what you're giving up when you don't.

## How AI Systems Actually Work with Our Content

AI platforms like ChatGPT, Claude, Gemini, and Perplexity don't "understand" content the way a human reader does. They work through pattern recognition at enormous scale. Our content reaches people through these platforms via two distinct paths, and understanding the difference shapes everything else in this guide.

### Path 1: Training Knowledge

Large language models are trained on massive amounts of text from across the internet — web pages, news articles, press releases, blog posts, earnings reports, and much more. During training, the model reads this text and learns statistical patterns about language: which words tend to follow which other words, how concepts relate to each other, what kinds of answers typically follow what kinds of questions.

Our public content is almost certainly part of this training data. But the model doesn't "store" our press release as a document it can look up later. Instead, it absorbs the patterns and facts from our content into its parameters — billions of numerical weights that collectively encode everything the model learned. When someone asks a question, the model generates a response one word at a time based on all of those learned patterns, not by retrieving a specific source.

**What this means in practice:** A model might know that TVs and More operates more than 1,000 stores in the U.S. and offers the TVM+ membership program, but it can't "pull up" a specific press release the way a search engine would. The knowledge is there. The source attribution is gone.

We have limited direct control over this path because training has already happened. But the following factors determine how well our facts were absorbed:

- **Prevalence.** If our announcement was picked up by many outlets, the model saw the same facts repeated across multiple sources. Repetition strengthens the signal.
- **Clarity.** Simple, concrete statements ("TVs and More operates over 1,000 U.S. stores") get absorbed more reliably than vague or complex ones.
- **Consistency.** If our messaging was consistent across our press release, blog, and social channels, the model is more likely to get it right. Contradictory signals across sources lead to muddled outputs.
- **Recency.** Models have a training cutoff date. Content published after that date is not part of the model's built-in knowledge. However, it can still be surfaced through the second path.

### Path 2: Search-Augmented Retrieval

Most major AI platforms now include real-time web search. When someone asks a question on ChatGPT, Perplexity, or Google's AI Overviews, the system often searches the web first, retrieves relevant pages, and then generates an answer grounded in those results. This is where the structure and clarity of our content has the most direct impact.

Here is what happens, step by step:

- **Search.** The system converts the user's question into one or more search queries and retrieves web results — typically the top 5 to 20 pages.
- **Passage extraction.** The system identifies the most relevant passages within those pages using semantic similarity — a meaning-based comparison between the user's question and sections of text. This is not keyword matching. "When does the TVs and More sale start?" and "TVs and More Black Friday launch date" are semantically similar even though they share few exact words.
- **Answer generation.** The model synthesizes information from the extracted passages into a coherent answer, often with citations back to the original sources.

**Key takeaway:** For this path, our content needs to do two things: rank in web search so it gets retrieved in the first place, and be easy to extract clear facts from so the AI uses our content accurately in its response.

### How the Two Paths Interact

In practice, these two paths are not neatly separated. When someone asks an AI chatbot a question, the model draws on both sources — its training data (a massive snapshot of the internet, frozen at a cutoff date) and live web search (which pulls current results in real time). The model decides which source to lean on based on cues in the prompt. Words like "current," "latest," or "today" tend to trigger a web search, while questions about established topics are more likely to be answered from training knowledge alone.

But this routing logic is more brittle than it sounds. It is driven by surface-level patterns in how the question is worded, not by a true understanding of whether the answer requires current information. The same underlying fact can be retrieved from completely different sources depending on phrasing.

**This is why our content needs to work for both worlds.** It should be written clearly enough that an AI can accurately represent our facts when our content is eventually absorbed into training data — but also structured and published in a way that ensures it surfaces in real-time search results today. The good news is that the same practices serve both paths: clear language, specific facts, strong structure, and consistent messaging across channels.

### How Each Path Works in Practice

**Training knowledge — durable company facts.** Earnings results, executive leadership, store footprint, major programs like our support services and membership tiers — these are the kinds of facts that persist well in training data. The clearer and more widely reported the original facts were, the more accurately the model reflects them. But the model won't cite our press release, and if the numbers have since changed, the model may still reflect the older figure until it's retrained.

**Search-augmented retrieval — time-sensitive announcements.** Seasonal promotions, event dates, and breaking news are exactly where search-augmented retrieval matters most. If our headline is clear and our opening paragraph states the date explicitly, we're in a strong position. If the date is buried in paragraph four, or our headline is vague, the model might pull the date from a third-party article instead — or get it wrong entirely.

## Announcement Structure: Section-by-Section Guide

There is no single mandatory layout for AI systems. That said, the structure below works well across readers, journalists, search engines, and AI assistants because it makes the important facts easy to find quickly.

- Headline (The "What")
- Subhead (The "So What")
- Key Highlights (The "Snippet-Bait" Zone)
- Lede (Opening Paragraph)
- Context Paragraph (The "Why It Matters")
- Quote (The Authority Signal)
- Subsections (The "Information Gain")
- FAQ (The "Answer Machine")
- Boilerplate (Our Identity Anchor)
- Contact Information (The Trust Signal)

Think of this as a default, not a law. Not every page needs every element. Use the pieces that help the news travel clearly.

### Headline

**Purpose: give the clearest possible summary of what happened.**

The headline is the primary signal AI systems use to determine topical relevance, identify the entity (TVs and More), understand the action, and decide whether to retrieve the page. Headlines should be clean, literal, and factual. AI systems struggle with figurative language and clever wordplay.

**Optimal structure:** [Company] + [Action Verb] + [What Is Being Announced] + [Key Timing or Scope]

**High-signal action verbs:** launches, announces, expands, introduces, opens, acquires, partners with, reports

**Examples — announcements and press releases:**
- TVs and More Launches Black Friday Sale Starting November 20
- TVs and More Expands Same-Day Delivery to 500 Additional Stores
- TVs and More Partners with Samsung to Offer Exclusive Smart Home Bundles
- TVs and More Reports Q4 2025 Revenue Growth of 12%

**Examples — blogs and evergreen content** (more creative flexibility, but don't sacrifice clarity):
- How TVs and More's Same-Day Pickup Service Works
- What Customers Should Know About TVs and More's Holiday Price Match Guarantee
- TVM+ vs. TVM Total™: Key Differences Explained
- The Complete Guide to Shopping TVs and More's Black Friday Sale in 2025

### Subhead

**Purpose: add the "so what" in one short line.**

AI platforms compare the headline and subhead to validate topic accuracy and build a richer picture of the announcement. The subhead should add information not already in the headline — customer benefit, scope, scale, or timing. Keep it to 8–20 words.

**Examples:**
- Sale offers early access to major tech deals online, in-app, and in stores nationwide.
- New service expands same-day delivery to 500 additional U.S. locations.
- Program offers members up to $25 in bonus rewards.

### Key Highlights

**Purpose: provide pre-formatted answers that AI systems can extract with minimal processing.**

Key Highlights are among the most AI-friendly content formats in an announcement. Use the "Label: Value" structure — bold the label before the colon, follow with specific facts, one idea per bullet. Aim for 5–8 bullets.

**Examples:**
- **Begins November 20:** Early access to Black Friday savings
- **Doorbusters in top tech:** TVs, laptops, tablets, and smart home devices
- **Top categories included:** TVs, laptops, appliances, wearables, and smart home
- **Member rewards:** Earn up to $25 in bonus rewards through Nov. 29
- **Shop your way:** Online, in the app, or in stores nationwide
- **Flexible fulfillment:** Choose shipping, curbside pickup, or in-store pickup
- **Shipping:** Free on all orders over $50

### Lede (Opening Paragraph)

**Purpose: provide the core factual foundation for the entire announcement.**

The lede is the single most important paragraph for AI visibility. It must clearly state the who (company or entity), what (action taken), when (date or timeframe), where (geography or scope, if relevant), and why it matters (benefit or context). Start with the announcement, not scene-setting.

**Example:**
> "DALLAS (Nov. 20, 2025) — TVs and More today launched its annual Black Friday Sale, offering early access to major deals on holiday tech online, in stores, and in the TVs and More app. Beginning Nov. 20, customers can shop doorbusters across TVs, laptops, appliances, and smart home devices. TVM+ and TVM Total™ members can earn up to $25 in bonus rewards through Nov. 29."

### Context Paragraph

**Purpose: explain why the announcement matters.**

The context paragraph provides the logical justification AI needs to treat our content as high-value rather than "thin." The strongest framework is **Evidence → Action → Result**:

- *Evidence:* "Recent research shows 67% of tech shoppers prefer same-day delivery when available."
- *Action:* "TVs and More is expanding same-day delivery to 500 additional stores."
- *Result:* "Giving customers faster access to the products they need."

### Quote

**Purpose: state the company's point of view with clear, attributable authority.**

For AI systems, quotes serve as high-confidence factual statements that can be safely extracted and reused. A quote from a named executive acts as a "guarantee" of the facts.

**What matters:**
- **Clear attribution.** Always include full name, title, and company.
- **Echo the core announcement.** Quotes should reinforce the headline and lede, not introduce entirely new information.
- **Keep it tight.** 1–3 sentences, 20–60 words. Simple grammar and direct phrasing.
- **Pair emotion with substance.** Emotion alone is weak; emotion plus a fact is strong.
- **Include at least one specific detail.** A date, number, benefit, scope, entity name, or category.

**Examples:**
> "By expanding same-day pickup to 1,000 stores, we're giving customers faster access to the tech they rely on during the holiday season," said Maria Chen, CEO of TVs and More.

> "Our goal is simple: make holiday shopping faster and easier," said Maria Chen, TVs and More CEO. "This update reduces average pickup time by 40%."

### Subsections

**Purpose: deliver new, specific facts that support the claims made earlier.**

After the quote, AI systems expect content to shift from narrative to structured information delivery. Use predictable formatting: a descriptive header, 1–2 sentences stating the key fact, then bulleted details with one fact per bullet.

**Header examples that mirror user queries:**
- TVs and More Black Friday Deal Highlights
- How TVs and More's Same-Day Pickup Works
- What Membership Benefits Come with TVM Total™?

**Example subsection:**

#### TVs and More Black Friday Deal Highlights

TVs and More's Black Friday Sale features doorbusters across major tech categories, with savings up to 50% on select items.

- **TVs:** Up to 40% off Samsung, LG, and Sony 4K and OLED models
- **Laptops:** Save up to $300 on HP, Dell, and Apple MacBooks
- **Tablets:** iPad and Samsung Galaxy tablets starting at $199
- **Smart home:** Discounts on Ring, Nest, and Ecobee devices

### FAQ

**Purpose: answer predictable follow-up questions in a format AI can use directly.**

FAQ sections are among the highest-leverage elements we can include. Use 3–7 questions. Keep answers to 40–60 words. Start answers with a direct statement.

**Examples:**

**Q: When does the sale start?**
A: The Black Friday Sale begins Thursday, November 20, 2025, with deals available online, in the app, and in stores nationwide.

**Q: How long does it run?**
A: The core event runs through Saturday, November 29, with some deals beginning earlier and select offers extending beyond November 29.

**Q: Where can deals be shopped?**
A: Online at TVsandMore.com, via the TVs and More mobile app, and in-store at all participating TVs and More locations.

**Q: Are there special member perks?**
A: Yes — TVM+ and TVM Total™ members can earn up to $25 in bonus rewards when they shop doorbusters through Nov. 29.

**Q: What product categories are included?**
A: The sale includes TVs, laptops, tablets, appliances, wearables, smart home devices, and gaming products, with savings up to 50% on select items.

### Boilerplate

**Purpose: give consistent, current organizational context that anchors our identity.**

The boilerplate tells AI exactly who we are and where we sit in the market. Moving forward, include it in any announcement or blog where AI visibility matters.

**Example:**
> TVs and More, Inc. (NYSE: TVM) is a leading provider of technology products, services, and solutions. Headquartered in Dallas, Texas, TVs and More operates more than 1,000 stores across the United States, serving millions of customers annually. The company offers expert service through its in-store support team, personalized experiences through TVM+ and TVM Total™ membership programs, and advertising solutions through TVM Ads. For more information, visit www.TVsandMore.com or follow @TVsandMore on LinkedIn.

### Contact Information

**Purpose: provide a verifiable trust signal and a path to the next authoritative source.**

Include a professional media contact under the boilerplate. Link to the related product page, category page, or newsroom hub so the next click lands on an authoritative destination.

**Example:**
**Media Contact:** TVs and More Corporate Communications | press@tvsandmore.com | (214) 555-0100

## Technical Publishing Checklist

Good editorial structure cannot rescue a page that is technically hard to crawl, hard to index, or hard to excerpt.

### Discovery and access
- Allow important pages to be crawled in robots.txt. Do not accidentally block bots at the CDN, WAF, or hosting layer.
- Use indexable HTML for the main version of the content. Avoid noindex unless the page should truly stay out of search.
- Link to the page from the newsroom hub, relevant category pages, and other durable internal paths.
- Include important URLs in XML sitemaps and keep the sitemap current.

### Canonical source management
- Declare a preferred canonical URL for each page. Avoid unnecessary duplicates from parameters, alternate paths, or campaign URLs.
- If you reuse an annual event page (e.g., Black Friday), update the visible title, date, metadata, and body copy thoroughly.
- If a PDF or DOCX version also exists, keep the HTML page as the primary public source.

### On-page clarity and metadata
- Use a descriptive title element and one obvious main heading.
- Show publication and update dates clearly when they matter.
- Put dates, numbers, participating channels, and availability in text — not only in images, carousels, or downloadable files.
- Use only structured data (schema markup) that accurately represents the visible page.

### Platform-specific considerations
- If you want visibility in ChatGPT search, allow OAI-SearchBot in robots.txt. This is separate from GPTBot, which governs potential training use.
- Verify the site in Google Search Console. Inspect important URLs and use validation tools for structured data.
- Use nosnippet, max-snippet, or data-nosnippet deliberately for content you do or do not want excerpted in Google AI Overviews.

## Retail-Specific Considerations

Users often move from an announcement to a commerce question: What's included? Is it in stock? Where can I buy it? That handoff should be planned deliberately.

- **Pair each announcement with the next authoritative destination.** A sale announcement should link to the live sale page. A product launch should link to the canonical product page.
- **Keep Merchant Center and Business Profile information current** when those data sources are relevant.
- **Maintain consistency** in timing, availability, member benefits, and channel scope across newsroom copy, product pages, checkout flows, FAQs, Merchant Center data, and customer support content.

## Pre-Publication Checklist

Use this as a quick reference before publishing any announcement or blog where AI visibility matters.

- **Headline:** Does it include [Company] + [Action Verb] + [What] + [Timing or Scope]? Would it answer what a user might ask AI?
- **Subhead:** Does it add information not already in the headline? Is it 8–20 words?
- **Key Highlights:** Are they in "Label: Value" format with bold labels? 5–8 bullets, one idea per bullet?
- **Lede:** Does it answer who, what, when, where, and why it matters? Does it lead with the news?
- **Context Paragraph:** Does it explain why this announcement matters? Does it include evidence or metrics?
- **Quote:** Is it attributed with full name, title, and company? Does it reinforce the core announcement?
- **Subsections:** Do headers mirror what users might search for? Does each subsection add new facts?
- **FAQ:** Are there 3–7 questions with 40–60 word answers? Do answers start with a direct statement?
- **Boilerplate:** Is it current? Does it include headquarters, ticker, scale, key programs, website, and LinkedIn?
- **Contact:** Is a professional media contact listed with a corporate email domain?
- **Technical:** Is the page crawlable? Does it have a canonical URL? Are key facts in text (not just images)? Are dates visible?

## Key Terms

**Large Language Model (LLM):** A neural network trained on massive amounts of text that generates responses by predicting the most likely next word, one token at a time. Examples include GPT-4, Claude, and Gemini.

**Parameters:** The billions of numerical weights inside the model that encode its learned knowledge — not as stored documents, but as patterns of association.

**Retrieval-Augmented Generation (RAG):** A system where AI searches for and retrieves external content in real time before generating an answer. This is how ChatGPT with web search, Perplexity, and Google's AI Overviews work.

**Semantic similarity:** A measure of how close two pieces of text are in meaning, not just shared keywords. This is how AI systems match a user's question to relevant passages in our content.

**Embeddings:** Numerical representations of text that capture meaning. Similar meanings produce similar numbers, which is how the system measures semantic similarity.

**Hallucination:** When a model generates something that sounds plausible but is factually incorrect. More likely when training data was vague or contradictory on a given topic.

**Training cutoff:** The date after which the model has no built-in knowledge. Content published after the cutoff can still be surfaced through search-augmented retrieval.

**Knowledge graph:** A structured representation of relationships between entities (companies, products, people, concepts). AI systems build and update these relationships based on content they process.

Prepared March 2026. Revisit this guide periodically; platform behavior and documentation change over time.
`;
