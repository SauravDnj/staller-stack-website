import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/portfolio";

export function CaseStudyList() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Link href={`/portfolio/${project.slug}`} className="block">
              <Tilt strength={5} className="rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ss-border bg-ss-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
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
