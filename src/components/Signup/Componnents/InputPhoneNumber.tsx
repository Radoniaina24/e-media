import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function InputPhoneNumber({
  label,
  value,
  onChange,
  error,
  touched,
  name,
}: {
  name: string;
  label: string;
  value: string;
  onChange: any;
  error: any;
  touched: any;
}) {
  return (
    <div className="">
      <label
        htmlFor="phone"
        className={`mb-2.5 block text-sm font-medium  ${error && touched ? "text-red-500" : "text-gray-700"}`}
      >
        {label}
      </label>
      <PhoneInput
        international
        defaultCountry="MG"
        value={value}
        onChange={() => onChange(name)}
        className={`text-dark focus:border-indigo-500 ${error && touched ? "errorPhone" : ""} focus:ring-indigo-500`}
        placeholder="Inclure le code international"
      />
      {error && touched ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium"></span> {error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputPhoneNumber;
