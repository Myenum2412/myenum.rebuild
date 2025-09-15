import SeoHead from '@/components/SeoHead';
import Features from '@/components/features-12';
import Footer from '@/components/footer';
import { GlowingTable } from '@/components/GlowingTable';
import HeroSection from '@/components/hero-section';
import HomeContactForm from '@/components/HomeContactForm';
import IntegrationsSection from '@/components/integrations-8';
import LogoCloud from '@/components/logo-cloud';
import TeamSection from '@/components/team';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <SeoHead
        title="Myenum Agency - Advanced SaaS Solutions & Software Development"
        description="Myenum Agency offers advanced SaaS solutions, custom software development, and digital transformation services for businesses. Contact us today!"
        keywords="SaaS solutions, software development, Myenum Agency, digital transformation, business solutions, web app development"
        canonicalUrl="https://www.myenum.in/"
      />

      <main className="overflow-hidden">
        <HeroSection />
        <LogoCloud />
        <Features />
        <GlowingTable />
        <IntegrationsSection />
        <TeamSection />

        <section aria-label="Testimonials" className="flex items-center justify-center min-h-screen">
          <div className="translate-x-10">
            <Testimonials />
          </div>
        </section>

        <HomeContactForm />
        <Footer />
      </main>
    </>
  );
}
