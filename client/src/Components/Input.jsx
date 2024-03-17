import React from "react";

const Input = ({ label, type, placeholder, onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor={label}>{label} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
