import { inter400, poppins700 } from "@/styles/fonts";
import React from "react";
import Button from "../ui/Button";
import SuccessResultsIcon from "../icons/SuccessResultsIcon";

export default function SuccessfulSignUp() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-white sm:px-5 sm:py-5 lg:px-10 lg:py-10 2xl:px-60 2xl:py-40">
      <div>
        <SuccessResultsIcon />
      </div>

      <div className="flex w-full flex-col gap-8 text-center sm:max-w-lg">
        <h2
          className={`text-[#171717] ${poppins700.className} text-[32px] leading-[120%] tracking-[0.32px]`}
        >
          Account created successfully!
        </h2>
        <p
          className={`text-[#525252] ${inter400.className} text-base leading-[120%]`}
        >
          Glad to have you on board! Your professional growth starts here.
        </p>
        <Button type="button" btnType="primary" size="large" content="text">
          {`Let's start`}
        </Button>
      </div>
    </div>
  );
}
