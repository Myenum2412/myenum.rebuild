import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: 'Custom Software Development',
    description:
      'Build powerful, scalable software solutions tailored to your business needs with cutting-edge technology.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: User2,
    title: 'Web Development',
    description:
      'Create stunning, responsive websites and web applications that engage users and drive conversions.',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Trophy,
    title: 'Digital Marketing',
    description:
      'Boost your online presence with strategic marketing campaigns that reach your target audience effectively.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: 'SEO & Content Strategy',
    description:
      'Improve your search rankings and engage customers with optimized content and proven SEO techniques.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: User,
    title: 'Social Media Management',
    description:
      'Build your brand presence across platforms with engaging content and data-driven social media strategies.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Lightbulb,
    title: 'Business Consulting',
    description:
      'Get expert guidance on digital transformation, technology adoption, and growth strategies for your business.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
          'ring',
          feature.cornerStyle,
        )}
        style={{ backgroundColor: 'rgba(187, 204, 194, 0.5)', borderColor: '#5b625d' }}
      >
        <div className="mb-3 text-[2rem]" style={{ color: '#40d2c5' }}>
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl" style={{ color: '#0d1b1a' }}>{feature.title}</h2>
        <p className="text-base text-pretty" style={{ color: '#5b625d' }}>
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60" style={{ backgroundImage: 'linear-gradient(to right, rgba(64, 210, 197, 0), #40d2c5, rgba(64, 210, 197, 0))' }}></span>
        <span className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(30% 5% at 50% 100%, rgba(64, 210, 197, 0.15) 0%, transparent 100%)' }}></span>
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section className="pt-20 pb-8" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring" style={{ backgroundColor: '#bbccc2', color: '#0d1b1a', borderColor: '#5b625d' }}>
              <span className="relative z-1 flex items-center gap-2">
                Services
              </span>
              <span className="absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, rgba(64, 210, 197, 0), #40d2c5, rgba(64, 210, 197, 0))' }}></span>
              <span className="absolute inset-0" style={{ background: 'radial-gradient(30% 40% at 50% 100%, rgba(64, 210, 197, 0.25) 0%, transparent 100%)' }}></span>
            </div>
            <h2 className="mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem]" style={{ color: '#0d1b1a' }}>
              Our Core Services
            </h2>
            <p className="mx-auto max-w-[18rem] text-center text-pretty" style={{ color: '#5b625d' }}>
              Complete business solutions under one roof - from development to marketing, we&apos;ve got you covered
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
