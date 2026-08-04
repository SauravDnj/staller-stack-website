"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Wraps an icon in a real 3D-space rotation (rotateY, with perspective) —
 * a reliable CSS alternative to a WebGL icon: genuinely 3D motion, no GL
 * context required, so it can repeat freely across a grid without the
 * context-exhaustion issues a WebGL-per-icon approach ran into.
 */
export function SpinningIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{ perspective: 400 }}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
