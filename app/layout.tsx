import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyEnum Digital Agency - Software, Website & Digital Marketing in Dubai, Salem & Kerala",
  description:
    "MyEnum Digital Agency delivers professional software development, website design, and digital marketing solutions. Complete business growth solutions under one roof.",
  keywords = [
  "Digital Marketing near me Dubai",
  "Digital Marketing Dubai near me",
  "best Digital Marketing Dubai",
  "Digital Marketing best Dubai",
  "top Digital Marketing Dubai",
  "Digital Marketing top Dubai",
  "affordable Digital Marketing Dubai",
  "Digital Marketing affordable Dubai",
  "Digital Marketing packages Dubai",
  "Digital Marketing Dubai packages",
  "Digital Marketing agency Dubai",
  "Digital Marketing Dubai agency",
  "Digital Marketing company Dubai",
  "Digital Marketing Dubai company",
  "Digital Marketing services Dubai",
  "Digital Marketing Dubai services",
  "Digital Marketing expert Dubai",
  "Digital Marketing Dubai expert",
  "Digital Marketing consultant Dubai",
  "Digital Marketing Dubai consultant",
  "Digital Marketing solutions Dubai",
  "Digital Marketing Dubai solutions",

  // Software
  "Software near me Dubai",
  "Software Dubai near me",
  "best Software Dubai",
  "Software best Dubai",
  "top Software Dubai",
  "Software top Dubai",
  "affordable Software Dubai",
  "Software affordable Dubai",
  "Software packages Dubai",
  "Software Dubai packages",
  "Software agency Dubai",
  "Software Dubai agency",
  "Software company Dubai",
  "Software Dubai company",
  "Software services Dubai",
  "Software Dubai services",
  "Software expert Dubai",
  "Software Dubai expert",
  "Software consultant Dubai",
  "Software Dubai consultant",
  "Software solutions Dubai",
  "Software Dubai solutions",

  // Website
  "Website near me Dubai",
  "Website Dubai near me",
  "best Website Dubai",
  "Website best Dubai",
  "top Website Dubai",
  "Website top Dubai",
  "affordable Website Dubai",
  "Website affordable Dubai",
  "Website packages Dubai",
  "Website Dubai packages",
  "Website agency Dubai",
  "Website Dubai agency",
  "Website company Dubai",
  "Website Dubai company",
  "Website services Dubai",
  "Website Dubai services",
  "Website expert Dubai",
  "Website Dubai expert",
  "Website consultant Dubai",
  "Website Dubai consultant",
  "Website solutions Dubai",
  "Website Dubai solutions",

  // --- Salem variations ---
  // Digital Marketing
  "Digital Marketing near me Salem",
  "Digital Marketing Salem near me",
  "best Digital Marketing Salem",
  "Digital Marketing best Salem",
  "top Digital Marketing Salem",
  "Digital Marketing top Salem",
  "affordable Digital Marketing Salem",
  "Digital Marketing affordable Salem",
  "Digital Marketing packages Salem",
  "Digital Marketing Salem packages",
  "Digital Marketing agency Salem",
  "Digital Marketing Salem agency",
  "Digital Marketing company Salem",
  "Digital Marketing Salem company",
  "Digital Marketing services Salem",
  "Digital Marketing Salem services",
  "Digital Marketing expert Salem",
  "Digital Marketing Salem expert",
  "Digital Marketing consultant Salem",
  "Digital Marketing Salem consultant",
  "Digital Marketing solutions Salem",
  "Digital Marketing Salem solutions",

  // Software
  "Software near me Salem",
  "Software Salem near me",
  "best Software Salem",
  "Software best Salem",
  "top Software Salem",
  "Software top Salem",
  "affordable Software Salem",
  "Software affordable Salem",
  "Software packages Salem",
  "Software Salem packages",
  "Software agency Salem",
  "Software Salem agency",
  "Software company Salem",
  "Software Salem company",
  "Software services Salem",
  "Software Salem services",
  "Software expert Salem",
  "Software Salem expert",
  "Software consultant Salem",
  "Software Salem consultant",
  "Software solutions Salem",
  "Software Salem solutions",

  // Website
  "Website near me Salem",
  "Website Salem near me",
  "best Website Salem",
  "Website best Salem",
  "top Website Salem",
  "Website top Salem",
  "affordable Website Salem",
  "Website affordable Salem",
  "Website packages Salem",
  "Website Salem packages",
  "Website agency Salem",
  "Website Salem agency",
  "Website company Salem",
  "Website Salem company",
  "Website services Salem",
  "Website Salem services",
  "Website expert Salem",
  "Website Salem expert",
  "Website consultant Salem",
  "Website Salem consultant",
  "Website solutions Salem",
  "Website Salem solutions",

  // --- Kerala variations ---
  // Digital Marketing
  "Digital Marketing near me Kerala",
  "Digital Marketing Kerala near me",
  "best Digital Marketing Kerala",
  "Digital Marketing best Kerala",
  "top Digital Marketing Kerala",
  "Digital Marketing top Kerala",
  "affordable Digital Marketing Kerala",
  "Digital Marketing affordable Kerala",
  "Digital Marketing packages Kerala",
  "Digital Marketing Kerala packages",
  "Digital Marketing agency Kerala",
  "Digital Marketing Kerala agency",
  "Digital Marketing company Kerala",
  "Digital Marketing Kerala company",
  "Digital Marketing services Kerala",
  "Digital Marketing Kerala services",
  "Digital Marketing expert Kerala",
  "Digital Marketing Kerala expert",
  "Digital Marketing consultant Kerala",
  "Digital Marketing Kerala consultant",
  "Digital Marketing solutions Kerala",
  "Digital Marketing Kerala solutions",

  // Software
  "Software near me Kerala",
  "Software Kerala near me",
  "best Software Kerala",
  "Software best Kerala",
  "top Software Kerala",
  "Software top Kerala",
  "affordable Software Kerala",
  "Software affordable Kerala",
  "Software packages Kerala",
  "Software Kerala packages",
  "Software agency Kerala",
  "Software Kerala agency",
  "Software company Kerala",
  "Software Kerala company",
  "Software services Kerala",
  "Software Kerala services",
  "Software expert Kerala",
  "Software Kerala expert",
  "Software consultant Kerala",
  "Software Kerala consultant",
  "Software solutions Kerala",
  "Software Kerala solutions",

  // Website
  "Website near me Kerala",
  "Website Kerala near me",
  "best Website Kerala",
  "Website best Kerala",
  "top Website Kerala",
  "Website top Kerala",
  "affordable Website Kerala",
  "Website affordable Kerala",
  "Website packages Kerala",
  "Website Kerala packages",
  "Website agency Kerala",
  "Website Kerala agency",
  "Website company Kerala",
  "Website Kerala company",
  "Website services Kerala",
  "Website Kerala services",
  "Website expert Kerala",
  "Website Kerala expert",
  "Website consultant Kerala",
  "Website Kerala consultant",
  "Website solutions Kerala",
  "Website Kerala solutions",
],
  openGraph: {
    title: "MyEnum Digital Agency",
    description:
      "Professional software, website, and digital marketing solutions in Dubai, Salem & Kerala",
    url: "https://www.myenum.com", // replace with your live URL
    siteName: "MyEnum",
    images: [
      {
        url: "https://www.myenum.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "MyEnum Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyEnum Digital Agency",
    description:
      "Professional software, website, and digital marketing solutions in Dubai, Salem & Kerala",
    images: ["https://www.myenum.com/og-image.png"], // replace with your OG image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark text-slate-50`}>
      <body>
        <ClientLayout>{children}</ClientLayout>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "svumhdjdy5");
          `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DE486L9YQ8" strategy="afterInteractive" />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DE486L9YQ8');
          `}
        </Script>
      </body>
    </html>
  );
}
