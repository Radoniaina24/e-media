import SectionAELI from "@/components/Modulaire/SectionAELI";
import SectionUSA from "@/components/Modulaire/SectionUSA";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Modulaire",
};

export default function Aeli() {
  return <SectionAELI />;
}
