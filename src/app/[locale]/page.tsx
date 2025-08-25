import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Education from "@/components/Education";
import LandingPageGradient from "@/components/ui/LandingPageGradient";
import HowItWorks from "@/components/HowItWorks";
import GreenStrokeIcon from "@/components/icons/GreenStrokeIcon";
import { inter400, poppins700 } from "@/styles/fonts";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <LandingPageGradient />
      <div className="relative">
        <Header />
        <main className="mt-41 sm:px-5 lg:px-10 2xl:px-60">
          <div className="min-h-screen w-full">
            <Hero />
            <WhyChooseUs />
            <Education />
            <HowItWorks />
            <section className="pb-23" id="testimonial">
              <div className="mb-20 flex flex-col items-center gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <GreenStrokeIcon />
                  </div>
                  <span
                    className={`${inter400.className} text-2xl leading-[120%] tracking-[0.48px] text-[rgba(42,53,79,0.7)]`}
                  >
                    Testimonial
                  </span>
                </div>
                <h2
                  className={`${poppins700.className} text-[56px] leading-[120%] text-[#2A354F]`}
                >
                  Student Testimonial
                </h2>
              </div>

              <div className="relative grid place-items-center sm:grid-cols-2 sm:gap-3 md:gap-5 lg:grid-cols-3 2xl:gap-7">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </section>
          </div>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
