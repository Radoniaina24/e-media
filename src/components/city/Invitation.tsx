import React from "react";
import HeroBanner from "../Partenariats/HeroBaner";

export default function Invitation() {
  const grandTitre = "Invitation à Investir";
  const subtitle =
    "Plongez au cœur d’une initiative révolutionnaire avec Indian Ocean Tech Valley, un projet visionnaire conçu pour transformer Madagascar en un carrefour stratégique de l’innovation et de l’éducation numérique. Investir dans ce projet, c’est embrasser une opportunité unique de façonner l’avenir d’une région au potentiel illimité, où technologie, entrepreneuriat et excellence académique se rencontrent. C’est également contribuer activement à bâtir un écosystème de classe mondiale, moteur de croissance pour l’Océan Indien et porte d’entrée vers l’Afrique. En rejoignant cette aventure, vous devenez non seulement un partenaire de premier plan, mais aussi un acteur clé du changement global et durable.";

  const points = [
    "L’autonomisation des jeunes talents africains.",
    "Le positionnement stratégique de Madagascar comme un acteur clé de l’innovation et de l’éducation en Afrique.",
    "La création d’un écosystème technologique durable et prospère.",
  ];

  // Définir les couleurs pour chaque point
  const colors = [
    "text-gray-900", // Bleu pour le premier point
    "text-green-600", // Vert pour le deuxième point
    "text-orange-600", // Orange pour le troisième point
  ];

  // Définir les images de fond pour chaque carte
  const backgroundImages = [
    "/images/why/t-a.jpg", // Image pour la première carte
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Position_uhelqz.jpg", // Image pour la deuxième carte
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083738/ecosysteme_w8hjet.jpg", // Image pour la troisième carte
  ];

  return (
    <div>
      <HeroBanner
        title={grandTitre}
        backgroundImage={
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736087509/fond_bleu_vfvm37.jpg"
        }
        subtitle={subtitle}
      />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="relative transform rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${backgroundImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.7)", // Diminuer la luminosité de l'image
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-black opacity-30"></div>{" "}
              {/* Fond semi-transparent */}
              <h3
                className={`relative mb-4 text-center text-2xl font-semibold ${colors[index]} `}
              >
                {`Point ${index + 1}`}
              </h3>
              <p className="relative text-xl leading-relaxed text-white ">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
