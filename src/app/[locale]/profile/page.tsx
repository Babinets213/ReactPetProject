"use client";
import FileUploader from "@/components/FileUploader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import withAuth from "@/components/hoc/withAuth";
import { profileIcons } from "@/components/icons";
import LanguagesSelect from "@/components/LanguagesSelect";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { profileService, UserProfile } from "@/services/profile";
import { inter400, inter600, inter700, poppins400 } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const t = useTranslations("ProfilePage");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state for all profile fields
  const [formData, setFormData] = useState<Partial<UserProfile>>({});

  // Console log for debugging (this uses the profile variable)
  console.log("Current profile:", profile);

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await profileService.getProfile();
        setProfile(data);
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          birthDate: data.birthDate || "",
          jobTitle: data.jobTitle || "",
          firmNumber: data.firmNumber || "",
          education: data.education || "",
          languages: data.languages || [],
          experienceDuration: data.experienceDuration || "",
          companyName: data.companyName || "",
          position: data.position || "",
          address: data.address || "",
        });
      } catch (err) {
        setError("Failed to load profile data");
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle form field changes
  const handleFieldChange =
    (field: keyof UserProfile) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  // Handle languages field changes
  const handleLanguagesChange = (languages: string[]) => {
    setFormData((prev) => ({
      ...prev,
      languages: languages,
    }));
  };

  // Handle form submission
  const handleSave = async () => {
    try {
      setUpdating(true);
      setError(null);

      const updateData = {
        ...formData,
      };

      const updatedProfile = await profileService.updateProfile(updateData);
      setProfile(updatedProfile);

      // You could show a success message here
    } catch (err) {
      setError("Failed to update profile");
      console.error("Error updating profile:", err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FA]">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      {error && (
        <div className="mx-4 my-2 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          {error}
        </div>
      )}
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
              {profileIcons.user()}
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
              value={formData.firstName || ""}
              onChange={handleFieldChange("firstName")}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.lastNameInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.lastNameInput.label")}
              value={formData.lastName || ""}
              onChange={handleFieldChange("lastName")}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.emailInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.emailInput.label")}
              icon
              iconComponent={profileIcons.mail()}
              value={formData.email || ""}
              disabled={true}
              onChange={handleFieldChange("email")}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.phoneInput.placeholder")}
              inputType="text"
              labelText={t("personalInformation.phoneInput.label")}
              icon
              iconComponent={profileIcons.phone()}
              value={formData.phoneNumber || ""}
              onChange={handleFieldChange("phoneNumber")}
            />

            <Input
              className="bg-white"
              placeholder={t("personalInformation.dateInput.placeholder")}
              inputType="date"
              labelText={t("personalInformation.dateInput.label")}
              icon
              value={formData.birthDate || ""}
              onChange={handleFieldChange("birthDate")}
            />
          </div>
        </section>

        {/*Professional Information*/}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              {profileIcons.suitCase()}
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
              value={formData.jobTitle || ""}
              onChange={handleFieldChange("jobTitle")}
            />

            <Input
              className="bg-white"
              placeholder={t("professionalInformation.finmaInput.placeholder")}
              inputType="text"
              labelText={t("professionalInformation.finmaInput.label")}
              value={formData.firmNumber || ""}
              onChange={handleFieldChange("firmNumber")}
            />

            <div className="col-span-2">
              <Input
                className="bg-white"
                placeholder={t(
                  "professionalInformation.educationInput.placeholder",
                )}
                inputType="text"
                labelText={t("professionalInformation.educationInput.label")}
                value={formData.education || ""}
                onChange={handleFieldChange("education")}
              />
            </div>

            <div className="mt-auto flex flex-col gap-1">
              <label
                className={`${inter600.className} text-base leading-[120%] text-[#424242]`}
              >
                {t("professionalInformation.languages.label")}
              </label>
              <LanguagesSelect
                value={formData.languages || []}
                onChange={handleLanguagesChange}
              />
            </div>

            <Input
              className="bg-white"
              placeholder={t(
                "professionalInformation.experienceInput.placeholder",
              )}
              inputType="text"
              labelText={t("professionalInformation.experienceInput.label")}
              value={formData.experienceDuration || ""}
              onChange={handleFieldChange("experienceDuration")}
            />
          </div>
        </section>

        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              {profileIcons.suitCase()}
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
              value={formData.companyName || ""}
              onChange={handleFieldChange("companyName")}
            />

            <Input
              className="bg-white"
              placeholder={t("currentEmployment.positionInput.placeholder")}
              inputType="text"
              labelText={t("currentEmployment.positionInput.label")}
              value={formData.position || ""}
              onChange={handleFieldChange("position")}
            />
          </div>
        </section>

        {/* ADDRESS SECTION */}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              {profileIcons.geo()}
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
              value={formData.address || ""}
              onChange={handleFieldChange("address")}
            />
          </div>
        </section>

        {/* CV SECTION */}
        <section className="flex flex-col gap-6 border-t border-t-[#D0D0D0] pt-6 pb-[38px]">
          <div>
            <div className="mb-1 flex items-center gap-2">
              {profileIcons.document()}
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
              {profileIcons.suitCase()}
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
                        {profileIcons.download()}
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
          onClick={handleSave}
          disabled={updating}
        >
          {updating ? "Saving..." : t("saveBtn")}
        </Button>
      </main>
      <Footer />
    </div>
  );
}

export default withAuth(ProfilePage);
