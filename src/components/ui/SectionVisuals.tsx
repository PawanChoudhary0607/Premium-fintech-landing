"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.68, ease: easeOut },
  }),
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: (index = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: index * 0.07, duration: 0.62, ease: easeOut },
  }),
};

export function AmbientField({
  variant = "blue",
  className,
}: {
  variant?: "blue" | "violet" | "emerald" | "mixed";
  className?: string;
}) {
  const glow =
    variant === "emerald"
      ? "rgba(0,211,149,0.07)"
      : variant === "violet"
        ? "rgba(123,63,228,0.08)"
        : variant === "mixed"
          ? "rgba(59,91,255,0.08)"
          : "rgba(59,91,255,0.07)";

  return (
    <div aria-hidden className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.012] via-transparent to-white/[0.01]" />
      <div
        className="absolute -top-32 left-[8%] h-[26rem] w-[26rem] rounded-full blur-[84px]"
        style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 68%)` }}
      />
      <div
        className="absolute bottom-[-14rem] right-[6%] h-[30rem] w-[30rem] rounded-full blur-[92px]"
        style={{
          background:
            variant === "mixed"
              ? "radial-gradient(circle, rgba(123,63,228,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(0,229,255,0.045) 0%, transparent 72%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}

export function EyebrowBadge({
  icon: Icon,
  children,
  className,
}: {
  icon?: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]",
        "hero-glass-subtle text-brand-blue-light",
        className
      )}
    >
      {Icon && <Icon size={12} strokeWidth={2.5} />}
      {children}
    </div>
  );
}

export function PremiumCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl hero-glass-subtle",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.36),0_0_0_1px_rgba(59,91,255,0.1)]",
        className
      )}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />
      {children}
    </div>
  );
}
