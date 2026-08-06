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
  cpu: (
    <path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  ),
  smartphone: (
    <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM11 18h2" />
  ),
  layers: (
    <path d="M12 2l9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />
  ),
  database: (
    <path d="M12 6c4.42 0 8-1.12 8-2.5S16.42 1 12 1 4 2.12 4 3.5 7.58 6 12 6ZM4 3.5V9c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V3.5M4 9v5.5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V9M4 14.5V20c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5.5" />
  ),
  users: (
    <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M17 11a3 3 0 1 0 0-6M17 21v-1a5 5 0 0 0-3-4.58" />
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
