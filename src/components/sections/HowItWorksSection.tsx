"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, UserPlus, Wallet } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut, fadeUp } from "@/components/ui/SectionVisuals";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: UserPlus,
    step: "01",
    title: "Verify in minutes",
    description:
      "Create your account, complete Aadhaar and PAN KYC, and unlock INR deposits without paperwork.",
    detail: "Paperless KYC",
    color: "from-brand-blue to-brand-violet",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Add INR instantly",
    description:
      "Fund your wallet with UPI, NEFT, or IMPS. Deposits are credited in real time with clear status updates.",
    detail: "UPI, NEFT, IMPS",
    color: "from-brand-violet to-fuchsia-500",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Trade with control",
    description:
      "Buy, sell, set limit orders, track positions, and manage your portfolio across 100+ crypto assets.",
    detail: "100+ INR pairs",
    color: "from-emerald-500 to-teal-400",
  },
];

function ProcessVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="relative mx-auto w-full max-w-[27rem]"
    >
      <div className="absolute -inset-12 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(59,91,255,0.14)_0%,rgba(123,63,228,0.05)_44%,transparent_72%)] blur-3xl" />
      <PremiumCard className="p-4 sm:p-5" hover={false}>
        <div className="rounded-[1.25rem] border border-white/[0.05] bg-bg-base/70 p-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Account setup
              </p>
              <p className="mt-1 text-lg font-bold text-text-primary">Ready to trade</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-success/10 text-success ring-1 ring-success/20">
              <CheckCircle2 size={20} />
            </div>
          </div>

          <div className="space-y-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 + index * 0.1, duration: 0.55, ease: easeOut }}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.025] p-3"
                >
                  <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-[0_10px_24px_rgba(0,0,0,0.28)]", step.color)}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-text-primary">{step.title}</p>
                    <p className="text-xs text-text-muted">{step.detail}</p>
                  </div>
                  <CheckCircle2 size={16} className="shrink-0 text-success" />
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-violet p-4 shadow-[0_14px_36px_rgba(59,91,255,0.28)]">
            <p className="text-xs font-medium text-white/70">Estimated setup time</p>
            <p className="mt-1 text-3xl font-black tracking-[-0.03em] text-white">&lt; 5 min</p>
          </div>
        </div>
      </PremiumCard>
    </motion.div>
  );
}

export function HowItWorksSection() {
  return (
    <Section className="relative bg-bg-card py-24 md:py-32 lg:py-36">
      <AmbientField variant="blue" />

      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
        <div className="order-2 lg:order-1">
          <ProcessVisual />
        </div>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-70px" }}>
            <EyebrowBadge icon={Sparkles} className="mb-7">
              How it works
            </EyebrowBadge>
            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.8rem]">
              From signup to first trade without the friction.
            </h2>
            <p className="mt-7 text-base leading-8 text-text-secondary sm:text-lg">
              The flow is intentionally short, but every step includes the controls traders expect:
              verified identity, instant funding, and transparent order execution.
            </p>
          </motion.div>

          <div className="mt-10 space-y-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.step}
                  custom={index + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-white/[0.055] bg-white/[0.02] p-4 text-left transition-colors duration-300 hover:border-brand-blue/20 hover:bg-white/[0.035] sm:p-5"
                >
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105", step.color)}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                      <span className="font-mono text-xs text-text-muted">{step.step}</span>
                    </div>
                    <p className="text-sm leading-7 text-text-secondary">{step.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.a
            href="/signup"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.55, ease: easeOut }}
            className="mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-blue-light transition-colors hover:text-white"
          >
            Start the flow
            <ArrowRight size={15} strokeWidth={2.5} />
          </motion.a>
        </div>
      </div>
    </Section>
  );
}
