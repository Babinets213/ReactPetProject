import React from "react";
import Button from "./ui/Button";
import MailIcon from "./icons/MailIcon";
import { inter400, poppins700 } from "@/styles/fonts";

export default function ContactUs() {
  return (
    <section className="pb-61">
      <div className="flex items-center justify-between gap-40 rounded-sm bg-[#00AC8E] px-20 py-[3.125rem]">
        <h3
          className={`${poppins700.className} w-1/2 text-2xl leading-[120%] text-white`}
        >
          Steigen Sie jetzt in die S.O.I. Lernwelt ein und bringen Sie Ihre
          Beratungskompetenz aufs nächste Level.
        </h3>
        <div className="flex w-1/2 items-center gap-2 rounded-sm bg-[rgba(255,255,255,0.70)] py-2 pr-2 pl-10">
          <MailIcon />
          <input
            className={`flex-1 bg-transparent text-xl leading-[120%] tracking-[0.4px] text-[#1A2434] opacity-100 outline-none ${inter400.className} placeholder:text-xl placeholder:leading-[120%] placeholder:tracking-[0.4px] placeholder:text-[#1A2434] placeholder:opacity-70 placeholder:${inter400.className} `}
            placeholder="name@email.com"
          />
          <Button content="text" size="normal" type="primary">
            Join now
          </Button>
        </div>
      </div>
    </section>
  );
}
