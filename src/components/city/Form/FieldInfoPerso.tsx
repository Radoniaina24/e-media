// FieldInfoPerso.tsx
import React from "react";
import PhoneInputComponent from "./InputPhoneInternational";
import InputField from "./InputField";

export function FieldInfoPerso() {
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

export function PersonalAndContactInfo() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Personal and Contact Information
      </legend>
      <div className="space-y-4">
        {/* Full Name */}
        <InputField
          id="fullName"
          label="Full Name"
          type="text"
          required
          placeholder="Enter your full name"
        />

        {/* Company Name */}
        <InputField
          id="company"
          label="Company or Organization Name"
          type="text"
          placeholder="Enter the company name"
        />

        {/* Role / Title */}
        <InputField
          id="role"
          label="Role / Title"
          type="text"
          placeholder="Example: CEO, Director of Investments"
        />

        {/* Professional Email */}
        <InputField
          id="email"
          label="Professional Email"
          type="email"
          required
          placeholder="Enter your email"
        />

        {/* Phone Input International */}
        <PhoneInputComponent />

        {/* Website */}
        <InputField
          id="website"
          label="Company Website (if applicable)"
          type="url"
          placeholder="https://example.com"
        />
      </div>
    </fieldset>
  );
}
