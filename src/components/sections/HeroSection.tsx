"use client";

import { useEffect, useId } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Play,
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const TRADE_URL = "https://www.arthbit.com/trade";
const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.8, ease: easeOut },
  }),
};

const STATS = [
  { value: "2M+", label: "Active users" },
  { value: "₹500Cr+", label: "Monthly volume" },
  { value: "100+", label: "Trading pairs" },
];

function useMouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const spring = { damping: 32, stiffness: 90, mass: 0.8 };

  return {
    orb1X: useSpring(useTransform(mouseX, [-0.5, 0.5], [-22, 22]), spring),
    orb1Y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-16, 16]), spring),
    orb2X: useSpring(useTransform(mouseX, [-0.5, 0.5], [16, -16]), spring),
    orb2Y: useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), spring),
    phoneX: useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), spring),
    phoneY: useSpring(useTransform(mouseY, [-0.5, 0.5], [-7, 7]), spring),
    cardX: useSpring(useTransform(mouseX, [-0.5, 0.5], [12, -12]), spring),
    cardY: useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), spring),
  };
}

function FloatingMetricCard({
  className,
  children,
  delay = 0,
  floatY = 6,
  duration = 5,
  parallaxX,
  parallaxY,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  floatY?: number;
  duration?: number;
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
}) {
  return (
    <motion.div style={{ x: parallaxX, y: parallaxY }} className={className}>
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ scale: 1.03 }}
        className="hero-glass-subtle rounded-2xl px-4 py-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.38),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function PhoneMockup({
  parallaxX,
  parallaxY,
  cardParallaxX,
  cardParallaxY,
}: {
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  cardParallaxX: MotionValue<number>;
  cardParallaxY: MotionValue<number>;
}) {
  const chartGradId = useId();
  const lineGradId = useId();

  return (
    <div className="relative w-[min(100%,288px)] sm:w-[308px] lg:w-[328px] xl:w-[348px] mx-auto lg:mx-0 lg:mr-4 xl:mr-8 [perspective:1400px]">
      {/* Ambient glow — softer, layered */}
      <div className="absolute -inset-20 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,91,255,0.16)_0%,rgba(123,63,228,0.06)_42%,transparent_72%)] blur-3xl" />
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[70%] h-24 phone-floor-shadow opacity-80" />
      </div>

      {/* Depth ring */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute -inset-5 -z-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-[3.25rem] border border-white/[0.04]" />
      </motion.div>

      {/* Rear depth slab */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY, rotateY: -6, rotateX: 2 }}
        className="absolute right-0 top-10 w-[84%] h-[92%] rounded-[3rem] bg-gradient-to-br from-brand-blue/[0.07] to-brand-violet/[0.03] border border-white/[0.03] -z-[1]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: easeOut }}
      />

      {/* Device */}
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
          rotateY: -4,
          rotateX: 1,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.05, ease: easeOut }}
        className="relative phone-shadow"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Side buttons */}
          <div
            aria-hidden
            className="absolute -left-[2px] top-[22%] w-[3px] h-7 rounded-l-sm bg-gradient-to-b from-[#4a5478] to-[#252b42]"
          />
          <div
            aria-hidden
            className="absolute -left-[2px] top-[34%] w-[3px] h-11 rounded-l-sm bg-gradient-to-b from-[#4a5478] to-[#252b42]"
          />
          <div
            aria-hidden
            className="absolute -right-[2px] top-[28%] w-[3px] h-14 rounded-r-sm bg-gradient-to-b from-[#4a5478] to-[#252b42]"
          />

          {/* Outer shell */}
          <div className="phone-shell rounded-[3rem] p-[3px]">
            <div className="rounded-[2.85rem] p-[2px] bg-[#060810] ring-1 ring-black/80">
              <div className="relative rounded-[2.7rem] overflow-hidden bg-[#0a0e18]">
                {/* Status area + dynamic island */}
                <div className="relative flex items-center justify-between px-6 pt-3.5 pb-2">
                  <span className="text-text-muted/80 text-[10px] font-mono tracking-wider w-10">
                    9:41
                  </span>
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 w-[5.5rem] h-[1.35rem] rounded-full bg-black ring-1 ring-white/[0.08] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
                  <div className="flex gap-[3px] items-end w-10 justify-end">
                    <div className="w-[3px] h-[5px] rounded-[1px] bg-text-muted/50" />
                    <div className="w-[3px] h-[7px] rounded-[1px] bg-text-muted/50" />
                    <div className="w-[3px] h-[9px] rounded-[1px] bg-text-muted/70" />
                    <div className="w-[14px] h-[7px] rounded-[2px] border border-text-muted/40 relative">
                      <div className="absolute inset-[1px] right-[2px] rounded-[1px] bg-text-muted/60" />
                    </div>
                  </div>
                </div>

                {/* Screen content */}
                <div className="px-4 pb-7 pt-1">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-text-muted/90 text-[10px] font-medium tracking-[0.14em] uppercase">
                        Portfolio
                      </p>
                      <p className="text-[1.75rem] font-bold text-text-primary tracking-[-0.02em] leading-none mt-1.5">
                        ₹2,41,500
                      </p>
                      <p className="text-success text-[11px] font-medium flex items-center gap-1 mt-2">
                        <TrendingUp size={11} strokeWidth={2.5} />
                        +₹12,340 · 5.4%
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-[0.85rem] bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-[0_8px_20px_rgba(59,91,255,0.35)] ring-1 ring-white/15">
                      <span className="text-white text-[15px] font-bold">A</span>
                    </div>
                  </div>

                  <div className="h-[5.75rem] rounded-[0.9rem] hero-glass-subtle mb-5 overflow-hidden relative">
                    <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={chartGradId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id={lineGradId} x1="0" y1="0" x2="1" y2="0">
                          <stop stopColor="#6B84FF" stopOpacity="0.4" />
                          <stop offset="0.5" stopColor="#8FA4FF" />
                          <stop offset="1" stopColor="#7B3FE4" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,18 L150,22 L175,10 L200,14 L200,60 L0,60 Z"
                        fill={`url(#${chartGradId})`}
                      />
                      <path
                        d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,18 L150,22 L175,10 L200,14"
                        fill="none"
                        stroke={`url(#${lineGradId})`}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {[
                    { sym: "BTC", name: "Bitcoin", val: "₹1,24,877", chg: "+2.1%", pos: true },
                    { sym: "ETH", name: "Ethereum", val: "₹81,967", chg: "-0.6%", pos: false },
                    { sym: "SOL", name: "Solana", val: "₹34,656", chg: "+4.3%", pos: true },
                  ].map((asset) => (
                    <div
                      key={asset.sym}
                      className="flex items-center justify-between py-[0.65rem] border-b border-white/[0.035] last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-[1.85rem] h-[1.85rem] rounded-[0.55rem] bg-white/[0.035] flex items-center justify-center text-[10px] font-bold text-brand-blue-light ring-1 ring-white/[0.05]">
                          {asset.sym[0]}
                        </div>
                        <div>
                          <p className="text-text-primary text-[11px] font-semibold">{asset.sym}</p>
                          <p className="text-text-muted text-[9px]">{asset.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-text-primary text-[11px] font-semibold tabular-nums">
                          {asset.val}
                        </p>
                        <p
                          className={cn(
                            "text-[9px] font-semibold tabular-nums",
                            asset.pos ? "text-success" : "text-danger"
                          )}
                        >
                          {asset.chg}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-5 rounded-[0.9rem] p-[1px] bg-gradient-to-r from-brand-blue/60 via-brand-violet/50 to-brand-blue/60">
                    <div className="rounded-[0.85rem] bg-gradient-to-r from-brand-blue to-brand-violet py-3 text-center shadow-[0_10px_28px_rgba(59,91,255,0.32)]">
                      <span className="text-white text-[13px] font-semibold tracking-wide">
                        Buy Crypto
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screen glass reflection */}
                <div
                  aria-hidden
                  className="absolute inset-0 phone-screen-shine pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating metric cards */}
      <FloatingMetricCard
        className="absolute -left-5 sm:-left-16 top-[12%] hidden sm:block"
        delay={0}
        floatY={7}
        duration={5.4}
        parallaxX={cardParallaxX}
        parallaxY={cardParallaxY}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-success/12 flex items-center justify-center ring-1 ring-success/18">
            <TrendingUp size={14} className="text-success" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[9px] text-text-muted font-medium tracking-[0.08em] uppercase">
              BTC / INR
            </p>
            <p className="text-[15px] font-bold text-success tabular-nums leading-tight">+2.15%</p>
          </div>
        </div>
      </FloatingMetricCard>

      <FloatingMetricCard
        className="absolute -right-3 sm:-right-14 top-[44%]"
        delay={1}
        floatY={8}
        duration={6}
        parallaxX={cardParallaxX}
        parallaxY={cardParallaxY}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-violet/12 flex items-center justify-center ring-1 ring-brand-violet/22">
            <Shield size={14} className="text-brand-violet" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[9px] text-text-muted font-medium tracking-[0.08em] uppercase">
              Security
            </p>
            <p className="text-[15px] font-bold text-text-primary leading-tight">Bank-grade</p>
          </div>
        </div>
      </FloatingMetricCard>

      <FloatingMetricCard
        className="absolute -left-3 sm:-left-12 bottom-[20%] hidden sm:block"
        delay={2}
        floatY={6}
        duration={4.8}
        parallaxX={cardParallaxX}
        parallaxY={cardParallaxY}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-danger/12 flex items-center justify-center ring-1 ring-danger/18">
            <TrendingDown size={14} className="text-danger" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[9px] text-text-muted font-medium tracking-[0.08em] uppercase">
              ETH / INR
            </p>
            <p className="text-[15px] font-bold text-danger tabular-nums leading-tight">-0.65%</p>
          </div>
        </div>
      </FloatingMetricCard>

      <FloatingMetricCard
        className="absolute -right-1 sm:-right-10 bottom-[8%]"
        delay={2.8}
        floatY={5}
        duration={5.8}
        parallaxX={cardParallaxX}
        parallaxY={cardParallaxY}
      >
        <div className="flex items-center gap-2.5">
          <Zap size={15} className="text-brand-cyan" fill="currentColor" />
          <div>
            <p className="text-[9px] text-text-muted font-medium tracking-[0.08em] uppercase">
              Avg. fill
            </p>
            <p className="text-[13px] font-bold text-text-primary tabular-nums leading-tight">
              &lt; 50ms
            </p>
          </div>
        </div>
      </FloatingMetricCard>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.a
      href="#markets"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8, ease: easeOut }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2.5 text-text-muted/80 hover:text-text-secondary transition-colors duration-300 group"
      aria-label="Scroll to markets"
    >
      <span className="text-[10px] font-medium tracking-[0.22em] uppercase">Explore</span>
      <motion.div
        animate={{ y: [0, 5, 0], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-10 h-10 rounded-full hero-glass-subtle flex items-center justify-center"
      >
        <ChevronDown size={17} strokeWidth={2} className="text-text-secondary/80" />
      </motion.div>
    </motion.a>
  );
}

export function HeroSection() {
  const parallax = useMouseParallax();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[5.5rem] sm:pt-28 lg:pt-[7.5rem] pb-20 md:pb-28">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-bg-base" />
        <div className="absolute inset-0 hero-spotlight" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-bg-base" />
        <div className="absolute inset-0 hero-horizon" />
        <div className="absolute inset-0 hero-vignette" />

        <motion.div
          style={{ x: parallax.orb1X, y: parallax.orb1Y }}
          className="absolute -top-32 left-[6%] w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(59,91,255,0.14)_0%,transparent_68%)] blur-[80px]"
        />
        <motion.div
          style={{ x: parallax.orb2X, y: parallax.orb2Y }}
          className="absolute top-[12%] right-[2%] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(123,63,228,0.1)_0%,transparent_70%)] blur-[72px]"
        />
        <motion.div
          style={{ x: parallax.orb1X, y: parallax.orb1Y }}
          className="absolute bottom-[8%] left-[28%] w-64 h-64 rounded-full bg-brand-cyan/[0.04] blur-[90px]"
        />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 38%, black 15%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 38%, black 15%, transparent 78%)",
          }}
        />

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-[82rem] mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-16 lg:gap-12 xl:gap-20 items-center">
          {/* Copy */}
          <div className="max-w-[36rem] mx-auto lg:mx-0 text-center lg:text-left lg:py-6">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <Badge
                variant="brand"
                className={cn(
                  "mb-10 md:mb-12 px-4 py-2 text-[10px] tracking-[0.16em] uppercase font-semibold",
                  "hero-glass border-brand-blue/15 shadow-[0_8px_32px_rgba(59,91,255,0.08)]"
                )}
              >
                <motion.span
                  className="relative flex h-[7px] w-[7px]"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-blue/50 animate-ping" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-brand-blue shadow-[0_0_8px_rgba(59,91,255,0.6)]" />
                </motion.span>
                Live markets · 100+ pairs
              </Badge>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2.75rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.125rem] xl:text-[4.625rem] font-black leading-[0.98] tracking-[-0.035em] text-text-primary mb-8 md:mb-10"
            >
              Buy &amp; sell
              <br />
              <span className="text-gradient-hero">crypto</span>
              <br />
              <span className="relative inline-block text-text-primary/95">
                in minutes
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1, ease: easeOut }}
                >
                  <motion.path
                    d="M3 8.5 Q75 2.5 150 6 Q225 9.5 297 4"
                    stroke="url(#hero-underline)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#3B5BFF" stopOpacity="0" />
                      <stop offset="0.25" stopColor="#6B84FF" stopOpacity="0.7" />
                      <stop offset="0.75" stopColor="#9B6BFF" stopOpacity="0.7" />
                      <stop offset="1" stopColor="#7B3FE4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              .
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-text-secondary/90 text-[17px] sm:text-lg md:text-[1.25rem] font-normal leading-[1.7] md:leading-[1.75] mb-12 md:mb-14 max-w-[34rem] mx-auto lg:mx-0"
            >
              Trade Bitcoin, Ethereum, USDT, and top altcoins on India&apos;s fastest crypto
              exchange — real-time prices, instant INR deposits, and bank-grade security in one
              app.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-14 md:mb-[4.5rem]"
            >
              <Button
                size="lg"
                className="rounded-full px-9 h-[3.625rem] text-[15px] font-semibold tracking-[-0.01em] shadow-[0_12px_40px_rgba(59,91,255,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_16px_48px_rgba(123,63,228,0.38)] hover:scale-[1.015] active:scale-[0.99] transition-all duration-300"
                onClick={() => window.open(TRADE_URL, "_blank")}
              >
                Start Trading Free
                <ArrowRight size={17} strokeWidth={2.5} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-9 h-[3.625rem] text-[15px] font-medium hero-glass-subtle border-white/[0.08] hover:border-white/[0.14] hover:bg-white/[0.04] active:scale-[0.99] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-blue/10 ring-1 ring-brand-blue/20">
                  <Play size={13} className="text-brand-blue-light ml-0.5" fill="currentColor" />
                </span>
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-[28rem] mx-auto lg:mx-0"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.07, duration: 0.65, ease: easeOut }}
                  whileHover={{ y: -2 }}
                  className="hero-glass-subtle rounded-[1.125rem] px-3.5 sm:px-5 py-4 sm:py-5 text-center lg:text-left transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.32)]"
                >
                  <p className="text-xl sm:text-[1.375rem] font-bold text-text-primary tracking-[-0.02em] tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-text-muted/90 font-medium mt-1 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: easeOut }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 lg:pl-4"
          >
            <PhoneMockup
              parallaxX={parallax.phoneX}
              parallaxY={parallax.phoneY}
              cardParallaxX={parallax.cardX}
              cardParallaxY={parallax.cardY}
            />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
