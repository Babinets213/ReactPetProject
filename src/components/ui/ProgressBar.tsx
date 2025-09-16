import React from "react";

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="mb-2 h-1 w-100 bg-[#E9E9E9]">
      <div
        className={`h-full bg-[#00AC8E]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
