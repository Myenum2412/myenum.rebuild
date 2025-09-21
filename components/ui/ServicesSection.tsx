"use client";

import React from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript","javascript","dart","java","react","flutter","android",
  "html5","css3","nodedotjs","express","nextdotjs","prisma","amazonaws",
  "postgresql","firebase","nginx","vercel","testinglibrary","jest",
  "cypress","docker","git","jira","github","gitlab","visualstudiocode",
  "androidstudio","sonarqube","figma",
];

const services = [
  {
    title: "SaaS Product Strategy & Build",
    desc: "Turn your idea into a revenue-generating product—validated roadmap, secure multi-tenant architecture, subscription billing and launch-ready MVP.",
  },
  {
    title: "Cloud Ops & Reliability",
    desc: "Zero downtime, instant scale—automatic scaling, observability, secure payments, and rapid releases so you never lose customers to outages.",
  },
];

export default function ServicesPage() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/ffffff`);

  return (
    <section className="min-h-screen flex flex-col items-center px-6 md:px-12 mt-10">
      {/* First Row: Heading + Paragraph */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          SaaS Solutions
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-full md:max-w-2xl mx-auto">
          We build blazing-fast Next.js sites & beautiful Tailwind interfaces that boost conversions and stay simple to maintain.
        </p>
      </div>

      {/* Second Row: Icon Cloud + Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full items-start">
        {/* Left: Icon Cloud */}
        <div className="flex justify-center items-center relative w-72 h-72 md:w-96 md:h-96 mx-auto">
          {/* Background blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

          <IconCloud images={images} />
        </div>

        {/* Right: Services */}
        <div className="flex-1 text-white flex flex-col justify-start">
          <div className="grid grid-cols-1 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
              >
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="text-gray-400 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors w-full sm:w-auto">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
