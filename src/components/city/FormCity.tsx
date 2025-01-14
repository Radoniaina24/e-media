"use client";
import React from "react";

import { useLanguageContext } from "@/lib/context/LanguageContext";
import { FieldInfoPerso, PersonalAndContactInfo } from "./Form/FieldInfoPerso";
import { FieldDomainEn, FieldDomainFr } from "./Form/FieldDomain";
import { FieldVisionEn, FieldVisionFr } from "./Form/FieldVision";
import { FieldAvailableEn, FieldAvalibleFr } from "./Form/FieldAvalible";

const Form = () => {
  const { language } = useLanguageContext();
  return (
    <div className="mx-auto mb-7 max-w-6xl rounded-lg bg-white p-8 shadow-lg">
      {/* Formulaire */}
      <form>
        {/* Informations Personnelles et Contact */}
        {language === "fr" ? <FieldInfoPerso /> : <PersonalAndContactInfo />}
        {/* Domaine d’Intérêt */}
        {language === "fr" ? <FieldDomainFr /> : <FieldDomainEn />}
        {/* Votre Vision et Vos Attentes */}
        {language === "fr" ? <FieldVisionFr /> : <FieldVisionEn />}
        {/* Disponibilité */}
        {language === "fr" ? <FieldAvalibleFr /> : <FieldAvailableEn />}
        {/* Texte avant le bouton de soumission */}
        <div className="mb-6">
          <p className="text-base leading-6 text-gray-700">
            {language === "fr"
              ? "Merci pour votre intérêt et votre temps. Une fois ce formulaire soumis, notre équipe examinera vos informations et vous contactera dans les plus brefs délais pour explorer les opportunités de collaboration."
              : "Thank you for your interest and your time. Once this form is submitted, our team will review your information and contact you as soon as possible to explore collaboration opportunities."}
          </p>
        </div>

        {/* Bouton de soumission */}
        <div className="mt-6 grid">
          <button
            type="submit"
            className="text-md rounded-full bg-indigo-600  py-3 font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {language === "fr"
              ? "Envoyer ma candidature"
              : "Submit my application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
