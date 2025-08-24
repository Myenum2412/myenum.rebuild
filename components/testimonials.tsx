import { testimonials } from "@/assets/assets";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {
  return (
    <section className=" px-10 rounded-xl">
      <div className="flex justify-center items-center  relative py-10 max-lg:flex-col max-md:py-5 mt-10 ">
        <div className="w-1/3 flex flex-col gap-5 max-lg:w-full max-lg:text-center ">
          <h3 className="text-6xl">
            Words from{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              our users
            </span>
          </h3>
          <p>
            We&apos;re proud of our happy customers. Hear what our team
            customers have to say about their experiences with our online
            Services.
          </p>
        </div>
        <div className=" w-2/3 max-lg:w-full">
        <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
