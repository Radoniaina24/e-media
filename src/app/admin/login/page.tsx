import Login from "@/components/Admin/Login/Login";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Login | E-media",
};

export default function page() {
  return <Login />;
}
