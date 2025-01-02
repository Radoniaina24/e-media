import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string; // Source de l'image
  altText: string; // Texte alternatif pour l'image
  title: string; // Titre de la carte
  animationEffect?: string; // Effet d'animation AOS (optionnel)
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  animationEffect = "fade-left", // Effet par défaut
}) => {
  return (
    <div
      className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
      data-aos={animationEffect}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="h-48 w-full rounded-t-lg object-cover"
        width={500}
        height={500}
      />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default Card;
