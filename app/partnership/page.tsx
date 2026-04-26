import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FreshworksFeatures from '@/components/FreshworksFeatures';
import FreshworksExpertise from '@/components/FreshworksExpertise';
import FreshworksStats from '@/components/FreshworksStats';
import FreshworksProducts from '@/components/FreshworksProducts';
import CTA2 from '@/components/mvpblocks/cta-2';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partnership Program | MyEnum Agency - Become a Partner for Software & Digital Solutions',
  description: 'Partner with MyEnum Agency for complete business solutions, software development, and digital marketing. Join our partnership program for mutual growth. Freshworks Partner. India, UAE, USA, Global partners welcome.',
  keywords: [
    'partnership',
    'partnership program',
    'become a partner',
    'business partnership',
    'software partnership',
    'digital partnership',
    'partner with us',
    'reseller partnership',
    'referral program',
    'affiliate program',
    'White label partnership',
    'technology partner',
    'business partner',
    'strategic partnership',
    'Freshworks partner',
    'Freshworks implementation partner',
    'software implementation partner',
    'channel partner',
    'solution partner',
    'consulting partner',
    'integration partner',
    'partnership inquiry',
    'grow business together',
    'mutual growth',
    'collaboration',
    'joint venture',
    'business collaboration',
    'technology collaboration',
    'startup partnership',
    'enterprise partnership',
    'SMB partnership',
    'partnership benefits',
    'partner network',
    'partners directory',
    'IT partnership',
    'digital transformation partner',
    'software development partner',
    'web development partner',
    'mobile app partner',
    'digital marketing partner',
    'India partnership',
    'UAE partnership',
    'USA partnership',
    'UK partnership',
    'global partnership',
    'partnership opportunities',
    'partnership for growth',
    'partnership for business',
    'partnership for software',
    'partnership for digital marketing',
    'Salem partnership',
    'Chennai partnership',
    'Kerala partnership',
    'Dubai partnership',
    'Bangalore partnership',
    'co-partnership',
    'corporate partnership',
    'business alliance',
    'strategic alliance',
  ],
  openGraph: {
    title: 'Partnership Program | MyEnum Agency',
    description: 'Partner with MyEnum Agency for complete business solutions, software development, and digital marketing. Join our partnership program.',
    url: 'https://myenum.in/partnership',
    siteName: 'MyEnum Agency',
    type: 'website',
    images: [
      {
        url: '/iconc.webp',
        width: 1200,
        height: 630,
        alt: 'MyEnum Agency Partnership Program',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership Program | MyEnum Agency',
    description: 'Partner with MyEnum Agency for complete business solutions, software development, and digital marketing.',
  },
  alternates: {
    canonical: 'https://myenum.in/partnership',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function PartnershipPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 gap-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Partnership
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          We believe in growing together. Reach out to us to explore exciting partnership opportunities and mutual growth.
        </p>

        <div className="mt-16 md:mt-24 w-full max-w-5xl mx-auto p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 backdrop-blur-md shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground max-w-xl text-balance leading-snug text-center md:text-left">
              Elevating Business Solutions as a Proud Freshworks Partner.
            </h2>
            <a 
              href="https://www.freshworks.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block w-56 h-16 md:w-72 md:h-24 transition-all duration-300 transform group-hover:scale-105 shrink-0 hover:opacity-80 cursor-pointer"
            >
              <Image 
                src="/image/freshworks.svg" 
                alt="Freshworks Partner Logo" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </a>
          </div>
        </div>
      </main>

      <div className="w-full relative z-10 border-t border-primary/5 bg-background">
        <FreshworksFeatures />
      </div>

      <FreshworksStats />
      <FreshworksExpertise />
      <FreshworksProducts />

      <CTA2 
        title="Ready to transform your customer experience?" 
        description="Let's discuss how MyEnum Agency and Freshworks can elevate your business operations and delight your customers." 
        primaryButtonText="Get in Touch"
        secondaryButtonText="Book Implementation Call"
      />

    </div>
  );
}
