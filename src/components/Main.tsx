import React from "react";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Education from "./Education";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";

export default function Main() {
  return (
    <main className="mt-41 sm:px-5 lg:px-10 2xl:px-60">
      <div className="min-h-screen w-full">
        <Hero />
        <WhyChooseUs />
        <Education />
        <HowItWorks />
        <Testimonial />
        <ContactUs />
      </div>
    </main>
  );
}

{
  /*
  <div className="flex items-center gap-4">
  <div className="flex items-center gap-2 bg-[#CFE7E4] rounded px-3 py-1">
    <MailIcon className="text-gray-500" />
    <input
      className="w-64 bg-transparent outline-none"
      placeholder="name@email.com"
      aria-label="Email address"
    />
  </div>
  <Button size="normal" type="primary">
    Join now
  </Button>
</div>
  */
}
