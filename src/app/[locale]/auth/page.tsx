import LoginForm from "@/components/LoginForm";
import { poppins700 } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

export default function AuthPage() {
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
              className={`${poppins700.className} text-[56px] leading-[120%] text-[#A0F384]`}
            >
              Gain knowledge, <br /> certification, and <br /> support.
            </h1>
          </div>
        </div>
      </div>

      <div className="z-10 -ml-20 w-full rounded-bl-[80px] bg-white px-60 pt-[90px] pb-40 md:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
