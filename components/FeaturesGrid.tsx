"use client";

import {
  Terminal,
  PenTool,
  DollarSign,
  Cloud,
  Share2,
  HelpCircle,
  SlidersHorizontal,
  Heart,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: "Next-Gen Web Solutions",
      description:
        "We build fast, responsive, and scalable websites that elevate your brand.",
      borders: "border-b border-r border-gray-700", // bottom + right line
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Stunning UI/UX",
      description:
        "Pixel-perfect designs that engage your users and boost conversions.",
      borders: "border-b border-r border-gray-700", // only bottom line
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Affordable Packages",
      description:
        "High-quality services at prices designed to suit businesses of all sizes.",
      borders: "border-b border-r border-gray-700", // bottom + right line
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Reliable Hosting",
      description:
        "Secure and lightning-fast hosting that keeps your website online 24/7.",
      borders: "border-b border-gray-700", // only bottom line
    },
    {
      icon: <Share2 className="w-6 h-6 text-white" />,
      title: "Collaborative Workflow",
      description:
        "Seamless team collaboration to manage projects efficiently.",
      borders: "border-r border-gray-700", // only right line
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-white" />,
      title: "Expert Support",
      description:
        "Our team is available round-the-clock to assist and guide you.",
      borders: "border-r border-gray-700", // no line
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-white" />,
      title: "Custom Solutions",
      description:
        "Tailored features and functionalities built to match your business goals.",
      borders: "border-r border-gray-700", // only right line
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Complete Web Services",
      description:
        "From concept to launch, we handle every step of your digital journey.",
      borders: "", // no line
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
        Services
      </div>

      {/* Grid layout: 2 columns on small, 4 on large */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-start gap-3 p-6 hover:bg-zinc-900 transition ${feature.borders}`}
          >
            {feature.icon}
            <h3 className="font-semibold text-lg sm:text-xl">{feature.title}</h3>
            <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
