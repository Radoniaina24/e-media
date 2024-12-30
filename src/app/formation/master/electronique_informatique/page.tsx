import SectionL2 from "@/components/Licence/SectionL2";
import SectionM1 from "@/components/Master/SectionM1";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Master",
};

export default function page() {
  return <SectionM1 />;
}
