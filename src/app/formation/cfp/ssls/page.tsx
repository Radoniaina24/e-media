import SectionSLS from "@/components/CFP/SectionSLS";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "CFP",
};

export default function page() {
  return (
    <div className="">
      <SectionSLS />
    </div>
  );
}
