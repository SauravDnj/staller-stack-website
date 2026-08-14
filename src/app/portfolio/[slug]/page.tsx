import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getProjectBySlug, projects } from "@/content/portfolio";
import { getIndustryBySlug } from "@/content/industries";
import { TECH_ICONS } from "@/lib/techIcons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Staller Stack`,
    description: project.description,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const industry = project.industrySlug
    ? getIndustryBySlug(project.industrySlug)
    : undefined;
  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  const infoItems: { label: string; value: string; href?: string }[] = [
    { label: "Category", value: project.category },
    ...(project.client ? [{ label: "Client", value: project.client }] : []),
    ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : []),
    ...(industry
      ? [
          {
            label: "Industry",
            value: industry.name,
            href: `/industries/${industry.slug}`,
          },
        ]
      : []),
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-teal)_20%,transparent),_transparent_60%)]" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Badge>{project.category}</Badge>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ss-text sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-ss-muted">{project.description}</p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-ss-border bg-ss-surface">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className={`mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-ss-border bg-ss-surface/60 p-5 sm:gap-6 sm:p-8 ${
                infoItems.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
              }`}
            >
              {infoItems.map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-2 block text-sm text-ss-mint hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-2 text-sm text-ss-text">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {project.challenge && project.solution ? (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                The Challenge
              </h2>
              <p className="mt-4 text-ss-muted">{project.challenge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                The Solution
              </h2>
              <p className="mt-4 text-ss-muted">{project.solution}</p>
            </Reveal>
          </Container>
        </section>
      ) : project.purpose ? (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Project Overview
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {project.purpose.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="text-ss-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {project.functionality ? (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                How It Works
              </h2>
              <p className="mt-4 text-ss-muted">{project.functionality}</p>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {project.keyFeatures && project.keyFeatures.length > 0 ? (
        <section className="border-t border-ss-border py-24 sm:py-32">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Key Features
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex items-start gap-3 rounded-xl border border-ss-border bg-ss-surface/60 p-5">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ss-teal/15 text-xs text-ss-teal"
                    >
                      ✓
                    </span>
                    <p className="text-sm text-ss-muted">{feature}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          {project.results && project.results.length > 0 ? (
            <>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-ss-text">
                  Results
                </h2>
              </Reveal>
              <RevealGroup className="mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
                {project.results.map((result) => (
                  <RevealItem key={result.label}>
                    <p className="font-display text-3xl font-semibold text-ss-mint sm:text-4xl">
                      {result.value}
                    </p>
                    <p className="mt-2 text-sm text-ss-muted">{result.label}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </>
          ) : (
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ss-text">
                Technology
              </h2>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <div className={project.results?.length ? "mt-14 flex flex-wrap gap-3" : "mt-8 flex flex-wrap gap-3"}>
              {project.techStack.map((tech) => {
                const Icon = TECH_ICONS[tech];
                return (
                  <span
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-ss-border bg-ss-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ss-muted transition-colors hover:border-ss-teal hover:text-ss-mint"
                  >
                    {Icon && <Icon className="h-4 w-4 text-ss-teal" aria-hidden />}
                    {tech}
                  </span>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Button href="/contact" className="mt-10">
              Start a Similar Project <span aria-hidden>→</span>
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              More Case Studies
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherProjects.map((other) => (
              <RevealItem key={other.slug}>
                <Link
                  href={`/portfolio/${other.slug}`}
                  className="group block rounded-xl border border-ss-border bg-ss-surface/60 p-5 transition-colors hover:border-ss-teal"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                    {other.category}
                  </span>
                  <p className="mt-2 font-display text-sm font-semibold text-ss-text group-hover:text-ss-mint">
                    {other.title}
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
