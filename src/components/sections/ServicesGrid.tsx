import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Our Solutions"
              title="Tailored Technology Solutions for Modern Businesses."
            />
          </Reveal>
          <Link
            href="/services"
            className="font-display text-sm text-ss-teal hover:text-ss-mint"
          >
            More Services →
          </Link>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <RevealItem key={service.slug}>
              <Link href={`/services/${service.slug}`}>
                <TiltCard className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                    <SpinningIcon>
                      <ServiceIcon icon={service.icon} />
                    </SpinningIcon>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ss-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-ss-muted">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-ss-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-ss-teal" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-ss-border pt-5">
                    {service.techStack
                      .flatMap((group) => group.items)
                      .slice(0, 6)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-base px-3 py-1.5 font-mono text-xs text-ss-text"
                        >
                          <TechIcon name={tech} className="h-3.5 w-3.5 text-ss-teal" />
                          {tech}
                        </span>
                      ))}
                  </div>
                </TiltCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
