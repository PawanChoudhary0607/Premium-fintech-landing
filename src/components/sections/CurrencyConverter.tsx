"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownUp, Calculator, RefreshCw } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut } from "@/components/ui/SectionVisuals";
import { cn } from "@/lib/utils";

type Currency = "INR" | "USD" | "EUR" | "GBP" | "BTC" | "ETH";

const CURRENCIES: Currency[] = ["INR", "USD", "EUR", "GBP", "BTC", "ETH"];

const USD_RATES: Record<Currency, number> = {
  INR: 0.012,
  USD: 1,
  EUR: 1.08,
  GBP: 1.27,
  BTC: 65000,
  ETH: 3400,
};

const CURRENCY_META: Record<Currency, { name: string; accent: string }> = {
  INR: { name: "Indian Rupee", accent: "from-emerald-500 to-teal-400" },
  USD: { name: "US Dollar", accent: "from-brand-blue to-brand-cyan" },
  EUR: { name: "Euro", accent: "from-brand-violet to-fuchsia-500" },
  GBP: { name: "British Pound", accent: "from-sky-400 to-indigo-500" },
  BTC: { name: "Bitcoin", accent: "from-orange-400 to-orange-600" },
  ETH: { name: "Ethereum", accent: "from-indigo-400 to-brand-violet" },
};

function formatValue(value: number, currency: Currency) {
  if (currency === "BTC" || currency === "ETH") {
    return value.toLocaleString("en-IN", {
      maximumFractionDigits: value >= 1 ? 4 : 8,
      minimumFractionDigits: value >= 1 ? 2 : 6,
    });
  }

  return value.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}

function CurrencySelect({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: Currency;
  onChange: (value: Currency) => void;
}) {
  const meta = CURRENCY_META[value];

  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
        {label}
      </span>
      <div className="relative">
        <span
          aria-hidden
          className={cn(
            "absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-xl bg-gradient-to-br",
            meta.accent
          )}
        />
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value as Currency)}
          className="h-14 w-full appearance-none rounded-2xl border border-white/[0.06] bg-bg-base/70 pl-14 pr-10 text-sm font-semibold text-text-primary outline-none transition-colors focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/25"
        >
          {CURRENCIES.map((currency) => (
            <option key={currency} value={currency} className="bg-bg-base text-text-primary">
              {currency} - {CURRENCY_META[currency].name}
            </option>
          ))}
        </select>
        <ArrowDownUp
          aria-hidden
          size={15}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-text-muted"
        />
      </div>
    </label>
  );
}

export function CurrencyConverter() {
  const [amount, setAmount] = useState("10000");
  const [from, setFrom] = useState<Currency>("INR");
  const [to, setTo] = useState<Currency>("BTC");

  const converted = useMemo(() => {
    const numeric = Number.parseFloat(amount) || 0;
    return (numeric * USD_RATES[from]) / USD_RATES[to];
  }, [amount, from, to]);

  const exchangeRate = useMemo(() => USD_RATES[from] / USD_RATES[to], [from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <Section id="converter" className="relative bg-bg-base py-14 md:py-20">
      <AmbientField variant="mixed" className="opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
      >
        <div className="text-center lg:text-left">
          <EyebrowBadge icon={Calculator} className="mb-6">
            Currency converter
          </EyebrowBadge>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-5xl">
            Convert fiat and crypto instantly.
          </h2>
          <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">
            Demo rates are stored locally for a fast, API-free landing page experience.
          </p>
        </div>

        <PremiumCard className="p-4 sm:p-5 lg:p-6" hover={false}>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
            <div>
              <label htmlFor="converter-amount" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Amount
              </label>
              <input
                id="converter-amount"
                inputMode="decimal"
                value={amount}
                onChange={(event) => setAmount(event.target.value.replace(/[^\d.]/g, ""))}
                className="h-14 w-full rounded-2xl border border-white/[0.06] bg-bg-base/70 px-4 font-mono text-lg font-semibold text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/25"
                placeholder="0.00"
                aria-label="Amount to convert"
              />
              <div className="mt-4">
                <CurrencySelect id="converter-from" label="From" value={from} onChange={setFrom} />
              </div>
            </div>

            <button
              type="button"
              onClick={swap}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-brand-blue-light transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base lg:mb-1"
              aria-label="Swap currencies"
            >
              <RefreshCw size={18} />
            </button>

            <div>
              <div className="rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Converted value
                </p>
                <p className="mt-2 break-words font-mono text-2xl font-black tracking-[-0.03em] text-text-primary sm:text-3xl">
                  {formatValue(converted, to)} <span className="text-brand-blue-light">{to}</span>
                </p>
                <p className="mt-2 text-xs text-text-secondary">
                  1 {from} = {formatValue(exchangeRate, to)} {to}
                </p>
              </div>
              <div className="mt-4">
                <CurrencySelect id="converter-to" label="To" value={to} onChange={setTo} />
              </div>
            </div>
          </div>
        </PremiumCard>
      </motion.div>
    </Section>
  );
}
