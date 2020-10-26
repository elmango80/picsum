import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = (props) => {
  const { label, name, as, value, error, onChange, onBlur } = props;

  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className={`input-group`}>
      <label
        className={`input-group-label ${
          focus || value ? "input-group-label--floating" : ""
        }`}
      >
        {label}
      </label>
      <input
        type={as === "password" ? (!showPassword ? as : "text") : as || "text"}
        name={name}
        autoComplete={name}
        className="form-control"
        onBlur={(evn) => {
          handleBlur();
          onBlur(evn);
        }}
        onFocus={handleFocus}
        onChange={onChange}
        value={value}
      />
      {as === "password" && (
        <div className="input-group-append mt-n2">
          <div className="input-group-text" onClick={handleClickShowPassword}>
            {!showPassword ? "mostrar" : "ocultar"}
          </div>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  as: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Input;
