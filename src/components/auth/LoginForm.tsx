"use client";

import React, { ReactNode, useState } from "react";
import { inter400, poppins700 } from "@/styles/fonts";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/context/AuthContext";

type LoginFormProps = {
  toggleComponent: ReactNode;
};

type FormFields = {
  email: string;
  password: string;
};

export default function LoginForm({ toggleComponent }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormFields>();

  const { login } = useAuth();

  const router = useRouter();
  const [remember, setRemember] = useState(false);

  const password = watch("password") || "";
  const email = watch("email") || "";
  const hasStartedTyping = password.length > 0 && email.length > 0;

  const onSubmit: SubmitHandler<FormFields> = function (data) {
    console.log(data);
    console.log(errors);
    login(data.email, data.password);
    router.replace(`/profile`);
    reset();
  };
  return (
    <>
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
          register={register("password", { required: "Password is required" })}
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

          <Button to="#" btnType="text_btn" size="normal" content="text">
            Forgot password?
          </Button>
        </div>

        <Button
          type="submit"
          btnType="primary"
          size="large"
          content="text"
          disabled={!hasStartedTyping || isSubmitting}
        >
          Login
        </Button>
      </form>
    </>
  );
}
