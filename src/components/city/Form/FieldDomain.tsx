// FieldDomain.tsx
import React from "react";
import CheckboxGroup from "./CheckBox";

export default function FieldDomain() {
  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-lg font-semibold text-gray-700">
        Domaine d&apos;Intérêt
      </legend>

      {/* Aspects de l’Indian Ocean Tech Valley */}
      <CheckboxGroup
        label="Quels aspects de l’Indian Ocean Tech Valley vous intéressent particulièrement ?"
        options={[
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
        ]}
        otherOptionLabel="Autres"
        otherId="otherInterestDomain" // Ajout de l'ID spécifique pour l'option "Autre"
      />

      {/* Type de partenariat */}
      <CheckboxGroup
        label="Quel type de partenariat recherchez-vous ?"
        options={[
          { id: "financial", label: "Financier (investissements directs)" },
          {
            id: "technical",
            label: "Technique (apport de solutions ou d’expertise)",
          },
          {
            id: "academic",
            label: "Académique (collaboration universitaire ou formation)",
          },
        ]}
        otherOptionLabel="Autre"
        otherId="otherInterestPartnership" // Ajout de l'ID spécifique pour l'option "Autre"
      />
    </fieldset>
  );
}
