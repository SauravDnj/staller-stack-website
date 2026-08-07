"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

export function FaqAccordion({
  items,
  accent = "teal",
}: {
  items: { question: string; answer: string }[];
  accent?: AccentKey;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const accentText = ACCENT_CLASSES[accent].text;

  return (
    <RevealGroup className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <RevealItem key={item.question}>
            <div className="overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-sm font-semibold text-ss-text sm:text-base">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 text-xl ${accentText}`}
                  aria-hidden
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-ss-muted">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
