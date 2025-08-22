import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Education from "@/components/Education";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <div className="absolute top-0 left-0 -z-1 h-screen w-screen">
        <svg
          width="1919"
          height="1044"
          viewBox="0 0 1919 1044"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-1"
            width="1920"
            height="1080"
            fill="url(#paint0_linear_205_428)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_205_428"
              x1="515"
              y1="-4.93135e-06"
              x2="761"
              y2="882.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#14ACD7" />
              <stop offset="1" stop-color="#A0F384" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="1920"
          height="1074"
          viewBox="0 0 1920 1074"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-1 0H1920V1074H-1V0Z" fill="url(#paint0_linear_225_88)" />
          <defs>
            <linearGradient
              id="paint0_linear_225_88"
              x1="959.5"
              y1="0"
              x2="959.5"
              y2="1074"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A0F384" />
              <stop offset="1" stop-color="#CCF7E3" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative">
        <div className="w-full">
          <Header />
          <Hero />
        </div>

        <main>
          <div className="min-h-screen w-full px-60">
            <WhyChooseUs />
            <Education />
          </div>

          <section></section>

          <section></section>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
