import {
  Gemini,
  Replit,
  GooglePaLM,
  MagicUI,
  VSCodium,
  
} from "@/components/logos";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/CurvedLoop/CurvedLoop";
import Image from "next/image";
import Link from "next/link";

export default function IntegrationsSection() {
  return (
    <section className="relative">
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ MyEnum ✦ Agency ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="absolute top-0 left-0 w-full   h-[100px]"
      />

      <div className="bg-muted dark:bg-background py-24 md:py-32 mt-12">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                Integrate with Our Services
              </h2>
              <p className="text-muted-foreground">
                Connect seamlessly with our services to
                enhance your workflow.
              </p>
              <Button  size="sm" asChild>
                <Link href="#">Contact Us</Link>
              </Button>
            </div>

            <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
              <div className="bg-background flex aspect-square items-center justify-center border">
                <Image
                  src="/iconc.webp"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
              </div>
              <blockquote>
                <p>
                  We are a team of experienced digital marketing professionals who are dedicated to helping businesses grow their online presence and reach their target audience.
                </p>
                <div className="mt-2 flex gap-2 text-sm">
                  <cite>Amarnath</cite>
                  <p className="text-muted-foreground">Founder, MyEnum</p>
                </div>
              </blockquote>
            </div>
          </div>

          <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
            <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
              <div className="grid grid-cols-2 gap-2">
                <Integration
                  icon={<Gemini />}
                  name="Gemini"
                  description="The AI model that powers Google's search engine."
                />
                <Integration
                  icon={<Replit />}
                  name="Replit"
                  description="The Simple and Easy to use AI Code Editor"
                />
                <Integration
                  icon={<GooglePaLM />}
                  name="GooglePaLM"
                  description="The Google PaLM API is a powerful tool that allows you to use the Google PaLM API in your projects."
                />
                <Integration
                  icon={<MagicUI />}
                  name="MagicUI"
                  description="The Web Development Framework."
                />
                <Integration
                  icon={<VSCodium />}
                  name="VSCodium"
                  description="The Coding Platform for Web Development."
                />
                <Integration
                  icon={<Image src="/next.svg" alt="Next.js" width={100} height={100} />}
                  name="Next.js"
                  description="The React Framework for Web Development."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
