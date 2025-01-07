// FieldAvalible.tsx
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
    setAvailability(value);
  };

  const handleOtherAvailabilityChange = (value: string) => {
    setOtherAvailability(value);
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
          ]}
          name="availability"
          selectedValue={availability}
          onChange={handleAvailabilityChange}
          otherOptionLabel="Autre"
          isOtherChecked={availability === "availableOther"}
          onOtherChange={handleOtherAvailabilityChange}
        />
      </div>
    </fieldset>
  );
}
