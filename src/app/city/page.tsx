import CityProject from "@/components/city";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "City",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};
export default function page() {
  return <CityProject />;
}
