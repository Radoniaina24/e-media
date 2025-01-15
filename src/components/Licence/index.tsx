"use client";
import React from "react";
import HoverCard from "./HoverCard";
export default function Licence() {
  const programs = [
    {
      link: "/formation/licence/tic", // Remplacez par le lien vers la page de la licence TIC
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736506071/tic_elvdb6.png", // Lien de l'image pour TIC
    },
    {
      link: "/formation/licence/can", // Remplacez par le lien vers la page de la licence CAN
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736506071/CAN_pxykbv.png", // Lien de l'image pour CAN
    },
    {
      link: "/formation/licence/mdj", // Remplacez par le lien vers la page de la licence MDJ
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736506071/MDj_e5n0rg.png", // Lien de l'image pour MDJ
    },
    {
      link: "/formation/licence/management", // Remplacez par le lien vers la page de la licence Management
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736506071/mgt_kkikwy.png", // Lien de l'image pour Management
    },
    {
      link: "/formation/licence/droit", // Remplacez par le lien vers la page de la licence Droit
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736506071/drt_zzt0od.png", // Lien de l'image pour Droit
    },
  ];
  const { language } = useLanguageContext();
  return (
    <div>
      <HeroSectionPrograms
        title={
          language === "fr"
            ? "Nos Programmes de Licence"
            : "Our Bachelor's Degree Programs"
        }
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736923503/Fond-Nos-programmes_1_ehkxvu.jpg"
      />
      <div id="programme" className="container mt-10">
        {/* <LicensePrograms /> */}
        <div className=" grid grid-cols-2 gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {programs.map((program, index) => (
            <Link href={program.link} key={index}>
              <HoverCard link={program.link} imageSrc={program.imageSrc} />
            </Link>
          ))}
        </div>

        {/* <StaircaseImages /> */}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import HeroSectionPrograms from "../HeroSectionPrograms/HeroSectionPrograms";

function StaircaseImages() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Image 1 */}
      <div className="absolute left-0 top-0">
        <Image
          src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/son_v46pec.png"
          alt="Image 1"
          width={150}
          height={150}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Image 2 */}
      <div className="absolute left-16 top-0">
        <Image
          src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/son_v46pec.png"
          alt="Image 2"
          width={150}
          height={150}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Image 3 */}
      <div className="absolute left-32 top-0">
        <Image
          src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/son_v46pec.png"
          alt="Image 3"
          width={150}
          height={150}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
