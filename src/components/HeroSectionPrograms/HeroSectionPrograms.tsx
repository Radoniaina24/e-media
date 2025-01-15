import React from "react";
import FrameDecoration from "./FrameDecoration";

interface HeaderProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string; // Call to action text for the button
  ctaLink?: string; // URL for the call to action button
  imageSrc?: string;
}

const HeroSectionPrograms: React.FC<HeaderProps> = ({
  title,
  id,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc = "/images/why/fond.jpg",
}) => (
  <header
    className="relative h-[500px] bg-cover bg-center text-white sm:h-[600px] lg:h-[600px]"
    style={{
      backgroundImage: `url("${imageSrc}")`,
    }}
  >
    {/* Texte centré */}
    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
      <div className="space-y-6">
        <h1 className="text-shadow-lg text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          {title?.toLocaleUpperCase()}
        </h1>
        <p className="text-md mx-auto max-w-2xl font-light leading-relaxed text-gray-50 sm:text-lg md:text-xl">
          {subtitle}
        </p>
        {/* Ajout du bouton Call to Action si les props sont présentes */}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="mt-4 inline-block rounded bg-blue-600 px-6 py-2 text-lg text-white hover:bg-blue-700"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>

    {/* Décoration en bas */}
    <div className="absolute bottom-0 w-full">
      <FrameDecoration />
    </div>
  </header>
);

export default HeroSectionPrograms;
