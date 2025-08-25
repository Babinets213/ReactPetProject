import { inter400, poppins700 } from "@/styles/fonts";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import GreenCircleIcon from "./icons/GreenCircleIcon";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="relative flex flex-col items-center pb-50">
      <div className="mb-23 flex flex-col items-center justify-center">
        <h1
          className={`text-center text-[70px] text-white ${poppins700.className} mb-3`}
        >
          {t("welcome")}
        </h1>
        <p
          className={`text-2xl ${inter400.className} mb-13 text-center text-white`}
        >
          {t("subtitle")}
        </p>
        <Button content="text" type="primary" size="large">
          {t("getStarted")}
        </Button>
      </div>
      <Image
        unoptimized
        alt="Animated GIF showing mortgage learning process"
        src={"/animation.gif"}
        width={1440}
        height={660}
      />

      <GreenCircleIcon />
    </section>
  );
}
