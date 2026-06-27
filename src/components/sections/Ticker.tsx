"use client";

import { TICKER_ASSETS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Ticker() {
  const items = [...TICKER_ASSETS, ...TICKER_ASSETS];

  return (
    <div className="relative border-y border-white/[0.06] bg-bg-base/80 backdrop-blur-md overflow-hidden">
      {/* Soft top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

      <div className="relative flex items-stretch">
        {/* Fixed live label */}
        <div className="relative z-10 flex shrink-0 items-center pl-4 sm:pl-6 lg:pl-8 pr-6 sm:pr-10">
          <div
            className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-r from-bg-base to-transparent pointer-events-none"
            aria-hidden
          />
          <span className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full hero-glass-subtle text-[10px] font-semibold tracking-[0.14em] uppercase text-brand-blue-light whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_6px_rgba(0,211,149,0.6)]" />
            </span>
            Live prices
          </span>
        </div>

        {/* Scrolling track */}
        <div className="flex-1 min-w-0 py-3.5 ticker-container overflow-hidden group/ticker">
          <div
            className="flex gap-10 sm:gap-12 animate-ticker whitespace-nowrap group-hover/ticker:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {items.map((asset, i) => (
              <div
                key={`${asset.symbol}-${i}`}
                className="flex items-center gap-3.5 shrink-0 pr-2"
              >
                <span className="inline-flex items-center gap-1.5 font-mono text-sm">
                  <span className="font-bold text-text-primary tracking-tight">{asset.symbol}</span>
                  <span className="text-text-muted/80 text-xs">/ INR</span>
                </span>
                <span className="text-text-primary font-mono text-sm font-semibold tabular-nums">
                  {asset.price}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold font-mono tabular-nums ring-1",
                    asset.positive
                      ? "text-success bg-success/10 ring-success/15"
                      : "text-danger bg-danger/10 ring-danger/15"
                  )}
                >
                  {asset.change}
                </span>
                <span className="w-px h-4 bg-white/[0.08] shrink-0" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
    </div>
  );
}
