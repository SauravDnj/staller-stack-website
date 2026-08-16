import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { generalFaqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ | Staller Stack",
  description:
    "Answers to common questions about working with Staller Stack — services, timelines, security, and support.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        heading="Questions, Answered."
        subtext="Can't find what you're looking for? Reach out on the Contact page and we'll get back to you within one business day."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="General" title="About Working With Us" />
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={[...generalFaqs]} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
