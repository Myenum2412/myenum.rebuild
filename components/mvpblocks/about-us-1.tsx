'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '@/components/ui/border-beam';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from 'lucide-react';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Innovation',
    description:
      'We constantly push boundaries and explore new technologies to create cutting-edge digital solutions that drive business growth.',
    icon: 'Lightbulb',
  },
  {
    title: 'Collaboration',
    description:
      'We work closely with our clients as partners, understanding their unique needs to deliver tailored software and marketing solutions.',
    icon: 'Users',
  },
  {
    title: 'Excellence',
    description:
      'We strive for perfection in every project, consistently delivering high-quality web development, software, and digital marketing services.',
    icon: 'Sparkles',
  },
  {
    title: 'Growth',
    description:
      "We measure our success by the positive impact we make on our clients' businesses, helping them build, market, and grow.",
    icon: 'Rocket',
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: 'About Us',
    subtitle:
      'Complete Business Solutions Under One Roof - Build. Market. Grow.',
    mission:
      'Our mission is to empower businesses with comprehensive digital solutions, from custom software development and stunning websites to powerful digital marketing strategies that drive growth and success.',
    vision:
      'We envision a world where every business, regardless of size, has access to world-class digital solutions that help them compete, innovate, and thrive in the digital age.',
    values: defaultValues,
    className: 'relative overflow-hidden py-20',
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(64, 210, 197, 0.08) 0, rgba(63, 174, 176, 0.04) 50%, rgba(64, 210, 197, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(64, 210, 197, 0.08) 0, rgba(53, 134, 142, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(63, 174, 176, 0.06) 0, rgba(64, 210, 197, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl" style={{ backgroundImage: 'linear-gradient(to right, #40d2c5, #3faeb0, #40d2c5)' }}>
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent to-transparent"
                colorFrom="#40d2c5"
                colorTo="#3faeb0"
              />

              <div className="mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl backdrop-blur-sm" style={{ background: 'linear-gradient(to bottom right, rgba(64, 210, 197, 0.2), rgba(64, 210, 197, 0.05))' }}>
                <Rocket className="h-8 w-8" style={{ color: '#40d2c5' }} />
              </div>

              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent" style={{ backgroundImage: 'linear-gradient(to right, rgba(64, 210, 197, 0.9), rgba(64, 210, 197, 0.7))' }}>
                  Our Mission
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent to-transparent"
                reverse
                colorFrom="#35868e"
                colorTo="#3faeb0"
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm" style={{ background: 'linear-gradient(to bottom right, rgba(53, 134, 142, 0.2), rgba(53, 134, 142, 0.05))' }}>
                <Target className="h-8 w-8" style={{ color: '#35868e' }} />
              </div>

              <h2 className="mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent" style={{ backgroundImage: 'linear-gradient(to right, rgba(53, 134, 142, 0.9), rgba(53, 134, 142, 0.7))' }}>
                Our Vision
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl" style={{ backgroundImage: 'linear-gradient(to right, #40d2c5, #3faeb0, #40d2c5)' }}>
              Our Core Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? 'purple'
                        : index === 1
                          ? 'blue'
                          : index === 2
                            ? 'amber'
                            : 'rose'
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
