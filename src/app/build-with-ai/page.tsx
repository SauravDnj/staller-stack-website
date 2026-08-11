import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { AiOfferingIcon } from "@/components/ui/AiOfferingIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { PageHeader } from "@/components/sections/PageHeader";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aiServices, aiSolutions, allAiOfferings } from "@/content/aiOfferings";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Build With AI | AI Development Services & Solutions | Staller Stack",
  description:
    "39 AI services and industry solutions from Staller Stack — agentic AI, generative AI, computer vision, LLM development, RAG, and AI agents for healthcare, banking, retail, logistics, and security.",
  keywords: [
    "AI development services",
    "AI solutions company",
    "agentic AI development",
    "generative AI services",
    "AI agent development",
    "enterprise AI solutions",
  ],
};

const hubStats = [
  { label: "AI Services", value: "21" },
  { label: "AI Solutions", value: "18" },
  { label: "Engagements Delivered", value: "60+" },
  { label: "Typical Discovery Sprint", value: "2 wks" },
];

function OfferingGrid({ items }: { items: typeof aiServices }) {
  return (
    <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((offering) => (
        <RevealItem key={offering.slug}>
          <Link href={`/build-with-ai/${offering.slug}`}>
            <TiltCard className="h-full" accent={offering.theme.accent}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                <SpinningIcon>
                  <AiOfferingIcon icon={offering.icon} className="h-5 w-5 text-ss-mint" />
                </SpinningIcon>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-ss-text">
                {offering.name}
              </h3>
              <p className="mt-3 text-sm text-ss-muted">
                {offering.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {offering.techStack
                  .flatMap((group) => group.items)
                  .slice(0, 4)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-surface px-3 py-1.5 font-mono text-xs text-ss-text"
                    >
                      <TechIcon name={tech} className="h-3.5 w-3.5 text-ss-teal" />
                      {tech}
                    </span>
                  ))}
              </div>
              <span className="mt-6 inline-block font-display text-sm text-ss-teal">
                Learn more →
              </span>
            </TiltCard>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export default function BuildWithAiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Build With AI | AI Development Services & Solutions",
    description:
      "39 AI services and industry solutions from Staller Stack — agentic AI, generative AI, computer vision, LLM development, RAG, and AI agents for healthcare, banking, retail, logistics, and security.",
    url: `${siteConfig.url}/build-with-ai`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allAiOfferings.map((offering, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/build-with-ai/${offering.slug}`,
        name: offering.name,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Build With AI"
        heading="AI Services & AI Solutions for Every Stage of the Build."
        subtext="From foundational AI services — agentic AI, generative AI, computer vision, LLM development, RAG — to industry-ready AI solutions for healthcare, banking, retail, logistics, and security."
      />

      <StatsStrip stats={hubStats} accent="teal" />

      <section className="relative overflow-hidden pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-indigo)_10%,transparent),_transparent_60%)]" />
        <AmbientVisual
          visual="mesh"
          color="var(--ss-indigo)"
          className="right-[-90px] top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-[0.22] lg:block"
        />
        <Container className="relative max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text sm:text-3xl">
              What &ldquo;Build With AI&rdquo; Means at Staller Stack
            </h2>
            <p className="mt-5 text-base text-ss-muted">
              &ldquo;AI&rdquo; covers a wide range of very different engineering problems — a
              retrieval pipeline grounded in your documents is not the same build as a
              computer vision model watching a warehouse floor, and neither is the same as a
              multi-step agent qualifying inbound sales leads. We split our AI practice into
              two layers so you can find the right starting point instead of one generic
              &ldquo;AI package.&rdquo;
            </p>
            <p className="mt-4 text-base text-ss-muted">
              <strong className="text-ss-text">AI Services</strong> are the foundational
              disciplines — agentic AI, generative AI, computer vision, NLP, LLM development,
              RAG, fine-tuning, and more — the building blocks any AI engagement is assembled
              from.{" "}
              <strong className="text-ss-text">AI Solutions</strong> are those same
              disciplines applied to a specific job: an AI agent that triages support
              tickets, a model that flags fraud in banking transactions, a vision system that
              catches theft on camera. Every page below includes the real process, typical
              engagement model, technology stack, and honest answers to the questions clients
              actually ask before they commit budget.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-teal)_10%,transparent),_transparent_60%)]" />
        <AmbientVisual
          visual="orbit"
          color="var(--ss-teal)"
          className="left-[-70px] top-1/3 hidden h-72 w-72 opacity-[0.22] lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-16 hidden h-72 w-72 lg:block"
        >
          <div
            className="bg-grid-animate absolute inset-0 opacity-20"
            style={{
              maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 75%)",
            }}
          />
        </div>
        <Container className="relative">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              AI Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
              The Building Blocks of Every AI Engagement
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ss-muted">
              Core AI disciplines you can engage independently or combine — from a single
              proof-of-concept to a full production build.
            </p>
          </Reveal>
          <OfferingGrid items={aiServices} />
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-ss-border pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_color-mix(in_srgb,var(--ss-cyan)_10%,transparent),_transparent_60%)]" />
        <AmbientVisual
          visual="pulse"
          color="var(--ss-cyan)"
          className="right-[-70px] bottom-1/4 hidden h-72 w-72 opacity-[0.22] lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -bottom-16 hidden h-72 w-72 lg:block"
        >
          <div
            className="bg-grid-animate absolute inset-0 opacity-20"
            style={{
              maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 75%)",
            }}
          />
        </div>
        <Container className="relative">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              AI Solutions
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
              Ready-Made AI, Shaped to Your Industry
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ss-muted">
              Applied AI builds for healthcare, banking, retail, logistics, security, and
              customer operations — each built on the services above and scoped to a
              specific outcome.
            </p>
          </Reveal>
          <OfferingGrid items={aiSolutions} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
