import React from "react";
import HeroBanner from "../Partenariats/HeroBaner";

export default function Invitation() {
  const grandTitre = "Invitation à Investir, Collaborer et Prendre Contact";
  const subtitle =
    "Rejoignez Indian Ocean Tech Valley, un projet visionnaire qui associe innovation, rentabilité et impact durable. Saisissez l’opportunité de collaborer sur une initiative stratégique qui redéfinit l’éducation, la technologie et l’entrepreneuriat dans une région en pleine croissance. Prenez part à cette transformation en nous contactant dès aujourd’hui pour explorer les possibilités d’investissement, de collaboration, et d’impact partagé. Commencez par remplir la fiche suivante et engagez un premier dialogue avec notre équipe.";

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
