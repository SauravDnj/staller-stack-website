import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { pricingFaqs } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing | Staller Stack",
  description:
    "Simple, transparent plans for web development, cloud, cybersecurity, and AI engagements — or a custom scope built around your project.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing Plan"
        heading="Flexible Plans for Every Business."
        subtext="Every plan includes a dedicated team, transparent reporting, and no long-term lock-in. Need something more specific? We'll scope a custom engagement instead."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <PricingCards />
        </Container>
      </section>

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Pricing FAQ" title="Common Questions." />
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={[...pricingFaqs]} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
