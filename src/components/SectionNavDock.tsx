"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";

type DockItem =
  | { type: "anchor"; id: string; label: string; icon: ReactNode }
  | { type: "link"; href: string; label: string; icon: ReactNode };

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

const dockItems: DockItem[] = [
  {
    type: "anchor",
    id: "home",
    label: "Home",
    icon: (
      <svg {...iconProps}>
        <path d="M3 11l9-7 9 7M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "about",
    label: "About",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c1.2-3.8 4-5.5 7-5.5S18.8 16.2 20 20" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "services",
    label: "Services",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "playbook-generator",
    label: "Playbook Generator",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "managed-mode",
    label: "Managed Mode",
    icon: (
      <svg {...iconProps}>
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M12 9v3M6 15v-3h12v3" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "automation",
    label: "Automation Use Cases",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "approach",
    label: "Approach",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="12" cy="4" r="1.5" />
        <circle cx="19" cy="15" r="1.5" />
        <circle cx="5" cy="15" r="1.5" />
        <path d="M12 6.5V10M17.7 14.2l-3.3-1.8M6.3 14.2l3.3-1.8" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "process",
    label: "Process",
    icon: (
      <svg {...iconProps}>
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "portfolio",
    label: "Work",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    type: "anchor",
    id: "console",
    label: "Live Console",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3M13 15h4" />
      </svg>
    ),
  },
  {
    type: "link",
    href: "/pricing",
    label: "Pricing",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const anchorItems = dockItems.filter(
  (item): item is Extract<DockItem, { type: "anchor" }> => item.type === "anchor"
);

export function SectionNavDock() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);

      let current = anchorItems[0].id;
      for (const item of anchorItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = item.id;
        }
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(id: string) {
    if (id === "home") {
      lenis?.scrollTo(0);
    } else {
      lenis?.scrollTo(`#${id}`, { offset: -90 });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-6 z-40 hidden flex-col gap-1 rounded-2xl border border-ss-border bg-ss-surface-2/90 p-2 backdrop-blur-md lg:flex"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      {dockItems.map((item) => {
        const isActive = item.type === "anchor" && active === item.id;
        const content = (
          <>
            {isActive && (
              <motion.span
                layoutId="dock-active"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-xl bg-ss-teal"
              />
            )}
            <span className={`relative transition-colors ${isActive ? "text-ss-base" : ""}`}>
              {item.icon}
            </span>
          </>
        );

        const className = `relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
          isActive ? "text-ss-base" : "text-ss-muted hover:bg-ss-base hover:text-ss-mint"
        }`;

        if (item.type === "link") {
          return (
            <Link key={item.href} href={item.href} aria-label={item.label} title={item.label} className={className}>
              {content}
            </Link>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            title={item.label}
            onClick={() => goTo(item.id)}
            className={className}
          >
            {content}
          </button>
        );
      })}
    </motion.div>
  );
}
