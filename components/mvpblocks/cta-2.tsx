import Link from 'next/link';
import { Rocket, Phone, Sparkles } from 'lucide-react';

export default function CTA2() {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div 
        className="relative w-full max-w-5xl overflow-hidden rounded-[40px] p-6 sm:p-10 md:p-14"
        style={{
          background: 'linear-gradient(135deg, #35868e 0%, #3faeb0 50%, #40d2c5 100%)'
        }}
      >
        
        {/* Background Circle Design */}
        <div className="absolute inset-0 hidden w-full overflow-hidden md:block">
          <div className="absolute top-1/2 right-[-35%] aspect-square w-[700px] -translate-y-1/2">
            <div className="absolute inset-0 rounded-full opacity-30" style={{ backgroundColor: '#3faeb0' }}></div>
            <div className="absolute inset-0 scale-[0.8] rounded-full opacity-30" style={{ backgroundColor: '#40d2c5' }}></div>
            <div className="absolute inset-0 scale-[0.6] rounded-full opacity-30" style={{ backgroundColor: '#bbccc2' }}></div>
            <div className="absolute inset-0 scale-[0.4] rounded-full opacity-30" style={{ backgroundColor: '#f9f3e5' }}></div>
            <div className="absolute inset-0 scale-[0.2] rounded-full opacity-30" style={{ backgroundColor: '#f9f3e5' }}></div>
            <div className="absolute inset-0 scale-[0.1] rounded-full opacity-30" style={{ backgroundColor: '#f9f3e5' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: '#f9f3e5' }} />
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: '#f9f3e5' }}>
              Ready to Transform Your Digital Presence?
            </h1>
          </div>

          <p className="mb-6 max-w-md text-base sm:text-lg" style={{ color: '#f9f3e5' }}>
            Get expert software development, stunning websites, and powerful digital marketing solutions all in one place. 
            Let&apos;s build something amazing together and take your business to the next level.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link 
              href="/contact" 
              className="flex w-full items-center justify-between rounded-full px-5 py-3 transition-all hover:scale-105 sm:w-[240px]"
              style={{ 
                backgroundColor: '#0d1b1a',
                color: '#f9f3e5'
              }}
            >
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span className="font-medium">Start Your Project</span>
              </div>
              <div className="h-5 w-5 flex-shrink-0 rounded-full" style={{ backgroundColor: '#40d2c5' }}></div>
            </Link>

            <Link 
              href="https://calendly.com/myenumam/myenum" 
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
                <span className="font-medium">Book a Free Call</span>
              </div>
              <div className="h-5 w-5 flex-shrink-0 rounded-full" style={{ backgroundColor: '#40d2c5' }}></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
