import React from "react";

interface BackgroundCardProps {
  imageSrc: string; // Source de l'image de fond
  title: string; // Titre à afficher
  description: string; // Description à afficher
  icon?: React.ReactNode; // Icône SVG ou autre
  animationEffect?: string; // Effet d'animation AOS (optionnel)
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  imageSrc,
  title,
  description,
  icon,
  animationEffect = "fade-right", // Effet par défaut
}) => {
  return (
    <div
      className="relative h-72 rounded-lg bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url('${imageSrc}')` }}
      data-aos={animationEffect}
    >
      <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center text-white">
        <div className="mb-4">
          <svg
            className="mb-4 h-12 w-12 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7a7 7 0 100-14 7 7 0 000 14zm-.5-3h1v-4h-1v4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default BackgroundCard;
