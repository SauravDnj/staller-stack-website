import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ss-border bg-ss-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ss-teal">
      <span className="h-1.5 w-1.5 rounded-full bg-ss-mint" />
      {children}
    </span>
  );
}
