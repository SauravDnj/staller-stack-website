import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries | Staller Stack",
  description:
    "From healthcare to fintech to logistics — Staller Stack builds technology tailored to the compliance, scale, and workflow demands of your industry.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Empower"
        heading="Technology Built Around Your Industry's Reality."
        subtext="Every industry has its own compliance requirements, scale demands, and legacy constraints. We've shipped production systems across all of these — here's what that looks like."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <Link href={`/industries/${industry.slug}`}>
                  <TiltCard className="h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                      <IndustryIcon icon={industry.icon} />
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold text-ss-text">
                      {industry.name}
                    </h2>
                    <p className="mt-3 text-sm text-ss-muted">
                      {industry.description}
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
