import { inter400, inter700, poppins700 } from "@/styles/fonts";
import React from "react";
import { icons, Icons } from "./icons";
import { BlurGradient } from "./ui/BackgroundGradients";
import GreenStrokeIcon from "./icons/GreenStrokeIcon";
import { useTranslations } from "next-intl";

type Feature = {
  key: keyof typeof featuresDataKeys;
  icon: keyof Icons;
};

const featuresDataKeys: Record<string, keyof Icons> = {
  recognized: "bankCertificate",
  createdByProfessionals: "mortgageProfessional",
  learning: "learnAnytime",
  liveSupport: "liveSupport",
};

export default function WhyChooseUs() {
  const t = useTranslations("HomePage.whyChooseUs");

  const features: Feature[] = Object.entries(featuresDataKeys).map(
    ([key, icon]) => ({
      key: key as keyof typeof featuresDataKeys,
      icon,
    }),
  );

  return (
    <section
      id="why"
      className="flex scroll-mt-24 flex-col items-center gap-20 pb-68"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <div>
            <GreenStrokeIcon />
          </div>
          <span
            className={`${inter400.className} text-2xl leading-[120%] tracking-[0.48px] text-[rgba(42,53,79,0.7)]`}
          >
            {t("subtitle")}
          </span>
        </div>
        <h2
          className={`${poppins700.className} text-center text-[56px] leading-[120%] text-[#2A354F]`}
        >
          {t("title")}
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
                {t(`points.${feature.key}.title`)}
              </h3>
              <p className={`${inter400.className} text-lg leading-[120%]`}>
                {t(`points.${feature.key}.description`)}
              </p>
            </div>
          );
        })}

        <BlurGradient />
      </div>
    </section>
  );
}
