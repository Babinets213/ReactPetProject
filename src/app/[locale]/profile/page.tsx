"use client";
import FileUploader from "@/components/FileUploader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DocumentIcon from "@/components/icons/profile/DocumentIcon";
import GeoIcon from "@/components/icons/profile/GeoIcon";
import MailIcon from "@/components/icons/profile/MailIcon";
import PhoneIcon from "@/components/icons/profile/PhoneIcon";
import SuitCaseIcon from "@/components/icons/profile/SuitCaseIcon";
import UploadIcon from "@/components/icons/profile/UploadIcon";
import UserIcon from "@/components/icons/profile/UserIcon";
import LanguagesSelect from "@/components/LanguagesSelect";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { inter400, inter600, inter700, poppins400 } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import React from "react";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="bg-[#F9F9F9] pt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`text-black ${inter700.className} mb-3 text-[35px] leading-[120%]`}
        >
          {t("title")}
        </h2>
        <p
          className={`mb-6 text-[#505050] ${poppins400.className} text-base leading-[160%]`}
        >
          {t("description")}
        </p>

        {/*Personal information*/}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <UserIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                {t("personalInformation.title")}
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              {t("personalInformation.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              className="bg-white"
              placeholder={t("personalInformation.firstNameInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.firstNameInput.label")}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.lastNameInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.lastNameInput.label")}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.emailInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.emailInput.label")}
              icon
              iconComponent={<MailIcon />}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.phoneInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.phoneInput.label")}
              icon
              iconComponent={<PhoneIcon />}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.dateInput.placeholder")}
              inputType="date"
              labelText={t("personalInformation.dateInput.label")}
              icon
            />

            <Input
              className="bg-white"
              placeholder={t(
                "personalInformation.curPasswordInput.placeholder",
              )}
              inputType="password"
              labelText={t("personalInformation.curPasswordInput.label")}
              icon
            />

            <Input
              className="bg-white"
              placeholder={t(
                "personalInformation.newPasswordInput.placeholder",
              )}
              inputType="password"
              labelText={t("personalInformation.newPasswordInput.label")}
              icon
            />

            <Input
              className="bg-white"
              placeholder={t(
                "personalInformation.confirmPasswordInput.placeholder",
              )}
              inputType="password"
              labelText={t("personalInformation.confirmPasswordInput.label")}
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
                {t("professionalInformation.title")}
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              {t("professionalInformation.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              className="bg-white"
              placeholder={t(
                "professionalInformation.jobTitleInput.placeholder",
              )}
              inputType="text"
              labelText={t("professionalInformation.jobTitleInput.label")}
            />

            <Input
              className="bg-white"
              placeholder={t("professionalInformation.finmaInput.placeholder")}
              inputType="text"
              labelText={t("professionalInformation.finmaInput.label")}
            />

            <div className="col-span-2">
              <Input
                className="bg-white"
                placeholder={t(
                  "professionalInformation.educationInput.placeholder",
                )}
                inputType="text"
                labelText={t("professionalInformation.educationInput.label")}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                className={`${inter600.className} text-base leading-[120%] text-[#424242]`}
              >
                {t("professionalInformation.languages.label")}
              </label>
              <LanguagesSelect />
            </div>

            <Input
              className="bg-white"
              placeholder={t(
                "professionalInformation.experienceInput.placeholder",
              )}
              inputType="text"
              labelText={t("professionalInformation.experienceInput.label")}
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
                {t("currentEmployment.title")}
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              {t("currentEmployment.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              className="bg-white"
              placeholder={t("currentEmployment.companyInput.placeholder")}
              inputType="text"
              labelText={t("currentEmployment.companyInput.label")}
            />

            <Input
              className="bg-white"
              placeholder={t("currentEmployment.positionInput.placeholder")}
              inputType="text"
              labelText={t("currentEmployment.positionInput.label")}
            />
          </div>
        </section>

        {/* ADDRESS SECTION */}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <GeoIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                {t("address.title")}
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              {t("address.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <Input
              className="bg-white"
              isTextarea
              placeholder={t("address.addressInput.placeholder")}
              inputType="text"
              labelText={t("address.addressInput.label")}
            />
          </div>
        </section>

        {/* CV SECTION */}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <DocumentIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                {t("cv.title")}
              </h3>
            </div>
            <p
              className={`text-[#505050] ${poppins400.className} text-base leading-[160%]`}
            >
              {t("cv.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-6">
            <FileUploader />
          </div>
        </section>

        {/* Payment History */}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-15">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <SuitCaseIcon />
              <h3
                className={`${inter700.className} text-[23px] leading-[120%] text-black`}
              >
                {t("paymentHistory.title")}
              </h3>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4">
            <table className="mb-4 w-full">
              <thead>
                <tr className="h-10">
                  <th
                    scope="col"
                    className={`${inter600.className} border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-6 text-center text-base leading-[120%] text-[#6C757D]`}
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className={`${inter600.className} min-w-40 border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-6 text-left text-base leading-[120%] text-[#6C757D]`}
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className={`${inter600.className} min-w-40 border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-6 text-left text-base leading-[120%] text-[#6C757D]`}
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className={`${inter600.className} w-166 min-w-40 border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-6 text-left text-base leading-[120%] text-[#6C757D]`}
                  >
                    Object
                  </th>
                  <th
                    scope="col"
                    className={`${inter600.className} border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-6 text-left text-base leading-[120%] text-[#6C757D]`}
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="w-12 border-b border-b-[#E9ECEF]"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? "bg-[#F8F9FA]" : "bg-white"} ${inter400.className} text-base leading-[120%] text-[#343A40]`}
                  >
                    <td
                      className={`border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-4 py-3 text-center`}
                    >
                      {i + 1}
                    </td>
                    <td className="border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-4 py-3">
                      01.06.25
                    </td>
                    <td className="border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block h-3 w-3 rounded-full ${
                            i === 1
                              ? "bg-[#27AE60]"
                              : i === 2
                                ? "bg-[#F75555]"
                                : "bg-[#EDD616]"
                          }`}
                        />
                        {i === 1 ? "Paid" : i === 2 ? "Declined" : "Pending"}
                      </div>
                    </td>
                    <td className="border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-4 py-3">
                      Büro/Gewerbe
                    </td>
                    <td className="border-r border-b border-r-[#E9ECEF] border-b-[#E9ECEF] px-4 py-3">
                      69 CHF
                    </td>
                    <td className="border-b border-b-[#E9ECEF] px-4 py-3 text-center">
                      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#CED4DA] bg-white px-[10px]">
                        <UploadIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button size="normal" content="text" btnType="secondary">
              Load more
            </Button>
          </div>
        </section>

        <Button
          btnType="primary"
          content="text"
          size="normal"
          className="mb-35 w-118"
        >
          {t("saveBtn")}
        </Button>
      </main>
      <Footer />
    </div>
  );
}
