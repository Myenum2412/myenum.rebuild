import Features from '@/components/features-12';
import { GlowingTable } from '@/components/GlowingTable';
import HeroSection from '@/components/hero-section';
import IntegrationsSection from '@/components/integrations-8';
import LogoCloud from '@/components/logo-cloud';
import TeamSection from '@/components/team';
import CTA2 from '@/components/mvpblocks/cta-2';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyEnum Agency | Best Software Development Company India & Global',
  description: 'Transform your digital presence with MyEnum Agency. Expert software development, custom websites, mobile apps, SaaS products, and digital marketing services. 500+ projects delivered globally. Get free quote today!',
  keywords: [
    "MyEnum Agency",
    "software development",
    "website development",
    "digital marketing",
    "mobile app development",
    "custom software",
    "SaaS development",
    "web development",
    "digital transformation",
    "business solutions",
  ],
  openGraph: {
    title: 'MyEnum Agency | Best Software Development Company India & Global',
    description: 'Transform your digital presence with MyEnum Agency. Expert software development, custom websites, mobile apps, SaaS products, and digital marketing services.',
    url: 'https://myenum.in/',
    siteName: 'MyEnum Agency',
    images: [
      {
        url: '/iconc.webp',
        width: 1200,
        height: 630,
        alt: 'MyEnum Agency - Software Development & Digital Marketing',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyEnum Agency | Best Software Development Company India & Global',
    description: 'Transform your digital presence with MyEnum Agency. Expert software development, custom websites, mobile apps, SaaS products, and digital marketing services.',
  },
  alternates: {
    canonical: 'https://myenum.in/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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
