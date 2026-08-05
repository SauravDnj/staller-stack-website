import { ReactNode } from "react";

/** macOS-style terminal chrome (traffic-light dots + tab bar) wrapping any body content. */
export function Terminal({
  title,
  children,
  className = "",
  bodyClassName = "p-7",
}: {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/90 shadow-2xl shadow-black/40 backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-ss-border bg-ss-surface-2/80 px-6 py-4">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-sm text-ss-muted">{title}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
