import Head from "next/head";
import Features from "@/components/features-12";
import Footer from "@/components/footer";
import { GlowingTable } from "@/components/GlowingTable";
import HeroSection from "@/components/hero-section";
import HomeContactForm from "@/components/HomeContactForm";
import IntegrationsSection from "@/components/integrations-8";
import LogoCloud from "@/components/logo-cloud";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Digital Marketing Agency in Salem | SEO, PPC, Branding, Content</title>
        <meta name="description" content="Looking for digital marketing services in Salem? Myenum Agency provides SEO services, PPC campaigns, social media marketing, content marketing, branding services, and performance marketing for businesses in Salem, Tamil Nadu." />
        <meta name="keywords" content="digital marketing services in Salem, digital marketing agency Salem, Salem digital marketing company, SEO services Salem, social media marketing Salem, PPC agency Salem, local SEO Salem, Salem branding services, online marketing Salem, Salem digital advertising, content marketing agency Salem, digital marketing consultant Salem, Google Ads agency Salem, digital marketing expert Salem, performance marketing Salem, digital campaign Salem, internet marketing agency Salem, lead generation Salem, ecommerce marketing Salem, hyperlocal digital marketing Salem, AI digital marketing Salem, Salem website marketing, digital marketing packages Salem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.myenum.com/" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Top Digital Marketing Agency in Salem | SEO, PPC, Social Media & Branding" />
        <meta property="og:description" content="Myenum Agency offers expert digital marketing solutions in Salem, Tamil Nadu. Services include SEO, PPC, content marketing, branding, performance marketing, social media management, and more." />
        <meta property="og:url" content="https://www.myenum.com/" />
        <meta property="og:type" content="website" />
      </Head>

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
