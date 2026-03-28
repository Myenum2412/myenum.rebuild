"use client";

import { HeroHeader } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import Footer from "@/components/footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroHeader />
      {children}
      <Footer />
      <ExitIntentPopup />
      <WhatsAppWidget />
      <Toaster duration={5000} position="top-right" />
    </>
  );
}
