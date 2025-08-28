"use client";
import React, { ReactNode, useState } from "react";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import Link from "next/link";
import { inter400, poppins700 } from "@/styles/fonts";
import Image from "next/image";
import Input from "./ui/Input";
import Checkbox from "./ui/Checkbox";
import Button from "./ui/Button";
import CheckMarkIcon from "./icons/CheckMarkIcon";

type SignupFormProps = {
  toggleComponent: ReactNode;
};

export default function SignupForm({ toggleComponent }: SignupFormProps) {
  const [read, setRead] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hasStartedTyping = password.length > 0;
  const hasMinLength = password.length >= 10;
  const hasNoSpaces = !/\s/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  return (
    <div className="flex flex-col sm:gap-4 lg:gap-6 2xl:gap-8">
      <div className="flex items-center gap-1 pt-2 pr-4">
        <ChevronLeftIcon />
        <Link
          className={`${inter400.className} text-base leading-[120%] text-[#687083]`}
          href={".."}
        >
          Back
        </Link>
      </div>

      <div>
        <Image
          className="h-[50px]"
          alt="Learning World logo"
          src="/images/logo.png"
          width={211}
          height={50}
        />
      </div>

      {toggleComponent}

      <div className="flex flex-col gap-2">
        <h2
          className={`${poppins700.className} text-[32px] leading-[120%] tracking-[0.32px] text-[#171717]`}
        >
          Create Your Account{" "}
        </h2>
        <p
          className={`${inter400.className} text-base leading-[120%] text-[#525252]`}
        >
          Make a difference – create an account now and get started!
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          labelText="Email"
          inputType="text"
          placeholder={"Enter your email"}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          labelText="Password"
          inputType="password"
          icon
          placeholder={"Enter your password"}
        />

        <div className="flex flex-col gap-2">
          {[
            {
              label: "10 characters minimum",
              isValid: hasMinLength,
            },
            {
              label: "Cannot contain spaces",
              isValid: hasNoSpaces,
            },
            {
              label: "At least one letter",
              isValid: hasLetter,
            },
            {
              label: "At least one number",
              isValid: hasNumber,
            },
            {
              label: "At least one special character",
              isValid: hasSpecialChar,
            },
          ].map(({ label, isValid }, i) => (
            <div className="flex items-center gap-[9px]" key={i}>
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
          ))}
        </div>
        <Checkbox
          disabled={false}
          status={read ? "active" : "inactive"}
          showLabel
          label="I agree to terms & conditions"
          onChange={() => setRead(!read)}
        />
      </div>

      <Button
        type="primary"
        size="large"
        content="text"
        disabled={email === "" || password === ""}
      >
        Create account
      </Button>
    </div>
  );
}
