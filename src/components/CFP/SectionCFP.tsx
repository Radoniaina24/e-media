"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";

import Mention from "../Master/Mention";

import SectionAudioMao from "./SectionAudioMao";
import SectionSLS from "./SectionSLS";
import SectionImages from "./SectionImages";
import SectionMultimedia from "./SectionMultimedia";
import SectionMDTS from "./SectionDTS";

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
      />
      <div
        id="cfp"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
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
              délivré par la
              <span className="italic">
                FOP (Formation d&apos;Orientation Professionnelle)
              </span>
              , reconnu par l&apos;État malagasy, valorisant ainsi leurs
              compétences sur le marché du travail.
            </p>
          </div>
        </div>

        <Section>
          <SectionAudioMao />
        </Section>
        <Section>
          <SectionSLS />
        </Section>
        <Section>
          <SectionImages />
        </Section>
        <Section>
          <SectionMultimedia />
        </Section>
      </div>
    </div>
  );
}
