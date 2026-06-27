import type { CryptoAsset, Feature, Stat, FAQItem, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Markets", href: "#markets" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "App", href: "#app" },
  { label: "FAQ", href: "#faq" },
];

export const TICKER_ASSETS: CryptoAsset[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "₹62,43,885",
    change: "+1.24%",
    changePercent: "+1.24",
    positive: true,
    icon: "₿",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "₹1,63,934",
    change: "-0.65%",
    changePercent: "-0.65",
    positive: false,
    icon: "Ξ",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    price: "₹109.48",
    change: "-0.20%",
    changePercent: "-0.20",
    positive: false,
    icon: "✕",
  },
  {
    symbol: "USDT",
    name: "Tether",
    price: "₹84.52",
    change: "+0.02%",
    changePercent: "+0.02",
    positive: true,
    icon: "₮",
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "₹52,840",
    change: "+2.15%",
    changePercent: "+2.15",
    positive: true,
    icon: "◆",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "₹14,220",
    change: "+4.30%",
    changePercent: "+4.30",
    positive: true,
    icon: "◎",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: "₹14.87",
    change: "-1.80%",
    changePercent: "-1.80",
    positive: false,
    icon: "Ð",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "₹38.92",
    change: "+0.91%",
    changePercent: "+0.91",
    positive: true,
    icon: "₳",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "fast",
    title: "Instant Onboarding",
    description:
      "Sign up, complete video KYC, and start trading in under 5 minutes. No paperwork, no branch visits — fully digital from day one.",
    icon: "Zap",
  },
  {
    id: "risk",
    title: "Start with ₹100",
    description:
      "You don't need deep pockets to build a portfolio. Invest in fractional crypto starting from just ₹100 — because every rupee counts.",
    icon: "TrendingUp",
  },
  {
    id: "secure",
    title: "Bank-Grade Security",
    description:
      "Multi-layer encryption, cold storage for 95% of assets, and real-time fraud monitoring protect every trade and withdrawal.",
    icon: "ShieldCheck",
  },
  {
    id: "markets",
    title: "100+ Trading Pairs",
    description:
      "Access Bitcoin, Ethereum, and 100+ altcoins paired with INR. Spot trading, limit orders, and advanced charting — all in one place.",
    icon: "BarChart2",
  },
  {
    id: "staking",
    title: "Earn While You Hold",
    description:
      "Put idle crypto to work with ArthBit Staking. Earn passive yields on BTC, ETH, and top stablecoins — no lockups required.",
    icon: "Coins",
  },
  {
    id: "support",
    title: "24 / 7 Support",
    description:
      "Our team is online around the clock. Reach us via live chat, email, or our help center — real humans, not bots.",
    icon: "Headphones",
  },
];

export const STATS: Stat[] = [
  { value: "2M", label: "Registered users", prefix: "" },
  { value: "100", label: "Crypto assets listed", suffix: "+" },
  { value: "₹500Cr", label: "Monthly trading volume", prefix: "" },
  { value: "99.9", label: "Platform uptime", suffix: "%" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do I start trading on ArthBit?",
    answer:
      "Getting started is simple. Download the ArthBit app or visit arthbit.com, create a free account with your email, complete a quick video KYC using your Aadhaar and PAN, and deposit INR via UPI, IMPS, or NEFT. Once your account is funded, you can instantly buy or sell any listed asset.",
  },
  {
    question: "Is ArthBit safe? How is my money protected?",
    answer:
      "ArthBit employs bank-grade AES-256 encryption, stores 95% of user funds in air-gapped cold wallets, and uses two-factor authentication across all accounts. We partner with leading insurance providers to cover digital assets, and our risk engine monitors all activity 24/7 for suspicious behaviour.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "You can start investing with as little as ₹100. ArthBit supports fractional crypto purchases, so you don't need thousands of rupees to own Bitcoin or Ethereum. Your investment grows with you — from ₹100 to ₹1 crore and beyond.",
  },
  {
    question: "What are ArthBit's trading fees?",
    answer:
      "ArthBit charges a transparent flat maker/taker fee starting from 0.1% per trade. There are no hidden fees, no deposit charges, and INR withdrawals to your linked bank account are free. Volume-based discounts are available for high-frequency traders.",
  },
  {
    question: "What is the IEO (Initial Exchange Offering) section?",
    answer:
      "ArthBit IEO gives you early access to promising new crypto projects before they list on public markets. Projects are rigorously vetted by our team. Participation is open to all verified ArthBit users on a first-come, first-served basis.",
  },
  {
    question: "How does ArthBit Staking work?",
    answer:
      "Staking on ArthBit lets you earn passive rewards by locking supported assets for a chosen period. APY rates vary by asset and lock-in duration. Rewards are credited to your wallet daily, and you can unstake at any time with flexible-term plans — no penalties on flexible stakes.",
  },
];
