import React from "react";

const ButtonFilled = ({
  type,
  btnName,
  onClick,
  className,
  isDisabled,
  bgColor,
  hoverBgColor,
  borderColor,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      className={`${bgColor ? bgColor : "bg-sky-500"} border border-solid ${
        borderColor ? borderColor : "border-sky-500"
      } duration-500 font-[Poppins] py-2 px-4 text-white rounded ${
        hoverBgColor ? hoverBgColor : "hover:bg-sky-400"
      }  ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {btnName}
    </button>
  );
};

export default ButtonFilled;
