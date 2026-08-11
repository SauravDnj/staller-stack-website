import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { TechIcon } from "@/components/ui/TechIcon";
import { AiOfferingIcon } from "@/components/ui/AiOfferingIcon";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { AiOfferingHero } from "@/components/sections/AiOfferingHero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import {
  allAiOfferings,
  aiServices,
  aiSolutions,
  getAiOfferingBySlug,
} from "@/content/aiOfferings";
import { siteConfig } from "@/content/siteConfig";
import { ACCENT_CLASSES, ACCENT_HEX } from "@/lib/accentTheme";

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

  const title = offering.seo.metaTitle;
  const description = offering.seo.metaDescription;
  const url = `${siteConfig.url}/build-with-ai/${offering.slug}`;

  return {
    title,
    description,
    keywords: offering.seo.keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function AiOfferingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = getAiOfferingBySlug(slug);
  if (!offering) notFound();

  const accentClasses = ACCENT_CLASSES[offering.theme.accent];
  const accentColor = ACCENT_HEX[offering.theme.accent];
  const categoryLabel = offering.category === "service" ? "AI Service" : "AI Solution";
  const siblingList = offering.category === "service" ? aiServices : aiSolutions;
  const related = siblingList.filter((item) => item.slug !== offering.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offering.name,
    description: offering.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${siteConfig.url}/build-with-ai/${offering.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AiOfferingHero offering={offering} />

      <StatsStrip stats={offering.stats} accent={offering.theme.accent} />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              What&apos;s Included
            </h2>
          </Reveal>
          <RevealGroup className="mt-6 grid grid-cols-1 divide-y divide-ss-border overflow-hidden rounded-2xl border border-ss-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {offering.deliverables.slice(0, 3).map((bullet) => (
              <RevealItem
                key={bullet}
                className="flex items-start gap-3 bg-ss-surface/60 p-6 transition-colors duration-300 hover:bg-ss-surface"
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${accentClasses.bgSoft} ${accentClasses.text}`}
                >
                  ✓
                </span>
                <p className="font-display text-sm font-medium text-ss-text">{bullet}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-ss-border py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top, color-mix(in srgb, ${accentColor} 8%, transparent), transparent 60%)`,
          }}
        />
        <AmbientVisual
          visual={offering.theme.visual}
          color={accentColor}
          className="right-[-80px] top-0 hidden h-72 w-72 opacity-[0.18] lg:block"
        />
        <Container className="relative">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">How We Work</h2>
          </Reveal>
          <div className="relative mt-10">
            <div
              className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px lg:block"
              style={{ backgroundColor: "var(--ss-border)" }}
            />
            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {offering.process.map((step, index) => (
                <RevealItem key={step.title} className="relative">
                  <p className={`font-display text-3xl font-semibold ${accentClasses.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold text-ss-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ss-muted">{step.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              What You&apos;ll Receive
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {offering.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3 text-sm text-ss-text">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentClasses.dot}`} />
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <EngagementModel items={offering.engagementModel} accent={offering.theme.accent} />

      <section className="relative overflow-hidden border-t border-ss-border py-24 sm:py-32">
        <AmbientVisual
          visual={offering.theme.visual}
          color={accentColor}
          className="left-[-80px] bottom-0 hidden h-72 w-72 opacity-[0.18] lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-16 hidden h-72 w-72 lg:block"
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
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Technologies We Use
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ss-muted">
              The tools and platforms our {offering.name} team works in day to day.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 flex flex-col gap-10">
            {offering.techStack.map((group) => (
              <RevealItem key={group.category}>
                <p className={`font-mono text-xs uppercase tracking-[0.25em] ${accentClasses.text}`}>
                  {group.category}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className={`group flex flex-col items-center gap-3 rounded-xl border border-ss-border bg-ss-surface/60 px-4 py-6 text-center transition-colors duration-300 hover:bg-ss-surface ${accentClasses.hoverBorder}`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ss-border bg-ss-base transition-colors duration-300 ${accentClasses.text}`}
                      >
                        <TechIcon
                          name={item}
                          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                        />
                      </span>
                      <span className="font-display text-sm font-medium text-ss-text">{item}</span>
                    </div>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={offering.faqs} accent={offering.theme.accent} />
          </div>
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
                    className={`group flex h-full flex-col rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors ${ACCENT_CLASSES[item.theme.accent].hoverBorder}`}
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
