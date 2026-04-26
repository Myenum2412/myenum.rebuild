import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in Tamil Nadu | MyEnum Agency',
  description: 'Top-rated software development company in Tamil Nadu. We offer custom software, web development, and digital marketing services in Chennai, Coimbatore, Salem, and across Tamil Nadu.',
  keywords: ['software development Tamil Nadu', 'web development Tamil Nadu', 'digital marketing Tamil Nadu', 'IT company Tamil Nadu'],
  alternates: {
    canonical: 'https://myenum.in/tamil-nadu',
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

export default function TamilNaduPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Development Excellence in <span className="text-primary">Tamil Nadu</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Empowering businesses across Tamil Nadu with cutting-edge digital solutions. From Chennai to Salem, we are your trusted technology partner.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Features />
      
      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Serving All Major Cities in Tamil Nadu</h2>
            <p className="text-slate-400 mb-6 text-lg">
              MyEnum Agency provides comprehensive IT and digital marketing services to businesses throughout the state, including:
            </p>
            <ul className="grid grid-cols-2 gap-4 text-slate-300">
              <li className="flex items-center gap-2">• Chennai</li>
              <li className="flex items-center gap-2">• Coimbatore</li>
              <li className="flex items-center gap-2">• Salem</li>
              <li className="flex items-center gap-2">• Madurai</li>
              <li className="flex items-center gap-2">• Tiruchirappalli</li>
              <li className="flex items-center gap-2">• Vellore</li>
              <li className="flex items-center gap-2">• Erode</li>
              <li className="flex items-center gap-2">• Tirunelveli</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why Choose Us?</h3>
            <p className="text-slate-300 mb-4">
              With a strong presence in Tamil Nadu, we understand the local business landscape and provide tailored solutions that drive results.
            </p>
            <ul className="space-y-3 text-slate-400">
              <li>✅ Expert Team of Developers & Marketers</li>
              <li>✅ 500+ Projects Delivered Globally</li>
              <li>✅ Localized Support & Global Standards</li>
              <li>✅ Cost-Effective & Scalable Solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2 
        title="Ready to Start Your Project in Tamil Nadu?" 
        description="Let's build something amazing together. Our experts are ready to help your business grow."
        primaryButtonText="Contact Us Today"
      />
    </main>
  );
}
