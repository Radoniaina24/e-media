// RadioGroup.tsx
import React, { useState } from "react";

interface RadioGroupProps {
  label: string;
  options: { id: string; label: string }[];
  name: string;
  otherOptionLabel?: string;
  selectedValue: string;
  onChange: (value: string) => void;
  isOtherChecked?: boolean;
  onOtherChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  name,
  otherOptionLabel,
  selectedValue,
  onChange,
  isOtherChecked,
  onOtherChange,
}) => {
  return (
    <div className="mb-6">
      <p className="text-md font-medium text-gray-700">{label}</p>
      <div className="mt-2 space-y-2">
        {options.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.id}
              name={name}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={selectedValue === item.id}
              onChange={() => onChange(item.id)}
            />
            <label htmlFor={item.id} className="text-md ml-2 text-gray-700">
              {item.label}
            </label>
          </div>
        ))}
        {otherOptionLabel && (
          <div className="flex items-center">
            <input
              type="radio"
              id="other"
              name={name}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={isOtherChecked}
              onChange={() => onOtherChange && onOtherChange("")}
            />
            <label htmlFor="other" className="text-md ml-2 text-gray-700">
              {otherOptionLabel}
            </label>
            {isOtherChecked && (
              <input
                type="text"
                value={selectedValue}
                onChange={(e) => onOtherChange && onOtherChange(e.target.value)}
                className="ml-2 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Précisez ici"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioGroup;
