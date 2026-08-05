"use client";

import { useEffect, useRef, useState } from "react";

export type TypedLine = {
  text: string;
  /** Rendered after the line finishes typing (e.g. a status tag). */
  suffix?: string;
  /** Extra pause (ms) after this line completes, before the next starts. */
  holdMs?: number;
};

export type CommittedLine = TypedLine & { id: number };

const CHAR_MS = 18;
const LINE_GAP_MS = 260;
const LOOP_HOLD_MS = 1800;
/** Cap on remembered lines so the scrollback never grows unbounded. */
const HISTORY_LIMIT = 60;

/**
 * Types out `lines` one at a time, looping forever. Committed lines are
 * appended to a running history (capped, never reset to empty) so the
 * terminal reads like real scrollback instead of wiping on every loop —
 * only the oldest lines fall off once the cap is hit.
 */
export function useTypewriter(lines: TypedLine[], enabled = true) {
  const [scriptIndex, setScriptIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [history, setHistory] = useState<CommittedLine[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const current = lines[scriptIndex];
    if (!current) return;

    if (charCount < current.text.length) {
      const id = setTimeout(() => setCharCount((c) => c + 1), CHAR_MS);
      return () => clearTimeout(id);
    }

    const isLast = scriptIndex === lines.length - 1;
    const gap = current.holdMs ?? (isLast ? LOOP_HOLD_MS : LINE_GAP_MS);
    const id = setTimeout(() => {
      const committedId = nextId.current++;
      setHistory((h) => {
        const next = [...h, { ...current, id: committedId }];
        return next.length > HISTORY_LIMIT ? next.slice(next.length - HISTORY_LIMIT) : next;
      });
      setScriptIndex(isLast ? 0 : scriptIndex + 1);
      setCharCount(0);
    }, gap);
    return () => clearTimeout(id);
  }, [charCount, scriptIndex, lines, enabled]);

  const activeLine = lines[scriptIndex];
  const activeText = enabled ? activeLine?.text.slice(0, charCount) ?? "" : "";
  const activeComplete = activeLine ? charCount >= activeLine.text.length : false;

  return { completedLines: history, activeLine, activeText, activeComplete };
}
