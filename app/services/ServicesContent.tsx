'use client';

import { Spotlight } from '@/components/ui/spotlight';
import { TextEffect } from '@/components/ui/text-effect';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { motion } from 'motion/react';
import { Code, Palette, ShoppingCartIcon, Cloud, Settings, Shield } from 'lucide-react';
import Footer from '@/components/footer';
import VerticalTabs from '@/components/ui/vertical-tabs';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// ============================================================================
// Types
// ============================================================================

interface Service {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
  features: string[];
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

// ============================================================================
// Constants
// ============================================================================

const SERVICES: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and scalability.",
    features: ["Next.js & React", "TypeScript", "Responsive Design", "SEO Optimized"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive, user-centered designs that engage visitors and drive conversions.",
    features: ["Figma Designs", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with seamless checkout and inventory management.",
    features: ["Shopify", "WooCommerce", "Payment Gateway", "Inventory Management"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure with automatic backups and 99.9% uptime.",
    features: ["AWS/Azure", "Cloudflare CDN", "Auto-scaling", "Daily Backups"],
  },
  {
    icon: Settings,
    title: "SaaS Development",
    description: "Full-featured SaaS platforms with multi-tenancy and subscription billing.",
    features: ["Multi-tenant Architecture", "Subscription Billing", "API Integration", "Analytics Dashboard"],
  },
  {
    icon: Shield,
    title: "ERP Solutions",
    description: "Enterprise resource planning systems tailored to your business needs.",
    features: ["Inventory Management", "HR Modules", "Financial Tracking", "CRM Integration"],
  },
];

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "AWS", "Docker", "Figma", "Tailwind CSS", "GraphQL"
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your requirements, target audience, and business goals to create a roadmap."
  },
  {
    number: "02",
    title: "Design",
    description: "Our team creates stunning UI/UX designs that align with your brand identity."
  },
  {
    number: "03",
    title: "Development",
    description: "We build your project using cutting-edge technologies with clean, maintainable code."
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy your project with thorough testing and provide ongoing support."
  }
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

// ============================================================================
// Components
// ============================================================================

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Gradient glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/80 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />

      {/* Card content */}
      <div className="relative h-full bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent size={24} className="text-primary" />
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

        {/* Features list */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1 h-1 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ProcessStep({ number, title, description, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {/* Step number */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
        {number}
      </div>

      {/* Content */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        gradientFirst="radial-gradient(80% 50% at 50% 0%, hsla(240, 100%, 20%, 0.3) 0, hsla(240, 100%, 50%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(260, 100%, 20%, 0.2) 0, hsla(260, 100%, 50%, 0) 80%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 20%, 0.15) 0, hsla(280, 100%, 50%, 0) 80%)"
        translateY={-300}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Professional Services</span>
            </motion.div>

            {/* Title with text animation */}
            <TextEffect
              per="word"
              preset="blur"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              Services We Offer
            </TextEffect>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We build blazing-fast websites and beautiful interfaces that boost conversions and stay simple to maintain.
            </motion.p>
          </div>

          {/* Tech Stack Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">Tech Stack We Use</p>
            <InfiniteSlider speed={40} className="py-4">
              {TECH_STACK.map((tech, index) => (
                <div key={index} className="px-6 py-2 mx-4 bg-card/50 rounded-full border border-border">
                  <span className="text-muted-foreground font-medium whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </InfiniteSlider>
          </motion.div>
        </div>
      </section>

      {/* Vertical Tabs Section - Featured Services */}
      <section className="relative py-8">
        <VerticalTabs />
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-12 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground">How we deliver exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="relative py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-12 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gradient background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-2xl opacity-30 blur-xl" />

            {/* Card content */}
            <div className="relative bg-card rounded-2xl p-8 md:p-12 text-center border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let&apos;s discuss your ideas and bring them to life. Contact us today for a free consultation.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                <Link href="/contact">Get Started</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}