"use client";

import React, { useState } from "react";
import FormToggle from "./FormToggle";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

type forms = "login" | "signup" | "forgot";

export default function AuthContainer() {
  const [formType, setFormType] = useState<forms>("login");

  const toggleComponent = (
    <FormToggle activeForm={formType} onToggle={setFormType} />
  );

  if (formType === "login") {
    return (
      <LoginForm
        toggleComponent={toggleComponent}
        onForgotPassword={() => setFormType("forgot")}
      />
    );
  }

  if (formType === "signup") {
    return <SignupForm toggleComponent={toggleComponent} />;
  }

  if (formType === "forgot") {
    return <ForgotPasswordForm onBackToLogin={() => setFormType("login")} />;
  }

  return null;
}
