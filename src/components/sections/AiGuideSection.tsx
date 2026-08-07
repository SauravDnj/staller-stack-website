import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aiGuideCopy } from "@/content/aiGuide";
import { AiGuideWizard } from "@/components/ai-guide/AiGuideWizard";

export function AiGuideSection() {
  return (
    <section id="ai-guide" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={aiGuideCopy.eyebrow}
            title={
              <>
                {aiGuideCopy.headingPrefix}{" "}
                <span className="text-gradient">{aiGuideCopy.headingHighlight}</span>
              </>
            }
            description={aiGuideCopy.subtext}
          />
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-2xl">
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--ss-teal) 18%, transparent), transparent 70%)",
            }}
          />
          <AiGuideWizard />
        </Reveal>
      </Container>
    </section>
  );
}
