export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-montserrat-logo), Montserrat, sans-serif",
        fontWeight: 700,
        letterSpacing: "-0.5px",
      }}
    >
      <span style={{ color: "#FFFFFF" }}>Staller</span>
      <span style={{ color: "#FFFFFF" }}>Stack</span>
    </span>
  );
}
