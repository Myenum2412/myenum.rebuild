'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ServerCog, Headset, Code2, Replace } from 'lucide-react';

const expertises = [
  {
    title: 'Seamless Implementation',
    description: 'We handle the entire setup process from discovery to structural configuration, ensuring Freshworks perfectly aligns with your organizational needs.',
    icon: <ServerCog className="size-6 text-primary" />,
  },
  {
    title: 'Data Migration & Integration',
    description: 'Securely transfer your existing data and integrate Freshworks with your legacy systems, ERPs, and third-party tools via powerful APIs.',
    icon: <Replace className="size-6 text-primary" />,
  },
  {
    title: 'Custom App Development',
    description: 'Need something specific? Our developer teams build custom middleware and Freshworks marketplace apps to extend your platform\'s capabilities.',
    icon: <Code2 className="size-6 text-primary" />,
  },
  {
    title: 'Ongoing Managed Support',
    description: 'Post-deployment, we provide ongoing administration, optimization, and team training to ensure maximum adoption and ROI.',
    icon: <Headset className="size-6 text-primary" />,
  },
];

export default function FreshworksExpertise() {
  return (
    <section className="w-full py-20 md:py-32 bg-background relative border-t border-primary/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Our Freshworks <br />
              <span className="text-primary">Implementation Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buying software is only the first step. As a trusted partner, Myenum Agency brings deep product knowledge and technical prowess to ensure your transition to Freshworks is smooth, rapid, and highly profitable.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                'Certified Freshworks Architects',
                'Zero-downtime Data Migration',
                'Tailored Team Training',
                'Agile Delivery Methodology'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Decorative background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full z-0 pointer-events-none" />
              
              {expertises.map((expertise, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm relative z-10 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    {expertise.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{expertise.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {expertise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
