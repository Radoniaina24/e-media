import React from "react";

export default function HeroCity() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736066013/village_l3oint.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Un Village Numérique à Madagascar
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light md:text-xl">
            Le complexe universitaire visionnaire qui transforme l&apos;avenir
            de Madagascar et de l&apos;Afrique.
          </p>
          <a
            href="#details"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold shadow-lg transition duration-300 hover:bg-indigo-700"
          >
            Découvrir le projet
          </a>
        </div>
      </section>
    </div>
  );
}
