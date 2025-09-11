"use client";
import React, { ChangeEvent, useState } from "react";
import UploadIcon from "./icons/profile/UploadIcon";
import { inter400 } from "@/styles/fonts";
import DocumentIcon from "./icons/profile/DocumentIcon";
import DeleteIcon from "./icons/profile/DeleteIcon";
import { useTranslations } from "next-intl";

export default function FileUploader() {
  const t = useTranslations("ProfilePage");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  return (
    <label
      htmlFor="file-upload"
      className={`flex flex-col ${!file ? "items-center justify-center" : ""} rounded-sm border border-[#C2C2C2] bg-white px-4 py-6`}
    >
      {file ? (
        <div className="flex items-center gap-2">
          <DocumentIcon color="#687083" />
          <div
            className={`${inter400.className} flex flex-col gap-1 text-base leading-[120%] text-[#757575]`}
          >
            <p>{file.name}</p>
            <p>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
          </div>
          <button
            onClick={() => setFile(null)}
            className="ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#CED4DA] px-[10px]"
          >
            <DeleteIcon />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1 text-center">
          <UploadIcon />
          <span
            className={`${inter400.className} text-base leading-[120%] text-[#757575]`}
          >
            {t("cv.uploadLabel")}
          </span>
        </div>
      )}
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept=".doc,.docx,.pdf,.png"
      />
    </label>
  );
}
