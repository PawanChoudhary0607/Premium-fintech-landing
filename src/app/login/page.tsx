"use client";

import { LogIn } from "lucide-react";
import { ComingSoonPage } from "@/components/auth/ComingSoonPage";

export default function LoginPage() {
  return (
    <ComingSoonPage
      eyebrow="Login"
      title="Account access is coming soon."
      description="The ArthBit login experience is being prepared for launch. Soon you will be able to securely access your portfolio, orders, wallets, and support tools from here."
      icon={LogIn}
    />
  );
}
