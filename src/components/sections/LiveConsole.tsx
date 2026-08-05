"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/ui/Terminal";
import { useTypewriter } from "@/lib/useTypewriter";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { liveConsole } from "@/content/home";

const STAGE_INTERVAL = 1600;

function PipelineStages() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % liveConsole.stages.length);
    }, STAGE_INTERVAL);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <div className="flex flex-col gap-3">
      {liveConsole.stages.map((stage, i) => {
        const isActive = reducedMotion ? i === liveConsole.stages.length - 1 : i <= active;
        return (
          <div key={stage.label} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.9,
                  backgroundColor: isActive ? "var(--ss-teal)" : "var(--ss-surface)",
                  borderColor: isActive ? "var(--ss-teal)" : "var(--ss-border)",
                }}
                transition={{ duration: 0.4 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border"
              >
                {isActive ? (
                  <span className="h-2 w-2 rounded-full bg-ss-base" />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-ss-border" />
                )}
              </motion.span>
              {i < liveConsole.stages.length - 1 && (
                <span className="h-8 w-px bg-ss-border" />
              )}
            </div>
            <div>
              <p
                className={`font-display text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-ss-mint" : "text-ss-text"
                }`}
              >
                {stage.label}
              </p>
              <p className="text-xs text-ss-muted">{stage.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Command/result lines are highlighted; plain output stays muted — based on content, not position, since the log keeps scrolling and repeating. */
function lineTextClass(text: string) {
  if (text.startsWith("$ ") || text.startsWith("→ ")) return "text-ss-text";
  return "";
}

function ConsoleLog() {
  const reducedMotion = useReducedMotion();
  const { completedLines, activeLine, activeText, activeComplete } = useTypewriter(
    liveConsole.log,
    !reducedMotion
  );

  const shownCompleted = reducedMotion ? liveConsole.log.slice(0, -1) : completedLines;
  const shownActive = reducedMotion ? liveConsole.log[liveConsole.log.length - 1] : activeLine;
  const shownActiveText = reducedMotion ? shownActive?.text ?? "" : activeText;
  const shownActiveComplete = reducedMotion ? true : activeComplete;

  return (
    <div className="flex h-[220px] min-w-0 flex-col justify-end gap-1.5 overflow-hidden font-mono text-[13px] leading-relaxed sm:h-[260px]">
      {shownCompleted.map((line) => (
        <div
          key={"id" in line ? line.id : line.text}
          className={`flex min-w-0 flex-wrap items-center justify-between gap-2 text-ss-muted ${
            reducedMotion ? "" : "animate-[line-in_0.4s_ease-out]"
          }`}
        >
          <span className={lineTextClass(line.text)}>{line.text}</span>
          {line.suffix && (
            <span className="font-mono text-[11px] text-ss-teal">{line.suffix}</span>
          )}
        </div>
      ))}

      {shownActive && (
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 text-ss-muted">
          <span className={lineTextClass(shownActive.text)}>
            {shownActiveText}
            <span
              aria-hidden
              className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] animate-[pulse-soft_1s_step-end_infinite] bg-ss-teal align-middle"
            />
          </span>
          {shownActiveComplete && shownActive.suffix && (
            <span className="font-mono text-[11px] font-semibold text-ss-mint">
              {shownActive.suffix}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export function LiveConsole() {
  return (
    <section id="console" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={liveConsole.eyebrow} title={liveConsole.heading} />
          <p className="mt-4 max-w-2xl text-ss-muted">{liveConsole.subtext}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal delay={0.1} className="flex flex-col justify-between gap-10">
            <PipelineStages />

            <div className="grid grid-cols-3 gap-4 border-t border-ss-border pt-6">
              {liveConsole.highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-xl font-semibold text-gradient">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-ss-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)",
                }}
              />
              <Terminal title="ci — production" className="relative">
                <ConsoleLog />
              </Terminal>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
