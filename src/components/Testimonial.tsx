import React from "react";
import GreenStrokeIcon from "./icons/GreenStrokeIcon";
import { inter400, inter500, inter700, poppins700 } from "@/styles/fonts";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import { useTranslations } from "next-intl";

export default function Testimonial() {
  const t = useTranslations("HomePage.testimonial");
  return (
    <section className="scroll-mt-24 pb-43" id="testimonial">
      <div className="mb-20 flex flex-col items-center gap-4">
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
          className={`${poppins700.className} text-[56px] leading-[120%] text-[#2A354F]`}
        >
          {t("title")}
        </h2>
      </div>

      <div className="relative grid place-items-center sm:grid-cols-2 sm:gap-3 md:gap-5 lg:grid-cols-3 2xl:gap-8">
        {/* First student */}
        <article className="flex flex-col gap-4 p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="rounded-full"
                width={91}
                height={91}
                src="/images/student1.png"
                alt={t("students.luca.name")}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 opacity-70">
                <h3
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434]`}
                >
                  {t("students.luca.name")}
                </h3>
                <p
                  className={`text-[#1A2434] ${inter500.className} text-base leading-[120%] tracking-[0.32px]`}
                >
                  {t("students.luca.title")} <br />
                  <span className={`${inter400.className}`}>
                    {t("students.luca.experience")}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-70`}
                >
                  <strong>{t("students.luca.rating")}</strong>
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            <p
              className={`${inter400.className} text-base leading-[140%] tracking-[0.32px] text-[#1A2434] opacity-70`}
            >
              {t("students.luca.quote")}
            </p>
          </blockquote>
        </article>

        {/* Second student */}
        <article className="flex flex-col gap-4 p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="rounded-full"
                width={91}
                height={91}
                src="/images/student2.png"
                alt={t("students.anna.name")}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 opacity-70">
                <h3
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434]`}
                >
                  {t("students.anna.name")}
                </h3>
                <p
                  className={`text-[#1A2434] ${inter500.className} text-base leading-[120%] tracking-[0.32px]`}
                >
                  {t("students.anna.title")}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-70`}
                >
                  <strong>{t("students.anna.rating")}</strong>
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            <p
              className={`${inter400.className} text-base leading-[140%] tracking-[0.32px] text-[#1A2434] opacity-70`}
            >
              {t("students.anna.quote")}
            </p>
          </blockquote>
        </article>

        {/* Third student */}
        <article className="flex flex-col gap-4 p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="rounded-full"
                width={91}
                height={91}
                src="/images/student1.png"
                alt={t("students.daniel.name")}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 opacity-70">
                <h3
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434]`}
                >
                  {t("students.daniel.name")}
                </h3>
                <p
                  className={`text-[#1A2434] ${inter500.className} text-base leading-[120%] tracking-[0.32px]`}
                >
                  {t("students.daniel.title")}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-70`}
                >
                  <strong>{t("students.daniel.rating")}</strong>
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            <p
              className={`${inter400.className} text-base leading-[140%] tracking-[0.32px] text-[#1A2434] opacity-70`}
            >
              {t("students.daniel.quote")}
            </p>
          </blockquote>
        </article>
      </div>
    </section>
  );
}
