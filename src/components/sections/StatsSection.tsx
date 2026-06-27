"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, BarChart3, Clock3, ShieldCheck, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut, fadeScale, fadeUp } from "@/components/ui/SectionVisuals";
import { STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS = [Users, BarChart3, Activity, Clock3];
const SIGNALS = [
  { label: "KYC queue", value: "Live", tone: "text-success" },
  { label: "Trade engine", value: "< 50ms", tone: "text-brand-blue-light" },
  { label: "Asset custody", value: "95% cold", tone: "text-brand-cyan" },
];

function useCountUp(target: string, inView: boolean) {
  const match = target.match(/[\d.]+/);
  const numericTarget = match ? parseFloat(match[0]) : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1600;
    const steps = 54;
    const increment = numericTarget / steps;
    let current = 0;
    let step = 0;

    const timer = window.setInterval(() => {
      step += 1;
      current = Math.min(current + increment, numericTarget);
      setCount(parseFloat(current.toFixed(1)));
      if (step >= steps) window.clearInterval(timer);
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [inView, numericTarget]);

  return target.replace(/[\d.]+/, count % 1 === 0 ? count.toString() : count.toFixed(1));
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = ICONS[index % ICONS.length];
  const animated = useCountUp(stat.value, inView);

  return (
    <motion.div custom={index} variants={fadeScale} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <PremiumCard className="h-full p-5 sm:p-6" hover>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/90 to-brand-violet shadow-[0_12px_28px_rgba(59,91,255,0.28)] ring-1 ring-white/15">
            <Icon size={19} className="text-white" />
          </div>
          <span className="font-mono text-[11px] text-text-muted">0{index + 1}</span>
        </div>
        <div className="text-[2.35rem] font-black leading-none tracking-[-0.03em] text-gradient-hero sm:text-5xl lg:text-[3.4rem] tabular-nums">
          {inView ? animated : stat.value}
          {stat.suffix ?? ""}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{stat.label}</p>
      </PremiumCard>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <Section className="relative bg-bg-base py-24 md:py-32 lg:py-36">
      <AmbientField variant="mixed" />

      <div ref={ref} className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-xl text-center lg:text-left"
        >
          <EyebrowBadge icon={ShieldCheck} className="mb-7">
            By the numbers
          </EyebrowBadge>
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.8rem]">
            Built for scale, tuned for everyday investors.
          </h2>
          <p className="mt-7 text-base leading-8 text-text-secondary sm:text-lg">
            ArthBit combines consumer-simple onboarding with resilient exchange infrastructure, so
            first-time buyers and active traders get the same fast, dependable experience.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {SIGNALS.map((signal, index) => (
              <motion.div
                key={signal.label}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
              >
                <span className="text-sm text-text-muted">{signal.label}</span>
                <span className={cn("font-mono text-sm font-semibold", signal.tone)}>{signal.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.45, duration: 0.7, ease: easeOut }}
        className="relative mt-16 overflow-hidden rounded-3xl border border-white/[0.055] bg-white/[0.018] px-4 py-5 sm:px-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {["AWS", "Cloudflare", "Chainalysis", "BitGo", "CoinGecko", "TradingView"].map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-white/[0.06] bg-bg-elevated/55 px-4 py-2 text-xs font-semibold text-text-secondary sm:text-sm"
            >
              {partner}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
