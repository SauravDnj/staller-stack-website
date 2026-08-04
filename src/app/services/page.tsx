import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Staller Stack",
  description:
    "Web & app development, cloud & DevOps, cybersecurity, and AI & ML solutions — tailored technology services from Staller Stack.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Solutions"
        heading="Tailored Technology Solutions for Modern Businesses."
        subtext="Four core disciplines, one accountable team — from first architecture diagram to production support."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <TiltCard className="h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                      <SpinningIcon>
                        <ServiceIcon icon={service.icon} />
                      </SpinningIcon>
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold text-ss-text">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm text-ss-muted">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-block font-display text-sm text-ss-teal">
                      Learn more →
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
