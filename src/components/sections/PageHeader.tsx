import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  heading,
  subtext,
}: {
  eyebrow: string;
  heading: string;
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,138,138,0.2),_transparent_60%)]" />
      <Container className="relative max-w-3xl">
        <Reveal>
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ss-text sm:text-5xl">
            {heading}
          </h1>
          {subtext && <p className="mt-6 text-lg text-ss-muted">{subtext}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
