import { inter400, poppins700 } from "@/styles/fonts";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center pb-50">
      <div className="mb-23 flex flex-col items-center justify-center">
        <h1
          className={`text-center text-[70px] text-white ${poppins700.className} mb-3`}
        >
          Welcome to Learning World
        </h1>
        <p className={`text-2xl ${inter400.className} mb-13 text-white`}>
          The all-in-one learning platform for mortgage brokers: learn, certify,
          and grow your career.
        </p>
        <Button type="primary" size="large">
          Explore courses
        </Button>
      </div>
      <Image
        unoptimized
        alt="Animated GIF showing mortgage learning process"
        src={"/animation.gif"}
        width={1440}
        height={660}
      />
    </section>
  );
}
