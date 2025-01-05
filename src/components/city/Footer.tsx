import Link from "next/link";
import React from "react";

export default function FooterCity() {
  return (
    <div>
      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 py-16 text-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2
            className="text-3xl font-extrabold md:text-4xl"
            data-aos="fade-up"
          >
            Rejoignez l&apos;Avenir Numérique
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Participez à ce projet révolutionnaire et contribuez à transformer
            Madagascar et l&apos;Afrique avec des solutions innovantes.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold shadow-lg transition duration-300 hover:bg-indigo-700"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
