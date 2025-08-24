import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

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
    "Digital Marketing Dubai solutions",

    // --- Salem variations ---
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

    // --- Kerala variations ---
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "svumhdjdy5");
            `,
          }}
        />

        {/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DE486L9YQ8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DE486L9YQ8');
</script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark text-slate-50`}
      >
        <HeroHeader />
        {children}
        <Toaster duration={5000} position="top-right" />
      </body>
    </html>
  );
}
