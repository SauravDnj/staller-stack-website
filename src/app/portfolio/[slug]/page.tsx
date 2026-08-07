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

  const industry = getIndustryBySlug(project.industrySlug);
  const otherProjects = projects.filter((p) => p.slug !== project.slug);

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
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-ss-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-ss-border bg-ss-surface/60 p-5 sm:gap-6 sm:p-8 sm:grid-cols-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                  Client
                </p>
                <p className="mt-2 text-sm text-ss-text">{project.client}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                  Timeline
                </p>
                <p className="mt-2 text-sm text-ss-text">{project.timeline}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                  Industry
                </p>
                {industry ? (
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="mt-2 block text-sm text-ss-mint hover:underline"
                  >
                    {industry.name}
                  </Link>
                ) : (
                  <p className="mt-2 text-sm text-ss-text">—</p>
                )}
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                  Category
                </p>
                <p className="mt-2 text-sm text-ss-text">{project.category}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

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

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
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

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ss-border bg-ss-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ss-muted"
                >
                  {tech}
                </span>
              ))}
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
