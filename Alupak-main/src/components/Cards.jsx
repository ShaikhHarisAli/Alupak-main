import React from "react";
import "../styles/banner.css";

const Cards = ({ imageUrl, title, paragraph }) => {
  return (
    <div className="text-center overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="t4s-eff-border-run">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover hover:scale-110 transition duration-500"
          />
        </div>
      </div>
      <div className="xs:py-4 xs:px-8 md:py-2 md:px-2 lg:px-4 md:pt-2 xm:py-4 xm:px-8 xm:pt-8">
        <h6 className="font-bold xs:mb-2 text-lg md:mb-2 xm:mb-4">{title}</h6>
        <p className="xs:text-[13px] ssx:text-sm md:text-xs xm:text-sm">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Cards;
