"use client";
import React from "react";
import HeroSectionPrograms from "../HeroSectionPrograms/HeroSectionPrograms";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function HeaderSignup() {
  const { language } = useLanguageContext();
  return (
    <HeroSectionPrograms
      title={language === "fr" ? "Inscription" : "Registration"}
      imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736923503/Fond-Nos-programmes_1_ehkxvu.jpg"
    />
  );
}
