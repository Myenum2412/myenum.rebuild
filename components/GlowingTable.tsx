"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TextEffect } from "./ui/text-effect";

export function GlowingTable() {
  return (
    <div 
      className="relative py-10 w-full bg-background"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: '-1px -1px'
      }}
    >
      <div 
        className="dark:block hidden absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: '-1px -1px'
        }}
      />
      <MaxWidthWrapper className="relative z-10">
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h1"
          className="mt-8 text-balance text-5xl max-md:text-2xl text-center mb-10 "
        >
          Modern Solutions for Business customers
        </TextEffect>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Elevate Your Business"
            description="We help you grow your business by providing the best solutions for your needs."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={
              <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Digital Strategy"
            description="We help you create a digital strategy to reach your target audience."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Web Development"
            description="We help you create a website to reach your target audience."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={
              <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Software Development"
            description="We help you create a software to reach your target audience."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Get Ready to Grow"
            description="We help you grow your business by providing the best solutions for your needs."
          />
        </ul>
      </MaxWidthWrapper>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
