import SectionCFP from "@/components/CFP/SectionCFP";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "CFP",
};

export default function page() {
  return <SectionCFP />;
}
