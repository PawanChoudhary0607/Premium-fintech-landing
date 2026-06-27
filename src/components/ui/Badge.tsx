import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "danger" | "brand";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        variant === "default" && "bg-bg-elevated text-text-secondary border border-border",
        variant === "success" && "bg-success/10 text-success border border-success/20",
        variant === "danger" && "bg-danger/10 text-danger border border-danger/20",
        variant === "brand" && "bg-brand-blue/10 text-brand-blue-light border border-brand-blue/25",
        className
      )}
    >
      {children}
    </span>
  );
}
