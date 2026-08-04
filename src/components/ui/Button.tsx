import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ss-teal text-ss-base hover:bg-ss-mint shadow-[0_0_24px_-6px_var(--ss-teal)] hover:shadow-[0_0_28px_-4px_var(--ss-mint)]",
  outline:
    "border border-ss-border text-ss-text hover:border-ss-teal hover:text-ss-mint",
  ghost: "text-ss-text hover:text-ss-mint",
};

const baseClasses =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium tracking-wide transition-all duration-300";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
