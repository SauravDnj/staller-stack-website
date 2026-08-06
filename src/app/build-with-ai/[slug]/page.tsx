import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { AiOfferingIcon } from "@/components/ui/AiOfferingIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  allAiOfferings,
  aiServices,
  aiSolutions,
  getAiOfferingBySlug,
} from "@/content/aiOfferings";

export function generateStaticParams() {
  return allAiOfferings.map((offering) => ({ slug: offering.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offering = getAiOfferingBySlug(slug);
  if (!offering) return {};

  return {
    title: `${offering.name} | Staller Stack`,
    description: offering.description,
  };
}

function capabilities(name: string) {
  return [
    `Scoped and delivered by engineers who specialize in ${name}`,
    "Production-ready implementation, not just a proof-of-concept",
    "Ongoing monitoring, tuning, and support after launch",
  ];
}

export default async function AiOfferingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = getAiOfferingBySlug(slug);
  if (!offering) notFound();

  const categoryLabel = offering.category === "service" ? "AI Service" : "AI Solution";
  const siblingList = offering.category === "service" ? aiServices : aiSolutions;
  const related = siblingList.filter((item) => item.slug !== offering.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`Build With AI — ${categoryLabel}`}
        heading={offering.name}
        subtext={offering.description}
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-surface">
              <SpinningIcon>
                <AiOfferingIcon icon={offering.icon} className="h-6 w-6 text-ss-mint" />
              </SpinningIcon>
            </div>
            <h2 className="mt-8 font-display text-2xl font-semibold text-ss-text">
              What&apos;s Included
            </h2>
          </Reveal>
          <RevealGroup className="mt-6 grid grid-cols-1 divide-y divide-ss-border overflow-hidden rounded-2xl border border-ss-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {capabilities(offering.name).map((point) => (
              <RevealItem
                key={point}
                className="flex items-start gap-3 bg-ss-surface/60 p-6 transition-colors duration-300 hover:bg-ss-surface"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ss-teal/15 text-xs text-ss-teal">
                  ✓
                </span>
                <p className="font-display text-sm font-medium text-ss-text">
                  {point}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Related {categoryLabel === "AI Service" ? "AI Services" : "AI Solutions"}
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <RevealItem key={item.slug}>
                  <Link
                    href={`/build-with-ai/${item.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors hover:border-ss-teal"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-ss-border bg-ss-base">
                      <AiOfferingIcon icon={item.icon} className="h-4 w-4 text-ss-mint" />
                    </div>
                    <p className="mt-4 font-display text-sm font-semibold text-ss-text group-hover:text-ss-mint">
                      {item.name}
                    </p>
                    <p className="mt-2 text-xs text-ss-muted">{item.description}</p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
            <div className="mt-8">
              <Link
                href="/build-with-ai"
                className="font-display text-sm text-ss-teal hover:text-ss-mint"
              >
                View All Build With AI →
              </Link>
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
