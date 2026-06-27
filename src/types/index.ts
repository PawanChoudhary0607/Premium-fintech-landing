export interface CryptoAsset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  positive: boolean;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
