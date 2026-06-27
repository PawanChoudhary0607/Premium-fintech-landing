"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRight, Activity } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SIGNUP_URL = "/signup";
const MARKETS_URL = "#markets";
const easeOut = [0.22, 1, 0.36, 1] as const;

const COINS = [
  { symbol: "BTC", name: "Bitcoin", price: "₹62,43,885", change: "+1.24", vol: "₹142Cr", cap: "₹1,230T" },
  { symbol: "ETH", name: "Ethereum", price: "₹1,63,934", change: "-0.65", vol: "₹89Cr", cap: "₹195T" },
  { symbol: "XRP", name: "Ripple", price: "₹109.48", change: "-0.20", vol: "₹28Cr", cap: "₹6.2T" },
  { symbol: "BNB", name: "BNB", price: "₹52,840", change: "+2.15", vol: "₹64Cr", cap: "₹82T" },
  { symbol: "SOL", name: "Solana", price: "₹14,220", change: "+4.30", vol: "₹52Cr", cap: "₹64T" },
  { symbol: "DOGE", name: "Dogecoin", price: "₹14.87", change: "-1.80", vol: "₹18Cr", cap: "₹21T" },
];

const SYMBOL_COLORS: Record<string, string> = {
  BTC: "from-orange-400/90 to-orange-600",
  ETH: "from-indigo-400/90 to-indigo-600",
  XRP: "from-sky-400/90 to-sky-600",
  BNB: "from-yellow-400/90 to-yellow-600",
  SOL: "from-purple-400/90 to-purple-600",
  DOGE: "from-yellow-300/90 to-yellow-500",
};

function ChangeBadge({ value }: { value: string }) {
  const positive = parseFloat(value) >= 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold font-mono tabular-nums ring-1",
        positive
          ? "text-success bg-success/10 ring-success/15"
          : "text-danger bg-danger/10 ring-danger/15"
      )}
    >
      {positive ? <TrendingUp size={12} strokeWidth={2.5} /> : <TrendingDown size={12} strokeWidth={2.5} />}
      {positive ? "+" : ""}
      {value}%
    </span>
  );
}

function CoinAvatar({ symbol }: { symbol: string }) {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white text-sm font-bold shrink-0",
        "shadow-[0_8px_20px_rgba(0,0,0,0.25)] ring-1 ring-white/15",
        SYMBOL_COLORS[symbol] || "from-gray-400 to-gray-600"
      )}
    >
      {symbol[0]}
    </div>
  );
}

function MarketRow({
  coin,
  index,
}: {
  coin: (typeof COINS)[number];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { delay: index * 0.05, duration: 0.5, ease: easeOut },
        },
      }}
      className="group hidden md:grid grid-cols-6 gap-4 px-6 lg:px-7 py-[1.125rem] border-b border-white/[0.04] last:border-0 items-center transition-all duration-300 hover:bg-white/[0.025]"
    >
      <div className="flex items-center gap-3.5 col-span-2">
        <CoinAvatar symbol={coin.symbol} />
        <div>
          <p className="text-text-primary font-semibold text-[15px] tracking-tight">{coin.symbol}</p>
          <p className="text-text-muted text-xs mt-0.5">{coin.name}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-text-primary font-semibold text-sm font-mono tabular-nums">{coin.price}</p>
      </div>

      <div className="text-right">
        <ChangeBadge value={coin.change} />
      </div>

      <div className="text-right">
        <p className="text-text-secondary text-sm font-mono tabular-nums">{coin.vol}</p>
        <p className="text-text-muted text-[10px] font-mono tabular-nums mt-0.5 hidden lg:block">
          MCap {coin.cap}
        </p>
      </div>

      <div className="text-right">
        <a
          href={SIGNUP_URL}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-brand-blue-light text-sm font-semibold hero-glass-subtle border-white/[0.06] hover:border-brand-blue/30 hover:text-white transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(59,91,255,0.15)]"
        >
          Trade
          <ArrowRight size={13} strokeWidth={2.5} />
        </a>
      </div>
    </motion.div>
  );
}

function MarketCard({
  coin,
  index,
}: {
  coin: (typeof COINS)[number];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.06, duration: 0.5, ease: easeOut },
        },
      }}
      whileHover={{ y: -3 }}
      className="md:hidden hero-glass-subtle rounded-2xl p-4 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.32)]"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <CoinAvatar symbol={coin.symbol} />
          <div>
            <p className="text-text-primary font-semibold">{coin.symbol}</p>
            <p className="text-text-muted text-xs">{coin.name}</p>
          </div>
        </div>
        <ChangeBadge value={coin.change} />
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-text-muted text-[10px] uppercase tracking-wider font-medium mb-1">Price</p>
          <p className="text-text-primary font-bold font-mono tabular-nums">{coin.price}</p>
        </div>
        <div className="text-right">
          <p className="text-text-muted text-[10px] uppercase tracking-wider font-medium mb-1">24h Vol</p>
          <p className="text-text-secondary text-sm font-mono tabular-nums">{coin.vol}</p>
        </div>
      </div>

      <a
        href={SIGNUP_URL}
        className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-brand-blue-light hero-glass border-white/[0.06] hover:border-brand-blue/25 transition-all duration-300"
      >
        Trade {coin.symbol}
        <ArrowRight size={14} strokeWidth={2.5} />
      </a>
    </motion.div>
  );
}

export function MarketsSection() {
  return (
    <Section id="markets" className="relative bg-bg-base py-24 md:py-32 lg:py-36">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/[0.03] via-transparent to-transparent" />
        <div
          className="absolute top-0 right-0 w-[55%] h-[70%] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 85% 15%, rgba(123,63,228,0.07) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[45%] h-[50%] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 10% 90%, rgba(59,91,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,26rem)_1fr] gap-12 lg:gap-14 xl:gap-20 items-start">
        {/* Left — header & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="lg:sticky lg:top-32 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hero-glass-subtle text-[10px] font-semibold tracking-[0.16em] uppercase text-brand-blue-light mb-6 lg:mb-8">
            <Activity size={12} strokeWidth={2.5} />
            Live Markets
          </div>

          <SectionHeader
            centered={false}
            className="mb-6 lg:mb-8 !text-left [&_h2]:text-left [&_p]:mx-0 [&_p]:max-w-none"
            title="Trending crypto assets"
            description="Real-time prices, 24h volume, and market cap — updated every second across 100+ INR pairs."
          />

          <p className="hidden lg:block text-text-muted text-sm leading-relaxed mb-8 max-w-xs">
            Track the assets moving the market right now. One tap to trade with zero hidden fees.
          </p>

          <div className="hidden lg:flex">
            <Button
              variant="outline"
              size="md"
              className="rounded-full px-6 hero-glass-subtle border-white/[0.08] hover:border-brand-blue/35 hover:bg-white/[0.04] transition-all duration-300"
              onClick={() => {
                window.location.href = MARKETS_URL;
              }}
            >
              View all markets
              <ArrowRight size={16} strokeWidth={2.5} />
            </Button>
          </div>
        </motion.div>

        {/* Right — market table / cards */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="hero-glass rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)]"
        >
          {/* Table header — desktop */}
          <div className="hidden md:grid grid-cols-6 gap-4 px-6 lg:px-7 py-4 border-b border-white/[0.06] bg-white/[0.02] text-text-muted text-[10px] font-semibold uppercase tracking-[0.14em]">
            <span className="col-span-2">Asset</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h Change</span>
            <span className="text-right">Volume</span>
            <span className="text-right">Action</span>
          </div>

          {/* Desktop rows */}
          {COINS.map((coin, i) => (
            <MarketRow key={coin.symbol} coin={coin} index={i} />
          ))}

          {/* Mobile cards */}
          <div className="md:hidden p-4 space-y-3">
            {COINS.map((coin, i) => (
              <MarketCard key={coin.symbol} coin={coin} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
        className="relative mt-10 lg:hidden text-center"
      >
        <Button
          variant="outline"
          size="md"
          className="rounded-full px-7 hero-glass-subtle border-white/[0.08]"
          onClick={() => {
            window.location.href = MARKETS_URL;
          }}
        >
          View all markets
          <ArrowRight size={16} strokeWidth={2.5} />
        </Button>
      </motion.div>
    </Section>
  );
}
