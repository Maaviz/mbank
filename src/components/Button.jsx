import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient outline-none font-poppins font-medium text-primary text-[18px] ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
