"use client";

import React from "react";
import Head from "next/head";
import Footer from "@/components/footer";
import  ServicesSection from "@/components/ui/ServicesSection";
import FeaturesGrid from "@/components/FeaturesGrid";

function page() {
  return (
    <>
      <Head>
        <title>
          Myenum Services - Web Development ,Software Development and Digital
          Solutions
        </title>
        <meta
          name="description"
          content="Explore Myenum's professional web development ,Software Development and Digital Solutions. We specialize in e-commerce websites, startup solutions, and more."
        />
        <meta
          name="keywords"
          content="Myenum, web development, e-commerce websites, startup solutions, digital services, website design, website development India"
        />
        <meta name="author" content="Myenum" />
        <meta
          property="og:title"
          content="Myenum Services - Web Development ,Software Development and Digital Solutions"
        />
        <meta
          property="og:description"
          content="Explore Myenum's professional web development ,Software Development and Digital Solutions. We specialize in e-commerce websites, startup solutions, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myenum.in/services" />
        <meta property="og:image" content="https://myenum.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Myenum Services - Web Development ,Software Development and Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="Explore Myenum's professional web development ,Software Development and Digital Solutions. We specialize in e-commerce websites, startup solutions, and more."
        />
        <meta name="twitter:image" content="https://myenum.in/og-image.jpg" />
      </Head>
      <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
        <div className="@container mx-auto max-w-6xl text-white rounded-2xl">
          <FeaturesGrid />
          <ServicesSection />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
