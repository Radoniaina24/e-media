// FieldInfoPerso.tsx
import React from "react";
import PhoneInputComponent from "./InputPhoneInternational";
import InputField from "./InputField";

export default function FieldInfoPerso() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Informations Personnelles et Contact
      </legend>
      <div className="space-y-4">
        {/* Nom complet */}
        <InputField
          id="fullName"
          label="Nom complet"
          type="text"
          required
          placeholder="Entrez votre nom complet"
        />

        {/* Nom de l'entreprise */}
        <InputField
          id="company"
          label="Nom de l'entreprise ou de l'organisation"
          type="text"
          placeholder="Entrez le nom de l’entreprise"
        />

        {/* Fonction / Titre */}
        <InputField
          id="role"
          label="Fonction / Titre"
          type="text"
          placeholder="Exemple : PDG, Directeur des Investissements"
        />

        {/* Email professionnel */}
        <InputField
          id="email"
          label="Email professionnel"
          type="email"
          required
          placeholder="Entrez votre email"
        />

        {/* Phone Input International */}
        <PhoneInputComponent />

        {/* Site Web */}
        <InputField
          id="website"
          label="Site web de l'entreprise (si applicable)"
          type="url"
          placeholder="https://example.com"
        />
      </div>
    </fieldset>
  );
}
