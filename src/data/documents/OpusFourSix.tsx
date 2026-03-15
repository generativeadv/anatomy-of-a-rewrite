export default function OpusFourSixContent() {
  return (
    <div className="prose prose-stone max-w-none">
      <h1>How Generative AI Processes and Surfaces Our Content</h1>

      <p>
        Generative AI platforms like ChatGPT, Claude, Gemini, and Perplexity
        don&apos;t &ldquo;understand&rdquo; content the way a human reader does.
        They work through pattern recognition at enormous scale. To optimize how
        our content shows up in AI-generated answers, it helps to understand the
        two distinct paths our content can take to reach someone through one of
        these platforms.
      </p>

      <h2>Path 1: Training Knowledge</h2>

      <p>
        Large language models are trained on massive amounts of text from across
        the internet&mdash;web pages, news articles, press releases, blog posts,
        earnings reports, and much more. During training, the model reads this
        text and learns statistical patterns about language: which words tend to
        follow which other words, how concepts relate to each other, what kinds
        of answers typically follow what kinds of questions.
      </p>

      <p>
        Our public content is almost certainly part of this training data. But
        it&apos;s important to understand what that means. The model
        doesn&apos;t &ldquo;store&rdquo; our press release as a document it can
        look up later. Instead, it absorbs the{" "}
        <strong>patterns and facts</strong> from our content into its
        parameters&mdash;billions of numerical weights that collectively encode
        everything the model learned. When someone asks a question, the model
        generates a response one word at a time based on all of those learned
        patterns, not by retrieving a specific source.
      </p>

      <aside className="bg-sky-50 border border-sky-200 rounded-lg p-5 my-6">
        <p className="font-semibold text-sky-900 mb-2">
          What this means in practice:
        </p>
        <p className="text-sky-800 text-sm">
          A model might know that TVs and More operates more than 1,000 stores
          in the U.S. and offers the TVM Total&trade; membership program, but it
          can&apos;t &ldquo;pull up&rdquo; a specific press release or earnings
          transcript the way a search engine would. The knowledge is there. The
          source attribution is gone.
        </p>
      </aside>

      <p>
        We have limited direct control over this path because training has
        already happened. But the following factors determine how well our facts
        were absorbed:
      </p>

      <ul>
        <li>
          <strong>Prevalence.</strong> If our announcement was picked up by many
          outlets, the model saw the same facts repeated across multiple sources.
          Repetition strengthens the signal.
        </li>
        <li>
          <strong>Clarity.</strong> Simple, concrete statements (&ldquo;TVs and
          More operates over 1,000 U.S. stores&rdquo;) get absorbed more
          reliably than vague or complex ones. If we buried a key fact in the
          fourth paragraph behind qualifying language, the model may have learned
          a fuzzier version of it.
        </li>
        <li>
          <strong>Consistency.</strong> If our messaging was consistent across
          our press release, blog, and social channels, the model is more likely
          to get it right. Contradictory signals across sources lead to muddled
          outputs.
        </li>
        <li>
          <strong>Recency.</strong> Models have a training cutoff date. Content
          published after that date is not part of the model&apos;s built-in
          knowledge. However, it can still be surfaced through the second path.
        </li>
      </ul>

      <h2>Path 2: Search-Augmented Retrieval</h2>

      <p>
        Most major AI platforms now include real-time web search. When someone
        asks a question on ChatGPT, Perplexity, or Google&apos;s AI Overviews,
        the system often searches the web first, retrieves relevant pages, and
        then generates an answer grounded in those results. This is called{" "}
        <strong>retrieval-augmented generation (RAG)</strong>, and it&apos;s
        where the structure and clarity of our content has the most direct
        impact.
      </p>

      <p>Here&apos;s what happens, step by step:</p>

      <ol>
        <li>
          <strong>Search.</strong> The system converts the user&apos;s question
          into one or more search queries and retrieves web results&mdash;typically
          the top 5 to 20 pages.
        </li>
        <li>
          <strong>Passage extraction.</strong> The system identifies the most
          relevant passages within those pages using{" "}
          <strong>semantic similarity</strong>&mdash;a meaning-based comparison
          between the user&apos;s question and sections of text. This is not
          keyword matching. &ldquo;When does the TVs and More sale start?&rdquo;
          and &ldquo;TVs and More Black Friday launch date&rdquo; are
          semantically similar even though they share few exact words.
        </li>
        <li>
          <strong>Answer generation.</strong> The model synthesizes information
          from the extracted passages into a coherent answer, often with
          citations back to the original sources.
        </li>
      </ol>

      <aside className="bg-sky-50 border border-sky-200 rounded-lg p-5 my-6">
        <p className="font-semibold text-sky-900 mb-2">Key takeaway:</p>
        <p className="text-sky-800 text-sm">
          For this path, our content needs to do two things:{" "}
          <strong>rank in web search</strong> so it gets retrieved in the first
          place, and <strong>be easy to extract clear facts from</strong> so the
          AI uses our content accurately in its response.
        </p>
      </aside>

      <h1>Examples: How Each Path Works in Practice</h1>

      <p>
        Because training knowledge and search-augmented retrieval work
        differently, the kinds of content that matter for each are different too.
        Here&apos;s a concrete look at both.
      </p>

      <h3>Training knowledge: Durable company facts</h3>

      <p className="italic">
        HEADLINE: TVs and More Reports Q3 Revenue of $9.4B, Expands Same-Day
        Delivery to 300+ Markets
      </p>

      <p>
        Earnings results, executive leadership, store footprint, major programs
        like TVM Total&trade;&mdash;these are the kinds of facts that persist
        well in training data. If this announcement (along with media coverage of
        it) was in the model&apos;s training set, the model learned durable
        associations: TVs and More&apos;s approximate revenue scale, its
        same-day delivery capability, and its market reach.
      </p>

      <p>
        Months later, when someone asks &ldquo;How big is TVs and More?&rdquo;
        or &ldquo;Does TVs and More offer same-day delivery?&rdquo; the model
        generates an answer drawing on those learned patterns. The clearer and
        more widely reported the original facts were, the more accurately the
        model reflects them. But note: the model won&apos;t cite our press
        release, and if the numbers have since changed, the model may still
        reflect the older figure until it&apos;s retrained.
      </p>

      <h3>Search-augmented retrieval: Time-sensitive announcements</h3>

      <p className="italic">
        HEADLINE: TVs and More Launches Black Friday Sale Starting November 20
      </p>

      <p>
        Seasonal promotions, event dates, and breaking news are exactly where
        search-augmented retrieval matters most. This type of content may not be
        in the model&apos;s training data (or may be outdated there), but when
        someone asks &ldquo;When does TVs and More&apos;s Black Friday sale
        start?&rdquo; on a platform with web search, the system:
      </p>

      <ul>
        <li>
          Searches the web for something like{" "}
          <em>&ldquo;TVs and More Black Friday sale start date&rdquo;</em>
        </li>
        <li>
          Retrieves our press release (and any third-party coverage) from search
          results
        </li>
        <li>
          Identifies the most relevant passages by matching the meaning of the
          user&apos;s question against the text on the page
        </li>
        <li>
          Generates a synthesized answer, ideally citing our press release as the
          source
        </li>
      </ul>

      <p>
        If our headline is clear, our opening paragraph states the date
        explicitly, and our formatting makes it easy to extract that fact,
        we&apos;re in a strong position. If the date is buried in paragraph
        four, or our headline is vague (&ldquo;TVs and More Announces Holiday
        Plans&rdquo;), the model might pull the date from a third-party article
        instead&mdash;or get it wrong entirely.
      </p>

      <h1>What We Can Control: Practical Guidelines</h1>

      <h3>Lead with the facts</h3>
      <p>
        The most important factual claims&mdash;the who, what, when,
        where&mdash;should be in the headline and the first 150 words. AI
        systems (and search engines) give disproportionate weight to early
        content when extracting passages. Don&apos;t save the news for the third
        paragraph.
      </p>

      <h3>Write self-contained sentences</h3>
      <p>
        Each key claim should be understandable on its own, without requiring
        context from surrounding paragraphs. AI may extract a single sentence to
        use as the basis for an answer. &ldquo;The sale begins November 20 at
        TVsandMore.com and all U.S. stores&rdquo; works. &ldquo;It begins on
        the date announced earlier this quarter&rdquo; does not.
      </p>

      <h3>Be specific and concrete</h3>
      <p>
        Use exact dates, numbers, percentages, and proper nouns. Vague language
        produces vague results. &ldquo;15% year-over-year revenue growth&rdquo;
        is far more useful to an AI system than &ldquo;significant revenue
        growth.&rdquo;
      </p>

      <h3>Use clear structural formatting</h3>
      <p>
        Headlines, subheadings, and &ldquo;Key Highlights&rdquo; sections help
        AI systems parse content and identify the most important information.
        Well-structured content produces cleaner text passages, which makes
        extraction more accurate.
      </p>

      <h3>Include FAQ sections when relevant</h3>
      <p>
        AI platforms are built for question-answering. A question in our FAQ that
        closely matches what a real person might ask is highly likely to be
        surfaced as a direct answer. This is one of the highest-leverage things
        we can do.
      </p>

      <h3>Maintain consistency across channels</h3>
      <p>
        If our press release says November 20 but our blog says November 21,
        we&apos;re creating conflicting signals. Consistency across all published
        content&mdash;press releases, blog posts, social media, investor
        materials&mdash;strengthens the signal for both training and retrieval.
      </p>

      <h3>Prioritize source authority</h3>
      <p>
        Content published on our corporate newsroom or investor relations page
        carries more weight in search results than content hosted on a
        third-party wire service alone. Make sure our owned channels are the
        definitive source.
      </p>

      <h1>Key Terms</h1>

      <p>
        <strong>Large Language Model (LLM):</strong> A neural network trained on
        massive amounts of text that generates responses by predicting the most
        likely next word, one token at a time. Examples include GPT-4, Claude,
        and Gemini.
      </p>

      <p>
        <strong>Parameters:</strong> The billions of numerical weights inside the
        model that encode its learned knowledge&mdash;not as stored documents,
        but as patterns of association.
      </p>

      <p>
        <strong>Retrieval-Augmented Generation (RAG):</strong> A system where AI
        searches for and retrieves external content in real time before
        generating an answer. This is how ChatGPT with web search, Perplexity,
        and Google&apos;s AI Overviews work.
      </p>

      <p>
        <strong>Semantic similarity:</strong> A measure of how close two pieces
        of text are in meaning, not just shared keywords. This is how AI systems
        match a user&apos;s question to relevant passages in our content.
      </p>

      <p>
        <strong>Embeddings:</strong> Numerical representations of text that
        capture meaning. Similar meanings produce similar numbers, which is how
        the system measures semantic similarity.
      </p>

      <p>
        <strong>Hallucination:</strong> When a model generates something that
        sounds plausible but is factually incorrect. More likely when training
        data was vague or contradictory on a given topic.
      </p>

      <p>
        <strong>Token:</strong> The unit of text the model processes&mdash;roughly
        equivalent to a word or word fragment. The model generates one token at a
        time.
      </p>

      <p>
        <strong>Training cutoff:</strong> The date after which the model has no
        built-in knowledge. Content published after the cutoff can still be
        surfaced through search-augmented retrieval.
      </p>
    </div>
  );
}
