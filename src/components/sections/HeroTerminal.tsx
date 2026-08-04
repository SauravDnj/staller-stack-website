"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/ui/Terminal";
import { useTypewriter } from "@/lib/useTypewriter";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { heroTerminal } from "@/content/home";

function renderTerminalLine(text: string) {
  if (text.startsWith("$ ")) {
    return (
      <>
        <span className="text-ss-teal">$</span>
        <span className="text-ss-text">{" " + text.slice(2)}</span>
      </>
    );
  }

  if (text === "{" || text === "}") {
    return <span className="text-ss-muted">{text}</span>;
  }

  const kv = text.match(/^(\s*)"([^"]+)":\s*"([^"]*)"(,?)\s*$/);
  if (kv) {
    const [, indent, key, value, comma] = kv;
    return (
      <>
        {indent}
        <span className="text-ss-cyan">&quot;{key}&quot;</span>
        <span className="text-ss-muted">{": "}</span>
        <span className="text-ss-amber">&quot;{value}&quot;</span>
        <span className="text-ss-muted">{comma}</span>
      </>
    );
  }

  if (text === "Staller Stack") {
    return <span className="font-semibold text-ss-mint">{text}</span>;
  }

  return <span className="text-ss-muted">{text}</span>;
}

function TechTag({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`${className} z-10 rounded-full border border-ss-border bg-ss-surface px-4 py-2 font-mono text-xs text-ss-text shadow-lg`}
    >
      {label}
    </span>
  );
}

export function HeroTerminal() {
  const reducedMotion = useReducedMotion();
  const { completedLines, activeLine, activeText } = useTypewriter(
    heroTerminal.lines,
    !reducedMotion
  );

  const shownCompleted = reducedMotion ? heroTerminal.lines.slice(0, -1) : completedLines;
  const shownActive = reducedMotion ? heroTerminal.lines[heroTerminal.lines.length - 1] : activeLine;
  const shownActiveText = reducedMotion ? shownActive?.text ?? "" : activeText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-4xl"
    >
      <div
        className="pointer-events-none absolute -inset-10 rounded-[2rem] opacity-60 blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(45,212,191,0.25), transparent 70%)",
        }}
      />

      <TechTag label={heroTerminal.tags[0]} className="absolute -left-4 -top-4 sm:-left-6 sm:-top-5" />
      <TechTag label={heroTerminal.tags[1]} className="absolute -right-4 -top-4 sm:-right-6 sm:-top-5" />
      <TechTag label={heroTerminal.tags[2]} className="absolute -left-4 top-[68%] sm:-left-8" />

      <Terminal title={heroTerminal.title} className="relative">
        <div className="h-[340px] overflow-hidden whitespace-pre font-mono text-base leading-relaxed sm:h-[420px] sm:text-lg">
          {shownCompleted.map((line, i) => (
            <div key={i}>{renderTerminalLine(line.text)}</div>
          ))}

          {shownActive && (
            <div className="text-ss-text">
              {shownActiveText}
              <span
                aria-hidden
                className="ml-0.5 inline-block h-4 w-2 translate-y-[3px] animate-[pulse-soft_1s_step-end_infinite] bg-ss-teal align-middle"
              />
            </div>
          )}
        </div>
      </Terminal>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 -mt-7 ml-8 mr-8 flex items-center justify-between gap-4 rounded-xl border border-ss-border bg-ss-surface px-6 py-4 shadow-xl sm:ml-12 sm:mr-12"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ss-mint opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-ss-mint" />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-ss-text">
              {heroTerminal.status.title}
            </p>
            <p className="text-sm text-ss-muted">{heroTerminal.status.subtitle}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-ss-border bg-ss-base px-3.5 py-1.5 font-mono text-xs text-ss-teal">
          {heroTerminal.status.badge}
        </span>
      </motion.div>

      <TechTag
        label={heroTerminal.tags[3]}
        className="absolute -bottom-5 -right-4 sm:-bottom-7 sm:-right-6"
      />
    </motion.div>
  );
}
