import React from "react";
import "../styles/flickity.css";

const ProductIndustriesCard = ({ imageUrl, title, paragraph }) => {
  return (
    <div className="carousel-cells text-center w-[33.33%] flex justify-center flex-col">
      <img className="h-[40vh]" src={imageUrl} />

      <div className="xs:py-4 xs:px-8">
        <h6 className="font-bold xs:mb-2 text-lg">{title}</h6>
        <p className="xs:text-sm lg:mx-8">{paragraph}</p>
      </div>
    </div>
  );
};

export default ProductIndustriesCard;
