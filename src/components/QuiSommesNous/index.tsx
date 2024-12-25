import React from "react";

export default function QuiSommesNous() {
  return (
    <div>
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Qui Sommes-Nous ?
        </h1>
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

        <section className="mb-10">
          <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
            Une Offre Académique Diversifiée :
          </h3>
          <ul className="list-inside list-disc space-y-3 text-lg">
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

        <section className="mb-10">
          <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
            Un Cadre Moderne et Stimulant :
          </h3>
          <ul className="list-inside list-disc space-y-3 text-lg">
            <li>
              Studios professionnels, parc informatique performant, et
              laboratoires spécialisés.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
            Notre Engagement :
          </h3>
          <ul className="list-inside list-disc space-y-3 text-lg">
            <li>
              Développer les talents locaux pour répondre aux besoins des
              industries créatives.
            </li>
            <li>Rendre la technologie accessible à tous.</li>
            <li>Soutenir l&apos;entrepreneuriat et l&apos;innovation.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
