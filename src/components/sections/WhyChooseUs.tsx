import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { aboutPage } from "@/content/about";

export function WhyChooseUs() {
  return (
    <section className="border-t border-ss-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Staller Stack"
            title="Why Businesses Choose Us"
            align="center"
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPage.whyChooseUs.map((item) => (
            <RevealItem key={item.title}>
              <TiltCard strength={5} className="h-full">
                <h3 className="font-display text-lg font-semibold text-ss-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ss-muted">{item.description}</p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
