import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getServiceBySlug, services } from "@/content/services";
import { industries } from "@/content/industries";

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

  return {
    title: `${service.title} | Staller Stack`,
    description: service.description,
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

  const relatedServices = services.filter((s) => s.slug !== service.slug);
  const relatedIndustries = industries.filter((industry) =>
    industry.relatedServiceSlugs.includes(service.slug)
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Solutions"
        heading={service.title}
        subtext={service.description}
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-surface">
              <SpinningIcon>
                <ServiceIcon icon={service.icon} />
              </SpinningIcon>
            </div>
            <h2 className="mt-8 font-display text-2xl font-semibold text-ss-text">
              What&apos;s Included
            </h2>
          </Reveal>
          <RevealGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {service.bullets.map((bullet) => (
              <RevealItem key={bullet}>
                <Card>
                  <p className="font-display text-sm font-medium text-ss-text">
                    {bullet}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              How We Work
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <RevealItem key={step.title}>
                <p className="font-display text-3xl font-semibold text-ss-border">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-ss-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ss-muted">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              What You&apos;ll Receive
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-start gap-3 text-sm text-ss-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Tech Stack
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ss-border bg-ss-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ss-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
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
                    className="group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors hover:border-ss-teal"
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
            <FaqAccordion items={[...service.faqs]} />
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
                  className="group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors hover:border-ss-teal"
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
