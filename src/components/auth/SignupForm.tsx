"use client";
import React, { ReactNode, useState } from "react";
import { inter400, poppins700 } from "@/styles/fonts";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import { SubmitHandler, useForm } from "react-hook-form";
import SuccessfulSignUp from "./SuccessfulSignUp";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSignupSchema, SignupFormFields } from "@/schemas/signupSchema";

type SignupFormProps = {
  toggleComponent: ReactNode;
};

export default function SignupForm({ toggleComponent }: SignupFormProps) {
  const t = useTranslations("AuthPage.signup");
  const commonT = useTranslations("common");

  const signupSchema = createSignupSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<SignupFormFields>({
    resolver: zodResolver(signupSchema),
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const password = watch("password") || "";
  const email = watch("email") || "";
  const hasStartedTyping = password.length > 0;

  const passwordRules = {
    hasMinLength: password.length >= 10,
    hasNoSpaces: !/\s/.test(password),
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[^a-zA-Z0-9]/.test(password),
  };

  const validationResults = passwordRules;

  type PasswordValidationKey = keyof typeof passwordRules;

  const passwordChecklist: {
    key: PasswordValidationKey;
    label: string;
  }[] = [
    { key: "hasMinLength", label: t("validation.password.minLength") },
    { key: "hasNoSpaces", label: t("validation.password.noSpaces") },
    { key: "hasLetter", label: t("validation.password.letter") },
    { key: "hasNumber", label: t("validation.password.number") },
    { key: "hasSpecialChar", label: t("validation.password.specialChar") },
  ];

  const onSubmit: SubmitHandler<SignupFormFields> = function (data) {
    try {
      console.log(data);
      console.log(errors);
      setIsRegistered(true);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  const isPasswordValid =
    password.length >= 10 && Object.values(validationResults).every(Boolean);

  const isEmailValid =
    email.length > 0 &&
    !errors.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
          register={register("email")}
          error={errors.email}
          success={isEmailValid}
          icon
          labelText={commonT("emailInputLabel")}
          inputType="text"
          placeholder={commonT("emailInputPlaceholder")}
        />

        <Input
          register={register("password")}
          error={errors.password}
          success={isPasswordValid}
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
