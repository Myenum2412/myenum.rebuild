"use client";

import { HeroHeader } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroHeader />
      {children}
      <Toaster duration={5000} position="top-right" />
    </>
  );
}
