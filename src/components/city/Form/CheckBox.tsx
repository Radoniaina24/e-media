// CheckBox.tsx
import React, { useState } from "react";

interface CheckboxGroupProps {
  label: string;
  options: { id: string; label: string }[];
  otherOptionLabel?: string;
  otherId?: string; // Ajouter la prop `otherId`
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  otherOptionLabel,
  otherId,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [otherText, setOtherText] = useState("");
  const [isOtherChecked, setIsOtherChecked] = useState(false); // État pour "Autre" checkbox

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === otherId) {
      setIsOtherChecked(checked); // Si c'est la case "Autre", mettez à jour l'état `isOtherChecked`
    } else {
      setSelectedOptions((prev) =>
        checked ? [...prev, id] : prev.filter((item) => item !== id),
      );
    }
  };

  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherText(e.target.value);
  };

  return (
    <div className="mb-6">
      <p className="text-md font-medium text-gray-700">{label}</p>
      <div className="mt-2 space-y-2">
        {options.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={selectedOptions.includes(item.id)}
              onChange={handleChange}
            />
            <label htmlFor={item.id} className="text-md ml-2 text-gray-700">
              {item.label}
            </label>
          </div>
        ))}
        {otherOptionLabel && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={otherId} // Utilisation de `otherId` unique
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={isOtherChecked} // Affiche l'état de la case "Autre"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor={otherId} className="text-md ml-2 text-gray-700">
              {otherOptionLabel}
            </label>
            {isOtherChecked && ( // Affiche l'input seulement si "Autre" est coché
              <input
                type="text"
                value={otherText}
                onChange={handleOtherChange}
                className="ml-2 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Précisez ici"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckboxGroup;
