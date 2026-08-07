"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type AiGuideContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const AiGuideContext = createContext<AiGuideContextValue | null>(null);

export function AiGuideProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return <AiGuideContext.Provider value={value}>{children}</AiGuideContext.Provider>;
}

export function useAiGuide() {
  const context = useContext(AiGuideContext);
  if (!context) {
    throw new Error("useAiGuide must be used within an AiGuideProvider");
  }
  return context;
}
