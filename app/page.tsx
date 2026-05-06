import Features from '@/components/features-12';
import { GlowingTable } from '@/components/GlowingTable';
import HeroSection from '@/components/hero-section';
import IntegrationsSection from '@/components/integrations-8';
import LogoCloud from '@/components/logo-cloud';
import TeamSection from '@/components/team';
import CTA2 from '@/components/mvpblocks/cta-2';
import SEO from '@/components/SEO';




<SEO title="MyEnum Agency | Best Software Development Company & Digital Marketing Agency" description="MyEnum Agency is a top-rated software development company and digital marketing agency offering custom software, SaaS products, web development, and mobile apps globally. 500+ projects delivered. Get a free quote today!" keywords={["MyEnum Agency","software development","website development","digital marketing","mobile app development","custom software","SaaS development","web development","digital transformation","business solutions"]} />
export default function Home() {
  return (
    <>

      <main className="overflow-hidden">
        <HeroSection />
        <LogoCloud />
        <Features />
        <GlowingTable />
        <IntegrationsSection />
        <TeamSection />
        <CTA2 />
      </main>
    </>
  );
}
