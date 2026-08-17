import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { aboutPage } from "@/content/about";

export function MissionVision() {
  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="What Drives Us" title="Mission & Vision" align="center" />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RevealItem>
            <TiltCard strength={5} className="h-full" accent="teal">
              <h3 className="font-display text-lg font-semibold text-ss-text">Our Mission</h3>
              <p className="mt-3 text-sm text-ss-muted">{aboutPage.mission}</p>
            </TiltCard>
          </RevealItem>
          <RevealItem>
            <TiltCard strength={5} className="h-full" accent="mint">
              <h3 className="font-display text-lg font-semibold text-ss-text">Our Vision</h3>
              <p className="mt-3 text-sm text-ss-muted">{aboutPage.vision}</p>
            </TiltCard>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
