import React, { useState } from "react";
import RadioGroup from "./RadioGroup";

export default function FieldAvalible() {
  const [contactMethod, setContactMethod] = useState<string>("contactEmail");
  const [availability, setAvailability] = useState<string>(
    "availableImmediately",
  );
  const [otherAvailability, setOtherAvailability] = useState<string>("");

  const handleContactMethodChange = (value: string) => {
    setContactMethod(value);
  };

  const handleAvailabilityChange = (value: string) => {
    // Lorsque l'option autre est sélectionnée, on efface l'autre valeur
    if (value !== "availableOther") {
      setOtherAvailability(""); // Reset de l'input 'Autre' si on change d'option
    }
    setAvailability(value);
  };

  const handleOtherAvailabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOtherAvailability(event.target.value);
  };

  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Disponibilité
      </legend>
      <div className="space-y-4">
        {/* Préférence de contact */}
        <RadioGroup
          label="Préférez-vous être contacté par :"
          options={[
            { id: "contactEmail", label: "Email" },
            { id: "contactPhone", label: "Téléphone" },
          ]}
          name="contactMethod"
          selectedValue={contactMethod}
          onChange={handleContactMethodChange}
        />

        {/* Disponibilité */}
        <RadioGroup
          label="Quand seriez-vous disponible pour un premier rendez-vous ou un appel ?"
          options={[
            { id: "availableImmediately", label: "Immédiatement" },
            { id: "availableThisWeek", label: "Dans la semaine" },
            { id: "availableOther", label: "Autre" }, // Ajout de l'option "Autre"
          ]}
          name="availability"
          selectedValue={availability}
          onChange={handleAvailabilityChange}
        />

        {availability === "availableOther" && (
          <div>
            <label
              htmlFor="otherAvailability"
              className="text-md font-medium text-gray-700"
            >
              Précisez votre disponibilité :
            </label>
            <input
              type="text"
              id="otherAvailability"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Précisez ici"
              value={otherAvailability}
              onChange={handleOtherAvailabilityChange}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
}