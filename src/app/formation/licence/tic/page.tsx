import SectionL1 from "@/components/Licence/SectionL1";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Licence",
};

export default function page() {
  return (
    <div>
      <SectionL1 />
    </div>
  );
}
