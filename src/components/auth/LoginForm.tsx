"use client";

import React, { ReactNode, useState } from "react";
import { inter400, poppins700 } from "@/styles/fonts";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/context/AuthContext";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type LoginFormProps = {
  toggleComponent: ReactNode;
  onForgotPassword: () => void;
};

type FormFields = {
  email: string;
  password: string;
};

export default function LoginForm({
  toggleComponent,
  onForgotPassword,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormFields>();

  const { signIn, loading } = useAuth();

  const router = useRouter();
  const commonT = useTranslations("common");

  const [remember, setRemember] = useState(false);

  const password = watch("password") || "";
  const email = watch("email") || "";
  const hasStartedTyping = password.length > 0 && email.length > 0;

  const onSubmit: SubmitHandler<FormFields> = async function (data) {
    try {
      await signIn(data.email, data.password);

      // Show success message briefly before redirect
      console.log("Login successful, redirecting...");

      // Redirect to profile
      router.replace(`/profile`);
      reset();
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
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
        {toggleComponent}

        <div className="flex flex-col gap-2">
          <h2
            className={`${poppins700.className} text-[32px] leading-[120%] tracking-[0.32px] text-[#171717]`}
          >
            Log in to Your Account
          </h2>
          <p
            className={`${inter400.className} text-base leading-[120%] text-[#525252]`}
          >
            Welcome back! Please enter your credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <Input
            register={register("email", { required: "Email is required" })}
            labelText="Email"
            inputType="text"
            error={errors.email}
            placeholder={"Enter your email"}
          />
          <Input
            register={register("password", {
              required: "Password is required",
            })}
            labelText="Password"
            inputType="password"
            error={errors.password}
            icon
            placeholder={"Enter your password"}
          />

          <div className="flex justify-between sm:mb-0 lg:mb-1 2xl:mb-2">
            <Checkbox
              disabled={false}
              status={remember ? "active" : "inactive"}
              showLabel
              label="Remember me for 30 days"
              onChange={() => setRemember(!remember)}
            />

            <Button
              onClick={onForgotPassword}
              btnType="text_btn"
              size="normal"
              content="text"
              disabled={loading}
            >
              Forgot password?
            </Button>
          </div>

          <Button
            type="submit"
            btnType="primary"
            size="large"
            content="text"
            disabled={!hasStartedTyping || isSubmitting || loading}
          >
            {loading || isSubmitting ? "Signing in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
