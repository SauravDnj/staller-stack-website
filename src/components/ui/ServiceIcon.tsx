import type { Service } from "@/content/services";

const paths: Record<Service["icon"], React.ReactNode> = {
  code: (
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
  ),
  cloud: (
    <path d="M7 18a4 4 0 0 1-.4-7.98A5.5 5.5 0 0 1 17.5 9a4 4 0 0 1 .5 8H7Z" />
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3ZM9 12l2 2 4-4" />
  ),
  brain: (
    <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5v2a3 3 0 0 0 3 3h1M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5v2a3 3 0 0 1-3 3h-1M9 4v16M15 4v16" />
  ),
};

export function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-ss-mint"
    >
      {paths[icon]}
    </svg>
  );
}
