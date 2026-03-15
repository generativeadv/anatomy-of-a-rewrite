export default function FergusV2Content() {
  return (
    <div className="prose prose-stone max-w-none">
      <h1>
        AI &amp; External Communications: Optimizing Owned PR Content for
        Discovery and Accuracy
      </h1>

      <h2>Overview</h2>
      <p>
        With the rise of AI-powered search and answer engines (ChatGPT,
        Perplexity, Google AI Overviews, Claude, Gemini), external
        communications plays a critical role in how TVs and More information
        reaches audiences&mdash;through both earned media and owned content.
      </p>
      <p>
        This guide focuses on <strong>owned PR content</strong> (announcements
        and blog posts) and has two goals:
      </p>
      <ol>
        <li>
          <strong>Provide foundational understanding</strong> of how AI systems
          discover, process, and use PR content
        </li>
        <li>
          <strong>Establish best practices</strong> for content structure and
          formatting that serves AI systems, journalists, and consumers
          simultaneously
        </li>
      </ol>

      <h2>AI Models: What It Means for Our PR Content</h2>
      <p>The information landscape has fundamentally shifted:</p>
      <ul>
        <li>
          <strong>65% of Google searches</strong> now end without a click to a
          website
        </li>
        <li>
          <strong>44% of users</strong> rely on AI-generated summaries as their
          primary information source rather than visiting brand sites
        </li>
        <li>
          <strong>Billions of prompts</strong> are processed daily across
          ChatGPT, Perplexity, Claude, and other AI platforms
        </li>
      </ul>

      <h3>The New Reality: Three Audiences, One Document</h3>
      <p>When we publish external content, we&apos;re now writing for:</p>
      <ol>
        <li>
          <strong>AI retrieval systems</strong> &mdash; Infrastructure that
          prioritizes clear, factual, well-structured content from authoritative
          sources
        </li>
        <li>
          <strong>Journalists</strong> &mdash; Professionals who need newsworthy
          information in familiar formats
        </li>
        <li>
          <strong>Direct consumers</strong> &mdash; Individuals searching for
          information about TVs and More
        </li>
      </ol>

      <h3>What This Means for Our Work</h3>
      <p>
        This guide contains detailed information about AI optimization.{" "}
        <strong>
          You won&apos;t optimize every element of every announcement
        </strong>
        &mdash;and that&apos;s fine. You&apos;ll make strategic tradeoffs based
        on announcement importance, available time, and communication goals.
      </p>
      <p>
        <strong>The goal is fluency</strong>, not perfection. Understanding{" "}
        <em>what</em> AI systems need and <em>why</em> allows you to make
        informed decisions about when and how to optimize.
      </p>

      <h2>
        Understanding How AI Systems Actually Work with Your Content
      </h2>
      <p>
        <strong>Note</strong>: This section provides foundational understanding
        of how AI platforms digest and use our work. You don&apos;t need to
        remember every detail, but understanding the &ldquo;why&rdquo; behind
        our practices is essential.
      </p>

      <h3>What AI Systems Are (and Aren&apos;t)</h3>
      <p>Modern AI systems combine two distinct technologies:</p>

      <h4>1. Large Language Models (LLMs)</h4>
      <ul>
        <li>Neural networks trained on massive text datasets</li>
        <li>Learn statistical patterns and relationships during training</li>
        <li>
          <strong>Critical limitation</strong>: Training data has cutoff dates
          (typically 6-18 months before deployment)
        </li>
        <li>
          Don&apos;t automatically &ldquo;know&rdquo; recent announcements
          unless they&apos;re in the training set
        </li>
      </ul>

      <h4>2. Retrieval-Augmented Generation (RAG)</h4>
      <ul>
        <li>
          Real-time systems that search for and retrieve current information
        </li>
        <li>This is where your optimization efforts matter most</li>
        <li>
          How it works:
          <ol>
            <li>User asks a question</li>
            <li>
              System converts query into mathematical representation (embedding)
            </li>
            <li>Searches external sources for semantically similar content</li>
            <li>Retrieves relevant content chunks</li>
            <li>Feeds chunks to LLM as context</li>
            <li>LLM generates response based on retrieved information</li>
          </ol>
        </li>
      </ul>

      <h3>Common Misconceptions (Corrected for March 2026)</h3>
      <p>
        <strong>MYTH</strong>: AI assigns discrete &ldquo;tags&rdquo; like{" "}
        <em>Document type: Press release</em> or{" "}
        <em>Topic: Black Friday</em>
        <br />
        <strong>REALITY</strong>: Systems use continuous mathematical
        representations (embeddings) that capture semantic meaning. There are no
        explicit &ldquo;tags&rdquo; or &ldquo;topic buckets.&rdquo;
      </p>
      <p>
        <strong>MYTH</strong>: AI follows discrete steps like Classification
        &rarr; Categorization &rarr; Retrieval
        <br />
        <strong>REALITY</strong>: Retrieval happens through vector similarity
        matching. The system finds content with embeddings similar to the
        user&apos;s query.
      </p>
      <p>
        <strong>MYTH</strong>: AI assigns &ldquo;confidence scores&rdquo; to
        individual sources during generation
        <br />
        <strong>REALITY</strong>: Retrieval systems rank by relevance; citation
        behavior depends on system design and training, not explicit confidence
        scoring.
      </p>
      <p>
        <strong>MYTH</strong>: AI verifies facts against multiple sources before
        citing you
        <br />
        <strong>REALITY</strong>: RAG systems retrieve based on semantic
        relevance. Fact-checking depends on system architecture, not inherent LLM
        judgment.
      </p>

      <h3>What AI Systems Actually Do</h3>

      <h4>Semantic Understanding Through Embeddings</h4>
      <ul>
        <li>
          Content is converted into high-dimensional vectors representing
          meaning
        </li>
        <li>Similar concepts cluster together in mathematical space</li>
        <li>
          Retrieval happens by finding content with embeddings similar to the
          query
        </li>
        <li>
          <strong>Example</strong>: &ldquo;revenue growth&rdquo; and
          &ldquo;sales increase&rdquo; are semantically similar even with
          different words
        </li>
      </ul>

      <h4>Pattern-Based Generation</h4>
      <ul>
        <li>
          LLMs generate text by predicting likely next words based on training
        </li>
        <li>They synthesize information from retrieved context</li>
        <li>
          They don&apos;t &ldquo;understand&rdquo; in human terms&mdash;they
          recognize and reproduce patterns
        </li>
      </ul>

      <h4>Authority Signals (Indirect)</h4>
      <ul>
        <li>
          While models don&apos;t explicitly score &ldquo;trust,&rdquo;
          retrieval systems often prioritize:
          <ul>
            <li>Official corporate domains</li>
            <li>Consistent entity references</li>
            <li>Structured, factual content</li>
            <li>Recent publication dates</li>
            <li>Clean HTML and accessibility</li>
          </ul>
        </li>
      </ul>

      <h2>The Content Journey: From Publication to AI Answer</h2>
      <p>
        Here&apos;s what actually happens when your content enters the AI
        ecosystem:
      </p>

      <h3>Step 1: Indexing and Embedding</h3>
      <ul>
        <li>
          Your published content is crawled by search engines and AI platforms
        </li>
        <li>
          Text is processed and converted into embeddings (mathematical
          representations)
        </li>
        <li>These embeddings are stored in vector databases</li>
      </ul>

      <h3>Step 2: Query Processing</h3>
      <ul>
        <li>
          User asks: &ldquo;When does TVs and More&apos;s Black Friday sale
          start?&rdquo;
        </li>
        <li>The query is converted into an embedding</li>
        <li>The system searches for content with similar embeddings</li>
      </ul>

      <h3>Step 3: Retrieval and Ranking</h3>
      <p>
        Semantically relevant content is retrieved and ranked based on:
      </p>
      <ul>
        <li>
          <strong>Semantic similarity</strong> to the query (primary factor)
        </li>
        <li>
          <strong>Recency</strong> (publication date)
        </li>
        <li>
          <strong>Domain authority</strong> (official corporate sites rank
          higher)
        </li>
        <li>
          <strong>Content structure</strong> (clear, factual content is easier to
          extract)
        </li>
        <li>
          <strong>Specificity</strong> (precise answers to common questions)
        </li>
      </ul>

      <h3>Step 4: Chunking and Context Selection</h3>
      <ul>
        <li>
          Retrieved documents are broken into chunks (typically 500-2000 tokens)
        </li>
        <li>The most relevant chunks are selected for the LLM&apos;s context window</li>
        <li>
          <strong>Why structure matters</strong>: Clear organization helps ensure
          the right information gets selected
        </li>
      </ul>

      <h3>Step 5: Answer Generation</h3>
      <ul>
        <li>
          The LLM generates a response using retrieved chunks as source material
        </li>
        <li>
          It synthesizes information, extracts facts, and produces natural
          language
        </li>
        <li>
          <strong>Why clarity matters</strong>: Explicit, factual statements are
          easier to extract and paraphrase accurately
        </li>
      </ul>

      <h3>Step 6: Citation (System-Dependent)</h3>
      <ul>
        <li>Some systems cite sources; others don&apos;t</li>
        <li>
          Citation behavior depends on system design, not inherent LLM judgment
        </li>
        <li>
          Being cited depends on retrieval ranking and system architecture
        </li>
      </ul>

      <h2>What Actually Improves AI Visibility and Accuracy</h2>
      <p>
        Based on current understanding of how these systems work (March 2026):
      </p>

      <h3>1. Semantic Clarity Over Keyword Stuffing</h3>
      <ul>
        <li>
          Write in natural language that directly answers common questions
        </li>
        <li>
          Use clear, specific language rather than marketing jargon
        </li>
        <li>
          <strong>Example</strong>: &ldquo;TVs and More&apos;s Black Friday sale
          starts November 20&rdquo; beats &ldquo;TVs and More unveils an
          unprecedented seasonal value event&rdquo;
        </li>
      </ul>

      <h3>2. Front-Load Critical Information</h3>
      <ul>
        <li>Place key facts in the first 100-200 words</li>
        <li>
          <strong>Why</strong>: Chunking algorithms often prioritize early
          content; users scanning AI summaries see opening content first
        </li>
      </ul>

      <h3>3. Structured Information Architecture</h3>
      <ul>
        <li>
          Use clear headings, bullet points, and logical hierarchy
        </li>
        <li>
          <strong>Why</strong>: Helps retrieval systems identify and extract
          relevant sections
        </li>
      </ul>

      <h3>4. Factual Precision and Specificity</h3>
      <ul>
        <li>
          Include specific dates, numbers, and concrete details
        </li>
        <li>
          Avoid vague language (&ldquo;soon,&rdquo; &ldquo;significant,&rdquo;
          &ldquo;leading&rdquo;)
        </li>
      </ul>

      <h3>5. Answer Common Questions Explicitly</h3>
      <ul>
        <li>
          Include FAQ sections that mirror how people actually ask questions
        </li>
      </ul>

      <h3>6. Consistent Entity References</h3>
      <ul>
        <li>
          Use consistent names for companies, products, and people
        </li>
      </ul>

      <h3>7. Authoritative Signals</h3>
      <ul>
        <li>Publish on official corporate domains</li>
        <li>Include clear attribution and contact information</li>
      </ul>

      <h3>8. Accessibility and Technical Hygiene</h3>
      <ul>
        <li>
          Ensure content is publicly accessible (not behind paywalls)
        </li>
        <li>Use clean HTML structure and semantic markup</li>
        <li>Maintain stable URLs</li>
      </ul>

      <h2>PR Announcements: What&apos;s Important?</h2>
      <p>
        AI systems analyze content structure as a signal of what&apos;s
        important. They prioritize the densest, most critical information, which
        should appear in the first 100-200 words.
      </p>

      <h3>Recommended Structure</h3>
      <ol>
        <li>
          <strong>Headline</strong> (The &ldquo;What&rdquo;)
        </li>
        <li>
          <strong>Subhead</strong> (The &ldquo;So What&rdquo;)
        </li>
        <li>
          <strong>Key Highlights</strong> (The Snippet-Bait Zone)
        </li>
        <li>
          <strong>Lede</strong> (Opening Paragraph)
        </li>
        <li>
          <strong>Context Paragraph</strong> (The &ldquo;Why It Matters&rdquo;)
        </li>
        <li>
          <strong>Executive Quote</strong> (The Authority Signal)
        </li>
        <li>
          <strong>Subsection(s)</strong> (The &ldquo;Information Gain&rdquo;)
        </li>
        <li>
          <strong>FAQ</strong> (The &ldquo;Answer Machine&rdquo; Magnet)
        </li>
        <li>
          <strong>Boilerplate</strong> (Our AI &ldquo;ID Card&rdquo;)
        </li>
        <li>
          <strong>Contact Information</strong> (The Trust Signal)
        </li>
      </ol>

      <h2>Headline (The &ldquo;What&rdquo;)</h2>
      <h3>Role It Plays</h3>
      <p>The headline is the primary signal for:</p>
      <ul>
        <li>
          <strong>Semantic relevance</strong> in retrieval systems
        </li>
        <li>
          <strong>Entity recognition</strong> (identifying TVs and More as the
          subject)
        </li>
        <li>
          <strong>Topic understanding</strong> (what the announcement is about)
        </li>
        <li>
          <strong>User decision-making</strong> (whether to click or read
          further)
        </li>
      </ul>

      <h3>What to Know</h3>
      <p>
        <strong>Prioritize clarity and directness.</strong> State exactly what
        happened. Use active voice and strong verbs. Avoid clever wordplay,
        puns, or figurative language.
      </p>
      <p>
        <strong>Optimal structure for announcements:</strong>
      </p>
      <p className="font-semibold">
        [Company] + [Action Verb] + [What] + [Key Detail]
      </p>
      <p>
        <strong>High-signal action verbs:</strong> Launches, announces, expands,
        introduces, opens, acquires, partners with, reports, unveils, adds,
        extends, updates, releases
      </p>

      <h3>Examples</h3>
      <p>
        <strong>Announcements and Formal Press Releases:</strong>
      </p>
      <ul className="italic">
        <li>
          TVs and More Launches Black Friday Sale Starting November 20
        </li>
        <li>
          TVs and More Expands Same-Day Delivery to 500 Additional Stores
        </li>
        <li>
          TVs and More Partners with Samsung to Offer Exclusive Smart Home
          Bundles
        </li>
        <li>
          TVs and More Reports Q4 2025 Revenue Growth of 12%
        </li>
      </ul>
      <p>
        <strong>Blogs (Feature-Style or Evergreen Content):</strong>
      </p>
      <ul className="italic">
        <li>How TVs and More&apos;s Same-Day Pickup Service Works</li>
        <li>
          What Customers Should Know About TVs and More&apos;s Holiday Price
          Match Guarantee
        </li>
        <li>TVM+ vs. TVM Total: Key Differences Explained</li>
        <li>
          The Complete Guide to Shopping TVs and More&apos;s Black Friday Sale
          in 2025
        </li>
      </ul>

      <h2>Subhead (The &ldquo;So What&rdquo;)</h2>
      <h3>Role It Plays</h3>
      <p>
        The subhead provides additional context that reinforces the headline,
        validates topic accuracy, provides additional semantic signals, and
        helps build entity relationship maps (knowledge graphs).
      </p>
      <h3>What to Know</h3>
      <p>
        Reinforce and expand the headline. Add information not in the headline.
        Focus on customer benefit, scope, scale, or timing. Keep it concise
        (8-20 words). One complete sentence or one strong fragment both work.
      </p>
      <h3>Examples</h3>
      <ul className="italic">
        <li>
          Sale offers early access to major tech deals online, in-app, and in
          stores nationwide.
        </li>
        <li>
          New service expands same-day delivery to 500 additional U.S.
          locations.
        </li>
        <li>
          Program offers members up to $25 in bonus rewards.
        </li>
      </ul>

      <h2>Key Highlights (The Snippet-Bait Zone)</h2>
      <h3>Role It Plays</h3>
      <p>
        Key Highlights are <strong>the most AI-friendly content format</strong>{" "}
        in your announcement. They provide structured, extractable facts, are
        frequently lifted directly into AI-generated answers, and dramatically
        increase citation likelihood.
      </p>
      <h3>What to Know</h3>
      <p>
        Use &ldquo;Label: Value&rdquo; structure.{" "}
        <strong>Bold the label</strong> before the colon. Follow with specific,
        factual information. One idea per bullet point. Optimal number: 5-8
        bullets.
      </p>
      <h3>Examples</h3>
      <ul>
        <li>
          <strong>Begins November 20:</strong> Early access to Black Friday
          savings
        </li>
        <li>
          <strong>Doorbusters in top tech:</strong> TVs, laptops, tablets and
          smart home devices
        </li>
        <li>
          <strong>Member rewards:</strong> Earn up to $25 in bonus rewards
          through Nov. 29
        </li>
        <li>
          <strong>Shop your way:</strong> Online, in the app, or in stores
          nationwide
        </li>
        <li>
          <strong>Flexible fulfillment:</strong> Choose shipping, curbside
          pickup or in-store pickup
        </li>
        <li>
          <strong>Shipping:</strong> Free on all orders over $50
        </li>
      </ul>

      <h2>Lede (Opening Paragraph)</h2>
      <h3>Role It Plays</h3>
      <p>
        The lede is <strong>the single most important paragraph</strong> for AI
        visibility. It provides the core factual foundation for the entire
        announcement.
      </p>
      <h3>What to Know</h3>
      <p>Include the 5 W&apos;s:</p>
      <ul>
        <li>
          <strong>Who</strong>: Company or entity (TVs and More)
        </li>
        <li>
          <strong>What</strong>: Action taken (announces, launches, expands)
        </li>
        <li>
          <strong>When</strong>: Date or timeframe
        </li>
        <li>
          <strong>Where</strong>: Geography or scope (if relevant)
        </li>
        <li>
          <strong>Why</strong>: Benefit or impact (briefly)
        </li>
      </ul>
      <p>
        Lead with the news. Don&apos;t open with industry trends or background
        context. For new offerings, include a brief definition in the first or
        second sentence.
      </p>

      <h2>Context Paragraph (The &ldquo;Why It Matters&rdquo;)</h2>
      <h3>Role It Plays</h3>
      <p>
        The context paragraph provides rationale, market context, and strategic
        significance. For AI systems, this paragraph provides the &ldquo;why
        this matters&rdquo; for summaries, increases perceived content value,
        and helps AI rank content as high-authority rather than
        &ldquo;thin&rdquo; content.
      </p>
      <h3>What to Know</h3>
      <p>
        Explicitly state why this matters. Include evidence when possible.
      </p>
      <p>
        <strong>Strong framework: Evidence &rarr; Action &rarr; Result</strong>
      </p>
      <ul>
        <li>
          Evidence: &ldquo;60% of consumers prefer same-day service&rdquo;
        </li>
        <li>
          Action: &ldquo;TVs and More is expanding same-day delivery&rdquo;
        </li>
        <li>
          Result: &ldquo;Giving customers faster access to tech&rdquo;
        </li>
      </ul>

      <h2>Executive Quote (The Authority Signal)</h2>
      <h3>Role It Plays</h3>
      <p>
        For AI systems, executive quotes are authority signals,
        high-confidence facts, tone indicators, and highly extractable content.
        Quotes are treated as guaranteed facts that can be safely attributed.
      </p>
      <h3>What to Know</h3>
      <ul>
        <li>
          <strong>Clear attribution is essential</strong> &mdash; Full name,
          title, and company
        </li>
        <li>
          <strong>Echo the core announcement</strong> &mdash; Repetition
          strengthens AI confidence
        </li>
        <li>
          <strong>Use plain, declarative language</strong> &mdash; 1-3
          sentences, 20-60 words
        </li>
        <li>
          <strong>Pair emotion with substance</strong> &mdash; Emotion + facts is
          strong
        </li>
        <li>
          <strong>Include at least one specific detail</strong>
        </li>
      </ul>

      <h3>Five Elements That Increase Quote Visibility</h3>
      <ol>
        <li>
          <strong>Name a Specific Entity</strong>
        </li>
        <li>
          <strong>Include a Specific Metric</strong>
        </li>
        <li>
          <strong>Add a Temporal Reference</strong>
        </li>
        <li>
          <strong>Provide Causal Linkage</strong>
        </li>
        <li>
          <strong>Use Semantic Tags</strong>
        </li>
      </ol>

      <h2>Subsection(s) (The &ldquo;Information Gain&rdquo;)</h2>
      <h3>Role It Plays</h3>
      <p>
        After the quote, AI systems expect content to switch from narrative to
        information delivery. Subsections are highly valued, become source
        material for detailed AI answers, and should include new, specific facts
        not found earlier in the announcement.
      </p>
      <h3>What to Know</h3>
      <p>
        AI prefers predictable formatting blocks: a descriptive header, 1-2
        sentences stating the key fact, then bulleted details with one key fact
        per bullet.
      </p>

      <h2>FAQ (The &ldquo;Answer Machine&rdquo; Magnet)</h2>
      <h3>Role It Plays</h3>
      <p>
        FAQ sections are <strong>among the most AI-friendly content formats</strong>.
        They provide structured summaries of key questions users might ask and
        dramatically increase the likelihood AI cites our content. A
        well-structured FAQ lets AI bypass its own summarization and quote us
        directly.
      </p>
      <h3>What to Know</h3>
      <ul>
        <li>3-7 questions per FAQ section</li>
        <li>40-60 words per answer</li>
        <li>
          Start answers with declarative statements
        </li>
        <li>
          Strategic repetition is valuable &mdash; it&apos;s
          &ldquo;Reinforcement&rdquo; to AI
        </li>
      </ul>

      <h2>Boilerplate (Our AI &ldquo;ID Card&rdquo;)</h2>
      <p>
        The boilerplate serves as our AI identity verification. It establishes
        authoritativeness, builds a permanent link between TVs and More and
        consumer electronics, and prevents AI from hallucinating or confusing us
        with unrelated content. Moving forward, include it in any announcement
        or blog where AI visibility matters.
      </p>

      <h2>Contact Information (The Trust Signal)</h2>
      <p>
        Contact information serves as a trust signal for AI systems. Content
        without clear contact information is often flagged as
        &ldquo;AI-generated fluff&rdquo; and down-ranked. Include a simple
        media contact under the boilerplate with a professional email address on
        a company domain.
      </p>

      <h2>Summary of Key Corrections from Original</h2>
      <p>
        <strong>Major technical corrections:</strong>
      </p>
      <ul>
        <li>
          Removed inaccurate &ldquo;classification/categorization&rdquo;
          framework that suggested AI uses discrete tags and topic buckets
        </li>
        <li>
          Corrected explanation of how LLMs and RAG systems actually work
          (embeddings, semantic search, vector databases)
        </li>
        <li>
          Eliminated misleading &ldquo;6-step process&rdquo; that conflated
          search engines with LLM mechanics
        </li>
        <li>
          Removed claims about explicit &ldquo;confidence scoring&rdquo; and
          &ldquo;trust weighting&rdquo;
        </li>
        <li>
          Clarified difference between training data and retrieval-augmented
          generation
        </li>
        <li>
          Updated technical explanations to reflect current understanding (March
          2026)
        </li>
      </ul>
      <p>
        <strong>Preserved strengths:</strong>
      </p>
      <ul>
        <li>
          Practical content structure recommendations (mostly sound)
        </li>
        <li>Focus on clarity, specificity, and factual precision</li>
        <li>Emphasis on FAQ sections and structured content</li>
        <li>
          Recognition of three-audience challenge (AI, journalists, consumers)
        </li>
        <li>Strategic approach to optimization tradeoffs</li>
        <li>Specific examples and templates</li>
      </ul>
    </div>
  );
}
