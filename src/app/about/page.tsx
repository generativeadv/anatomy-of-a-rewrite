import Link from "next/link";
import PullQuote from "@/components/editorial/PullQuote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Anatomy of a Rewrite",
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        About This Project
      </h1>
      <p className="text-xl text-muted italic font-[family-name:var(--font-display)] mb-8">
        The backstory behind the evaluation
      </p>

      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Executive Summary
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            This project is a structured, side-by-side evaluation of five
            AI-generated versions of the same document: a corporate
            communications guide on optimizing content for generative AI search
            platforms. The original document was created by the client&apos;s
            internal team using ChatGPT and Gemini. It read confidently,
            included specific statistics, and used professional formatting
            &mdash; but its technical model of how AI systems work was
            fundamentally incorrect, and many of its cited figures were
            fabricated. It is a textbook example of what has become known as
            &ldquo;<a
              href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-stone-900 transition-colors"
            >workslop</a>&rdquo;: AI-generated output that has the appearance
            and polish of professional work but is misleading or wrong.
          </p>
          <p>
            To test how different AI systems would handle a rewrite, the
            document was first anonymized &mdash; all client-identifying
            information was stripped and replaced with a fictional brand
            &mdash; and the same two-step prompting process was then applied
            to four tools: the advisory firm&apos;s proprietary AI platform
            (&ldquo;Fergus,&rdquo; which produced two versions after the first
            was deemed insufficient) and two frontier reasoning models
            &mdash; Claude Opus 4.6 Extended and GPT 5.4 Pro &mdash; each
            given the identical prompt with no additional coaching. The results
            varied dramatically: from a 2,100-word technical primer that
            stripped out all practical guidance, to comprehensive 8,000+ word
            rewrites that corrected the technical foundations while preserving
            and expanding the document&apos;s operational utility.
          </p>
          <p>
            The scorecard evaluates all five versions across ten qualitative
            attributes &mdash; including technical accuracy, practical guidance,
            structural organization, and prose quality &mdash; using a 1&ndash;10
            rubric developed in a Claude Opus 4.6 Extended evaluation chat.
            Aggregate scores ranged from 3.3 to 8.2 out of 10, revealing
            that identical prompts can produce outputs of vastly different
            quality depending on the underlying model and architecture.
          </p>
          <p>
            After all five versions were evaluated, an Ideal Composite document
            was generated as a benchmark, combining the strongest elements from
            each rewrite: the Opus 4.6 version&apos;s educational foundation
            and prose quality, the GPT 5.4 version&apos;s technical publishing
            guidance and sourced appendix, and the Client Original and Fergus
            v2&apos;s worked examples and templates. The composite is not scored
            (it would be grading its own homework) but serves as the reference
            point for the detail-page comparisons. This project demonstrates
            both the extraordinary potential and the significant variance of
            AI-assisted knowledge work &mdash; and why critical human evaluation
            remains essential.
          </p>
        </div>
      </section>

      <hr className="border-stone-200 mb-12" />

      <div className="space-y-8 text-stone-700 leading-relaxed">
        {/* The Origin — unique narrative hook with client email */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            How It Started
          </h2>
          <p>
            A communications advisory firm was counseling its client, a big-box
            electronics retailer, on how to navigate the new generative AI media
            environment and transform its communications function. The firm
            received a draft guidance document from the client &mdash; what this
            scorecard calls the &ldquo;Client Original.&rdquo; The client&apos;s
            email cover note said:
          </p>

          <blockquote className="border-l-4 border-stone-300 pl-5 py-4 bg-stone-50 rounded-r-lg text-stone-600 italic mt-6">
            <p>
              &ldquo;Attached is the AI &amp; External Communications
              plan/overview I put together for the team. Your feedback would be
              greatly appreciated&mdash;is this generally right?, anything
              glaringly wrong?, am I missing anything?, etc. For context, the
              &lsquo;plan&rsquo; is focused on owned PR content (ie.
              announcements) and meant to both provide the team with a
              foundational understanding of what is important to generative AI
              platforms and why in our content, as well as an overview of the most
              effective structure and formatting for an announcement. It does not
              include schema-specific elements, etc. I put this together largely by
              researching via ChatGPT, Gemini and Google search&mdash;pressing
              ChatGPT/Gemini on the different components (and why) to ensure I
              wasn&apos;t getting completely different answers. I plan to do the
              same with Claude and Perplexity. I will eventually create a
              supplementary cheat sheet for the team but first want to make sure
              this more in-depth resource was in a good spot. Thanks, appreciate
              your expertise!&rdquo;
            </p>
          </blockquote>

          <p className="mt-6">
            The client&apos;s candid disclosure that the document was &ldquo;put
            together largely by researching via ChatGPT, Gemini and Google
            search&rdquo; made it a textbook case of &ldquo;<a
              href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-stone-900 transition-colors"
            >workslop</a>&rdquo;
            &mdash; and the perfect candidate for a structured rewrite
            experiment. The firm used its proprietary AI tool
            (&ldquo;Fergus&rdquo;), then tested two frontier reasoning models
            with the identical prompts. The full rewrite process, prompts, and
            all five resulting documents are detailed on the{" "}
            <Link
              href="/methodology"
              className="text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors"
            >
              Methodology
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Anonymization — unique editorial detail */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Testing Outside the Firm
          </h2>
          <p>
            Before sharing the document with frontier models outside the
            firm&apos;s IT environment, all client-identifying information
            needed to be removed to protect confidentiality. Fergus was used to
            strip out the client&apos;s company name, brand references, and any
            details that could identify the retailer, replacing them with a
            fictional brand (&ldquo;TVs &amp; More&rdquo;). With this
            anonymized version in hand, it was uploaded to ChatGPT 5.4 Pro and
            Claude Opus 4.6 Extended &mdash; with memory and training features
            turned off to prevent the content from being retained &mdash; using
            the exact same two-step prompting process.
          </p>
        </section>

        {/* Processing Time — entirely unique */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            A Note on Processing Time
          </h2>
          <p>
            Frontier reasoning models spent dramatically longer processing
            requests than Fergus. Fergus generated
            its response to the first prompt almost instantly, and took an
            estimated one to two minutes to render the full rewrite (beginning to
            write immediately after the prompt was entered). In contrast, GPT
            5.4 Pro reasoned for 26 minutes in response to the initial prompt
            and 61 minutes in response to the second prompt requesting a full
            rewrite.
          </p>
          <p className="mt-4">
            Fergus uses Gemini 3.0 Flash as a front-end &ldquo;orchestration&rdquo;
            agent and calls on other specialized agents to produce outputs. The
            performance gap is consistent with the architectural difference
            between a fast orchestration layer and a deep reasoning model.
          </p>
        </section>

        {/* Building the Scorecard — unique evaluation prompt */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Building the Scorecard
          </h2>
          <p>
            With outputs from four different AI systems (Fergus v1, Fergus v2,
            GPT 5.4 Pro, and Opus 4.6 Extended) plus the Client Original, there
            was enough material for a structured evaluation. The scorecard
            was designed with two goals:
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li>
              <strong>Establish a rubric</strong> to help the firm evaluate the
              original document and explain recommendations for improvement to
              the client.
            </li>
            <li>
              <strong>Demonstrate the variance</strong> in AI model performance
              given identical work tasks &mdash; both as a learning tool for
              firm colleagues and as an objective comparison of Fergus&apos;s
              performance against publicly available AI systems.
            </li>
          </ol>
          <p className="mt-4">
            The evaluation was conducted in a Claude Opus 4.6 Extended chat. The
            initial prompt, attaching the blinded client original and Fergus v1
            rewrite, was:
          </p>
          <PullQuote
            label="Prompt used"
            text={`You're a researcher at a frontier generative AI lab. I'm going to give you two versions of a document to evaluate. The first is an attempt from a big box retailer TVs & More to give practical educate and guidance for its corporate communications team. The second is an attempted rewrite of the document by the company's communications agency, which used their proprietary AI system, Fergus, for the revision. I want you to create a detailed comparison and assessment of both documents, including technical/quantitative aspects (length, etc), but primarily focusing on qualitative analysis (accuracy, clarity, practicality, etc). Include a summary score card of all the attributes in a table format as part of your response. Be critical but fair. Ask any clarifying questions as needed.`}
          />
          <p>
            The initial scorecard criteria and evaluation proved strong. The
            scorecard was then expanded iteratively: each additional rewrite
            (GPT 5.4, Opus 4.6, Fergus v2) was fed into the same evaluation
            chat and assessed against the established criteria, with previous
            scores held stable.
          </p>
        </section>

        {/* Building This Site — unique */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Building This Site
          </h2>
          <p>
            To consolidate and present these insights, the same Opus 4.6 chat
            was used to produce the documentation and prompting inputs for
            Claude Code to build this interactive experience. The scorecard
            data, hover text, detailed explanations, and all verbatim quotes
            were generated in that chat and exported as a structured JSON file
            that powers this application.
          </p>
        </section>

        {/* Disclaimers — essential */}
        <section className="bg-stone-100 rounded-lg p-6 mt-12">
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            Disclaimers
          </h2>
          <ul className="space-y-3 text-sm text-stone-600">
            <li>
              All company-identifying information has been removed from the
              source documents. &ldquo;TVs and More&rdquo; is a fictional brand
              used for illustration.
            </li>
            <li>
              The evaluation was conducted by Claude Opus 4.6 Extended, which is
              also one of the models being evaluated. This is disclosed
              transparently. The Opus 4.6 rewrite was assessed using the same
              criteria as all other versions, and its weaknesses (lack of
              operational guidance, missing template) are documented frankly.
            </li>
            <li>
              &ldquo;Fergus&rdquo; is the internal name for the firm&apos;s
              proprietary AI tool. Its underlying architecture (Gemini 3.0 Flash
              orchestration with specialized agents) is described as disclosed by
              the firm.
            </li>
            <li>
              Processing time observations are estimates based on
              recollection, not precise measurements.
            </li>
            <li>
              This evaluation reflects the state of these AI systems as of March
              14, 2026. Model capabilities change rapidly.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
