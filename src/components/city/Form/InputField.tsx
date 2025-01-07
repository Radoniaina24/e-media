import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  name,
  required = false,
  placeholder,
  className = "",
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name || id}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default InputField;
