import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "free" | "promo" | "plain" | "brand";

const TONES: Record<Tone, string> = {
  neutral: "bg-track text-ink-2",
  brand: "bg-brand-soft text-brand",
  free: "bg-ok text-page",
  promo: "bg-warn-bg text-warn-fg",
  plain: "bg-transparent px-0 text-ink-3",
};

export function Badge({
  tone = "neutral",
  className,
  children,
  title,
}: {
  tone?: Tone;
  className?: string;
  children?: ReactNode;
  title?: string;
}) {
  if (children == null || children === "") return null;
  return (
    <span
      title={title}
      className={cn(
        "inline-flex shrink-0 items-center rounded-[2px] px-1.5 py-[1px] font-mono text-[10px] leading-4 font-medium tracking-wide uppercase",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
