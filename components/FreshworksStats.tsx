'use client';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedNumber({ value, isFloat = false }: { value: number, isFloat?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) => isFloat ? latest.toFixed(1) : Math.round(latest).toString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{formatted}</motion.span>;
}

export default function FreshworksStats() {
  return (
    <section className="w-full py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Impactful Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-primary-foreground/80 text-balance"
          >
            Our Freshworks implementations drive measurable success and ROI for scaling operations globally.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-2 group"
          >
            <div className="text-5xl md:text-7xl font-black mb-2 tracking-tighter tabular-nums transition-transform group-hover:scale-110">
              <AnimatedNumber value={90} /><span className="text-3xl md:text-5xl">%</span>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/90 font-medium tracking-wide">Faster Resolutions</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-2 group"
          >
            <div className="text-5xl md:text-7xl font-black mb-2 tracking-tighter tabular-nums transition-transform group-hover:scale-110">
              <AnimatedNumber value={27} /><span className="text-3xl md:text-5xl">%</span>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/90 font-medium tracking-wide">Increase in CSAT</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-2 group"
          >
            <div className="text-5xl md:text-7xl font-black mb-2 tracking-tighter tabular-nums transition-transform group-hover:scale-110">
              <AnimatedNumber value={1.5} isFloat /><span className="text-3xl md:text-5xl">x</span>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/90 font-medium tracking-wide">Sales Pipeline Velocity</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-2 group"
          >
            <div className="text-5xl md:text-7xl font-black mb-2 tracking-tighter tabular-nums transition-transform group-hover:scale-110">
              <AnimatedNumber value={24} /><span className="text-3xl md:text-5xl">/</span><AnimatedNumber value={7} />
            </div>
            <p className="text-sm md:text-base text-primary-foreground/90 font-medium tracking-wide">Managed Support</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
