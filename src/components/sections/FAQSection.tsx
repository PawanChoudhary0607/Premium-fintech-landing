"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, HelpCircle, Minus, Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AmbientField, EyebrowBadge, PremiumCard, easeOut, fadeUp } from "@/components/ui/SectionVisuals";
import { FAQ_ITEMS } from "@/lib/data";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-35px" }}
      className="border-b border-white/[0.055] last:border-0"
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          className="group flex w-full items-start justify-between gap-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="text-base font-semibold leading-7 text-text-primary transition-colors duration-200 group-hover:text-brand-blue-light sm:text-lg">
            {question}
          </span>
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025] text-text-muted transition-all duration-200 group-hover:border-brand-blue/30 group-hover:text-brand-blue-light">
            {isOpen ? <Minus size={15} /> : <Plus size={15} />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-0 text-sm leading-7 text-text-secondary sm:pr-14">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="relative bg-bg-base py-24 md:py-32 lg:py-36">
      <AmbientField variant="blue" />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center lg:sticky lg:top-32 lg:self-start lg:text-left"
        >
          <EyebrowBadge icon={HelpCircle} className="mb-7">
            FAQ
          </EyebrowBadge>
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.8rem]">
            Clear answers before your first trade.
          </h2>
          <p className="mt-7 text-base leading-8 text-text-secondary sm:text-lg">
            The essentials on onboarding, security, fees, staking, and support. For anything more
            specific, the help center is always open.
          </p>

          <PremiumCard className="mt-9 p-5 text-left sm:p-6" hover={false}>
            <p className="text-sm font-semibold text-text-primary">Still have questions?</p>
            <p className="mt-2 text-sm leading-7 text-text-secondary">
              Visit the help center or contact the support team for account-specific guidance.
            </p>
            <a
              href="https://support.arthbit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              Visit Help Center
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </PremiumCard>
        </motion.div>

        <PremiumCard className="p-1 sm:p-2" hover={false}>
          <div className="rounded-[1.35rem] bg-bg-base/45 px-4 sm:px-6">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </PremiumCard>
      </div>
    </Section>
  );
}
