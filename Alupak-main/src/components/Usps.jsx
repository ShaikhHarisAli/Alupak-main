import React from "react";

const Usps = ({ imageUrl, title, paragraph }) => {
  return (
    <div className="text-center">
      <div className="">
        <img
          className="m-auto xs:w-[20%] md:w-[25%] xsm:w-[15%]"
          src={imageUrl}
        />
      </div>
      <div className="xs:px-[3.2rem] md:px-3 lg:px-8 xsm:px-10">
        <h5 className="xs:text-xl lg:text-base xsm:text-lg my-3">{title}</h5>
        <p className="xs:text-sm md:text-xs xsm:text-sm text-[#d4d4d8]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Usps;
