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
    "MyEnum Digital Agency delivers professional software development, website design, and digital marketing solutions in Dubai, Salem, and Kerala. Complete business growth solutions under one roof.",
  // Add your keywords, openGraph, twitter here
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

        {/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DE486L9YQ8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DE486L9YQ8');
</script>
      </body>
    </html>
  );
}
