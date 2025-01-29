import React from "react";

const ButtonOutlined = ({ type, btnName, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-transparent border border-solid border-sky-500 duration-500 font-[Poppins] py-2 px-4 text-white rounded hover:bg-sky-400 cursor-pointer"
    >
      {btnName}
    </button>
  );
};

export default ButtonOutlined;
