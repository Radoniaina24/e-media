"use client";
import React from "react";

interface SelectClasseProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  id: string;
  options: { key: string; value: string }[];
  error: any;
  touched: any;
  fullWidth?: boolean;
  placeholder?: string;
}

const InputSelect: React.FC<SelectClasseProps> = ({
  label,
  onChange,
  value,
  id,
  options,
  error,
  touched,
  fullWidth,
  placeholder = "Sélectionnez une option", // Valeur par défaut
}) => {
  const classNameInput =
    error && touched
      ? "bg-red-50 border outline-none border-red-500 text-red-500 placeholder-red-500 text-sm rounded focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full px-5 py-3   "
      : ` ${
          fullWidth ? "w-full" : ""
        }  rounded border-[1.5px] border-gray-300 bg-transparent text-sm px-5 text-black font-normal outline-none transition focus:border-primary active:border-primary    py-3 `;
  const classNameLabel =
    error && touched
      ? "block mb-2 text-sm font-medium text-red-500 dark:text-red-500"
      : "mb-2.5 block text-sm font-medium text-black dark:text-white";
  return (
    <div className="">
      <label htmlFor={id} className={classNameLabel}>
        {label}
      </label>

      <div className=" relative z-20 bg-transparent ">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`relative z-20 ${error && touched ? "border-red-500 bg-red-50 text-sm  text-red-500 " : "border-gray-300 bg-transparent text-sm text-gray-500"}  w-full appearance-none rounded border-[1.5px]   px-5 py-3 outline-none transition focus:border-primary active:border-primary`}
        >
          {/* Placeholder option */}
          <option value="" disabled hidden className="text-sm">
            {placeholder}
          </option>
          {options.map(({ key, value }) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2"></span>
      </div>
      {error && touched ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium"></span> {error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputSelect;
