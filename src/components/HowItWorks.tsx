import React from "react";
import GreenStrokeIcon from "./icons/GreenStrokeIcon";
import { inter400, poppins500, poppins700 } from "@/styles/fonts";
import CurveIcon from "./icons/how-it-works/CurveIcon";
import CreateAccountIcon from "./icons/how-it-works/CreateAccountIcon";
import ChooseBankIcon from "./icons/how-it-works/ChooseBankIcon";
import StartLearningIcon from "./icons/how-it-works/StartLearningIcon";

export default function HowItWorks() {
  return (
    <section id="how" className="pb-50">
      <div className="mb-26 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <div>
            <GreenStrokeIcon />
          </div>
          <span
            className={`${inter400.className} text-2xl leading-[120%] tracking-[0.48px] text-[rgba(42,53,79,0.7)]`}
          >
            How it works
          </span>
        </div>
        <h2
          className={`${poppins700.className} text-[56px] leading-[120%] text-[#2A354F]`}
        >
          How it works
        </h2>
      </div>

      <div className="relative grid place-items-center sm:grid-cols-2 sm:gap-3 md:gap-5 lg:grid-cols-3 2xl:gap-7">
        <div className="absolute top-10 left-1/2 -z-1 -translate-x-[50%]">
          <CurveIcon />
        </div>

        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-[190px] items-start justify-center">
            <CreateAccountIcon />
          </div>
          <div className="mt-auto">
            <h3
              className={`${poppins500.className} pb-8 text-[28px] text-[#2A354F]`}
            >
              Create Account
            </h3>
            <p
              className={`text-lg leading-[130%] ${inter400.className} text-[#2A354F]`}
            >
              Sign up in just a few clicks to access your personalized learning
              dashboard
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-[190px] items-start justify-center">
            <ChooseBankIcon />
          </div>

          <div className="mt-auto">
            <h3
              className={`${poppins500.className} pb-8 text-[28px] text-[#2A354F]`}
            >
              Choose a block
            </h3>
            <p
              className={`text-lg leading-[130%] ${inter400.className} text-[#2A354F]`}
            >
              Browse our course blocks and select the one that matches your
              current level and goals
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col items-center justify-center text-center">
          <StartLearningIcon />
          <div className="mt-auto">
            <h3
              className={`${poppins500.className} pb-8 text-[28px] text-[#2A354F]`}
            >
              Start learning instantly
            </h3>
            <p
              className={`text-lg leading-[130%] ${inter400.className} text-[#2A354F]`}
            >
              Get immediate access to lessons, materials, and progress tracking
              — no delays
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
