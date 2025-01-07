import Link from "next/link";
import React from "react";
import ContactCIty from "./ContactCIty";

export default function FooterCity() {
  const texte1 =
    "Merci de votre intérêt pour Indian Ocean Tech Valley : Le Pôle Numérique de Madagascar !";
  const texte2 =
    "Contactez-nous dès aujourd’hui pour discuter de votre rôle dans cette révolution numérique ";
  return (
    <div>
      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 py-16 text-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2
            className="text-3xl font-extrabold md:text-4xl"
            data-aos="fade-up"
          >
            Formulaire d&apos;Intérêt - Indian Ocean Tech Valley : Le Pôle
            Numérique de Madagascar
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
