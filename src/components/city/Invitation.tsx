import React from "react";
import HeroBanner from "../Partenariats/HeroBaner";

export default function Invitation() {
  const grandTitre = "Invitation à Investir";
  const subtitle =
    "Investir dans Indian Ocean Tech Valley, c’est saisir une opportunité unique de devenir un acteur clé de l’innovation et de la transformation numérique. En vous associant à ce projet visionnaire, vous renforcez votre position de leader tout en accédant à un écosystème de classe mondiale. C’est bien plus qu’un investissement : c’est une chance de façonner l’avenir et de laisser votre empreinte dans une initiative globale et durable.";

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
