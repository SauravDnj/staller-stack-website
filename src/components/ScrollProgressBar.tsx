"use client";

import { useLenis } from "lenis/react";
import { motion, useMotionValue } from "framer-motion";

/**
 * Thin bar tracking overall page scroll progress. Uses a Framer Motion
 * value (not React state) so it updates every scroll frame without
 * triggering a re-render.
 */
export function ScrollProgressBar() {
  const progress = useMotionValue(0);

  useLenis((lenis) => {
    progress.set(lenis.progress);
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="h-full w-full bg-gradient-to-r from-ss-teal to-ss-mint"
      />
    </div>
  );
}
