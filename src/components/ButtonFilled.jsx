import React from "react";

const ButtonFilled = ({ type, btnName, onClick, className, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      className={`bg-sky-500 border border-solid border-sky-500 duration-500 font-[Poppins] py-2 px-4 text-white rounded hover:bg-sky-400  ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {btnName}
    </button>
  );
};

export default ButtonFilled;
