import SEO from '@/components/SEO';
import { getMergedKeywords } from '@/src/seo/defaultKeywords';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';




<SEO title="Software Development Company in UK | MyEnum Agency - London, Manchester, Birmingham" description="Leading software development company serving the UK market. Custom software, web development, mobile apps, and digital marketing for businesses in London, Manchester, Birmingham, and across the United Kingdom." keywords={getMergedKeywords('/uk')} />
export default function UKPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Development & Digital Services in the <span className="text-primary">United Kingdom</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            From London&apos;s financial district to Manchester&apos;s tech hub - we deliver enterprise-grade software solutions and digital marketing to UK businesses of all sizes.
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Major UK Cities</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Trusted by businesses across England, Scotland, Wales, and Northern Ireland</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: 'London', desc: 'Financial & tech capital - Enterprise & fintech solutions' },
            { city: 'Manchester', desc: 'Northern Powerhouse - Startup & scale-up support' },
            { city: 'Birmingham', desc: 'Midlands hub - Manufacturing & retail software' },
            { city: 'Edinburgh', desc: 'Scotland\'s capital - Financial & tourism tech' },
            { city: 'Bristol', desc: 'Creative hub - Digital agencies & media tech' },
            { city: 'Leeds', desc: 'Yorkshire business - Professional services software' },
          ].map((loc) => (
            <div key={loc.city} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">{loc.city}</h3>
              <p className="text-slate-400 text-sm">{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why UK Businesses Partner With Us</h2>
            <p className="text-slate-400 mb-6 text-lg">Bridging the gap between Indian technical talent and UK business needs.</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Time Zone Advantage:</strong> 4.5 hours ahead enables overnight development</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>English Fluency:</strong> Clear communication with UK teams</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>GDPR Compliance:</strong> Data protection standards aligned with UK regulations</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Cost Efficiency:</strong> Premium quality at competitive offshore rates</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">UK-Focused Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li>🇬🇧 Fintech & Financial Software</li>
              <li>🇬🇧 E-commerce & Retail Solutions</li>
              <li>🇬🇧 NHS & Healthcare IT</li>
              <li>🇬🇧 Education Technology</li>
              <li>🇬🇧 Local SEO for UK Market</li>
              <li>🇬🇧 .co.uk Website Development</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">UK Industries We Serve</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { industry: 'Financial Services', icon: '💼' },
            { industry: 'Healthcare & NHS', icon: '🏥' },
            { industry: 'Retail & E-commerce', icon: '🛒' },
            { industry: 'Education', icon: '🎓' },
          ].map((item) => (
            <div key={item.industry} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-slate-300 font-medium">{item.industry}</div>
            </div>
          ))}
        </div>
      </section>

      <CTA2
        title="Ready to Transform Your UK Business?"
        description="Schedule a consultation with our team. We understand UK business culture and deliver results that matter."
        primaryButtonText="Contact Us Today"
      />
    </main>
  );
}
