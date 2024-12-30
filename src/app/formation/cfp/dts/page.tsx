import SectionDTS from "@/components/CFP/SectionDTS";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "CFP",
};
export default function page() {
  return (
    <div>
      <SectionDTS />
    </div>
  );
}
