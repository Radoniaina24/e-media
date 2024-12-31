import SectionUSA from "@/components/Modulaire/SectionUSA";
import SectionUST from "@/components/Modulaire/SectionUST";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Modulaire",
};

export default function UstIo() {
  return <SectionUST />;
}
