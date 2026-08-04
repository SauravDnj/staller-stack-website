"use client";

import { ReactNode, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";

type DockItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

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
    id: "home",
    label: "Home",
    icon: (
      <svg {...iconProps}>
        <path d="M3 11l9-7 9 7M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    id: "services",
    label: "Services",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
      </svg>
    ),
  },
  {
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
    id: "process",
    label: "Process",
    icon: (
      <svg {...iconProps}>
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
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
    id: "pricing",
    label: "Pricing",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export function SectionNavDock() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);

      let current = dockItems[0].id;
      for (const item of dockItems) {
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
      className="fixed bottom-8 right-6 z-40 hidden flex-col gap-2 rounded-2xl border border-ss-border bg-ss-surface-2/90 p-2 backdrop-blur-md lg:flex"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      {dockItems.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-label={item.label}
          title={item.label}
          onClick={() => goTo(item.id)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
            active === item.id
              ? "bg-ss-teal text-ss-base"
              : "text-ss-muted hover:bg-ss-base hover:text-ss-mint"
          }`}
        >
          {item.icon}
        </button>
      ))}
    </motion.div>
  );
}
