import SeoHead from '@/components/SeoHead';
import Features from '@/components/features-12';
import Footer from '@/components/footer';
import { GlowingTable } from '@/components/GlowingTable';
import HeroSection from '@/components/hero-section';
import IntegrationsSection from '@/components/integrations-8';
import LogoCloud from '@/components/logo-cloud';
import TeamSection from '@/components/team';
import CTA2 from '@/components/mvpblocks/cta-2';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Myenum Agency - Transform Your Digital Presence | Software, Website & Digital Marketing',
  description: 'Ready to transform your digital presence? Get expert software development, stunning websites, and powerful digital marketing solutions. Start your project today with Myenum Agency.',
  keywords: [
    'digital transformation',
    'software development',
    'website development',
    'digital marketing',
    'business solutions',
    'start your project',
    'book free consultation',
    'custom software',
    'web development',
    'digital presence',
  ],
  openGraph: {
    title: 'Transform Your Digital Presence with Myenum Agency',
    description: 'Get expert software development, stunning websites, and powerful digital marketing solutions. Start your project today!',
    url: 'https://www.myenum.in/',
    siteName: 'Myenum Agency',
    images: [
      {
        url: 'https://www.myenum.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Myenum Agency - Transform Your Digital Presence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform Your Digital Presence with Myenum Agency',
    description: 'Get expert software development, stunning websites, and powerful digital marketing solutions. Start your project today!',
    images: ['https://www.myenum.in/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.myenum.in/',
  },
};

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
        <CTA2 />
        <Footer />
      </main>
    </>
  );
}
