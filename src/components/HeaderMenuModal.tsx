"use client";
import { useRouter } from "@/i18n/navigation";
import React, { useEffect, useRef } from "react";
import DropdownItem from "./DropdownItem";
import { useAuth } from "@/context/AuthContext";

type HeaderMenuModalProps = {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
};

export default function HeaderMenuModal({
  isOpen,
  onClose,
}: HeaderMenuModalProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();

  useEffect(
    function () {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onClose(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    },
    [isOpen, onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute top-12 right-0 z-[999] flex w-[184px] flex-col items-start rounded-lg bg-white"
      style={{
        padding: "8px 0",
        boxShadow:
          "0 98px 27px 0 rgba(194, 196, 199, 0.00), 0 62px 25px 0 rgba(194, 196, 199, 0.01), 0 35px 21px 0 rgba(194, 196, 199, 0.05), 0 16px 16px 0 rgba(194, 196, 199, 0.09), 0 4px 9px 0 rgba(194, 196, 199, 0.10)",
      }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <DropdownItem
        onClick={() => {
          onClose(false);
          router.push(`/dashboard`);
        }}
      >
        My Courses
      </DropdownItem>
      <DropdownItem
        onClick={() => {
          onClose(false);
          router.push(`/profile`);
        }}
        hasBorder
      >
        My Profile
      </DropdownItem>
      <DropdownItem
        onClick={() => {
          logout();
          onClose(false);
        }}
      >
        Logout
      </DropdownItem>
    </div>
  );
}
