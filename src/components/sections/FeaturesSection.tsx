"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import {
  BarChart2,
  Coins,
  Gift,
  Headphones,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut, fadeScale, fadeUp } from "@/components/ui/SectionVisuals";
import { FEATURES } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, ElementType> = {
  Zap,
  TrendingUp,
  ShieldCheck,
  BarChart2,
  Coins,
  Headphones,
};

const ACCENTS = [
  "from-brand-blue to-brand-violet",
  "from-emerald-500 to-teal-400",
  "from-brand-violet to-fuchsia-500",
  "from-brand-blue to-brand-cyan",
  "from-amber-400 to-orange-500",
  "from-rose-500 to-pink-500",
];

function BenefitCard({
  feature,
  index,
  featured = false,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  featured?: boolean;
}) {
  const Icon = ICON_MAP[feature.icon] || Sparkles;
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.article
      custom={index}
      variants={fadeScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-45px" }}
      className={cn(featured && "lg:col-span-2 lg:row-span-2")}
    >
      <PremiumCard className={cn("group h-full", featured ? "p-6 sm:p-8 lg:p-9" : "p-5 sm:p-6")}>
        <div
          aria-hidden
          className={cn(
            "absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
            accent
          )}
        />

        <div className={cn("relative", featured && "flex h-full flex-col justify-between gap-10")}>
          <div>
            <div
              className={cn(
                "mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-[0_14px_32px_rgba(0,0,0,0.32)] ring-1 ring-white/15",
                accent,
                featured ? "h-16 w-16" : "h-12 w-12"
              )}
            >
              <Icon size={featured ? 28 : 20} className="text-white" strokeWidth={2.1} />
            </div>
            <h3 className={cn("font-bold tracking-tight text-text-primary", featured ? "text-2xl sm:text-3xl" : "text-lg")}>
              {feature.title}
            </h3>
            <p className={cn("mt-4 leading-7 text-text-secondary", featured ? "max-w-2xl text-base sm:text-lg" : "text-sm")}>
              {feature.description}
            </p>
          </div>

          {featured && (
            <div className="grid gap-3 sm:grid-cols-3">
              {["Fast setup", "Low entry", "Clear fees"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                  <p className="text-xs font-semibold text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </PremiumCard>
    </motion.article>
  );
}

function RewardsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative overflow-hidden rounded-3xl border border-white/[0.065] bg-gradient-to-r from-brand-blue/14 via-white/[0.035] to-brand-violet/14 p-5 sm:p-6 lg:p-7"
    >
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,229,255,0.12)_0%,transparent_68%)]" />
      <div className="relative grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-[0_14px_32px_rgba(59,91,255,0.28)]">
          <Gift size={24} />
        </div>
        <div>
          <p className="text-xl font-bold text-text-primary">Rewards that compound good habits.</p>
          <p className="mt-2 text-sm leading-7 text-text-secondary">
            Start small, earn while holding, and get always-on human support as your portfolio grows.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center md:min-w-[18rem]">
          {["INR 100", "24/7", "100+"].map((value, index) => (
            <div key={value} className="rounded-2xl border border-white/[0.06] bg-bg-base/45 px-3 py-3">
              <p className="font-mono text-sm font-bold text-text-primary">{value}</p>
              <p className="mt-1 text-[10px] text-text-muted">{["Start", "Care", "Pairs"][index]}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <Section id="features" className="relative bg-bg-base py-24 md:py-32 lg:py-36">
      <AmbientField variant="violet" />

      <div className="relative mb-14 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }} className="text-center lg:text-left">
          <EyebrowBadge icon={Sparkles} className="mb-7">
            Benefits and rewards
          </EyebrowBadge>
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.8rem]">
            More upside from every part of your trading day.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ delay: 0.08, duration: 0.7, ease: easeOut }}
          className="mx-auto max-w-2xl text-center text-base leading-8 text-text-secondary sm:text-lg lg:mx-0 lg:text-left"
        >
          ArthBit keeps the everyday wins visible: instant onboarding, low minimums, deep INR
          markets, staking, stronger protection, and support that stays close.
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
        {FEATURES.map((feature, index) => (
          <BenefitCard key={feature.id} feature={feature} index={index} featured={index === 0} />
        ))}
      </div>

      <div className="relative mt-5 sm:mt-6">
        <RewardsStrip />
      </div>
    </Section>
  );
}
