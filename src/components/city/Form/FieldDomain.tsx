import React from "react";

export default function FieldDomain() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-lg font-semibold text-gray-700">
        Domaine d&apos;Intérêt
      </legend>

      {/* Aspects de l’Indian Ocean Tech Valley */}
      <div className="mb-6">
        <p className="text-md font-medium text-gray-700">
          Quels aspects de l&apos;Indian Ocean Tech Valley vous intéressent
          particulièrement ?
          <span className="block text-xs text-gray-500">
            (Cochez toutes les options applicables)
          </span>
        </p>
        <div className="mt-2 space-y-2">
          {[
            {
              id: "education",
              label: "Investissements dans l’éducation numérique",
            },
            { id: "partnerships", label: "Partenariats technologiques" },
            {
              id: "startups",
              label: "Développement des startups et incubateurs",
            },
            {
              id: "business",
              label: "Opportunités commerciales dans l’Océan Indien",
            },
          ].map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={item.id} className="text-md ml-2 text-gray-700">
                {item.label}
              </label>
            </div>
          ))}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="otherInterest"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="otherInterest"
              className="text-md ml-2 text-gray-700"
            >
              Autres (précisez)
            </label>
            <input
              type="text"
              className="ml-2 flex-1 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Précisez ici"
            />
          </div>
        </div>
      </div>

      {/* Type de partenariat */}
      <div>
        <p className="text-md font-medium text-gray-700">
          Quel type de partenariat recherchez-vous ?
          <span className="block text-xs text-gray-500">
            (Cochez toutes les options applicables)
          </span>
        </p>
        <div className="mt-2 space-y-2">
          {[
            {
              id: "financial",
              label: "Financier (investissements directs)",
            },
            {
              id: "technical",
              label: "Technique (apport de solutions ou d’expertise)",
            },
            {
              id: "academic",
              label: "Académique (collaboration universitaire ou formation)",
            },
          ].map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={item.id} className="text-md ml-2 text-gray-700">
                {item.label}
              </label>
            </div>
          ))}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="otherPartnership"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="otherPartnership"
              className="text-md ml-2 text-gray-700"
            >
              Autre (précisez)
            </label>
            <input
              type="text"
              className="ml-2 flex-1 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Précisez ici"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
