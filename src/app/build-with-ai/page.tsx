import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { AiOfferingIcon } from "@/components/ui/AiOfferingIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aiServices, aiSolutions } from "@/content/aiOfferings";

export const metadata: Metadata = {
  title: "Build With AI | Staller Stack",
  description:
    "AI services and AI solutions from Staller Stack — agentic AI, generative AI, computer vision, LLM development, and industry-specific AI agents.",
};

function OfferingGrid({ items }: { items: typeof aiServices }) {
  return (
    <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((offering) => (
        <RevealItem key={offering.slug}>
          <Link href={`/build-with-ai/${offering.slug}`}>
            <TiltCard className="h-full">
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
  return (
    <>
      <PageHeader
        eyebrow="Build With AI"
        heading="AI Services & AI Solutions for Every Stage of the Build."
        subtext="From foundational AI services — agents, generative AI, computer vision, LLM development — to industry-ready AI solutions for healthcare, banking, retail, and security."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              AI Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
              The Building Blocks of Every AI Engagement
            </h2>
          </Reveal>
          <OfferingGrid items={aiServices} />
        </Container>
      </section>

      <section className="border-t border-ss-border pb-24 pt-24 sm:pb-32 sm:pt-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              AI Solutions
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
              Ready-Made AI, Shaped to Your Industry
            </h2>
          </Reveal>
          <OfferingGrid items={aiSolutions} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
