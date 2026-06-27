import { Zap, Twitter, Linkedin, Youtube, Send } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    { label: "Spot Trading", href: "/signup" },
    { label: "Instant Buy", href: "/signup" },
    { label: "Staking", href: "#features" },
    { label: "IEO", href: "/signup" },
    { label: "Markets", href: "#markets" },
  ],
  Company: [
    { label: "About Us", href: "#features" },
    { label: "Fees", href: "#faq" },
    { label: "Referral Program", href: "/signup" },
    { label: "Rewards", href: "#features" },
    { label: "Contact Us", href: "/login" },
  ],
  Support: [
    { label: "Help Center", href: "/login" },
    { label: "Security", href: "#security" },
    { label: "KYC Guide", href: "#faq" },
    { label: "INR Deposit & Withdrawal", href: "#faq" },
    { label: "Bug Bounty", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-glow-blue">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-text-primary">Arth</span>
                <span className="text-gradient">Bit</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              India's fastest-growing crypto exchange. Trade Bitcoin, Ethereum, and 100+ altcoins
              with INR — securely, instantly, 24/7.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-brand-blue-light hover:border-brand-blue/40 transition-all duration-150"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-text-primary text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} ArthBit Exchange Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-text-muted hover:text-text-secondary text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-text-muted text-xs leading-relaxed">
          Cryptocurrency investments are subject to market risks. Past performance is not indicative
          of future results. ArthBit does not provide investment advice. Please read all risk
          disclosures before trading.
        </p>
      </div>
    </footer>
  );
}
