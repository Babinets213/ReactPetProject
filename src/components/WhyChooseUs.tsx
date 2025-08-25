import { inter400, inter700, poppins700 } from "@/styles/fonts";
import React from "react";
import { icons, Icons } from "./icons";
import { BlurGradient } from "./ui/BackgroundGradients";
import GreenStrokeIcon from "./icons/GreenStrokeIcon";

type Feature = {
  title: string;
  description: string;
  icon: keyof Icons;
};

const features: Feature[] = [
  {
    title: "Bank-recognized certificates",
    description:
      "Earn a certificate accepted by banks, agencies, and mortgage institutions.",
    icon: "bankCertificate",
  },
  {
    title: "Created by mortgage professionals",
    description:
      "Courses built by expert mortgage brokers with real-world scenarios.",
    icon: "mortgageProfessional",
  },
  {
    title: "Learn anytime",
    description: "Learn anytime, anywhere with 24/7 access to all materials.",
    icon: "learnAnytime",
  },
  {
    title: "Live support & guidance",
    description:
      "Get live chat, technical help, and mentor advice throughout your journey.",
    icon: "liveSupport",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="flex flex-col items-center gap-20 pb-68">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <div>
            <GreenStrokeIcon />
          </div>
          <span
            className={`${inter400.className} text-2xl leading-[120%] tracking-[0.48px] text-[rgba(42,53,79,0.7)]`}
          >
            Why choose us
          </span>
        </div>
        <h2
          className={`${poppins700.className} text-[56px] leading-[120%] text-[#2A354F]`}
        >
          Best Learning Experience
        </h2>
      </div>

      <div className="relative grid gap-7.5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const IconComponent = icons[feature.icon];
          return (
            <div
              key={i}
              className="flex max-w-84.5 flex-col items-start gap-6 p-6 text-[#2A354F]"
            >
              <div className="flex h-20 w-20 items-center justify-center">
                <IconComponent />
              </div>
              <h3
                className={`${inter700.className} text-[23px] leading-[120%]`}
              >
                {feature.title}
              </h3>
              <p className={`${inter400.className} text-lg leading-[120%]`}>
                {feature.description}
              </p>
            </div>
          );
        })}

        <BlurGradient />
      </div>
    </section>
  );
}
