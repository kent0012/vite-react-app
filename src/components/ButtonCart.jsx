import React from "react";

const ButtonCart = ({ btnName, onClick, className, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-sky-500 border border-solid  text-sm border-sky-500 duration-500 font-[Poppins] py-1 px-3 text-white rounded hover:bg-sky-400  ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {btnName}
    </button>
  );
};

export default ButtonCart;
