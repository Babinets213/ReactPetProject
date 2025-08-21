import React from "react";
import Image from "next/image";
import { inter400 } from "@/styles/fonts";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="relative mb-41 flex w-full items-center justify-between px-60 py-4">
      <a href="#">
        <Image
          className="h-[50px]"
          alt="Learning World logo"
          src="/logo.png"
          width={211}
          height={50}
        />
      </a>

      <nav className="absolute top-1/2 left-1/2 -translate-1/2">
        <ul
          className={`flex justify-center gap-5 text-base text-white ${inter400.className}`}
        >
          <li>
            <a className="inline-block px-4 py-2" href="#why">
              Benefit
            </a>
          </li>
          <li>
            <a className="inline-block px-4 py-2" href="#">
              Learning Blocks
            </a>
          </li>
          <li>
            <a className="inline-block px-4 py-2" href="#">
              How It Works
            </a>
          </li>
          <li>
            <a className="inline-block px-4 py-2" href="#">
              Reviews
            </a>
          </li>
        </ul>
      </nav>

      <Button type="primary" size="normal">
        Login
      </Button>
    </header>
  );
}
