"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import ProgramCard from "../Master/ProgramCard";
import MasterCard from "../Master/MasterCard";
import Section from "../Licence/Section";
import CallToAction from "../Licence/CallToAction";
import Card from "../Licence/Card";
import Header from "../Licence/Header";
import CategoryUniversitaires from "./CategoriesUniversitaires";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function Universitaire() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  return (
    <div className="dark:bg-gray-800">
      {/* Header */}
      <Header
        id="universitaire"
        title="Université E-Media"
        subtitle="Formations universitaires d'excellence pour les métiers de
            demain"
      />
      <div
        id="universitaire"
        className="bg-gray-50 pt-20  font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="Formations universitaires" />
        <Section
          title=""
          content="Les formations universitaires offrent des programmes d'enseignement supérieur complets, en présentiel et en ligne, permettant aux étudiants de se préparer à des carrières professionnelles durables. Ces formations couvrent des domaines variés  avec un enseignement théorique et pratique dispensé par des experts. Elles sont conçues pour répondre aux besoins du marché de l'emploi et offrent une flexibilité qui permet de concilier études et vie personnelle. À l'issue de ces formations, les étudiants peuvent entrer sur le marché du travail ou poursuivre des études avancées."
        ></Section>
        <Section>
          <ul className="mb-6 list-disc pl-5 text-start text-gray-700 dark:text-white">
            <li>
              <span className="font-semibold">Présentiel :</span> pour une
              expérience immersive et collaborative.
            </li>
            <li>
              <span className="font-semibold">En ligne (e-learning) :</span>{" "}
              accessible partout dans le monde, offrant une formation de qualité
              adaptée aux apprenants où qu&apos;ils se trouvent.
            </li>
          </ul>
        </Section>
        <CategoryUniversitaires />
      </div>
    </div>
  );
}
