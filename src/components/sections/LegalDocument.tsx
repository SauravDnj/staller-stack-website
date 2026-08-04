import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { LegalDocument as LegalDocumentType } from "@/content/legal";

export function LegalDocument({ document }: { document: LegalDocumentType }) {
  return (
    <section className="pb-24 sm:pb-32">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
            Last Updated: {document.updated}
          </p>
          <p className="mt-6 text-ss-muted">{document.intro}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {document.sections.map((section, index) => (
            <Reveal key={section.title} delay={Math.min(index * 0.03, 0.3)}>
              <h2 className="font-display text-xl font-semibold text-ss-text">
                {section.title}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-sm text-ss-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-4 flex flex-col gap-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ss-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
