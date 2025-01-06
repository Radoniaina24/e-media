"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import HeroBanner from "./HeroBaner";
import BackgroundCard from "../QuiSommesNous/BackgroundCard";
import PartenariatsPrograms from "./PartenariatsPrograms";
import ContactPartenariats from "./ContactPartenariats";
export default function SectionPartenariats() {
  const reasons = [
    {
      title: "Position stratégique",
      description: "Madagascar, un pont entre l’Afrique, l’Asie et le monde.",
      imageSrc: "/images/partenariats/position.jpg",
      altText: "Image représentant la position stratégique de Madagascar",
    },
    {
      title: "Talents exceptionnels",
      description: "Une région riche en créativité et en potentiel.",
      imageSrc: "/images/why/t-l.png",
      altText: "Image représentant les talents exceptionnels de Madagascar",
    },
    {
      title: "Vision globale, expertise locale",
      description:
        "Un partenaire fiable pour transformer les défis en opportunités.",
      imageSrc: "/images/partenariats/vision.jpg",
      altText: "Image représentant une vision globale et une expertise locale",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const text1 = " Nos Opportunités de Partenariat";
  const text2 = " Construisons ensemble des projets innovants et durables.";
  return (
    <div>
      {/* Header */}
      <Header
        id="partenariats"
        title="Partenariats Internationaux : Ensemble, bâtissons l’avenir"
        subtitle="L’Université E-media, pionnière dans le cinéma, l’audiovisuel, l’ingénierie du son et les technologies numériques, est un acteur clé dans l’Océan Indien. Située à Madagascar, au carrefour stratégique entre l’Afrique et l’Asie, nous avons pour ambition de mobiliser les talents locaux et africains pour créer un impact global et développer les industries créatives et technologiques."
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736141454/partenariats2_gu6l3h.jpg"
      />
      <div
        id="partenariats"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <HeroBanner
          title={"Pourquoi Collaborer avec E-Media ?"}
          subtitle={""}
          backgroundImage={"/images/banniere/p3.png"}
        />
        <div className="container my-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, index) => (
              <BackgroundCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="mb-10 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 py-8 text-center shadow-lg">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            {text1}
          </h1>
        </div>
        <PartenariatsPrograms />

        <HeroBanner
          title={"Construisons ensemble des projets innovants et durables."}
          subtitle={"Service Partenariat – Université E-Media"}
          backgroundImage={"/images/banniere/p3.png"}
        />
        <ContactPartenariats />
      </div>
    </div>
  );
}
