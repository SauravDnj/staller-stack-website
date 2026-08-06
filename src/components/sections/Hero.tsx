"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { HeroTerminal } from "@/components/sections/HeroTerminal";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { heroContent } from "@/content/home";
import { marqueeKeywords } from "@/content/siteConfig";

const ROTATE_INTERVAL = 2600;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroContent.rotatingWords.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-start overflow-hidden bg-ss-base pt-28 sm:pt-32 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,138,138,0.22),_transparent_60%)]" />
      <div
        className="bg-grid-animate pointer-events-none absolute inset-0 opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 60% 40%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 60% 40%, black 10%, transparent 75%)",
        }}
      />
      <AmbientGlow />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-[380px] w-[380px] rounded-full opacity-[0.14] blur-[100px]"
        style={{
          background: "var(--ss-indigo)",
          animation: "drift 20s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
        }}
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:grid-cols-[1fr_1.1fr] xl:gap-16 2xl:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants}>
            <Badge>{heroContent.eyebrow}</Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 font-display text-3xl font-semibold leading-[1.15] text-ss-text sm:text-4xl md:text-5xl xl:text-6xl"
          >
            <span className="block">Building the Future with</span>
            <span className="relative block min-h-[1.1em] w-full overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={wordIndex}
                  initial={{ y: reducedMotion ? 0 : 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: reducedMotion ? 0 : -28, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-gradient block w-full text-[0.8em] leading-[1.15]"
                >
                  {heroContent.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base text-ss-muted sm:text-lg"
          >
            {heroContent.subtext}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <Button href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
              <span aria-hidden>→</span>
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="outline">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <HeroTerminal />
        </div>
      </Container>

      {/* Drifting keyword ticker along the hero floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-24 overflow-hidden opacity-40 sm:bottom-28">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-ss-muted">
          {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center gap-10">
              {word}
              <span className="text-ss-teal">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 hidden justify-center sm:flex"
      >
        <motion.button
          type="button"
          aria-label="Scroll to explore"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ss-border bg-ss-surface/60 text-ss-teal backdrop-blur transition-colors hover:border-ss-teal hover:text-ss-mint"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
