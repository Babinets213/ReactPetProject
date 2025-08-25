import React from "react";
import GreenStrokeIcon from "./icons/GreenStrokeIcon";
import { inter400, inter500, inter700, poppins700 } from "@/styles/fonts";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";

export default function Testimonial() {
  return (
    <section className="pb-43" id="testimonial">
      <div className="mb-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <div>
            <GreenStrokeIcon />
          </div>
          <span
            className={`${inter400.className} text-2xl leading-[120%] tracking-[0.48px] text-[rgba(42,53,79,0.7)]`}
          >
            Testimonial
          </span>
        </div>
        <h2
          className={`${poppins700.className} text-[56px] leading-[120%] text-[#2A354F]`}
        >
          Student Testimonial
        </h2>
      </div>

      <div className="relative grid place-items-center sm:grid-cols-2 sm:gap-3 md:gap-5 lg:grid-cols-3 2xl:gap-8">
        {/* First student */}
        <article className="flex flex-col gap-4 p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="rounded-full"
                width={91}
                height={91}
                src="/images/student1.png"
                alt="Luca Meier"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 opacity-70">
                <h3
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434]`}
                >
                  Luca Meier
                </h3>
                <p
                  className={`text-[#1A2434] ${inter500.className} text-base leading-[120%] tracking-[0.32px]`}
                >
                  Independent Mortgage Broker <br />
                  <span className={`${inter400.className}`}>
                    (5+ years experience)
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-70`}
                >
                  <strong>4.9</strong>
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            <p
              className={`${inter400.className} text-base leading-[140%] tracking-[0.32px] text-[#1A2434] opacity-70`}
            >
              The Learning World platform gave me exactly what I needed —
              up-to-date regulations, practical tools, and client-ready
              templates. The Assessment Block helped refresh my fundamentals in
              a structured way.
            </p>
          </blockquote>
        </article>

        {/* Second student */}
        <article className="flex flex-col gap-4 p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="rounded-full"
                width={91}
                height={91}
                src="/images/student2.png"
                alt="Anna Schneider"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 opacity-70">
                <h3
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434]`}
                >
                  Anna Schneider
                </h3>
                <p
                  className={`text-[#1A2434] ${inter500.className} text-base leading-[120%] tracking-[0.32px]`}
                >
                  Junior Broker at Raiffeisen Bank
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-70`}
                >
                  <strong>4.8</strong>
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            <p
              className={`${inter400.className} text-base leading-[140%] tracking-[0.32px] text-[#1A2434] opacity-70`}
            >
              As someone new to the industry, the modular approach made it easy
              to learn step-by-step. The Advanced modules gave me real
              confidence when discussing investment financing with clients.
            </p>
          </blockquote>
        </article>

        {/* Third student */}
        <article className="flex flex-col gap-4 p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="rounded-full"
                width={91}
                height={91}
                src="/images/student1.png"
                alt="Daniel Frei"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 opacity-70">
                <h3
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434]`}
                >
                  Daniel Frei
                </h3>
                <p
                  className={`text-[#1A2434] ${inter500.className} text-base leading-[120%] tracking-[0.32px]`}
                >
                  Partnered Broker for UBS clients
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span
                  className={`text-xl ${inter700.className} leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-70`}
                >
                  <strong>5.0</strong>
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            <p
              className={`${inter400.className} text-base leading-[140%] tracking-[0.32px] text-[#1A2434] opacity-70`}
            >
              The professional-level courses helped me deepen my understanding
              of SARON trends and build smarter financing strategies. I
              appreciated the Swiss-specific focus of each module.
            </p>
          </blockquote>
        </article>
      </div>
    </section>
  );
}
