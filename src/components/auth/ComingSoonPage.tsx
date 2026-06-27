"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, type LucideIcon } from "lucide-react";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut } from "@/components/ui/SectionVisuals";

export function ComingSoonPage({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <main className="relative flex min-h-dvh items-center overflow-hidden bg-bg-base px-4 py-20 sm:px-6 lg:px-8">
      <AmbientField variant="mixed" />
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.72, ease: easeOut }}
        className="relative mx-auto w-full max-w-3xl text-center"
      >
        <EyebrowBadge icon={Sparkles} className="mb-7">
          {eyebrow}
        </EyebrowBadge>

        <PremiumCard className="p-6 sm:p-10 lg:p-12" hover={false}>
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-[0_18px_48px_rgba(59,91,255,0.32)] ring-1 ring-white/15"
          >
            <Icon size={34} strokeWidth={2.2} />
          </motion.div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-7 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(59,91,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(123,63,228,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              <ArrowLeft size={16} strokeWidth={2.5} />
              Return Home
            </Link>
            <div className="rounded-full border border-white/[0.06] bg-white/[0.025] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
              Early access opening soon
            </div>
          </div>
        </PremiumCard>
      </motion.div>
    </main>
  );
}
