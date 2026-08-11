import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { DeliverablesShowcase } from "@/components/sections/DeliverablesShowcase";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { getServiceBySlug, services } from "@/content/services";
import { industries } from "@/content/industries";
import { siteConfig } from "@/content/siteConfig";
import { ACCENT_CLASSES } from "@/lib/accentTheme";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = service.seo.metaTitle;
  const description = service.seo.metaDescription;
  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title,
    description,
    keywords: service.seo.keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const accentClasses = ACCENT_CLASSES[service.theme.accent];
  const relatedServices = services.filter((s) => s.slug !== service.slug);
  const relatedIndustries = industries.filter((industry) =>
    industry.relatedServiceSlugs.includes(service.slug)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero service={service} />

      <StatsStrip stats={service.stats} accent={service.theme.accent} />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              What&apos;s Included
            </h2>
          </Reveal>
          <RevealGroup className="mt-6 grid grid-cols-1 divide-y divide-ss-border overflow-hidden rounded-2xl border border-ss-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {service.bullets.map((bullet) => (
              <RevealItem
                key={bullet}
                className="flex items-start gap-3 bg-ss-surface/60 p-6 transition-colors duration-300 hover:bg-ss-surface"
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accentClasses.bgSoft}`}
                >
                  <AnimatedCheck className={`h-3.5 w-3.5 ${accentClasses.text}`} />
                </span>
                <p className="font-display text-sm font-medium text-ss-text">{bullet}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <ProcessSteps steps={service.process} accent={service.theme.accent} />

      <DeliverablesShowcase deliverables={service.deliverables} accent={service.theme.accent} />

      <EngagementModel items={service.engagementModel} accent={service.theme.accent} />

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Technologies We Use
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ss-muted">
              The tools and platforms our {service.title} team works in day to day.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 flex flex-col gap-10">
            {service.techStack.map((group) => (
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

      {relatedIndustries.length > 0 && (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Industries We Apply This To
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <RevealItem key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className={`group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 ${accentClasses.hoverBorder}`}
                  >
                    <p className="font-display text-sm font-semibold text-ss-text group-hover:text-ss-mint">
                      {industry.name}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={[...service.faqs]} accent={service.theme.accent} />
          </div>
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Explore Other Services
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <RevealItem key={related.slug}>
                <Link
                  href={`/services/${related.slug}`}
                  className={`group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 ${ACCENT_CLASSES[related.theme.accent].hoverBorder}`}
                >
                  <p className="font-display text-sm font-semibold text-ss-text group-hover:text-ss-mint">
                    {related.title}
                  </p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
