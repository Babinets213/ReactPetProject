import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import CalendarIcon from "@/components/icons/profile/CalendarIcon";
import MailIcon from "@/components/icons/profile/MailIcon";
import PhoneIcon from "@/components/icons/profile/PhoneIcon";
import SuitCaseIcon from "@/components/icons/profile/SuitCaseIcon";
import UserIcon from "@/components/icons/profile/UserIcon";
import Input from "@/components/ui/Input";
import { inter700, poppins400 } from "@/styles/fonts";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="mt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`text-black ${inter700.className} mb-3 text-[35px] leading-[120%]`}
        >
          My Profile
        </h2>
        <p
          className={`mb-6 text-[#505050] ${poppins400.className} text-base leading-[160%]`}
        >
          Here you can view or edit your profile information
        </p>

        {/*Personal information*/}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <UserIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                Personal information
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              Your basic personal data
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              placeholder="Your First Name"
              inputType="text"
              labelText="First Name*"
            />

            <Input
              placeholder="Your Last Name"
              inputType="text"
              labelText="Last Name*"
            />

            <Input
              placeholder="your.email@example.com"
              inputType="text"
              labelText="Email*"
              icon
              iconComponent={<MailIcon />}
            />

            <Input
              placeholder="+49 123 456 7890"
              inputType="text"
              labelText="Phone number*"
              icon
              iconComponent={<PhoneIcon />}
            />

            <Input
              placeholder="dd.mm.yyyy"
              inputType="date"
              labelText="Date of birth*"
              icon
            />

            <Input
              placeholder="Your Current Password"
              inputType="password"
              labelText="Current Password"
              icon
            />

            <Input
              placeholder="Your New Password"
              inputType="password"
              labelText="New Password"
              icon
            />

            <Input
              placeholder="Your New Password"
              inputType="password"
              labelText="Confirm New Password"
              icon
            />
          </div>
        </section>

        {/*Professional Information*/}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <SuitCaseIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                Professional Information
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              Details about your career and qualifications
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              placeholder="Your Job"
              inputType="text"
              labelText="Job title"
            />

            <Input
              placeholder="F01234567"
              inputType="text"
              labelText="FINMA number"
            />

            <div className="col-span-2">
              <Input
                placeholder="Describe your education "
                inputType="text"
                labelText="Education"
              />
            </div>

            <Input
              placeholder="Choose languages"
              inputType="text"
              labelText="Languages"
              icon
              iconComponent={<ChevronDownIcon />}
            />

            <Input
              placeholder="e.g. Since 2018 or 5 years"
              inputType="text"
              labelText="How long have you been working in your industry:"
            />
          </div>
        </section>

        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <SuitCaseIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                Current Employment
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              Information about your current workplace
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              placeholder="Name of your company"
              inputType="text"
              labelText="Company/employer:"
            />

            <Input
              placeholder="Your current position/role"
              inputType="text"
              labelText="Position"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
