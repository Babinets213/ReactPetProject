"use client";

import FormToggle from "@/components/FormToggle";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { poppins700 } from "@/styles/fonts";
import Image from "next/image";
import React, { useState } from "react";

export default function AuthPage() {
  const [formType, setFormType] = useState<"login" | "signup">("login");
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
              className={`${poppins700.className} leading-[120%] text-[#A0F384] sm:text-3xl lg:text-4xl 2xl:text-[56px]`}
            >
              Gain knowledge, <br /> certification, and <br /> support.
            </h1>
          </div>
        </div>
      </div>

      <div className="z-10 -ml-20 w-full rounded-bl-[80px] bg-white sm:px-5 sm:pt-[5px] md:w-1/2 lg:px-10 lg:pt-[15px] lg:pb-20 2xl:px-60 2xl:pt-[90px] 2xl:pb-40">
        {formType === "login" ? (
          <LoginForm
            toggleComponent={
              <FormToggle activeForm={formType} onToggle={setFormType} />
            }
          />
        ) : (
          <SignupForm
            toggleComponent={
              <FormToggle activeForm={formType} onToggle={setFormType} />
            }
          />
        )}
      </div>
    </div>
  );
}
