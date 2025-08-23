import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Education from "@/components/Education";
import LandingPageGradient from "@/components/ui/LandingPageGradient";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <LandingPageGradient />
      <div className="relative">
        <Header />
        <main className="sm:px-15 lg:px-30 2xl:px-60">
          <div className="min-h-screen w-full">
            <Hero />
            <WhyChooseUs />
            <Education />

            <section></section>

            <section></section>
          </div>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
