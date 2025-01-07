import React from "react";

export default function FieldAvalible() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Disponibilité
      </legend>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-700">
            Préférez-vous être contacté par :
          </p>
          <div className="mt-2 space-y-2">
            <div>
              <input
                type="radio"
                id="contactEmail"
                name="contactMethod"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="contactEmail"
                className="ml-2 text-sm text-gray-700"
              >
                Email
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="contactPhone"
                name="contactMethod"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="contactPhone"
                className="ml-2 text-sm text-gray-700"
              >
                Téléphone
              </label>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">
            Quand seriez-vous disponible pour un premier rendez-vous ou un appel
            ?
          </p>
          <div className="mt-2 space-y-2">
            <div>
              <input
                type="radio"
                id="availableImmediately"
                name="availability"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="availableImmediately"
                className="ml-2 text-sm text-gray-700"
              >
                Immédiatement
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="availableThisWeek"
                name="availability"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="availableThisWeek"
                className="ml-2 text-sm text-gray-700"
              >
                Dans la semaine
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="availableOther"
                name="availability"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="availableOther"
                className="ml-2 text-sm text-gray-700"
              >
                Autre (précisez)
              </label>
              <input
                type="text"
                className="ml-2 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Précisez ici"
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
