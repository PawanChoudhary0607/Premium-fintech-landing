"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              Trusted • Secure • Fast
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Start Your Crypto Journey
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Buy, sell and manage your digital assets with a modern,
              secure platform built for speed and simplicity.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#markets"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur"
              >
                Explore Markets
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="mt-1 text-sm text-white/60">
                  Active Users
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">$12B+</div>
                <div className="mt-1 text-sm text-white/60">
                  Trading Volume
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">99.99%</div>
                <div className="mt-1 text-sm text-white/60">
                  Platform Uptime
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
