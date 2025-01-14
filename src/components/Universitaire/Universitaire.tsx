"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Section from "../Licence/Section";
import Header from "../Licence/Header";
import CategoryUniversitaires from "./CategoriesUniversitaires";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function Universitaire() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const { language } = useLanguageContext();
  const title = language === "fr" ? "UNIVERSITÉ E-MEDIA" : "E-MEDIA UNIVERSITY";
  const subltile =
    language === "fr"
      ? "Formations universitaires d'excellence pour les métiers de  demain"
      : "Excellence in Academic Programs for the Careers of Tomorrow";

  const content =
    language === "fr"
      ? "Les formations universitaires offrent des programmes d'enseignement supérieur complets, en présentiel et en ligne, permettant aux étudiants de se préparer à des carrières professionnelles durables. Ces formations couvrent des domaines variés  avec un enseignement théorique et pratique dispensé par des experts. Elles sont conçues pour répondre aux besoins du marché de l'emploi et offrent une flexibilité qui permet de concilier études et vie personnelle. À l'issue de ces formations, les étudiants peuvent entrer sur le marché du travail ou poursuivre des études avancées."
      : "University programs provide comprehensive higher education courses, available both on-campus and online, enabling students to prepare for sustainable professional careers. These programs cover a wide range of fields, combining theoretical and practical instruction delivered by industry experts. Designed to meet the needs of the job market, they offer the flexibility needed to balance studies with personal life. Upon completion, students are equipped to enter the workforce or pursue advanced studies.";

  return (
    <div className="dark:bg-gray-800">
      {/* Header */}
      <Header
        id="universitaire"
        title={title}
        subtitle={subltile}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736498600/FOND-UNIVERSITE-EMEDIA_1_gl11fp.jpg"
      />
      <div
        id="universitaire"
        className="bg-gray-50 pt-20  font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent
          text={
            language === "fr"
              ? "Formations universitaires"
              : "UNIVERSITY PROGRAMS"
          }
        />
        <Section title="" content={content}></Section>
        <Section>{language === "fr" ? <Fr /> : <En />}</Section>
        <CategoryUniversitaires />
      </div>
    </div>
  );
}

const Fr = () => {
  return (
    <ul className="mb-6 list-disc pl-5 text-start text-gray-700 dark:text-white">
      <li>
        <span className="font-semibold">Présentiel :</span> pour une expérience
        immersive et collaborative.
      </li>
      <li>
        <span className="font-semibold">En ligne (e-learning) :</span>{" "}
        accessible partout dans le monde, offrant une formation de qualité
        adaptée aux apprenants où qu&apos;ils se trouvent.
      </li>
    </ul>
  );
};

const En = () => {
  return (
    <ul className="mb-6 list-disc pl-5 text-start text-gray-700 dark:text-white">
      <li>
        <span className="font-semibold">On-campus:</span> for an immersive and
        collaborative experience.
      </li>
      <li>
        <span className="font-semibold">Online (e-learning):</span> accessible
        worldwide, providing high-quality training tailored to learners wherever
        they are.
      </li>
    </ul>
  );
};
