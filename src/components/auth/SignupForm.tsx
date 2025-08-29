"use client";
import React, { ReactNode, useState } from "react";
import { inter400, poppins700 } from "@/styles/fonts";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  emailValidationRules,
  passwordChecklist,
  passwordValidationRules,
  validatePasswordRules,
} from "@/utils/validation";
import SuccessfulSignUp from "./SuccessfulSignUp";
import { useTranslations } from "next-intl";

type SignupFormProps = {
  toggleComponent: ReactNode;
};

type FormFields = {
  email: string;
  password: string;
};

export default function SignupForm({ toggleComponent }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormFields>();

  const t = useTranslations("AuthPage.signup");
  const commonT = useTranslations("common");

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const password = watch("password") || "";
  const hasStartedTyping = password.length > 0;
  const validationResults = validatePasswordRules(password);

  const onSubmit: SubmitHandler<FormFields> = function (data) {
    try {
      console.log(data);
      console.log(errors);
      setIsRegistered(true);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  if (isRegistered) return <SuccessfulSignUp />;

  return (
    <>
      {toggleComponent}

      <div className="flex flex-col gap-2">
        <h2
          className={`${poppins700.className} text-[32px] leading-[120%] tracking-[0.32px] text-[#171717]`}
        >
          {t("title")}
        </h2>
        <p
          className={`${inter400.className} text-base leading-[120%] text-[#525252]`}
        >
          {t("paragraph")}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Input
          register={register("email", emailValidationRules)}
          error={errors.email}
          success={!!watch("email") && !errors.email}
          icon
          labelText={commonT("emailInputLabel")}
          inputType="text"
          placeholder={commonT("emailInputPlaceholder")}
        />

        <Input
          register={register("password", passwordValidationRules)}
          error={errors.password}
          success={!!watch("password") && !errors.password}
          labelText={commonT("passwordInputLabel")}
          inputType="password"
          icon
          placeholder={commonT("passwordInputPlaceholder")}
        />

        <div className="flex flex-col gap-2">
          {passwordChecklist.map(({ key, label }) => {
            const isValid = validationResults[key];
            return (
              <div className="flex items-center gap-[9px]" key={key}>
                <CheckMarkIcon
                  isSuccess={isValid}
                  isUntouched={!hasStartedTyping}
                />
                <span
                  className={`${inter400.className} text-sm leading-[120%] ${
                    isValid && hasStartedTyping
                      ? "text-[#27AE60]"
                      : hasStartedTyping
                        ? "text-[#F75555]"
                        : "text-[#8B8B8B]"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="sm:mb-0 lg:mb-1 2xl:mb-2">
          <Checkbox
            disabled={false}
            status={acceptedTerms ? "active" : "inactive"}
            showLabel
            label={t("terms")}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />
        </div>

        <Button
          disabled={!acceptedTerms || isSubmitting}
          type="submit"
          btnType="primary"
          size="large"
          content="text"
        >
          {t("btnText")}
        </Button>
      </form>
    </>
  );
}
