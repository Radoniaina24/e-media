import Universitaire from "@/components/Universitaire/Universitaire";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Universitaire",
};

export default function universitaire() {
  return <Universitaire />;
}
