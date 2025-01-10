"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Mention from "../Master/Mention";
import CFPPrograms from "./ProgramCFP";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function SectionCFP() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  return (
    <div>
      {/* Header */}
      <Header
        id="cfp"
        title="FORMATION PROFESSIONELLE – FORMATION CERTIFIANTE
            (avec ou sans le bac)"
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736493168/FORMATION-PROFESSIONELLE-_-FORMATION-CERTIFIANTE-_AVEC-OU-SANS-LE-BAC_t2qytz.jpg"
      />
      <div
        id="cfp"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent
          text="FORMATION PROFESSIONELLE – FORMATION CERTIFIANTE
            (avec ou sans le bac)"
        />
        <Mention specialisation=" Son, Image, Web" />
        {/* À qui s’adresse cette formation ? */}
        <Section
          title="Une formation pratique à 75% pour des compétences concrètes et efficaces."
          bgColor=""
          content="Les formations professionnelles certifiantes d’E-Media sont conçues pour former des professionnels immédiatement opérationnels. Ces programmes, accessibles avec ou sans baccalauréat, mettent l’accent sur la pratique (75% des cours) pour garantir une maîtrise des outils et techniques essentiels dans des domaines clés comme le son, l’image et le web."
        ></Section>
        <div className="container my-7">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
              À l&apos;issue de la formation, les apprenants reçoivent un
              certificat de
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                {" "}
                catégorie 3{" "}
              </span>
              délivré par la {""}
              <span className="italic">
                FOP (Formation d&apos;Orientation Professionnelle)
              </span>
              , reconnu par l&apos;État malagasy, valorisant ainsi leurs
              compétences sur le marché du travail.
            </p>
          </div>
        </div>
        <CFPPrograms />
      </div>
    </div>
  );
}
