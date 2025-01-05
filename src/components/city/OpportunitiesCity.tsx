import React from "react";
import SectionImageCity from "./SectionImageCity";
import HeroBanner from "../Partenariats/HeroBaner";

export default function OpportunitiesCity() {
  //Pourquoi Madagascar est une Opportunité Unique dans le Numérique
  const madagascarOpportunities = [
    {
      title: "Une Croissance Accélérée du Secteur Numérique",
      highlights: [
        {
          text: "Hub de centres d’appels et de services numériques : Plusieurs entreprises étrangères de renom, opérant dans les secteurs de la technologie, des télécommunications et des services à la clientèle, ont déjà établi leurs bases à Madagascar.",
        },
        {
          text: "Ces entreprises profitent de la main-d’œuvre locale qualifiée, multilingue (français, anglais), et compétitive en termes de coûts.",
        },
        {
          text: "L’essor des Business Process Outsourcing (BPO) et des centres d’appels est une preuve tangible de l’attractivité de Madagascar pour le secteur numérique.",
        },
        {
          text: "Adoption rapide des technologies numériques : Avec une augmentation significative de l’accès à Internet ces dernières années (plus de 5 millions d’utilisateurs connectés en 2023), Madagascar est sur le point de devenir un acteur clé de la révolution numérique en Afrique.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Acc%C3%A9l%C3%A9r%C3%A9e_k8gbyk.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Croissance du secteur numérique",
      imageOnRight: false, // Positionne l'image à gauche
    },
    {
      title: "Une Position Géo-Économique Stratégique",
      highlights: [
        {
          text: "Au cœur de l’Océan Indien : Madagascar bénéficie d’une position unique reliant l’Afrique et l’Asie, offrant un accès direct aux marchés émergents des deux continents.",
        },
        {
          text: "Portes ouvertes aux investisseurs : Le gouvernement malgache met en œuvre des politiques incitatives pour encourager les investissements étrangers dans les secteurs technologiques et éducatifs.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Position_uhelqz.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Position géo-économique",
      imageOnRight: true, // Positionne l'image à droite
    },
    {
      title: "Une Main-d’Œuvre Qualifiée et Accessible",
      highlights: [
        {
          text: "Compétitivité des coûts : Madagascar offre une main-d’œuvre qualifiée à un coût nettement inférieur à celui d’autres hubs technologiques africains comme l’Afrique du Sud ou le Kenya.",
        },
        {
          text: "Multilinguisme : La maîtrise du français et de l’anglais place Madagascar en tête des pays d’Afrique pour les services internationaux, comme les BPO et les technologies de l’information.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Main-d_%C5%92uvre_t1piza.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Main-d'œuvre qualifiée",
      imageOnRight: false, // Positionne l'image à gauche
    },
    {
      title: "Potentiel Inexploité dans les Industries Numériques",
      highlights: [
        {
          text: "Le numérique représente une opportunité sans précédent pour Madagascar, avec une croissance annuelle du secteur estimée à 10-15 %. ",
        },
        {
          text: "Les entreprises internationales voient Madagascar comme une plateforme idéale pour des projets pilotes en intelligence artificielle, blockchain, fintech et bien d’autres domaines.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063571/Inexploit%C3%A9_gvj1oz.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Potentiel numérique",
      imageOnRight: true, // Positionne l'image à droite
    },
  ];

  return (
    <div>
      <div className="py-12  ">
        <div className="">
          <HeroBanner
            title={
              "Pourquoi Madagascar est une Opportunité Unique dans le Numérique"
            }
            backgroundImage={
              "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736066013/village_l3oint.jpg"
            }
          />
          <div className="space-y-16 px-6 py-12 ">
            {madagascarOpportunities.map((item, index) => (
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
      </div>
    </div>
  );
}
