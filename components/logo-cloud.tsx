import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Our Trusted Clients</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16  w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/aura-fitness.svg"
                  alt="Aura Fitness Logo"
                  height="24"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/BDS-hanslooms.svg"
                  alt="BDS Hanslooms Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition- all"
                  src="/trusted-clients/Freezing-solutions.svg"
                  alt="Freezing Solutions Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/hallmark-events.svg"
                  alt="Hallmark Events Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/oasis-aquatic-center.svg"
                  alt="Oasis Aquatic Center Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/Radisson-salem.svg"
                  alt="Radisson Salem Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/Ram-Builders.svg"
                  alt="Ram Builders Logo"
                  height="24"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/sky-turf.svg"
                  alt="Sky Turf Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/vignesh.svg"
                  alt="Vignesh Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/Visthara-studios-events.svg"
                  alt="Visthara Studios Events Logo"
                  height="24"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-24 max-md:h-16 w-fit grayscale-100 hover:grayscale-0 transition-all duration-150"
                  src="/trusted-clients/Yuktah.svg"
                  alt="Yuktah Logo"
                  height="24"
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
