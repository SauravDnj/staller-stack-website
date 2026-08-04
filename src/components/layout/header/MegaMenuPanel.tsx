"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export function MegaMenuPanel({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  isOpen: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-0 top-full z-40 w-full border-t border-ss-border bg-ss-surface-2 shadow-2xl"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
