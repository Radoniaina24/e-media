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

  return (
    <>
      <div id="programme" className="mt-36">
        {/* <LicensePrograms /> */}
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Nos Programmes de Licence
        </h2>
        <hr className="mb-20" />
        <div className="container grid grid-cols-2 gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {programs.map((program, index) => (
            <HoverCard
              link={program.link}
              imageSrc={program.imageSrc}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
