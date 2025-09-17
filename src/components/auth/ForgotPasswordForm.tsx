import React, { useState } from "react";
import Button from "../ui/Button";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import { inter400, poppins700 } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import Input from "../ui/Input";

type ForgotPasswordFormProps = {
  onBackToLogin: () => void;
};

export default function ForgotPasswordForm({
  onBackToLogin,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const t = useTranslations("AuthPage.forgotPassword");
  const commonT = useTranslations("common");

  const isStartedTyping = email.length > 0;
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  return (
    <div className="z-10 -ml-20 w-full rounded-bl-[80px] bg-white sm:px-5 sm:py-[5px] md:w-1/2 lg:px-10 lg:py-20 2xl:px-60 2xl:py-40">
      {!isSubmit ? (
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-1 pt-2 pr-4">
            <ChevronLeftIcon />
            <button
              className={`${inter400.className} cursor-pointer text-base leading-[120%] text-[#687083]`}
              onClick={onBackToLogin}
            >
              {commonT("backBtn")}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h2
              className={`${poppins700.className} text-[32px] leading-[120%] tracking-[0.32px] text-[#171717]`}
            >
              {t("title")}
            </h2>
            <p
              className={`text-base leading-[120%] text-[#525252] ${inter400.className}`}
            >
              {t("paragraph")}
            </p>
          </div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white"
            placeholder={t("emailInput.placeholder")}
            inputType="text"
            labelText={t("emailInput.label")}
          />
          <Button
            content="text"
            size="large"
            btnType="primary"
            disabled={!isStartedTyping || !isValidEmail(email)}
            onClick={() => setIsSubmit(true)}
          >
            {t("btnText")}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col">
          <h2
            className={`${poppins700.className} mb-2 text-[32px] leading-[120%] tracking-[0.32px] text-[#171717]`}
          >
            Reset your password
          </h2>
          <div className="mb-8">
            <p
              className={`text-base leading-[120%] text-[#525252] ${inter400.className}`}
            >
              You sent a request to reset your password to {email}
            </p>
            <br />
            <p
              className={`text-base leading-[120%] text-[#525252] ${inter400.className}`}
            >
              Please use the link provided in your email to reset the password
              for your account.
            </p>
          </div>
          <Button
            content="text"
            size="large"
            btnType="primary"
            onClick={onBackToLogin}
          >
            Back to login
          </Button>
        </div>
      )}
    </div>
  );
}
