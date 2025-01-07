// InputField.tsx
import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  required = false,
  placeholder = "",
  rows = 1,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-md block font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputField;
