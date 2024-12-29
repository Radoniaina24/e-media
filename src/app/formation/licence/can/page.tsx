import Licence from "@/components/Licence";
import SectionL2 from "@/components/Licence/SectionL2";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Licence",
};

export default function page() {
  return <SectionL2 />;
}
