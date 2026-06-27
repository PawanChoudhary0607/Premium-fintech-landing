import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CurrencyConverter } from "@/components/sections/CurrencyConverter";
import { Ticker } from "@/components/sections/Ticker";
import { MarketsSection } from "@/components/sections/MarketsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AppSection } from "@/components/sections/AppSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CurrencyConverter />
        <Ticker />
        <MarketsSection />
        <FeaturesSection />
        <StatsSection />
        <HowItWorksSection />
        <SecuritySection />
        <AppSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
