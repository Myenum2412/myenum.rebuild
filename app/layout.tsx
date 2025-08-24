import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";

// Load client-side components dynamically
const HeroHeader = dynamic(() => import("@/components/header").then(mod => mod.HeroHeader), {
  ssr: false,
});
const Toaster = dynamic(() => import("@/components/ui/sonner").then(mod => mod.Toaster), {
  ssr: false,
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyEnum Digital Agency - Software, Website & Digital Marketing in Dubai, Salem & Kerala",
  description:
    "MyEnum Digital Agency delivers professional software development, website design, and digital marketing solutions in Dubai, Salem, and Kerala. Complete business growth solutions under one roof.",
  keywords: [
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
    // Add Salem & Kerala variations here
  ],
  openGraph: {
    title: "MyEnum Digital Agency - Software, Website & Digital Marketing",
    description:
      "MyEnum Digital Agency offers end-to-end solutions for businesses including software, websites, and digital marketing.",
    url: "https://www.myenum.in",
    siteName: "MyEnum Digital Agency",
    images: [
      {
        url: "/image/iconc.webp",
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
    title: "MyEnum Digital Agency - Software, Website & Digital Marketing",
    description:
      "Complete business growth solutions under one roof – Software Development, Website Design, and Digital Marketing in Dubai, Kerala and Tamil Nadu.",
    images: ["/image/iconc.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark text-slate-50`}>
      <body>
        <HeroHeader />
        {children}
        <Toaster duration={5000} position="top-right" />

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
