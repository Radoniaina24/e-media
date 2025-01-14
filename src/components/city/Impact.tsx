"use client";
import React from "react";
import SectionImageCity from "./SectionImageCity";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function Impact() {
  const { language } = useLanguageContext();
  const ImpactDataFr = [
    {
      title: "Renforcement de l’Écosystème Numérique",
      highlights: [
        {
          text: "Le Village Numérique jouera un rôle clé dans la formation de talents qualifiés pour soutenir le secteur des BPO, des services numériques et de l’innovation technologique.",
        },
        {
          text: "En stimulant les startups locales, il contribuera à la création d’un écosystème entrepreneurial robuste.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083738/ecosysteme_w8hjet.jpg", // Remplacez par l'image souhaitée
      imageAlt: "Écosystème numérique",
      imageOnRight: false, // Positionne l'image à gauche
    },
    {
      title: "Rayonnement International de Madagascar",
      highlights: [
        {
          text: "Le projet positionnera Madagascar comme une destination éducative et technologique en Afrique et dans l’Océan Indien.",
        },
        {
          text: "Les collaborations internationales renforceront la notoriété et la crédibilité du pays sur la scène mondiale.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/rayonnement_jhcojh.jpg", // Remplacez par l'image souhaitée
      imageAlt: "Rayonnement international",
      imageOnRight: true, // Positionne l'image à droite
    },
    {
      title: "Transformation Socio-Économique",
      highlights: [
        {
          text: "Création d’emplois : Des milliers d’emplois directs et indirects seront générés dans les secteurs de l’éducation, de la technologie et des services.",
        },
        {
          text: "Éducation accessible : Les jeunes malgaches et africains auront accès à des formations certifiées et reconnues mondialement.",
        },
        {
          text: "Réduction de la fracture numérique : En donnant accès à des outils modernes, le Village Numérique contribuera à combler l’écart technologique entre les zones rurales et urbaines.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg", // Remplacez par l'image souhaitée
      imageAlt: "Transformation socio-économique",
      imageOnRight: false, // Positionne l'image à gauche
    },
  ];
  const ImpactDataEn = [
    {
      title: "Strengthening the Digital Ecosystem",
      highlights: [
        {
          text: "The Digital Village will play a key role in training qualified talent to support the BPO, digital services, and technological innovation sectors.",
        },
        {
          text: "By stimulating local startups, it will contribute to the creation of a robust entrepreneurial ecosystem.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083738/ecosysteme_w8hjet.jpg", // Replace with desired image
      imageAlt: "Digital ecosystem",
      imageOnRight: false, // Positions image on the left
    },
    {
      title: "International Visibility for Madagascar",
      highlights: [
        {
          text: "The project will position Madagascar as an educational and technological destination in Africa and the Indian Ocean region.",
        },
        {
          text: "International collaborations will strengthen the country’s visibility and credibility on the global stage.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/rayonnement_jhcojh.jpg", // Replace with desired image
      imageAlt: "International visibility",
      imageOnRight: true, // Positions image on the right
    },
    {
      title: "Socio-Economic Transformation",
      highlights: [
        {
          text: "Job creation: Thousands of direct and indirect jobs will be generated in education, technology, and services.",
        },
        {
          text: "Accessible education: Malagasy and African youth will have access to globally recognized certified training.",
        },
        {
          text: "Reducing the digital divide: By providing access to modern tools, the Digital Village will help bridge the technological gap between rural and urban areas.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg", // Replace with desired image
      imageAlt: "Socio-economic transformation",
      imageOnRight: false, // Positions image on the left
    },
  ];
  const ImpactData = language === "fr" ? ImpactDataFr : ImpactDataEn;
  const grandTitre =
    language === "fr"
      ? "Impact du Projet sur Madagascar et l’Afrique"
      : "Impact of the Project on Madagascar and Africa";
  return (
    <div>
      <header className="relative z-10 mx-auto max-w-7xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-red-500 md:text-5xl">
          {grandTitre}
        </h1>
      </header>
      <div className="space-y-16 px-6 py-12 ">
        {ImpactData.map((item, index) => (
          <SectionImageCity
            key={index}
            title={item.title}
            highlights={item.highlights}
            imageSrc={item.imageSrc}
            imageAlt={item.title}
            imageOnRight={item.imageOnRight}
          />
        ))}
      </div>
    </div>
  );
}
