import SectionModulaire from "@/components/Modulaire/SectionModulaire";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Modulaire",
};

export default function page() {
  return <SectionModulaire />;
}
