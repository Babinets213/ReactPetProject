import { inter400, inter700 } from "@/styles/fonts";
import React, { useState } from "react";
import Button from "./ui/Button";
import ProgressBar from "./ui/ProgressBar";
import { useTranslations } from "next-intl";

export type MyCourse = {
  id: number;
  title: string;
  progress: number;
};

type MyCourseCardProps = {
  course: MyCourse;
};

export default function MyCourseCard({ course }: MyCourseCardProps) {
  const t = useTranslations("DashboardPage.coursesBtnTexts");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      key={course.id}
      className="flex items-center justify-between rounded-sm border border-[#C2C2C2] px-10 pt-7 pb-4"
    >
      <div>
        <h3
          className={`${inter700.className} mb-3 text-[23px] leading-[120%] text-[#2A354F]`}
        >
          {course.title}
        </h3>
        <ProgressBar progress={course.progress} />
        <span
          className={`${inter400.className} text-sm leading-[120%] text-[#2A354F]`}
        >
          {course.progress}% complete
        </span>
      </div>
      <Button
        btnType={isHovering ? "primary" : "outline"}
        content="text"
        size="large"
      >
        {course.progress > 0 && course.progress < 100 && `${t("resume")}`}
        {course.progress === 0 && `${t("start")}`}
        {course.progress === 100 && `${t("completed")}`}
      </Button>
    </div>
  );
}
