import { poppins700 } from "@/styles/fonts";
import Image from "next/image";
import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  const t = useTranslations("AuthPage");

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
      {children}
    </div>
  );
}
