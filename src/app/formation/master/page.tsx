import Licence from "@/components/Licence";
import MasterPrograms from "@/components/Master/MasterPrograms";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Master",
};

export default function page() {
  return (
    <div className="">
      <MasterPrograms />
    </div>
  );
}
