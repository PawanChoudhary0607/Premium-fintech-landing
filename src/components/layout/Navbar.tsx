"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const TRADE_URL = "https://www.arthbit.com/trade";

const easeOut = [0.22, 1, 0.36, 1] as const;

const navLinkMotion = {
  hidden: { opacity: 0, y: -6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.04, duration: 0.45, ease: easeOut },
  }),
};

export function Navbar() {
  const scrolled = useScrolled(32);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeOut }}
        className={cn(
          "fixed z-50 left-0 right-0 transition-[top,padding] duration-500 ease-out",
          scrolled ? "top-0 px-0" : "top-3 sm:top-5 px-3 sm:px-5 lg:px-8"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-[max-width] duration-500",
            scrolled ? "max-w-full" : "max-w-6xl"
          )}
        >
          <div
            className={cn(
              "relative flex items-center justify-between transition-all duration-500",
              scrolled
                ? [
                    "h-16 md:h-[4.25rem] px-4 sm:px-6 lg:px-8",
                    "bg-bg-base/80 backdrop-blur-2xl",
                    "border-b border-white/[0.06]",
                    "shadow-[0_12px_48px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)]",
                  ]
                : [
                    "h-14 md:h-[3.75rem] px-4 md:px-5 lg:px-7",
                    "nav-glass rounded-2xl md:rounded-full",
                    "shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.09)]",
                  ]
            )}
          >
            {!scrolled && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-full overflow-hidden"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-brand-blue/10 blur-3xl" />
              </div>
            )}

            {/* Logo */}
            <a href="/" className="relative flex items-center gap-2.5 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-brand-blue via-brand-blue to-brand-violet flex items-center justify-center shadow-glow-blue group-hover:shadow-glow-violet transition-shadow duration-300 ring-1 ring-white/10"
              >
                <Zap size={16} className="text-white" fill="white" />
              </motion.div>
              <span className="text-lg md:text-xl font-bold tracking-tight">
                <span className="text-text-primary">Arth</span>
                <span className="text-gradient">Bit</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={navLinkMotion}
                  className="group relative px-4 py-2 text-[13px] font-medium tracking-wide text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-brand-blue/0 via-brand-blue to-brand-violet/0 transition-transform duration-300 origin-center" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
              <motion.a
                href={TRADE_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="px-3 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Log in
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.45, ease: easeOut }}
              >
                <Button
                  size="sm"
                  className="rounded-full px-5 shadow-[0_4px_24px_rgba(59,91,255,0.35)] hover:shadow-[0_6px_32px_rgba(123,63,228,0.4)]"
                  onClick={() => window.open(TRADE_URL, "_blank")}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu toggle */}
            <button
              className={cn(
                "md:hidden relative z-10 p-2.5 rounded-xl transition-all duration-200",
                mobileOpen
                  ? "text-text-primary bg-white/[0.08]"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-bg-base/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: easeOut }}
              className="fixed top-[4.75rem] left-3 right-3 z-40 md:hidden nav-glass rounded-2xl border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden"
            >
              <div className="px-3 py-4 flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease: easeOut }}
                    className="px-4 py-3.5 text-[15px] font-medium text-text-secondary hover:text-text-primary hover:bg-white/[0.04] rounded-xl transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-3 pt-4 border-t border-white/[0.06] flex flex-col gap-2.5 px-1">
                  <Button
                    variant="secondary"
                    fullWidth
                    className="rounded-xl"
                    onClick={() => {
                      setMobileOpen(false);
                      window.open(TRADE_URL, "_blank");
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    fullWidth
                    className="rounded-xl shadow-[0_4px_24px_rgba(59,91,255,0.3)]"
                    onClick={() => {
                      setMobileOpen(false);
                      window.open(TRADE_URL, "_blank");
                    }}
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
