import React from "react";
import Image from "next/image";
import CategoryCards from "./CategorieCard";
export default function Formation() {
  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/why/u-e.jpg"
            alt="Université E-Media"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">Université E-Media</h1>
          <p className="mt-4 text-lg">
            Formations universitaires d&apos;excellence pour les métiers de
            demain
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Formation Universitaire
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            Université E-Media, université d&apos;excellence adoptant le système
            LMD, propose des formations universitaires de haut niveau qui
            allient rigueur académique, innovation et flexibilité. Ces
            formations, conçues pour répondre aux exigences des métiers de
            demain, sont offertes sous deux formats :
          </p>
          <ul className="mb-6 list-disc pl-5 text-gray-700">
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
        </div>
      </main>
      <CategoryCards />
    </div>
  );
}
