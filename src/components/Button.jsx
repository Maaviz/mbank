import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient outline-none font-poppins font-medium text-primary text-[18px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
