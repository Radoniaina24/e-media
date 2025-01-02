import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardLinkProps {
  href: string; // Lien vers la page cible
  imageSrc: string; // Source de l'image
  altText: string; // Texte alternatif pour l'image
  title: string; // Titre de la carte
  description: string; // Description de la carte
  animationEffect?: string; // Effet d'animation AOS (optionnel)
}

const CardLink: React.FC<CardLinkProps> = ({
  href,
  imageSrc,
  altText,
  title,
  description,
  animationEffect = "zoom-in", // Effet par défaut
}) => {
  return (
    <Link href={href}>
      <div
        className="rounded-lg bg-white p-6 shadow-lg hover:bg-dark hover:text-white dark:bg-dark"
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
        <p className="mt-2 text-gray-600 dark:text-white">{description}</p>
      </div>
    </Link>
  );
};

export default CardLink;
