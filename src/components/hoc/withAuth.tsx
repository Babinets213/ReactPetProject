"use client";
import { useRouter } from "@/i18n/navigation";
import React, { useEffect } from "react";

function withAuth(
  WrappedComponent: React.ComponentType,
  redirectTo: string = "/auth",
) {
  const ComponentWithGuard = function () {
    const user = localStorage.getItem("user");
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace(redirectTo);
      }
    }, [user, router]);

    if (!user) {
      return null;
    }

    return <WrappedComponent />;
  };

  ComponentWithGuard.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithGuard;
}

export default withAuth;
