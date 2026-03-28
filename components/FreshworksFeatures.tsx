'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Layers, Network, Rocket, ShieldCheck, Zap } from 'lucide-react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border px-6 pt-6 pb-10 shadow-lg hover:shadow-xl transition-all duration-500',
        className,
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px] opacity-30 dark:opacity-100"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Freddy AI Intelligence',
    description:
      'Leverage powerful generative AI to automate responses, predict customer intent, and drastically reduce resolution times.',
    icon: <Bot className="size-7" />,
    size: 'large' as const,
  },
  {
    title: 'Lightning Fast ROI',
    description:
      'Intuitive user interfaces and rapid deployment cycles mean your team brings value from day one.',
    icon: <Zap className="size-7" />,
    size: 'small' as const,
  },
  {
    title: '360° Customer View',
    description: 'Tear down data silos. Unify sales, marketing, and support for a complete understanding of your customer journey.',
    icon: <Network className="size-7" />,
    size: 'medium' as const,
  },
  {
    title: 'Tailored Workflows',
    description: "Completely customizable pipelines, powerful routing algorithms, and bespoke automation tailored to your unique operational scale.",
    icon: <Layers className="size-7" />,
    size: 'medium' as const,
  },
  {
    title: 'Enterprise Scalability',
    description: 'Built on a reliable, secure infrastructure that scales effortlessly as your volume and business complexity grow.',
    icon: <ShieldCheck className="size-7" />,
    size: 'small' as const,
  },
  {
    title: 'Omnichannel Engagement',
    description:
      'Engage customers seamlessly across Email, Chat, WhatsApp, and Social Media from one unified dashboard.',
    icon: <Rocket className="size-7" />,
    size: 'large' as const,
  },
];

export default function FreshworksFeatures() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-20 md:py-32">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Why Choose Our Freshworks Solutions?</h2>
        <p className="text-xl text-muted-foreground">
          As a registered partner, we architect, implement, and optimize Freshworks products to help you delight customers and empower your workforce.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            size={item.size}
            className={cn(
              item.size === 'large'
                ? 'col-span-1 md:col-span-4'
                : item.size === 'medium'
                  ? 'col-span-1 md:col-span-3'
                  : 'col-span-1 md:col-span-2',
              'h-full min-h-[250px]',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}
