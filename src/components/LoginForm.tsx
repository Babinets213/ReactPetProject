"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import { inter400, poppins700 } from "@/styles/fonts";
import Image from "next/image";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";

type LoginFormProps = {
  toggleComponent: ReactNode;
};

export default function LoginForm({ toggleComponent }: LoginFormProps) {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          Log in to Your Account
        </h2>
        <p
          className={`${inter400.className} text-base leading-[120%] text-[#525252]`}
        >
          Welcome back! Please enter your credentials.
        </p>
      </div>

      {/* Input form */}
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

        <div className="flex justify-between">
          <Checkbox
            disabled={false}
            status={remember ? "active" : "inactive"}
            showLabel
            label="Remember me for 30 days"
            onChange={() => setRemember(!remember)}
          />

          <Button to="#" type="text_btn" size="normal" content="text">
            Forgot password?
          </Button>
        </div>
      </div>

      <Button
        type="primary"
        size="large"
        content="text"
        disabled={email === "" || password === ""}
      >
        Login
      </Button>
    </div>
  );
}
