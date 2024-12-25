"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function QuiSommesNous() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation en millisecondes
      once: true, // Exécute l'animation une seule fois
    });
  }, []);
  return (
    <div className="relative py-10 dark:bg-gray-dark">
      <div className="container mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold sm:text-4xl md:text-[45px]">
          Qui Sommes-Nous ?
        </h1>
        <hr className=" m-auto my-8 h-px w-48 border-2 border-primary bg-gray-200 dark:bg-gray-700"></hr>
        <section className="mb-10">
          <h2 className="text-yellow-400 mb-6 text-center text-3xl font-semibold">
            E-Media : L&apos;Université de Référence pour les Industries
            Créatives à Madagascar et en Afrique
          </h2>
          <p className="text-center text-lg leading-relaxed">
            Fondée en 2011, E-Media forme des talents créatifs et innovants dans
            les domaines du cinéma, de l&apos;audiovisuel, de l&apos;ingénierie
            du son et de l&apos;innovation technologique, tout en contribuant au
            développement économique de Madagascar et de l&apos;Afrique.
          </p>
        </section>

        <section className="mb-10" data-aos="fade-left">
          <h3 className="mb-4 text-2xl font-semibold ">
            Une Offre Académique Diversifiée :
          </h3>
          <ul className="list-inside list-disc space-y-3 text-lg text-body-color">
            <li>
              <span className="font-semibold">Formations universitaires :</span>{" "}
              Présentiel et en ligne pour des carrières durables.
            </li>
            <li>
              <span className="font-semibold">Formations certifiantes :</span>{" "}
              Accessibles avec ou sans baccalauréat, pour des jeunes en
              reconversion ou en quête d&apos;emploi.
            </li>
            <li>
              <span className="font-semibold">Modules spécialisés :</span>{" "}
              Apprentissage rapide et pratique.
            </li>
          </ul>
        </section>

        <section className="mb-10" data-aos="fade-right">
          <h3 className="mb-4 text-2xl font-semibold ">
            Un Cadre Moderne et Stimulant :
          </h3>
          <ul className="list-inside list-disc space-y-3 text-lg text-body-color">
            <li>
              Studios professionnels, parc informatique performant, et
              laboratoires spécialisés.
            </li>
          </ul>
        </section>

        <section data-aos="fade-down">
          <h3 className="text-yellow-400 mb-4 text-2xl font-semibold ">
            Notre Engagement :
          </h3>
          <ul className="list-inside list-disc space-y-3 text-lg text-body-color">
            <li>
              Développer les talents locaux pour répondre aux besoins des
              industries créatives.
            </li>
            <li>Rendre la technologie accessible à tous.</li>
            <li>Soutenir l&apos;entrepreneuriat et l&apos;innovation.</li>
          </ul>
        </section>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* <div className="bottom-50 absolute left-20 z-[-1]">
          fdgdfgdfgdfgdfgdfgdf
        </div> */}
      </div>
    </div>
  );
}
