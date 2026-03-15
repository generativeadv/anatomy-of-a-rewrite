import { type ReactNode } from "react";

export interface ComparisonSection {
  id: string;
  label: string;
  clientOriginal: ReactNode | null;
  idealComposite: ReactNode;
  annotation: string;
  annotationDetail?: string;
}

export const comparisonSections: ComparisonSection[] = [
  // ─────────────────────────────────────────────
  // 1. Overview
  // ─────────────────────────────────────────────
  {
    id: "overview",
    label: "Overview",
    clientOriginal: (
      <>
        <p>
          With the rise of agentic AI (ChatGPT, Gemini, Claude, etc.), external
          communications plays an outsized role in influencing what generative AI
          platforms serve up to external audiences&mdash;both through earned media
          and owned content. This plan focuses on AI and owned PR content,
          specifically related to our company announcements and blog posts. It has
          two goals:
        </p>
        <ul>
          <li>
            Provide the communications team with a foundational understanding of
            what is important to generative AI platforms in PR content and why.
          </li>
          <li>
            Provide an overview of the most effective structure and formatting for
            an announcement that serves AI, journalists and consumers
            simultaneously, including the role each section plays in deciding how
            AI reads, trusts, retrieves and, ultimately, uses our content.
          </li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          When we publish content on our corporate blog or newsroom &mdash;
          whether it&apos;s a product announcement, a seasonal campaign, or an
          evergreen explainer &mdash; we are now writing for three audiences at
          once:
        </p>
        <ul>
          <li>
            <strong>AI platforms</strong> &mdash; infrastructure that searches for,
            retrieves, and synthesizes our content into answers. These systems
            prioritize content that is clear, factual, well-structured, and easy
            to cite.
          </li>
          <li>
            <strong>Journalists</strong> &mdash; professionals who need to
            understand what we announced, decide it matters, and expect the news
            in a format they recognize.
          </li>
          <li>
            <strong>Consumers</strong> &mdash; anyone searching for information
            about TVs and More, from the products we sell to our community work to
            our membership programs.
          </li>
        </ul>
        <p>
          This guide has two goals. First, provide the communications team with a
          foundational understanding of how AI systems actually discover, process,
          and use our content. Second, establish practical best practices for
          structure and formatting that serve all three audiences &mdash; without
          requiring anyone to write like a robot.
        </p>
        <p>
          You will not optimize every element of every announcement, and that is
          fine. The goal is fluency, not perfection. Understanding{" "}
          <em>what</em> these systems need and <em>why</em> allows you to make
          informed decisions about when and how to optimize, and what you&apos;re
          giving up when you don&apos;t.
        </p>
      </>
    ),
    annotation:
      "The revision builds on the original's two goals and expands the opening to name all three audiences — AI platforms, journalists, and consumers — while setting the expectation that the goal is fluency, not perfection.",
    annotationDetail:
      "The original established clear goals for the guide. The revision leads with what the team does every day — publish content — and names the three audiences up front, giving each recommendation a concrete frame of reference. The closing line (\"The goal is fluency, not perfection\") helps set the tone for a guide the team can apply with judgment.",
  },

  // ─────────────────────────────────────────────
  // 2. How AI Works
  // ─────────────────────────────────────────────
  {
    id: "how-ai-works",
    label: "How AI Works with Our Content",
    clientOriginal: (
      <>
        <h3>AI Models: What It Means for Our PR Content</h3>
        <p>
          The traditional way of thinking about how people get information about
          TVs &amp; More and see the information we want them to&mdash;largely
          through our corporate site and earned media&mdash;is changing, quickly.
          We are no longer competing just for coverage; we are competing to be
          summarized correctly by generative AI platforms.
        </p>
        <p>
          When we publish external content on our blog, whether it&apos;s an
          announcement or evergreen content, we&apos;re now writing for three
          audiences simultaneously.
        </p>
        <ul>
          <li>
            <strong>AI platforms</strong>&mdash;an audience that prioritizes
            content that is clear, factual, easy to cite, from authoritative
            sources and, most importantly, in an AI-model friendly structure.
          </li>
          <li>
            <strong>Journalists</strong>&mdash;an audience that needs to understand
            the news, decide it&apos;s important to cover and expects that news to
            be shared or announced in a format they understand (press release,
            blogs, etc.)
          </li>
          <li>
            <strong>&ldquo;Consumers&rdquo;</strong>&mdash;any individual who is
            searching for information about TVs &amp; More, from the products we
            sell to company initiatives to our work in local communities
          </li>
        </ul>
        <p>
          There is a lot of information covered in the remaining pages. The goal
          of it is to share with you what generative AI platforms are looking for
          from our content and why. We will never optimize 100% of every part of
          an announcement. We will make tradeoffs and likely decide to optimize
          some announcements more than others. And over time, what AI models are
          looking for from our content will change and we will adapt.
        </p>
        <p>
          The important thing is to familiarize your understanding of the what and
          the why, which will allow you to better understand the tradeoffs you
          make in your external content. As external communicators, in a world
          where 65% of Google searches already end without a click to a website,
          we have a responsibility to TVs &amp; More and our own professional
          development to become knowledgeable and fluent in this area.
        </p>
        <p>
          How we structure and what we think about when writing external
          announcements and blogs must change. That does not mean writing like a
          robot with no emotion to feed the AI machine. It does mean, however,
          following a set of rules and best practices if we want AI to retrieve
          our content, provide people with accurate information and include our
          messaging.
        </p>

        <h3>Understanding How AI &ldquo;Classifies&rdquo; and &ldquo;Categorizes&rdquo; PR Content</h3>
        <p>
          Generative AI platforms don&apos;t &ldquo;understand&rdquo; the way
          humans do. Instead, they look for signals, detect patterns, prefer a
          structured layout, assign confidence scores, decide whether they can
          trust our content and, ultimately, if it matches what a person is
          asking.
        </p>
        <p>
          Two of the most important factors in determining whether our content
          shows up correctly is dependent on how AI classifies and categorizes our
          content.
        </p>
        <p>
          Before an AI platform can summarize, recommend, quote, or retrieve our
          content, it first has to understand what kind of thing it is and where it
          should put it. To do this, it classifies our content by looking for
          signals and pattern recognition across the headline, subhead, lede,
          named entities (TVs &amp; More), verbs, structure and the strategic
          placement of key terms.
        </p>
        <p>
          Think of classification as the &ldquo;tags&rdquo; it assigns to our
          content.
        </p>

        <h3>The Steps: How AI Decides to Retrieve PR Content (or Not)</h3>
        <p>
          While every generative AI platform has their own way of working, they
          generally follow the same order of steps when deciding whether to
          retrieve our content (and if what is shared is accurate).
        </p>
        <ol>
          <li><strong>Classification (tagging)</strong> &mdash; What kind of thing is this?</li>
          <li><strong>Categorization (organizing)</strong> &mdash; Where should I put this?</li>
          <li><strong>Retrieval (finding)</strong> &mdash; Is this relevant?</li>
          <li><strong>Ranking (prioritization)</strong> &mdash; How strongly does this match?</li>
          <li><strong>Citation Weighting and Confidence Scoring</strong> &mdash; How much trust should I place in this source?</li>
          <li><strong>Answer Generation</strong> &mdash; Content generated to user.</li>
        </ol>
      </>
    ),
    idealComposite: (
      <>
        <h3>How AI Systems Actually Work with Our Content</h3>
        <p>
          AI platforms like ChatGPT, Claude, Gemini, and Perplexity don&apos;t
          &ldquo;understand&rdquo; content the way a human reader does. They work
          through pattern recognition at enormous scale. Our content reaches
          people through these platforms via two distinct paths, and understanding
          the difference shapes everything else in this guide.
        </p>

        <h4>Path 1: Training Knowledge</h4>
        <p>
          Large language models are trained on massive amounts of text from across
          the internet. During training, the model reads this text and learns
          statistical patterns about language: which words tend to follow which
          other words, how concepts relate to each other, what kinds of answers
          typically follow what kinds of questions.
        </p>
        <p>
          Our public content is almost certainly part of this training data. But
          the model doesn&apos;t &ldquo;store&rdquo; our press release as a
          document it can look up later. Instead, it absorbs the patterns and
          facts from our content into its parameters &mdash; billions of numerical
          weights that collectively encode everything the model learned.
        </p>
        <p>
          We have limited direct control over this path. But the following factors
          determine how well our facts were absorbed:
        </p>
        <ul>
          <li><strong>Prevalence.</strong> Repetition across sources strengthens the signal.</li>
          <li><strong>Clarity.</strong> Simple, concrete statements get absorbed more reliably.</li>
          <li><strong>Consistency.</strong> Consistent messaging across channels reduces muddled outputs.</li>
          <li><strong>Recency.</strong> Models have a training cutoff date. Content after that date is not part of built-in knowledge.</li>
        </ul>

        <h4>Path 2: Search-Augmented Retrieval</h4>
        <p>
          Most major AI platforms now include real-time web search. When someone
          asks a question, the system often searches the web first, retrieves
          relevant pages, and then generates an answer grounded in those results.
          This is where the structure and clarity of our content has the most
          direct impact.
        </p>
        <ul>
          <li><strong>Search.</strong> The system converts the question into search queries and retrieves the top 5 to 20 pages.</li>
          <li><strong>Passage extraction.</strong> The system identifies relevant passages using semantic similarity &mdash; a meaning-based comparison, not keyword matching.</li>
          <li><strong>Answer generation.</strong> The model synthesizes information from extracted passages into a coherent answer, often with citations.</li>
        </ul>

        <h4>How the Two Paths Interact</h4>
        <p>
          In practice, these two paths are not neatly separated. The model draws
          on both sources and decides which to lean on based on cues in the
          prompt. This is why our content needs to work for both worlds &mdash;
          written clearly enough for training data absorption, and structured well
          enough to surface in real-time search results.
        </p>
      </>
    ),
    annotation:
      "This is the most significant structural revision. The original walked through how AI classifies and retrieves content in a clear six-step flow. The revision expands on this to introduce a second pathway — training knowledge — and explains how both paths interact.",
    annotationDetail:
      "The original's six-step pipeline provided a useful mental model for how AI evaluates content. The revision restructures this into two distinct pathways: training knowledge (where content becomes statistical patterns absorbed into model weights) and search-augmented retrieval (where structure and clarity determine whether pages surface in real-time results). This reframing gives the team a more complete picture of how their content reaches audiences through AI, and helps prioritize the practices that influence both paths: clarity, consistency, and structure.",
  },

  // ─────────────────────────────────────────────
  // 3. Structure Intro
  // ─────────────────────────────────────────────
  {
    id: "structure-intro",
    label: "Announcement Structure Introduction",
    clientOriginal: (
      <>
        <p>
          Generative AI platforms treat the layout of an announcement as a signal
          of what is important. It analyzes the densest, most critical areas of
          information and ASSUMES that information is included in the first
          100-200 words. If done correctly, this includes the Headline, Subhead,
          Key Highlights and Lede (opening paragraph).
        </p>
        <p>
          Moving forward, announcements should be structured in the order below.
          There will, of course, be exceptions, but the structure below gives our
          content the best chance to be retrieved and trusted by AI.
        </p>
        <ul>
          <li><strong>Headline</strong> (The &ldquo;What&rdquo;)</li>
          <li><strong>Subhead</strong> (The &ldquo;So What&rdquo;)</li>
          <li><strong>Key Highlights</strong> (The &ldquo;Snippet-Bait&rdquo; Zone)</li>
          <li><strong>Lede</strong> (Opening Paragraph)</li>
          <li><strong>Context Graph</strong> (Second Paragraph)</li>
          <li><strong>Quote</strong></li>
          <li><strong>Subsections</strong> (The &ldquo;Information Gain&rdquo;)</li>
          <li><strong>FAQ</strong> (The &ldquo;Answer Machine&rdquo; magnet)</li>
          <li><strong>Boiler plate</strong> (Our AI &ldquo;ID Card&rdquo;)</li>
          <li><strong>Contact Information</strong> (The Trust Signal)</li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          There is no single mandatory layout for AI systems. That said, the
          structure below works well across readers, journalists, search engines,
          and AI assistants because it makes the important facts easy to find
          quickly.
        </p>
        <ul>
          <li>Headline (The &ldquo;What&rdquo;)</li>
          <li>Subhead (The &ldquo;So What&rdquo;)</li>
          <li>Key Highlights (The &ldquo;Snippet-Bait&rdquo; Zone)</li>
          <li>Lede (Opening Paragraph)</li>
          <li>Context Paragraph (The &ldquo;Why It Matters&rdquo;)</li>
          <li>Quote (The Authority Signal)</li>
          <li>Subsections (The &ldquo;Information Gain&rdquo;)</li>
          <li>FAQ (The &ldquo;Answer Machine&rdquo;)</li>
          <li>Boilerplate (Our Identity Anchor)</li>
          <li>Contact Information (The Trust Signal)</li>
        </ul>
        <p>
          Think of this as a default, not a law. Not every page needs every
          element. Use the pieces that help the news travel clearly.
        </p>
      </>
    ),
    annotation:
      "The original presented a strong recommended section order. The revision preserves this structure and softens the framing to position it as a strong default rather than a strict requirement — giving the team room to adapt when the news calls for it.",
  },

  // ─────────────────────────────────────────────
  // 4. Headline
  // ─────────────────────────────────────────────
  {
    id: "headline",
    label: "Headline",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          The headline is the primary anchor that tells AI how to classify and
          categorize your announcement. AI platforms use them to determine topical
          relevance, identify named entities (TVs &amp; More), understand the
          action (launch, expansion, update, partnered), decide retrieval ranking,
          whether to cite our content and generate summaries accurately.
        </p>
        <p>
          Generally, a good way to think about the headline is that it should
          answer what a user would ask AI. For example, if someone is asking AI,
          &ldquo;When does TVs &amp; More&apos;s Black Friday sale start?&rdquo;
          An optimal headline would be: TVs &amp; More launches Black Friday Sale
          starting November 20
        </p>
        <h3>What to know</h3>
        <ul>
          <li>AI platforms prefer headlines that are clean, literal and factual.</li>
          <li>They struggle with figurative language and clever word play.</li>
          <li>A vague or fluff headline increases the chances of being summarized inaccurately, skipped in retrieval and classified/categorized incorrectly.</li>
          <li>AI platforms categorize announcements by action.</li>
          <li>Verbs help AI models correctly label the content type.</li>
          <li>Common high-signal verbs include: <strong>launches, announces, expands, introduces, opens, acquires, partners with, reports.</strong></li>
        </ul>
        <p>
          It MUST communicate EXACTLY what happened to be classified correctly.
          The highest performing structure for a headline is:
        </p>
        <p className="font-semibold">
          [Company] + [Action Verb] + [What Is Being Announced] + [Key Benefit / Scope / Timing]
        </p>
        <h3>Examples | Announcements and Formal Press Releases</h3>
        <ul className="italic">
          <li>TVs &amp; More Launches Black Friday Sale Starting November 20</li>
          <li>Target Expands Same-Day Delivery to 500 Additional Stores</li>
          <li>Nike Introduces Sustainable Running Shoe Line for 2026</li>
          <li>Shopify Reports Q4 2025 Revenue Growth of 18%</li>
        </ul>
        <h3>Examples | Blogs (feature-style or evergreen-type content)</h3>
        <ul className="italic">
          <li>How TVs &amp; More&apos;s Same-Day Pickup Service Works</li>
          <li>How TVs &amp; More Is Expanding Smart Home Installation Services Nationwide</li>
          <li>Why TVs &amp; More Is Investing in AI-Powered Customer Support Tools</li>
          <li>What Customers Should Know About TVs &amp; More&apos;s Holiday Price Match Guarantee</li>
          <li>TVs &amp; More Curbside Pickup vs. In-Store Pickup: What&apos;s the Difference?</li>
          <li>My TVs &amp; More Plus&trade; vs. My TVs &amp; More Total&trade;: Key Differences Explained</li>
          <li>A Step-by-Step Guide to Upgrading Your Laptop at TVs &amp; More</li>
          <li>The Complete Guide to Shopping TVs &amp; More&apos;s Black Friday Sale in 2025</li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: give the clearest possible summary of what happened.</strong>
        </p>
        <p>
          The headline is the primary signal AI systems use to determine topical
          relevance, identify the entity (TVs and More), understand the action,
          and decide whether to retrieve the page. Headlines should be clean,
          literal, and factual. AI systems struggle with figurative language and
          clever wordplay.
        </p>
        <p>
          <strong>Optimal structure:</strong> [Company] + [Action Verb] + [What Is Being Announced] + [Key Timing or Scope]
        </p>
        <p>
          <strong>High-signal action verbs:</strong> launches, announces, expands, introduces, opens, acquires, partners with, reports
        </p>
        <p><strong>Examples &mdash; announcements and press releases:</strong></p>
        <ul className="italic">
          <li>TVs and More Launches Black Friday Sale Starting November 20</li>
          <li>TVs and More Expands Same-Day Delivery to 500 Additional Stores</li>
          <li>TVs and More Partners with Samsung to Offer Exclusive Smart Home Bundles</li>
          <li>TVs and More Reports Q4 2025 Revenue Growth of 12%</li>
        </ul>
        <p>
          <strong>Examples &mdash; blogs and evergreen content</strong> (more creative flexibility, but don&apos;t sacrifice clarity):
        </p>
        <ul className="italic">
          <li>How TVs and More&apos;s Same-Day Pickup Service Works</li>
          <li>What Customers Should Know About TVs and More&apos;s Holiday Price Match Guarantee</li>
          <li>TVM+ vs. TVM Total&trade;: Key Differences Explained</li>
          <li>The Complete Guide to Shopping TVs and More&apos;s Black Friday Sale in 2025</li>
        </ul>
      </>
    ),
    annotation:
      "Both versions agree on the core formula ([Company] + [Verb] + [What] + [Timing]). The revision consolidates the subheadings into a single direct flow, trims the example list, and keeps only TVs and More examples rather than citing competitors.",
  },

  // ─────────────────────────────────────────────
  // 5. Subhead
  // ─────────────────────────────────────────────
  {
    id: "subhead",
    label: "Subhead",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          Generative AI platforms compare the headline and subhead to confirm
          topic accuracy, validate if the content under it is worth reading, and
          create a thematic anchor to categorize the entire announcement more
          accurately.
        </p>
        <p>
          It&apos;s also used to map TVs &amp; More&apos;s relationship with
          other entities and build its internal Knowledge Graph. When we mention a
          partner like Samsung or Meta, AI updates its Knowledge Graph to link TVs
          &amp; More + Meta/Samsung.
        </p>
        <h3>What to know</h3>
        <p>The subhead should support or reinforce the headline by providing human-friendly context, such as:</p>
        <ul>
          <li><strong>Customer benefit</strong> (member rewards, reduced pick up time)</li>
          <li><strong>Scope</strong> (channel scope&mdash;online, in-app, in stores)</li>
          <li><strong>Scale</strong> (number of stores, % growth)</li>
          <li><strong>Timeframe</strong> (early savings)</li>
          <li><strong>Entities</strong> (Samsung, Meta, LG, Nintendo)</li>
        </ul>
        <p><strong>Customer outcomes are important.</strong> AI models are trained to answer why does this matter and what&apos;s the benefit.</p>
        <p><strong>Keep it short (8-20 words).</strong> Too long = AI could confuse it for body copy. Too short = doesn&apos;t provide additional value.</p>
        <h3>Examples</h3>
        <ul className="italic">
          <li>Black Friday Sale offers early access to major tech deals online, in-app, and in stores nationwide. <span className="not-italic text-muted">(channel scope, customer benefit)</span></li>
          <li>New service expands same-day delivery to 500 additional U.S. locations. <span className="not-italic text-muted">(scale)</span></li>
          <li>Program helps small businesses reduce manual reporting time by 80%. <span className="not-italic text-muted">(scale and customer benefit)</span></li>
          <li>New service reduces pickup times to under two hours. <span className="not-italic text-muted">(customer benefit)</span></li>
          <li>Program offers members up to $25 in bonus rewards. <span className="not-italic text-muted">(customer benefit)</span></li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: add the &ldquo;so what&rdquo; in one short line.</strong>
        </p>
        <p>
          AI platforms compare the headline and subhead to validate topic accuracy
          and build a richer picture of the announcement. The subhead should add
          information not already in the headline &mdash; customer benefit, scope,
          scale, or timing. Keep it to 8&ndash;20 words.
        </p>
        <p><strong>Examples:</strong></p>
        <ul className="italic">
          <li>Sale offers early access to major tech deals online, in-app, and in stores nationwide.</li>
          <li>New service expands same-day delivery to 500 additional U.S. locations.</li>
          <li>Program offers members up to $25 in bonus rewards.</li>
        </ul>
      </>
    ),
    annotation:
      "The original included useful detail about Knowledge Graph relationships and entity linking. The revision streamlines this to focus on the single most actionable point: add information the headline didn't already include, in 8 to 20 words.",
  },

  // ─────────────────────────────────────────────
  // 6. Key Highlights
  // ─────────────────────────────────────────────
  {
    id: "key-highlights",
    label: "Key Highlights",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          Key Highlights provide the structured data&mdash;in the form of bullet
          points&mdash;that AI uses to build their answers. AI platforms often lift
          these bullet points directly. When written correctly, these bullets
          dramatically increase the odds that our content is included in answers,
          quote us accurately, don&apos;t misrepresent details and classify our
          announcement correctly.
        </p>
        <h3>What to know</h3>
        <ul>
          <li>Structure them using &ldquo;Label (Fact): Value (Benefit)&rdquo; structure.</li>
          <li>This format is seen as highly-efficient by AI and designed to survive retrieval.</li>
          <li><strong>Always bold the label before the colon.</strong> It creates a visual and semantic anchor to help AI.</li>
          <li>Keep bullets concise. One idea per bullet. 5-8 is the sweet spot.</li>
          <li>Include dates, numbers, and scope, as appropriate.</li>
          <li>Avoid hype (unbelievable deals!). No metaphor or fluff.</li>
        </ul>
        <h3>Examples</h3>
        <ul>
          <li><strong>Begins November 20:</strong> Early access to Black Friday savings</li>
          <li><strong>Doorbusters in top tech:</strong> TVs, laptops, tablets and smart home devices</li>
          <li><strong>Top categories included:</strong> TVs, laptops, appliances, wearables and smart home</li>
          <li><strong>Member rewards:</strong> Earn up to $25 in bonus rewards through Nov. 29</li>
          <li><strong>Shop your way:</strong> Online, in the app, or in stores nationwide</li>
          <li><strong>Flexible fulfillment:</strong> Choose shipping, curbside pickup or in-store pickup</li>
          <li><strong>Shipping:</strong> Free on all orders over $50</li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: provide pre-formatted answers that AI systems can extract with minimal processing.</strong>
        </p>
        <p>
          Key Highlights are among the most AI-friendly content formats in an
          announcement. Use the <strong>&ldquo;Label: Value&rdquo;</strong>{" "}
          structure &mdash; bold the label before the colon, follow with specific
          facts, one idea per bullet. Aim for 5&ndash;8 bullets.
        </p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li><strong>Begins November 20:</strong> Early access to Black Friday savings</li>
          <li><strong>Doorbusters in top tech:</strong> TVs, laptops, tablets, and smart home devices</li>
          <li><strong>Top categories included:</strong> TVs, laptops, appliances, wearables, and smart home</li>
          <li><strong>Member rewards:</strong> Earn up to $25 in bonus rewards through Nov. 29</li>
          <li><strong>Shop your way:</strong> Online, in the app, or in stores nationwide</li>
          <li><strong>Flexible fulfillment:</strong> Choose shipping, curbside pickup, or in-store pickup</li>
          <li><strong>Shipping:</strong> Free on all orders over $50</li>
        </ul>
      </>
    ),
    annotation:
      "Substantively similar — the examples are nearly identical. The revision streamlines the instructions into two concise sentences and consolidates the framing.",
  },

  // ─────────────────────────────────────────────
  // 7. Lede
  // ─────────────────────────────────────────────
  {
    id: "lede",
    label: "Lede (Opening Paragraph)",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          The lede, or opening paragraph, is the single most important section in
          an announcement for generative AI platforms. It provides the explicit
          factual signals that AI requires. If it is vague, everything included in
          the rest of the announcement becomes weaker.
        </p>
        <h3>What to know</h3>
        <p>The lede needs to clearly state:</p>
        <ul>
          <li><strong>Who</strong> (company or entity)</li>
          <li><strong>What</strong> (action taken&mdash;announces, launches, expands, introduces, opens, partners)</li>
          <li><strong>When</strong> (date or timeframe)</li>
          <li><strong>Where</strong> (geography or scope, if relevant)</li>
          <li><strong>Why it matters</strong> (benefit or context)</li>
        </ul>
        <p>
          This does not mean it should feel robotic. It just needs clarity and to
          include the explicit factual signals AI is looking for.
        </p>
        <p>
          <strong>Start with the announcement or news first.</strong> Traditional
          storytelling sometimes opens with fluff, context or industry trends. If
          you do that, you force AI to work harder and risk confusing it.
        </p>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: provide the core factual foundation for the entire announcement.</strong>
        </p>
        <p>
          The lede is the single most important paragraph for AI visibility. It
          must clearly state the who (company or entity), what (action taken),
          when (date or timeframe), where (geography or scope, if relevant), and
          why it matters (benefit or context). Start with the announcement, not
          scene-setting.
        </p>
        <p><strong>Example:</strong></p>
        <blockquote>
          <p>
            &ldquo;DALLAS (Nov. 20, 2025) &mdash; TVs and More today launched its
            annual Black Friday Sale, offering early access to major deals on
            holiday tech online, in stores, and in the TVs and More app. Beginning
            Nov. 20, customers can shop doorbusters across TVs, laptops,
            appliances, and smart home devices. TVM+ and TVM Total&trade; members
            can earn up to $25 in bonus rewards through Nov. 29.&rdquo;
          </p>
        </blockquote>
      </>
    ),
    annotation:
      "Both versions agree on the who/what/when/where/why framework. The revision adds a concrete example lede the team can reference as a model.",
  },

  // ─────────────────────────────────────────────
  // 8. Context
  // ─────────────────────────────────────────────
  {
    id: "context",
    label: "Context Paragraph",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          The context graph, or second paragraph, tells AI not just what happened,
          but why it matters or what&apos;s the impact/problem it solves. It
          provides AI platforms with the logical justification it needs to rank our
          content as high-authority content.
        </p>
        <p>
          <strong>Explicitly state why this announcement matters.</strong>{" "}
          Customer impact, the problem solved, etc. The strongest way to do this
          is the &ldquo;Evidence-to-Action-to-Result&rdquo; chain.
        </p>
        <p>
          <strong>Include evidence or metrics when possible&mdash;it matters, a lot.</strong>{" "}
          AI looks for hard numbers, references to trends or specific dates to
          verify what we&apos;re saying in the lede is important.
        </p>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: explain why the announcement matters.</strong>
        </p>
        <p>
          The context paragraph provides the logical justification AI needs to
          treat our content as high-value rather than &ldquo;thin.&rdquo; The
          strongest framework is{" "}
          <strong>Evidence &rarr; Action &rarr; Result</strong>:
        </p>
        <ul>
          <li><em>Evidence:</em> &ldquo;Recent research shows 67% of tech shoppers prefer same-day delivery when available.&rdquo;</li>
          <li><em>Action:</em> &ldquo;TVs and More is expanding same-day delivery to 500 additional stores.&rdquo;</li>
          <li><em>Result:</em> &ldquo;Giving customers faster access to the products they need.&rdquo;</li>
        </ul>
      </>
    ),
    annotation:
      "The original introduced the Evidence → Action → Result framework, which is a strong concept. The revision renames \"Context Graph\" to \"Context Paragraph,\" preserves that framework, and adds a concrete worked example to make it easier for the team to apply.",
  },

  // ─────────────────────────────────────────────
  // 9. Quote
  // ─────────────────────────────────────────────
  {
    id: "quote",
    label: "Quote",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          For generative AI platforms, quotes are not just color. They treat them
          as authority signals, attribution anchors, high-confidence factual
          statements, relationship validators and extractable summary lines.
        </p>
        <p>
          It is one of the most likely parts of the announcement to be extracted
          and shared verbatim by AI platforms.
        </p>
        <h3>What to know</h3>
        <ul>
          <li><strong>Clear attribution.</strong> Always include full name, title and company. Attributed quotes are weighted higher by AI than unattributed quotes.</li>
          <li><strong>Anchor it to the core announcement&mdash;repetition strengthens AI confidence.</strong> Quotes should echo the announcement, benefit, strategy, etc. They should not introduce entirely new ideas.</li>
          <li><strong>Keep it tight and use plain language.</strong> 1-3 sentences or 20-60 words. One clear theme.</li>
          <li><strong>Pair emotion with substance or a specific detail.</strong></li>
          <li><strong>Include one specific detail, verifiable entity or metric.</strong></li>
        </ul>
        <h3>Five ways to increase AI quote visibility</h3>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="min-w-full border border-stone-300 text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="px-4 py-2 text-left font-semibold border-b border-stone-300">Method</th>
                <th className="px-4 py-2 text-left font-semibold border-b border-stone-300">Boost</th>
                <th className="px-4 py-2 text-left font-semibold border-b border-stone-300">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-200">
                <td className="px-4 py-2 font-semibold">Name a specific Entity</td>
                <td className="px-4 py-2">+20%</td>
                <td className="px-4 py-2">A company, a specific product, a person or a unique program.</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="px-4 py-2 font-semibold">Include a specific Metric</td>
                <td className="px-4 py-2">+25%</td>
                <td className="px-4 py-2">Any numerical data point: percentage, dollar amount, counts or ratios.</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="px-4 py-2 font-semibold">Add a temporal reference</td>
                <td className="px-4 py-2">+15%</td>
                <td className="px-4 py-2">Calendar dates, fiscal quarters, duration/frequency, or relational time.</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="px-4 py-2 font-semibold">Provide causal linkage</td>
                <td className="px-4 py-2">+10%</td>
                <td className="px-4 py-2">If our quote explains a reason, AI views it as expert commentary.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Use Semantic Tags</td>
                <td className="px-4 py-2">+10%</td>
                <td className="px-4 py-2">Backend HTML and schema formatting from the Content team.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: state the company&apos;s point of view with clear, attributable authority.</strong>
        </p>
        <p>
          For AI systems, quotes serve as high-confidence factual statements that
          can be safely extracted and reused. A quote from a named executive acts
          as a &ldquo;guarantee&rdquo; of the facts.
        </p>
        <p><strong>What matters:</strong></p>
        <ul>
          <li><strong>Clear attribution.</strong> Always include full name, title, and company.</li>
          <li><strong>Echo the core announcement.</strong> Quotes should reinforce the headline and lede, not introduce entirely new information.</li>
          <li><strong>Keep it tight.</strong> 1&ndash;3 sentences, 20&ndash;60 words. Simple grammar and direct phrasing.</li>
          <li><strong>Pair emotion with substance.</strong> Emotion alone is weak; emotion plus a fact is strong.</li>
          <li><strong>Include at least one specific detail.</strong> A date, number, benefit, scope, entity name, or category.</li>
        </ul>
        <p><strong>Examples:</strong></p>
        <blockquote>
          <p>
            &ldquo;By expanding same-day pickup to 1,000 stores, we&apos;re
            giving customers faster access to the tech they rely on during the
            holiday season,&rdquo; said Maria Chen, CEO of TVs and More.
          </p>
        </blockquote>
        <blockquote>
          <p>
            &ldquo;Our goal is simple: make holiday shopping faster and
            easier,&rdquo; said Maria Chen, TVs and More CEO. &ldquo;This update
            reduces average pickup time by 40%.&rdquo;
          </p>
        </blockquote>
      </>
    ),
    annotation:
      "The original included a detailed table of techniques for improving quote visibility. The revision replaces the table with concrete example quotes that demonstrate the same principles in action — making it easier for the team to see what a strong quote looks like.",
    annotationDetail:
      "The original's table of percentage boosts for different quote techniques conveyed useful principles about what makes a quote effective for AI. Because specific percentage impacts can vary widely by platform and context, the revision translates those principles into worked examples instead — showing the team exactly what a strong quote looks like in practice. The underlying advice (use specific details, attribute clearly, echo the core announcement) carries through in both versions.",
  },

  // ─────────────────────────────────────────────
  // 10. Subsections
  // ─────────────────────────────────────────────
  {
    id: "subsections",
    label: "Subsections",
    clientOriginal: (
      <>
        <h3>Role it plays</h3>
        <p>
          After the quote, AI platforms expect our content to switch from narrative
          to information delivery, or what AI knows as structured &ldquo;Information
          Gain.&rdquo; These are highly valued and become the source material for
          detailed AI answers. They expect them to include new, specific facts
          that aren&apos;t found earlier in the announcement.
        </p>
        <h3>What to know</h3>
        <p>AI prefers predictable formatting blocks for subsection(s). Keep it consistent with this structure:</p>
        <ul>
          <li><strong>Subsection header</strong></li>
          <li><strong>Short 1-2 sentences</strong>&mdash;AI extracts only the first 1-2 sentences under a header. State the fact first.</li>
          <li><strong>Bulleted details</strong>&mdash;one key fact per bullet.</li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: deliver new, specific facts that support the claims made earlier.</strong>
        </p>
        <p>
          After the quote, AI systems expect content to shift from narrative to
          structured information delivery. Use predictable formatting: a
          descriptive header, 1&ndash;2 sentences stating the key fact, then
          bulleted details with one fact per bullet.
        </p>
        <p><strong>Header examples that mirror user queries:</strong></p>
        <ul>
          <li>TVs and More Black Friday Deal Highlights</li>
          <li>How TVs and More&apos;s Same-Day Pickup Works</li>
          <li>What Membership Benefits Come with TVM Total&trade;?</li>
        </ul>
        <p><strong>Example subsection:</strong></p>
        <h4>TVs and More Black Friday Deal Highlights</h4>
        <p>
          TVs and More&apos;s Black Friday Sale features doorbusters across major
          tech categories, with savings up to 50% on select items.
        </p>
        <ul>
          <li><strong>TVs:</strong> Up to 40% off Samsung, LG, and Sony 4K and OLED models</li>
          <li><strong>Laptops:</strong> Save up to $300 on HP, Dell, and Apple MacBooks</li>
          <li><strong>Tablets:</strong> iPad and Samsung Galaxy tablets starting at $199</li>
          <li><strong>Smart home:</strong> Discounts on Ring, Nest, and Ecobee devices</li>
        </ul>
      </>
    ),
    annotation:
      "Closely aligned in concept. The revision adds example headers phrased as user queries and a fully worked example subsection, making the guidance easier to apply in practice.",
  },

  // ─────────────────────────────────────────────
  // 11. FAQ
  // ─────────────────────────────────────────────
  {
    id: "faq",
    label: "FAQ",
    clientOriginal: (
      <>
        <h3>The role it plays</h3>
        <p>
          FAQ sections serve as structured summary of key questions users might
          ask and dramatically increase the likelihood AI cites our content. They
          are one of the most AI-friendly formats, are massively valuable and give
          us major advantage. A well-structured FAQ acts as a shortcut that allows
          the AI to bypass its own &ldquo;summarization&rdquo; logic and simply
          quote you directly.
        </p>
        <h3>What to know</h3>
        <ul>
          <li>FAQ sections should include 3-7 questions. Answers should be between 40-60 words.</li>
          <li>AI platforms immediately look for a declarative answer within the first 20 words of the response.</li>
          <li>When appropriate, start your FAQ answers with a definitive &ldquo;Yes&rdquo; or &ldquo;No&rdquo; followed by a factual statement.</li>
          <li>Redundancy between the announcement and FAQ is considered &ldquo;Reinforcement&rdquo; by AI, not repetition.</li>
        </ul>
        <h3>Examples</h3>
        <p><strong>Q: When does the sale start?</strong><br />A: The Black Friday Sale begins Thursday, November 20, 2025.</p>
        <p><strong>Q: How long does it run?</strong><br />A: The core event runs through Saturday, November 29 with some deals beginning earlier and some extending beyond Nov 29.</p>
        <p><strong>Q: Where can deals be shopped?</strong><br />A: Online at TVsAndMore.com, via the TVs &amp; More mobile app, and in-store at participating locations.</p>
        <p><strong>Q: Are there special member perks?</strong><br />A: Yes &mdash; My TVs &amp; More Plus&trade; and My TVs &amp; More Total&trade; members can earn up to $25 in bonus rewards when they shop doorbusters through Nov 29.</p>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: answer predictable follow-up questions in a format AI can use directly.</strong>
        </p>
        <p>
          FAQ sections are among the highest-leverage elements we can include. Use
          3&ndash;7 questions. Keep answers to 40&ndash;60 words. Start answers
          with a direct statement.
        </p>
        <p><strong>Examples:</strong></p>
        <p><strong>Q: When does the sale start?</strong><br />A: The Black Friday Sale begins Thursday, November 20, 2025, with deals available online, in the app, and in stores nationwide.</p>
        <p><strong>Q: How long does it run?</strong><br />A: The core event runs through Saturday, November 29, with some deals beginning earlier and select offers extending beyond November 29.</p>
        <p><strong>Q: Where can deals be shopped?</strong><br />A: Online at TVsandMore.com, via the TVs and More mobile app, and in-store at all participating TVs and More locations.</p>
        <p><strong>Q: Are there special member perks?</strong><br />A: Yes &mdash; TVM+ and TVM Total&trade; members can earn up to $25 in bonus rewards when they shop doorbusters through Nov. 29.</p>
        <p><strong>Q: What product categories are included?</strong><br />A: The sale includes TVs, laptops, tablets, appliances, wearables, smart home devices, and gaming products, with savings up to 50% on select items.</p>
      </>
    ),
    annotation:
      "Closely aligned. The revision adds a fifth example question and tightens the guidance, while preserving the original's emphasis on direct, declarative answers.",
  },

  // ─────────────────────────────────────────────
  // 12. Boilerplate
  // ─────────────────────────────────────────────
  {
    id: "boilerplate",
    label: "Boilerplate",
    clientOriginal: (
      <>
        <h3>The role it plays</h3>
        <p>
          The Boiler Plate is used as our AI identity verification. It is the
          primary way we tell AI exactly who we are and where we sit in the
          market. It is used to weight our Authoritativeness and build a permanent
          link between TVs &amp; More and consumer electronics.
        </p>
        <h3>What to know</h3>
        <p>The boiler plate should include our:</p>
        <ul>
          <li>Official headquarters location</li>
          <li>Industry category</li>
          <li>Stock ticker</li>
          <li>Scale and scope (number of employees, locations, annual revenue and customer base size)</li>
          <li>Key program entities (Geek Squad, TVs &amp; More Ads, My TVs &amp; More)</li>
          <li>Capabilities</li>
          <li>Corporate website</li>
          <li>Social handles (LinkedIn)</li>
        </ul>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: give consistent, current organizational context that anchors our identity.</strong>
        </p>
        <p>
          The boilerplate tells AI exactly who we are and where we sit in the
          market. Moving forward, include it in any announcement or blog where AI
          visibility matters.
        </p>
        <p><strong>Example:</strong></p>
        <blockquote>
          <p>
            TVs and More, Inc. (NYSE: TVM) is a leading provider of technology
            products, services, and solutions. Headquartered in Dallas, Texas, TVs
            and More operates more than 1,000 stores across the United States,
            serving millions of customers annually. The company offers expert
            service through its in-store support team, personalized experiences
            through TVM+ and TVM Total&trade; membership programs, and advertising
            solutions through TVM Ads. For more information, visit
            www.TVsandMore.com or follow @TVsandMore on LinkedIn.
          </p>
        </blockquote>
      </>
    ),
    annotation:
      "The original listed the required fields clearly as bullets. The revision builds on this by adding a complete example boilerplate paragraph the team can adapt directly.",
  },

  // ─────────────────────────────────────────────
  // 13. Contact Information
  // ─────────────────────────────────────────────
  {
    id: "contact",
    label: "Contact Information",
    clientOriginal: (
      <>
        <h3>The role it plays</h3>
        <p>
          AI platforms see contact information as a trust signal. They check for a
          verifiable physical address and a professional email domain. Content
          without clear contact information is often flagged as
          &ldquo;AI-generated fluff&rdquo; and down-ranked in generative search
          results.
        </p>
        <h3>What to know</h3>
        <p>We should include a simple media contact under the Boiler Plate.</p>
      </>
    ),
    idealComposite: (
      <>
        <p>
          <strong>Purpose: provide a verifiable trust signal and a path to the next authoritative source.</strong>
        </p>
        <p>
          Include a professional media contact under the boilerplate. Link to the
          related product page, category page, or newsroom hub so the next click
          lands on an authoritative destination.
        </p>
        <p><strong>Example:</strong></p>
        <p>
          <strong>Media Contact:</strong> TVs and More Corporate Communications |
          press@tvsandmore.com | (214) 555-0100
        </p>
      </>
    ),
    annotation:
      "The original established the importance of contact information as a trust signal. The revision adds a concrete contact line example and the recommendation to link to an authoritative destination — making the guidance immediately actionable.",
  },

  // ─────────────────────────────────────────────
  // 14–18. Composite-Only Sections
  // ─────────────────────────────────────────────
  {
    id: "technical-publishing-checklist",
    label: "Technical Publishing Checklist",
    clientOriginal: null,
    idealComposite: (
      <>
        <p>
          Good editorial structure cannot rescue a page that is technically hard
          to crawl, hard to index, or hard to excerpt.
        </p>
        <h4>Discovery and access</h4>
        <ul>
          <li>Allow important pages to be crawled in robots.txt. Do not accidentally block bots at the CDN, WAF, or hosting layer.</li>
          <li>Use indexable HTML for the main version of the content. Avoid noindex unless the page should truly stay out of search.</li>
          <li>Link to the page from the newsroom hub, relevant category pages, and other durable internal paths.</li>
          <li>Include important URLs in XML sitemaps and keep the sitemap current.</li>
        </ul>
        <h4>Canonical source management</h4>
        <ul>
          <li>Declare a preferred canonical URL for each page. Avoid unnecessary duplicates.</li>
          <li>If you reuse an annual event page, update the visible title, date, metadata, and body copy thoroughly.</li>
          <li>If a PDF or DOCX version also exists, keep the HTML page as the primary public source.</li>
        </ul>
        <h4>On-page clarity and metadata</h4>
        <ul>
          <li>Use a descriptive title element and one obvious main heading.</li>
          <li>Show publication and update dates clearly when they matter.</li>
          <li>Put dates, numbers, participating channels, and availability in text &mdash; not only in images, carousels, or downloadable files.</li>
          <li>Use only structured data (schema markup) that accurately represents the visible page.</li>
        </ul>
        <h4>Platform-specific considerations</h4>
        <ul>
          <li>If you want visibility in ChatGPT search, allow OAI-SearchBot in robots.txt. This is separate from GPTBot.</li>
          <li>Verify the site in Google Search Console. Inspect important URLs and use validation tools for structured data.</li>
          <li>Use nosnippet, max-snippet, or data-nosnippet deliberately for content you do or do not want excerpted in Google AI Overviews.</li>
        </ul>
      </>
    ),
    annotation:
      "New section added in the revision. Technical publishing considerations — crawlability, canonical URLs, metadata — complement the editorial guidance in the rest of the document, helping ensure well-crafted content is actually discoverable by AI systems.",
  },

  {
    id: "retail-specific",
    label: "Retail-Specific Considerations",
    clientOriginal: null,
    idealComposite: (
      <>
        <p>
          Users often move from an announcement to a commerce question: What&apos;s
          included? Is it in stock? Where can I buy it? That handoff should be
          planned deliberately.
        </p>
        <ul>
          <li>
            <strong>Pair each announcement with the next authoritative destination.</strong>{" "}
            A sale announcement should link to the live sale page. A product
            launch should link to the canonical product page.
          </li>
          <li>
            <strong>Keep Merchant Center and Business Profile information current</strong>{" "}
            when those data sources are relevant.
          </li>
          <li>
            <strong>Maintain consistency</strong> in timing, availability, member
            benefits, and channel scope across newsroom copy, product pages,
            checkout flows, FAQs, Merchant Center data, and customer support
            content.
          </li>
        </ul>
      </>
    ),
    annotation:
      "New section added in the revision. Since AI users frequently follow an announcement with a purchasing question, this section helps the team plan the handoff from PR content to the commerce journey.",
  },

  {
    id: "pre-publication-checklist",
    label: "Pre-Publication Checklist",
    clientOriginal: null,
    idealComposite: (
      <>
        <p>
          Use this as a quick reference before publishing any announcement or blog
          where AI visibility matters.
        </p>
        <ul>
          <li><strong>Headline:</strong> Does it include [Company] + [Action Verb] + [What] + [Timing or Scope]? Would it answer what a user might ask AI?</li>
          <li><strong>Subhead:</strong> Does it add information not already in the headline? Is it 8&ndash;20 words?</li>
          <li><strong>Key Highlights:</strong> Are they in &ldquo;Label: Value&rdquo; format with bold labels? 5&ndash;8 bullets, one idea per bullet?</li>
          <li><strong>Lede:</strong> Does it answer who, what, when, where, and why it matters? Does it lead with the news?</li>
          <li><strong>Context Paragraph:</strong> Does it explain why this announcement matters? Does it include evidence or metrics?</li>
          <li><strong>Quote:</strong> Is it attributed with full name, title, and company? Does it reinforce the core announcement?</li>
          <li><strong>Subsections:</strong> Do headers mirror what users might search for? Does each subsection add new facts?</li>
          <li><strong>FAQ:</strong> Are there 3&ndash;7 questions with 40&ndash;60 word answers? Do answers start with a direct statement?</li>
          <li><strong>Boilerplate:</strong> Is it current? Does it include headquarters, ticker, scale, key programs, website, and LinkedIn?</li>
          <li><strong>Contact:</strong> Is a professional media contact listed with a corporate email domain?</li>
          <li><strong>Technical:</strong> Is the page crawlable? Does it have a canonical URL? Are key facts in text (not just images)? Are dates visible?</li>
        </ul>
      </>
    ),
    annotation:
      "New section added in the revision. A scannable checklist the team can use before hitting publish — distilling the entire guide into quick yes/no checks.",
  },

  {
    id: "key-terms",
    label: "Key Terms",
    clientOriginal: null,
    idealComposite: (
      <>
        <p>
          <strong>Large Language Model (LLM):</strong> A neural network trained on
          massive amounts of text that generates responses by predicting the most
          likely next word, one token at a time.
        </p>
        <p>
          <strong>Parameters:</strong> The billions of numerical weights inside
          the model that encode its learned knowledge &mdash; not as stored
          documents, but as patterns of association.
        </p>
        <p>
          <strong>Retrieval-Augmented Generation (RAG):</strong> A system where AI
          searches for and retrieves external content in real time before
          generating an answer.
        </p>
        <p>
          <strong>Semantic similarity:</strong> A measure of how close two pieces
          of text are in meaning, not just shared keywords.
        </p>
        <p>
          <strong>Embeddings:</strong> Numerical representations of text that
          capture meaning. Similar meanings produce similar numbers.
        </p>
        <p>
          <strong>Hallucination:</strong> When a model generates something that
          sounds plausible but is factually incorrect.
        </p>
        <p>
          <strong>Training cutoff:</strong> The date after which the model has no
          built-in knowledge.
        </p>
        <p>
          <strong>Knowledge graph:</strong> A structured representation of
          relationships between entities.
        </p>
      </>
    ),
    annotation:
      "New section added in the revision. A quick-reference glossary for the technical terms the team will encounter when working with AI optimization.",
  },

  {
    id: "selected-sources",
    label: "Selected Sources",
    clientOriginal: null,
    idealComposite: (
      <>
        <p>
          This guide is anchored to public documentation from the platforms that
          matter most. Platform behavior changes over time; treat this as a dated
          snapshot.
        </p>
        <ul>
          <li>Google Search Central &mdash; AI features and your website</li>
          <li>Google Search Central &mdash; In-depth guide to how Google Search works</li>
          <li>Google Search Central &mdash; Creating helpful, reliable, people-first content</li>
          <li>Google Search Central Blog &mdash; Top ways to ensure your content performs well in AI experiences</li>
          <li>Google Search Central &mdash; FAQPage structured data</li>
          <li>Google Search Central &mdash; Article structured data</li>
          <li>Google Search Central &mdash; Organization structured data</li>
          <li>OpenAI Help &mdash; ChatGPT search</li>
          <li>OpenAI Developers &mdash; Overview of OpenAI Crawlers</li>
          <li>OpenAI Developers &mdash; Web search guide</li>
          <li>Anthropic Docs &mdash; Web search tool</li>
          <li>Google Search Central &mdash; Snippets and robots preview controls</li>
        </ul>
      </>
    ),
    annotation:
      "New section added in the revision. Anchoring the guide to official platform documentation from Google, OpenAI, Anthropic, and others gives the team a verifiable foundation they can reference as AI platform behavior evolves.",
  },
];
