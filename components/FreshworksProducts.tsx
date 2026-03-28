'use client';
import { motion } from 'framer-motion';
import { Headphones, TrendingUp, MonitorCheck, MessageSquare, Target, PhoneCall, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const products = [
  {
    name: 'Freshdesk',
    tagline: 'Omnichannel Support',
    description: 'Empower your support team to deliver timely, consistent, and personalized resolutions across email, chat, and social media.',
    icon: <Headphones className="size-8" />,
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-500',
  },
  {
    name: 'Freshsales',
    tagline: 'AI-Powered CRM',
    description: 'Accelerate your revenue with context-driven insights, automated pipelines, and built-in CPQ functionality.',
    icon: <TrendingUp className="size-8" />,
    color: 'from-orange-500/20 to-orange-500/5',
    iconColor: 'text-orange-500',
  },
  {
    name: 'Freshservice',
    tagline: 'Modern ITSM',
    description: 'Modernize IT service management with an intuitive platform designed for rapid deployment and high employee satisfaction.',
    icon: <MonitorCheck className="size-8" />,
    color: 'from-green-500/20 to-green-500/5',
    iconColor: 'text-green-500',
  },
  {
    name: 'Freshchat',
    tagline: 'Conversational Engagement',
    description: 'Deploy AI chatbots and manage live interactions seamlessly across WhatsApp, Apple Business Chat, and your website.',
    icon: <MessageSquare className="size-8" />,
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-500',
  },
  {
    name: 'Freshmarketer',
    tagline: 'Marketing Automation',
    description: 'Personalize campaigns, segment your audience dynamically, and track customer journeys from awareness to loyalty.',
    icon: <Target className="size-8" />,
    color: 'from-red-500/20 to-red-500/5',
    iconColor: 'text-red-500',
  },
  {
    name: 'Freshcaller',
    tagline: 'Cloud Contact Center',
    description: 'Set up a robust cloud-based PBX system in minutes, fully integrated into your helpdesk and CRM workflows.',
    icon: <PhoneCall className="size-8" />,
    color: 'from-teal-500/20 to-teal-500/5',
    iconColor: 'text-teal-500',
  },
];

export default function FreshworksProducts() {
  return (
    <section className="w-full py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Explore the <span className="text-primary">Freshworks Suite</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Whether you are looking to revolutionize customer service, scale sales, or modernize internal IT, we implement the perfect module for your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card border border-border/50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div 
                className={cn(
                  "absolute top-0 right-0 w-48 h-48 bg-gradient-to-br rounded-full blur-[80px] -mr-20 -mt-20 opacity-50 transition-opacity duration-500 group-hover:opacity-100",
                  product.color
                )} 
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className={cn("p-4 rounded-2xl bg-background shadow-sm border border-border/50", product.iconColor)}>
                    {product.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {product.tagline}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-auto">
                  <span>Learn how we implement {product.name}</span>
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center flex justify-center">
          <Link 
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105 max-w-2xl text-balance text-left md:text-center"
          >
            <PhoneCall className="size-5 shrink-0" />
            <span>Need help choosing the right product? <br className="md:hidden" /> Consult with our experts</span>
            <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 hidden sm:block" />
          </Link>
        </div>
      </div>
    </section>
  );
}
