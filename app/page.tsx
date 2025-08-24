import Features from "@/components/features-12";
import Footer from "@/components/footer";
import { GlowingTable } from "@/components/GlowingTable";
import HeroSection from "@/components/hero-section";
import HomeContactForm from "@/components/HomeContactForm";
import IntegrationsSection from "@/components/integrations-8";
import LogoCloud from "@/components/logo-cloud";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Analytics />
      <HeroSection />
      <LogoCloud />
      <Features />
      <GlowingTable />
      <IntegrationsSection />
      <TeamSection />
      {/* Centered and shifted Testimonials */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="translate-x-10">
          <Testimonials />
        </div>
      </div>
      <HomeContactForm />
      <Footer />
    </div>
  );
}
