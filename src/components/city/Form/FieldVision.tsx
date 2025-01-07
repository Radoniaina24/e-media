import React from "react";

export default function FieldVision() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Votre Vision et Vos Attentes
      </legend>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="interestReason"
            className="text-md block font-medium text-gray-700"
          >
            Pourquoi êtes-vous intéressé par ce projet ?{" "}
            <span className="text-gray-500">(200 mots maximum)</span>
          </label>
          <textarea
            id="interestReason"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Rédigez une brève explication"
            rows={4}
          />
        </div>
        <div>
          <label
            htmlFor="valueContribution"
            className="text-md block font-medium text-gray-700"
          >
            Quelle valeur souhaitez-vous apporter à ce projet ?
          </label>
          <input
            type="text"
            id="valueContribution"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Exemple : Expertise, financement, mentorat, ressources, etc."
          />
        </div>
        <div>
          <p className="text-md font-medium text-gray-700">
            Avez-vous déjà collaboré sur des projets similaires en Afrique ou
            dans l&apos;Océan Indien ?
          </p>
          <div className="mt-2 space-y-2">
            <div>
              <input
                type="radio"
                id="yesCollaboration"
                name="collaboration"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="yesCollaboration"
                className="text-md ml-2 text-gray-700"
              >
                Oui (précisez)
              </label>
              <input
                type="text"
                className="ml-2 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Précisez ici"
              />
            </div>
            <div>
              <input
                type="radio"
                id="noCollaboration"
                name="collaboration"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="noCollaboration"
                className="text-md ml-2 text-gray-700"
              >
                Non
              </label>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
