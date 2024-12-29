import Licence from "@/components/Licence";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Licence",
};

export default function page() {
  return (
    <div>
      <Licence />
    </div>
  );
}
