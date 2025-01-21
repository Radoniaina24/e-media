import React from "react";
import { Metadata } from "next";
import NoteFound from "@/components/NotFound/NoteFound";

export const metadata: Metadata = {
  title: "Not-found",
};
export default function notFound() {
  return <NoteFound />;
}
