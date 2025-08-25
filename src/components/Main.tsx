import React from "react";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Education from "./Education";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";

export default function Main() {
  return (
    <main className="mt-41 sm:px-5 lg:px-10 2xl:px-60">
      <div className="min-h-screen w-full">
        <Hero />
        <WhyChooseUs />
        <Education />
        <HowItWorks />
        <Testimonial />

        <section>
          <div className="px-20 py-[3.125rem]"></div>
        </section>
      </div>
    </main>
  );
}
