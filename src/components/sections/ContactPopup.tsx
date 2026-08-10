"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { ContactForm } from "@/components/sections/ContactForm";

const STORAGE_KEY = "ss-contact-popup-shown";
const MIN_DELAY_MS = 30_000;
const MAX_DELAY_MS = 60_000;

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Contact us"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-ss-border bg-ss-surface p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-ss-border bg-ss-surface text-ss-muted transition-colors hover:border-ss-teal hover:text-ss-mint"
            >
              <FiX className="h-4 w-4" />
            </button>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              Before You Go
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ss-text">
              Have a Project in Mind?
            </h2>
            <p className="mt-2 text-sm text-ss-muted">
              Drop your details and we&apos;ll get back to you within one
              business day.
            </p>

            <div className="mt-6">
              <ContactForm compact />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
