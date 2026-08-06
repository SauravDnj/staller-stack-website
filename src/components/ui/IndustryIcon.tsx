import type { Industry } from "@/content/industries";

const paths: Record<Industry["icon"], React.ReactNode> = {
  healthcare: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9ZM9 12h6M12 9v6" />,
  fintech: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  ecommerce: <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L21 8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
  education: <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />,
  realestate: <path d="M4 21V10l8-6 8 6v11M9 21v-6h6v6" />,
  logistics: <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7v-6ZM6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />,
  manufacturing: <path d="M3 21V11l5 3v-3l5 3V8l5 3v10H3Z" />,
  travel: <path d="M10.5 20.5 8 21l1-3-5-1.5L2 14l6-1L14 5a2.5 2.5 0 0 1 3.5 3.5L10 16l-1 6-2-2Z" />,
  saas: <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4ZM9 12l2 2 4-4" />,
  ai: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  automation: <path d="M12 2v3M8 8h8a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-7a2 2 0 0 1 2-2ZM9 12v2M15 12v2M4 12h1M19 12h1" />,
  insurance: <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9ZM12 12v7a2 2 0 0 1-4 0" />,
  legal: <path d="M12 3v18M8 21h8M3 7h6M15 7h6M6 7l3 5a3 3 0 0 1-6 0l3-5ZM18 7l3 5a3 3 0 0 1-6 0l3-5Z" />,
  media: <path d="M3 8l2-4h4l-2 4M9 8l2-4h4l-2 4M15 8l2-4h4l-2 4M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />,
  telecom: <path d="M12 2v6M8.5 5.5a5.5 5.5 0 0 0 0 8.7M15.5 5.5a5.5 5.5 0 0 1 0 8.7M5 2.5a9.5 9.5 0 0 0 0 14.8M19 2.5a9.5 9.5 0 0 1 0 14.8M12 14v8" />,
  government: <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 10v7M10 10v7M14 10v7M18 10v7" />,
};

export function IndustryIcon({ icon }: { icon: Industry["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-ss-mint"
    >
      {paths[icon]}
    </svg>
  );
}
