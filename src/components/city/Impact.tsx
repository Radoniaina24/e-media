import React from "react";
import SectionImageCity from "./SectionImageCity";

export default function Impact() {
  const ImpactData = [
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

  const grandTitre = "Impact du Projet sur Madagascar et l’Afrique";
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
