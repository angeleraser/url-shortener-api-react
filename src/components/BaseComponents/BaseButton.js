import React from "react";
import "../../css/BaseButton.css";
const BaseButton = ({ label, type, classes }) => {
  return (
    <button
      type={type}
      className={`base-button font-bold flex items-center justify-center w-full ${classes}`}>
      {label}
    </button>
  );
};

export default BaseButton;
