import React from "react";

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
  <header className=" relative h-80 w-full bg-cover bg-center text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url("${imageSrc}")` }}
    ></div>

    <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white ">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-shadow-lg text-lg font-extrabold leading-tight transition duration-500 sm:text-xl  md:text-xl lg:text-2xl">
          {title.toLocaleUpperCase()}
        </h1>
        <p className=" sm:text-md text-md md:text-md mx-auto mb-8 max-w-2xl font-light leading-relaxed text-gray-50 lg:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  </header>
);

export default HeroSectionPrograms;