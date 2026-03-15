/**
 * Plain-text version of the Ideal Composite document (v4, human-edited).
 * Converted from IdealComposite.tsx JSX for use in the chat agent system prompt.
 */
export const IDEAL_COMPOSITE_TEXT = `# AI & External Communications: Optimizing Owned Content for AI Discovery and Accuracy

## Overview

When we publish content on our corporate blog or newsroom — whether it's a product announcement, a seasonal campaign, or an evergreen explainer — we are now writing for three audiences at once:

- **AI platforms** — infrastructure that searches for, retrieves, and synthesizes our content into answers. These systems prioritize content that is clear, factual, well-structured, and easy to cite.
- **Journalists** — professionals who need to understand what we announced, decide it matters, and expect the news in a format they recognize.
- **Consumers** — anyone searching for information about TVs and More, from the products we sell to our community work to our membership programs.

This guide has two goals. First, provide the communications team with a foundational understanding of how AI systems actually discover, process, and use our content. Second, establish practical best practices for structure and formatting that serve all three audiences — without requiring anyone to write like a robot.

You will not optimize every element of every announcement, and that is fine. The goal is fluency, not perfection. Understanding *what* these systems need and *why* allows you to make informed decisions about when and how to optimize, and what you're giving up when you don't.

### A Note on What We Know and Don't Know

The field of "generative engine optimization" is young and evolving rapidly. The technical foundations in the next section — how language models learn from training data, how search-augmented retrieval works — are well-established and grounded in published platform documentation. The editorial guidance that follows is based on a combination of official platform recommendations (cited in the appendix), longstanding principles of clear writing and structured communication, and reasonable inferences from how these systems are known to work. Where guidance is an inference rather than a documented rule, we say so. No platform publishes a guaranteed formula for citation or ranking, and anyone who claims otherwise is selling something. Our goal is to make informed bets, not to chase false certainty.

There is an important anchor here, though: much of what works for AI discoverability overlaps substantially with SEO best practices developed over the last twenty years — clear titles, structured content, factual precision, crawlability, canonical URLs, and authoritative sourcing. This is not a coincidence. As explained in the next section, most AI-powered search products retrieve content through web search infrastructure, which means traditional search ranking directly feeds downstream AI responses. Many of the reference sources cited in this guide are Google's own public search documentation, and for good reason — the fundamentals still apply. When in doubt, honor established SEO discipline. You should never follow an experimental, inference-based GEO recommendation that could hurt your PageRank score and traditional search referral traffic, which remains hugely important in its own right and is often the pipeline through which AI systems find your content in the first place.

## How AI Systems Actually Work with Our Content

AI platforms like ChatGPT, Claude, Gemini, and Perplexity don't "understand" content the way a human reader does. They work through pattern recognition at enormous scale. Our content reaches people through these platforms via two distinct paths, and understanding the difference shapes everything else in this guide.

### Path 1: Training Knowledge

Large language models are trained on massive amounts of text from across the internet — web pages, news articles, press releases, blog posts, earnings reports, and much more. During training, the model reads this text and learns statistical patterns about language: which words tend to follow which other words, how concepts relate to each other, what kinds of answers typically follow what kinds of questions.

Our public content is almost certainly part of this training data. But the model doesn't "store" our press release as a document it can look up later. Instead, it absorbs the patterns and facts from our content into its parameters — billions of numerical weights that collectively encode everything the model learned. When someone asks a question, the model generates a response one word at a time based on all of those learned patterns, not by retrieving a specific source.

What this means in practice: A model might know that TVs and More operates more than 1,000 stores in the U.S. and offers the TVM+ membership program, but it can't "pull up" a specific press release the way a search engine would. The knowledge is there. The source attribution is gone.

We have limited direct control over this path because training has already happened. But the following factors determine how well our facts were absorbed:

- **Prevalence.** If our announcement was picked up by many outlets, the model saw the same facts repeated across multiple sources. Repetition strengthens the signal.
- **Clarity.** Simple, concrete statements ("TVs and More operates over 1,000 U.S. stores") get absorbed more reliably than vague or complex ones. If we buried a key fact in the fourth paragraph behind qualifying language, the model may have learned a fuzzier version of it.
- **Consistency.** If our messaging was consistent across our press release, blog, and social channels, the model is more likely to get it right. Contradictory signals across sources lead to muddled outputs.
- **Recency.** Models have a training cutoff date. Content published after that date is not part of the model's built-in knowledge. However, it can still be surfaced through the second path.

### Path 2: Search-Augmented Retrieval

Most major AI platforms now include real-time web search. When someone asks a question on ChatGPT, Perplexity, or Google's AI Overviews, the system often searches the web first, retrieves relevant pages, and then generates an answer grounded in those results. This is where the structure and clarity of our content has the most direct impact.

Here is what happens, step by step:

- **Search.** The system converts the user's question into one or more search queries and retrieves web results — typically the top 5 to 20 pages.
- **Passage extraction.** The system identifies the most relevant passages within those pages using semantic similarity — a meaning-based comparison between the user's question and sections of text. This is not keyword matching. "When does the TVs and More sale start?" and "TVs and More Black Friday launch date" are semantically similar even though they share few exact words.
- **Answer generation.** The model synthesizes information from the extracted passages into a coherent answer, often with citations back to the original sources.

Key takeaway: For this path, our content needs to do two things: rank in web search so it gets retrieved in the first place, and be easy to extract clear facts from so the AI uses our content accurately in its response.

### How the Two Paths Interact

In practice, these two paths are not neatly separated. When someone asks an AI chatbot a question, the model draws on both sources — its training data (a massive snapshot of the internet, frozen at a cutoff date) and live web search (which pulls current results in real time). The model decides which source to lean on based on cues in the prompt. Words like "current," "latest," or "today" tend to trigger a web search, while questions about established topics ("Who is the CEO of TVs and More?" or "How many stores does TVs and More have?") are more likely to be answered from training knowledge alone.

But this routing logic is more brittle than it sounds. It is driven by surface-level patterns in how the question is worded, not by a true understanding of whether the answer requires current information. A question like "Does TVs and More offer same-day delivery?" might be answered from training memory on one platform and trigger a live search on another — or get different treatment on the same platform depending on whether the user phrases it as a general question or adds "right now" at the end. The same underlying fact can be retrieved from completely different sources depending on phrasing.

This is also why answers sometimes blend both paths in a single response. The model might draw on training knowledge for background context ("TVs and More is a major consumer electronics retailer with over 1,000 locations") and then supplement it with search results for the specific detail the user asked about ("Their Black Friday sale starts November 20 this year, according to their newsroom"). If the training knowledge and the search results conflict — say, because a store count or program name has changed — the model has to reconcile them, and it doesn't always get it right.

This is why our content needs to work for both worlds. It should be written clearly enough that an AI can accurately represent our facts when our content is eventually absorbed into training data — but also structured and published in a way that ensures it surfaces in real-time search results today. The good news is that the same practices serve both paths: clear language, specific facts, strong structure, and consistent messaging across channels.

### How Each Path Works in Practice

**Training knowledge — durable company facts.** Earnings results, executive leadership, store footprint, major programs like our support services and membership tiers — these are the kinds of facts that persist well in training data. Months later, when someone asks "How big is TVs and More?" or "Does TVs and More offer same-day delivery?" the model generates an answer drawing on those learned patterns. The clearer and more widely reported the original facts were, the more accurately the model reflects them. But the model won't cite our press release, and if the numbers have since changed, the model may still reflect the older figure until it's retrained.

**Search-augmented retrieval — time-sensitive announcements.** Seasonal promotions, event dates, and breaking news are exactly where search-augmented retrieval matters most. When someone asks "When does the TVs and More Black Friday sale start?" the system searches the web, retrieves our press release, identifies the most relevant passages, and generates a synthesized answer — ideally citing our page as the source. If our headline is clear and our opening paragraph states the date explicitly, we're in a strong position. If the date is buried in paragraph four, or our headline is vague ("TVs and More Announces Holiday Plans"), the model might pull the date from a third-party article instead — or get it wrong entirely.

## New News vs. Evergreen Content: Different Priorities

Not all content has the same relationship with these AI systems, and the tradeoffs in how you structure and optimize it depend on what you're publishing.

**Time-sensitive announcements** (Black Friday sale, product launch, earnings, new partnership) live or die on the search-augmented retrieval path. The content needs to be discoverable immediately, which means the technical publishing fundamentals (crawlability, indexing, canonical URLs) and the editorial basics (clear headline, facts in the lede, specific dates) matter most. You're competing to be the authoritative source on a question that users are asking right now. Invest most of your optimization effort here: get the headline, lede, and key highlights right, make sure the page is technically findable, and don't worry as much about long-term knowledge graph effects.

**Evergreen content** (how-to guides, service explainers, membership comparisons, policy overviews) serves a different function. It has a longer shelf life and is more likely to be absorbed into training data over time — especially if it ranks well in search and gets referenced by third-party sources. For evergreen content, the training knowledge path matters more: clarity, consistency, and prevalence become the priority. FAQ sections, structured how-it-works blocks, and comparison formats are particularly valuable here because they match the kinds of questions users ask repeatedly over months and years. You can also afford to invest more in structured data markup and internal linking, since the content will accumulate authority over time.

**The overlap:** Both types benefit from the fundamentals — clear language, named entities, specific facts, good structure. The difference is where you invest your marginal effort. For a breaking announcement, spend it on speed and discoverability. For an evergreen guide, spend it on depth and durability.

## Announcement Structure: Section-by-Section Guide

There is no single mandatory layout for AI systems — no platform publishes a required format for content to be eligible for citation or retrieval. That said, the structure below aligns with Google's published guidance to "create helpful, reliable, people-first content" (Source 3) and the general principle that well-organized, clearly factual pages are easier for both humans and machines to extract information from.

- Headline (The "What")
- Subhead (The "So What")
- Key Highlights (The "Snippet-Bait" Zone)
- Lede (Opening Paragraph)
- Context Paragraph (The "Why It Matters")
- Quote (The Authority Signal)
- Subsections (The "Information Gain")
- FAQ (The "Answer Machine")
- Boilerplate (Our Identity Anchor)
- Contact Information

Think of this as a default, not a law. Not every page needs every element. Use the pieces that help the news travel clearly.

### Headline

**Purpose: give the clearest possible summary of what happened.**

Because search-augmented retrieval starts with a web search, the headline functions much the way it always has in SEO: it is a primary signal that search engines use to determine what the page is about. Google's documentation on title links (Source 5 in the appendix) confirms that visible titles, headings, and title elements should align and clearly describe the page content. By extension, a headline that clearly names the entity, the action, and the key detail gives the retrieval system the best chance of matching our page to a relevant user query.

This is not a new insight — good PR headlines have always been direct and factual. What has changed is the downstream consequence: a vague or clever headline that a journalist might have deciphered from context is now more likely to be skipped by a system that is pattern-matching across dozens of candidate pages in milliseconds.

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

The subhead provides additional context that helps both search engines and readers quickly understand the scope and significance of the announcement. It should add information not already in the headline — customer benefit, scope, scale, or timing. Keep it to 8–20 words. One complete sentence or one strong fragment both work.

When we mention a partner like Samsung or Meta, we create an association between TVs and More and that entity in the content that search and AI systems process. This can help our announcement surface in response to queries about the partner, even if the user doesn't mention TVs and More specifically — though the degree to which different platforms build and maintain these entity associations varies and is not well documented.

**Examples:**
- Sale offers early access to major tech deals online, in-app, and in stores nationwide. (channel scope, customer benefit)
- New service expands same-day delivery to 500 additional U.S. locations. (scale)
- Program offers members up to $25 in bonus rewards. (customer benefit with specific value)

### Key Highlights

**Purpose: provide structured, scannable facts that are easy for both humans and machines to extract.**

Bulleted key highlights sit near the top of the page and present the most important facts in a format that doesn't require reading full paragraphs. We believe this format is well-suited for AI extraction because it aligns with how passage extraction works: when a retrieval system is looking for the specific answer to "Where can I shop the TVs and More sale?" a labeled, self-contained bullet is a cleaner match than a fact embedded mid-paragraph. No platform has published guidance confirming that bullet points receive preferential treatment, but the logic follows from how semantic similarity matching works.

Use the **"Label: Value"** structure — bold the label before the colon, follow with specific facts, one idea per bullet. Aim for 5–8 bullets.

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

The lede is likely the most important paragraph for both search visibility and AI extraction. Google's guidance emphasizes placing key information prominently on the page (Source 4), and the general principle that retrieval systems match user queries against page passages means the opening paragraph — which is read by virtually every system that processes the page — carries disproportionate weight in determining what the page is "about."

The lede must clearly state the who (company or entity), what (action taken), when (date or timeframe), where (geography or scope, if relevant), and why it matters (benefit or context). Start with the announcement, not scene-setting. If we're introducing something new — a product, service, or program — include a short definition in the first or second sentence.

This does not mean robotic writing. It just means leading with the news and including explicit factual signals.

**Example:**
> "DALLAS (Nov. 20, 2025) — TVs and More today launched its annual Black Friday Sale, offering early access to major deals on holiday tech online, in stores, and in the TVs and More app. Beginning Nov. 20, customers can shop doorbusters across TVs, laptops, appliances, and smart home devices. TVM+ and TVM Total™ members can earn up to $25 in bonus rewards through Nov. 29."

In this example, a retrieval system processing this paragraph encounters: entity (TVs and More), action (launched), object (Black Friday Sale), date (Nov. 20), scope (all channels), categories (TVs, laptops, etc.), and member benefit — all in self-contained, quotable form.

### Context Paragraph

**Purpose: explain why the announcement matters.**

The second paragraph answers the most likely follow-up question: why did the company do this, and who benefits? This serves all three audiences — journalists use it for story framing, consumers use it to decide if the news is relevant to them, and AI systems that generate multi-sentence responses may draw on it to provide context alongside the core facts.

A useful framework is **Evidence → Action → Result**:

- *Evidence:* "Recent research shows 67% of tech shoppers prefer same-day delivery when available."
- *Action:* "TVs and More is expanding same-day delivery to 500 additional stores."
- *Result:* "Giving customers faster access to the products they need."

Include evidence or metrics when possible — they make the "why" concrete rather than aspirational. Keep it to one tight paragraph. Ask yourself: if a user asked AI "Why did TVs and More do this?" does this paragraph provide a direct, factual answer?

### Quote

**Purpose: state the company's point of view with clear attribution.**

Quotes from named executives serve a different function in an AI-mediated environment than they do in traditional media. In traditional PR, quotes add color and voice. In AI-mediated contexts, they are one of the few elements that come with built-in attribution — a named person, a title, a company — which makes them relatively easy for a system to extract and present with a source. Whether this actually increases citation probability is not something any platform has confirmed, but the logic is straightforward: a self-contained, factual statement with clear attribution is easier to safely reuse than an unattributed claim buried in body text.

**What matters:**
- **Clear attribution.** Always include full name, title, and company.
- **Echo the core announcement.** Quotes should reinforce the headline and lede, not introduce entirely new information. If the announcement is about same-day pickup, the quote should say "same-day pickup."
- **Keep it tight.** 1–3 sentences, 20–60 words. Simple grammar and direct phrasing. One clear theme.
- **Pair emotion with substance.** If you include emotion, pair it with a specific detail. Emotion alone is generic; emotion plus a fact is distinctive.
- **Include at least one specific detail.** A date, number, benefit, scope, entity name, or category. Specific details make the quote extractable and potentially unique — two details combined may create a data point that doesn't exist elsewhere on the web.

**Examples:**
> "By expanding same-day pickup to 1,000 stores, we're giving customers faster access to the tech they rely on during the holiday season," said Maria Chen, CEO of TVs and More.

> "Our goal is simple: make holiday shopping faster and easier," said Maria Chen, TVs and More CEO. "This update reduces average pickup time by 40%."

### Subsections

**Purpose: deliver new, specific facts that support the claims made earlier.**

After the lede, context, and quote establish the narrative, subsections shift to structured information delivery. For AI systems that process content in passages, well-headed subsections offer a natural extraction boundary: the header signals what the section is about, and the content beneath it provides the answer.

They should include facts not found earlier in the announcement — supporting evidence, operational details, or product specifics. A clear subsection header like "TVs and More Black Friday Doorbusters" also helps differentiate our content from competitors making similar announcements — in theory, this makes it easier for a system to attribute the right details to the right retailer, though the degree to which this prevents "information blending" across sources is not well-studied.

Use predictable formatting: a descriptive header, 1–2 sentences stating the key fact up front, then bulleted details with one fact per bullet.

**Header examples that mirror likely user queries:**
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

**Purpose: answer predictable follow-up questions in a format that closely mirrors how users query AI systems.**

FAQ sections are well-suited for AI extraction because they are structured as question-answer pairs — and AI-assisted search is fundamentally a question-answering system. When a user's question closely matches an FAQ question on our page, the retrieval system has a near-exact match to work with, and the answer is already written in a self-contained format the model can present without heavy summarization. Google's FAQPage structured data documentation (Source 8) notes that FAQ rich-result eligibility is limited, so don't assume FAQ markup guarantees any particular treatment — but the on-page content format is valuable regardless of whether the structured data triggers a rich result.

Use 3–7 questions. Keep answers to 40–60 words — long enough to provide real information, short enough to be extracted cleanly. Start answers with a direct statement (when appropriate, lead with "Yes" or "No").

Repeating facts from earlier in the announcement within the FAQ is not a problem — for a system that extracts individual passages, the FAQ may be the passage that gets retrieved, and it needs to stand on its own.

This format is especially valuable for evergreen content like service explainers, membership comparisons, and policy guides, where the same questions are asked repeatedly over months or years.

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

**Purpose: give consistent, current organizational context.**

The boilerplate provides a standardized description of who we are. For AI systems processing our content, a consistent boilerplate across all our published material reinforces the association between our company name and our key attributes (industry, scale, programs, geography). It also helps disambiguate us from unrelated content that might use similar phrasing. Historically, we have included a boilerplate only in formal press releases. Moving forward, consider including it in any announcement or blog where AI visibility matters.

Include: official company name, headquarters location, industry category, stock ticker, scale and scope (employees, locations, revenue, customer base), key program entities (support services, membership programs, advertising platform), core capabilities, corporate website, and LinkedIn handle.

**Example:**
> TVs and More, Inc. (NYSE: TVM) is a leading provider of technology products, services, and solutions. Headquartered in Dallas, Texas, TVs and More operates more than 1,000 stores across the United States, serving millions of customers annually. The company offers expert service through its in-store support team, personalized experiences through TVM+ and TVM Total™ membership programs, and advertising solutions through TVM Ads. For more information, visit www.TVsandMore.com or follow @TVsandMore on LinkedIn.

### Contact Information

**Purpose: provide a clear path to the next authoritative source.**

Include a professional media contact under the boilerplate. Link to the related product page, category page, or newsroom hub so the next click — whether from a journalist, a consumer, or someone following a link from an AI-generated citation — lands on an authoritative destination.

**Example:**
**Media Contact:** TVs and More Corporate Communications | press@tvsandmore.com | (214) 555-0100

## Technical Publishing Checklist

Good editorial structure cannot rescue a page that is technically hard to crawl, hard to index, or hard to excerpt. This section addresses the infrastructure layer that determines whether AI systems can even find our content. Unlike the editorial guidance above, most of these recommendations are directly grounded in published platform documentation.

### Discovery and access
- Allow important pages to be crawled in robots.txt. Do not accidentally block bots at the CDN, WAF, or hosting layer. (Sources 2, 9)
- Use indexable HTML for the main version of the content. Avoid noindex unless the page should truly stay out of search. (Source 2)
- Link to the page from the newsroom hub, relevant category pages, and other durable internal paths. (Source 2)
- Include important URLs in XML sitemaps and keep the sitemap current. (Source 2)

### Canonical source management
- Declare a preferred canonical URL for each page. Avoid unnecessary duplicates from parameters, alternate paths, or campaign URLs.
- If you reuse an annual event page (e.g., Black Friday), update the visible title, date, metadata, and body copy thoroughly. Do not leave stale years in the title.
- If a PDF or DOCX version also exists, keep the HTML page as the primary public source.

### On-page clarity and metadata
- Use a descriptive title element and one obvious main heading. Do not make the page title, heading, and visible headline compete with one another. (Source 5)
- Show publication and update dates clearly when they matter. (Source 4)
- Put dates, numbers, participating channels, and availability in text — not only in images, carousels, or downloadable files. (Source 4)
- Use only structured data (schema markup) that accurately represents the visible page. (Sources 6, 7)

### Platform-specific considerations
- If you want visibility in ChatGPT search, allow OAI-SearchBot in robots.txt. This is separate from GPTBot, which governs potential training use. (Source 9)
- Verify the site in Google Search Console. Inspect important URLs and use validation tools for structured data. (Source 4)
- Use nosnippet, max-snippet, or data-nosnippet deliberately for content you do or do not want excerpted in Google AI Overviews. (Source 12)

## Retail-Specific Considerations

Users often move from an announcement to a commerce question: What's included? Is it in stock? Where can I buy it? What are the member benefits? That handoff should be planned deliberately.

- **Pair each announcement with the next authoritative destination.** A sale announcement should link to the live sale page. A product launch should link to the canonical product page. A membership change should link to the membership detail page.
- **Keep Merchant Center and Business Profile information current** when those data sources are relevant. For Google AI search experiences, these are explicitly part of the modern ecosystem for shopping and local discovery. (Source 4)
- **Maintain consistency** in timing, availability, member benefits, and channel scope across newsroom copy, product pages, checkout flows, FAQs, Merchant Center data, and customer support content.

## Pre-Publication Checklist

Use this as a quick reference before publishing any announcement or blog where AI visibility matters.

- **Headline:** Does it include [Company] + [Action Verb] + [What] + [Timing or Scope]? Would it answer what a user might ask AI?
- **Subhead:** Does it add information not already in the headline — customer benefit, scale, scope, or timing? Is it 8–20 words?
- **Key Highlights:** Are they in "Label: Value" format with bold labels? Is it 5–8 bullets, one idea per bullet, with specific facts?
- **Lede:** Does it answer who, what, when, where, and why it matters? Does it lead with the news, not scene-setting?
- **Context Paragraph:** Does it explain why this announcement matters? Does it include evidence or metrics? Could it answer "Why did we do this?"
- **Quote:** Is it attributed with full name, title, and company? Does it reinforce the core announcement? Does it include at least one specific detail (date, number, entity, scope)?
- **Subsections:** Do headers mirror what users might search for? Does each subsection add new facts not found earlier?
- **FAQ:** Are there 3–7 questions with 40–60 word answers? Do answers start with a direct statement? *(Especially important for evergreen content.)*
- **Boilerplate:** Is it current? Does it include headquarters, ticker, scale, key programs, website, and LinkedIn?
- **Contact:** Is a professional media contact listed with a corporate email domain?
- **Technical:** Is the page crawlable? Does it have a canonical URL? Are key facts in text (not just images)? Are dates visible? *(Especially important for time-sensitive announcements.)*

## Key Terms

**Large Language Model (LLM):** A neural network trained on massive amounts of text that generates responses by predicting the most likely next word, one token at a time. Examples include GPT-4, Claude, and Gemini.

**Parameters:** The billions of numerical weights inside the model that encode its learned knowledge — not as stored documents, but as patterns of association.

**Retrieval-Augmented Generation (RAG):** A system where AI searches for and retrieves external content in real time before generating an answer. This is how ChatGPT with web search, Perplexity, and Google's AI Overviews work.

**Semantic similarity:** A measure of how close two pieces of text are in meaning, not just shared keywords. This is how AI systems match a user's question to relevant passages in our content.

**Embeddings:** Numerical representations of text that capture meaning. Similar meanings produce similar numbers, which is how the system measures semantic similarity.

**Hallucination:** When a model generates something that sounds plausible but is factually incorrect. More likely when training data was vague or contradictory on a given topic.

**Training cutoff:** The date after which the model has no built-in knowledge. Content published after the cutoff can still be surfaced through search-augmented retrieval.

**Knowledge graph:** A structured representation of relationships between entities (companies, products, people, concepts). AI systems build and update these relationships based on content they process.

## Selected Sources

This guide is anchored to public documentation from the platforms that matter most. Platform behavior changes over time; treat this as a dated snapshot. Source numbers are referenced inline throughout the guide.

1. Google Search Central — AI features and your website
2. Google Search Central — In-depth guide to how Google Search works
3. Google Search Central — Creating helpful, reliable, people-first content
4. Google Search Central Blog — Top ways to ensure your content performs well in Google's AI experiences
5. Google Search Central — Influencing title links
6. Google Search Central — Article structured data
7. Google Search Central — Organization structured data
8. Google Search Central — FAQPage structured data
9. OpenAI Developers — Overview of OpenAI Crawlers
10. OpenAI Help — ChatGPT search
11. Anthropic Docs — Web search tool
12. Google Search Central — Snippets and robots preview controls

Prepared March 2026. Revisit this guide periodically; platform behavior and documentation change over time.

Document version: March 15, 2026`;
