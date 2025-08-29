import { inter400, poppins700 } from "@/styles/fonts";
import Image from "next/image";
import React, { ReactNode } from "react";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  const t = useTranslations("AuthPage");
  const commonT = useTranslations("common");

  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      <div className="relative flex h-64 w-full md:h-auto md:w-[55%]">
        <div className="absolute flex h-full w-full items-center justify-center rounded-none bg-[#2A354F] md:rounded-tr-[80px]">
          <Image
            src="/images/auth-background.png"
            alt="Auth background"
            fill
            className="object-cover mix-blend-overlay"
          />

          <div className="text-center">
            <h1
              dangerouslySetInnerHTML={{ __html: t("title") }}
              className={`${poppins700.className} leading-[120%] text-[#A0F384] sm:text-3xl lg:text-4xl 2xl:text-[56px]`}
            ></h1>
          </div>
        </div>
      </div>

      <div className="z-10 -ml-20 w-full rounded-bl-[80px] bg-white sm:px-5 sm:pt-[5px] md:w-1/2 lg:px-10 lg:pt-[15px] lg:pb-20 2xl:px-60 2xl:pt-[90px] 2xl:pb-40">
        <div className="flex flex-col sm:gap-4 lg:gap-6 2xl:gap-8">
          <div className="flex items-center gap-1 pt-2 pr-4">
            <ChevronLeftIcon />
            <Link
              className={`${inter400.className} text-base leading-[120%] text-[#687083]`}
              href={".."}
            >
              {commonT("backBtn")}
            </Link>
          </div>

          <div>
            <Image
              className="h-[50px]"
              alt="Learning World logo"
              src={`/images/${commonT("logo")}`}
              width={211}
              height={50}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
