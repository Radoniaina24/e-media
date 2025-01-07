import React from "react";
import InputPhoneInternational from "./InputPhoneInternational";
import PhoneInputComponent from "./InputPhoneInternational";

export default function FieldInfoPerso() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Informations Personnelles et Contact
      </legend>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="text-md block font-medium text-gray-700"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Entrez votre nom complet"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="text-md block font-medium text-gray-700"
          >
            Nom de l&apos;entreprise ou de l&apos;organisation
          </label>
          <input
            type="text"
            id="company"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Entrez le nom de l’entreprise"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="text-md block font-medium text-gray-700"
          >
            Fonction / Titre
          </label>
          <input
            type="text"
            id="role"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Exemple : PDG, Directeur des Investissements"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-md block font-medium text-gray-700"
          >
            Email professionnel <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Entrez votre email"
          />
        </div>
        {/* <div>
          <label
            htmlFor="phone"
            className="text-md block font-medium text-gray-700"
          >
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Inclure le code international"
          />
        </div> */}
        {/* Phone Internationnal */}
        <PhoneInputComponent />
        <div>
          <label
            htmlFor="website"
            className="text-md block font-medium text-gray-700"
          >
            Site web de l&apos;entreprise (si applicable)
          </label>
          <input
            type="url"
            id="website"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="https://example.com"
          />
        </div>
      </div>
    </fieldset>
  );
}
