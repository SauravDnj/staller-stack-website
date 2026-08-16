"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { FiCheck, FiFileText } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";
import type { LegalDocument as LegalDocumentType } from "@/content/legal";

const CYCLE_ACCENTS: AccentKey[] = ["teal", "cyan", "amber", "indigo", "mint", "blue"];

function slugify(title: string) {
  return title
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseTitle(title: string) {
  const match = title.match(/^(\d+)\.\s*(.*)$/);
  return match ? { number: match[1], label: match[2] } : { number: null, label: title };
}

export function LegalDocument({ document }: { document: LegalDocumentType }) {
  const lenis = useLenis();
  const [activeId, setActiveId] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const items = document.sections.map((section) => ({
    ...section,
    id: slugify(section.title),
    parsed: parseTitle(section.title),
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function goToSection(id: string) {
    const el = sectionRefs.current[id];
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -110, duration: 1 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className="relative overflow-hidden pb-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-teal)_10%,transparent),_transparent_60%)]" />
      <Container className="relative">
        <Reveal>
          <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ss-teal/15 text-ss-teal">
                <FiFileText className="h-5 w-5" />
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
                Effective Date: {document.effective}
                <span className="mx-2 text-ss-border">·</span>
                Last Updated: {document.updated}
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ss-muted sm:text-base">
              {document.intro}
            </p>
          </div>
        </Reveal>

        <div className="mb-2 -mx-6 mt-8 overflow-x-auto px-6 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                  activeId === item.id
                    ? "border-ss-teal bg-ss-teal/10 text-ss-teal"
                    : "border-ss-border text-ss-muted"
                }`}
              >
                {item.parsed.number ? `${item.parsed.number}. ` : ""}
                {item.parsed.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <div className="hidden lg:block">
            <div className="sticky top-28 flex max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto pr-2">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ss-muted">
                On This Page
              </p>
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    activeId === item.id
                      ? "bg-ss-teal/10 font-medium text-ss-teal"
                      : "text-ss-muted hover:bg-ss-surface hover:text-ss-text"
                  }`}
                >
                  {item.parsed.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {items.map((item, index) => {
              const accent = CYCLE_ACCENTS[index % CYCLE_ACCENTS.length];
              const accentClasses = ACCENT_CLASSES[accent];
              return (
                <Reveal key={item.id} delay={Math.min((index % 4) * 0.05, 0.15)}>
                  <div
                    id={item.id}
                    ref={(el) => {
                      sectionRefs.current[item.id] = el;
                    }}
                    className={`scroll-mt-28 rounded-2xl border border-ss-border bg-ss-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${accentClasses.hoverBorder}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold ${accentClasses.bgSoft} ${accentClasses.text}`}
                      >
                        {item.parsed.number ?? <FiCheck className="h-4 w-4" />}
                      </span>
                      <h2 className="font-display text-lg font-semibold text-ss-text sm:text-xl">
                        {item.parsed.label}
                      </h2>
                    </div>
                    <div className="mt-5 flex flex-col gap-4">
                      {item.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="text-sm leading-relaxed text-ss-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {item.list && (
                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {item.list.map((listItem) => (
                          <li
                            key={listItem}
                            className="flex items-start gap-2.5 rounded-lg bg-ss-base/60 px-3 py-2 text-sm text-ss-text"
                          >
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentClasses.dot}`}
                            />
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
