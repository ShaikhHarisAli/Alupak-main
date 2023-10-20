import React from "react";

const ButtonBlack = ({ value, onClick }) => {
  return (
    <button
      onClick={(event) => onClick(event)}
      className=" bg-[#393937] text-white rounded-full font-bold md:text-xs leading-5 lg:px-[1.6rem] lg:py-[.6rem] lg:pb-[.5rem] md:px-[20px] md:py-[8px] sx:px-[20px] sx:py-[7px] sx:text-xs"
    >
      <span> {value}</span>
    </button>
  );
};

export default ButtonBlack;
