import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneInputComponent = () => {
  const [value, setValue] = useState("");
  return (
    <div className="">
      <label
        htmlFor="phone"
        className="text-md block font-medium text-gray-700"
      >
        Numéro de téléphone
      </label>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
        className="mt-2 w-full rounded-md border border-gray-300 p-2  focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Inclure le code international"
      />
    </div>
  );
};

export default PhoneInputComponent;
