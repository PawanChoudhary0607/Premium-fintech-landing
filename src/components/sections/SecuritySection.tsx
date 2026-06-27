"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Eye, Fingerprint, Lock, Radar, Server, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut, fadeScale, fadeUp } from "@/components/ui/SectionVisuals";

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "AES-256 encryption",
    description: "Sensitive account, transaction, and wallet data is encrypted in transit and at rest.",
  },
  {
    icon: Server,
    title: "95% cold storage",
    description: "Most digital assets are held in segregated, air-gapped custody infrastructure.",
  },
  {
    icon: Eye,
    title: "24/7 fraud monitoring",
    description: "Risk systems watch logins, trades, and withdrawals for anomalous behavior.",
  },
  {
    icon: Fingerprint,
    title: "Strong account access",
    description: "2FA, biometric unlock, and withdrawal checks protect high-impact actions.",
  },
];

const CHECKLIST = [
  "SEBI-aligned KYC and AML controls",
  "Independent security reviews",
  "DDoS protection and traffic filtering",
  "Insurance-backed asset safeguards",
  "Bug bounty and disclosure workflows",
  "Role-based internal access controls",
];

function SecurityConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="relative"
    >
      <div className="absolute -inset-14 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,211,149,0.12)_0%,rgba(59,91,255,0.06)_42%,transparent_72%)] blur-3xl" />
      <PremiumCard className="p-4 sm:p-5" hover={false}>
        <div className="rounded-[1.35rem] border border-white/[0.05] bg-bg-base/75 p-4 sm:p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Risk engine
              </p>
              <p className="mt-1 text-xl font-bold text-text-primary">Threats blocked</p>
            </div>
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/10 text-success ring-1 ring-success/20"
            >
              <Radar size={22} />
            </motion.div>
          </div>

          <div className="relative mx-auto mb-7 flex aspect-square max-w-[17rem] items-center justify-center rounded-full border border-white/[0.05] bg-[radial-gradient(circle,rgba(0,211,149,0.08)_0%,rgba(59,91,255,0.04)_42%,transparent_70%)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-5 rounded-full border border-dashed border-success/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-dashed border-brand-blue/20"
            />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-success to-brand-cyan text-bg-base shadow-[0_18px_48px_rgba(0,211,149,0.22)] ring-1 ring-white/20">
              <ShieldCheck size={42} strokeWidth={2.2} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["2FA", "Enforced"],
              ["Cold", "95%"],
              ["Alerts", "Real-time"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">{label}</p>
                <p className="mt-1 font-mono text-sm font-semibold text-text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </PremiumCard>
    </motion.div>
  );
}

export function SecuritySection() {
  return (
    <Section id="security" className="relative bg-bg-base py-24 md:py-32 lg:py-36">
      <AmbientField variant="emerald" />

      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-24">
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <EyebrowBadge icon={ShieldCheck} className="mb-7 text-success">
              Security and compliance
            </EyebrowBadge>
            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.8rem]">
              Protection that feels invisible until it matters.
            </h2>
            <p className="mt-7 text-base leading-8 text-text-secondary sm:text-lg">
              Security is built into each layer of ArthBit: identity, deposits, order execution,
              custody, withdrawals, and internal operations.
            </p>
          </motion.div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={fadeScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.02] px-4 py-3 text-left"
              >
                <CheckCircle2 size={17} className="shrink-0 text-success" />
                <span className="text-sm leading-6 text-text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <SecurityConsole />
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SECURITY_FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              custom={index}
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <PremiumCard className="h-full p-5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-success/10 text-success ring-1 ring-success/18">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{feature.description}</p>
              </PremiumCard>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
