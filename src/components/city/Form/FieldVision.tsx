import { useState } from "react";
import InputField from "./InputField";
import RadioGroup from "./RadioGroup";

const FieldVision: React.FC = () => {
  const [collaboration, setCollaboration] = useState<string>("");

  const handleCollaborationChange = (value: string) => {
    setCollaboration(value);
  };

  return (
    <fieldset className="mb-6 rounded-md border border-gray-300 p-4">
      <legend className="px-2 text-xl font-semibold text-gray-700">
        Votre Vision et Vos Attentes
      </legend>
      <div className="space-y-4">
        <InputField
          label="Pourquoi êtes-vous intéressé par ce projet ?"
          id="interestReason"
          placeholder="Rédigez une brève explication"
          type="textarea"
          rows={4}
        />
        <InputField
          label="Quelle valeur souhaitez-vous apporter à ce projet ?"
          id="valueContribution"
          placeholder="Exemple : Expertise, financement, mentorat, ressources, etc."
          type="text"
        />
        <RadioGroup
          label="Avez-vous déjà collaboré sur des projets similaires en Afrique ou dans l'Océan Indien ?"
          name="collaboration"
          options={[
            { id: "yesCollaboration", label: "Oui" },
            { id: "noCollaboration", label: "Non" },
          ]}
          onChange={handleCollaborationChange}
          selectedValue={collaboration}
        />
        {collaboration === "yesCollaboration" && (
          <InputField
            label="Précisez ici"
            id="collaborationDetails"
            placeholder="Précisez ici"
            type="text"
          />
        )}
      </div>
    </fieldset>
  );
};

export default FieldVision;
