"use client";

import { motion } from "framer-motion";
import { Bell, Download, Headphones, Smartphone, Star, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut, fadeScale, fadeUp } from "@/components/ui/SectionVisuals";
import { cn } from "@/lib/utils";

const APP_STORE_URL = "https://apps.apple.com/in/app/arthbit-buy-crypto-trading/id6463895932";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.arthbitapp";

const APP_FEATURES = [
  { icon: Bell, label: "Price alerts", value: "Real-time" },
  { icon: Headphones, label: "Support", value: "24 / 7" },
  { icon: Users, label: "Downloads", value: "2M+" },
];

function StoreButton({
  href,
  label,
  eyebrow,
  variant = "dark",
  children,
}: {
  href: string;
  label: string;
  eyebrow: string;
  variant?: "dark" | "light";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${eyebrow} ${label}`}
      className={cn(
        "group inline-flex min-h-[3.75rem] items-center gap-3 rounded-2xl px-5 py-3.5 text-left transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
        variant === "dark"
          ? "bg-text-primary text-bg-base hover:bg-white"
          : "hero-glass-subtle text-text-primary hover:border-brand-blue/25 hover:bg-white/[0.045]"
      )}
    >
      {children}
      <span>
        <span className="block text-[10px] leading-none opacity-70">{eyebrow}</span>
        <span className="mt-1 block text-sm font-bold leading-none">{label}</span>
      </span>
    </a>
  );
}

function AppPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="relative mx-auto w-full max-w-[28rem]"
    >
      <div className="absolute -inset-12 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(59,91,255,0.16)_0%,rgba(123,63,228,0.07)_46%,transparent_72%)] blur-3xl" />
      <div className="relative mx-auto w-[min(100%,17.5rem)]">
        <div className="absolute left-[-2.25rem] top-12 hidden h-[25rem] w-[13rem] rotate-[-8deg] rounded-[2.25rem] border border-white/[0.055] bg-bg-elevated/55 shadow-[0_30px_70px_rgba(0,0,0,0.28)] sm:block" />
        <PremiumCard className="relative rounded-[2.75rem] p-2" hover={false}>
          <div className="overflow-hidden rounded-[2.35rem] bg-bg-base">
            <div className="flex items-center justify-between px-5 pb-3 pt-4">
              <span className="font-mono text-[10px] text-text-muted">9:41</span>
              <div className="h-5 w-20 rounded-full bg-black ring-1 ring-white/[0.08]" />
              <div className="h-2.5 w-8 rounded-full bg-text-muted/25" />
            </div>
            <div className="px-4 pb-5">
              <div className="mb-4 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-violet p-4 shadow-[0_16px_38px_rgba(59,91,255,0.3)]">
                <p className="text-xs font-medium text-white/70">Portfolio balance</p>
                <p className="mt-2 text-3xl font-black tracking-[-0.03em] text-white">₹2,41,500</p>
                <p className="mt-1 text-xs font-semibold text-green-200">+₹12,340 today</p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2">
                {["Buy", "Sell"].map((action) => (
                  <div key={action} className="rounded-2xl border border-white/[0.06] bg-white/[0.035] py-3 text-center text-sm font-semibold text-text-primary">
                    {action}
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                {[
                  { sym: "BTC", name: "Bitcoin", val: "₹1,24,877", tone: "bg-orange-400" },
                  { sym: "ETH", name: "Ethereum", val: "₹81,967", tone: "bg-indigo-400" },
                  { sym: "SOL", name: "Solana", val: "₹34,656", tone: "bg-purple-400" },
                ].map((asset) => (
                  <div key={asset.sym} className="flex items-center justify-between rounded-2xl border border-white/[0.045] bg-white/[0.025] px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className={cn("flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold text-white", asset.tone)}>
                        {asset.sym[0]}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-text-primary">{asset.sym}</span>
                        <span className="block text-[10px] text-text-muted">{asset.name}</span>
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-text-secondary">{asset.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PremiumCard>
      </div>
    </motion.div>
  );
}

export function AppSection() {
  return (
    <Section id="app" className="relative bg-bg-card py-24 md:py-32 lg:py-36">
      <AmbientField variant="mixed" />

      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 xl:gap-24">
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <EyebrowBadge icon={Smartphone} className="mb-7">
              ArthBit mobile
            </EyebrowBadge>
            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.8rem]">
              Trade, track, and get support from anywhere.
            </h2>
            <p className="mt-7 text-base leading-8 text-text-secondary sm:text-lg">
              The full ArthBit experience in your pocket: live prices, one-tap orders, portfolio
              tracking, withdrawal controls, and human support when you need it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <StoreButton href={APP_STORE_URL} eyebrow="Download on the" label="App Store">
              <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </StoreButton>
            <StoreButton href={PLAY_STORE_URL} eyebrow="Get it on" label="Google Play" variant="light">
              <Download aria-hidden size={22} />
            </StoreButton>
          </motion.div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {APP_FEATURES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={fadeScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="rounded-2xl border border-white/[0.055] bg-white/[0.02] p-4 text-left"
                >
                  <Icon size={17} className="mb-4 text-brand-blue-light" />
                  <p className="font-mono text-sm font-bold text-text-primary">{item.value}</p>
                  <p className="mt-1 text-xs text-text-muted">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.55, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <span className="flex" aria-label="4.8 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              4.8/5 rating
            </span>
            <a
              href="https://support.arthbit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-blue-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              Contact support
            </a>
          </motion.div>
        </div>

        <AppPreview />
      </div>
    </Section>
  );
}
