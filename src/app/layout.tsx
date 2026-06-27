import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArthBit - Buy & Sell Crypto in Minutes",
  description:
    "Trade Bitcoin, Ethereum, USDT and top altcoins on ArthBit - India's fastest-growing crypto exchange. Real-time prices, zero hidden fees, and bank-grade security.",
  keywords: [
    "crypto exchange India",
    "buy bitcoin India",
    "sell ethereum INR",
    "crypto trading platform",
    "BTC INR",
    "ArthBit",
    "cryptocurrency exchange",
  ],
  authors: [{ name: "ArthBit" }],
  creator: "ArthBit",
  publisher: "ArthBit",
  metadataBase: new URL("https://www.arthbit.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.arthbit.com",
    title: "ArthBit - Buy & Sell Crypto in Minutes",
    description:
      "India's premier crypto exchange. Trade BTC, ETH, XRP and 100+ altcoins with INR. Instant KYC, bank-grade security, and real-time markets.",
    siteName: "ArthBit",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArthBit - Buy & Sell Crypto in Minutes",
    description:
      "India's premier crypto exchange. Trade BTC, ETH, XRP and 100+ altcoins with INR.",
    creator: "@arthbit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
