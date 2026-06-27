import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 select-none cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
        "disabled:pointer-events-none disabled:opacity-50",
        // Sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        // Variants
        variant === "primary" && [
          "bg-gradient-to-r from-brand-blue to-brand-violet text-white",
          "shadow-glow-blue hover:shadow-glow-violet",
          "hover:opacity-90 active:scale-[0.98]",
        ],
        variant === "secondary" && [
          "bg-bg-elevated text-text-primary border border-border",
          "hover:bg-bg-card hover:border-brand-blue/40",
          "active:scale-[0.98]",
        ],
        variant === "ghost" && [
          "text-text-secondary hover:text-text-primary hover:bg-bg-elevated",
        ],
        variant === "outline" && [
          "border border-brand-blue/50 text-brand-blue-light",
          "hover:bg-brand-blue/10 hover:border-brand-blue",
          "active:scale-[0.98]",
        ],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
