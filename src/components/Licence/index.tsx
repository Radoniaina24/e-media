"use client";
import React from "react";
import HoverCard from "./HoverCard";
export default function Licence() {
  const { language } = useLanguageContext();
  const programsFr = [
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
  const programsEn = [
    {
      link: "/formation/licence/tic", // Remplacez par le lien vers la page de la licence TIC
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737022829/TIC_EN_q1tsql.jpg", // Lien de l'image pour TIC
    },
    {
      link: "/formation/licence/can", // Remplacez par le lien vers la page de la licence CAN
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737022830/CAN_EN_yup3w4.png", // Lien de l'image pour CAN
    },
    {
      link: "/formation/licence/mdj", // Remplacez par le lien vers la page de la licence MDJ
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737022829/MDJ_EN_n3ekfv.jpg", // Lien de l'image pour MDJ
    },
    {
      link: "/formation/licence/management", // Remplacez par le lien vers la page de la licence Management
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737022829/MGT_EN_rdsgsp.jpg", // Lien de l'image pour Management
    },
    {
      link: "/formation/licence/droit", // Remplacez par le lien vers la page de la licence Droit
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737022829/DRT_EN_duee53.jpg", // Lien de l'image pour Droit
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  return (
    <div className="">
      <HeroSectionPrograms
        title={
          language === "fr"
            ? "Nos Programmes de Licence"
            : "Our Bachelor's Degree Programs"
        }
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736923503/Fond-Nos-programmes_1_ehkxvu.jpg"
      />
      <div id="programme" className="container mb-14 mt-10">
        {/* <LicensePrograms /> */}
        <div className=" grid grid-cols-2 gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {programs.map((program, index) => (
            <Link href={program.link} key={index}>
              <HoverCard
                link={program.link}
                imageSrc={program.imageSrc}
                buttonText={language === "fr" ? "En savoir plus" : "Learn more"}
              />
            </Link>
          ))}
        </div>

        {/* <StaircaseImages /> */}
      </div>
    </div>
  );
}

import Link from "next/link";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import HeroSectionPrograms from "../HeroSectionPrograms/HeroSectionPrograms";
