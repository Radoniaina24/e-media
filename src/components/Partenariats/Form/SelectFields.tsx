import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  id: string;
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  id,
  options,
  placeholder = "Sélectionnez une option",
  onChange,
  value,
  className = "",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`mb-6 w-full px-4 ${className}`}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
