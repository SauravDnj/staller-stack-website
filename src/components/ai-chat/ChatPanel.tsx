"use client";

import { FormEvent, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { ChatMarkdown } from "@/components/ai-chat/ChatMarkdown";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey — I'm the Staller Stack AI Assistant. Ask me about our services, industries, or portfolio, and I'll do my best to help.",
};

export function ChatPanel({ onSwitchToGuide }: { onSwitchToGuide?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }

  async function streamReply(history: Message[]) {
    setIsStreaming(true);
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => null);
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content:
              data?.error ??
              "Something went wrong on my end — please try again or reach us via /contact.",
          };
          return copy;
        });
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let content = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const data = trimmed.slice(5).trim();
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              content += delta;
              const snapshot = content;
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: snapshot };
                return copy;
              });
              scrollToBottom();
            }
          } catch {
            // ignore malformed SSE chunk
          }
        }
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "I lost connection there — please try again in a moment.",
        };
        return copy;
      });
    } finally {
      setIsStreaming(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const nextMessages = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    scrollToBottom();
    streamReply(nextMessages);
  }

  return (
    <div className="flex h-full flex-col rounded-3xl border border-ss-border bg-ss-surface/60 backdrop-blur">
      <div className="border-b border-ss-border px-5 py-4">
        <span className="inline-flex items-center rounded-full border border-ss-teal/30 bg-ss-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ss-teal">
          AI Assistant
        </span>
        {onSwitchToGuide && (
          <button
            type="button"
            onClick={onSwitchToGuide}
            className="ml-3 font-display text-xs font-medium text-ss-muted underline underline-offset-2 transition-colors hover:text-ss-mint"
          >
            Prefer a guided walkthrough?
          </button>
        )}
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={
                message.role === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-sm bg-ss-teal px-4 py-2.5 text-sm text-ss-base"
                  : "max-w-[85%] rounded-2xl rounded-bl-sm bg-ss-base px-4 py-2.5"
              }
            >
              {message.role === "user" ? (
                message.content
              ) : message.content ? (
                <ChatMarkdown content={message.content} />
              ) : (
                <span className="inline-flex gap-1 py-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ss-muted [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ss-muted [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ss-muted" />
                </span>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-ss-border p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our services, portfolio…"
          disabled={isStreaming}
          className="flex-1 rounded-full border border-ss-border bg-ss-base px-4 py-2.5 text-sm text-ss-text placeholder:text-ss-muted/70 outline-none focus:border-ss-teal disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isStreaming || !input.trim()}
          aria-label="Send"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ss-teal text-ss-base transition-colors hover:bg-ss-mint disabled:opacity-40"
        >
          <FiSend className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
