"use client";
import React from "react";
import HeroSectionPrograms from "../HeroSectionPrograms/HeroSectionPrograms";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function HeaderContact() {
  const { language } = useLanguageContext();
  return (
    <HeroSectionPrograms
      title={language === "fr" ? "Nous contacter" : "Contact Us"}
      imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736923503/Fond-Nos-programmes_1_ehkxvu.jpg"
    />
  );
}
