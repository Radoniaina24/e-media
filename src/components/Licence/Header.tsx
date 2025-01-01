import React from "react";

interface HeaderProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string; // Call to action text for the button
  ctaLink?: string; // URL for the call to action button
}

const Header: React.FC<HeaderProps> = ({
  title,
  id,
  subtitle,
  ctaText,
  ctaLink,
}) => (
  <header className=" relative h-screen w-full    bg-cover bg-center py-32 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/why/fond.jpg")' }}
    ></div>

    <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white ">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-shadow-lg text-lg font-extrabold leading-tight transition duration-500 sm:text-xl  md:text-2xl lg:text-2xl">
          {title}
        </h1>
        <p className=" sm:text-md text-md mx-auto mb-8 max-w-2xl font-light leading-relaxed text-gray-50 md:text-xl lg:text-xl">
          {subtitle}
        </p>
        <a
          href={"#" + id}
          className="mt-8 inline-block transform rounded bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
        >
          Détails
        </a>
      </div>
    </div>
  </header>
);

export default Header;
