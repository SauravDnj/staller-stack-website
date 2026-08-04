import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getIndustryBySlug, industries } from "@/content/industries";
import { getServiceBySlug } from "@/content/services";
import { projects } from "@/content/portfolio";

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

  return {
    title: `${industry.name} | Staller Stack`,
    description: industry.description,
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

  const relatedServices = industry.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service) => service !== undefined);

  const relatedProjects = projects.filter(
    (project) => project.industrySlug === industry.slug
  );

  return (
    <>
      <PageHeader
        eyebrow="Industries We Empower"
        heading={industry.name}
        subtext={industry.description}
      />

      <section className="pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-surface">
              <IndustryIcon icon={industry.icon} />
            </div>
            <h2 className="mt-8 font-display text-2xl font-semibold text-ss-text">
              Common Challenges
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {industry.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 text-sm text-ss-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-border" />
                  {challenge}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              How We Help
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {industry.solutions.map((solution) => (
                <li
                  key={solution}
                  className="flex items-start gap-3 text-sm text-ss-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                  {solution}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

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
                    className="group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors hover:border-ss-teal"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-ss-teal">
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
                  <Card className="h-full !p-6">
                    <p className="font-display text-sm font-semibold text-ss-text">
                      {service.title}
                    </p>
                    <p className="mt-2 text-xs text-ss-muted">
                      {service.description}
                    </p>
                  </Card>
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
