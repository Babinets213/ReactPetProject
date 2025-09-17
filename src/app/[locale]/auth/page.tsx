import React from "react";

import AuthContainer from "@/components/auth/AuthContainer";
import AuthLayout from "@/components/auth/AuthLayout";

export default function Test() {
  return (
    <AuthLayout>
      <AuthContainer />
    </AuthLayout>
  );
}
