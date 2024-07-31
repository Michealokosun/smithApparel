import React from "react";
import "../styles/button.styles.scss";

const BUTTONTYPECLASS = {
  google_sign_in: "google-sign-in",
  inverted: "inverted",
};
export const Button = ({ children, buttontype, ...otherprops }) => {
  return (
    <button
      {...otherprops}
      className={`button-container  ${BUTTONTYPECLASS[buttontype]}`}
    >
      {children}
    </button>
  );
};
