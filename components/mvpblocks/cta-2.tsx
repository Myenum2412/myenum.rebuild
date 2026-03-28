import Link from 'next/link';
import { Rocket, Phone, Sparkles } from 'lucide-react';

interface CTA2Props {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA2({
  title = "Ready to Transform Your Digital Presence?",
  description = "Get expert software development, stunning websites, and powerful digital marketing solutions all in one place. Let's build something amazing together and take your business to the next level.",
  primaryButtonText = "Start Your Project",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Book a Free Call",
  secondaryButtonLink = "https://calendly.com/myenumam/myenum"
}: CTA2Props) {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div 
        className="relative w-full max-w-7xl overflow-hidden rounded-[40px] px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12"
        style={{
          background: 'linear-gradient(135deg, #35868e 0%, #3faeb0 50%, #40d2c5 100%)'
        }}
      >
        
        {/* Background Circle Design */}
        <div className="absolute inset-0 hidden w-full overflow-hidden md:block">
          <div className="absolute top-1/2 right-[-20%] aspect-square w-[800px] -translate-y-1/2">
            <div className="absolute inset-0 rounded-full opacity-30" style={{ backgroundColor: '#3faeb0' }}></div>
            <div className="absolute inset-0 scale-[0.8] rounded-full opacity-30" style={{ backgroundColor: '#40d2c5' }}></div>
            <div className="absolute inset-0 scale-[0.6] rounded-full opacity-30" style={{ backgroundColor: '#bbccc2' }}></div>
            <div className="absolute inset-0 scale-[0.4] rounded-full opacity-30" style={{ backgroundColor: '#f9f3e5' }}></div>
            <div className="absolute inset-0 scale-[0.2] rounded-full opacity-30" style={{ backgroundColor: '#f9f3e5' }}></div>
            <div className="absolute inset-0 scale-[0.1] rounded-full opacity-30" style={{ backgroundColor: '#f9f3e5' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" style={{ color: '#f9f3e5' }} />
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-balance" style={{ color: '#f9f3e5' }}>
                {title}
              </h1>
            </div>

            <p className="text-base sm:text-lg" style={{ color: '#f9f3e5' }}>
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link 
              href={primaryButtonLink} 
              className="flex w-full items-center justify-between rounded-full px-5 py-3 transition-all hover:scale-105 sm:w-[240px]"
              style={{ 
                backgroundColor: '#0d1b1a',
                color: '#f9f3e5'
              }}
            >
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span className="font-medium">{primaryButtonText}</span>
              </div>
              <div className="h-5 w-5 flex-shrink-0 rounded-full" style={{ backgroundColor: '#40d2c5' }}></div>
            </Link>

            <Link 
              href={secondaryButtonLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-full px-5 py-3 transition-all hover:scale-105 sm:w-[240px]"
              style={{ 
                backgroundColor: '#124c4a',
                color: '#f9f3e5'
              }}
            >
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">{secondaryButtonText}</span>
              </div>
              <div className="h-5 w-5 flex-shrink-0 rounded-full" style={{ backgroundColor: '#40d2c5' }}></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
