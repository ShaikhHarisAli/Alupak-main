import React from "react";
import {
  ProductsIndustiresCarousel,
  ButtonBlack,
  ProductsIndustiresCarouselMob,
} from "../components/index";

const ProductIndustries = () => {
  return (
    <div className="xs:mx-2 md:mx-20 lg:mt-[-5rem]">
      <h1 className="fontBoldAlupak xs:text-[2rem] md:text-[2.5rem] xs:mb-2 lg:mb-[-4rem] font-black text-center">
        Industries We Serve
      </h1>
      <div className="xs:hidden md:block">
        <ProductsIndustiresCarousel />
      </div>
      <div className="xs:block md:hidden">
        <ProductsIndustiresCarouselMob />
      </div>

      <div className="text-center xs:mt-12 md:mt-[-2rem] mb-8">
        <ButtonBlack value={"Request Quote"} />
      </div>
    </div>
  );
};

export default ProductIndustries;
