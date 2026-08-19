import Image from "next/image";
import { LayoutGrid } from "lucide-react";

export function BlogCategoryTile({
  label,
  image,
  active,
  onClick,
}: {
  label: string;
  image?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative aspect-[4/3] w-28 shrink-0 snap-start overflow-hidden rounded-2xl border transition-all duration-300 sm:w-36 lg:w-40 ${
        active
          ? "border-ss-teal shadow-[0_0_24px_-8px_var(--ss-teal)]"
          : "border-ss-border hover:border-ss-teal/60"
      }`}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="160px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-ss-surface-2">
          <LayoutGrid className="h-8 w-8 text-ss-teal" strokeWidth={1.5} />
        </div>
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
          active
            ? "from-ss-base via-ss-base/60 to-ss-base/10 opacity-100"
            : "from-ss-base via-ss-base/50 to-transparent opacity-90 group-hover:opacity-100"
        }`}
      />
      <span
        className={`absolute inset-x-2 bottom-2 line-clamp-2 text-left font-display text-xs font-semibold leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] sm:text-sm ${
          active ? "text-ss-mint" : "text-ss-text"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
