"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import HeroBanner from "./HeroBaner";
import Opportunities from "./Opportunities";
import WhyEmedia from "./WhyEmedia";

import { useLanguageContext } from "@/lib/context/LanguageContext";
import {
  ContactPartenariatsFr,
  PartnershipContact,
} from "./ContactPartenariats";
export default function SectionPartenariats() {
  const { language } = useLanguageContext();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);

  const title =
    language === "fr"
      ? "Partenariats Internationaux : Ensemble, bâtissons l’avenir"
      : "INTERNATIONAL PARTNERSHIPS: BUILDING THE FUTURE TOGETHER";
  const subtitle =
    language === "fr"
      ? "L’Université E-media, pionnière dans le cinéma, l’audiovisuel, l’ingénierie du son et les technologies numériques, est un acteur clé dans l’Océan Indien. Située à Madagascar, au carrefour stratégique entre l’Afrique et l’Asie, nous avons pour ambition de mobiliser les talents locaux et africains pour créer un impact global et développer les industries créatives et technologiques."
      : "E-media University, a trailblazer in cinema, audiovisual production, sound engineering, and digital technologies, stands as a key player in the Indian Ocean region. Based in Madagascar, at the strategic crossroads between Africa and Asia, our mission is to harness local and African talent to create a global impact and foster the growth of creative and technological industries.";
  return (
    <div>
      {/* Header */}
      <Header
        id="partenariats"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736141454/partenariats2_gu6l3h.jpg"
      />
      <div
        id="partenariats"
        className="bg-gray-50 pt-20 font-sans text-gray-800 "
      >
        <WhyEmedia />
        <Opportunities />
        <HeroBanner
          title={
            language === "fr"
              ? "Construisons ensemble des projets innovants et durables."
              : "Let's build innovative and sustainable projects together."
          }
          subtitle={
            language === "fr"
              ? "Service Partenariat – Université E-Media"
              : "Partnership Service – E-Media University"
          }
          backgroundImage={"/images/banniere/p3.png"}
        />
        {language === "fr" ? <ContactPartenariatsFr /> : <PartnershipContact />}
      </div>
    </div>
  );
}
