import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Staller Stack",
  description:
    "Web & app development, cloud & DevOps, security & compliance, and AI & ML solutions — tailored technology services from Staller Stack.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Solutions"
        heading="Tailored Technology Solutions for Modern Businesses."
        subtext="Nine disciplines, one accountable team — from first architecture diagram to production support."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <RevealItem key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <TiltCard className="h-full" accent={service.theme.accent}>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                        <SpinningIcon>
                          <ServiceIcon icon={service.icon} />
                        </SpinningIcon>
                      </div>
                      <span className="font-mono text-xs text-ss-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold text-ss-text">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm text-ss-muted">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.techStack
                        .flatMap((group) => group.items)
                        .slice(0, 8)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-surface px-3 py-1.5 font-mono text-xs text-ss-text"
                          >
                            <TechIcon name={tech} className="h-3.5 w-3.5 text-ss-teal" />
                            {tech}
                          </span>
                        ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm text-ss-teal">
                      Learn more
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </TiltCard>
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
