import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="w-full bg-[linear-gradient(153.64deg,#14ACD7_8.91%,#A0F384_67.79%)]">
        <Header />
        <Hero />
      </div>
      <main>
        <div className="min-h-screen w-full bg-[rgba(204,247,227,0.5)]">
          <div className="px-60">
            <WhyChooseUs />

            {/*EDUCATION*/}
            <section></section>
          </div>
        </div>
        {/*HOW IT WORKS*/}
        <section></section>

        {/* TESTIMONIAL */}
        <section></section>
      </main>

      <footer></footer>
    </>
  );
}
