import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import FreshworksFeatures from '@/components/FreshworksFeatures';
import FreshworksExpertise from '@/components/FreshworksExpertise';
import FreshworksStats from '@/components/FreshworksStats';
import FreshworksProducts from '@/components/FreshworksProducts';
import CTA2 from '@/components/mvpblocks/cta-2';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partnership - Myenum Agency',
  description: 'Partner with Myenum Agency for complete business solutions, software development, and digital marketing.',
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
        description="Let's discuss how Myenum Agency and Freshworks can elevate your business operations and delight your customers." 
        primaryButtonText="Get in Touch"
        secondaryButtonText="Book Implementation Call"
      />

      <Footer />
    </div>
  );
}
