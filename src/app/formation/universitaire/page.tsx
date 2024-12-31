import Universitaire from "@/components/Universitaire/Universitaire";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Modulaire",
};

export default function universitaire() {
  return <Universitaire />;
}
