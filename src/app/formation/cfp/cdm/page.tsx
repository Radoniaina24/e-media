import SectionMultimedia from "@/components/CFP/SectionMultimedia";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "CFP",
};

export default function page() {
  return (
    <div className=" container mt-28">
      <SectionMultimedia />
    </div>
  );
}
