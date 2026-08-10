import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { IndustryHero } from "@/components/sections/IndustryHero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DEFAULT_INDUSTRY_THEME, getIndustryBySlug, industries } from "@/content/industries";
import { getServiceBySlug } from "@/content/services";
import { projects } from "@/content/portfolio";
import { siteConfig } from "@/content/siteConfig";
import { ACCENT_CLASSES } from "@/lib/accentTheme";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const title = industry.seo?.metaTitle ?? `${industry.name} | Staller Stack`;
  const description = industry.seo?.metaDescription ?? industry.description;
  const url = `${siteConfig.url}/industries/${industry.slug}`;

  return {
    title,
    description,
    keywords: industry.seo?.keywords,
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const { accent } = industry.theme ?? DEFAULT_INDUSTRY_THEME;
  const accentClasses = ACCENT_CLASSES[accent];

  const relatedServices = industry.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service) => service !== undefined);

  const relatedProjects = projects.filter(
    (project) => project.industrySlug === industry.slug
  );

  const jsonLdGraph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      name: `Software Development for ${industry.name}`,
      description: industry.seo?.metaDescription ?? industry.description,
      provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      areaServed: "Worldwide",
      url: `${siteConfig.url}/industries/${industry.slug}`,
    },
  ];

  if (industry.faqs && industry.faqs.length > 0) {
    jsonLdGraph.push({
      "@type": "FAQPage",
      mainEntity: industry.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": jsonLdGraph };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <IndustryHero industry={industry} />

      {industry.stats && <StatsStrip stats={industry.stats} accent={accent} />}

      {industry.problemsSolved ? (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Where {industry.name} Projects Get Stuck
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-ss-muted">
                The recurring problems we see in this space — and the approach we take to each one.
              </p>
            </Reveal>
            <RevealGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {industry.problemsSolved.map((item, index) => (
                <RevealItem
                  key={item.challenge}
                  className={`overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 transition-colors duration-300 ${accentClasses.hoverBorder}`}
                >
                  <div className="p-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ss-muted">
                      Challenge {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm text-ss-text">{item.challenge}</p>
                  </div>
                  <div className={`border-t border-ss-border p-6 ${accentClasses.bgSoft}`}>
                    <span className={`font-mono text-xs uppercase tracking-[0.2em] ${accentClasses.text}`}>
                      Our Approach
                    </span>
                    <p className="mt-2 text-sm text-ss-text">{item.solution}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ) : (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Common Challenges
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-sm text-ss-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-border" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ss-text">How We Help</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {industry.solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3 text-sm text-ss-text">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                    {solution}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                {industry.name} Case Studies
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {relatedProjects.map((project) => (
                <RevealItem key={project.slug}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className={`group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors ${accentClasses.hoverBorder}`}
                  >
                    <span className={`font-mono text-xs uppercase tracking-wider ${accentClasses.text}`}>
                      {project.category}
                    </span>
                    <p className="mt-2 font-display text-sm font-semibold text-ss-text group-hover:text-ss-mint">
                      {project.title}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Relevant Services
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedServices.map((service) => (
              <RevealItem key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <Card className={`h-full !p-6 transition-colors duration-300 ${accentClasses.hoverBorder}`}>
                    <p className="font-display text-sm font-semibold text-ss-text">
                      {service.title}
                    </p>
                    <p className="mt-2 text-xs text-ss-muted">{service.description}</p>
                  </Card>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {industry.faqs && (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="mt-8">
              <FaqAccordion items={industry.faqs} accent={accent} />
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
