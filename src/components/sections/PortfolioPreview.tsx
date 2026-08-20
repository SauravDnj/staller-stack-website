import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectScrollStack } from "@/components/sections/ProjectScrollStack";
import { projects } from "@/content/portfolio";

const PREVIEW_COUNT = 5;

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full opacity-[0.1] blur-[95px]"
          style={{
            background: "var(--ss-amber)",
            animation: "drift 22s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-24 h-52 w-52 rounded-full opacity-[0.1] blur-[90px]"
          style={{
            background: "var(--ss-blue)",
            animation: "drift 28s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate-reverse",
          }}
        />
        <Container className="relative">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Proud Projects"
                title="Breaking Boundaries, Building Solutions."
                description="A few of the products we've shipped recently — scroll to step through them, or see the full archive."
              />
            </Reveal>
            <Button href="/portfolio" variant="outline">
              View All Projects <span aria-hidden>→</span>
            </Button>
          </div>
        </Container>
      </div>

      <ProjectScrollStack projects={projects.slice(0, PREVIEW_COUNT)} />
    </section>
  );
}
