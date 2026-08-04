/** Slow-drifting blurred gradient blobs for section-background atmosphere. */
export function AmbientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full opacity-[0.13] blur-[110px]"
        style={{
          background: "var(--ss-teal)",
          animation: "drift 26s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
        }}
      />
      <div
        className="absolute -right-36 top-24 h-[440px] w-[440px] rounded-full opacity-[0.11] blur-[110px]"
        style={{
          background: "var(--ss-cyan)",
          animation: "drift 32s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate-reverse",
        }}
      />
    </div>
  );
}
