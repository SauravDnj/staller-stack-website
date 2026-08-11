"use client";

import { motion, type Variants } from "framer-motion";

const checkVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

/** A checkmark that draws itself in once its parent Reveal/RevealItem enters view. */
export function AnimatedCheck({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.path variants={checkVariants} d="M5 13l4 4L19 7" />
    </svg>
  );
}
