import React from "react";
import Button from "./ui/Button";
import EducationCard from "./EducationCard";
import { LeftGradient, RightGradient } from "./ui/BackgroundGradients";
import GreenStrokeIcon from "./icons/GreenStrokeIcon";
import { inter400 } from "@/styles/fonts";
import { useTranslations } from "next-intl";

interface EducationBlock {
  title: string;
  buttonText: string;
  description: string;
  items: string[];
}

export default function Education() {
  const t = useTranslations("HomePage.education");
  const blocks = t.raw("blocks") as EducationBlock[];

  return (
    <section id="education" className="pb-65">
      <div className="mb-[5.375rem] flex flex-col items-center gap-4">
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

        <h2 className="text-[56px] leading-[120%] font-bold text-[#2A354F]">
          {t("title")}
        </h2>
        <Button content="text" btnType="primary" size="large">
          {t("button")}
        </Button>
      </div>

      <div className="relative grid sm:grid-cols-2 sm:gap-3 md:gap-5 lg:grid-cols-3 2xl:gap-[1.875rem]">
        {blocks.map((block, index: number) => (
          <EducationCard
            key={index}
            title={block.title}
            buttonText={block.buttonText}
            description={block.description}
            items={block.items}
          />
        ))}

        <LeftGradient />
        <RightGradient />
      </div>
    </section>
  );
}
