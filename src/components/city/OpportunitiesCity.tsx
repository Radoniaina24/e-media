"use client";
import React from "react";
import SectionImageCity from "./SectionImageCity";
import HeroBanner from "../Partenariats/HeroBaner";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function OpportunitiesCity() {
  //Pourquoi Madagascar est une Opportunité Unique dans le Numérique
  const { language } = useLanguageContext();
  const madagascarOpportunitiesFr = [
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
  const madagascarOpportunitiesEn = [
    {
      title: "An Accelerated Growth of the Digital Sector",
      highlights: [
        {
          text: "Hub for call centers and digital services: Several renowned foreign companies operating in the technology, telecommunications, and customer service sectors have already established their bases in Madagascar.",
        },
        {
          text: "These companies benefit from a qualified, multilingual (French, English), and cost-competitive local workforce.",
        },
        {
          text: "The rise of Business Process Outsourcing (BPO) and call centers is a tangible proof of Madagascar's attractiveness to the digital sector.",
        },
        {
          text: "Rapid adoption of digital technologies: With a significant increase in internet access in recent years (over 5 million users connected in 2023), Madagascar is on the brink of becoming a key player in the digital revolution in Africa.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Acc%C3%A9l%C3%A9r%C3%A9e_k8gbyk.jpg", // Replace with your image path
      imageAlt: "Growth of the digital sector",
      imageOnRight: false, // Position the image on the left
    },
    {
      title: "A Strategic Geo-Economic Position",
      highlights: [
        {
          text: "In the heart of the Indian Ocean: Madagascar benefits from a unique position linking Africa and Asia, offering direct access to emerging markets on both continents.",
        },
        {
          text: "Open doors for investors: The Malagasy government is implementing incentive policies to encourage foreign investments in the technology and education sectors.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Position_uhelqz.jpg", // Replace with your image path
      imageAlt: "Geo-economic position",
      imageOnRight: true, // Position the image on the right
    },
    {
      title: "A Qualified and Accessible Workforce",
      highlights: [
        {
          text: "Cost competitiveness: Madagascar offers a qualified workforce at a significantly lower cost than other African tech hubs like South Africa or Kenya.",
        },
        {
          text: "Multilingualism: Proficiency in French and English places Madagascar at the forefront of African countries for international services, such as BPO and IT services.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063569/Main-d_%C5%92uvre_t1piza.jpg", // Replace with your image path
      imageAlt: "Qualified workforce",
      imageOnRight: false, // Position the image on the left
    },
    {
      title: "Untapped Potential in Digital Industries",
      highlights: [
        {
          text: "Digital represents an unprecedented opportunity for Madagascar, with an estimated annual sector growth of 10-15%.",
        },
        {
          text: "International companies view Madagascar as an ideal platform for pilot projects in artificial intelligence, blockchain, fintech, and many other fields.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736063571/Inexploit%C3%A9_gvj1oz.jpg", // Replace with your image path
      imageAlt: "Digital potential",
      imageOnRight: true, // Position the image on the right
    },
  ];
  const madagascarOpportunities =
    language === "fr" ? madagascarOpportunitiesFr : madagascarOpportunitiesEn;
  return (
    <div>
      <div className="py-12  ">
        <div className="">
          <HeroBanner
            title={
              language === "fr"
                ? "Pourquoi Madagascar est une Opportunité Unique dans le Numérique"
                : "Why Madagascar is a Unique Opportunity in Digital Technology"
            }
            backgroundImage={
              "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736322517/trano_e304tx.jpg"
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
