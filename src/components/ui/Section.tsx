import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function Section({ id, children, className, innerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28 overflow-hidden", className)}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-16", className)}>
      {eyebrow && (
        <p className="text-brand-blue-light text-sm font-semibold tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn("text-text-secondary text-lg leading-relaxed", centered && "max-w-2xl mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
