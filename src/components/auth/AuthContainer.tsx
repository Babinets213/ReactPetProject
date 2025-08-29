"use client";

import React, { useState } from "react";
import FormToggle from "./FormToggle";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthContainer() {
  const [formType, setFormType] = useState<"login" | "signup">("login");

  const toggleComponent = (
    <FormToggle activeForm={formType} onToggle={setFormType} />
  );

  return formType === "login" ? (
    <LoginForm toggleComponent={toggleComponent} />
  ) : (
    <SignupForm toggleComponent={toggleComponent} />
  );
}
