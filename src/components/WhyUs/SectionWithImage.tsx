import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";

interface SectionWithImageProps {
  title: string;
  description: string;
  highlights: { icon?: React.ReactNode; text: string }[];
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean; // Définit si l'image est à droite ou à gauche
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  imageOnRight = true, // Valeur par défaut : image à droite
}) => {
  return (
    <div className="mx-auto max-w-7xl space-y-16">
      <div
        className={`flex flex-col items-center md:flex-row ${
          imageOnRight ? "" : "md:flex-row-reverse"
        }`}
        data-aos="fade-up"
      >
        {/* Contenu texte */}
        <div
          className="p-6 md:w-1/2"
          data-aos={imageOnRight ? "fade-right" : "fade-left"}
        >
          <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white md:text-3xl">
            {title}
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <ul className="space-y-3 text-gray-500 dark:text-gray-400">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-4">
                  {highlight.icon || (
                    <CheckIcon className="h-6 w-6 text-green-500" />
                  )}
                </div>
                <div>{highlight.text}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div
          className="md:w-1/2"
          data-aos={imageOnRight ? "fade-left" : "fade-right"}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="h-64 w-full rounded-lg object-cover shadow-lg md:h-80"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWithImage;
