"use client ";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import React from "react";

export default function FooterCity() {
  const { language } = useLanguageContext();
  const texte1 =
    language === "fr"
      ? "Merci de votre intérêt pour Indian Ocean Tech Valley : Le Pôle Numérique de Madagascar !"
      : "Thank you for your interest in Indian Ocean Tech Valley: Madagascar's Digital Hub!";

  const texte2 =
    language === "fr"
      ? "Contactez-nous dès aujourd’hui pour discuter de votre rôle dans cette révolution numérique "
      : "Contact us today to discuss your role in this digital revolution.";
  return (
    <div>
      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 py-16 text-white dark:bg-gradient-to-r">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2
            className="text-3xl font-extrabold md:text-4xl"
            data-aos="fade-up"
          >
            {language === "fr"
              ? "Formulaire d'Intérêt - Indian Ocean Tech Valley : Le Pôle Numérique de Madagascar"
              : "Interest Form - Indian Ocean Tech Valley: Madagascar's Digital Hub"}
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {texte1}
          </p>
        </div>
      </section>
    </div>
  );
}
