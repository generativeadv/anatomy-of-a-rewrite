/**
 * Generate a Word document (.docx) containing the side-by-side comparison
 * of the Client Original guide vs. the Ideal Composite revision.
 *
 * Run: node scripts/generate-comparison-docx.js
 * Output: public/downloads/AI_External_Comms_Comparison.docx
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat,
} = require("docx");
const fs = require("fs");
const path = require("path");

// ───────────────────────────────────────────────────────
// Color palette (matching the site)
// ───────────────────────────────────────────────────────
const COLORS = {
  navy: "1e3a5f",
  stone800: "292524",
  stone600: "57534e",
  stone400: "a8a29e",
  stone200: "e7e5e3",
  stone100: "f5f5f4",
  amber50: "fffbeb",
  amber600: "d97706",
  blue50: "eff6ff",
  white: "ffffff",
};

const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: COLORS.stone200 };
const cellBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const cellMargins = { top: 100, bottom: 100, left: 140, right: 140 };

// US Letter with 1" margins: content width = 9360 DXA
const TABLE_WIDTH = 9360;
const COL_WIDTH = TABLE_WIDTH / 2; // 4680 each for two-column

// ───────────────────────────────────────────────────────
// Helper: create a paragraph with mixed bold/italic runs
// Supports **bold** and *italic* markers in text
// ───────────────────────────────────────────────────────
function textRuns(text, baseOpts = {}) {
  const runs = [];
  // Split on **bold** and *italic* markers
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  for (const part of parts) {
    if (part.startsWith("**") && part.endsWith("**")) {
      runs.push(new TextRun({ text: part.slice(2, -2), bold: true, font: "Arial", size: 20, ...baseOpts }));
    } else if (part.startsWith("*") && part.endsWith("*")) {
      runs.push(new TextRun({ text: part.slice(1, -1), italics: true, font: "Arial", size: 20, ...baseOpts }));
    } else if (part) {
      runs.push(new TextRun({ text: part, font: "Arial", size: 20, ...baseOpts }));
    }
  }
  return runs;
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...opts,
    children: typeof text === "string" ? textRuns(text) : text,
  });
}

function boldPara(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...opts,
    children: [new TextRun({ text, bold: true, font: "Arial", size: 20 })],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: textRuns(text),
  });
}

function numberedItem(text, ref = "numbers") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 60 },
    children: textRuns(text),
  });
}

function heading3(text) {
  return new Paragraph({
    spacing: { before: 160, after: 80 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 22, color: COLORS.stone800 })],
  });
}

function heading4(text) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 20, color: COLORS.stone600 })],
  });
}

function blockquote(text) {
  return new Paragraph({
    spacing: { after: 120 },
    indent: { left: 360, right: 360 },
    border: { left: { style: BorderStyle.SINGLE, size: 6, color: COLORS.stone400, space: 8 } },
    children: [new TextRun({ text, italics: true, font: "Arial", size: 20, color: COLORS.stone600 })],
  });
}

function faqPair(q, a) {
  return [
    new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: q, bold: true, font: "Arial", size: 20 })],
    }),
    new Paragraph({
      spacing: { after: 120 },
      children: [new TextRun({ text: a, font: "Arial", size: 20 })],
    }),
  ];
}

// ───────────────────────────────────────────────────────
// Section data — plain text extracted from comparison-sections.tsx
// ───────────────────────────────────────────────────────

const sections = [
  {
    label: "Overview",
    compositeOnly: false,
    clientOriginal: [
      para("With the rise of agentic AI (ChatGPT, Gemini, Claude, etc.), external communications plays an outsized role in influencing what generative AI platforms serve up to external audiences\u2014both through earned media and owned content. This plan focuses on AI and owned PR content, specifically related to our company announcements and blog posts. It has two goals:"),
      bullet("Provide the communications team with a foundational understanding of what is important to generative AI platforms in PR content and why."),
      bullet("Provide an overview of the most effective structure and formatting for an announcement that serves AI, journalists and consumers simultaneously, including the role each section plays in deciding how AI reads, trusts, retrieves and, ultimately, uses our content."),
    ],
    idealComposite: [
      para("When we publish content on our corporate blog or newsroom \u2014 whether it\u2019s a product announcement, a seasonal campaign, or an evergreen explainer \u2014 we are now writing for three audiences at once:"),
      bullet("**AI platforms** \u2014 infrastructure that searches for, retrieves, and synthesizes our content into answers. These systems prioritize content that is clear, factual, well-structured, and easy to cite."),
      bullet("**Journalists** \u2014 professionals who need to understand what we announced, decide it matters, and expect the news in a format they recognize."),
      bullet("**Consumers** \u2014 anyone searching for information about TVs and More, from the products we sell to our community work to our membership programs."),
      para("This guide has two goals. First, provide the communications team with a foundational understanding of how AI systems actually discover, process, and use our content. Second, establish practical best practices for structure and formatting that serve all three audiences \u2014 without requiring anyone to write like a robot."),
      para("You will not optimize every element of every announcement, and that is fine. The goal is fluency, not perfection. Understanding *what* these systems need and *why* allows you to make informed decisions about when and how to optimize, and what you\u2019re giving up when you don\u2019t."),
    ],
    annotation: "The revision builds on the original\u2019s two goals and expands the opening to name all three audiences \u2014 AI platforms, journalists, and consumers \u2014 while setting the expectation that the goal is fluency, not perfection.",
  },
  {
    label: "A Note on What We Know and Don\u2019t Know",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("The field of \u201Cgenerative engine optimization\u201D is young and evolving rapidly. The technical foundations in the next section \u2014 how language models learn from training data, how search-augmented retrieval works \u2014 are well-established and grounded in published platform documentation. The editorial guidance that follows is based on a combination of official platform recommendations (cited in the appendix), longstanding principles of clear writing and structured communication, and reasonable inferences from how these systems are known to work. Where guidance is an inference rather than a documented rule, we say so. No platform publishes a guaranteed formula for citation or ranking, and anyone who claims otherwise is selling something. Our goal is to make informed bets, not to chase false certainty."),
      para("There is an important anchor here, though: much of what works for AI discoverability overlaps substantially with SEO best practices developed over the last twenty years \u2014 clear titles, structured content, factual precision, crawlability, canonical URLs, and authoritative sourcing. This is not a coincidence. Most AI-powered search products retrieve content through web search infrastructure, which means traditional search ranking directly feeds downstream AI responses. When in doubt, honor established SEO discipline. You should never follow an experimental, inference-based GEO recommendation that could hurt your PageRank score and traditional search referral traffic."),
    ],
    annotation: "New section added in the revision. This sets honest guardrails for the rest of the guide \u2014 distinguishing what\u2019s grounded in platform documentation from what\u2019s a reasonable inference, and anchoring the team to twenty years of established SEO practice as a safety net.",
  },
  {
    label: "How AI Works with Our Content",
    compositeOnly: false,
    clientOriginal: [
      heading3("AI Models: What It Means for Our PR Content"),
      para("The traditional way of thinking about how people get information about TVs & More and see the information we want them to\u2014largely through our corporate site and earned media\u2014is changing, quickly. We are no longer competing just for coverage; we are competing to be summarized correctly by generative AI platforms."),
      para("When we publish external content on our blog, whether it\u2019s an announcement or evergreen content, we\u2019re now writing for three audiences simultaneously."),
      bullet("**AI platforms**\u2014an audience that prioritizes content that is clear, factual, easy to cite, from authoritative sources and, most importantly, in an AI-model friendly structure."),
      bullet("**Journalists**\u2014an audience that needs to understand the news, decide it\u2019s important to cover and expects that news to be shared or announced in a format they understand."),
      bullet("**\u201CConsumers\u201D**\u2014any individual who is searching for information about TVs & More, from the products we sell to company initiatives to our work in local communities."),
      para("There is a lot of information covered in the remaining pages. The goal is to share with you what generative AI platforms are looking for from our content and why. We will never optimize 100% of every part of an announcement. We will make tradeoffs and likely decide to optimize some announcements more than others."),
      para("The important thing is to familiarize your understanding of the what and the why, which will allow you to better understand the tradeoffs you make in your external content."),
      para("How we structure and what we think about when writing external announcements and blogs must change. That does not mean writing like a robot with no emotion to feed the AI machine. It does mean, however, following a set of rules and best practices if we want AI to retrieve our content, provide people with accurate information and include our messaging."),
      heading3("Understanding How AI \u201CClassifies\u201D and \u201CCategorizes\u201D PR Content"),
      para("Generative AI platforms don\u2019t \u201Cunderstand\u201D the way humans do. Instead, they look for signals, detect patterns, prefer a structured layout, assign confidence scores, decide whether they can trust our content and, ultimately, if it matches what a person is asking."),
      para("Two of the most important factors in determining whether our content shows up correctly is dependent on how AI classifies and categorizes our content."),
      para("Before an AI platform can summarize, recommend, quote, or retrieve our content, it first has to understand what kind of thing it is and where it should put it. To do this, it classifies our content by looking for signals and pattern recognition across the headline, subhead, lede, named entities (TVs & More), verbs, structure and the strategic placement of key terms."),
      para("Think of classification as the \u201Ctags\u201D it assigns to our content."),
      heading3("The Steps: How AI Decides to Retrieve PR Content (or Not)"),
      para("While every generative AI platform has their own way of working, they generally follow the same order of steps when deciding whether to retrieve our content (and if what is shared is accurate)."),
      numberedItem("**Classification (tagging)** \u2014 What kind of thing is this?"),
      numberedItem("**Categorization (organizing)** \u2014 Where should I put this?"),
      numberedItem("**Retrieval (finding)** \u2014 Is this relevant?"),
      numberedItem("**Ranking (prioritization)** \u2014 How strongly does this match?"),
      numberedItem("**Citation Weighting and Confidence Scoring** \u2014 How much trust should I place in this source?"),
      numberedItem("**Answer Generation** \u2014 Content generated to user."),
    ],
    idealComposite: [
      heading3("How AI Systems Actually Work with Our Content"),
      para("AI platforms like ChatGPT, Claude, Gemini, and Perplexity don\u2019t \u201Cunderstand\u201D content the way a human reader does. They work through pattern recognition at enormous scale. Our content reaches people through these platforms via two distinct paths, and understanding the difference shapes everything else in this guide."),
      heading4("Path 1: Training Knowledge"),
      para("Large language models are trained on massive amounts of text from across the internet. During training, the model reads this text and learns statistical patterns about language: which words tend to follow which other words, how concepts relate to each other, what kinds of answers typically follow what kinds of questions."),
      para("Our public content is almost certainly part of this training data. But the model doesn\u2019t \u201Cstore\u201D our press release as a document it can look up later. Instead, it absorbs the patterns and facts from our content into its parameters \u2014 billions of numerical weights that collectively encode everything the model learned."),
      para("We have limited direct control over this path. But the following factors determine how well our facts were absorbed:"),
      bullet("**Prevalence.** Repetition across sources strengthens the signal."),
      bullet("**Clarity.** Simple, concrete statements get absorbed more reliably. If we buried a key fact in the fourth paragraph behind qualifying language, the model may have learned a fuzzier version of it."),
      bullet("**Consistency.** Consistent messaging across channels reduces muddled outputs."),
      bullet("**Recency.** Models have a training cutoff date. Content after that date is not part of built-in knowledge."),
      heading4("Path 2: Search-Augmented Retrieval"),
      para("Most major AI platforms now include real-time web search. When someone asks a question, the system often searches the web first, retrieves relevant pages, and then generates an answer grounded in those results. This is where the structure and clarity of our content has the most direct impact."),
      bullet("**Search.** The system converts the question into search queries and retrieves the top 5 to 20 pages."),
      bullet("**Passage extraction.** The system identifies relevant passages using semantic similarity \u2014 a meaning-based comparison, not keyword matching."),
      bullet("**Answer generation.** The model synthesizes information from extracted passages into a coherent answer, often with citations."),
      heading4("How the Two Paths Interact"),
      para("In practice, these two paths are not neatly separated. The model draws on both sources and decides which to lean on based on cues in the prompt. But this routing logic is more brittle than it sounds \u2014 the same underlying fact can be retrieved from completely different sources depending on phrasing."),
      para("This is why our content needs to work for both worlds. It should be written clearly enough for training data absorption, and structured well enough to surface in real-time search results. The good news is that the same practices serve both paths: clear language, specific facts, strong structure, and consistent messaging across channels."),
    ],
    annotation: "This is the most significant structural revision. The original walked through how AI classifies and retrieves content in a clear six-step flow. The revision expands on this to introduce a second pathway \u2014 training knowledge \u2014 and explains how both paths interact, including an honest note that the routing logic between the two paths is more brittle than it sounds.",
  },
  {
    label: "New News vs. Evergreen Content",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("Not all content has the same relationship with these AI systems, and the tradeoffs in how you structure and optimize it depend on what you\u2019re publishing."),
      para("**Time-sensitive announcements** (Black Friday sale, product launch, earnings, new partnership) live or die on the search-augmented retrieval path. The content needs to be discoverable immediately, which means the technical publishing fundamentals and the editorial basics matter most. Invest most of your optimization effort here: get the headline, lede, and key highlights right, make sure the page is technically findable, and don\u2019t worry as much about long-term knowledge graph effects."),
      para("**Evergreen content** (how-to guides, service explainers, membership comparisons, policy overviews) has a longer shelf life and is more likely to be absorbed into training data over time. For evergreen content, the training knowledge path matters more: clarity, consistency, and prevalence become the priority. FAQ sections, structured how-it-works blocks, and comparison formats are particularly valuable here because they match the kinds of questions users ask repeatedly over months and years."),
      para("**The overlap:** Both types benefit from the fundamentals \u2014 clear language, named entities, specific facts, good structure. The difference is where you invest your marginal effort. For a breaking announcement, spend it on speed and discoverability. For an evergreen guide, spend it on depth and durability."),
    ],
    annotation: "New section added in the revision. Distinguishing time-sensitive announcements from evergreen content helps the team decide where to invest their optimization effort \u2014 and sets up the practical guidance that follows.",
  },
  {
    label: "Announcement Structure Introduction",
    compositeOnly: false,
    clientOriginal: [
      para("Generative AI platforms treat the layout of an announcement as a signal of what is important. It analyzes the densest, most critical areas of information and ASSUMES that information is included in the first 100-200 words. If done correctly, this includes the Headline, Subhead, Key Highlights and Lede (opening paragraph)."),
      para("Moving forward, announcements should be structured in the order below. There will, of course, be exceptions, but the structure below gives our content the best chance to be retrieved and trusted by AI."),
      bullet("**Headline** (The \u201CWhat\u201D)"),
      bullet("**Subhead** (The \u201CSo What\u201D)"),
      bullet("**Key Highlights** (The \u201CSnippet-Bait\u201D Zone)"),
      bullet("**Lede** (Opening Paragraph)"),
      bullet("**Context Graph** (Second Paragraph)"),
      bullet("**Quote**"),
      bullet("**Subsections** (The \u201CInformation Gain\u201D)"),
      bullet("**FAQ** (The \u201CAnswer Machine\u201D magnet)"),
      bullet("**Boiler plate** (Our AI \u201CID Card\u201D)"),
      bullet("**Contact Information** (The Trust Signal)"),
    ],
    idealComposite: [
      para("There is no single mandatory layout for AI systems \u2014 no platform publishes a required format for content to be eligible for citation or retrieval. That said, the structure below aligns with Google\u2019s published guidance to \u201Ccreate helpful, reliable, people-first content\u201D (Source 3) and the general principle that well-organized, clearly factual pages are easier for both humans and machines to extract information from."),
      bullet("Headline (The \u201CWhat\u201D)"),
      bullet("Subhead (The \u201CSo What\u201D)"),
      bullet("Key Highlights (The \u201CSnippet-Bait\u201D Zone)"),
      bullet("Lede (Opening Paragraph)"),
      bullet("Context Paragraph (The \u201CWhy It Matters\u201D)"),
      bullet("Quote (The Authority Signal)"),
      bullet("Subsections (The \u201CInformation Gain\u201D)"),
      bullet("FAQ (The \u201CAnswer Machine\u201D)"),
      bullet("Boilerplate (Our Identity Anchor)"),
      bullet("Contact Information"),
      para("Think of this as a default, not a law. Not every page needs every element. Use the pieces that help the news travel clearly."),
    ],
    annotation: "The original presented a strong recommended section order. The revision preserves this structure, anchors it to Google\u2019s published guidance (Source 3), and positions it as a strong default rather than a strict requirement \u2014 giving the team room to adapt when the news calls for it.",
  },
  {
    label: "Headline",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("The headline is the primary anchor that tells AI how to classify and categorize your announcement. AI platforms use them to determine topical relevance, identify named entities (TVs & More), understand the action (launch, expansion, update, partnered), decide retrieval ranking, whether to cite our content and generate summaries accurately."),
      para("Generally, a good way to think about the headline is that it should answer what a user would ask AI. For example, if someone is asking AI, \u201CWhen does TVs & More\u2019s Black Friday sale start?\u201D An optimal headline would be: TVs & More launches Black Friday Sale starting November 20"),
      heading3("What to know"),
      bullet("AI platforms prefer headlines that are clean, literal and factual."),
      bullet("They struggle with figurative language and clever word play."),
      bullet("A vague or fluff headline increases the chances of being summarized inaccurately, skipped in retrieval and classified/categorized incorrectly."),
      bullet("AI platforms categorize announcements by action."),
      bullet("Verbs help AI models correctly label the content type."),
      bullet("Common high-signal verbs include: **launches, announces, expands, introduces, opens, acquires, partners with, reports.**"),
      para("It MUST communicate EXACTLY what happened to be classified correctly. The highest performing structure for a headline is:"),
      boldPara("[Company] + [Action Verb] + [What Is Being Announced] + [Key Benefit / Scope / Timing]"),
      heading3("Examples | Announcements and Press Releases"),
      bullet("*TVs & More Launches Black Friday Sale Starting November 20*"),
      bullet("*Target Expands Same-Day Delivery to 500 Additional Stores*"),
      bullet("*Nike Introduces Sustainable Running Shoe Line for 2026*"),
      bullet("*Shopify Reports Q4 2025 Revenue Growth of 18%*"),
      heading3("Examples | Blogs"),
      bullet("*How TVs & More\u2019s Same-Day Pickup Service Works*"),
      bullet("*How TVs & More Is Expanding Smart Home Installation Services Nationwide*"),
      bullet("*Why TVs & More Is Investing in AI-Powered Customer Support Tools*"),
      bullet("*What Customers Should Know About TVs & More\u2019s Holiday Price Match Guarantee*"),
      bullet("*TVs & More Curbside Pickup vs. In-Store Pickup: What\u2019s the Difference?*"),
      bullet("*My TVs & More Plus\u2122 vs. My TVs & More Total\u2122: Key Differences Explained*"),
      bullet("*A Step-by-Step Guide to Upgrading Your Laptop at TVs & More*"),
      bullet("*The Complete Guide to Shopping TVs & More\u2019s Black Friday Sale in 2025*"),
    ],
    idealComposite: [
      boldPara("Purpose: give the clearest possible summary of what happened."),
      para("Because search-augmented retrieval starts with a web search, the headline functions much the way it always has in SEO: it is a primary signal that search engines use to determine what the page is about. Google\u2019s documentation on title links (Source 5) confirms that visible titles, headings, and title elements should align and clearly describe the page content. By extension, a headline that clearly names the entity, the action, and the key detail gives the retrieval system the best chance of matching our page to a relevant user query."),
      para("This is not a new insight \u2014 good PR headlines have always been direct and factual. What has changed is the downstream consequence: a vague or clever headline is now more likely to be skipped by a system that is pattern-matching across dozens of candidate pages in milliseconds."),
      boldPara("Optimal structure: [Company] + [Action Verb] + [What Is Being Announced] + [Key Timing or Scope]"),
      boldPara("High-signal action verbs: launches, announces, expands, introduces, opens, acquires, partners with, reports"),
      boldPara("Examples \u2014 announcements and press releases:"),
      bullet("*TVs and More Launches Black Friday Sale Starting November 20*"),
      bullet("*TVs and More Expands Same-Day Delivery to 500 Additional Stores*"),
      bullet("*TVs and More Partners with Samsung to Offer Exclusive Smart Home Bundles*"),
      bullet("*TVs and More Reports Q4 2025 Revenue Growth of 12%*"),
      boldPara("Examples \u2014 blogs and evergreen content (more creative flexibility, but don\u2019t sacrifice clarity):"),
      bullet("*How TVs and More\u2019s Same-Day Pickup Service Works*"),
      bullet("*What Customers Should Know About TVs and More\u2019s Holiday Price Match Guarantee*"),
      bullet("*TVM+ vs. TVM Total\u2122: Key Differences Explained*"),
      bullet("*The Complete Guide to Shopping TVs and More\u2019s Black Friday Sale in 2025*"),
    ],
    annotation: "Both versions agree on the core formula ([Company] + [Verb] + [What] + [Timing]). The revision grounds the rationale in Google\u2019s title link documentation (Source 5) and reframes headline optimization as an extension of established SEO practice rather than a new AI-specific requirement.",
  },
  {
    label: "Subhead",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("Generative AI platforms compare the headline and subhead to confirm topic accuracy, validate if the content under it is worth reading, and create a thematic anchor to categorize the entire announcement more accurately."),
      para("It\u2019s also used to map TVs & More\u2019s relationship with other entities and build its internal Knowledge Graph. When we mention a partner like Samsung or Meta, AI updates its Knowledge Graph to link TVs & More + Meta/Samsung."),
      heading3("What to know"),
      para("The subhead should support or reinforce the headline by providing human-friendly context, such as:"),
      bullet("**Customer benefit** (member rewards, reduced pick up time)"),
      bullet("**Scope** (channel scope\u2014online, in-app, in stores)"),
      bullet("**Scale** (number of stores, % growth)"),
      bullet("**Timeframe** (early savings)"),
      bullet("**Entities** (Samsung, Meta, LG, Nintendo)"),
      boldPara("Customer outcomes are important. AI models are trained to answer why does this matter and what\u2019s the benefit."),
      boldPara("Keep it short (8-20 words). Too long = AI could confuse it for body copy. Too short = doesn\u2019t provide additional value."),
      heading3("Examples"),
      bullet("*Black Friday Sale offers early access to major tech deals online, in-app, and in stores nationwide.* (channel scope, customer benefit)"),
      bullet("*New service expands same-day delivery to 500 additional U.S. locations.* (scale)"),
      bullet("*Program helps small businesses reduce manual reporting time by 80%.* (scale and customer benefit)"),
      bullet("*New service reduces pickup times to under two hours.* (customer benefit)"),
      bullet("*Program offers members up to $25 in bonus rewards.* (customer benefit)"),
    ],
    idealComposite: [
      boldPara("Purpose: add the \u201Cso what\u201D in one short line."),
      para("The subhead provides additional context that helps both search engines and readers quickly understand the scope and significance of the announcement. It should add information not already in the headline \u2014 customer benefit, scope, scale, or timing. Keep it to 8\u201320 words."),
      para("When we mention a partner like Samsung or Meta, we create an association between TVs and More and that entity in the content that search and AI systems process. This can help our announcement surface in response to queries about the partner \u2014 though the degree to which different platforms build and maintain these entity associations varies and is not well documented."),
      boldPara("Examples:"),
      bullet("*Sale offers early access to major tech deals online, in-app, and in stores nationwide.*"),
      bullet("*New service expands same-day delivery to 500 additional U.S. locations.*"),
      bullet("*Program offers members up to $25 in bonus rewards.*"),
    ],
    annotation: "The original included useful detail about Knowledge Graph relationships and entity linking. The revision preserves the entity-linking concept but adds an honest caveat \u2014 the degree to which different platforms maintain these associations is not well documented.",
  },
  {
    label: "Key Highlights",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("Key Highlights provide the structured data\u2014in the form of bullet points\u2014that AI uses to build their answers. AI platforms often lift these bullet points directly. When written correctly, these bullets dramatically increase the odds that our content is included in answers, quote us accurately, don\u2019t misrepresent details and classify our announcement correctly."),
      heading3("What to know"),
      bullet("Structure them using \u201CLabel (Fact): Value (Benefit)\u201D structure."),
      bullet("This format is seen as highly-efficient by AI and designed to survive retrieval."),
      bullet("**Always bold the label before the colon.** It creates a visual and semantic anchor to help AI."),
      bullet("Keep bullets concise. One idea per bullet. 5-8 is the sweet spot."),
      bullet("Include dates, numbers, and scope, as appropriate."),
      bullet("Avoid hype (unbelievable deals!). No metaphor or fluff."),
      heading3("Examples"),
      bullet("**Begins November 20:** Early access to Black Friday savings"),
      bullet("**Doorbusters in top tech:** TVs, laptops, tablets and smart home devices"),
      bullet("**Top categories included:** TVs, laptops, appliances, wearables and smart home"),
      bullet("**Member rewards:** Earn up to $25 in bonus rewards through Nov. 29"),
      bullet("**Shop your way:** Online, in the app, or in stores nationwide"),
      bullet("**Flexible fulfillment:** Choose shipping, curbside pickup or in-store pickup"),
      bullet("**Shipping:** Free on all orders over $50"),
    ],
    idealComposite: [
      boldPara("Purpose: provide structured, scannable facts that are easy for both humans and machines to extract."),
      para("Bulleted key highlights sit near the top of the page and present the most important facts in a format that doesn\u2019t require reading full paragraphs. We believe this format is well-suited for AI extraction because it aligns with how passage extraction works: when a retrieval system is looking for the specific answer to \u201CWhere can I shop the TVs and More sale?\u201D a labeled, self-contained bullet is a cleaner match than a fact embedded mid-paragraph. No platform has published guidance confirming that bullet points receive preferential treatment, but the logic follows from how semantic similarity matching works."),
      para("Use the **\u201CLabel: Value\u201D** structure \u2014 bold the label before the colon, follow with specific facts, one idea per bullet. Aim for 5\u20138 bullets."),
      boldPara("Examples:"),
      bullet("**Begins November 20:** Early access to Black Friday savings"),
      bullet("**Doorbusters in top tech:** TVs, laptops, tablets, and smart home devices"),
      bullet("**Top categories included:** TVs, laptops, appliances, wearables, and smart home"),
      bullet("**Member rewards:** Earn up to $25 in bonus rewards through Nov. 29"),
      bullet("**Shop your way:** Online, in the app, or in stores nationwide"),
      bullet("**Flexible fulfillment:** Choose shipping, curbside pickup, or in-store pickup"),
      bullet("**Shipping:** Free on all orders over $50"),
    ],
    annotation: "Substantively similar \u2014 the examples are nearly identical. The revision adds honest hedging: no platform has confirmed bullet points receive preferential treatment, but the logic follows from how semantic similarity matching works. This gives the team the reasoning behind the recommendation.",
  },
  {
    label: "Lede (Opening Paragraph)",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("The lede, or opening paragraph, is the single most important section in an announcement for generative AI platforms. It provides the explicit factual signals that AI requires. If it is vague, everything included in the rest of the announcement becomes weaker."),
      heading3("What to know"),
      para("The lede needs to clearly state:"),
      bullet("**Who** (company or entity)"),
      bullet("**What** (action taken\u2014announces, launches, expands, introduces, opens, partners)"),
      bullet("**When** (date or timeframe)"),
      bullet("**Where** (geography or scope, if relevant)"),
      bullet("**Why it matters** (benefit or context)"),
      para("This does not mean it should feel robotic. It just needs clarity and to include the explicit factual signals AI is looking for."),
      boldPara("Start with the announcement or news first. Traditional storytelling sometimes opens with fluff, context or industry trends. If you do that, you force AI to work harder and risk confusing it."),
    ],
    idealComposite: [
      boldPara("Purpose: provide the core factual foundation for the entire announcement."),
      para("The lede is likely the most important paragraph for both search visibility and AI extraction. Google\u2019s guidance emphasizes placing key information prominently on the page (Source 4), and the general principle that retrieval systems match user queries against page passages means the opening paragraph carries disproportionate weight in determining what the page is \u201Cabout.\u201D"),
      para("The lede must clearly state the who (company or entity), what (action taken), when (date or timeframe), where (geography or scope, if relevant), and why it matters (benefit or context). Start with the announcement, not scene-setting."),
      para("This does not mean robotic writing. It just means leading with the news and including explicit factual signals."),
      boldPara("Example:"),
      blockquote("\u201CDALLAS (Nov. 20, 2025) \u2014 TVs and More today launched its annual Black Friday Sale, offering early access to major deals on holiday tech online, in stores, and in the TVs and More app. Beginning Nov. 20, customers can shop doorbusters across TVs, laptops, appliances, and smart home devices. TVM+ and TVM Total\u2122 members can earn up to $25 in bonus rewards through Nov. 29.\u201D"),
    ],
    annotation: "Both versions agree on the who/what/when/where/why framework. The revision grounds the lede\u2019s importance in Google\u2019s published guidance (Source 4) and adds the reassurance that this doesn\u2019t mean robotic writing \u2014 just leading with the news.",
  },
  {
    label: "Context Paragraph",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("The context graph, or second paragraph, tells AI not just what happened, but why it matters or what\u2019s the impact/problem it solves. It provides AI platforms with the logical justification it needs to rank our content as high-authority content."),
      boldPara("Explicitly state why this announcement matters. Customer impact, the problem solved, etc. The strongest way to do this is the \u201CEvidence-to-Action-to-Result\u201D chain."),
      boldPara("Include evidence or metrics when possible\u2014it matters, a lot. AI looks for hard numbers, references to trends or specific dates to verify what we\u2019re saying in the lede is important."),
    ],
    idealComposite: [
      boldPara("Purpose: explain why the announcement matters."),
      para("The second paragraph answers the most likely follow-up question: why did the company do this, and who benefits? This serves all three audiences \u2014 journalists use it for story framing, consumers use it to decide if the news is relevant to them, and AI systems that generate multi-sentence responses may draw on it to provide context alongside the core facts."),
      para("A useful framework is **Evidence \u2192 Action \u2192 Result**:"),
      bullet("*Evidence:* \u201CRecent research shows 67% of tech shoppers prefer same-day delivery when available.\u201D"),
      bullet("*Action:* \u201CTVs and More is expanding same-day delivery to 500 additional stores.\u201D"),
      bullet("*Result:* \u201CGiving customers faster access to the products they need.\u201D"),
    ],
    annotation: "The original introduced the Evidence \u2192 Action \u2192 Result framework, which is a strong concept. The revision renames \u201CContext Graph\u201D to \u201CContext Paragraph,\u201D preserves that framework, and reframes the section around all three audiences \u2014 journalists, consumers, and AI systems.",
  },
  {
    label: "Quote",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("For generative AI platforms, quotes are not just color. They treat them as authority signals, attribution anchors, high-confidence factual statements, relationship validators and extractable summary lines."),
      para("It is one of the most likely parts of the announcement to be extracted and shared verbatim by AI platforms."),
      heading3("What to know"),
      bullet("**Clear attribution.** Always include full name, title and company. Attributed quotes are weighted higher by AI than unattributed quotes."),
      bullet("**Anchor it to the core announcement\u2014repetition strengthens AI confidence.** Quotes should echo the announcement, benefit, strategy, etc. They should not introduce entirely new ideas."),
      bullet("**Keep it tight and use plain language.** 1-3 sentences or 20-60 words. One clear theme."),
      bullet("**Pair emotion with substance or a specific detail.**"),
      bullet("**Include one specific detail, verifiable entity or metric.**"),
      heading3("Five ways to increase AI quote visibility"),
      para("[Table showing: Name a specific Entity (+20%), Include a specific Metric (+25%), Add a temporal reference (+15%), Provide causal linkage (+10%), Use Semantic Tags (+10%)]"),
    ],
    idealComposite: [
      boldPara("Purpose: state the company\u2019s point of view with clear attribution."),
      para("Quotes from named executives serve a different function in an AI-mediated environment than they do in traditional media. In traditional PR, quotes add color and voice. In AI-mediated contexts, they are one of the few elements that come with built-in attribution \u2014 a named person, a title, a company \u2014 which makes them relatively easy for a system to extract and present with a source. Whether this actually increases citation probability is not something any platform has confirmed, but the logic is straightforward."),
      boldPara("What matters:"),
      bullet("**Clear attribution.** Always include full name, title, and company."),
      bullet("**Echo the core announcement.** Quotes should reinforce the headline and lede, not introduce entirely new information."),
      bullet("**Keep it tight.** 1\u20133 sentences, 20\u201360 words. Simple grammar and direct phrasing."),
      bullet("**Pair emotion with substance.** Emotion alone is generic; emotion plus a fact is distinctive."),
      bullet("**Include at least one specific detail.** A date, number, benefit, scope, entity name, or category."),
      boldPara("Examples:"),
      blockquote("\u201CBy expanding same-day pickup to 1,000 stores, we\u2019re giving customers faster access to the tech they rely on during the holiday season,\u201D said Maria Chen, CEO of TVs and More."),
      blockquote("\u201COur goal is simple: make holiday shopping faster and easier,\u201D said Maria Chen, TVs and More CEO. \u201CThis update reduces average pickup time by 40%.\u201D"),
    ],
    annotation: "The original included a detailed table of techniques for improving quote visibility. The revision replaces the table with concrete example quotes that demonstrate the same principles in action, and adds an honest caveat: whether quotes actually increase citation probability is not something any platform has confirmed.",
    annotationDetail: "The original\u2019s table of percentage boosts for different quote techniques conveyed useful principles about what makes a quote effective for AI. Because specific percentage impacts can vary widely by platform and context, the revision translates those principles into worked examples instead \u2014 showing the team exactly what a strong quote looks like in practice. The underlying advice (use specific details, attribute clearly, echo the core announcement) carries through in both versions.",
  },
  {
    label: "Subsections",
    compositeOnly: false,
    clientOriginal: [
      heading3("Role it plays"),
      para("After the quote, AI platforms expect our content to switch from narrative to information delivery, or what AI knows as structured \u201CInformation Gain.\u201D These are highly valued and become the source material for detailed AI answers. They expect them to include new, specific facts that aren\u2019t found earlier in the announcement."),
      heading3("What to know"),
      para("AI prefers predictable formatting blocks for subsection(s). Keep it consistent with this structure:"),
      bullet("**Subsection header**"),
      bullet("**Short 1-2 sentences**\u2014AI extracts only the first 1-2 sentences under a header. State the fact first."),
      bullet("**Bulleted details**\u2014one key fact per bullet."),
    ],
    idealComposite: [
      boldPara("Purpose: deliver new, specific facts that support the claims made earlier."),
      para("After the lede, context, and quote establish the narrative, subsections shift to structured information delivery. For AI systems that process content in passages, well-headed subsections offer a natural extraction boundary: the header signals what the section is about, and the content beneath it provides the answer."),
      para("A clear subsection header like \u201CTVs and More Black Friday Doorbusters\u201D also helps differentiate our content from competitors making similar announcements \u2014 in theory, this makes it easier for a system to attribute the right details to the right retailer, though the degree to which this prevents \u201Cinformation blending\u201D across sources is not well-studied."),
      boldPara("Header examples that mirror likely user queries:"),
      bullet("TVs and More Black Friday Deal Highlights"),
      bullet("How TVs and More\u2019s Same-Day Pickup Works"),
      bullet("What Membership Benefits Come with TVM Total\u2122?"),
      boldPara("Example subsection:"),
      heading4("TVs and More Black Friday Deal Highlights"),
      para("TVs and More\u2019s Black Friday Sale features doorbusters across major tech categories, with savings up to 50% on select items."),
      bullet("**TVs:** Up to 40% off Samsung, LG, and Sony 4K and OLED models"),
      bullet("**Laptops:** Save up to $300 on HP, Dell, and Apple MacBooks"),
      bullet("**Tablets:** iPad and Samsung Galaxy tablets starting at $199"),
      bullet("**Smart home:** Discounts on Ring, Nest, and Ecobee devices"),
    ],
    annotation: "Closely aligned in concept. The revision adds example headers phrased as user queries and notes an honest caveat \u2014 the degree to which clear headers prevent \u201Cinformation blending\u201D across competitor sources is not well-studied.",
  },
  {
    label: "FAQ",
    compositeOnly: false,
    clientOriginal: [
      heading3("The role it plays"),
      para("FAQ sections serve as structured summary of key questions users might ask and dramatically increase the likelihood AI cites our content. They are one of the most AI-friendly formats, are massively valuable and give us major advantage. A well-structured FAQ acts as a shortcut that allows the AI to bypass its own \u201Csummarization\u201D logic and simply quote you directly."),
      heading3("What to know"),
      bullet("FAQ sections should include 3-7 questions. Answers should be between 40-60 words."),
      bullet("AI platforms immediately look for a declarative answer within the first 20 words of the response."),
      bullet("When appropriate, start your FAQ answers with a definitive \u201CYes\u201D or \u201CNo\u201D followed by a factual statement."),
      bullet("Redundancy between the announcement and FAQ is considered \u201CReinforcement\u201D by AI, not repetition."),
      heading3("Examples"),
      ...faqPair("Q: When does the sale start?", "A: The Black Friday Sale begins Thursday, November 20, 2025."),
      ...faqPair("Q: How long does it run?", "A: The core event runs through Saturday, November 29 with some deals beginning earlier and some extending beyond Nov 29."),
      ...faqPair("Q: Where can deals be shopped?", "A: Online at TVsAndMore.com, via the TVs & More mobile app, and in-store at participating locations."),
      ...faqPair("Q: Are there special member perks?", "A: Yes \u2014 My TVs & More Plus\u2122 and My TVs & More Total\u2122 members can earn up to $25 in bonus rewards when they shop doorbusters through Nov 29."),
    ],
    idealComposite: [
      boldPara("Purpose: answer predictable follow-up questions in a format that closely mirrors how users query AI systems."),
      para("FAQ sections are well-suited for AI extraction because they are structured as question-answer pairs \u2014 and AI-assisted search is fundamentally a question-answering system. Google\u2019s FAQPage structured data documentation (Source 8) notes that FAQ rich-result eligibility is limited, so don\u2019t assume FAQ markup guarantees any particular treatment \u2014 but the on-page content format is valuable regardless."),
      para("Use 3\u20137 questions. Keep answers to 40\u201360 words. Start answers with a direct statement. This format is especially valuable for evergreen content like service explainers, membership comparisons, and policy guides."),
      boldPara("Examples:"),
      ...faqPair("Q: When does the sale start?", "A: The Black Friday Sale begins Thursday, November 20, 2025, with deals available online, in the app, and in stores nationwide."),
      ...faqPair("Q: How long does it run?", "A: The core event runs through Saturday, November 29, with some deals beginning earlier and select offers extending beyond November 29."),
      ...faqPair("Q: Where can deals be shopped?", "A: Online at TVsandMore.com, via the TVs and More mobile app, and in-store at all participating TVs and More locations."),
      ...faqPair("Q: Are there special member perks?", "A: Yes \u2014 TVM+ and TVM Total\u2122 members can earn up to $25 in bonus rewards when they shop doorbusters through Nov. 29."),
      ...faqPair("Q: What product categories are included?", "A: The sale includes TVs, laptops, tablets, appliances, wearables, smart home devices, and gaming products, with savings up to 50% on select items."),
    ],
    annotation: "Closely aligned. The revision cites Google\u2019s FAQPage documentation (Source 8), notes that FAQ markup alone doesn\u2019t guarantee rich results, and highlights that this format is especially valuable for evergreen content \u2014 giving the team a clearer picture of when to invest in FAQs.",
  },
  {
    label: "Boilerplate",
    compositeOnly: false,
    clientOriginal: [
      heading3("The role it plays"),
      para("The Boiler Plate is used as our AI identity verification. It is the primary way we tell AI exactly who we are and where we sit in the market. It is used to weight our Authoritativeness and build a permanent link between TVs & More and consumer electronics."),
      heading3("What to know"),
      para("The boiler plate should include our:"),
      bullet("Official headquarters location"),
      bullet("Industry category"),
      bullet("Stock ticker"),
      bullet("Scale and scope (number of employees, locations, annual revenue and customer base size)"),
      bullet("Key program entities (Geek Squad, TVs & More Ads, My TVs & More)"),
      bullet("Capabilities"),
      bullet("Corporate website"),
      bullet("Social handles (LinkedIn)"),
    ],
    idealComposite: [
      boldPara("Purpose: give consistent, current organizational context."),
      para("The boilerplate provides a standardized description of who we are. For AI systems processing our content, a consistent boilerplate across all our published material reinforces the association between our company name and our key attributes. It also helps disambiguate us from unrelated content that might use similar phrasing. Moving forward, consider including it in any announcement or blog where AI visibility matters."),
      boldPara("Example:"),
      blockquote("TVs and More, Inc. (NYSE: TVM) is a leading provider of technology products, services, and solutions. Headquartered in Dallas, Texas, TVs and More operates more than 1,000 stores across the United States, serving millions of customers annually. The company offers expert service through its in-store support team, personalized experiences through TVM+ and TVM Total\u2122 membership programs, and advertising solutions through TVM Ads. For more information, visit www.TVsandMore.com or follow @TVsandMore on LinkedIn."),
    ],
    annotation: "The original listed the required fields clearly as bullets. The revision softens the framing (\u201Cprovides a standardized description\u201D rather than \u201Cidentity verification\u201D) and notes that consistency across publications helps disambiguate us from unrelated content.",
  },
  {
    label: "Contact Information",
    compositeOnly: false,
    clientOriginal: [
      heading3("The role it plays"),
      para("AI platforms see contact information as a trust signal. They check for a verifiable physical address and a professional email domain. Content without clear contact information is often flagged as \u201CAI-generated fluff\u201D and down-ranked in generative search results."),
      heading3("What to know"),
      para("We should include a simple media contact under the Boiler Plate."),
    ],
    idealComposite: [
      boldPara("Purpose: provide a clear path to the next authoritative source."),
      para("Include a professional media contact under the boilerplate. Link to the related product page, category page, or newsroom hub so the next click \u2014 whether from a journalist, a consumer, or someone following a link from an AI-generated citation \u2014 lands on an authoritative destination."),
      boldPara("Example:"),
      para("**Media Contact:** TVs and More Corporate Communications | press@tvsandmore.com | (214) 555-0100"),
    ],
    annotation: "The original established the importance of contact information as a trust signal. The revision reframes this around ensuring the next click from any audience \u2014 journalists, consumers, or AI citations \u2014 lands on an authoritative destination.",
  },
  {
    label: "Technical Publishing Checklist",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("Good editorial structure cannot rescue a page that is technically hard to crawl, hard to index, or hard to excerpt. Unlike the editorial guidance above, most of these recommendations are directly grounded in published platform documentation."),
      heading4("Discovery and access"),
      bullet("Allow important pages to be crawled in robots.txt. Do not accidentally block bots at the CDN, WAF, or hosting layer. (Sources 2, 9)"),
      bullet("Use indexable HTML for the main version of the content. Avoid noindex unless the page should truly stay out of search. (Source 2)"),
      bullet("Link to the page from the newsroom hub, relevant category pages, and other durable internal paths. (Source 2)"),
      bullet("Include important URLs in XML sitemaps and keep the sitemap current. (Source 2)"),
      heading4("Canonical source management"),
      bullet("Declare a preferred canonical URL for each page. Avoid unnecessary duplicates from parameters, alternate paths, or campaign URLs."),
      bullet("If you reuse an annual event page (e.g., Black Friday), update the visible title, date, metadata, and body copy thoroughly. Do not leave stale years in the title."),
      bullet("If a PDF or DOCX version also exists, keep the HTML page as the primary public source."),
      heading4("On-page clarity and metadata"),
      bullet("Use a descriptive title element and one obvious main heading. (Source 5)"),
      bullet("Show publication and update dates clearly when they matter. (Source 4)"),
      bullet("Put dates, numbers, participating channels, and availability in text \u2014 not only in images, carousels, or downloadable files. (Source 4)"),
      bullet("Use only structured data (schema markup) that accurately represents the visible page. (Sources 6, 7)"),
      heading4("Platform-specific considerations"),
      bullet("If you want visibility in ChatGPT search, allow OAI-SearchBot in robots.txt. This is separate from GPTBot, which governs potential training use. (Source 9)"),
      bullet("Verify the site in Google Search Console. Inspect important URLs and use validation tools for structured data. (Source 4)"),
      bullet("Use nosnippet, max-snippet, or data-nosnippet deliberately for content you do or do not want excerpted in Google AI Overviews. (Source 12)"),
    ],
    annotation: "New section added in the revision. Technical publishing considerations \u2014 crawlability, canonical URLs, metadata \u2014 complement the editorial guidance in the rest of the document. Inline source citations let the team verify each recommendation against official platform documentation.",
  },
  {
    label: "Retail-Specific Considerations",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("Users often move from an announcement to a commerce question: What\u2019s included? Is it in stock? Where can I buy it? What are the member benefits? That handoff should be planned deliberately."),
      bullet("**Pair each announcement with the next authoritative destination.** A sale announcement should link to the live sale page. A product launch should link to the canonical product page. A membership change should link to the membership detail page."),
      bullet("**Keep Merchant Center and Business Profile information current** when those data sources are relevant. For Google AI search experiences, these are explicitly part of the modern ecosystem for shopping and local discovery. (Source 4)"),
      bullet("**Maintain consistency** in timing, availability, member benefits, and channel scope across newsroom copy, product pages, checkout flows, FAQs, Merchant Center data, and customer support content."),
    ],
    annotation: "New section added in the revision. Since AI users frequently follow an announcement with a purchasing question, this section helps the team plan the handoff from PR content to the commerce journey, anchored to Google\u2019s published guidance (Source 4).",
  },
  {
    label: "Pre-Publication Checklist",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("Use this as a quick reference before publishing any announcement or blog where AI visibility matters."),
      bullet("**Headline:** Does it include [Company] + [Action Verb] + [What] + [Timing or Scope]? Would it answer what a user might ask AI?"),
      bullet("**Subhead:** Does it add information not already in the headline \u2014 customer benefit, scale, scope, or timing? Is it 8\u201320 words?"),
      bullet("**Key Highlights:** Are they in \u201CLabel: Value\u201D format with bold labels? Is it 5\u20138 bullets, one idea per bullet, with specific facts?"),
      bullet("**Lede:** Does it answer who, what, when, where, and why it matters? Does it lead with the news, not scene-setting?"),
      bullet("**Context Paragraph:** Does it explain why this announcement matters? Does it include evidence or metrics? Could it answer \u201CWhy did we do this?\u201D"),
      bullet("**Quote:** Is it attributed with full name, title, and company? Does it reinforce the core announcement? Does it include at least one specific detail?"),
      bullet("**Subsections:** Do headers mirror what users might search for? Does each subsection add new facts not found earlier?"),
      bullet("**FAQ:** Are there 3\u20137 questions with 40\u201360 word answers? Do answers start with a direct statement? *(Especially important for evergreen content.)*"),
      bullet("**Boilerplate:** Is it current? Does it include headquarters, ticker, scale, key programs, website, and LinkedIn?"),
      bullet("**Contact:** Is a professional media contact listed with a corporate email domain?"),
      bullet("**Technical:** Is the page crawlable? Does it have a canonical URL? Are key facts in text (not just images)? Are dates visible? *(Especially important for time-sensitive announcements.)*"),
    ],
    annotation: "New section added in the revision. A scannable checklist the team can use before hitting publish \u2014 distilling the entire guide into quick yes/no checks, with notes on which items matter most for evergreen vs. time-sensitive content.",
  },
  {
    label: "Key Terms",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("**Large Language Model (LLM):** A neural network trained on massive amounts of text that generates responses by predicting the most likely next word, one token at a time. Examples include GPT-4, Claude, and Gemini."),
      para("**Parameters:** The billions of numerical weights inside the model that encode its learned knowledge \u2014 not as stored documents, but as patterns of association."),
      para("**Retrieval-Augmented Generation (RAG):** A system where AI searches for and retrieves external content in real time before generating an answer. This is how ChatGPT with web search, Perplexity, and Google\u2019s AI Overviews work."),
      para("**Semantic similarity:** A measure of how close two pieces of text are in meaning, not just shared keywords. This is how AI systems match a user\u2019s question to relevant passages in our content."),
      para("**Embeddings:** Numerical representations of text that capture meaning. Similar meanings produce similar numbers, which is how the system measures semantic similarity."),
      para("**Hallucination:** When a model generates something that sounds plausible but is factually incorrect. More likely when training data was vague or contradictory on a given topic."),
      para("**Training cutoff:** The date after which the model has no built-in knowledge. Content published after the cutoff can still be surfaced through search-augmented retrieval."),
      para("**Knowledge graph:** A structured representation of relationships between entities (companies, products, people, concepts). AI systems build and update these relationships based on content they process."),
    ],
    annotation: "New section added in the revision. A quick-reference glossary with expanded definitions and concrete examples, helping the team connect technical terms to the concepts they encounter in the guide.",
  },
  {
    label: "Selected Sources",
    compositeOnly: true,
    clientOriginal: null,
    idealComposite: [
      para("This guide is anchored to public documentation from the platforms that matter most. Platform behavior changes over time; treat this as a dated snapshot. Source numbers are referenced inline throughout the guide."),
      numberedItem("Google Search Central \u2014 AI features and your website"),
      numberedItem("Google Search Central \u2014 In-depth guide to how Google Search works"),
      numberedItem("Google Search Central \u2014 Creating helpful, reliable, people-first content"),
      numberedItem("Google Search Central Blog \u2014 Top ways to ensure your content performs well in Google\u2019s AI experiences"),
      numberedItem("Google Search Central \u2014 Influencing title links"),
      numberedItem("Google Search Central \u2014 Article structured data"),
      numberedItem("Google Search Central \u2014 Organization structured data"),
      numberedItem("Google Search Central \u2014 FAQPage structured data"),
      numberedItem("OpenAI Developers \u2014 Overview of OpenAI Crawlers"),
      numberedItem("OpenAI Help \u2014 ChatGPT search"),
      numberedItem("Anthropic Docs \u2014 Web search tool"),
      numberedItem("Google Search Central \u2014 Snippets and robots preview controls"),
    ],
    annotation: "New section added in the revision. A numbered source list anchors the guide to official platform documentation \u2014 and because source numbers are referenced inline throughout, the team can verify any specific claim against its original documentation.",
  },
];

// ───────────────────────────────────────────────────────
// Build the comparison table for a section
// ───────────────────────────────────────────────────────
function buildSectionContent(section, index) {
  const elements = [];

  // Section heading
  const sectionNum = index + 1;
  const label = section.compositeOnly
    ? `${sectionNum}. ${section.label}  \u2014  NEW SECTION`
    : `${sectionNum}. ${section.label}`;

  elements.push(new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 360, after: 200 },
    pageBreakBefore: index > 0,
    children: [
      new TextRun({ text: `${sectionNum}. ${section.label}`, bold: true, font: "Arial", size: 26, color: COLORS.stone800 }),
      ...(section.compositeOnly ? [new TextRun({ text: "   NEW SECTION", bold: true, font: "Arial", size: 18, color: COLORS.amber600 })] : []),
    ],
  }));

  if (section.compositeOnly) {
    // Single-column table for composite-only sections
    elements.push(new Table({
      width: { size: TABLE_WIDTH, type: WidthType.DXA },
      columnWidths: [TABLE_WIDTH],
      rows: [
        // Header
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              width: { size: TABLE_WIDTH, type: WidthType.DXA },
              shading: { fill: COLORS.amber50, type: ShadingType.CLEAR },
              margins: { top: 60, bottom: 60, left: 140, right: 140 },
              children: [new Paragraph({
                children: [new TextRun({ text: "IDEAL COMPOSITE (REVISED)", bold: true, font: "Arial", size: 16, color: COLORS.amber600 })],
              })],
            }),
          ],
        }),
        // Content
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              width: { size: TABLE_WIDTH, type: WidthType.DXA },
              margins: cellMargins,
              children: section.idealComposite,
            }),
          ],
        }),
      ],
    }));
  } else {
    // Two-column comparison table
    elements.push(new Table({
      width: { size: TABLE_WIDTH, type: WidthType.DXA },
      columnWidths: [COL_WIDTH, COL_WIDTH],
      rows: [
        // Headers
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              width: { size: COL_WIDTH, type: WidthType.DXA },
              shading: { fill: COLORS.stone100, type: ShadingType.CLEAR },
              margins: { top: 60, bottom: 60, left: 140, right: 140 },
              children: [new Paragraph({
                children: [new TextRun({ text: "CLIENT ORIGINAL", bold: true, font: "Arial", size: 16, color: COLORS.stone600 })],
              })],
            }),
            new TableCell({
              borders: cellBorders,
              width: { size: COL_WIDTH, type: WidthType.DXA },
              shading: { fill: COLORS.amber50, type: ShadingType.CLEAR },
              margins: { top: 60, bottom: 60, left: 140, right: 140 },
              children: [new Paragraph({
                children: [new TextRun({ text: "IDEAL COMPOSITE (REVISED)", bold: true, font: "Arial", size: 16, color: COLORS.amber600 })],
              })],
            }),
          ],
        }),
        // Content
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              width: { size: COL_WIDTH, type: WidthType.DXA },
              margins: cellMargins,
              children: section.clientOriginal || [para("(No corresponding section in original)")],
            }),
            new TableCell({
              borders: cellBorders,
              width: { size: COL_WIDTH, type: WidthType.DXA },
              margins: cellMargins,
              children: section.idealComposite,
            }),
          ],
        }),
      ],
    }));
  }

  // Annotation box
  elements.push(new Paragraph({
    spacing: { before: 200, after: 60 },
    children: [new TextRun({ text: "What changed:", bold: true, font: "Arial", size: 20, color: COLORS.stone800 })],
  }));
  elements.push(new Paragraph({
    spacing: { after: 120 },
    shading: { fill: COLORS.stone100, type: ShadingType.CLEAR },
    indent: { left: 200, right: 200 },
    children: [new TextRun({ text: section.annotation, font: "Arial", size: 20, color: COLORS.stone600 })],
  }));

  // Annotation detail (if present)
  if (section.annotationDetail) {
    elements.push(new Paragraph({
      spacing: { before: 80, after: 60 },
      children: [new TextRun({ text: "Editorial note:", bold: true, italics: true, font: "Arial", size: 18, color: COLORS.stone400 })],
    }));
    elements.push(new Paragraph({
      spacing: { after: 200 },
      indent: { left: 200, right: 200 },
      children: [new TextRun({ text: section.annotationDetail, italics: true, font: "Arial", size: 18, color: COLORS.stone400 })],
    }));
  }

  return elements;
}

// ───────────────────────────────────────────────────────
// Build the full document
// ───────────────────────────────────────────────────────
async function main() {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "Arial", size: 22 },
        },
      },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 36, bold: true, font: "Arial", color: COLORS.navy },
          paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 },
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: COLORS.stone800 },
          paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 1 },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [{
            level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          }],
        },
        {
          reference: "numbers",
          levels: [{
            level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          }],
        },
      ],
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ text: "AI & External Communications Guide: Section-by-Section Comparison", font: "Arial", size: 16, color: COLORS.stone400, italics: true })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "Page ", font: "Arial", size: 16, color: COLORS.stone400 }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: COLORS.stone400 }),
            ],
          })],
        }),
      },
      children: [
        // ── Title page ──
        new Paragraph({ spacing: { before: 2400 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "AI & External Communications Guide", font: "Arial", size: 48, bold: true, color: COLORS.navy })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [new TextRun({ text: "Section-by-Section Comparison", font: "Arial", size: 32, color: COLORS.stone600 })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Client Original vs. Ideal Composite", font: "Arial", size: 24, color: COLORS.stone400 })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
          children: [new TextRun({ text: "March 2026", font: "Arial", size: 22, color: COLORS.stone400 })],
        }),

        // ── How to read this document ──
        new Paragraph({ children: [new PageBreak()] }),
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "How to Read This Document", bold: true, font: "Arial", size: 32, color: COLORS.navy })],
        }),
        para("This document compares the client\u2019s original AI & External Communications Guide against a revised version (the \u201CIdeal Composite\u201D) that was produced through iterative evaluation using multiple frontier AI models, then significantly human-edited."),
        para("Each section is presented in a two-column table: the **Client Original** on the left and the **Ideal Composite** on the right. Sections marked **NEW SECTION** are additions that did not exist in the original guide."),
        para("Below each comparison table, a **\u201CWhat changed\u201D** annotation summarizes the key differences and the reasoning behind the revision."),

        new Paragraph({
          spacing: { before: 300, after: 120 },
          children: [new TextRun({ text: "Key themes across the revision:", bold: true, font: "Arial", size: 22 })],
        }),
        bullet("**Grounded in published platform documentation.** The revision cites 12 official sources inline (Google Search Central, OpenAI, Anthropic) so every recommendation can be traced to its origin."),
        bullet("**Honest about what we know and don\u2019t know.** Where guidance is a reasonable inference rather than a documented rule, the guide says so \u2014 giving the team honest guardrails about what we\u2019re estimating."),
        bullet("**Anchored to established SEO principles.** Much of what works for AI discoverability overlaps with twenty years of SEO best practice. The revision treats this as a safety net: never follow an experimental GEO recommendation that could hurt traditional search performance."),

        // ── All 20 sections ──
        ...sections.flatMap((s, i) => buildSectionContent(s, i)),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(__dirname, "..", "public", "downloads", "AI_External_Comms_Comparison.docx");
  fs.writeFileSync(outPath, buffer);
  console.log(`Generated: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

main().catch(console.error);
