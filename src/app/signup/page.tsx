"use client";

import { UserRoundPlus } from "lucide-react";
import { ComingSoonPage } from "@/components/auth/ComingSoonPage";

export default function SignupPage() {
  return (
    <ComingSoonPage
      eyebrow="Sign up"
      title="Your trading account is almost ready."
      description="ArthBit onboarding is being polished for launch. Soon you will be able to create an account, complete KYC, add INR, and place your first trade in minutes."
      icon={UserRoundPlus}
    />
  );
}
