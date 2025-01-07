import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
}) => {
  return (
    <div className={`mb-6 w-full px-4 md:w-1/2 ${className}`}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-700 "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 "
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: "",
  value: "",
  onChange: () => {},
  type: "text",
  className: "",
};

export default InputField;
