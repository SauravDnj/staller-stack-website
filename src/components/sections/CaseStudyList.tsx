import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { projects } from "@/content/portfolio";

export function CaseStudyList() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Link href={`/portfolio/${project.slug}`} className="block">
              <Tilt
                strength={5}
                className="overflow-hidden rounded-2xl border border-ss-border bg-ss-surface"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </Tilt>
            </Link>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-ss-teal">
                {project.category}
              </span>
              <Link href={`/portfolio/${project.slug}`}>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ss-text transition-colors hover:text-ss-mint sm:text-3xl">
                  {project.title}
                </h2>
              </Link>
              <p className="mt-4 text-ss-muted">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-surface px-3 py-1.5 font-mono text-xs text-ss-text"
                  >
                    <TechIcon name={tech} className="h-3.5 w-3.5 text-ss-teal" />
                    {tech}
                  </span>
                ))}
              </div>

              {project.keyFeatures && project.keyFeatures.length > 0 ? (
                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
                    Key Features
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.keyFeatures.slice(0, 6).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-ss-text"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : project.results && project.results.length > 0 ? (
                <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-ss-border bg-ss-surface/60 p-4 sm:grid-cols-4">
                  {project.results.map((result) => (
                    <div key={result.label}>
                      <p className="font-display text-lg font-semibold text-ss-teal">
                        {result.value}
                      </p>
                      <p className="text-xs text-ss-muted">{result.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`/portfolio/${project.slug}`} variant="outline">
                  View Case Study <span aria-hidden>→</span>
                </Button>
                <Button href="/contact" variant="ghost">
                  Start a Similar Project <span aria-hidden>→</span>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
