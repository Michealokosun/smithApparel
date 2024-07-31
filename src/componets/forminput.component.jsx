import React from "react";
import "../styles/form-input.styles.scss";

export const Forminput = ({ label, ...otheroptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...otheroptions} />

      {label && (
        <label
          className={`${
            otheroptions.value !== "" ? "shrink" : ""
          }  form-input-label`}
          htmlFor={label}
        >
          {label}
        </label>
      )}
    </div>
  );
};
