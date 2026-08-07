import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { MermaidDiagram } from "@/components/ai-chat/MermaidDiagram";

const components: Components = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold text-ss-text">{children}</strong>,
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-ss-teal underline underline-offset-2 hover:text-ss-mint"
    >
      {children}
    </Link>
  ),
  table: ({ children }) => (
    <div className="mb-2 overflow-x-auto rounded-lg border border-ss-border">
      <table className="w-full border-collapse text-left text-xs sm:text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-ss-base">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-ss-border px-3 py-2 font-display font-semibold text-ss-text">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="border-b border-ss-border/60 px-3 py-2 text-ss-muted">{children}</td>,
  code: ({ className, children, ...props }) => {
    const language = /language-(\w+)/.exec(className ?? "")?.[1];
    const value = String(children).replace(/\n$/, "");

    if (language === "mermaid") {
      return <MermaidDiagram code={value} />;
    }

    if (className) {
      return (
        <pre className="mb-2 overflow-x-auto rounded-lg border border-ss-border bg-ss-base p-3 text-xs">
          <code>{value}</code>
        </pre>
      );
    }

    return (
      <code className="rounded bg-ss-base px-1.5 py-0.5 text-xs text-ss-teal" {...props}>
        {children}
      </code>
    );
  },
};

export function ChatMarkdown({ content }: { content: string }) {
  return (
    <div className="text-sm text-ss-text sm:text-[0.95rem]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
