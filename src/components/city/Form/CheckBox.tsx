import React from "react";

interface CheckboxFieldProps {
  id?: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  name,
  value,
  label,
  checked = false,
  onChange,
  className = "",
}) => {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        id={id || value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 ${className}`}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default CheckboxField;
