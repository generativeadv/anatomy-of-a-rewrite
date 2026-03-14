import PullQuote from "@/components/editorial/PullQuote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Anatomy of a Rewrite",
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Background and Methodology
      </h1>
      <p className="text-xl text-muted italic font-[family-name:var(--font-display)] mb-12">
        How this evaluation was created, and why it matters
      </p>

      <div className="space-y-8 text-stone-700 leading-relaxed">
        <p>
          A communications advisory firm was counseling its client, a big-box
          electronics retailer, on how to navigate the new generative AI media
          environment and transform its communications function. The firm
          received a draft guidance document from the client &mdash; what this
          scorecard calls the &ldquo;Client Original.&rdquo; The client&apos;s
          email cover note said:
        </p>

        <blockquote className="border-l-4 border-stone-300 pl-5 py-4 bg-stone-50 rounded-r-lg text-stone-600 italic">
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

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            The &ldquo;Workslop&rdquo; Problem
          </h2>
          <p>
            The client&apos;s candid disclosure that the document was &ldquo;put
            together largely by researching via ChatGPT, Gemini and Google
            search&rdquo; is a good example of what has become known as
            &ldquo;workslop&rdquo; &mdash; AI-generated work that has the
            appearance, polish, and confidence of a well-considered piece of
            professional work, but is actually suboptimal, misleading, or just
            plain wrong.
          </p>
          <p className="mt-4">
            While proper use of AI and critical evaluation of outputs based on
            human expertise can deliver incredible insight and efficiency,
            workslop can severely harm productivity because it demands feedback,
            rewrites, and sometimes complete reorientation. The Client Original
            is a textbook case: it reads confidently, includes specific
            statistics (many fabricated), uses professional formatting, and
            provides detailed section-by-section guidance &mdash; but its
            technical model of how AI works is fundamentally incorrect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            The Rewrite Process
          </h2>
          <p>
            Generally, the best way to deal with workslop is to use superior AI
            and prompting to quickly optimize the work product. The creator of
            this site originally used the firm&apos;s internal AI tool
            (&ldquo;Fergus&rdquo;) in a two-step process to generate an analysis
            and revision.
          </p>
          <p className="mt-4">
            <strong>Step 1: Initial test.</strong> The first prompt, applied to
            approximately 900 words from the opening section of the client
            document, was:
          </p>
          <PullQuote
            label="Prompt used"
            text={`you're a researcher at a frontier AI lab. the below text is an attempt from a client to explain how frontier LLM's work to their corporate communications organization for the purposes of education and content optimization. i get the sense it's pretty innacurate. give me your feedback on it as is, and if it's generally inaccurate, rewrite it:`}
          />
          <p>
            Fergus correctly assessed that the original was inaccurate and
            overly focused on RAG, and provided a revision developing the idea
            of &ldquo;two pathways&rdquo;: training data and RAG.
          </p>
          <p className="mt-4">
            <strong>Step 2: Full rewrite.</strong> Based on Fergus&apos;s
            performance on this test, the creator pushed further with the
            following prompt, attaching the full client document:
          </p>
          <PullQuote
            label="Prompt used"
            text="This is a solid rewrite, good job. That was a section of a much longer document. With this background in mind, evaluate the entire document and rewrite it so it accurately represents how models work and provides modern up-to-date guidance on best practices as of today March 14 2026."
          />
          <p>
            Fergus produced what this scorecard evaluates as &ldquo;Fergus
            v1.&rdquo; The creator was unsatisfied with the response &mdash; it
            was far shorter than the original and had stripped out nearly all
            practical guidance &mdash; and wanted to test how other AI systems
            would respond to the exact same prompt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Testing Frontier Models
          </h2>
          <p>
            To test that hypothesis, the creator first created a version of the
            client document that was not identifiable to the client, using Fergus
            to strip out all company-specific references and replace them with a
            fictional brand (&ldquo;TVs &amp; More&rdquo;). With this generic
            version in hand, the creator felt comfortable uploading it to
            frontier models outside the firm&apos;s IT environment &mdash;
            specifically ChatGPT 5.4 Pro and Claude Opus 4.6 Extended &mdash;
            with memory and training turned off.
          </p>
          <p className="mt-4">
            The exact same two-step prompting process used with Fergus was
            applied to ChatGPT 5.4 Pro, yielding an output the creator was
            impressed with after review. The same process was applied to Claude
            Opus 4.6 Extended.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            A Note on Processing Time
          </h2>
          <p>
            The creator observed that frontier reasoning models spend
            dramatically longer processing requests than Fergus. Fergus generated
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

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Improving the Fergus Output
          </h2>
          <p>
            Hypothesizing that a different prompt might yield better results from
            Fergus, the creator followed up in the same Fergus chat with:
          </p>
          <PullQuote
            label="Prompt used"
            text="This version you created is much shorter than the original full document I shared with you. Rewrite it again, ensuring you evaluate every section within the original Word doc I shared with you. Assess the goal and role of each section and rewrite the entire document so it is accurate and practically useful, based on up-to-date information as of today March 14, 2026. Deliver it as a Word doc."
          />
          <p>
            Fergus reasoned for notably longer before returning an answer
            &mdash; an estimated three to five minutes, compared to its
            near-instant initial response. This produced &ldquo;Fergus
            v2,&rdquo; which is also evaluated in the scorecard.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Building the Scorecard
          </h2>
          <p>
            With outputs from four different AI systems (Fergus v1, Fergus v2,
            GPT 5.4 Pro, and Opus 4.6 Extended) plus the Client Original, the
            creator had the material for a structured evaluation. The scorecard
            was created with two goals:
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
            The creator was pleased with the initial scorecard criteria and
            evaluation. The scorecard was then expanded iteratively: each
            additional rewrite (GPT 5.4, Opus 4.6, Fergus v2) was fed into the
            same evaluation chat and assessed against the established criteria,
            with previous scores held stable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            The Ideal Composite
          </h2>
          <p>
            After all five versions were evaluated, the creator asked the same
            Opus 4.6 chat to generate an &ldquo;ideal composite&rdquo; document
            combining the strongest elements from all versions: the Opus 4.6
            rewrite&apos;s educational foundation and prose quality, the GPT 5.4
            rewrite&apos;s technical publishing guidance and sourced appendix,
            and the Client Original and Fergus v2&apos;s worked examples and
            section-by-section templates. The composite is not included in the
            scorecard (it would be grading its own homework) but serves as the
            benchmark against which each rewrite&apos;s detail pages compare.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Building This Site
          </h2>
          <p>
            To consolidate and present these insights, the creator asked the
            same Opus 4.6 chat to produce the documentation and prompting inputs
            for Claude Code to build this interactive experience. The scorecard
            data, hover text, detailed explanations, and all verbatim quotes
            were generated in that chat and exported as a structured JSON file
            that powers this application.
          </p>
        </section>

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
              Processing time observations are estimates based on the
              creator&apos;s recollection, not precise measurements.
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
