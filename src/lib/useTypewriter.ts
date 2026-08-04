"use client";

import { useEffect, useState } from "react";

export type TypedLine = {
  text: string;
  /** Rendered after the line finishes typing (e.g. a status tag). */
  suffix?: string;
  /** Extra pause (ms) after this line completes, before the next starts. */
  holdMs?: number;
};

const CHAR_MS = 18;
const LINE_GAP_MS = 260;
const LOOP_HOLD_MS = 1800;

/**
 * Types out `lines` one at a time, looping forever. Returns the lines
 * fully committed so far plus the in-progress text of the active line,
 * so callers can render completed lines statically and only animate the tail.
 */
export function useTypewriter(lines: TypedLine[], enabled = true) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const current = lines[lineIndex];
    if (!current) return;

    if (charCount < current.text.length) {
      const id = setTimeout(() => setCharCount((c) => c + 1), CHAR_MS);
      return () => clearTimeout(id);
    }

    const isLast = lineIndex === lines.length - 1;
    const gap = current.holdMs ?? (isLast ? LOOP_HOLD_MS : LINE_GAP_MS);
    const id = setTimeout(() => {
      setLineIndex(isLast ? 0 : lineIndex + 1);
      setCharCount(0);
    }, gap);
    return () => clearTimeout(id);
  }, [charCount, lineIndex, lines, enabled]);

  const completedLines = lines.slice(0, lineIndex);
  const activeLine = lines[lineIndex];
  const activeText = enabled ? activeLine?.text.slice(0, charCount) ?? "" : "";
  const activeComplete = activeLine ? charCount >= activeLine.text.length : false;

  return { completedLines, activeLine, activeText, activeComplete };
}
