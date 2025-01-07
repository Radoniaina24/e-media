"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import HeroBanner from "./HeroBaner";
import Opportunities from "./Opportunities";
import WhyEmedia from "./WhyEmedia";

import ContactPartenariats from "./ContactPartenariats";
export default function SectionPartenariats() {
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
        className="bg-gray-50 pt-20 font-sans text-gray-800 "
      >
        <WhyEmedia />
        <Opportunities />
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
