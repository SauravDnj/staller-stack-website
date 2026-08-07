"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { useAiGuide } from "@/components/ai-guide/AiGuideContext";
import { AiGuideWizard } from "@/components/ai-guide/AiGuideWizard";
import { ChatPanel } from "@/components/ai-chat/ChatPanel";

export function AiGuideLauncher() {
  const { isOpen, open, close } = useAiGuide();
  const [mode, setMode] = useState<"chat" | "guide">("chat");

  return (
    <>
      <motion.button
        type="button"
        onClick={open}
        aria-label="Open the AI Assistant"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-ss-teal px-5 py-3 font-display text-sm font-semibold text-ss-base shadow-[0_0_24px_-6px_var(--ss-teal)] transition-colors hover:bg-ss-mint"
        style={{ pointerEvents: isOpen ? "none" : "auto" }}
      >
        <FiMessageCircle className="h-4 w-4" />
        Ask AI
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-4 bottom-4 top-4 z-50 mx-auto max-w-xl overflow-y-auto sm:inset-x-auto sm:right-6 sm:left-auto sm:top-auto sm:bottom-6 sm:h-[640px] sm:max-h-[85vh] sm:w-full"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close the AI Guide"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-ss-border bg-ss-surface text-ss-muted transition-colors hover:border-ss-teal hover:text-ss-mint"
              >
                <FiX className="h-4 w-4" />
              </button>
              {mode === "chat" ? (
                <ChatPanel onSwitchToGuide={() => setMode("guide")} />
              ) : (
                <AiGuideWizard onDone={close} onSwitchToChat={() => setMode("chat")} />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
