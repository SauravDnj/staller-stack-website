import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { aboutPage } from "@/content/about";

export function StoryValues() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ss-text sm:text-3xl">
            {aboutPage.storyHeading}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {aboutPage.storyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-ss-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aboutPage.values.map((value) => (
            <RevealItem key={value.title}>
              <TiltCard strength={5} className="h-full">
                <h3 className="font-display text-lg font-semibold text-ss-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ss-muted">
                  {value.description}
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
