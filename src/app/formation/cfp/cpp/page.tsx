import SectionImages from "@/components/CFP/SectionImages";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "CFP",
};

export default function page() {
  return (
    <div className="">
      <SectionImages />
    </div>
  );
}
