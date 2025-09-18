import { inter400, poppins700 } from "@/styles/fonts";
import React from "react";
import Button from "../ui/Button";
import SuccessResultsIcon from "../icons/SuccessResultsIcon";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function SuccessfulSignUp() {
  const t = useTranslations("AuthPage.signup.successfulSignup");
  const router = useRouter();

  const handleNavigateToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-white sm:px-5 sm:py-5 lg:px-10 lg:py-10 2xl:px-60 2xl:py-40">
      <div>
        <SuccessResultsIcon />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 text-center sm:max-w-xl">
        <h2
          className={`text-[#171717] ${poppins700.className} text-[32px] leading-[120%] tracking-[0.32px]`}
        >
          {t("title")}
        </h2>
        <div className="flex flex-col gap-8">
          <p
            className={`text-[#525252] ${inter400.className} text-base leading-[120%]`}
          >
            {t("paragraph")}
          </p>
          <Button
            className="w-full"
            type="button"
            btnType="primary"
            size="large"
            content="text"
            onClick={handleNavigateToDashboard}
          >
            {t("btnText")}
          </Button>
        </div>
      </div>
    </div>
  );
}
